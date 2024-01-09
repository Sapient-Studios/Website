import React from "react";
import "./styles.css";
import ContactBackground from "../../assets/images/ContactBackground.svg";



export default function ContactForm() {

    return (
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
                    <textarea id="message" placeholder="Write something" rows={4} cols={40} />
                </div>
                <button type="submit" id="submit-button">Submit</button>
            </form>
        </div>
    );
}