class RemoveFieldsFromReport < ActiveRecord::Migration[5.2]
  def change
    remove_column :reports, :images, :array
    remove_column :reports, :attachment_ids, :array
  end
end
