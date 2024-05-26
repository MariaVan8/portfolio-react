import "./ProgressBar.scss";
import html from "../../assets/icons/html-test2.png";
import css from "../../assets/icons/CSS1.png";
import js from "../../assets/icons/javascript1.png";
import python from "../../assets/icons/python1.png";
import cs from "../../assets/icons/c1.png";
import sql from "../../assets/icons/sql1.png";
import ts from "../../assets/icons/typescript1.png";

const progressData = [
	{ imgSrc: html, altText: "HTML", progress: 80 },
	{ imgSrc: css, altText: "JavaScript", progress: 70 },
	{ imgSrc: js, altText: "Python", progress: 60 },
	{ imgSrc: ts, altText: "C++", progress: 55 },
	{ imgSrc: python, altText: "Android", progress: 50 },
	{ imgSrc: cs, altText: "Sass", progress: 75 },
	{ imgSrc: sql, altText: "TypeScript", progress: 65 },
];

function ProgressBar() {
	return (
		<div className="languages">
			{progressData.map((data, index) => (
				<div
					className="progress-bar"
					key={index}>
					<img
						src={data.imgSrc}
						alt={data.altText}
						className="progress-bar__icon"
					/>
					<div className="progress-bar__track">
						<div
							className="progress-bar__fill"
							style={{ width: `${data.progress}%` }}></div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ProgressBar;
