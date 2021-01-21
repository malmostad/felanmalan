class AddExternalIdToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :external_id, :string
  end
end
