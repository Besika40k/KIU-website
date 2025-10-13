"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";
import Image from "next/image";

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #E0E7FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {t.homepage.hero.title.split(t.homepage.hero.titleHighlight)[0]}
                <span style={{ color: "#1E40AF" }}>
                  {t.homepage.hero.titleHighlight}
                </span>
              </h1>
            </div>

            {/* Latin Motto */}
            <p className="text-lg italic text-gray-600">
              {t.homepage.hero.motto}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.homepage.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:opacity-90"
                style={{ backgroundColor: "#15396F" }}
              >
                {t.homepage.hero.applyButton}
              </button>
              <button
                className="text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:opacity-90"
                style={{ backgroundColor: "#FED73C" }}
              >
                {t.homepage.hero.exploreButton}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white p-4 shadow-2xl rounded-lg">
                <Image
                  src="/HomePageImages/home-page-rotated.jpg"
                  alt="KIU Campus"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Image Caption */}
            <div className="mt-6 text-center">
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  color: "#15396F",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                {t.homepage.hero.imageCaption}
              </h3>
              <p className="text-gray-600">
                {t.homepage.hero.imageDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
