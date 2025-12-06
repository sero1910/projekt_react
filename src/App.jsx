import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

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