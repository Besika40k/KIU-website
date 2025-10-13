"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function AboutKIUSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {t.homepage.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {t.homepage.about.description}
              </p>
            </div>
          </div>

          {/* Right Column - Statistics Cards */}
          <div className="grid grid-cols-2 gap-6">
            {t.homepage.about.stats.map((stat: any, index: number) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number === "1B€" ? (
                    <span style={{ color: "#FED73C" }}>{stat.number}</span>
                  ) : (
                    <span style={{ color: "#15396F" }}>{stat.number}</span>
                  )}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
