# frozen_string_literal: true

class ChangeAllowContactToEnableTracking < ActiveRecord::Migration[5.2]
  def change
    rename_column :reports, :allow_contact, :enable_tracking
  end
end
