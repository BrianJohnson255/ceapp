Rails.application.routes.draw do
	post 'user/create', to: 'users#create'
	get 'user/:id', to: 'users#show'

	post 'login', to: 'sessions#login'
end
