# frozen_string_literal: true

class ChangeLongitudeToBeFloatInReports < ActiveRecord::Migration[5.2]
  def change
    change_column :reports, :longitude, :float, using: 'longitude::double precision'
  end
end
