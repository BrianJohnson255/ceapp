class UserController < ApplicationController
	# before_action :authenticate_user, only: [...]

	def create
		@user = User.new(user_params)
		if !@user.save
			@errors = @user.errors.messages
			render 'shared/error', status: :bad_request
		end
	end

	def show
		@user = User.find_by_id(params[:id])
		if @user.nil?
			@msg = "User not found"
			render 'shared/error', status: :not_found
		end
	end

	private

	def user_params
		params.require(:user).permit(:email, :first_name, :last_name, :password)
	end
end
