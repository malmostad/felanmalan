# frozen_string_literal: true

class AddForeignKeyToReport < ActiveRecord::Migration[5.2]
  def change
    add_reference :photos, :report, index: true
  end
end
