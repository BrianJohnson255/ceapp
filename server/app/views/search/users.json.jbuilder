json.users @users do |user|
	json.partial! user
end

json.num_pages @num_pages
