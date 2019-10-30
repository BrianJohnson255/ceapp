Rails.application.routes.draw do
	post 'user/create'
	get 'user/:id', to: 'user#show'

	post 'login', to: 'session#login'
end
