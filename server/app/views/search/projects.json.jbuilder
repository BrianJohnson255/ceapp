json.projects @projects do |project|
	json.partial! project
end

json.num_pages @num_pages
