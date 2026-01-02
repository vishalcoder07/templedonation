import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { trustMembers } from '../mockData';

const TrustMembers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 9;
  const totalPages = Math.ceil(trustMembers.length / membersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentMembers = trustMembers.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">ट्रस्ट सदस्य</h1>
          <p className="text-2xl text-orange-100">Trust Members</p>
          <p className="text-orange-100 mt-4 max-w-3xl mx-auto">
            The trust consists of 15 members including government officials and distinguished personalities dedicated to the construction and management of the Ram Temple.
          </p>
        </div>
      </div>

      {/* Members Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-xl object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 text-center mb-3">{member.name}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Construction Committee Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
            <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">Construction Committee</h2>
            <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              The Construction Committee was formed on November 11, 2020, to oversee the construction activities of the Ram Temple. The committee works in coordination with the trust members to ensure the timely and quality completion of the temple construction.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Information */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Nominated Members</h3>
              <p className="text-gray-600">12 members nominated by the Government of India</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Selected Members</h3>
              <p className="text-gray-600">3 members selected through a special process</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Ex-Officio Members</h3>
              <p className="text-gray-600">Government officials serving in official capacity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustMembers;
