# frozen_string_literal: true

module EasyIncident
  class ImageWorker
    include Sidekiq::Worker

    def perform(image_id)
      photo = Photo.find(image_id)
      photo.external_id = EasyIncidentService.upload(photo)
      photo.save!
    end
  end
end
