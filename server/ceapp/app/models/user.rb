class User < ApplicationRecord
	has_many :project_members
	has_many :projects, through: :project_members, source: :project

	has_secure_password

	# TODO: email regex or something?
	validates :email, presence: true, uniqueness: true

	validates :first_name, presence: true
	validates :last_name, presence: true
end
