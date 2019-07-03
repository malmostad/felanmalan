# frozen_string_literal: true

class Report < ApplicationRecord
  after_initialize :set_defaults, unless: :persisted?

  enum status: {
    registered: 'registered',
    reviewed: 'reviewed',
    ongoing: 'ongoing',
    forwarded: 'forwarded',
    fixed: 'fixed',
    rejected: 'rejected'
  }

  def set_defaults
    self.status ||= 'registered'
  end

  def to_api_response
    { id: id,
      description: description,
      latitude: latitude,
      longitude: longitude,
      images: images,
      status: I18n.t(status, scope: :report) }.to_json
  end
end
