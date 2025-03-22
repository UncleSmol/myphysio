import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to MY PHYSIO</h1>
        <p>Professional Physiotherapy Services</p>
      </header>
      
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Pain Management</h3>
            <p>Specialized treatments to alleviate chronic and acute pain.</p>
          </div>
          <div className="service-item">
            <h3>Rehabilitation</h3>
            <p>Comprehensive rehabilitation programs for post-injury recovery.</p>
          </div>
          <div className="service-item">
            <h3>Sports Therapy</h3>
            <p>Targeted therapy for athletes and sports-related injuries.</p>
          </div>
        </div>
      </section>
      
      <section className="about">
        <h2>About Us</h2>
        <p>MY PHYSIO is dedicated to providing high-quality physiotherapy services to help you recover, strengthen, and improve your quality of life.</p>
      </section>
      
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Schedule an appointment today:</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@myphysio.com</p>
        <p>Address: 123 Therapy Lane, Health City</p>
      </section>
    </div>
  );
}

export default Home;