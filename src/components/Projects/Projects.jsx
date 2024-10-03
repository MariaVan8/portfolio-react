import "./Projects.scss";
import data from "../../data/projects.json";

function Projects() {
	const project = data;

	return (
		<section id="project-section">
			<section
				className="projects_top"
				id="projects">
				<div className="projects_box">
					<div className="text-layer">
						<p className="first-layer">Check out my work</p>
						<div className="second-layer">
							<div className="second-layer_text">Check out</div>
							<div className="second-layer_text">
								my<span className="accent"> work</span>.
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="projects">
				<div className="projects_container">
					{project.map((item) => {
						return (
							<div
								className="project"
								key={item.id}>
								<h2>{item.title}</h2>
								<div className="project_box">
									<div className="project_wrapper">
										<div className="project_image">
											<img
												src={item.image}
												alt={item.title}
											/>
										</div>
										<div className="description">{item.description}</div>
										<div className="stack">
											{Array.isArray(item.stack) &&
												item.stack.map((tech, index) => (
													<span
														key={index}
														className="tech">
														{tech}
													</span>
												))}
										</div>
										<div className="links">
											<a
												href={item.link}
												target="_blank">
												Live Website
											</a>
											<a
												href={item.source}
												target="_blank">
												Source code
											</a>
										</div>
									</div>
									<div className="details">
										<div className="details-wrapper">
											<h3>Challenges</h3>
											<p className="challenge">{item.challenge}</p>
										</div>
										<div className="details-wrapper">
											<h3>Solutions</h3>
											<p className="solution">{item.solution}</p>
										</div>
										<div className="details-wrapper">
											<h3>Learning Outcome</h3>
											<div className="outcome">
												{Array.isArray(item.learning) &&
													item.learning.map((learn, index) => (
														<span
															key={index}
															className="learn">
															{learn}
														</span>
													))}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<div className="spacer">
				<div className="spacer-line"></div>
			</div>
		</section>
	);
}

export default Projects;
