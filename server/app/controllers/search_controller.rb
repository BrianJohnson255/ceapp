class SearchController < ApplicationController

	def users
		page = request.query_parameters.fetch("page", 1).to_i
		size = request.query_parameters.fetch("size", 10).to_i

		search_text = request.query_parameters.fetch('q', '')
		query = search_fields(User, [:first_name, :last_name], search_text)

		p, @users = pagy(query, items: size, page: page)
		@num_pages = p.pages
	end

	def projects
		page = request.query_parameters.fetch("page", 1).to_i
		size = request.query_parameters.fetch("size", 10).to_i

		search_text = request.query_parameters.fetch('q', '')
		query = search_fields(Project, [:title, :description], search_text)

		p, @projects = pagy(query, items: size, page: page)
		@num_pages = p.pages
	end

	private

	def search_fields(klass, fields, search_text)
		table = klass.arel_table

		queries = search_text.split.map do |word|
			fields.map { |f| field_contains(f, word, table) }.reduce(&:or)
		end

		queries.reduce(klass.all, &:where)
	end

	def field_contains(field, pattern, arel_table)
		arel_table[field].matches("%#{pattern}%")
	end

end
