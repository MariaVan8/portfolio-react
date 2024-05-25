import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<>
			<nav className="nav">
				<div
					className="hamburger"
					onClick={navToggle}>
					<span className="hamburger_1"></span>
					<span className="hamburger_2"></span>
					<span className="hamburger_3"></span>
				</div>
				<ul className={`nav-box ${isMenuOpen ? "show" : "hidden"}`}>
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
