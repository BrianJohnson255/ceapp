Rails.application.routes.draw do
	post 'user/create', to: 'users#create'
	get 'user/:id', to: 'users#show'

	post 'project/create', to: 'projects#create'
	get 'project/:id', to: 'projects#show'

	post 'login', to: 'sessions#login'

	get 'search/users', to: 'search#users'
	get 'search/projects', to: 'search#projects'
end
