import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { CONTACT_INFO } from "../data/mockData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
              NorthGoaTaxi<span className="text-orange-500">.com</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                About
              </button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
