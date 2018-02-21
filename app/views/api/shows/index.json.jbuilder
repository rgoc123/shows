@show.each do |show|
  json.set! show.id do
    json.id show.id
    json.artist show.artist
    json.genre show.genre
    json.date show.date
    json.venue show.venue
    json.venue_id show.venue_id
    json.start_time show.start_time
    json.end_time show.end_time
  end
end
