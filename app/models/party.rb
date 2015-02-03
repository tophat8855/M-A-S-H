class Party < ActiveRecord::Base
  belongs_to :user
  has_many :guests
  has_many :mashes, through: :guests
  
end
