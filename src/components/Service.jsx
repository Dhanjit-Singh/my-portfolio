import Grid from '@mui/material/Grid2';
import { MdOutlineConstruction } from "react-icons/md";
import { BsWrenchAdjustable } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgPerformance } from "react-icons/cg";


function Service() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="heading-abt">
                        <h1>Services</h1>
                        <p>Providing end-to-end web development, API integrations, and <br /> scalable solutions tailored to business needs.</p>
                    </div>
                    <div className="service-content">
                        <Grid container spacing={4}>
                            <Grid size={4}>
                                <div className="service-card">
                                    <div className="service-area">
                                        <div className="service-icons">
                                            <MdOutlineConstruction className="s-icon" />
                                        </div>
                                    </div>
                                    <div className="service-card-heading">
                                        <h3>
                                            Software Development
                                        </h3>
                                        <p>Creating scalable, secure, and high-performance software solutions tailored to business needs.</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid size={4}>
                                <div className="service-card">
                                    <div className="service-area">
                                        <div className="service-icons">
                                            <BsWrenchAdjustable className="s-icon" />
                                        </div>
                                    </div>
                                    <div className="service-card-heading">
                                        <h3>
                                            Backend & API Development
                                        </h3>
                                        <p>Building secure, scalable backends and seamless API integrations for efficient data handling and connectivity.</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid size={4}>
                                <div className="service-card">
                                    <div className="service-area">
                                        <div className="service-icons">
                                            <FaDatabase className="s-icon" />
                                        </div>
                                    </div>
                                    <div className="service-card-heading">
                                        <h3>
                                            Database Design & Optimization
                                        </h3>
                                        <p>Structuring efficient, scalable databases for fast performance, security, and seamless data management.</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                        <br />
                        <br />
                        <Grid container spacing={4}>
                            <Grid size={4}>
                                <div className="service-card">
                                    <div className="service-area">
                                        <div className="service-icons">
                                            <ImCreditCard className="s-icon" />
                                        </div>
                                    </div>
                                    <div className="service-card-heading">
                                        <h3>
                                            Payment Gateway Integration
                                        </h3>
                                        <p>Implementing secure, seamless payment solutions for smooth and reliable transactions.</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid size={4}>
                                <div className="service-card">
                                    <div className="service-area">
                                        <div className="service-icons">
                                            <BsFillShieldLockFill className="s-icon" />
                                        </div>
                                    </div>
                                    <div className="service-card-heading">
                                        <h3>
                                            Security Implementation
                                        </h3>
                                        <p>Enhancing application security with robust measures to protect data and prevent vulnerabilities.</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid size={4}>
                                <div className="service-card">
                                    <div className="service-area">
                                        <div className="service-icons">
                                            <CgPerformance className="s-icon" />
                                        </div>
                                    </div>
                                    <div className="service-card-heading">
                                        <h3>
                                            Performance Optimization
                                        </h3>
                                        <p>Improving speed, efficiency, and scalability to enhance user experience, reduce load times, and ensure smooth application performance across all devices.</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;