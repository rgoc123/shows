class Show < ApplicationRecord

  validates :artist, :genre, :date, :venue, :venue_id, presence: true

  belongs_to :venue

  def self.meets_date
    self.where("date >= ?", Date.today)
  end

end
