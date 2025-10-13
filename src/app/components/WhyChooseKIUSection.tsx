"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";
import Image from "next/image";

export default function WhyChooseKIUSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  const getBackgroundStyle = (bgColor: string) => {
    switch (bgColor) {
      case "light-blue":
        return {
          background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
          boxShadow: "0px 1px 2px 0px #0000000D",
        };
      case "light-yellow":
        return {
          background: "linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 100%)",
          boxShadow: "0px 1px 2px 0px #0000000D",
        };
      case "light-gray":
        return {
          background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)",
          boxShadow: "0px 1px 2px 0px #0000000D",
        };
      default:
        return {
          background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)",
          boxShadow: "0px 1px 2px 0px #0000000D",
        };
    }
  };

  const getIconBackgroundColor = (bgColor: string) => {
    switch (bgColor) {
      case "light-blue":
        return "#15396F";
      case "light-yellow":
        return "#FED73C";
      case "light-gray":
        return "#15396F";
      default:
        return "#15396F";
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {t.homepage.whyChoose.title.split("KIU")[0]}
            <span style={{ color: "#1E40AF" }}>KIU</span>
            {t.homepage.whyChoose.title.split("KIU")[1]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.homepage.whyChoose.subtitle}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.homepage.whyChoose.features.map((feature: any, index: number) => (
            <div
              key={index}
              className="p-8 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
              style={getBackgroundStyle(feature.bgColor)}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{
                  backgroundColor: getIconBackgroundColor(feature.bgColor),
                }}
              >
                <Image
                  src={`/HomePageImages/${feature.icon}`}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-4"
                style={{
                  color: "#15396F",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
