import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

const apiIp = process.env['API_IP'];
const apiPort = process.env['API_PORT'];

const apiRootUrl = `http://${apiIp}:${apiPort}`;

function apiRequest(method, path, params = null) {
	return fetch(apiRootUrl + path, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: params !== null ? snakecaseKeys(params) : null,
	})
	.then(r => r.json())
	.then(camelcaseKeys);
}

function apiGetRequest(path) {
	return apiRequest('GET', path);
}

function apiPostRequest(path, params) {
	return apiRequest('POST', path, params);
}

export { apiPostRequest, apiGetRequest };
