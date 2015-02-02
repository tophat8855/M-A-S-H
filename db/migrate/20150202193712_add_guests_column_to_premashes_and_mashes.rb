class AddGuestsColumnToPremashesAndMashes < ActiveRecord::Migration
  def change
    add_column :mashes, :guest, :string
    add_column :premashes, :guest, :string
  end
end
