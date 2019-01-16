class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :uuid
      t.binary :data
      t.string :mime_type

      t.timestamps
    end
  end
end
