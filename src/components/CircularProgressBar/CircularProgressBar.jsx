import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./CircularProgressBar.scss";

function CircularProgressBar({ percentage, color, icon, title }) {
	return (
		<div className="circle_container">
			<h3>{title}</h3>
			<div
				className="circle"
				style={{
					background: `conic-gradient(${color} ${
						percentage * 3.6
					}deg, #e6e6e6 0deg)`,
				}}>
				<div className="inner-circle">
					{icon && (
						<img
							src={icon}
							alt="icon"
							className="icon"
						/>
					)}
					<span className="percentage">{percentage}%</span>
				</div>
			</div>
		</div>
	);
}

CircularProgressBar.propTypes = {
	percentage: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	icon: PropTypes.string,
	title: PropTypes.string,
};

export default CircularProgressBar;
