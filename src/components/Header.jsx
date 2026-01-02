import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/', nameHi: 'मुख्य पृष्ठ' },
    { name: 'Main Temple', path: '/main-temple', nameHi: 'मुख्य मंदिर' },
    { name: 'Trust Members', path: '/trust-members', nameHi: 'ट्रस्ट सदस्य' },
    { name: 'Development', path: '/development', nameHi: 'विकास' },
    { name: 'Contact', path: '/contact', nameHi: 'संपर्क' }
  ];

  return (
    <header className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767281922/Picture9_q5dosb.png"
              alt="Shri Ram Janmbhoomi Teerth Kshetra"
              className="h-16 w-16 rounded-full border-2 border-white shadow-md"
            />
            <div className="hidden md:block">
              <h1 className="text-white text-xl font-bold">सिद्ध पीठ विष्णु धाम मंदिर</h1>
              <p className="text-orange-100 text-sm">Sidhpeeth Vishnu Dham Temple</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-white hover:bg-orange-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Donate Button */}
          <a
            href="https://online.srjbtkshetra.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Donate Now
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-white text-orange-600'
                      : 'text-white hover:bg-orange-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://online.srjbtkshetra.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-4 py-2 rounded-md text-sm font-semibold text-center"
              >
                Donate Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
