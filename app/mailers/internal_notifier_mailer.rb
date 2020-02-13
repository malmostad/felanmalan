# frozen_string_literal: true

class InternalNotifierMailer < ApplicationMailer
  EMAIL = 'timo.engelhardt@gmail.com'
  default from: 'info@malmociviclab.com'

  def new_report(report_id)
    @report = Report.find(report_id)
    @report.photos.each do |photo|
      attachments[photo.filename] = { mime_type: photo.mime_type,
                                      content: photo.data }
    end

    mail(to: EMAIL, subject: "New Report at #{@report.address}")
  end
end
