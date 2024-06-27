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
			<section className="intro">
				<p>
					Hello, I'm Maria. Originally from Ecuador, I am now a proud Canadian
					citizen, keen to make meaningful contributions to both countries
					through my career in technology.
				</p>
				<p>
					When I'm not immersed in coding or unraveling the mysteries of data,
					you'll likely find me outdoors, engaging in geocaching—a modern
					treasure hunt that satisfies my love for adventure.
				</p>
				<p>
					I'm also a devoted cat mom, an avid traveler, and I cherish my Latina
					heritage, which brings a rhythm to my life with music and dance.
				</p>
			</section>
			<div className="spacer">
				<div className="spacer-line"></div>
			</div>
		</>
	);
}

export default About;
