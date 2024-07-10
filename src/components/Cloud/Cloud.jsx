import "./Cloud.scss";
import aws from "../../assets/icons/aws.png";
import docker from "../../assets/icons/docker.png";
import cloud from "../../assets/icons/cloud.png";
import azure from "../../assets/icons/azure.png";

function Cloud() {
	return (
		<>
			<div className="cloud">
				<div className="cloud_container">
					<img
						src={azure}
						alt="azure"
					/>
					<img
						src={aws}
						alt="aws"
					/>
					<img
						src={cloud}
						alt="cloud"
						// className="hidden"
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
