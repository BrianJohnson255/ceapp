class ApplicationController < ActionController::API
	include Authenticate
	include EntityActions
	include Pagy::Backend
end
