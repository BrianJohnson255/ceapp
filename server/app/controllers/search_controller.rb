class SearchController < ApplicationController

	def users
		page = request.query_parameters.fetch("page", 1).to_i
		size = request.query_parameters.fetch("size", 10).to_i
		p, @users = pagy(User.all, items: size, page: page)
		@num_pages = p.pages
	end

	def projects
		page = request.query_parameters.fetch("page", 1).to_i
		size = request.query_parameters.fetch("size", 10).to_i
		p, @projects = pagy(Project.all, items: size, page: page)
		@num_pages = p.pages
	end

end
