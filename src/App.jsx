// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './home/Header';
import Footer from './home/Footer';
 import About from './components/About';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Trainer from './components/Trainer';
 import Contact from './components/Contact';
// import About from './pages/About';
// import Trainers from './pages/Trainers';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/trainer" element={<Trainer />} />
          <Route path="/contact" element={<Contact />} />



         
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
