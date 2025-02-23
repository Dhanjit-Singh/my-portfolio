import React from "react";
import { FaXTwitter, FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";


function Footer() {
    return (
        <>
            <footer>
                <div className="container-footer">
                    <div className="copyright">
                        <p>© &nbsp;
                            <span>Copyright &nbsp;</span>
                            <strong>Dhanjit &nbsp;</strong>
                            <span>All Rights Reserved</span>
                        </p>
                    </div>
                    <div className="social-links">
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaSquareFacebook />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <GrInstagram />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <IoLogoLinkedin />
                        </a>
                    </div>
                    <div className="credits">
                        <p>Designed by &nbsp;
                            <span>Material UI &nbsp;</span>
                            <span>React js</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}


export default Footer;