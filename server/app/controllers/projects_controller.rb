class ProjectsController < ApplicationController

	def create
		@project = User.new(user_params)
		try_save(@project)
	end

	def show
		@project = Project.find_by_id(params[:id])
		try_show(@project)
	end

end
