class AddEmailToMashes < ActiveRecord::Migration
  def change
    add_column :mashes, :email, :string
    add_column :party_mashes, :email, :string
  end
end
