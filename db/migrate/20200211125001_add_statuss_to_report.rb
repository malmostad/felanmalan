class AddStatussToReport < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :statuss, :string
  end
end
