class ProjectsController < ApplicationController
	before_action :authenticate_user, only: [:create]

	def create
		@project = Project.new(project_params)
		@project.creator = current_user
		try_save(@project)
	end

	def show
		@project = Project.find_by_id(params[:id])
		try_show(@project)
	end

	private

	def project_params
		params.require(:project).permit(:title, :description)
	end

end
