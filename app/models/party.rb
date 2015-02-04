class Party < ActiveRecord::Base
  belongs_to :user
  has_many :party_mashes
end
