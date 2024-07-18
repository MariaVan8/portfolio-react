import React from "react";
import "./Contact.scss";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";

function Contact() {
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
						<button>Contact me</button>
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
