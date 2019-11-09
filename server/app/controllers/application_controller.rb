class ApplicationController < ActionController::API
	include Authenticate
	include EntityActions
end
