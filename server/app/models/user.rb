class User < ApplicationRecord
	has_many :project_members
	has_many :projects_memberships, through: :project_members, source: :project

	# has_many :project_membership_roles

	has_many :projects

	has_secure_password
	has_secure_token :auth_token

	# TODO: email regex or something?
	validates :email, presence: true, uniqueness: true

	validates :first_name, presence: true
	validates :last_name, presence: true
end
