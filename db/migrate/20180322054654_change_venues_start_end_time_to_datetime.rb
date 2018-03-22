class ChangeVenuesStartEndTimeToDatetime < ActiveRecord::Migration[5.1]
  def change
    change_column :shows, :start_time, 'timestamptz using start_time::timestamptz'
    change_column :shows, :end_time, 'timestamptz using end_time::timestamptz'
  end
end
