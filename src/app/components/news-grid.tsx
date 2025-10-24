"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import Link from "next/link";
import { getCategoryColor, formatDate } from "./NewsHelperFunctions";
import { useLanguage } from "../context/LanguageContext";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
}

interface NewsGridProps {
  news: NewsItem[];
  itemsPerPage?: number;
}

export function NewsGrid({ news, itemsPerPage = 6 }: NewsGridProps) {
  const { lang, setLang } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = news.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of news grid
    document
      .getElementById("news-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="news-grid" className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#15396F]">
          {lang === "en" ? "Latest News" : "უახლესი ამბები"}
        </h2>
        <div className="text-sm text-muted-foreground">
          {lang === "en" ? "Page" : "გვერდი"} {currentPage} {lang === "en" ? "of" : "/"} {totalPages}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {currentNews.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="relative h-48">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="secondary"
                  className={`text-xs font-semibold uppercase border-0 ${getCategoryColor(
                    item.category
                  )}`}
                >
                  {item.category}
                </Badge>
                <span className="text-xs text-muted-foreground font-medium">
                  {formatDate(item.date)}
                </span>
              </div>
              <h3 className="font-bold text-lg leading-tight text-balance text-[#15396F]">
                {item.title}
              </h3>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed">
                {item.content}
              </p>
              <Link href={`/news/${item.id}`}>
                <Button
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-[#15396F] text-[#15396F] hover:text-white hover:border-[#15396F] transition-all duration-300 font-semibold cursor-pointer"
                >
                  <span className="absolute inset-0 bg-[#15396F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative flex items-center gap-2">
                    {lang === "en" ? "Read More" : "წაიკითხე მეტი"}
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
