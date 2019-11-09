json.extract! project, :id, :title, :description
json.creator do
	json.partial! project.creator
end
