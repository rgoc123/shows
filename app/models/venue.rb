class Venue < ApplicationRecord

  validates :name, :address, :city, :state, :zip, :borough, :neighborhood, presence: true

<<<<<<< HEAD
  has_many :shows

=======
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
end
