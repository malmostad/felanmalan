class RemoveFloatFromReports < ActiveRecord::Migration[5.2]
  def change
    remove_column :reports, :float, :string
  end
end
