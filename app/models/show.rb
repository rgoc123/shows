class Show < ApplicationRecord

  validates :artist, :genre, :date, :venue, :venue_id, presence: true

<<<<<<< HEAD
  belongs_to :venue

  def now?
    self.start_time.localtime <= Time.now && self.end_time.localtime > Time.now
  end

=======
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
end
