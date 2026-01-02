import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import { ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react';
import {
  pressStatement,
  notifications,
  darshanTimings,
  aartiTimings,
  trustMembers,
  photoGallery
} from '../mockData';

const Home = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const membersPerPage = 4;
  const galleryPerPage = 6;

  const nextMembers = () => {
    if (currentMemberIndex + membersPerPage < trustMembers.length) {
      setCurrentMemberIndex(currentMemberIndex + membersPerPage);
    }
  };

  const prevMembers = () => {
    if (currentMemberIndex > 0) {
      setCurrentMemberIndex(currentMemberIndex - membersPerPage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Slider */}
      <HeroSlider />

{/* Press Statement */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
      
      <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
        {pressStatement.title}
      </h2>

      {/* Centered content */}
      <div className="prose max-w-3xl mx-auto text-gray-700 leading-relaxed whitespace-pre-line text-center">
        {pressStatement.content}
      </div>

    </div>
  </div>
</section>


{/* Latest Notifications */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section container */}
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
      <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
        Latest Notifications
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-lg overflow-hidden"
          >
            <div className="w-full aspect-[16/9]">
              <img
                src={notification.image}
                alt={notification.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>




      {/* Temple Timings */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Darshan Timings */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="text-orange-600" size={32} />
                <h3 className="text-2xl font-bold text-orange-800">Temple Free Darshan Timings</h3>
              </div>
              <div className="space-y-3">
                {darshanTimings.map((timing, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-700 font-medium">{timing.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Aarti Timings */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="text-orange-600" size={32} />
                <h3 className="text-2xl font-bold text-orange-800">Free Aarti Darshan Timings</h3>
              </div>
              <div className="space-y-4">
                {aartiTimings.map((aarti, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-orange-700 font-bold text-lg">{aarti.name}</p>
                    <p className="text-gray-600 mt-1">{aarti.time}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Donate Online */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Donate Online</h2>
                <p className="text-orange-100 mb-4 leading-relaxed">
                  The Central Government has notified "SHRI RAM JANMBHOOMI TEERTH KSHETRA" (PAN: AAZTS6197B) to be place of historic importance and a place of public worship of renown.
                </p>
                <p className="text-orange-100 mb-4 leading-relaxed">
                  50% of Voluntary Contribution, for the purpose of renovation/repair of Mandir, to Shri Ram Janmbhoomi Teerth Kshetra is eligible for deduction under sec 80G(2)(b).
                </p>
                <p className="text-orange-100 mb-6 font-semibold">
                  Cash donation in excess of Rs. 2,000 are not allowed as deduction.
                </p>
                <a
                  href="https://online.srjbtkshetra.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Donate Now
                </a>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dnnybwbge/image/upload/v1767284243/Picture13_lxqron.jpg"
                  alt="Donate Online"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Members */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Shri Ram Janmbhoomi Teerth Kshetra Trust Members</h2>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustMembers.slice(currentMemberIndex, currentMemberIndex + membersPerPage).map((member) => (
                <div key={member.id} className="bg-gradient-to-b from-orange-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-200 object-cover"
                    />
                    <h3 className="text-orange-800 font-bold text-center mb-2">{member.name}</h3>
                    <p className="text-gray-600 text-sm text-center">{member.designation}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevMembers}
                disabled={currentMemberIndex === 0}
                className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <span className="text-gray-600">
                {Math.floor(currentMemberIndex / membersPerPage) + 1} / {Math.ceil(trustMembers.length / membersPerPage)}
              </span>
              <button
                onClick={nextMembers}
                disabled={currentMemberIndex + membersPerPage >= trustMembers.length}
                className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    
    
    {/* photo Gallery  */}
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoGallery.map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white p-2"
            >
              <div className="aspect-[4/3] flex items-center justify-center overflow-hidden rounded-lg bg-orange-50">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Video Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Video</h2>
          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SniBBU0XFAQ?si=Vge3QzcNiawDWUpm"
              title="Shri Ram Janmbhoomi Teerth Kshetra"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
