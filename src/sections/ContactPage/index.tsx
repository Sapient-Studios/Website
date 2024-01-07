// Import your styles
import React from "react";
import "./styles.css";
import ContactBackground from "../../assets/images/ContactBackground.svg";

function ContactPage({ navbarHeight }: { navbarHeight: number }) {

    const offset = navbarHeight + 16 * 2; // to offset the navbar + 2rem padding

    return (
        <section className="contact-section" style={{ paddingTop: `${offset}px` }}>
            <header className="contact-header">
                <h2>Have any questions?</h2>
                <div>Contact our team today. We're here to help you thrive.</div>
            </header>
            <div className="contact-form-container" style={{ backgroundImage: `${ContactBackground} center/cover no-repeat` }}>
                <form className="contact-form-card">
                    <div className="contact-form-prop">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Type your name" />
                    </div>
                    <div className="contact-form-prop">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Type your e-mail" />
                    </div>
                    <div className="contact-form-prop">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Type the subject" />
                    </div>
                    <div className="contact-form-prop">
                        <label htmlFor="message">How can we help you?</label>
                        <textarea id="message" placeholder="Write something" rows={4} cols={40}/>
                    </div>
                    <button type="submit" id="submit-button">Submit</button>
                </form>
            </div>
        </section> 
    );
}

export default ContactPage;
