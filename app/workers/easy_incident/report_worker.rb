# frozen_string_literal: true

module EasyIncident
  class ReportWorker
    include Sidekiq::Worker

    def perform(report_id)
      report = Report.find(report_id)
      if report.photos.all? { |p| !p.external_id.nil? }
        report.external_id = EasyIncidentService.create(report)
        report.save!
      else
        ReportWorker.perform_in(4.second, report_id)
      end
    end
  end
end
