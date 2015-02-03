class User < ActiveRecord::Base
  has_secure_password
  has_many :parties
  has_many :guests, through: :parties
  validates :email, prescence: true, uniqueness: true, confirmation: true
end
