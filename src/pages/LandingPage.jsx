// src/pages/LandingPage.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import RoomsSection from "../components/RoomsSection";
import LocationSection from "../components/LocationSection";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="font-inter">
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <LocationSection />
      <Footer />
      <BookingCTA />
    </div>
  );
}
