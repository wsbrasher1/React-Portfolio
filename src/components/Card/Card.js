import React from "react";

const style = {
        card: {
            margin: "40px 10px 40px 10px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            backgroundColor: "#D5E2EA"
        },
        tech: {
            fontWeight: "bold"
        }
};
const Link = link => (
        <a
            href={`${link}`}
            className="card-link"
            target="_blank"
            rel="noreferrer noopener"
        >
            Link
        </a>
);

const Card = props => (
        <div style={style.card} className="card">
                <img 
                        className="card-img-top cardImg"
                        src={`assets/images/${props.image}.png`}
                        alt={props.name}
                />
                <div className="card-body">
                        <h4 className="card-title">{props.name}</h4>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">
                                <span style={style.tech}>Technologies used:</span>
                                {props.techUsed}
                        </p>
                        <a
                                href={`${props.sourceCode}`}
                                className="card-link"
                                target="_blank"
                                rel="noreferrer noopener"
                        >
                                Source code
                        </a>
                        {props.link ? Link(props.link) : null}
                </div>
        </div>
);

export default Card;