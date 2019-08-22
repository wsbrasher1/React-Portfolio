import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const imgUrl = '/assets/images/darkbg.png';

const style = {
        headerSection: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            marginTop: "10vh",
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden'
        },
        span: {
            color: "#00bcd4"
        },
        a: {
            margin: "0 5px 0 5px"
        },
        downArrow: {
            width: "50px",
            marginTop: "15vh"   
        },
        linkSpan: {
            marginTop: "20px"
        },
        img: {
            width: "80px"
        }
};

const HeaderSection = props => (
        <div id="headerSection" style={style.headerSection}>
                <h1><strong>
                    HI! I'M <span id="name-text">BILL BRASHER</span>
                     </strong></h1>
                <h6>FRONT END & FULL STACK WEB DEVELOPER FROM FORT WORTH, TEXAS</h6>
                {/* <span style={style.linkSpan}>
                        <a
                            style={style.a}
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.linkedin.com/in/billbrasher/"
                        >
                            <img
                                    className="circleLinks"
                                    src="assets/images/linkedIn_PNG.png"
                                    alt="linkedin"
                            />
                        </a>
                        <a
                            style={style.a}
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://github.com/wsbrasher1"
                        >
                            <img
                                    className="circleLinks"
                                    src="assets/images/github.png"
                                    alt="github"
                            />
                        </a>
                </span> */}
                <span>
                        <AnchorLink offset="70" href="#about-me">
                                <span>
                                    <img
                                            className="animated fadeInDown infinite"
                                            style={style.downArrow}
                                            alt="down arrow"
                                            src="assets/images/arrow.png"
                                    />
                                </span>
                        </AnchorLink>
                </span>
        </div>

);
export default HeaderSection;