// Edit `apiHost` and `apiPort` to your needs.
// Likely, you'll simply want to set `apiHost` to your internal ip address.
const apiHost = "localhost";
const apiPort = "3000";

const apiUrl = `http://${apiHost}:${apiPort}`;

const ENV = {
	apiUrl,
};

export default ENV;
