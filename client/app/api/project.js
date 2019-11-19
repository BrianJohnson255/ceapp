import { apiGetRequest, authenticatedApiPostRequest } from './util';

function createProject(project) {
	return authenticatedApiPostRequest('/project/create', { project });
}

function getProject(id) {
	return apiGetRequest(`/project/${id}`);
}

function searchProjects({ title, description }) {
	return apiGetRequest(`/search/projects?q=${title}+${description}`);
}

export { createProject, getProject, searchProjects };
