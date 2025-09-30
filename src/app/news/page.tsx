"use client";

import { NewsCarousel } from "../components/news-carousel";
import { NewsGrid } from "../components/news-grid";
import newsData from "../data/news.json";

export default function NewsPage() {
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
