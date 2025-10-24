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
            {t.homepage.latestNews.title}
          </h2>
          <div className="w-24 h-1 bg-[#FED73C] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-visible">
          <div className="flex space-x-6 carousel-scroll">
            {t.homepage.latestNews.news.map((newsItem: any, index: number) => (
              <article key={index} className="flex-none w-80 bg-white rounded-lg overflow-hidden shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105">
                <div className="p-6 h-56 flex flex-col justify-between">
                  <div>
                    <div 
                      className={`inline-block px-3 py-1 text-xs font-bold rounded-lg mb-4 ${
                        newsItem.tagColor === 'yellow' 
                          ? 'bg-[#FED73C] text-[#15396F]' 
                          : 'bg-[#15396F] text-white'
                      }`}
                    >
                      {newsItem.tag}
                    </div>
                    <h3 className="text-lg font-bold text-[#15396F] mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                      {newsItem.title}
                    </h3>
                    <p className="text-[#3D5C84] text-sm mb-4">
                      {newsItem.description}
                    </p>
                  </div>
                  <a href="#" className="text-[#15396F] font-bold hover:text-[#3D5C84] transition-colors text-sm flex items-center cursor-pointer">
                    {newsItem.link}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
