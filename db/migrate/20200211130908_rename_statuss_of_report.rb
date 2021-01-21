# frozen_string_literal: true

class RenameStatussOfReport < ActiveRecord::Migration[5.2]
  def change
    rename_column :reports, :statuss, :status
  end
end
