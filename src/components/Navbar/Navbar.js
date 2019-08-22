import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";


const style = {
	navbar: {
		background: "white",
		borderBottom: "2px solid #00BCD4",
		position: "fixed",
		top: "0",
		width: "100%",
		height: "75px",
		zIndex: "1000",
		minHeight: "10vh",
		fontSize: "13px"

	},
	links: {
		justifyContent: "flex-end"
	},
	brand: {
		fontSize: "20px",
		color: "#555"
	},
	mybrand: {
		maxWidth: "175px"
	}
};

const Navbar = props => (
	<nav style={style.navbar} className="navbar navbar-expand-sm navbar-light">
		<img
				className="myBrand"
				style={style.mybrand}
                src="assets/images/BillBrasher.svg"
                alt="my-logo"
        />
		
		<AnchorLink
			style={style.brand}
			offset="80"
			className="navbar-brand"
			href="#headerSection"
		>
			
		</AnchorLink>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>
		<div
			style={style.links}
			className="collapse navbar-collapse"
			id="navbarNav"
		>
			<ul className="navbar-nav">
				<li className="nav-item">
					<AnchorLink
						offset="70"
						className="nav-link"
						href="#about-me"
					>
						About Me
					</AnchorLink>
				</li>
				<li className="nav-item">
					<AnchorLink
						offset="70"
						className="nav-link"
						href="#projects"
					>
						Portfolio
					</AnchorLink>
				</li>
				<li className="nav-item">
					<AnchorLink
						offset="70"
						className="nav-link"
						href="#contact"
					>
						Contact Me
					</AnchorLink>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
