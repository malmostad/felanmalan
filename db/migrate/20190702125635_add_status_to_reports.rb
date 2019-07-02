# frozen_string_literal: true

class AddStatusToReports < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :status, :integer
  end
end
