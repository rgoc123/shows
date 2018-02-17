class ChangeVenueColumnType < ActiveRecord::Migration[5.1]
  def change
    rename_column :venues, :type, :category
  end
end
