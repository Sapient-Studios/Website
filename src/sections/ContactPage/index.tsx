// Import your styles
import React from "react";
import "./styles.css";
import ContactBackground from "../../assets/images/ContactBackground.svg";

function ContactPage({ navbarHeight }: { navbarHeight: number }) {

    const offset = navbarHeight;

    return (
        <section className="contact-section" style={{ paddingTop: `${offset}px`}}>
            <div className="background-container">
                <img className="contact-background" src={ContactBackground} alt="Background" />
            </div>
            <header className="contact-header">
                <h1>Have any questions?</h1>
                <div>Contact our team today. We're here to help you thrive.</div>
            </header>
            <div className="contact-form-container">
                <form  >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="Type your name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="Type your e-mail" />
                    </div>
                    <div>
                        <label htmlFor="message">Subject</label>
                        <textarea id="message" name="Type the subject" />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactPage;
