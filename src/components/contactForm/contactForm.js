import "./contactForm.scss"

export const ContactForm = () => {
    return <form onSubmit={(e)=> {
        e.preventDefault()
    }}>
        <div className="input-email">
            <label htmlFor="email-input">Email</label>
            <input type="email" name="email-input" placeholder="Please enter your email"/>
        </div>
        <div className="input-mobile">
            <label htmlFor="mobile-input">Mobile</label>
            <input type="mobile" name="mobile-input" placeholder="Enter mobile"/>
        </div>
        <div className="input-message">
            <label htmlFor="message-input">Message</label>
            <input type="text" name="message-input" placeholder="Enter your message"/>
        </div>
        <button className="submit-button">Submit</button>
    </form>
}