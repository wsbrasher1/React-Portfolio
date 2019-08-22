import React from "react";

const style = {
	image: {
		height: "100px"
	},
	imageCard: {
		display: "flex-column",
		margin: "20px 0 20px 0",
		height: "200px"
	},
	imageTitle: {
		justifyContent: "center"
	},
	row: {
		justifyContent: "center",
		marginBottom: "10px"
	},
	header: {
		textShadow: "1px 1px #999"
	}
};

const ImageCard = props => (
	<div className="col-md-3 col-sm-6 col-6" style={style.imageCard}>
		<div className="row" style={style.row}>
			<img
				alt={props.name}
				src={`assets/images/${props.image}.png`}
				style={style.image}
			/>
		</div>
		<div style={style.imageTitle} className="row">
			<h4 style={style.header}>{props.name}</h4>
		</div>
	</div>
);

export default ImageCard;