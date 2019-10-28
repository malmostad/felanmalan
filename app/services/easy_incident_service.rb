# frozen_string_literal: true

class EasyIncidentService
  EASY_INCIDENT_BASE_URL = ENV['EASY_INCIDENT_BASE_URL']
  SMS = 1
  STATUS_TRANSLATION = {
    'Ej Registrerat' => 'registered',
    'Registrerat' => 'reviewed',
    'Pågående' => 'ongoing',
    'Vidarebefordrat' => 'forwarded',
    'Åtgärdat' => 'fixed',
    'Avslutat/avvisat senare behandling' => 'rejected'
  }.freeze

  def self.create(report)
    coordinates = { latitude: report.latitude, longitude: report.longitude }
    sweref991330 = to_grid(coordinates)
    photo_ids = report.photos.map(&:external_id)
    body = {
      'IssueRegistrator' => report.name,
      'IssueDescription' => report.description,
      'IssueEasting' => sweref991330[:easting],
      'IssueNorthing' => sweref991330[:northing],
      'IssueDocuments' => photo_ids,
      'IssueRegistratorFeedback' => report.phone
    }.tap { |h| h['IssueRegistratorFeedbackType'] = SMS if report.phone }
           .to_json

    report.external_id = post_issue(body)
    report.save!
    report.external_id
  end

  def self.upload(photo)
    conn = ::Faraday.new(url: EASY_INCIDENT_BASE_URL) do |faraday|
      faraday.request :multipart
      faraday.adapter :net_http
      faraday.response :json
    end

    response = conn.post do |req|
      req.url 'upload'
      req.headers['Content-Type'] = 'multipart/form-data'

      payload = Faraday::UploadIO.new(StringIO.new(photo.data),
                                      photo.mime_type,
                                      photo.filename)
      req.body = { 'UploadedImage' => payload }
    end
    response.body['tempId']
  end

  def self.to_grid(longitude:, latitude:)
    grid = SwedishGrid.new(:sweref991330).geodetic_to_grid(latitude, longitude)
    northing = grid[0].round.to_f.to_s
    easting = grid[1].round.to_f.to_s
    { northing: northing, easting: easting }
  end

  def self.issue_status(issue_id)
    conn = Faraday.new(url: EASY_INCIDENT_BASE_URL + '/arende')
    response = conn.get issue_id.to_s
    status = JSON.parse(response.body)['IssueStatus']
    STATUS_TRANSLATION[status]
  end

  def self.post_issue(body)
    conn = Faraday.new(url: EASY_INCIDENT_BASE_URL)
    response = conn.post do |req|
      req.url 'arende'
      req.headers['Content-Type'] = 'application/json'
      req.body = body
    end

    JSON.parse(response.body)['IssueId']
  end

  private_class_method :to_grid, :post_issue
end
