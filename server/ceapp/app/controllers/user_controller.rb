class UserController < ApplicationController
	def create
		@user = User.new(user_params)
		if !@user.save
			p @user.errors
			@errors = @user.errors.messages
			render 'shared/form-errors.json'
		end
	end

	def show
		# TODO: Handle user not found
		@user = User.find(params[:id])
	end

	private

	def user_params
		params.require(:user).permit(:email, :first_name, :last_name, :password)
	end
end
