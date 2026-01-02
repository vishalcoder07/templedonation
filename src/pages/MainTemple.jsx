import React from 'react';
import { Building2, Users, Droplets, TreePine, Shield, Zap } from 'lucide-react';
import { templeFeatures, templeSpecs, photoGallery } from '../mockData';

const MainTemple = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
              <div className="absolute inset-0">
                {/* Blurred background */}
                <img
                  src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767284239/Picture11_vd8onw.jpg"
                  alt=""
                  className="w-full h-full object-cover blur-xl scale-110"
                />

                {/* Overlay to darken blur */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Main image (no crop) */}
                <img
                  src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767284239/Picture11_vd8onw.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">मुख्य मंदिर</h1>
            <p className="text-2xl">Main Temple</p>
          </div>
        </div>
      </div>

      {/* Temple Specifications */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Temple Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-3">
                <Building2 size={40} />
              </div>
              <h3 className="text-gray-600 text-sm mb-2">Total Area</h3>
              <p className="text-3xl font-bold text-orange-800">{templeSpecs.area}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-3">
                <Building2 size={40} />
              </div>
              <h3 className="text-gray-600 text-sm mb-2">Built-up Area</h3>
              <p className="text-3xl font-bold text-orange-800">{templeSpecs.builtUp}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-3">
                <Building2 size={40} />
              </div>
              <h3 className="text-gray-600 text-sm mb-2">Length</h3>
              <p className="text-3xl font-bold text-orange-800">{templeSpecs.length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-3">
                <Building2 size={40} />
              </div>
              <h3 className="text-gray-600 text-sm mb-2">Width</h3>
              <p className="text-3xl font-bold text-orange-800">{templeSpecs.width}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Temple Complex Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templeFeatures.map((feature) => (
              <div key={feature.id} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100">
                <h3 className="text-xl font-bold text-orange-700 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Available Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {templeSpecs.facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-orange-600 mb-2 flex justify-center">
                  {index === 0 && <Building2 size={32} />}
                  {index === 1 && <Building2 size={32} />}
                  {index === 2 && <Users size={32} />}
                  {index === 3 && <Building2 size={32} />}
                  {index === 4 && <Zap size={32} />}
                  {index === 5 && <Shield size={32} />}
                </div>
                <p className="text-gray-700 font-medium text-sm">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Temple Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767284239/Picture11_vd8onw.jpg"
                alt="Temple View"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767284243/Picture13_lxqron.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
             <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767284243/Picture12_ycdu5p.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
             <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767284243/Picture15_pwn3aa.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
             <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767285203/Picture16_napyrk.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
             <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767285206/Picture19_hj7ppf.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767285205/Picture18_thn9xs.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767285207/Picture17_ghu8mm.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767285206/Picture21_ffttvh.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767285204/Picture20_jpo0zz.jpg"
                alt="Temple Design"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">About the Temple</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                The Shri Ram Janmbhoomi Temple is being constructed in accordance with Vastu Shastra principles to provide a grand and divine form to the birthplace of Lord Ram. The temple complex is designed to be safe and convenient for devotees from all over the world.
              </p>
              <p>
                The construction incorporates traditional architectural elements while ensuring modern amenities for the comfort and safety of visitors. Every aspect of the temple has been carefully planned to create a spiritual atmosphere that enhances the devotional experience.
              </p>
              <p>
                The temple complex includes various facilities such as meditation zones, exhibition areas, food distribution centers, and accommodation for guests, making it a complete pilgrimage destination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainTemple;
