import "./Skills.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import Cloud from "../Cloud/Cloud";
import reactIcon from "../../assets/icons/react.png";
import angular from "../../assets/icons/angular.png";
import vue from "../../assets/icons/vue.png";
import DatabaseBox from "../DatabaseBox/DatabaseBox";
import SoftSkills from "../SoftSkills/SoftSkills";

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
					<ProgressBar />
					<div className="skills-subtitle">Frameworks</div>
					<div className="circle-container">
						<CircularProgressBar
							percentage={80}
							color="#a536cf"
							icon={reactIcon}
						/>
						<CircularProgressBar
							percentage={65}
							color="#a536cf"
							icon={angular}
						/>
						<CircularProgressBar
							percentage={90}
							color="#a536cf"
							icon={vue}
						/>
					</div>
					<div className="skills-subtitle">Databases</div>
					<DatabaseBox />
					<div className="skills-subtitle">Cloud Services</div>
					<Cloud />
				</div>
			</div>
		</>
	);
}

export default Skills;
