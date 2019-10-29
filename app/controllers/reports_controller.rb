# frozen_string_literal: true

class ReportsController < ApiController
  before_action :set_report, only: %i[show]

  # GET /reports
  # def index
  #   @reports = Report.all

  #   render json: @reports
  # end

  # GET /reports/1
  def show
    render json: @report.to_api_response
  end

  # POST /reports
  def create
    uuids = report_params['images'] || []
    photos = uuids.map do |uuid|
      Photo.find_by(uuid: uuid)
    end

    @report = Report.new(report_params.except('images'))
    @report.photos << photos
    @report.external_id = EasyIncidentService.create(@report)

    if @report.save
      render json: @report, status: :created, location: @report
    else
      render json: @report.errors, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /reports/1
  # def update
  #   if @report.update(report_params)
  #     render json: @report
  #   else
  #     render json: @report.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /reports/1
  # def destroy
  #   @report.destroy
  # end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_report
    @report = Report.find_by(external_id: params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def report_params
    params.require(:report).permit(
      :email,
      :phone,
      :name,
      :allow_contact,
      :address,
      :description,
      :latitude,
      :longitude,
      images: []
    )
  end
end
