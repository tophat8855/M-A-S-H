class MashTable < ActiveRecord::Migration
  def change
    create_table :mashes do |t|
      t.string :home
      t.string :spouse
      t.integer :kids
      t.string :vehicle

      t.timestamps
    end
  end
end
