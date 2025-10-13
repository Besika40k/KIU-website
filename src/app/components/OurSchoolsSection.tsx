"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";
import Image from "next/image";

export default function OurSchoolsSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  const getCardColor = (color: string) => {
    switch (color) {
      case "blue":
        return "#15396F";
      case "yellow":
        return "#FED73C";
      case "dark-blue":
        return "#15396F";
      case "green":
        return "#22C55E";
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
            {
              t.homepage.schools.title.split(
                t.homepage.schools.titleHighlight
              )[0]
            }
            <span style={{ color: "#FED73C" }}>
              {t.homepage.schools.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.homepage.schools.subtitle}
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.homepage.schools.programs.map((program: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className="p-8 text-center"
                style={{ backgroundColor: getCardColor(program.color) }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src={`/HomePageImages/${program.icon}`}
                      alt={program.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {program.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
