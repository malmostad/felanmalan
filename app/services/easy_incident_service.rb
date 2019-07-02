# frozen_string_literal: true

class EasyIncidentService
  def self.create(description: null, coordinates:)
    sweref991330 = to_grid(coordinates)
    body = {
      'IssueRegistrator' => 'MalmoCivicLab',
      'IssueDescription' => description,
      'IssueEasting' => sweref991330.easting,
      'IssueNorthing' => sweref991330.northing
    }.to_json
    post_issue(body)
  end

  # not working
  def self.upload
    conn = Faraday.new(url: 'http://fgkextern.test.malmo.se/api') do |faraday|
      faraday.request :multipart
      faraday.adapter :net_http
    end

    conn.post do |req|
      req.url 'upload'
      req.body = {
        file1: Faraday::UploadIO.new(Rails.root.join('img.png'), 'image/png')
      }.to_json
    end
  end

  def self.to_grid(longitude:, latitude:)
    grid = SwedishGrid.new(:sweref991330).geodetic_to_grid(latitude, longitude)
    northing = grid[0].round.to_f.to_s
    easting = grid[1].round.to_f.to_s
    { northing: northing, easting: easting }
  end

  def self.post_issue(body)
    conn = Faraday.new(url: 'http://fgkextern.test.malmo.se/api')
    response = conn.post do |req|
      req.url 'arende'
      req.headers['Content-Type'] = 'application/json'
      req.body = body
    end
    response.body
  end

  private_class_method :to_grid, :post_issue
end
