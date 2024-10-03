module.exports = {
	apps: [
		{
			name: "portfolio",
			script: "./server.js",
			env: {
				NODE_ENV: "development",
				EMAIL_USER: process.env.EMAIL_USER,
				EMAIL_PASS: process.env.EMAIL_PASS,
				REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
			},
			env_production: {
				NODE_ENV: "production",
				EMAIL_USER: process.env.EMAIL_USER,
				EMAIL_PASS: process.env.EMAIL_PASS,
				REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
			},
		},
	],
};
