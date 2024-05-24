import "../Header/Header.scss";
import perfil from "../../assets/Images/purple4.png";
function Header() {
	return (
		<>
			<header className="header">
				<div className="header_overlay"></div>
				<div className="text-layer">
					<p className="first-layer">Fullstack developer</p>
					<div className="second-layer">
						<div className="second-layer_text">Hello,</div>
						<div className="second-layer_text">I'm</div>
						<div className="second-layer_text">
							<span className="accent">Maria </span>Revelo,
						</div>
						<div className="second-layer_text">fullstack developer</div>
					</div>
				</div>
				{/* <div className="header_text-container">
					<span>Hello,</span>
					<span>
						I'm <span className="accent">Maria</span>
					</span>
					<span>Revelo</span>
					<span className="thin">fullstack developer</span>
				</div>
				<div className="img-container">
					<img
						src={perfil}
						alt="profile"
					/>
				</div>
				<div className="header_text-wrapper">
					<p>
						Full stack developer with a flair for crafting
						<span>intuitive solutions</span> and a passion for continuous
						learning. I am always eager to
						<span>adapt and contribute positively</span> to dynamic teams.
					</p>
					<button>About me</button>
				</div> */}
				{/* <div className="big">
					<div className="overlay"></div>
					<div className="text-layer">
						<p className="first-layer">Fullstack developer</p>
						<p className="second-layer">Hello</p>
					</div>
				</div> */}
			</header>
		</>
	);
}

export default Header;
