// require("dotenv").config();

// // Import SendGrid library
// const sendgrid = require("@sendgrid/mail");
// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// // Log the status of the API key to verify it's loaded
// console.log(
// 	"SendGrid API Key Loaded:",
// 	process.env.SENDGRID_API_KEY ? "Yes" : "No"
// );
// console.log("Receiving Email:", process.env.RECEIVING_EMAIL);
// console.log("Sender Email:", process.env.SENDER_EMAIL);

// exports.handler = async (event) => {
// 	// Check for POST request
// 	if (event.httpMethod === "OPTIONS") {
// 		return {
// 			statusCode: 200,
// 			headers: {
// 				"Access-Control-Allow-Origin": "https://mariarevelo.com", // Replace with your frontend domain
// 				"Access-Control-Allow-Headers": "Content-Type",
// 				"Access-Control-Allow-Methods": "POST,OPTIONS",
// 			},
// 			body: "OK",
// 		};
// 	}

// 	if (event.httpMethod !== "POST") {
// 		return {
// 			statusCode: 405,
// 			headers: {
// 				"Access-Control-Allow-Origin": "https://mariarevelo.com", // Replace with your frontend domain
// 			},
// 			body: JSON.stringify({ error: "Method Not Allowed" }),
// 		};
// 	}

// 	console.log("Request Body:", event.body);
// 	// Parse the incoming form data
// 	const { name, email, message } = JSON.parse(event.body);

// 	if (!name || !email || !message) {
// 		return {
// 			statusCode: 400,
// 			headers: {
// 				"Access-Control-Allow-Origin": "https://mariarevelo.com",
// 			},
// 			body: JSON.stringify({ error: "Missing required fields" }),
// 		};
// 	}
// 	// Define the email content
// 	const emailContent = {
// 		to: process.env.RECEIVING_EMAIL, // Your receiving email from env
// 		from: process.env.SENDER_EMAIL, // Your verified sender email
// 		subject: `New Message from ${name}`,
// 		text: `Email: ${email}\nMessage:\n${message}`,
// 	};

// 	try {
// 		// Send the email
// 		await sendgrid.send(emailContent);

// 		return {
// 			statusCode: 200,
// 			headers: {
// 				"Access-Control-Allow-Origin": "https://mariarevelo.com", // Frontend domain
// 				"Access-Control-Allow-Headers": "Content-Type",
// 			},
// 			body: JSON.stringify({ message: "Message sent successfully!" }),
// 		};
// 	} catch (error) {
// 		console.error("Error sending message:", error);

// 		return {
// 			statusCode: 500,
// 			headers: {
// 				"Access-Control-Allow-Origin": "https://mariarevelo.com", // Frontend domain
// 				"Access-Control-Allow-Headers": "Content-Type",
// 			},
// 			body: JSON.stringify({ error: "Failed to send message." }),
// 		};
// 	}
// };
