import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-links">
            <a href="mailto:manuggq@icloud.com">
              <i> <FontAwesomeIcon icon={faEnvelope} size="xl" /></i>
              Email: manuggq@icloud.com
            </a>
            <a href="tel:+">
              <i> <FontAwesomeIcon icon={faPhone} size="xl" /></i>
              Phone: (786) 797-3889
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
