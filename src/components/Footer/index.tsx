import React from "react";
import "./styles.css";
import FooterLogo from "../../assets/images/FooterLogo.png";
import LinkedIn from "../../assets/images/LinkedIn.svg";
import X from "../../assets/images/X.svg";
import Footer1 from "../../assets/images/Footer1.png";
import Footer2 from "../../assets/images/Footer2.png";

function Footer() {

    return (
        <footer className="footer" style={{backgroundImage: `url(${Footer1}), url(${Footer2})`}}>
            {/* <div className="background-container"></div>
            <img src={Footer1} className="footer-background 1"/>
            <img src={Footer2} className="footer-background 2" /> */}
            <div className="footer-container" id="footer-1">
                <span>© 2024 Sapient Studios. <br /> All rights reserved.</span>
            </div>
            <div className="footer-container" id="footer-2">
                <img src={FooterLogo} alt="" />
                <div className="center-links-container">
                    <a href="https://sapientstudios.notion.site/About-ee63d383adf84df2afa47304d56ffc75?pvs=4">
                        About</a>
                    <a href="https://sapientstudios.notion.site/Become-a-Partner-d80cc6f2f3e34e6ca15ffd936e586466?pvs=4">
                        Become a Partner</a>
                    <a href="https://sapientstudios.notion.site/FAQs-32499e84072f4892ba4a4d0dd3a53672?pvs=4">
                        FAQs</a>
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