class Venue < ApplicationRecord

  validates :name, :address, :city, :state, :zip, :borough, :neighborhood, presence: true

end
