class CreateShows < ActiveRecord::Migration[5.1]
  def change
    create_table :shows do |t|
      t.string :artist, null: false
      t.string :genre, null: false
      t.string :date, null: false
      t.string :venue, null: false
      t.integer :venue_id, null: false
      t.string :start_time
      t.string :end_time

      t.timestamps
    end
  end
end
