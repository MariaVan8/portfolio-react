import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./CircularProgressBar.scss";

function CircularProgressBar({ percentage, color }) {
	return (
		<div className="circle-container">
			<div
				className="circle"
				style={{
					background: `conic-gradient(${color} ${
						percentage * 3.6
					}deg, #e6e6e6 0deg)`,
				}}>
				<div className="inner-circle">
					<span className="percentage">{percentage}%</span>
				</div>
			</div>
		</div>
	);
}

CircularProgressBar.propTypes = {
	percentage: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
};

export default CircularProgressBar;
