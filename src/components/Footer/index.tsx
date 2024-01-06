import React from "react";
import "./styles.css";
import FooterLogo from "../../assets/images/FooterLogo.png";
import LinkedIn from "../../assets/images/LinkedIn.svg";
import X from "../../assets/images/X.svg";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer-container" id="footer-1">
                <span>© 2024 Sapient Studio. <br /> All rights reserved.</span>
            </div>
            <div className="footer-container" id="footer-2">
                <img src={FooterLogo} alt="" />
                <div className="center-links-container">
                    <a href="">About</a>
                    <a href="">Become a Partner</a>
                    <a href="">FAQs</a>
                </div>
            </div>
            <div className="footer-container" id="footer-3">
                <img src={LinkedIn} alt="" />
                <img src={X} alt="" />
            </div>
        </footer>
    );
}

export default Footer;