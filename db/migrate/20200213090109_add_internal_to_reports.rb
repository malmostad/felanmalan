class AddInternalToReports < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :internal, :bool
  end
end
