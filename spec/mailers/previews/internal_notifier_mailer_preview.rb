# frozen_string_literal: true

# Preview all emails at http://localhost:3000/rails/mailers/internal_notifier_mailer
class InternalNotifierMailerPreview < ActionMailer::Preview
  def new_report
    InternalNotifierMailer.new_report(Report.last)
  end
end
