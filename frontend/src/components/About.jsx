import React from "react";
import { MapPin, Users, Heart } from "lucide-react";
import { IMAGES } from "../data/mockData";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Travel Partner in Goa
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to <span className="font-bold text-blue-600">NorthGoaTaxi.in</span> – your reliable companion for exploring the beautiful beaches, historic sites, and vibrant culture of Goa. We specialize in providing comfortable, safe, and affordable taxi services to tourists visiting this paradise.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience and a deep knowledge of Goa's roads and attractions, our professional drivers ensure you have a memorable and hassle-free vacation. Whether you need an airport pickup, a full-day sightseeing tour, or just a quick ride to the beach, we're here 24/7 to serve you.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Local Expertise</h3>
                  <p className="text-gray-600">Our drivers know every corner of Goa, ensuring you don't miss any hidden gems.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Tourist Friendly</h3>
                  <p className="text-gray-600">We understand tourists' needs and provide personalized service for a comfortable journey.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Customer First</h3>
                  <p className="text-gray-600">Your satisfaction and safety are our top priorities. We go the extra mile to make your trip special.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-3xl font-bold text-blue-600 mb-1">1000+</p>
                <p className="text-sm text-gray-600 font-medium">Happy Tourists</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-3xl font-bold text-green-600 mb-1">24/7</p>
                <p className="text-sm text-gray-600 font-medium">Available</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                <p className="text-3xl font-bold text-orange-600 mb-1">5+ Years</p>
                <p className="text-sm text-gray-600 font-medium">Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-48">
                <img
                  src={IMAGES.attractions.cathedral}
                  alt="Se Cathedral Goa"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src={IMAGES.attractions.village}
                  alt="Goa village"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src={IMAGES.attractions.fort}
                  alt="Cabo de Rama Fort"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-48">
                <img
                  src={IMAGES.attractions.beach}
                  alt="Calangute beach"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
