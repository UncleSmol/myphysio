import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronRight, FaChevronLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../../styles-config/components/Services.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // State to track which service is expanded
  const [expandedService, setExpandedService] = useState(null);
  // State to track if we're on mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Create refs for animated elements
  const headerRef = useRef(null);
  const serviceItemsRef = useRef([]);
  
  // Add to service items refs array
  const addToServiceItemsRef = (el) => {
    if (el && !serviceItemsRef.current.includes(el)) {
      serviceItemsRef.current.push(el);
    }
  };
  
  // Service data
  const servicesData = [
    {
      id: 1,
      title: "Evaluation",
      summary: "A thorough assessment to determine the cause and nature of your injury or condition.",
      description: "During your first consultation we will do a thorough evaluation including both an interview and physical examination to determine the cause and nature of your injury or condition. After obtaining an informed consent, we use various listening techniques as well as physical tests to establish both an individual treatment programme for your condition as well as a tailor made exercise programme, based on years of extensive training and experience. Video and photo analysis is also used to assist in determining possible causes of the injury or condition, such as posture correction, gait or running analysis, throwing/bowling and kicking analysis or muscle imbalances. Each follow up session will also include a re-evaluation to determine the response to treatment and if necessary, changes are made to the treatment to ensure a speedy recovery and return to a healthier YOU!"
    },
    {
      id: 2,
      title: "Manual Therapy",
      summary: "Skilled, specific hands-on techniques to treat soft tissues and joint structures.",
      description: "Manual therapy is defined as a clinical approach utilizing skilled, specific hands-on techniques, including but not limited to manipulation/mobilization, used by the physical therapist to diagnose and treat soft tissues and joint structures for the purpose of modulating pain; increasing range of motion (ROM); reducing or eliminating soft tissue inflammation; inducing relaxation; improving contractile and non-contractile tissue repair, extensibility, and/or stability; facilitating movement; and improving function. At Van der Walt Physiotherapists we pride ourselves in our use of hands-on manual therapy techniques and constantly attend courses and workshops to keep up to date with international trends in our profession."
    },
    {
      id: 3,
      title: "Dry Needling",
      summary: "Thin, flexible needles inserted into trigger points to treat musculoskeletal pain.",
      description: "Dry needling is a form of physical therapy used to treat musculoskeletal pain and dysfunction. It is an invasive form of myofascial release in which thin, flexible needles are inserted into the body. The positioning of the needles in the body is determined by accurate anatomical knowledge based on sound scientific reasoning. This is different to acupuncture, which is a treatment technique related to Chinese Medicine, and takes a philosophical rather than a physical approach to the body. We will thoroughly explain the technique to be used and ask you to sign a specific consent prior to dry needling being performed."
    },
    {
      id: 4,
      title: "Strapping / Taping",
      summary: "Support and aid recovery from injury, allowing earlier return to normal activity.",
      description: "Through involvement with both amateur and professional sports, our physio's has gained extensive experience of strapping techniques for sports injuries and Jaco also lectured on the subject at workshops for his fellow physiotherapists. Strapping and Taping allows earlier return to normal activity by supporting and aiding the body as it recovers from injury. The latest addition to the taping 'toolbox' is Dynamic Taping with stunning 'tattoo' printed tape used for muscle recovery and rehabilitation."
    },
    {
      id: 5,
      title: "Electrotherapy",
      summary: "Various electrical stimulation devices for muscle rehabilitation and pain management.",
      description: "We make use of various electrical stimulation devices at the practice, including Interferential current, Russian and muscle stimulation currents and TENS. According to Wikipedia, Electrotherapy is used for the relaxation of muscle spasms, prevention and retardation of disuse atrophy, increase of local blood circulation, muscle rehabilitation and re-education, electrical muscle stimulation, maintaining and increasing range of motion, post-traumatic acute pain and post surgical acute pain."
    },
    {
      id: 6,
      title: "Products for Sale",
      summary: "Therapeutic products to support your recovery and continue treatment at home.",
      description: "The products that we sell are intended as a continuation of your treatment at home. We believe that your therapy should continue once you leave our practice and would recommend a product for home use if we believe it would be to your advantage. Products ranging from microwave heat packs, massage creams, TENS therapy devices and more. Enquire with your next visit."
    }
  ];
  
  // Toggle expanded service
  const toggleService = (id) => {
    if (expandedService === id) {
      // If clicking the already expanded service, collapse it
      setExpandedService(null);
    } else {
      // Otherwise, expand the clicked service
      setExpandedService(id);
    }
  };
  
  // Handle window resize to determine if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Initialize animations on component mount
  useEffect(() => {
    // Simple fade-in for header
    gsap.fromTo(headerRef.current, 
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    // Simple fade-in for service items
    serviceItemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2, // Stagger the animations
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
  
  // Animate expansion when expandedService changes
  useEffect(() => {
    if (expandedService !== null) {
      // Find the expanded service element
      const expandedElement = document.querySelector(`.service-expanded-content[data-id="${expandedService}"]`);
      
      if (expandedElement) {
        // Animate the expanded content
        gsap.fromTo(expandedElement,
          { 
            opacity: 0, 
            x: isMobile ? 0 : (expandedService % 2 === 0 ? -20 : 20),
            y: isMobile ? 20 : 0
          },
          { 
            opacity: 1, 
            x: 0,
            y: 0, 
            duration: 0.5, 
            ease: "power2.out" 
          }
        );
      }
    }
  }, [expandedService, isMobile]);
  
  // Render the appropriate icon based on expansion state and screen size
  const renderExpandIcon = (index, isExpanded) => {
    if (isMobile) {
      return isExpanded ? <FaChevronUp className="expand-icon" /> : <FaChevronDown className="expand-icon" />;
    } else {
      return index % 2 === 0 ? 
        <FaChevronRight className={`expand-icon ${isExpanded ? 'rotated' : ''}`} /> : 
        <FaChevronLeft className={`expand-icon ${isExpanded ? 'rotated' : ''}`} />;
    }
  };
  
  return (
    <div className="services-container">
      <div ref={headerRef} className="services-header">
        <h1>Our Services</h1>
        <div className="services-subtitle">Comprehensive physiotherapy care for your needs</div>
      </div>
      
      <div className="services-content">
        <div className="services-hero">
          <img src="https://www.myphysio.pro/images/_global/manual.jpg" alt="Manual Therapy" className="services-hero-image" />
        </div>
        
        <div className="services-intro">
          <p>
            At Van der Walt Physiotherapists, we offer a comprehensive range of physiotherapy services 
            tailored to meet your specific needs. Our team of qualified professionals is dedicated to 
            providing the highest standard of care using evidence-based techniques and modern equipment.
          </p>
        </div>
        
        <div className="services-column">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              ref={addToServiceItemsRef} 
              className={`service-item ${expandedService === service.id ? 'expanded' : ''} ${index % 2 === 0 ? 'expand-right' : 'expand-left'}`}
            >
              <div className="service-item-content">
                <h2>{service.title}</h2>
                <div className="service-summary">
                  <p>{service.summary}</p>
                  <button 
                    className="expand-button"
                    onClick={() => toggleService(service.id)}
                    aria-expanded={expandedService === service.id}
                    aria-label={expandedService === service.id ? `Collapse ${service.title} details` : `Expand ${service.title} details`}
                  >
                    {renderExpandIcon(index, expandedService === service.id)}
                  </button>
                </div>
                
                {expandedService === service.id && (
                  <div className="service-expanded-content" data-id={service.id}>
                    <p>{service.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div ref={addToServiceItemsRef} className="services-cta">
          <h3>Need Physiotherapy Services?</h3>
          <p>
            Contact us today to schedule an appointment or learn more about how our services can help you 
            achieve optimal physical health and well-being.
          </p>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
