# frozen_string_literal: true

desc 'Sync Issue status with EasyIncident'
task sync_status: :environment do
  Report.where(
    "external_id IS NOT NULL AND status NOT IN ('rejected','fixed')"
  ).find_each do |r|
    easy_incident_status = EasyIncidentService
                           .issue_status(r.external_id)
    unless r.status == easy_incident_status
      r.update(status: easy_incident_status)
    end
  end
end
