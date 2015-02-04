class PartiesHaveManyMashes < ActiveRecord::Migration
  def change
    drop_table :guests
    add_column :mashes, :party_id, :integer    
  end
end
