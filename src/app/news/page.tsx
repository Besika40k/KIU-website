"use client";

import { NewsCarousel } from "../components/news-carousel";
import { NewsGrid } from "../components/news-grid";
import newsDataENG from "../data/news.json";
import newsDataGE from "../data/newsge.json";
import { useLanguage } from "../context/LanguageContext";

export default function NewsPage() {
  const { lang } = useLanguage();
  const newsData = lang === "en" ? newsDataENG : newsDataGE;
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel Section */}
      <section className="w-full">
        <NewsCarousel news={newsData} />
      </section>

      {/* News Grid Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <NewsGrid news={newsData} itemsPerPage={6} />
      </section>
    </div>
  );
}
