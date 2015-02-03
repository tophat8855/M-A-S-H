class DropPresmashesTable < ActiveRecord::Migration
  def change
    drop_table :premashes
  end
end
