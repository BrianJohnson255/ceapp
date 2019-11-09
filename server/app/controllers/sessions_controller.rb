class SessionsController < ApplicationController

	def login
		user = User.find_by_email(params[:user][:email])
		if user&.authenticate(params[:user][:password])
			@auth_token = user.auth_token
		else
			@msg = 'Invalid password or email'
			render 'shared/error', status: :unauthorized
		end
	end

end
