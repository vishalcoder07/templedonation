import React, { useState } from 'react';
import { languages, contactInfo } from '../mockData';
import { Globe, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-200">सिद्ध पीठ विष्णु धाम मंदिर</h3>
            <p className="text-orange-100 text-sm leading-relaxed">
              Shri Ram Janmbhoomi Teerth Kshetra is dedicated to the construction and management of the grand Ram Temple in Ayodhya.
            </p>
            <div className="mt-4">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767281922/Picture9_q5dosb.png"
                alt="Logo"
                className="h-20 w-20 rounded-full border-2 border-orange-300"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-200">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-300" />
                <a href={`mailto:${contactInfo.email}`} className="text-orange-100 hover:text-white text-sm">
                  {contactInfo.email}
                </a>
              </div>
              {contactInfo.helplines.map((phone, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Phone size={18} className="text-orange-300" />
                  <a href={`tel:${phone}`} className="text-orange-100 hover:text-white text-sm">
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-300" />
                <span className="text-orange-100 text-sm">Toll Free: {contactInfo.tollFree}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-orange-100 hover:text-white text-sm transition-colors">Home</a>
              </li>
              <li>
                <a href="/main-temple" className="text-orange-100 hover:text-white text-sm transition-colors">Main Temple</a>
              </li>
              <li>
                <a href="/trust-members" className="text-orange-100 hover:text-white text-sm transition-colors">Trust Members</a>
              </li>
              <li>
                <a href="/development" className="text-orange-100 hover:text-white text-sm transition-colors">Development</a>
              </li>
              <li>
                <a href="https://online.srjbtkshetra.org/" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-white text-sm transition-colors">
                  Donate Online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mt-8 pt-8 border-t border-orange-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <button
              onClick={() => setShowLanguageModal(true)}
              className="flex items-center space-x-2 bg-orange-800 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors mb-4 md:mb-0"
            >
              <Globe size={18} />
              <span className="text-sm">Choose Language</span>
            </button>
            <p className="text-orange-200 text-sm">
              © 2024 Shri Ram Janmbhoomi Teerth Kshetra. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Language Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-orange-600 text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Select Language</h3>
              <button
                onClick={() => setShowLanguageModal(false)}
                className="text-white hover:text-orange-200"
              >
                ✕
              </button>
            </div>
            <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLanguage(lang.code);
                    setShowLanguageModal(false);
                  }}
                  className={`p-2 text-left rounded hover:bg-orange-50 transition-colors text-sm ${
                    selectedLanguage === lang.code ? 'bg-orange-100 text-orange-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
