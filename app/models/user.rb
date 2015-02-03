class User < ActiveRecord::Base
  has_secure_password
  has_many :parties
  has_many :guests, through: :parties
  validates :email, presence: true, uniqueness: true, confirmation: true
  has_many :mashes
end
