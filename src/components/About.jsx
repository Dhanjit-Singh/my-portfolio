import React from 'react';
import Grid from '@mui/material/Grid2';
import abtImg from '../assets/img/abt-img.jpg';
import { GoChevronRight } from "react-icons/go";


function About() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="heading-abt">
                        <h1>About</h1>
                        <p>I'm a professional Full-Stack Web App Developer from India.</p>
                    </div>
                    <div className="abt-content">
                        <Grid container spacing={2}>
                            <Grid size={4}>
                                <div className="abt-img">
                                    <img src={abtImg} alt="" />
                                </div>
                            </Grid>
                            <Grid size={8}>
                                <div className='abt-details'>
                                    <div className="abt-heading">
                                        <h2>Full-Stack Web Application Developer</h2>
                                    </div>
                                    <div className="abt-para">
                                        <p>I specialize in building high-performance web applications with seamless user experiences and scalable solutions. With expertise in both frontend and backend development, I create secure, optimized, and visually appealing digital products.</p>
                                        <Grid container spacing={2}>
                                            <Grid size={6}>
                                                <div className="details">
                                                    <p>
                                                        <GoChevronRight />
                                                        <span><b>Name :</b> Dhanjit Kumar</span>
                                                    </p>
                                                    <p>
                                                        <GoChevronRight />
                                                        <span><b>Phone :</b> +91 80023 82823</span>
                                                    </p>
                                                    <p>
                                                        <GoChevronRight />
                                                        <span><b>Address :</b> New Delhi, India, 110007</span>
                                                    </p>
                                                </div>
                                            </Grid>
                                            <Grid size={6}>
                                                <div className="details">
                                                    <p>
                                                        <GoChevronRight />
                                                        <span><b>Age :</b> 28</span>
                                                    </p>
                                                    <p>
                                                        <GoChevronRight />
                                                        <span><b>Degree :</b> Bachelor of Technology</span>
                                                    </p>
                                                    <p>
                                                        <GoChevronRight />
                                                        <span><b>Email :</b> dhanjit.nrit@gmail.com</span>
                                                    </p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <p>My experience includes eCommerce, dating apps, educational platforms, and CRM systems, leveraging React, Laravel, Node.js, and MySQL. I focus on clean code, API integration, and cloud-based deployments for efficiency and scalability. <br /> <br />
                                            By collaborating closely with clients, I ensure each project aligns with business goals, delivering fast, secure, and user-friendly applications.</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="heading-abt">
                        <h1>Skills</h1>
                        <p>Expertise in modern web technologies, full-stack development, API integration, and <br /> scalable architectures to build efficient and user-friendly applications.</p>
                    </div>
                    <div className="skills-details">
                        <Grid container spacing={6}>
                            <Grid size={6}>
                                <div>
                                    <p>HTML
                                        <span className='percentage-left'>100%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "100%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>

                                    <p>CSS
                                        <span className='percentage-left'>80%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "80%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>

                                    <p>Bootstrap
                                        <span className='percentage-left'>90%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "90%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>

                                    <p>MySql
                                        <span className='percentage-left'>85%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "85%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>

                                    <p>React js
                                        <span className='percentage-left'>70%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "70%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>
                                </div>
                            </Grid>
                            <Grid size={6}>
                                <div>
                                    <p>PHP
                                        <span className='percentage-right'>90%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "80%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>

                                    <p>Material UI
                                        <span className='percentage-right'>60%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "60%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>

                                    <p>JavaScript
                                        <span className='percentage-right'>80%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "80%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>

                                    <p>Laravel
                                        <span className='percentage-right'>95%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "95%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>

                                    <p>Node js
                                        <span className='percentage-right'>50%</span>
                                    </p>
                                    <p style={{ backgroundColor: "#e9e8e6" }}>
                                        <span style={{
                                            height: "10px", width: "50%", backgroundColor: "#34b7a7", display: "flex"
                                        }}></span>
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    );
}


export default About;