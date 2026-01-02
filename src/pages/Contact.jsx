import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">संपर्क करें</h1>
          <p className="text-2xl text-orange-100">Contact Us</p>
          <p className="text-orange-100 mt-4 max-w-3xl mx-auto">
            Get in touch with us for any queries, suggestions, or information about the Ram Temple.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-orange-600 mb-4">
                <Mail size={48} />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Email Us</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-orange-600 transition-colors">
                {contactInfo.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-orange-600 mb-4">
                <Phone size={48} />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Call Us</h3>
              <div className="space-y-2">
                {contactInfo.helplines.map((phone, index) => (
                  <a key={index} href={`tel:${phone}`} className="block text-gray-600 hover:text-orange-600 transition-colors">
                    {phone}
                  </a>
                ))}
                <p className="text-gray-600">Toll Free: {contactInfo.tollFree}</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-orange-600 mb-4">
                <MapPin size={48} />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Visit Us</h3>
              <p className="text-gray-600">
                Shri Ram Janmbhoomi Teerth Kshetra<br />
                Ayodhya, Uttar Pradesh<br />
                India
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Additional Info */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">Office Hours</h2>
            <div className="text-center text-gray-600 space-y-2">
              <p className="text-lg">Monday to Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-lg">Sunday: 10:00 AM - 4:00 PM</p>
              <p className="text-sm text-orange-600 mt-4">* Closed on national holidays</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
