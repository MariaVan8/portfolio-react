import "./Skills.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

function Skills() {
	return (
		<>
			<div className="skills">
				<div className="spacer">
					<div className="spacer-line"></div>
				</div>
				<div className="skills-container">
					<div className="skills-title">Skills</div>
					<div className="skills-title">and</div>
					<div className="skills-title accent">Tools</div>
					<p>
						I bridge front-end creativity with back-end logic, enabling engaging
						and
						<span className="highlight"> efficient platforms.</span>
					</p>
					<div className="skills-subtitle">Languages</div>
					<div className="languages">
						<ProgressBar />
					</div>
					<div className="skills-subtitle">Frameworks</div>
					<div className="circle-container">
						<CircularProgressBar
							percentage={70}
							color="#a536cf"
						/>
						<CircularProgressBar
							percentage={75}
							color="#a536cf"
						/>
						<CircularProgressBar
							percentage={85}
							color="#a536cf"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Skills;
