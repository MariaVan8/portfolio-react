import "./Skills.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import Cloud from "../Cloud/Cloud";
import reactIcon from "../../assets/icons/react.png";
import angular from "../../assets/icons/angular.png";
import net from "../../assets/icons/nett.png";
import DatabaseBox from "../DatabaseBox/DatabaseBox";

function Skills() {
	return (
		<>
			<div className="skills">
				<div className="spacer_top">
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
							title={"React"}
						/>
						<CircularProgressBar
							percentage={65}
							color="#a536cf"
							icon={net}
							title={".NET"}
						/>
						<CircularProgressBar
							percentage={90}
							color="#a536cf"
							icon={angular}
							title={"Angular"}
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
