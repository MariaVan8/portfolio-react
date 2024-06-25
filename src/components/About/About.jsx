import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import london from "../../assets/Images/london.jpg";
import tower from "../../assets/Images/tower.jpg";
import cat from "../../assets/Images/cat.jpg";
import "./About.scss";

function About() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "60px",
	};
	return (
		<>
			<div className="spacer">
				<div className="spacer-line"></div>
			</div>
			<section className="projects_top">
				<div className="projects_box">
					<div className="text-layer">
						<p className="first-layer">Discover more</p>
						<div className="second-layer">
							<div className="second-layer_text">Discover more</div>
							<div className="second-layer_text">
								<span className="accent">about </span> me.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="slider">
				<Slider {...settings}>
					<div>
						<img
							src={london}
							alt="Image 1"
						/>
					</div>
					<div>
						<img
							src={tower}
							alt="Image 2"
						/>
					</div>
					<div>
						<img
							src={cat}
							alt="Image 3"
						/>
					</div>
				</Slider>
			</section>
			<div className="spacer">
				<div className="spacer-line"></div>
			</div>
		</>
	);
}

export default About;
