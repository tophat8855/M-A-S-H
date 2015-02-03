class MashesBelongToUsers < ActiveRecord::Migration
  def change
    add_column :mashes, :user_id, :integer
  end
end
