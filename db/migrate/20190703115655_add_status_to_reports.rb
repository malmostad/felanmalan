# frozen_string_literal: true

class AddStatusToReports < ActiveRecord::Migration[5.2]
  def up
    execute <<-DDL
      CREATE TYPE issue_status AS ENUM (
        'registered','reviewed','ongoing','forwarded','fixed','rejected'
      );
    DDL

    add_column :reports, :status, :issue_status
  end

  def down
    drop_column :reports, :status
    execute 'DROP type issue_status;'
  end
end
