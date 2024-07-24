import React, { useState } from "react";
import "./Contact.scss";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";

function Contact() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleOutsideClick = (event) => {
		if (event.target.id === "myModal") {
			closeModal();
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		fetch("http://localhost:3000/api/send-email", {
			method: "POST",
			body: JSON.stringify({
				name: formData.get("name"),
				email: formData.get("email"),
				message: formData.get("message"),
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				alert("Email sent successfully!");
				closeModal();
			})
			.catch((error) => {
				console.error("Error", error);
				alert("Failed to send email.");
			});
	};

	return (
		<>
			<section
				className="contact_container"
				id="contact">
				<section className="contact_top">
					<div className="contact_box">
						<div className="text-layer">
							<p className="first-layer">Contact me</p>
							<div className="second-layer">
								<div className="second-layer_text">Let's talk about</div>
								<div className="second-layer_text">
									your<span className="accent"> new project</span>.
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="contact">
					<div className="contact_box">
						<button
							className="modal_btn"
							onClick={openModal}>
							Contact me
						</button>
						{isModalOpen && (
							<div
								id="myModal"
								className="modal"
								onClick={handleOutsideClick}>
								<div className="modal-content">
									<span
										className="close"
										onClick={closeModal}>
										&times;
									</span>
									<form
										id="contactForm"
										onSubmit={handleSubmit}>
										<p>
											Feel free to contact me for any inquiries or projects. I
											am always happy to connect!
										</p>
										<label
											className="modal_text"
											htmlFor="name">
											Name:
										</label>
										<input
											type="text"
											name="name"
											required
										/>
										<label
											className="modal_text"
											htmlFor="name">
											Email:
										</label>
										<input
											type="email"
											name="email"
											required
										/>
										<label
											htmlFor="message"
											className="modal_text">
											Message:
										</label>
										<textarea
											id="message"
											name="message"
											required></textarea>
										<button
											type="submit"
											className="modal_btn">
											Submit
										</button>
									</form>
								</div>
							</div>
						)}
					</div>
					<div className="contact_socials">
						<p>Or follow me :</p>
						<div className="logos">
							<a
								href="https://www.linkedin.com/in/maria-revelo/"
								target="_blank">
								<img
									src={linkedin}
									alt="linkedin"
								/>
							</a>
							<a
								href="https://github.com/MariaVan8"
								target="_blank">
								<img
									src={github}
									alt="github"
								/>
							</a>
						</div>
					</div>
				</section>
				<div className="spacer">
					<div className="spacer-line"></div>
				</div>
			</section>
		</>
	);
}

export default Contact;
