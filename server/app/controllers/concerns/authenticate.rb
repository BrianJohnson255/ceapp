module Authenticate

	def current_user
		@current_user ||= User.find_by(auth_token: request.headers['Authorization'])
	end

	def authenticate_user
		if current_user.nil?
			@msg = "Unauthorized"
			render 'shared/error', status: :unauthorized
		end
	end

end
