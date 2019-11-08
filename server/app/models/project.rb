class Project < ApplicationRecord
	has_many :project_members
	has_many :members, through: :project_members, source: :user

	belongs_to :creator, class_name: 'User', foreign_key: :user_id

	validates :title, presence: true
	validates :description, presence: true
end
