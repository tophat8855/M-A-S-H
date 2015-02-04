class PartyMashesTable < ActiveRecord::Migration
  def change
    remove_column :mashes, :party_id, :integer

    create_table :party_mashes do |t|
      t.string :home
      t.string :spouse
      t.integer :kids
      t.string :vehicle
      t.integer :party_id
      t.string :guest

      t.timestamps
    end
  end
end
