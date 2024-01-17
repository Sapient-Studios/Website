import { useState, useEffect } from "react";
import "./styles.css";
import FooterLogo from "../../assets/images/FooterLogo.png";
import LinkedIn from "../../assets/images/LinkedIn.svg";
import X from "../../assets/images/X.svg";
import Footer1 from "../../assets/images/Footer1.png";
import Footer2 from "../../assets/images/Footer2.png";

function Footer() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer className="footer" style={{ backgroundImage: `url(${Footer1}), url(${Footer2})` }}>
            <div className="footer-wrapper">

                <div className="footer-container" id="footer-1">
                    <span>© 2024 Sapient Studios. {(windowSize.width >= 768) && <br />} All rights reserved.</span>
                </div>
                <div className="footer-container" id="footer-2">
                    <img src={FooterLogo} alt="" />
                    <div className="center-links-container">
                        <a className="hoverable"
                            href="https://sapientstudios.notion.site/About-ee63d383adf84df2afa47304d56ffc75?pvs=4">
                            About</a>
                        <a className="hoverable"
                            href="https://sapientstudios.notion.site/Become-a-Partner-d80cc6f2f3e34e6ca15ffd936e586466?pvs=4">
                            Become a Partner</a>
                        <a className="hoverable"
                            href="https://sapientstudios.notion.site/FAQs-32499e84072f4892ba4a4d0dd3a53672?pvs=4">
                            FAQs</a>
                    </div>
                </div>
                <div className="footer-container" id="footer-3">
                    <a href="https://www.linkedin.com/company/sapientstudios">
                        <img src={LinkedIn} alt="" className="hoverable" />
                    </a>
                    <a href="wip :)">
                        <img src={X} alt="" className="hoverable" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;