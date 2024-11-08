// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll to change navbar opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-blue-300 dark:bg-gray-900 shadow-lg transition-opacity duration-300 ${isScrolled ? 'opacity-90' : 'opacity-100'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo / Brand Name */}
        <Link to="/" className="text-3xl font-extrabold text-white">
          WELCOME TO ORAM
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={scrollToAbout}
            className="px-4 py-2 text-lg font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            About Us
          </button>
          <Link
            to="/user/signin"
            className="px-4 py-2 text-lg font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Admin Login
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
          <button
            onClick={() => {
              scrollToAbout();
              toggleMenu();
            }}
            className="block py-2 mt-2 text-lg font-semibold dark:text-gray-300 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 ease-in-out"
          >
            About Us
          </button>
          <Link
            to="/user/signin"
            onClick={toggleMenu}
            className="block py-2 mt-2 text-lg font-semibold dark:text-gray-300 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 ease-in-out"
          >
            Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
