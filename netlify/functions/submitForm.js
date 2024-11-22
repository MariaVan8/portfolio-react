require("dotenv").config();

// Import SendGrid library
const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Log the status of the API key to verify it's loaded
console.log(
	"SendGrid API Key:",
	process.env.SENDGRID_API_KEY ? "Loaded" : "Not loaded"
);

exports.handler = async (event) => {
	// Check for POST request
	if (event.httpMethod !== "OPTIONS") {
		return {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "https://mariarevelo.com", // Replace with your frontend domain
				"Access-Control-Allow-Headers": "Content-Type",
				"Access-Control-Allow-mETHODs": "POST,OPTIONS",
			},
			body: "OK",
		};
	}

	// Parse the incoming form data
	const { name, email, message } = JSON.parse(event.body);

	// Define the email content
	const emailContent = {
		to: process.env.RECEIVING_EMAIL, // Your receiving email from env
		from: process.env.SENDER_EMAIL, // Your verified sender email
		subject: `New Message from ${name}`,
		text: `Email: ${email}\nMessage:\n${message}`,
	};

	try {
		// Send the email
		await sendgrid.send(emailContent);

		return {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "https://mariarevelo.com", // Frontend domain
				"Access-Control-Allow-Headers": "Content-Type",
			},
			body: JSON.stringify({ message: "Message sent successfully!" }),
		};
	} catch (error) {
		console.error("Error sending message:", error);

		return {
			statusCode: 500,
			headers: {
				"Access-Control-Allow-Origin": "https://mariarevelo.com", // Frontend domain
				"Access-Control-Allow-Headers": "Content-Type",
			},
			body: JSON.stringify({ error: "Failed to send message." }),
		};
	}
};
