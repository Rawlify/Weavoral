import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Camera, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <div className="page-header text-center">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have questions about our handmade products? We're here to help.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="contact-subtitle">Reach out to us through any of these channels. We usually respond within a few hours.</p>

            <div className="contact-methods">
              <a 
                href="https://wa.me/94770000000?text=Hi%20Weavoral,%20I%20have%20an%20inquiry." 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card whatsapp"
              >
                <div className="icon-wrapper">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4>WhatsApp Business</h4>
                  <p>Fastest response time</p>
                </div>
              </a>

              <div className="contact-card">
                <div className="icon-wrapper">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+94 77 000 0000</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-wrapper">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>hello@weavoral.com</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Colombo, Sri Lanka <br/><small>(Island-wide delivery available)</small></p>
                </div>
              </div>
            </div>

            <div className="social-connect mt-5">
              <h4>Follow Our Journey</h4>
              <div className="social-icons">
                <a href="#" aria-label="Instagram"><Camera size={24} /></a>
                <a href="#" aria-label="Facebook"><Globe size={24} /></a>
              </div>
            </div>
          </div>

          <div className="contact-image-wrapper">
             {/* We can use the mats image here as a placeholder for a workshop/store image */}
             <img src={`${import.meta.env.BASE_URL}assets/woven-mats.png`} alt="Weavoral Products" className="contact-image rounded-image" />
             <div className="image-caption">Handmade with precision, delivered with care.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
