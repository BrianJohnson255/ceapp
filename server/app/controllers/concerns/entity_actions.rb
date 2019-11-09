module EntityActions

	def try_save(entity)
		if !entity.save
			@errors = entity.errors.messages
			render 'shared/error', status: :bad_request
		end
	end

	def try_show(entity)
		if entity.nil?
			@msg = "Entity not found"
			render 'shared/error', status: :not_found
		end
	end

end
