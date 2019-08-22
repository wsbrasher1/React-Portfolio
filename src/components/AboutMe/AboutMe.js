import React from "react";
import { Button } from "reactstrap";

const imgUrl = '/assets/images/skills-bgrev.png';

const style = {
        aboutSection: {
            background: "white",
            minHeight: "100vh"
        },
        mainRow: {
            paddingTop: "110px",
            paddingBottom: "110px",
            paddingRight: "20px",
            paddingLeft: "20px",
            background: "#FAFAFA"
        },
        headRow: {
                textAlign: "justify",
                color: "white",
                background: "#00BCD4",
                minHeight: "100px",
                justifyContent: "center",
                alignContent: "center",
                textShadow: "2px 2px #B3B0B0"
        },
        billBrasherImg: {
            width: "175px"
        },
        imgDiv: {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "top",
            background: "#FAFAFA"
        },
        aboutDiv: {
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            background: "#FAFAFA"
        },
        personalDiv: {
                textAlign: "justify",
                display: "flex",
                justifyContent: "left",
                fontSize: "12px",
                background: "#FAFAFA"
        },
        linkSpan: {
                marginTop: "20px"
        },
        
        infoDiv: {
                fontSize: "12px",
                color: "#727272",
                paddingRight: "0px",
                maxWidth: "520px"
        },
        infoSocial: {
                display: "flex"
        },
        skills: {
            display: "flex",
            justifyContent: "center",
            backgroundSize: 'cover'
        },
        skillImgs: {
            display: "flex",
            justifyContent: "space-around",
            padding: "10px 0px 10px 0px",
            overflow: "auto",
            backgroundSize: 'cover',
            overflow: 'hidden'
        },
        header: {
            display: "flex",
            justifyContent: "center",
            textShadow: "2px 2px #999",
            paddingTop: "10px"
        },
        p: {
            fontSize: "12px",
            color: "#727272",
            lineHeight: "24px",
            paddingRight: "0px",
            maxWidth: "520px"
        },
        
};

const AboutMe = props => (
        <div id="about-me" style={style.aboutSection}>
                <div classname="col-md-12">
                        <div style={style.headRow} className="row">
                                <h2><strong>About Me</strong></h2>
                        </div>
                </div>
                <div className="col-md-12">
                        <div style={style.mainRow} className="row">
                                <div id="aboutDiv" style={style.aboutDiv} className="col-md-4">
                                        <div>
                                                <h6 id="my-story"><strong>MY STORY</strong></h6>
                                                        <p style={style.p}>
                                                                I'm a Web Developer and graduate of the SMU Coding Bootcamp program.
                                                                Helping others create visually appealing, user-friendly and innovative
                                                                web sites is my passion.
                                                                <br/>
                                                                My specialties include front-end and UI/UX design, and I'm well versed 
                                                                in server-side development. I pride myself in continuous learning
                                                                and exploring new aspects of coding and I'm always open to new experiences.
                                                                <br/>
                                                                Feel free to reach out to me with any of your web development needs. 
                                                        </p>
                                                        <Button outline color="info"size="sm" href="https://drive.google.com/open?id=12viNMlIYC6me8i4piV4pW77q57MNTAO2">View Resume</Button>
                                        </div>
                                </div>

                                <div id="imgDiv" style={style.imgDiv} className="col-md-4">
                                        <div>
                                                <img 
                                                        alt="Bill Brasher"
                                                        src="assets/images/portrait.png"
                                                        style={style.billBrasherImg}
                                                />
                                        </div>
                                </div>
                                <div id="personalDiv" style={style.personalDiv} className="col-md-4">
                                        <div>
                                                <h6 id="personal"><strong>PERSONAL INFORMATION</strong></h6>
                                                <div id="info" style={style.infoDiv}>
                                                        <p><strong>Name:</strong> Bill Brasher</p>
                                                        <p><strong>Phone:</strong> 817.996.4139</p>
                                                        <p><strong>Email:</strong> wsbrasher1@msn.com</p>
                                                </div>
                                                <div id="info-social">
                                                        <span style={style.linkSpan}>
                                                                <a
                                                                        style={style.a}
                                                                        target="_blank"
                                                                        rel="noreferrer noopener"
                                                                        href="https://www.linkedin.com/in/billbrasher/"
                                                                >
                                                                        <img
                                                                                className="circleLinks"
                                                                                src="assets/images/linkedinout.png"
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
                                                                                src="assets/images/githubout.png"
                                                                                alt="github"
                                                                        />
                                                                </a>
                                                        </span>
                                                
                                                </div>
                                        </div>
                                </div>
                                
                        </div>
                        <div>
                                <div style={style.headRow} className="row">
                                        <h2><strong>My Skills</strong></h2>
                                </div>
                        </div>
                        <div className="col-md-12" id="my-skills">
                                <div style={style.skillImgs} className="col-md-12">
                                        <div className="row">{props.children}</div>
                                </div>
                        </div>
                </div>
        </div>

);

export default AboutMe;