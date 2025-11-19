// src/App.jsx

import React, { useEffect } from 'react'; // <-- DODAJ JAWNY IMPORT REACT
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Strony
import About from './pages/About';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,     
    });
  }, []);

  return (
    <Router>
      <Navbar /> 
     
      
      <Routes>
        <Route path="/" element={<About />} /> 
        <Route path="/projekty" element={<Projects />} />
        <Route path="/zainteresowania" element={<Interests />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;