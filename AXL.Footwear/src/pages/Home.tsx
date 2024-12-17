import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Step into Style with AXL.Footwear
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover our curated collection of premium footwear for every occasion.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Men's Collection",
              image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80",
            },
            {
              title: "Women's Collection",
              image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80",
            },
            {
              title: "Sport Collection",
              image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80",
            },
          ].map((category, index) => (
            <Link
              key={index}
              to="/catalog"
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;