class Project < ApplicationRecord
	has_many :project_members
	has_many :members, through: :project_members, source: :user
end
