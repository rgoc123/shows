class Show < ApplicationRecord

  validates :artist, :genre, :date, :venue, :venue_id, presence: true

end
