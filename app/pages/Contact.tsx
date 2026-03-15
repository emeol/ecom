export const Contact = () => {    
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>If you have any questions, feedback, or need assistance, please don't hesitate to reach out to us. We're here to help!</p>
            <form action="/send-data-here" method="post" className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}