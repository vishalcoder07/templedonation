import React from 'react';
import { TreePine, Shield, Building2, Users, Heart, Sprout } from 'lucide-react';

const Development = () => {
  const developmentAreas = [
    {
      id: 1,
      title: 'Tree Plantation',
      description: 'Extensive tree plantation drive around the temple complex to create a green and serene environment for devotees.',
      icon: TreePine
    },
    {
      id: 2,
      title: 'Security Measures',
      description: 'Implementation of advanced security systems and protocols to ensure the safety of devotees and the temple premises.',
      icon: Shield
    },
    {
      id: 3,
      title: 'Infrastructure Development',
      description: 'Development of modern infrastructure including roads, parking facilities, and utilities for the convenience of visitors.',
      icon: Building2
    },
    {
      id: 4,
      title: 'Visitor Facilities',
      description: 'Creation of facilities such as rest areas, medical aid centers, and information kiosks for devotees.',
      icon: Users
    },
    {
      id: 5,
      title: 'Heritage Preservation',
      description: 'Preservation of historical and cultural heritage sites in and around the temple complex.',
      icon: Heart
    },
    {
      id: 6,
      title: 'Sustainable Development',
      description: 'Implementation of eco-friendly and sustainable practices in all development activities.',
      icon: Sprout
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">विकास</h1>
          <p className="text-2xl text-orange-100">Development & Resolution</p>
          <p className="text-orange-100 mt-4 max-w-3xl mx-auto">
            Comprehensive development initiatives for the Ram Temple region, focusing on infrastructure, security, and environmental sustainability.
          </p>
        </div>
      </div>

      {/* Development Areas */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">Development Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-100">
                  <div className="text-orange-600 mb-4">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
            <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">Expansion Plans</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                The Shri Ram Janmbhoomi Teerth Kshetra is committed to the systematic expansion and development of the temple region. This includes the acquisition of important temples and sites in the vicinity with mutual consent, ensuring fair compensation and rehabilitation for displaced institutions and individuals.
              </p>
              <p>
                All land acquisitions are conducted with complete transparency, following proper legal procedures and market valuations. The trust ensures that all payments are made through bank transfers and all applicable taxes are duly paid.
              </p>
              <p>
                The expansion plans aim to create a comprehensive pilgrimage complex that preserves the historical and spiritual significance of the region while providing modern amenities for devotees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memorial & Preservation */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Heritage & Memorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">Historical Preservation</h3>
              <p className="text-gray-600 leading-relaxed">
                Special attention is being given to the preservation of historical sites and artifacts in the region. The trust is working to maintain the authenticity and sanctity of these ancient locations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">Memorial Sites</h3>
              <p className="text-gray-600 leading-relaxed">
                Several memorial sites are being developed to honor the contributions of individuals and organizations who have played a significant role in the Ram Janmbhoomi movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Images */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Development Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://srjbtkshetra.org/wp-content/uploads/2021/04/ayodhya-sky-1200x542.jpg"
                alt="Development Progress"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://srjbtkshetra.org/wp-content/uploads/2021/03/6-1-e1619232228225.jpg"
                alt="Temple Complex"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;
