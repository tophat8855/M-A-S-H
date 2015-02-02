class PremashTable < ActiveRecord::Migration
  def change
    create_table :premashes do |t|
      t.string :spouse1
      t.string :spouse2
      t.string :spouse3
      t.string :spouse4

      t.integer :kids1
      t.integer :kids2
      t.integer :kids3
      t.integer :kids4

      t.string :vehicle1
      t.string :vehicle2
      t.string :vehicle3
      t.string :vehicle4

      t.timestamps
    end
  end
end
