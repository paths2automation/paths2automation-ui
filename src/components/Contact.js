import React from 'react';
import '../css/Contact.css'; // Import CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <p>info@example.com</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <p>+123 456 7890</p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
