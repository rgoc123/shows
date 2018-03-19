class AddLatLongToVenues < ActiveRecord::Migration[5.1]
  def change
    add_column :venues, :lat, :integer
    add_column :venues, :long, :integer
  end
end
