import React from "react";


const style = {
    projectSection: {
        minHeight:"100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "40px"
    },
    carouselDiv: {
        marginTop:"5%"
    },
    header:{
        textAlign: "center",
        color: "#fff",
    },
    headRow: {
        textAlign: "justify",
        color: "white",
        background: "#00BCD4",
        minHeight: "100px",
        justifyContent: "center",
        alignContent: "center",
        textShadow: "2px 2px #B3B0B0"
    }

};

const Projects = props => (
    <div id="portfolio-section">
        <div className="col-md-12">
            <div style={style.headRow} className="row">
                <h2><strong>Portfolio</strong></h2>
            </div>
        </div>
        <div className="col-md-12" id="projects" style={style.projectSection}>
                <div id="carouselDiv" style={style.carouselDiv}>            
                        {props.children}
                </div>
        </div>
    </div>
);

export default Projects;