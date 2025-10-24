"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function OurSchoolsSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Our <span className="text-[#FED73C]">Schools</span>
          </h2>
          <p className="text-xl text-[#3D5C84]">Discover your path to academic excellence</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-[#15396F] to-[#3D5C84] rounded-lg p-8 text-center shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-light">
              <svg className="w-8 h-8 text-[#15396F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Bachelor's Program
            </h3>
            <p className="text-blue-100 text-sm">Comprehensive undergraduate education in various fields</p>
          </div>
          <div className="bg-gradient-to-br from-[#FED73C] to-yellow-400 rounded-lg p-8 text-center shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-light">
              <svg className="w-8 h-8 text-[#FED73C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Master's Program
            </h3>
            <p className="text-yellow-800 text-sm">Advanced graduate studies for specialized expertise</p>
          </div>
          <div className="bg-gradient-to-br from-[#3D5C84] to-gray-600 rounded-lg p-8 text-center shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-light">
              <svg className="w-8 h-8 text-[#3D5C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Doctoral Program
            </h3>
            <p className="text-gray-200 text-sm">Research-focused PhD programs for academic leaders</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-8 text-center shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-light">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Single-Cycle Program
            </h3>
            <p className="text-green-100 text-sm">Integrated programs combining multiple academic levels</p>
          </div>
        </div>
      </div>
    </section>
  );
}
