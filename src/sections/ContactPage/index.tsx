// Import your styles
import React from "react";
import "./styles.css";
import ContactForm from "../../components/ContactForm";

function ContactPage({ navbarHeight }: { navbarHeight: number }) {

    const offset = navbarHeight + 16 * 2; // to offset the navbar + 2rem padding

    return (
        <section id="contact" className="contact-section" style={{ paddingTop: `${offset}px` }}>
            <header className="contact-header">
                <h2>Have any questions?</h2>
                <div>Contact our team today. We're here to help you thrive.</div>
            </header>
            <ContactForm/>
        </section> 
    );
}

export default ContactPage;
