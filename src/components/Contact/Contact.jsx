import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';
import '../../styles-config/components/Contact.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // Create refs for animated elements
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);
  
  // Add to sections refs array
  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  
  // Initialize animations on component mount
  useEffect(() => {
    // Simple fade-in for header
    gsap.fromTo(headerRef.current, 
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    // Simple fade-in for sections
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%", // Start when top of section is 90% from top of viewport
            end: "top 10%",   // End when top of section is 10% from top of viewport
            toggleActions: "play none none none" // Play once when entering
          }
        }
      );
    });
    
    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="contact-container">
      <div ref={headerRef} className="contact-header">
        <h1>Contact Us</h1>
        <div className="contact-subtitle">Get in touch with Van der Walt Physiotherapists</div>
      </div>
      
      <div className="contact-content">
        <div className="contact-grid">
          <div ref={addToSectionsRef} className="contact-info-section">
            <div className="contact-card">
              {/* <div className="contact-card-header">
                <FaMapMarkerAlt className="contact-icon" />
                <h2>Visit Us</h2>
              </div> */}
            </div>
            
            <div className="contact-card">
              <div className="contact-card-header">
                <FaPhone className="contact-icon" />
                <h2>Phone Us</h2>
              </div>
              <div className="contact-card-content">
                <a href="tel:+27136562331" className="contact-link">013-656-2331</a>
                <a href="tel:+27871494320" className="contact-link">087-149-4320</a>
                <a href="tel:+27871531627" className="contact-link">087-153-1627</a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-header">
                <FaWhatsapp className="contact-icon" />
                <h2>WhatsApp Us</h2>
              </div>
              <div className="contact-card-content">
                <a href="https://wa.me/27833809768" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-link">
                  <FaWhatsapp className="contact-link-icon" />
                  Click to Chat: 083 380 9768
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-header">
                <FaEnvelope className="contact-icon" />
                <h2>Email Us</h2>
              </div>
              <div className="contact-card-content">
                <a href="mailto:admin@myphysio.pro" className="contact-link">
                  <FaEnvelope className="contact-link-icon" />
                  admin@myphysio.pro
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-header">
                <FaFacebookSquare className="contact-icon" />
                <h2>Social Media</h2>
              </div>
              <div className="contact-card-content">
                <a 
                  href="https://www.facebook.com/JacoVanDerWaltPhysiotherapists" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link facebook-link"
                >
                  <FaFacebookSquare className="contact-link-icon" />
                  Jaco van der Walt Physiotherapists
                </a>
              </div>
            </div>
          </div>
          
          <div ref={addToSectionsRef} className="contact-map-section">
            <div className="map-container">
              <h2>Our Location</h2>
              <div className="map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0506246750734!2d29.22815491502734!3d-25.87654998358985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eebbf1f6f7b5c7d%3A0x5c2a1a9d9c0c9b9e!2s117%20Woltemade%20St%2C%20Die%20Heuwel%2C%20Emalahleni%2C%201035!5e0!3m2!1sen!2sza!4v1628000000000!5m2!1sen!2sza" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Van der Walt Physiotherapists Location"
                  className="google-map"
                ></iframe>
              </div>
              <p className="map-note">Click on the map to interact or open in Google Maps</p>
            </div>
          </div>
        </div>
        
        <div ref={addToSectionsRef} className="contact-hours-section">
          <div className="hours-card">
            <h2>Practice Hours</h2>
            <div className="hours-grid">
              <div className="hours-day">
                <span className="day">Monday - Friday</span>
                <span className="time">8:00 AM - 5:00 PM</span>
              </div>
              <div className="hours-day">
                <span className="day">Saturday</span>
                <span className="time">By Appointment</span>
              </div>
              <div className="hours-day">
                <span className="day">Sunday & Public Holidays</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={addToSectionsRef} className="contact-form-section">
          <div className="form-card">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Your Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;