import { apiGetRequest, apiPostRequest, setAuthToken } from './util';

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

async function login(user) {
	const res = await apiPostRequest('/login', { user });
	if (res.status === 200) {
		await setAuthToken(res.data.authToken);
	}
	return res;
}

export { createUser, getUser, login };
