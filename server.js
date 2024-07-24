import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(bodyParser.json());

// Configure CORS to allow requests from your React app's origin
app.use(
	cors({
		origin: "http://localhost:5173", // Replace with your React app's origin
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true,
		optionsSuccessStatus: 204,
	})
);

app.post("/api/send-email", (req, res) => {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_USER,
		subject: `New contact form submission from ${name}`,
		text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
	};

	transporter.sendMail(mailOptions, (error) => {
		if (error) {
			return res.status(500).json({ error: error.toString() });
		}
		res.status(200).json({ message: `Email sent succesfully!` });
	});
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS);
