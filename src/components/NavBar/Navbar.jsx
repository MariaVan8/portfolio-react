import { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);

	const navToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleResize = () => {
		setIsDesktop(window.innerWidth >= 960);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<nav className="nav">
				{!isDesktop && (
					<div
						className="hamburger"
						onClick={navToggle}>
						<span className="hamburger_1"></span>
						<span className="hamburger_2"></span>
						<span className="hamburger_3"></span>
					</div>
				)}
				<ul
					className={`nav-box ${isMenuOpen ? "show" : "hidden"} ${
						isDesktop ? "desktop" : ""
					}`}>
					<a href="">
						<li className="nav_item">PROJECTS</li>
					</a>
					<a href="">
						<li className="nav_item">ABOUT ME</li>
					</a>
					<a href="">
						<li className="nav_item">CONTACT</li>
					</a>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
