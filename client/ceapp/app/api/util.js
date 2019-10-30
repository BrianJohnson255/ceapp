import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

const apiIp = process.env['API_IP'];
const apiPort = process.env['API_PORT'];

const apiRootUrl = `http://${apiIp}:${apiPort}`;

function apiRequest(method, path, params = null) {
	let resStatus;
	return fetch(apiRootUrl + path, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: params !== null ? snakecaseKeys(params) : null,
	})
	.then(r => {
		resStatus = r.status;
		return r.json();
	})
	.then(json => (
		{ data: camelcaseKeys(json), status: resStatus }
	));
}

function apiGetRequest(path) {
	return apiRequest('GET', path);
}

function apiPostRequest(path, params) {
	return apiRequest('POST', path, params);
}

export { apiPostRequest, apiGetRequest };
