# frozen_string_literal: true

class AddPhoneNumberAndAllowContactToReports < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :phone, :string
    add_column :reports, :allow_contact, :bool
  end
end
