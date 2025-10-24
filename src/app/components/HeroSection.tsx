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
      className="py-24"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #E0E7FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-[#0a0a0a] leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                {t.homepage.hero.title.split(t.homepage.hero.titleHighlight)[0]}
                <span className="text-[#15396F]">{t.homepage.hero.titleHighlight}</span>
              </h2>
              <p className="text-lg text-[#3D5C84] italic font-medium">{t.homepage.hero.motto}</p>
            </div>
            <p className="text-xl text-[#3D5C84] leading-relaxed">
              {t.homepage.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#15396F] text-white px-8 py-4 rounded-lg shadow-light font-semibold hover:bg-[#3D5C84] transition-all duration-200 transform hover:scale-105 cursor-pointer">
                {t.homepage.hero.applyButton}
              </button>
              <button className="bg-[#FED73C] text-[#0a0a0a] px-8 py-4 rounded-lg shadow-light font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105 cursor-pointer">
                {t.homepage.hero.exploreButton}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-light p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/HomePageImages/home-page-rotated.jpg"
                alt="KIU Campus"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-[#0a0a0a]" style={{ fontFamily: "Playfair Display, serif" }}>
                  {t.homepage.hero.imageCaption}
                </h3>
                <p className="text-[#3D5C84] mt-2">{t.homepage.hero.imageDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
