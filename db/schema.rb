# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150202193712) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "mashes", force: true do |t|
    t.string   "home"
    t.string   "spouse"
    t.integer  "kids"
    t.string   "vehicle"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "guest"
  end

  create_table "premashes", force: true do |t|
    t.string   "spouse1"
    t.string   "spouse2"
    t.string   "spouse3"
    t.string   "spouse4"
    t.integer  "kids1"
    t.integer  "kids2"
    t.integer  "kids3"
    t.integer  "kids4"
    t.string   "vehicle1"
    t.string   "vehicle2"
    t.string   "vehicle3"
    t.string   "vehicle4"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "guest"
  end

end
