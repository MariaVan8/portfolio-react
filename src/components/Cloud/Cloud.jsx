import "./Cloud.scss";
import aws from "../../assets/icons/aws.png";
import docker from "../../assets/icons/docker.png";

function Cloud() {
	return (
		<>
			<div className="cloud">
				<div className="cloud_container">
					<img
						src={aws}
						alt="aws"
					/>
					<img
						src={docker}
						alt="awdockers"
					/>
				</div>
			</div>
		</>
	);
}

export default Cloud;
