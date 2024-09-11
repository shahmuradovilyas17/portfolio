import { ContactForm } from "../contactForm/contactForm"
import "./contact.scss"

export const Contact = () => {
    return (
        <div className="contact-menu-wrapper">
            <div className="contact-menu-inner">
            <div className="contact-menu-title">Get In Touch</div>
            <div className="contact-menu-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <ContactForm/>
            </div>
            
        </div>
    )
}