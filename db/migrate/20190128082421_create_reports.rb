class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.string :image_token
      t.string :email
      t.string :description
      t.float :latitude
      t.string :longitude
      t.string :float

      t.timestamps
    end
  end
end
