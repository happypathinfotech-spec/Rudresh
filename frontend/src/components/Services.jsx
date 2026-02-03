import React from "react";
import { Plane, Train, Map, Calendar, Route, ArrowRight } from "lucide-react";
import { SERVICES, IMAGES } from "../data/mockData";

const iconMap = {
  plane: Plane,
  train: Train,
  map: Map,
  calendar: Calendar,
  route: Route
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Taxi Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From airport pickups to full-day tours, we've got all your Goa travel needs covered
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Images */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={IMAGES.services.taxi}
              alt="Professional taxi service"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-lg">Professional Taxi Fleet</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={IMAGES.services.airport}
              alt="Airport pickup service"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-lg">Airport Transfer</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={IMAGES.services.professional}
              alt="Professional service"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-lg">Expert Drivers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
