import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaUserMd, FaHeartbeat, FaRunning, FaCalendarCheck } from 'react-icons/fa';
import '../../styles-config/components/Home.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Create refs for animated elements
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
  const infographicsRef = useRef(null);
  const infographicItemsRef = useRef([]);
  const ctaSectionRef = useRef(null);
  const testimonialsRef = useRef(null);
  const testimonialItemsRef = useRef([]);
  
  // Add to infographic items refs array
  const addToInfographicItemsRef = (el) => {
    if (el && !infographicItemsRef.current.includes(el)) {
      infographicItemsRef.current.push(el);
    }
  };
  
  // Add to testimonial items refs array
  const addToTestimonialItemsRef = (el) => {
    if (el && !testimonialItemsRef.current.includes(el)) {
      testimonialItemsRef.current.push(el);
    }
  };
  
  // Initialize animations on component mount
  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    ).fromTo(heroContentRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    ).fromTo(heroImageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );
    
    // Infographics section animations
    gsap.fromTo(infographicsRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: infographicsRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Infographic items animations
    infographicItemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play none none none"
          }
        }
      );
    });
    
    // Testimonials section animations
    gsap.fromTo(testimonialsRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Testimonial items animations
    testimonialItemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play none none none"
          }
        }
      );
    });
    
    // CTA section animations
    gsap.fromTo(ctaSectionRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: "top 85%",
          end: "top 30%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-content" ref={heroContentRef}>
          <h1>Expert Physiotherapy Care in Witbank</h1>
          <h2>Restoring Movement, Relieving Pain</h2>
          <p>
            At Van der Walt Physiotherapists, we're dedicated to helping you recover, 
            rehabilitate, and return to your best physical condition.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="primary-button">
              Our Services <FaArrowRight className="button-icon" />
            </Link>
            <Link to="/contact" className="secondary-button">
              Book Appointment
            </Link>
          </div>
        </div>
        <div className="hero-image" ref={heroImageRef}>
          <img 
            src="https://www.myphysio.pro/images/_global/manual.jpg" 
            alt="Physiotherapy Treatment" 
          />
        </div>
      </section>
      
      {/* Infographics Section */}
      <section ref={infographicsRef} className="infographics-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="infographics-grid">
          <div ref={addToInfographicItemsRef} className="infographic-item">
            <div className="infographic-icon">
              <FaUserMd />
            </div>
            <h3>Expert Therapists</h3>
            <p>
              Our team consists of highly qualified physiotherapists with specialized 
              training and years of experience.
            </p>
          </div>
          
          <div ref={addToInfographicItemsRef} className="infographic-item">
            <div className="infographic-icon">
              <FaHeartbeat />
            </div>
            <h3>Personalized Care</h3>
            <p>
              We develop customized treatment plans tailored to your specific needs 
              and recovery goals.
            </p>
          </div>
          
          <div ref={addToInfographicItemsRef} className="infographic-item">
            <div className="infographic-icon">
              <FaRunning />
            </div>
            <h3>Comprehensive Approach</h3>
            <p>
              Our treatments address not just symptoms but the root causes of your 
              condition for lasting results.
            </p>
          </div>
          
          <div ref={addToInfographicItemsRef} className="infographic-item">
            <div className="infographic-icon">
              <FaCalendarCheck />
            </div>
            <h3>Convenient Scheduling</h3>
            <p>
              We offer flexible appointment times to accommodate your busy lifestyle.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="testimonials-section">
        <h2 className="section-title">What Our Patients Say</h2>
        <div className="testimonials-grid">
          <div ref={addToTestimonialItemsRef} className="testimonial-item">
            <div className="testimonial-content">
              <p>
                "After my sports injury, I thought I'd never play again. The team at Van der Walt 
                Physiotherapists got me back on the field faster than I expected. Their expertise 
                and encouragement made all the difference."
              </p>
              <div className="testimonial-author">
                <span className="author-name">Michael S.</span>
                <span className="author-title">Sports Injury Patient</span>
              </div>
            </div>
          </div>
          
          <div ref={addToTestimonialItemsRef} className="testimonial-item">
            <div className="testimonial-content">
              <p>
                "I've been dealing with chronic back pain for years. The personalized treatment plan 
                and hands-on approach have significantly improved my quality of life. I can now enjoy 
                activities I had given up on."
              </p>
              <div className="testimonial-author">
                <span className="author-name">Sarah J.</span>
                <span className="author-title">Chronic Pain Patient</span>
              </div>
            </div>
          </div>
          
          <div ref={addToTestimonialItemsRef} className="testimonial-item">
            <div className="testimonial-content">
              <p>
                "The post-surgery rehabilitation program was exactly what I needed. The therapists were 
                professional, knowledgeable, and genuinely cared about my recovery. I'm now back to 100%."
              </p>
              <div className="testimonial-author">
                <span className="author-name">David M.</span>
                <span className="author-title">Post-Surgery Patient</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section ref={ctaSectionRef} className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Recovery Journey?</h2>
          <p>
            Contact us today to schedule your initial consultation and take the first 
            step toward improved mobility and pain-free living.
          </p>
          <Link to="/contact" className="cta-button">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;