import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles-config/components/AboutUs.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  // Create refs for animated elements
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);
  const teamMembersRef = useRef([]);
  
  // Add to sections refs array
  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  
  // Add to team members refs array
  const addToTeamMembersRef = (el) => {
    if (el && !teamMembersRef.current.includes(el)) {
      teamMembersRef.current.push(el);
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
    
    // Simple fade-in for team members
    teamMembersRef.current.forEach((member, index) => {
      gsap.fromTo(member,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2, // Stagger the animations
          ease: "power2.out",
          scrollTrigger: {
            trigger: member,
            start: "top 90%", // Start when top of member is 90% from top of viewport
            end: "top 10%",   // End when top of member is 10% from top of viewport
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
    <div className="about-us-container">
      <div ref={headerRef} className="about-us-header">
        <h1>About MyPhysio.pro</h1>
        <div className="about-us-subtitle">Van der Walt Physiotherapists</div>
      </div>
      
      <div className="about-us-content">
        <section ref={addToSectionsRef} className="about-us-section">
          <h2 className="section-title">Our Vision</h2>
          <div className="section-content">
            <p>
            To provide a cost effective, holistic and professional physiotherapy service to the greater Witbank community, 
            with a specific field of interest in outpatient Sports Medicine, Orthopaedic rehabilitation, Back, Neck and 
            Headache treatment and rehabilitation and a hospital service where the rehab for chest conditions and pre-and 
            post operative physiotherapy services are required. Assessing, treating and preventing human movement disorders, 
            restoring normal function or minimising dysfunction and pain in adults and children with physical impairment, 
            to enable them to achieve the highest possible level of independence in their lives; preventing recurring injuries 
            and disability in the workplace, at home, or during recreational activities and promoting community health for all age groups.
            </p>
          </div>
        </section>
        
        <section ref={addToSectionsRef} className="about-us-section">
          <h2 className="section-title">Our Mission</h2>
          <div className="section-content">
            <p>
            We, the management and employees of Van der Walt Physiotherapists, make this declaration to you, our valued clients:
          </p>
          <ul className="mission-list">
            <li>We declare that we will provide physiotherapy services in a timely and friendly manner.</li>
            <li>We declare that we will provide physiotherapy services with professional quality that meet the standards of the South African Society of Physiotherapy, The Health Professions Council of South Africa and most importantly our clients' expectations.</li>
            <li>We declare that we will always present a positive public image and make our establishment one that you can visit with safety and peace of mind.</li>
            <li>We declare that we will be responsive to your suggestions and concerns.</li>
            </ul>
          </div>
        </section>
        
        <section ref={addToSectionsRef} className="about-us-team">
          <h2 className="section-title">Our Physiotherapists</h2>
          
          <div ref={addToTeamMembersRef} className="team-member">
            <div className="team-member-image">
              <img src="https://www.myphysio.pro/images/_global/jaco.png" alt="Jaco van der Walt" />
            </div>
            <div className="team-member-info">
              <h3>Jaco van der Walt</h3>
              <h4>Owner, B.Sc.(Physiotherapy) UFS</h4>
              <div className="team-member-bio">
                <p>
                  Jaco van der Walt matriculated in 1996 in Bloemfontein. In 2001 he completed a degree in B.Sc. Physiotherapy at the University of the Free State. Jaco worked with a well known sports physio in private practice in Pretoria after graduation where he worked as a Junior Physio for Supersport United Soccer team and Physio for the SA Rugby League national team - Rhinos. In 2002 he started a private practice in Witbank. Married to Mariska in 2005. They have two beautiful daughters, Zanelle and Lené.
                </p>
                <p>
                  From 2002 - 2007 he was contracted as the team physiotherapist for the Pumas Rugby Team. From 2007-2009 the practice was a preferred provider of physiotherapy services for both the Witbank Spurs and Mpumalanga Black Aces Soccer teams. In 2008 he completed a 3 part course in Kinesio Taping becoming a Certified Kinesio Taping Practitioner. Jaco is past chair of the Nkangala branch of the SA Society of Physiotherapy for the 2009-2012 term. Since then Jaco has focused on building a strong hospital practice, treating patients at Life Cosmos Hospital in Witbank as well as a strong out-patient practice.
                </p>
                <p>
                  Jaco has completed numerous post graduate CPD courses in Rehabilitation, Various treatment techniques, Vertebral Manipulation and Men's Health.
                </p>
                <p>
                  <strong>Special interests:</strong> Kinesio Taping, OMT, Sports Injuries, Dry Needling, Orthopaedic Rehabilitation, Biomechanical-, Postural- and Ergonomic assessment and correction with video analysis.
                </p>
              </div>
            </div>
          </div>
          
          <div ref={addToTeamMembersRef} className="team-member">
            <div className="team-member-image">
              <img src="https://www.myphysio.pro/images/_global/Jeanine.jpeg" alt="Jeanine Jacobs" />
            </div>
            <div className="team-member-info">
              <h3>Jeanine Jacobs</h3>
              <h4>B.Sc.(Physiotherapy) UFS</h4>
              <div className="team-member-bio">
                <p>
                  Jeanine Jacobs joined the practice in January 2020. She was born in Ermelo. She matriculated from Ermelo High School in 2014. She completed her B.Sc. (Physiotherapy) degree at the University of the Free State. Thereafter she did her community service year at Bongani Regional Hospital in Welkom in 2019. Jeanine competed dry needling courses in 2019 to broaden her knowledge. Jeanine loves helping her fellow humans. She is a dedicated and hardworking physiotherapist. She is caring and passionate about her patients. She loves being surrounded by family, friends and nature.
                </p>
              </div>
            </div>
          </div>
          
          <div ref={addToSectionsRef} className="professional-development">
            <h3>Continuing Professional Development</h3>
            <p>
              As required by the Continuing Professional Development (CPD) programme of the Health Professions Council of South Africa we constantly attend seminars, congresses and workshops to stay up to date with international trends, updated treatment techniques and best-practice standards of physiotherapy. We do not believe in only complying with the HPCSA's regulations but to exceed the minimum requirements. By continually attending courses presented by local and international specialists in their respective fields, we gain the maximum amount of professional development to the benefit of our patients.
            </p>
          </div>
        </section>
        
        <section ref={addToSectionsRef} className="about-us-team">
          <h2 className="section-title">Our Administrative Staff</h2>
          
          <div ref={addToTeamMembersRef} className="team-member">
            <div className="team-member-image">
              <img src="https://www.myphysio.pro/images/_global/mad.png" alt="Madelein Vermeulen" />
            </div>
            <div className="team-member-info">
              <h3>Madelein Vermeulen</h3>
              <h4>Practice Administrator</h4>
              <div className="team-member-bio">
                <p>
                  Madelein joined our team as Practice Administrator in October 2015 and we are truly grateful for her contribution! She is hard working, dedicated and a great asset. She brought her expertise gained from her previous positions in banking administration, as well experience from employment in a medical practice.
                </p>
                <p>
                  Madelein is the friendly voice on the other side of the phone when making appointments or following up on medical aid claims. With her familiar smile behind the reception desk, you will immediately feel at home when you walk into the practice!
                </p>
              </div>
            </div>
          </div>
          
          <div ref={addToTeamMembersRef} className="team-member">
            <div className="team-member-image">
              <img src="https://www.myphysio.pro/images/_global/mariska.png" alt="Mariska van der Walt" />
            </div>
            <div className="team-member-info">
              <h3>Mariska van der Walt</h3>
              <h4>Dipl. Somot. ITEC/Cidesco</h4>
              <div className="team-member-bio">
                <p>
                  Mariska, Jaco's wife joined the administration team at the end of 2012. Having managed her own busy beauty salon for 13 years, she gained valuable interpersonal and management skills. These skills come in handy dealing with credit control and managing the practice.
                </p>
                <p>
                  She also has a full time job 'managing' our beautiful daughters, Zanelle and Lené!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section ref={addToSectionsRef} className="about-us-facilities">
          <h2 className="section-title">Our Facilities</h2>
          
          <div className="facility-info">
            <h3>Van der Walt Physio</h3>
            <h4>117 Woltemade Street, Die Heuwel, Witbank</h4>
            <div className="facility-content">
              <div className="facility-image">
                <img src="https://www.myphysio.pro/images/_global/prac.png" alt="Van der Walt Physio Facilities" />
              </div>
              <div className="facility-description">
                <p>
                  The practice is situated in the suburb of Die Heuwel, Witbank. We offer a waiting area, 4 individual general treatment rooms and an 'open air gymnasium' for physical rehabilitation. We endeavour to keep our premises as safe as we can. We sanitise every room and change towels and linen after every patient.
                </p>
                <p>
                  We have an on-site laundry to ensure clean linen and sterilizing equipment to guarantee equipment hygiene. Our premises are fully accessible to physically challenged persons.
                </p>
                <p>
                  We accept medical aid patients, private patients (with debit and credit card facilities available) and RMA and FEM WCA Injury on Duty patients by prior arrangement. Unfortunately due to current legislation we do not claim directly from the Road Accident Fund.
                </p>
                <p>
                  A back-up generator and stored water is available in the event of disruption of municipal supply.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
