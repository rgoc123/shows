class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :borough, null: false
      t.string :neighborhood, null: false
      t.string :type
      t.string :phone
      t.string :website

      t.timestamps
    end
  end
end
