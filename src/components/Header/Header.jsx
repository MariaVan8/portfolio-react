import "../Header/Header.scss";
import Navbar from "../NavBar/Navbar";

import perfil from "../../assets/Images/purple4.png";
function Header() {
	return (
		<>
			<header className="header">
				<Navbar />
				<div className="header_overlay"></div>
				<div className="header_box">
					<div className="text-layer">
						<p className="first-layer">Fullstack Developer</p>
						<div className="second-layer">
							<div className="second-layer_text">Hello,</div>
							<div className="second-layer_text">I'm</div>
							<div className="second-layer_text">
								<span className="accent">Maria </span>Revelo,
							</div>
							<div className="second-layer_text-bottom">
								fullstack developer
							</div>
						</div>
					</div>
					<div className="img-container">
						<img
							src={perfil}
							alt="profile"
						/>
					</div>
				</div>
				<div className="header_text-wrapper">
					<p>
						Full stack developer with a flair for crafting
						<span>intuitive solutions</span> and a passion for continuous
						learning. I am always eager to
						<span>adapt and contribute positively</span> to dynamic teams.
					</p>
					<button className="header_btn">About me</button>
				</div>
			</header>
		</>
	);
}

export default Header;
