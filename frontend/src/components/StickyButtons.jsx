import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { CONTACT_INFO } from "../data/mockData";

const StickyButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show buttons when scrolling up, hide when scrolling down fast
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Action Buttons - Mobile & Desktop */}
      <div
        className={`fixed right-6 bottom-24 md:bottom-6 z-40 flex flex-col gap-3 transition-all duration-300 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
        }`}
      >
        {/* WhatsApp Button */}
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-green-600/50"
          aria-label="Book on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <div className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Book on WhatsApp
          </div>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="group w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-600/50"
          aria-label="Call Now"
        >
          <Phone className="w-7 h-7 text-white" />
          <div className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Call Now
          </div>
        </a>
      </div>

      {/* Sticky Footer Bar - Mobile Only - Always Visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-gray-200 shadow-2xl">
        <div className="px-4 py-3">
          <p className="text-center text-sm font-bold text-gray-900 mb-3">
            Book a Cab Now
          </p>
          <div className="flex gap-3">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-full font-bold hover:bg-green-700 transition-colors duration-300 shadow-md active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition-colors duration-300 shadow-md active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyButtons;
