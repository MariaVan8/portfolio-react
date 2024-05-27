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
				<div className="box-content-sql">
					<div className="box-content">
						<div className="box-title">SQL</div>
					</div>
					<div className="box-content">
						<div className="box-content-bigger">
							<div className="box-content-big">
								<div className="box-content-subtitle">MySQL Workbench</div>
								<img
									src={workbench}
									alt="mysql workbench"
								/>
							</div>
							<div className="box-content-big">
								<div className="box-content-subtitle">Microsoft SQL Server</div>
								<img
									src={sqlserver}
									alt="mysql workbench"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="box-wrapper">
					<div className="box-content">
						<div className="box-content-subtitle">Postgres</div>
						<img
							src={postgres}
							alt="postgres"
						/>
					</div>
					<div className="box-wrapper-row">
						<div className="box-content">
							<div className="box-content-subtitle">Azure</div>
							<img
								src={azure}
								alt="mongo"
							/>
						</div>
						<div className="box-content">
							<div className="box-content-title">NoSQL</div>
							<div className="box-content-subtitle">MongoDB</div>
							<img
								src={mongo}
								alt="mongo"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DatabaseBox;
