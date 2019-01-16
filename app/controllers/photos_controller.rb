# frozen_string_literal: true

class PhotosController < ApiController
  # before_action :set_photo, only: %i[show update destroy]

  # GET /photos/1
  # def show
  #   render json: @photo
  # end

  # POST /photos
  def create
    @photo = Photo.new(data: photo_params.read, mime_type: photo_params.content_type)
    @photo.save
    render json: { id: @photo.uuid }, status: :created, location: @photo
    # else
    #   render json: @photo.errors, status: :unprocessable_entity
    # end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  # def set_photo
  #   @photo = Photo.find(params[:id])
  # end

  # Only allow a trusted parameter "white list" through.
  def photo_params
    params.require(:file)
  end
end
