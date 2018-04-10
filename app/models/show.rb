class Show < ApplicationRecord

  validates :artist, :genre, :date, :venue, :venue_id, presence: true

  belongs_to :venue

  def now?
    self.start_time.hour <= Time.now.utc.hour
    # && self.end_time.hour > Time.now.hour
  end

end
