class User < ActiveRecord::Base
  has_secure_password
  has_many :parties
  has_many :party_mashes, through: :parties
  has_many :mashes
  validates :email, presence: true, uniqueness: true, confirmation: true
end
