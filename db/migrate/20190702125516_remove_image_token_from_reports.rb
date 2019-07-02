class RemoveImageTokenFromReports < ActiveRecord::Migration[5.2]
  def change
    remove_column :reports, :image_token, :string
  end
end
