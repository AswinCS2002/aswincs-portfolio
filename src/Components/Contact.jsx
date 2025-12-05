import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Get In Touch</h2>

      <form
        className="contact-form"
        action="https://formspree.io/f/mkgkgvdy"
        method="POST"
      >
        <div className="input-group">
          <label>Your Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="input-group">
          <label>Your Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="input-group">
          <label>Your Message</label>
          <textarea name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}
