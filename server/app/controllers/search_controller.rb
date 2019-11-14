class SearchController < ApplicationController

	def users
		page = request.query_parameters.fetch("page", 1).to_i
		size = request.query_parameters.fetch("size", 10).to_i
		_, @users = pagy(User.all, items: size, page: page)
	end

	def projects
		page = request.query_parameters.fetch("page", 1).to_i
		size = request.query_parameters.fetch("size", 10).to_i
		_, @projects = pagy(Project.all, items: size, page: page)
	end

end
