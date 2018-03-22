# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Venue.destroy_all
a = Venue.create!(name: "La Pulperia", address: "1626 2nd Ave", city: "New York", state: "NY", zip: "10075", borough: "Manhattan", neighborhood: "Upper East Side", lat: 40.776653, long: -73.952328, category: "Restaurant")

b = Venue.create!(name: "Session 73", address: "1359 1st Ave", city: "New York", state: "NY", zip: "10075", borough: "Manhattan", neighborhood: "Upper East Side", lat: 40.768463, long: -73.955862, category: "Bar")

c = Venue.create!(name: "Five Mile Stone", address: "1640 2nd Ave", city: "New York", state: "NY", zip: "10075", borough: "Manhattan", neighborhood: "Upper East Side", lat: 40.777241, long: -73.951947, category: "Bar")

Show.destroy_all
Show.create!(artist: "Fall Out Boy", genre: "Emo", date: "1/1/2018", venue: a.name, venue_id: a.id, start_time: "02:00 AM", end_time: "07:00 AM")
Show.create!(artist: "Fall Out Boy", genre: "Emo", date: "2/15/2018", venue: b.name, venue_id: b.id, start_time: "02:00 AM", end_time: "07:00 AM")
Show.create!(artist: "Red Hot Chili Peppers", genre: "Rock", date: "3/17/2018", venue: c.name, venue_id: c.id, start_time: "12:00 PM", end_time: "05:00 PM")
Show.create!(artist: "Red Hot Chili Peppers", genre: "Rock", date: "4/20/2018", venue: a.name, venue_id: a.id, start_time: "12:00 PM", end_time: "05:00 PM")
Show.create!(artist: "Grouplove", genre: "Rock", date: "5/5/2018", venue: b.name, venue_id: b.id, start_time: "05:00 PM", end_time: "10:00 PM")
Show.create!(artist: "Grouplove", genre: "Rock", date: "7/5/2018", venue: c.name, venue_id: c.id, start_time: "05:00 PM", end_time: "10:00 PM")
