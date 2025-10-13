"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";
import Image from "next/image";

export default function VideoGallerySection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {
              t.homepage.videoGallery.title.split(
                t.homepage.videoGallery.titleHighlight
              )[0]
            }
            <span style={{ color: "#15396F" }}>
              {t.homepage.videoGallery.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.homepage.videoGallery.subtitle}
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.homepage.videoGallery.videos.map((video: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for video thumbnail */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer hover:opacity-80"
                    style={{ backgroundColor: "#15396F" }}
                  >
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
