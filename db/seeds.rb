# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Venue.destroy_all
a = Venue.create!(name: "La Pulperia", address: "1626 2nd Ave", city: "New York", state: "NY", zip: "10075", borough: "Manhattan", neighborhood: "Upper East Side", category: "Restaurant")
b = Venue.create!(name: "Session 73", address: "1359 1st Ave", city: "New York", state: "NY", zip: "10075", borough: "Manhattan", neighborhood: "Upper East Side", category: "Bar")
c = Venue.create!(name: "Five Mile Stone", address: "1640 2nd Ave", city: "New York", state: "NY", zip: "10075", borough: "Manhattan", neighborhood: "Upper East Side", category: "Bar")

Shows.destroy_all
