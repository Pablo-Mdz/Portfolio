import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [toastMessage, setToastMessage] = useState("");
    const [toastVisible, setToastVisible] = useState(false);

    const showToast = (message) => {
        setToastMessage(message);
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
        }, 3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5ts0tyu', 'template_tvfybt7', form.current, '1d-j2JW1QjE-26RcM')
            .then((result) => {
                console.log(result.text);
                showToast('Thank you for your message. I will get back to you shortly.');
            }, (error) => {
                console.log(error.text);
                showToast('There was an error sending your message. Please try again.');
            });
        e.target.reset();
    }

    const social = {
        github: "https://github.com/Pablo-Mdz",
        instagram: "https://www.instagram.com/pablo.cigoy/",
        linkedin: "https://www.linkedin.com/in/pablo-cigoy/",
    };

    return (
        <div id="contact">
            <div id="toast" className={`toast ${toastVisible ? 'show' : 'hide'}`}>{toastMessage}</div>
            <div className="git-form">
                <div className="git-head-div">
                    <h1 id="Contact" className="git-head">Get in Touch!</h1>
                </div>
                <div className="container">
                    <div className="git-cont">
                        <div className="form-container">
                            <form ref={form} onSubmit={sendEmail} className="form-group">
                                <input type="text" id="fname" name="firstname" placeholder="Your name" required />
                                <input type="mail" id="mailid" name="Email" placeholder="Email Address" required />
                                <input type="text" id="sub" name="Subject" placeholder="Subject" required />
                                <textarea id="msg" name="message" placeholder="Message" required />
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="inline-block">
                                {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                                {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="Copy">2024 © Copyright Pablo Cigoy. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Contact;