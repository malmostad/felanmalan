# frozen_string_literal: true

class AddAttachementIdsToReport < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :attachment_ids, :string, array: true, default: []
  end
end
