import { apiGetRequest, apiPostRequest } from './util';

// user fields:
//  - firstName
//  - lastName
//  - email
//  - password
// returns a user with all those fields, plus an id
function createUser(user) {
	return apiPostRequest('/user/create', { user });
}

function getUser(id) {
	return apiGetRequest(`/user/${id}`);
}

export { createUser, getUser };
