class GuestTable < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.belongs_to :party
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
