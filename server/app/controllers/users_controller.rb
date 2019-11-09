class UsersController < ApplicationController
	def create
		@user = User.new(user_params)
		try_save(@user)
	end

	def show
		@user = User.find_by_id(params[:id])
		try_show(@user)
	end

	private

	def user_params
		params.require(:user).permit(:email, :first_name, :last_name, :password)
	end
end
