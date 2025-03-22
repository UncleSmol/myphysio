import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/styled';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Documents from './components/Documents/Documents';
import PaiaManual from './components/PaiaManual/PaiaManual';
import Contact from './components/Contact/Contact';
import SEO from './components/SEO/SEO';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        {/* Default SEO for the whole site */}
        <SEO />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <SEO 
                  title="MY PHYSIO - Home | Professional Physiotherapy Services"
                  description="Welcome to MY PHYSIO. We offer expert physiotherapy services tailored to your needs for optimal health and recovery."
                  canonicalUrl="/"
                />
                <Home />
              </>
            } />
            <Route path="/about" element={
              <>
                <SEO 
                  title="About Us | MY PHYSIO"
                  description="Learn about our team of qualified physiotherapists and our approach to patient care and rehabilitation."
                  canonicalUrl="/about"
                />
                <AboutUs />
              </>
            } />
            <Route path="/services" element={
              <>
                <SEO 
                  title="Our Services | MY PHYSIO"
                  description="Explore our comprehensive range of physiotherapy services including rehabilitation, sports therapy, pain management, and more."
                  canonicalUrl="/services"
                  schemaType="Service"
                />
                <Services />
              </>
            } />
            <Route path="/documents" element={
              <>
                <SEO 
                  title="Documents | MY PHYSIO"
                  description="Access important documents and forms for your physiotherapy treatment and consultations."
                  canonicalUrl="/documents"
                />
                <Documents />
              </>
            } />
            <Route path="/paia-manual" element={
              <>
                <SEO 
                  title="PAIA Manual | MY PHYSIO"
                  description="Access our Promotion of Access to Information Act (PAIA) manual and related information."
                  canonicalUrl="/paia-manual"
                />
                <PaiaManual />
              </>
            } />
            <Route path="/contact" element={
              <>
                <SEO 
                  title="Contact Us | MY PHYSIO"
                  description="Get in touch with our team of professional physiotherapists. Schedule an appointment or inquire about our services."
                  canonicalUrl="/contact"
                />
                <Contact />
              </>
            } />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
