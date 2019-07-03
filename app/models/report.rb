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
end
