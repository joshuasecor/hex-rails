# Uses the bcrypt gem for aunthentication
require 'bcrypt'

class User < ActiveRecord::Base
	# This is a bcrpyt method
	has_secure_password
	validates_presence_of :password

	# When a new user is created, there email must original
	validates :email, uniqueness: true
	validates_presence_of :email
end
