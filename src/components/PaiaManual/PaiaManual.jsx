import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../../styles-config/components/PaiaManual.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PaiaManual = () => {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    termsAndConditions: false,
    disclaimer: false,
    indemnity: false,
    emailDisclaimer: false,
    ownership: false,
    refundPolicy: false
  });
  
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
  
  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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
    <div className="paia-container">
      <div ref={headerRef} className="paia-header">
        <h1>Legal Documents</h1>
        <div className="paia-subtitle">PAIA Manual and Legal Information</div>
      </div>
      
      <div className="paia-content">
        <section ref={addToSectionsRef} className="paia-section">
          <h2 className="section-title">Legal Documents for Download</h2>
          
          <div className="documents-grid">
            <div ref={addToDocumentItemsRef} className="document-item">
              <div className="document-item-content">
                <h3>PAIA Manual</h3>
                <p>
                  The Promotion of Access to Information Act (PAIA) Manual outlines how to request 
                  information from our practice in accordance with the Act.
                </p>
                <a target='_blank' rel='noreferrer' href="https://www.myphysio.pro/docs/PAIA.pdf" className="document-button">
                  <FaDownload className="document-icon" />
                  Download PAIA Manual
                </a>
              </div>
            </div>
            
            <div ref={addToDocumentItemsRef} className="document-item">
              <div className="document-item-content">
                <h3>Privacy Statement</h3>
                <p>
                  Our Privacy Statement explains how we collect, use, and protect your personal information.
                </p>
                <a target='_blank' rel='noreferrer' href="https://www.myphysio.pro/docs/Privacy-statement.pdf" className="document-button">
                  <FaDownload className="document-icon" />
                  Download Privacy Statement
                </a>
              </div>
            </div>
            
            <div ref={addToDocumentItemsRef} className="document-item">
              <div className="document-item-content">
                <h3>Website Terms & Conditions</h3>
                <p>
                  The Terms and Conditions that govern the use of our website.
                </p>
                <a target='_blank' rel='noreferrer' href="https://www.myphysio.pro/docs/website-tc.pdf" className="document-button">
                  <FaDownload className="document-icon" />
                  Download Website T&Cs
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section ref={addToSectionsRef} className="paia-section legal-content-section">
          <h2 className="section-title">Website Terms and Conditions</h2>
          
          <div className="legal-content">
            <p className="legal-intro">
              By using the website, you agree to be bound by the Website Terms and Conditions. 
              All terms and conditions are material. Please review them carefully before proceeding. 
              The Website Terms and Conditions apply to the website in its entirety including all 
              services offered by or through the website.
            </p>
            
            <div className="legal-notice">
              <strong>COPYRIGHT NOTICE</strong>
              <p>
                The contents of this website (including without limitation all articles, statements, 
                text, images, logos, and design) are ©2021 Jaco van der Walt Physiotherapy Practice. 
                All rights reserved.
              </p>
            </div>
            
            <div className="collapsible-section">
              <button 
                className="collapsible-button" 
                onClick={() => toggleSection('termsAndConditions')}
                aria-expanded={expandedSections.termsAndConditions}
              >
                <span>Terms and Conditions</span>
                {expandedSections.termsAndConditions ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {expandedSections.termsAndConditions && (
                <div className="collapsible-content">
                  <h3>1. DEFINITIONS</h3>
                  <p>1.1 "IP address" means a unique address that identifies a device on the Internet or a local network.</p>
                  <p>1.2 "Personal information" has the meaning assigned to it in the Protection of Personal Information Act (Act 4 of 2013), and "information" has a similar meaning unless the context requires otherwise, and includes any information that identifies or relates specifically to you such as your name, age, identity number, contact details, gender, practice details, qualifications and information you use to log onto the website.</p>
                  <p>1.3 "Practice" means Jaco van der Walt Physiotherapy Practice, 117 Woltemade Street, Die Heuwel, Witbank, 1035.</p>
                  <p>1.4 "Traffic data" means any data processed for the purpose of conveyance of a communication on an electronic communications network in respect of that communication and includes data relating to the routing, duration or time of a communication.</p>
                  <p>1.5 "Web browser" means an application used to access and view this website such as Internet Explorer, Google Chrome and Safari.</p>
                  <p>1.6 "Website" means the internet website with the address http://www.myphysio.pro or any website with a URL that is validly registered to the practice.</p>
                  <p>1.7 "You" / "your" means the user of the website and the services offered by the practice on or through the website.</p>
                  
                  <h3>2. PURPOSE OF THE WEBSITE</h3>
                  <p>The main purpose of the website is to provide relevant information about the practice to patients and the public.</p>
                  
                  <h3>3. CONDITIONS OF ACCESS AND USE</h3>
                  <p>3.1 To avoid any confusion, you agree that the Website Terms and Conditions apply to your use of the website, any third-party website licensed to the practice and any information accessed via the website.</p>
                  <p>3.2 If you use the website, you must keep your access details (including your username and password) confidential and not allow other people to use them. You accept full responsibility for all activities that occur under your access details or password and accept responsibility for sharing your user name and password. Any use of your access details shall be regarded as if you were the person using such information.</p>
                  <p>3.3 Materials from the website may be copied and distributed on a limited basis for non-commercial purposes only, provided that any material copied remains intact and that all copies include the following notice in a clearly visible position: 'Copyright © 2021 Jaco van der Walt Physiotherapy Practice. All rights reserved.' These materials are for personal use only. Any copying or redistribution for commercial purposes or for compensation of any kind requires prior written permission from the practice.</p>
                  <p>3.4 By using the website, you guarantee that you will not and you will not allow third parties on your behalf to</p>
                  <p>3.4.1 make and distribute copies of the website;</p>
                  <p>3.4.2 attempt to copy, reproduce, alter, modify, reverse engineer, disassemble, decompile, transfer, exchange or translate the website; or</p>
                  <p>3.4.3 create derivative works of the website of any kind whatsoever.</p>
                  <p>3.5 You acknowledge that the terms of the agreement with your Internet provider will continue to apply when using the website. As a result, you may be charged by the Internet provider for access to network connection services for the duration of the connection while accessing the website or any such third-party charges as may arise. You accept responsibility for any such charges that arise.</p>
                  <p>3.6 If you are not the payer of the device being used to access the website, you will be assumed to have received permission from the payer for accessing and using the website.</p>
                  
                  <h3>4. DATA PROTECTION</h3>
                  <p>4.1 The website contains confidential information, which is the property of the practice and/or its data subjects and/or its business partners. Unauthorised disclosure and/or use of this information may incur civil or criminal liability.</p>
                  <p>4.2 Any of your personal information available on the website and which you supply to the practice when using the website will be used by the practice in accordance with its Privacy Policy and subject to legislation.</p>
                  <p>4.3 You guarantee that all information provided by you on or via the website is true, accurate, current and correct and you undertake to update the information as and when required.</p>
                  <p>4.4 All information that you provide to the practice may be stored electronically and with third parties, which parties are bound by strict levels of confidentiality. These electronic records shall be proof of the information unless you can prove otherwise.</p>
                  <p>4.5 The practice takes all reasonable steps to protect your personal information and maintain confidentiality, including by making use of encryption technology. However, the practice cannot guarantee the security or integrity of any information you transmit to it online and you agree that you do so at your own risk.</p>
                  
                  <h3>5. INTELLECTUAL PROPERTY</h3>
                  <p>5.1 All trademarks, copyright, database and other intellectual property rights of any nature in the website together with the underlying software code as well as any content made available on the website (e.g. text, graphics, logos, images, etc.) are owned either directly by the practice or by the practice's licensors unless expressly stated otherwise.</p>
                  <p>5.2 You do not obtain any trademark, copyright, database or any other intellectual property right of any nature or licence by using the website.</p>
                  <p>5.3 You are not granted any license or right to use any trademark without the practice's prior written permission and/or that of any third party.</p>
                  
                  <h3>6. BREACH</h3>
                  <p>If you breach the Website Terms and Conditions, the practice shall have the right to claim damages of whatsoever nature from you, including special, incidental, consequential or indirect damages. In addition, the practice shall have the right to claim loss of profits and loss of business and to recover all legal costs on a scale as between attorney and own client from you.</p>
                  
                  <h3>7. TERMINATION</h3>
                  <p>7.1 The practice may in its sole discretion terminate your use of the website at any time by giving notice of termination to you, where this is possible.</p>
                  <p>7.2 You agree that the following actions shall constitute material breaches of the Website Terms and Conditions that shall result in the termination of your access to the website, if possible:</p>
                  <p>7.2.1 signing in as, or pretending to be another person;</p>
                  <p>7.2.2 transmitting material that violates, or could violate, the intellectual property rights or the privacy of others;</p>
                  <p>7.2.3 using interactive services in a way that is intended to harm, or could result in harm to you or to other users of the website; or</p>
                  <p>7.2.4 gathering information about others without obtaining prior written consent.</p>
                  <p>7.3 Upon termination of use as contemplated in this clause 7, the rights granted to you by the Website Terms and Conditions shall terminate.</p>
                  
                  <h3>8. DISCLAIMERS AND LIMITATION OF LIABILITY</h3>
                  <p>8.1 The practice tries to ensure that the most sophisticated technology protects the information on the website. However, the practice cannot be held responsible for any consequences that may result from the unlawful breach of copyright or unlawful dissemination of information by third parties copying information off the website. If you suspect a breach or where a breach may have taken place and this comes to your knowledge, please contact the practice or the webmaster as soon as possible so that the problem can be addressed.</p>
                  <p>8.2 The website and all information, content, tools and materials are provided by the practice "as is" and on an "as available" basis without warranty of any kind.</p>
                  <p>8.3 The practice does not guarantee the operation of the website or the information content, tools or materials on the website.</p>
                  <p>8.4 While the practice makes every effort to ensure that the content and information on the website is complete, accurate and up-to-date, it makes no guarantee about the suitability of the products and services and provide no representation or warranty, express or implied, regarding the accuracy, correctness and completeness of information contained on the website.</p>
                  <p>8.5 The practice does not guarantee that the website, information, content, tools or materials included on the website, the practice's servers or any electronic communications sent by it are free from viruses or other harmful components.</p>
                  <p>8.6 The views and opinions expressed on this website, links or attachments hereto do not necessarily reflect the views and/or opinions of the practice. Regardless of the vast professional knowledge and scientific expertise in the field of physiotherapy that the practice possesses, it cannot inspect all information to determine the truthfulness, accuracy, reliability, completeness or relevance thereof.</p>
                  <p>8.7 Although the practice is fully committed to providing you with the best possible service, it shall not be responsible for:</p>
                  <p>8.7.1 any interrupted, delayed or failed transmission, storage or delivery of information due to a power failure, equipment or software malfunction, natural disasters, fire, labour unrest, epidemics, pandemics, or any other cause beyond the reasonable control of the practice, or</p>
                  <p>8.7.2 any inaccurate, incomplete or inadequate information supplied by you and obtainable from the website.</p>
                  <p>8.8 The website and all of its component elements, including text, graphics, images, hyperlinks and other materials supplied by third parties, are for general educational purposes only and do not take the place of professional medical or physiotherapy advice. To the extent that clinical information may be provided on the website, it is based on best practice and/or current research, recommendations and guidelines, which may change from time to time. The information provided does not replace the advice of a registered health care practitioner. You should not discontinue any treatment you may be receiving on the basis of information reflected on this website without first consulting your treating practitioner and you should seek professional advice should any symptoms you may be experiencing persist.</p>
                  <p>8.9 You agree to use the website at your own risk.</p>
                  <p>8.10 The practice, its directors / partners, employees, contractors and website contributors shall not be liable to you or any other person or entity for, and you agree to indemnify them against, any claim or damages of any kind, including for direct, indirect, special, incidental, punitive and/or consequential damages as well as loss of profit or the like whether or not in the contemplation of the parties, whether based on breach of contract, delict (including negligence), product liability or otherwise, arising from -</p>
                  <p>8.10.1 your use of the website or from any information, content, tools or materials included on or otherwise made available to you through the website, including any damage or alteration to your equipment, including but not limited to computer equipment, handheld devices or mobile telephones;</p>
                  <p>8.10.2 for any decision taken or acted upon as a result of reliance on the information or philosophies contained or expressed on the website;</p>
                  <p>8.10.3 any of the events described in this clause 8;</p>
                  <p>8.10.4 your actions or omissions that result in a breach of the Website Terms and Conditions;</p>
                  <p>8.10.5 any links to other websites from the website. You also acknowledge that the practice cannot control the content of or the products and services offered on those websites; and/or</p>
                  <p>8.10.6 a denial of access to the website should the practice have reason to believe that you are conducting activities that are illegal, abusive, would affect the integrity of the website or place the practice in disrepute.</p>
                  
                  <h3>9. WEBSITE ANALYTICS</h3>
                  <p>You may visit the website without providing any personal information. The website servers will in such instances collect the IP address used by the data subject to access the website, but not the e-mail address or any other personal identifiable information. The information on IP addresses is aggregated to measure the number of visits, the average time spent at the website, pages viewed, etc. The practice analyses non-identifiable traffic data to improve its services, via a third-party programme, Google Analytics.</p>
                  <p>The practice may collect, hold and use statistical information about website visits to help it improve the website. Such information includes –</p>
                  <p>• your IP address;</p>
                  <p>• the research terms you used;</p>
                  <p>• the pages accessed on the website and the links visitors clicked on;</p>
                  <p>• the date and time you visited the website;</p>
                  <p>• the referring website (if any) through which you clicked through to our website; and</p>
                  <p>• the type of web browser you use.</p>
                  <p>The traffic data is aggregated and is not personally identifiable. Our website analysis will respect any "does not track" setting you may have set on your web browser.</p>
                  
                  <h3>10. COOKIES</h3>
                  <p>The practice uses industry-wide technologies such as 'cookies' to collect information about the use of the website, your preferences and past browsing history. 'Cookies' refer to information that is sent from the website to your hard drive, where it is saved. This will allow the practice to improve its services and your experience when you use the website again. The cookies do not collect any personal information about data subjects. The information obtained will be shared with persons or entities to the extent necessary for them to administer and improve the website on our behalf.</p>
                  
                  <h3>11. JURISDICTION</h3>
                  <p>The laws of the Republic of South Africa shall govern these Website Terms and Conditions.</p>
                  
                  <h3>12. AMENDMENTS TO THE WEBSITE TERMS AND CONDITIONS</h3>
                  <p>The practice may in its sole discretion amend the Website Terms and Conditions from time to time without prior notice. The latest Website Terms and Conditions available on the website shall at all times take precedence over any other version of these Terms. It is your responsibility to make sure you are satisfied with any changes before continuing to use the website.</p>
                  
                  <h3>13. FURTHER INFORMATION</h3>
                  <p>If you have questions about these Website Terms and Conditions, please contact the Information Officer / webmaster at info@myphysio.pro.</p>
                </div>
              )}
            </div>
            
            <div className="collapsible-section">
              <button 
                className="collapsible-button" 
                onClick={() => toggleSection('disclaimer')}
                aria-expanded={expandedSections.disclaimer}
              >
                <span>Disclaimer of Consequential Damages</span>
                {expandedSections.disclaimer ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {expandedSections.disclaimer && (
                <div className="collapsible-content">
                  <p>myphysio.pro does not give any warranty, express or implied or other assurance as to the the gains to be made using the site. Visitors use the site at their own risk. The site is provided on an 'as is' basis without warranties or gurantees of any kind. The operators of the site disclaim any warranties, implied or express, statutary or otherwise, including but not limited to the implied warranties of merchantability, non-infringement of 3rd parties rights and fitness for any particular purpose. The site is a source of general information.</p>
                  <p>myphysio.pro makes no claims about the accuracy, completeness or reliability of the content on the site. Under no circumstances will myphysio.pro or anyone else mentioned on myphysio.pro be liable for any damages whatsoever resulting from the use or inability to use the site. This includes incidental and consequential damages, lost profits or damages resulting from lost data or business interruption.</p>
                </div>
              )}
            </div>
            
            <div className="collapsible-section">
              <button 
                className="collapsible-button" 
                onClick={() => toggleSection('indemnity')}
                aria-expanded={expandedSections.indemnity}
              >
                <span>Indemnity</span>
                {expandedSections.indemnity ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {expandedSections.indemnity && (
                <div className="collapsible-content">
                  <p>By using this site you agree to defend, indemnify and hold myphysio.pro, its officers, directors, employees, agents, licensors and suppliers, harmless from and against any claims, actions or demands, liabilities and settlements including without limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, your use of the Content in a manner that violates or is alleged to violate these Legal Terms and Conditions.</p>
                </div>
              )}
            </div>
            
            <div className="collapsible-section">
              <button 
                className="collapsible-button" 
                onClick={() => toggleSection('emailDisclaimer')}
                aria-expanded={expandedSections.emailDisclaimer}
              >
                <span>Email Disclaimer</span>
                {expandedSections.emailDisclaimer ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {expandedSections.emailDisclaimer && (
                <div className="collapsible-content">
                  <p>The following disclaimer applies to any and all email communications from this practice: The contents of this e-mail and any files or attachments transmitted with it are confidential, may be legally privileged and it may not be disclosed to, copied or used by anyone other than the addressee, nor may it be used or copied without the consent of the sender. The contents of this e-mail and its attachments shall not be binding on this practice unless signed by its duly authorised representatives. Whilst we have taken reasonable precautions against viruses, we do not accept liability for any damages as a result of software viruses. If you are not the intended recipient, please inform us by reply and delete all copies on your system.</p>
                </div>
              )}
            </div>
            
            <div className="collapsible-section">
              <button 
                className="collapsible-button" 
                onClick={() => toggleSection('ownership')}
                aria-expanded={expandedSections.ownership}
              >
                <span>Ownership and Intellectual Property</span>
                {expandedSections.ownership ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {expandedSections.ownership && (
                <div className="collapsible-content">
                  <p>The domain and website www.myphysio.pro is owned and maintained by Jaco van der Walt. All HTML code, images and other intelectual property contained and linked to this website is the property of Jaco van der Walt and / or Van der Walt physiotherapists. All images are copyrighted and published with the understanding that they remain the property of said owner, you are not allowed to copy / download / alter these images without the express consent of the webmaster, with due understanding of temporary files placed on your computer. Images not created by the owner are legally bought from third parties and used under licence. Images on this site and our Facebook blog containing images of patients are published with the express consent of the patient. We will endeavour to keep the patient's identity private unless legally required to disclose such information (in camera, by choice) as required by current South African legislation, ethical guidelines and morals.</p>
                </div>
              )}
            </div>
            
            <div className="collapsible-section">
              <button 
                className="collapsible-button" 
                onClick={() => toggleSection('refundPolicy')}
                aria-expanded={expandedSections.refundPolicy}
              >
                <span>Refund Policy</span>
                {expandedSections.refundPolicy ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {expandedSections.refundPolicy && (
                <div className="collapsible-content">
                  <p>This practice has a 30 (Thirty) days refund policy. Refunds will only be made once the 30 days have passed and only if the funds have cleared through the bank. Refunds will only be made as an EFT transfer and not in cash. Subject to an approval from the owner.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <div ref={addToSectionsRef} className="paia-note">
          <h3>Need Legal Assistance?</h3>
          <p>
            If you have any questions about our legal documents or need clarification on any terms, 
            please contact our office. We're committed to transparency and compliance with all 
            applicable laws and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaiaManual;