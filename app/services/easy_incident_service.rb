# frozen_string_literal: true

class EasyIncidentError < StandardError; end
class EasyIncidentNotFoundError < EasyIncidentError; end
class EasyIncidentUploadError < EasyIncidentError; end
class EasyIncidentCreationFailureError < EasyIncidentError; end

class EasyIncidentService
  EASY_INCIDENT_BASE_URL = Rails.configuration.easy_incident['base_url']
  EASY_INCIDENT_API_SECRET = Rails.application.credentials.easy_incident_api_secret
  SMS = 1
  EMAIL = 2
  STATUS_TRANSLATION = {
    'Ej Registrerat' => 'registered',
    'Registrerat' => 'reviewed',
    'Pågående' => 'ongoing',
    'Vidarebefordrat' => 'forwarded',
    'Åtgärdat' => 'fixed',
    'Avslutat' => 'rejected'
  }.freeze

  def self.create(report)
    body = build_payload(report)
    post_issue(body)
  end

  def self.upload(photo)
    conn = ::Faraday.new(url: EASY_INCIDENT_BASE_URL) do |faraday|
      faraday.request :multipart
      faraday.adapter :net_http
    end

    response = conn.post do |req|
      req.url 'upload'
      req.headers['Content-Type'] = 'multipart/form-data'
      req.headers['ApiKey'] = EASY_INCIDENT_API_SECRET

      payload = Faraday::UploadIO.new(StringIO.new(photo.data),
                                      photo.mime_type,
                                      photo.filename)
      req.body = { 'UploadedImage' => payload }
    end

    raise EasyIncidentUploadError, response.body.to_s unless response.success?

    temp_id = JSON.parse(response.body)['tempId']

    unless temp_id.present?
      raise EasyIncidentUploadError,
            response.body.to_s
    end

    temp_id
  end

  def self.to_grid(longitude:, latitude:)
    grid = SwedishGrid.new(:sweref991330).geodetic_to_grid(latitude, longitude)
    northing = grid[0].round.to_f.to_s
    easting = grid[1].round.to_f.to_s
    { northing: northing, easting: easting }
  end

  def self.issue_status(issue_id)
    conn = Faraday.new(url: EASY_INCIDENT_BASE_URL + '/arende')
    response = conn.get issue_id.to_s do |req|
      req.headers['ApiKey'] = EASY_INCIDENT_API_SECRET
    end

    begin
      status = JSON.parse(response.body)['IssueStatus']
    rescue JSON::ParserError
      raise EasyIncidentNotFoundError, response.body if response.body == 'ID does not exist.'

      raise EasyIncidentError, response.body
    end

    translated = STATUS_TRANSLATION[status]
    Raven.capture_message("Unrecognized EasyIncident Status #{status}") unless translated
    translated
  end

  def self.post_issue(body)
    conn = Faraday.new(url: EASY_INCIDENT_BASE_URL)
    response = conn.post do |req|
      req.url 'arende'
      req.headers['Content-Type'] = 'application/json'
      req.headers['ApiKey'] = EASY_INCIDENT_API_SECRET

      req.body = body
    end

    unless response.success?
      raise EasyIncidentCreationFailureError,
            response.body.to_s
    end

    issue_id = JSON.parse(response.body)['IssueId']

    unless issue_id.present?
      raise EasyIncidentCreationFailureError,
            response.body.to_s
    end

    issue_id
  end

  def self.build_payload(report)
    coordinates = { latitude: report.latitude, longitude: report.longitude }
    sweref991330 = to_grid(coordinates)
    photo_ids = report.photos.map(&:external_id)

    {
      'IssueRegistrator' => report.name,
      'IssueDescription' => report.description,
      'IssueEasting' => sweref991330[:easting],
      'IssueNorthing' => sweref991330[:northing],
      'IssueDocuments' => photo_ids,
      'IssueRegisterContactEmail' => report.email,
      'IssueRegisterContactPhone' => report.phone
    }.tap do |h|
      type =
        if report.phone.present?
          SMS
        elsif report.email.present?
          EMAIL
        end

      h['IssueRegistratorFeedbackType'] = type if report.enable_tracking
    end.to_json
  end

  private_class_method :to_grid, :post_issue, :build_payload
end
