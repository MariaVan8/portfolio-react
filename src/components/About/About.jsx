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
		responsive: [
			{
				breakpoint: 660, // Mobile view
				settings: {
					slidesToShow: 1,
					centerPadding: "60px",
				},
			},
			{
				breakpoint: 1960, // Desktop view
				settings: {
					slidesToShow: 4,
					centerPadding: "0px", // Adjust this to create the overlap effect
				},
			},
			{
				breakpoint: 2960, // Desktop view
				settings: {
					slidesToShow: 5,
					centerPadding: "0px", // Adjust this to create the overlap effect
				},
			},
		],
	};

	return (
		<>
			<div className="spacer">
				<div className="spacer-line"></div>
			</div>
			<section
				className="about"
				id="about">
				<div className="about_box">
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
					Hello, I'm Maria. Originally from Ecuador, I bring a rich cultural
					background and a passion for technology. I am dedicated to making
					meaningful contributions through my career in software development.
				</p>
				<p>
					I thrive on solving complex problems and continuously learning new
					skills. My commitment to excellence is reflected in my work ethic and
					my eagerness to take on new challenges.
				</p>
				<p>
					Outside of work, I find joy in nature and adventure. You'll often find
					me outdoors, geocaching, or exploring new trails. This love for
					exploration extends to my travels, where I immerse myself in different
					cultures and experiences.
				</p>
				<p>
					I am also a devoted cat mom and cherish my Latina heritage, which
					enriches my life with vibrant traditions and a love for music and
					dance. These interests keep me grounded and inspire a balanced,
					fulfilling lifestyle.
				</p>
			</section>
			<div className="spacer">
				<div className="spacer-line"></div>
			</div>
		</>
	);
}

export default About;
