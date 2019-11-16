import { AsyncStorage } from 'react-native';

import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

import ENV from '../env';

async function apiRequest({ method, path, headers = {}, params = null }) {
	const res = await fetch(ENV.apiUrl + path, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...headers,
		},
		body: params !== null ? JSON.stringify(snakecaseKeys(params)) : null,
	});
	const json = await res.json();
	return { data: camelcaseKeys(json), status: res.status };
}

function apiGetRequest(path) {
	return apiRequest({ method: 'GET', path });
}

function apiPostRequest(path, params) {
	return apiRequest({ method: 'POST', path, params });
}

async function authenticatedApiPostRequest(path, params) {
	const token = (await getAuthToken()) || '';
	return await apiRequest({ method: 'POST', path, params, headers: { Authorization: token } });
}

async function getAuthToken() {
	try {
		const token = await AsyncStorage.getItem('@authToken');
		return token;
	} catch(e) {
		// TODO: handle this...
	}
}

async function setAuthToken(token) {
	try {
		const res = await AsyncStorage.setItem('@authToken', token);
		return res;
	} catch(e) {
		// TODO: handle this...
	}
}


async function deleteAuthToken() {
	try {
		const res = await AsyncStorage.removeItem('@authToken');
		return res;
	} catch(e) {
		// TODO: handle this...
	}
}

export { apiPostRequest, apiGetRequest, authenticatedApiPostRequest, setAuthToken, getAuthToken, deleteAuthToken };
