// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUsers, FaImages, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/about', icon: FaInfoCircle, label: 'About' },
    { path: '/trainer', icon: FaUsers, label: 'Trainers' },
    { path: '/gallery', icon: FaImages, label: 'Gallery' },
    { path: '/contact', icon: FaEnvelope, label: 'Contact' }
  ];

  return (
    <header className={`text-white shadow-lg sticky top-0 z-50 border-b-2 border-[#a2b58b] transition-all duration-300 ${
      scrolled ? 'bg-[#2c3e1f]/95 backdrop-blur-md' : 'bg-[#2c3e1f]'
    }`}>
      <div className="mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/Logo1.jpg" 
            alt="Eagle Star Logo"
            className="h-12 w-12 rounded-full border-2 border-[#d4af37] group-hover:scale-110 transition-transform duration-300" 
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-wider uppercase leading-tight">
              Eagle Star 
            </h1>
            <span className="text-[#d4af37] text-sm font-semibold">Shooting Academy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold tracking-wide">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link 
              key={path}
              to={path} 
              className={`flex items-center gap-2 hover:text-[#d4af37] transition duration-200 relative group ${
                location.pathname === path ? 'text-[#d4af37]' : ''
              }`}
            >
              <Icon className="text-lg" /> 
              {label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full ${
                location.pathname === path ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-[#d4af37] text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1f1c] border-t border-[#a2b58b] px-6 py-4 space-y-4 text-lg font-medium">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link 
              key={path}
              to={path} 
              onClick={toggleMenu} 
              className={`flex items-center gap-3 hover:text-[#d4af37] transition-colors duration-200 py-2 ${
                location.pathname === path ? 'text-[#d4af37]' : ''
              }`}
            >
              <Icon className="text-lg" /> 
              {label}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <div className="pt-4 border-t border-gray-700">
            <a 
              href="tel:+918149222003"
              className="flex items-center gap-3 bg-[#d4af37] text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              <FaEnvelope />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;