import React from "react";
import "./SoftSkills.scss";

function SoftSkills() {
	return (
		<>
			<div className="soft_skills-background">
				<div className="soft_skills-title">Soft Skills</div>
				<div className="soft_skills-background-box">
					<div className="opacity-layer"></div>
					<div className="soft_skills">
						<div className="soft_skills-top">
							<div className="soft_skills-box">
								<h3>Communication</h3>
								<p>
									I believe in
									<span className="highlight"> open </span>conversations to
									build strong, collaborative relationships.
								</p>
							</div>
							<div className="soft_skills-box">
								<h3>Team Work</h3>
								<p>
									Reliable and <span className="highlight">adaptable</span>{" "}
									contributing positively to team dynamics
								</p>
							</div>
						</div>
						<div className="soft_skills-middle">
							<div className="line-container">
								<span className="soft_skills-circle"></span>
								<div className="line"></div>
							</div>
							<div className="line-container">
								<span className="soft_skills-circle"></span>
								<div className="line"></div>
							</div>
							<div className="line-container">
								<span className="soft_skills-circle"></span>
								<div className="line"></div>
								<span className="soft_skills-circle"></span>
							</div>
							{/* <div className="line-container">
								<span className="soft_skills-circle"></span>
								<div className="line"></div>
								<span className="soft_skills-circle"></span>
							</div> */}
						</div>
						<div className="soft_skills-bottom">
							<div className="soft_skills-box">
								<h3>Responsability</h3>
								<p>
									Committed and <span className="highlight">accountable</span>{" "}
									for delivering quality results.
								</p>
							</div>
							<div className="soft_skills-box">
								<h3>Empathy</h3>
								<p>
									I understand and value the{" "}
									<span className="highlight"> diverse </span>perspectives of my
									peers
								</p>
							</div>
							{/* <div className="soft_skills-box">
								<h3>Empathy</h3>
								<p>
									I genuinely understand and share others' feelings and
									perspectives.
								</p>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<div className="spacer">
				<div className="spacer-line"></div>
			</div>
		</>
	);
}

export default SoftSkills;
