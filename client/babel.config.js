module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		// plugins: ['transform-inline-environment-variables'],
		plugins: [],
		env: {
			production: {
				plugins: ['react-native-paper/babel'],
			},
		},
	};
};
