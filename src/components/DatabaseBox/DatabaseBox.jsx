import React from "react";
import "./DatabaseBox.scss";
import mongo from "../../assets/icons/mongodb.png";
import workbench from "../../assets/icons/workbench.png";
import sqlserver from "../../assets/icons/microsoftsql.png";
import postgres from "../../assets/icons/postgres.png";
import azure from "../../assets/icons/azure.png";

function DatabaseBox() {
	return (
		<>
			<div className="box">
				<img
					src={azure}
					alt="azure"
				/>
				<img
					src={mongo}
					alt="mongo"
				/>
				<img
					src={workbench}
					alt="workbench"
				/>
				{/* <img
					src={sqlserver}
					alt="sqlserver"
				/> */}
				<img
					src={postgres}
					alt="postgres"
				/>
			</div>
		</>
	);
}

export default DatabaseBox;
