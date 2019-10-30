class SessionController < ApplicationController

	def login
		user = User.find_by(email: params[:user][:email])
		@success = !!user&.authenticate(params[:user][:password])
		@auth_token = @success ? user.auth_token : nil
	end

end
