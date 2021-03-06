import { apiGetRequest, apiPostRequest, setAuthToken, getAuthToken, deleteAuthToken } from './util';

// user fields:
//  - firstName
//  - lastName
//  - email
//  - password
// returns a user with all those fields, plus an id
async function createUser(user) {
	const res = apiPostRequest('/user/create', { user });
	if (res.status === 200) {
		await setAuthToken(res.data.authToken);
	}
	return res;
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

async function isLoggedIn() {
	return (await getAuthToken()) !== null;
}

function logout() {
	return deleteAuthToken();
}

export { createUser, getUser, login, isLoggedIn, logout };
