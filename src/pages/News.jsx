import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { newsArticles } from '../mockData';

const News = () => {
  const categories = ['All', 'Featured News', 'Development', 'Announcements'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredNews = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">समाचार</h1>
          <p className="text-2xl text-orange-100">News & Updates</p>
          <p className="text-orange-100 mt-4 max-w-3xl mx-auto">
            Stay updated with the latest news and developments from Shri Ram Janmbhoomi Teerth Kshetra.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600" />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="flex items-center text-orange-600 text-sm">
                      <Tag size={16} className="mr-1" />
                      {article.category}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-orange-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <button className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    Read More
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">Latest Updates</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-orange-700 mb-2">Temple Construction Progress</h3>
                <p className="text-gray-600 leading-relaxed">
                  The construction of the Ram Temple is progressing according to schedule. The temple is being built following traditional architectural principles while incorporating modern engineering techniques to ensure its longevity.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-orange-700 mb-2">Devotee Facilities Enhancement</h3>
                <p className="text-gray-600 leading-relaxed">
                  New facilities are being added continuously to enhance the experience of devotees visiting the temple. This includes improved parking, rest areas, and better crowd management systems.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-orange-700 mb-2">Environmental Initiatives</h3>
                <p className="text-gray-600 leading-relaxed">
                  The trust is committed to environmental sustainability. Solar panels, rainwater harvesting systems, and extensive tree plantation drives are part of the green initiatives undertaken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Statements */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Press Statements</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-600 leading-relaxed mb-4">
              The Shri Ram Janmbhoomi Teerth Kshetra regularly issues press statements to maintain transparency with devotees and the public. All major decisions and developments are communicated through official channels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For official press releases and statements, please contact the trust office or visit the official website regularly for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
