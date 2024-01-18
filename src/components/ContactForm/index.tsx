import React, { useEffect } from "react";
import "./styles.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';


export default function ContactForm() {
    const [correct, setCorrect] = React.useState(false)

    function onchange(value: string | null) {
        console.log("Captcha value:", value);
        if (value) {
            setCorrect(true)
        }
    }
    function sendEmail() {
        console.log("send email")
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const subject = (document.getElementById("subject") as HTMLInputElement).value;
        const message = (document.getElementById("message") as HTMLInputElement).value;

        if (!name || !email || !subject || !message) {
            alert("Please fill all the fields")
            return
        }

        const data = {
            name,
            email,
            subject,
            message,
        };

        emailjs.send('service_g57hslg', 'template_2gnudpn', data, 'WGbif2BdWc-WCMHg2')
            .then((result) => {
                console.log(result.text);
                alert("Contact sent!")
            }, (error) => {
                console.log(error.text);
                alert("Error sending email")
            }).finally(() => {
                setCorrect(false)
            });
    }

    return (
        <div className="contact-form-container">
            <form className="contact-form-card">
                <div className="contact-form-prop">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Type your name" className="hoverable" />
                </div>
                <div className="contact-form-prop">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Type your e-mail" className="hoverable" />
                </div>
                <div className="contact-form-prop">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Type the subject" className="hoverable" />
                </div>
                <div className="contact-form-prop">
                    <label htmlFor="message">How can we help you?</label>
                    <textarea id="message" placeholder="Write something" rows={4} cols={40} className="hoverable" />
                </div>
                <ReCAPTCHA
                    style={{ display: "inline-block" }}
                    theme="dark"
                    sitekey="6LdmK1MpAAAAAHyfm5zF8QVp-7bM6uy1YbBvYCrW"
                    onExpired={() => {
                        setCorrect(false)
                        console.log("expired");
                    }}
                    onErrored={() => {
                        console.log("errored");
                    }}
                    onChange={(val) => {
                        onchange(val);
                    }}
                />
                <a type="submit" id="submit-button" className={`hoverable ${!correct ? "inActive" : ""}`} onClick={() => {
                    sendEmail()
                }}>Send</a>
            </form>
        </div>
    );
}