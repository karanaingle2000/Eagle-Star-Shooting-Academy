// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUsers, FaImages, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#2c3e1f] text-white shadow-md sticky top-0 z-50 border-b-2 border-[#a2b58b]">
      <div className="mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/Logo1.jpg" 
            alt="Eagle Star Logo"
            className="h-12 w-12 rounded-full border-2 border-[#d4af37]" // Military yellow
          />
          <h1 className="text-xl sm:text-2xl font-bold tracking-wider uppercase">
            Eagle Star <span className="text-[#d4af37]">Shooting Academy</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold tracking-wide">
          <Link to="/" className="flex items-center gap-2 hover:text-[#d4af37] transition duration-200"><FaHome /> Home</Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-[#d4af37] transition duration-200"><FaInfoCircle /> About</Link>
          <Link to="/trainer" className="flex items-center gap-2 hover:text-[#d4af37] transition duration-200"><FaUsers /> Trainers</Link>
          <Link to="/gallery" className="flex items-center gap-2 hover:text-[#d4af37] transition duration-200"><FaImages /> Gallery</Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-[#d4af37] transition duration-200"><FaEnvelope /> Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#d4af37] text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1f1c] border-t border-[#a2b58b] px-6 py-4 space-y-4 text-lg font-medium">
          <Link to="/" onClick={toggleMenu} className="block hover:text-[#d4af37]"><FaHome className="inline" /> Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-[#d4af37]"><FaInfoCircle className="inline" /> About</Link>
          <Link to="/trainer" onClick={toggleMenu} className="block hover:text-[#d4af37]"><FaUsers className="inline" /> Trainers</Link>
          <Link to="/gallery" onClick={toggleMenu} className="block hover:text-[#d4af37]"><FaImages className="inline" /> Gallery</Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-[#d4af37]"><FaEnvelope className="inline" /> Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
