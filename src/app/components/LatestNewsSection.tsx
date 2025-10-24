"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function LatestNewsSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section
      className="py-12 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #15396F 0%, #3D5C84 100%)",
        boxShadow: "0px 1px 2px 0px #0000000D",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Latest News & Updates
          </h2>
          <div className="w-24 h-1 bg-[#FED73C] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 carousel-scroll">
            {/* News Card 1 */}
            <article className="flex-none w-80 bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
              <div className="p-6 h-56 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#FED73C] text-[#15396F] text-xs font-bold rounded-lg mb-4">
                    ADMISSION
                  </div>
                  <h3 className="text-lg font-bold text-[#15396F] mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    Applications Open for 2024
                  </h3>
                  <p className="text-[#3D5C84] text-sm mb-4">
                    Join the next generation of leaders at KIU with our comprehensive programs.
                  </p>
                </div>
                <a href="#" className="text-[#15396F] font-bold hover:text-[#3D5C84] transition-colors text-sm flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </article>

            {/* News Card 2 */}
            <article className="flex-none w-80 bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
              <div className="p-6 h-56 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#15396F] text-white text-xs font-bold rounded-lg mb-4">
                    RESEARCH
                  </div>
                  <h3 className="text-lg font-bold text-[#15396F] mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    New Research Center Opens
                  </h3>
                  <p className="text-[#3D5C84] text-sm mb-4">
                    State-of-the-art facilities for cutting-edge research and innovation.
                  </p>
                </div>
                <a href="#" className="text-[#15396F] font-bold hover:text-[#3D5C84] transition-colors text-sm flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </article>

            {/* News Card 3 */}
            <article className="flex-none w-80 bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
              <div className="p-6 h-56 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#3D5C84] text-white text-xs font-bold rounded-lg mb-4">
                    CAMPUS LIFE
                  </div>
                  <h3 className="text-lg font-bold text-[#15396F] mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    Student Activities Week
                  </h3>
                  <p className="text-[#3D5C84] text-sm mb-4">
                    Discover clubs and organizations on our vibrant campus.
                  </p>
                </div>
                <a href="#" className="text-[#15396F] font-bold hover:text-[#3D5C84] transition-colors text-sm flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </article>

            {/* News Card 4 */}
            <article className="flex-none w-80 bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
              <div className="p-6 h-56 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#FED73C] text-[#15396F] text-xs font-bold rounded-lg mb-4">
                    PARTNERSHIP
                  </div>
                  <h3 className="text-lg font-bold text-[#15396F] mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    TUM Collaboration Expands
                  </h3>
                  <p className="text-[#3D5C84] text-sm mb-4">
                    New joint programs with Technical University of Munich.
                  </p>
                </div>
                <a href="#" className="text-[#15396F] font-bold hover:text-[#3D5C84] transition-colors text-sm flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </article>

            {/* News Card 5 */}
            <article className="flex-none w-80 bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
              <div className="p-6 h-56 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#15396F] text-white text-xs font-bold rounded-lg mb-4">
                    EVENTS
                  </div>
                  <h3 className="text-lg font-bold text-[#15396F] mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    International Conference 2024
                  </h3>
                  <p className="text-[#3D5C84] text-sm mb-4">
                    Join leading experts in technology and innovation.
                  </p>
                </div>
                <a href="#" className="text-[#15396F] font-bold hover:text-[#3D5C84] transition-colors text-sm flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </article>

            {/* News Card 6 */}
            <article className="flex-none w-80 bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
              <div className="p-6 h-56 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#3D5C84] text-white text-xs font-bold rounded-lg mb-4">
                    ACHIEVEMENTS
                  </div>
                  <h3 className="text-lg font-bold text-[#15396F] mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    KIU Wins Excellence Award
                  </h3>
                  <p className="text-[#3D5C84] text-sm mb-4">
                    Recognition for outstanding educational innovation.
                  </p>
                </div>
                <a href="#" className="text-[#15396F] font-bold hover:text-[#3D5C84] transition-colors text-sm flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
