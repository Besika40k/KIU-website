"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../context/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { getCategoryColor,formatDate } from "./NewsHelperFunctions";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";


interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
}

interface NewsCarouselProps {
  news: NewsItem[];
}

export function NewsCarousel({ news }: NewsCarouselProps) {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;
  const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Take the first 3 news items for the carousel
    setFeaturedNews(news.slice(0, 3));
  }, [news]);

  return (
    <div className="container mx-auto px-4">
      <Carousel className="w-full rounded-2xl overflow-hidden">
        <CarouselContent>
          {featuredNews.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="border-0 rounded-none">
                <CardContent className="relative p-0 h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10 group">
                  <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3">
                    <Badge
                      variant="secondary"
                      className="bg-[#FED73C] text-black font-semibold border-0 px-4 py-1 text-sm"
                    >
                      {formatDate(item.date,lang)}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={`text-xs font-semibold uppercase border-0 px-4 py-1 ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
                    <div className="max-w-4xl bg-black/200 backdrop-blur rounded-xl p-6 md:p-8 border border-white/10 shadow-lg">
                      <div className="max-w-4xl">
                        <h1 className="text-2xl md:text-4xl font-bold mb-3 text-balance leading-tight">
                        {item.title}
                        </h1>
                        <p className="text-base md:text-lg mb-6 text-pretty opacity-90 max-w-3xl">
                          {item.content}
                        </p>
                        <Button
                          className="bg-[#FED73C] text-black font-semibold cursor-pointer hover:bg-[#FED73C]/90 border-0 cursor-point motion-safe:animate-pulse rounded-md shadow-sm transform transition-transform motion-safe:hover:-translate-y-0.5"
                        >
                          {t.homepage.latestNews.readFullStory}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8" />
        <CarouselNext className="right-4 md:right-8" />
      </Carousel>
    </div>
  );
}
