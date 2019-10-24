class AddExternalIdToReports < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :external_id, :string
  end
end
