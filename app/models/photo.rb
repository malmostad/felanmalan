# frozen_string_literal: true

class Photo < ApplicationRecord
  before_create do
    self.uuid = SecureRandom.uuid
  end
end
