module Authenticate

	def current_user
		token = request.headers['Authorization']
		if token.present?
			@current_user ||= User.find_by(auth_token: token)
		end
	end

	def authenticate_user
		if current_user.nil?
			@msg = "Unauthorized"
			render 'shared/error', status: :unauthorized
		end
	end

end
