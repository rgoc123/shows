# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.


ActiveRecord::Schema.define(version: 20180322054654) do

ActiveRecord::Schema.define(version: 20180221210618) do


  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "shows", force: :cascade do |t|
    t.string "artist", null: false
    t.string "genre", null: false
    t.string "date", null: false
    t.string "venue", null: false
    t.integer "venue_id", null: false

    t.datetime "start_time"
    t.datetime "end_time"

    t.string "start_time"
    t.string "end_time"

    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "zip_code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "venues", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "borough", null: false
    t.string "neighborhood", null: false
    t.string "category"
    t.string "phone"
    t.string "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false

    t.float "lat"
    t.float "long"


  end

end
