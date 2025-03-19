import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename="/myphysio">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/paia-manual" element={<PaiaManual />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
