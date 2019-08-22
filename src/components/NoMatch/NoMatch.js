import React from 'react';

const style = {
        noMatch: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 10vh -3px)"
        },
        text: {
            color: "#0084ff",
        }
};

const NoMatch = props => (
        <div style={style.noMatch} className="wrapper">
            <h1 style={style.text}>404 Page Not Found</h1>
            <h1>
                <span role="img" aria-label="Pacman Ghost Gif" href="../../../public/assets/images/404-Img.gif">

                </span>
            </h1>
        </div>
);

export default NoMatch;