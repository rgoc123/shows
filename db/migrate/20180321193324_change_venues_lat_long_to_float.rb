class ChangeVenuesLatLongToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :venues, :lat, :float
    change_column :venues, :long, :float
  end
end
