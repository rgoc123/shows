@venues.each do |venue|
  json.set! venue.id do
    json.id venue.id
    json.name venue.name
    json.address venue.address
    json.city venue.city
    json.state venue.state
    json.zip venue.zip
    json.borough venue.borough
    json.neighborhood venue.neighborhood
  end
end
