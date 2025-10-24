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
import { formatDate } from "./NewsHelperFunctions";
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
    <div className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {featuredNews.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="border-0 rounded-none">
                <CardContent className="relative p-0 h-[500px] md:h-[600px]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <div className="max-w-4xl">
                      <Badge
                        variant="secondary"
                        className="mb-4 bg-yellow-500 text-black font-medium"
                      >
                        {formatDate(item.date)}
                      </Badge>
                      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                        {item.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-6 text-pretty opacity-90 max-w-3xl">
                        {item.content}
                      </p>
                      <Button
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        {t.homepage.latestNews.readFullStory}
                      </Button>
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
