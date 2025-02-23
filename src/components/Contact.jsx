import Grid from '@mui/material/Grid2';
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";


function Contact() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="heading-abt">
                        <h1>Contact</h1>
                        <p>Get in touch for collaborations, project inquiries, or any development needs. <br /> Let’s build something great together!</p>
                    </div>
                    <div className="contact-content">
                        <Grid container spacing={4}>
                            <Grid size={3}>
                            </Grid>

                            <Grid size={6}>
                                <div className="contact-card">
                                    <Grid size={2}>
                                        <br />
                                        <div className="contact-icon-sec">
                                            <FaLocationDot className="contact-icons" />
                                        </div>
                                        <div className="contact-icon-sec">
                                            <PiPhoneCallFill className="contact-icons" />
                                        </div>
                                        <div className="contact-icon-sec">
                                            <MdOutlineMailOutline className="contact-icons" />
                                        </div>
                                    </Grid>
                                    <Grid size={4}>
                                        <div className="contact-sec">
                                            <h3>Address</h3>
                                            <p>New Delhi, India, 110007</p>
                                        </div>
                                        <div className="contact-sec">
                                            <h3>Call on</h3>
                                            <p>+91 80023 82823</p>
                                        </div>
                                        <div className="contact-sec">
                                            <h3>Email on</h3>
                                            <p>dhanjit.nrit@gmail.com</p>
                                        </div>
                                    </Grid>
                                </div>
                            </Grid>

                            <Grid size={3}>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Contact;