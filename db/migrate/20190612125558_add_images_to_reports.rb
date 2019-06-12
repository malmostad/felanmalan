# frozen_string_literal: true

class AddImagesToReports < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :images, :string, array: true, default: []
  end
end
