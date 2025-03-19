import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../../styles-config/components/Documents.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Documents = () => {
  // Create refs for animated elements
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);
  const documentItemsRef = useRef([]);
  
  // Add to sections refs array
  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  
  // Add to document items refs array
  const addToDocumentItemsRef = (el) => {
    if (el && !documentItemsRef.current.includes(el)) {
      documentItemsRef.current.push(el);
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
    
    // Simple fade-in for document items
    documentItemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15, // Stagger the animations
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%", // Start when top of item is 90% from top of viewport
            end: "top 10%",   // End when top of item is 10% from top of viewport
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
    <div className="documents-container">
      <div ref={headerRef} className="documents-header">
        <h1>Documents</h1>
        <div className="documents-subtitle">Forms and information for patients and healthcare providers</div>
      </div>
      
      <div className="documents-content">
        <section ref={addToSectionsRef} className="documents-section">
          <h2 className="section-title">Documents for Patients</h2>
          
          <div className="documents-grid">
            <div ref={addToDocumentItemsRef} className="document-item">
              <div className="document-item-content">
                <h3>Credit Agreement</h3>
                <p>
                  Download, complete and return the credit agreement to us prior to your first appointment. 
                  Contact details below.
                </p>
                <a target='_blank' rel='noopener noreferrer' href="https://www.myphysio.pro/docs/2021_Credit_Agreement%20for_Download.pdf" className="document-button">
                  <FaDownload className="document-icon" />
                  Download Credit Agreement
                </a>
              </div>
            </div>
            
            <div ref={addToDocumentItemsRef} className="document-item">
              <div className="document-item-content">
                <h3>Privacy Statement</h3>
                <p>
                  Download the practice's POPIA Compliant privacy statement here.
                </p>
                <a target='_blank' rel='noopener noreferrer' href="https://www.myphysio.pro/docs/Privacy-statement.pdf" className="document-button">
                  <FaDownload className="document-icon" />
                  Download Privacy Statement
                </a>
              </div>
            </div>
            
            <div ref={addToDocumentItemsRef} className="document-item">
              <div className="document-item-content">
                <h3>Practice Map</h3>
                <p>
                  Click below to be directed to Google Maps to view the practice location.
                </p>
                <div className="document-buttons">
                  
                  <a href="https://maps.google.com/?q=Van+der+Walt+Physiotherapists" target="_blank" rel="noopener noreferrer" className="document-button document-button-secondary">
                    <FaMapMarkerAlt className="document-icon" />
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section ref={addToSectionsRef} className="documents-section">
          <h2 className="section-title">Documents for Referring Providers</h2>
          
          <div className="documents-grid">
            <div ref={addToDocumentItemsRef} className="document-item document-item-wide">
              <div className="document-item-content">
                <h3>Referral Letter</h3>
                <p>
                  You can download and complete the referral letter including a map to our practice.
                </p>
                <div className="document-buttons">
                  <a target='_blank' rel='noopener noreferrer' href="https://www.myphysio.pro/docs/Referral.pdf" className="document-button">
                    <FaDownload className="document-icon" />
                    Download Referral Letter
                  </a>
                  <a href="mailto:admin@myphysio.pro" className="document-button document-button-secondary">
                    <FaEnvelope className="document-icon" />
                    Email: admin@myphysio.pro
                  </a>
                  <a href="https://wa.me/27833809768" target="_blank" rel="noopener noreferrer" className="document-button document-button-secondary">
                    <FaWhatsapp className="document-icon" />
                    WhatsApp: 083 380 9768
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div ref={addToSectionsRef} className="documents-note">
          <h3>Need Assistance?</h3>
          <p>
            If you have any questions about these documents or need help completing them, 
            please don't hesitate to contact our office. We're here to help make your 
            experience with us as smooth as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;