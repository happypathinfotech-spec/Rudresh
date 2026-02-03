import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";
import StickyButtons from "../components/StickyButtons";

const LandingPage = () => {
  return (
    <div className="landing-page bg-white">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <Footer />
      <StickyButtons />
    </div>
  );
};

export default LandingPage;
