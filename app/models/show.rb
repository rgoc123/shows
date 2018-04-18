class Show < ApplicationRecord

  validates :artist, :genre, :date, :venue, :venue_id, presence: true


  belongs_to :venue

  def now?
    self.start_time.localtime <= Time.now && self.end_time.localtime > Time.now
  end



end
