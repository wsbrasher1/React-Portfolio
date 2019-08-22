import React from "react";

const style = {
        contactSection: {
                background: "#00BCD4",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                borderBottom: "2px solid #00BCD4"
        },
        form: {
            width: "75%",
            padding: "20px 0px"
        },
        header: {
            paddingBottom: "10px",
            color: "white",
            textShadow: "2px 2px #B3B0B0"
        }
};

const ContactForm = props => (
        <div id="contact" style={style.contactSection}>
            <form style={style.form} action="https://formspree.io/wsbrasher1@msn.com" method="POST">
                    <h2 style={style.header}><strong>Contact</strong></h2>
                    <p style={style.subtitle} id="subhead">Submit the form below to contact me directly.</p>
                    <label style={style.subtitle} htmlFor="name"><strong>Name:</strong></label>
                    <div className="form-group">
                            <input
                                type="text"
                                name="Name"
                                className="form-control"
                                id="name"
                                placeholder="ex. 'John Smith'"
                            />
                    </div>
                    <label style={style.subtitle} htmlFor="email"><strong>Email/Phone Number:</strong></label>
                    <div className="form-group">
                            <input
                                type="text"
                                name="Email/Phone"
                                className="form-control"
                                id="email"
                                placeholder="example@email.com / 469-123-4567"
                            />
			        </div>
                    <label style={style.subtitle} htmlFor="message"><strong>Message:</strong></label>
                    <div className="form-group">
                            <textarea
                                className="form-control"
                                name="Message"
                                rows="3"
                                id="message"
                                placeholder="Hi, I'd like to discuss a job opportunity!"
                            />
			        </div>
                    <div className="form-group">
                            <input type="hidden" name="_next" value="#" />
                            <input type="hidden" name="_subject" value="Message from portfolio" />
			        </div>
                    <button type="submit" className="btn btn-info"><strong>
				            Submit
                                </strong></button>
		    </form>

        </div>
);

export default ContactForm;