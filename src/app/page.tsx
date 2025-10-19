"use client";
import { motion } from "framer-motion";
import LatestNewsSection from "./components/LatestNewsSection";
import HeroSection from "./components/HeroSection";
import WhyChooseKIUSection from "./components/WhyChooseKIUSection";
import AboutKIUSection from "./components/AboutKIUSection";
import OurSchoolsSection from "./components/OurSchoolsSection";
import VideoGallerySection from "./components/VideoGallerySection";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Latest News Section */}
      <LatestNewsSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose KIU Section */}
      <WhyChooseKIUSection />

      {/* About KIU Section */}
      <AboutKIUSection />

      {/* Our Schools Section */}
      <OurSchoolsSection />

      {/* Video Gallery Section */}
      <VideoGallerySection />
    </motion.main>
  );
}
