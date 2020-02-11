# frozen_string_literal: true

class RemoveStatusFromReport < ActiveRecord::Migration[5.2]
  def change
    remove_column :reports, :status, :issue_status
  end
end
