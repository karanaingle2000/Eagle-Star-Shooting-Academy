// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUsers, FaImages, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/public/Logo.JPEG" 
            alt="Eagle Star Logo"
            className="h-12 w-12 rounded-full border-2 border-yellow-500"
          />
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            Eagle Star <span className="text-yellow-400">Shooting Academy</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/" className="flex items-center gap-2 hover:text-yellow-400 transition duration-200"><FaHome /> Home</Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-yellow-400 transition duration-200"><FaInfoCircle /> About</Link>
          <Link to="/trainer" className="flex items-center gap-2 hover:text-yellow-400 transition duration-200"><FaUsers /> Trainers</Link>
 
          <Link to="/gallery" className="flex items-center gap-2 hover:text-yellow-400 transition duration-200"><FaImages /> Gallery</Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-400 transition duration-200"><FaEnvelope /> Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-400 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500 px-6 py-4 space-y-4 text-lg font-medium">
          <Link to="/" onClick={toggleMenu} className="block hover:text-yellow-400"><FaHome className="inline" /> Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-yellow-400"><FaInfoCircle className="inline" /> About</Link>
          <Link to="/trainer" onClick={toggleMenu} className="block hover:text-yellow-400"><FaUsers className="inline" /> Trainers</Link>
          <Link to="/gallery" onClick={toggleMenu} className="block hover:text-yellow-400"><FaImages className="inline" /> Gallery</Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-yellow-400"><FaEnvelope className="inline" /> Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
