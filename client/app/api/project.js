import { apiGetRequest, authenticatedApiPostRequest } from './util';

function createProject(project) {
	return authenticatedApiPostRequest('/project/create', { project });
}

function getProject(id) {
	return apiGetRequest(`/project/${id}`);
}

export { createProject, getProject };
