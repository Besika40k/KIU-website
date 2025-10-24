"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function VideoGallerySection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Video <span className="text-[#15396F]">Gallery</span>
          </h2>
          <p className="text-xl text-[#3D5C84]">Experience KIU through our campus videos</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
            <div className="relative h-64 bg-gradient-to-br from-[#15396F] to-[#3D5C84] flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-light cursor-pointer hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-[#15396F] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                Campus Tour
              </h3>
              <p className="text-[#3D5C84]">Take a virtual tour of our state-of-the-art facilities and beautiful campus grounds.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
            <div className="relative h-64 bg-gradient-to-br from-[#FED73C] to-yellow-400 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-light cursor-pointer hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-[#FED73C] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                Student Life
              </h3>
              <p className="text-[#3D5C84]">Discover the vibrant student community and exciting activities at KIU.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
            <div className="relative h-64 bg-gradient-to-br from-[#3D5C84] to-gray-600 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-light cursor-pointer hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-[#3D5C84] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                Research Excellence
              </h3>
              <p className="text-[#3D5C84]">Explore our cutting-edge research facilities and innovative projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
