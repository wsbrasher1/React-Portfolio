import React from "react";

const style = {
        footer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#FFF",
            fontSize: "12px",
            borderTop: "2 px solid #00BCD4",
            color: "rgba(0,0,0,0.5)",
            padding: "20px 0 20px 0"
        }
};

const Footer = props => (
        <div className="col-12 text center">
            <div className="row" style={style.footer}>
                <h7> &copy; 2019 - All rights reserved | Bill Brasher Coding </h7>
            </div>
        </div>
);

export default Footer;