"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function LatestNewsSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(90deg, #15396F 0%, #3D5C84 100%)",
        boxShadow: "0px 1px 2px 0px #0000000D",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {t.homepage.latestNews.title}
          </h2>
          <div className="w-16 h-1 bg-[#FED73C] mx-auto"></div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.homepage.latestNews.news.map((newsItem: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Tag */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    newsItem.tagColor === "yellow"
                      ? "text-[#15396F]"
                      : "text-white"
                  }`}
                  style={{
                    backgroundColor:
                      newsItem.tagColor === "yellow" ? "#FED73C" : "#15396F",
                  }}
                >
                  {newsItem.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-3 line-clamp-2"
                style={{ color: "#15396F" }}
              >
                {newsItem.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {newsItem.description}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="font-medium text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: "#15396F" }}
              >
                {newsItem.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
