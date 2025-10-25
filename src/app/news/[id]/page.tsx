"use client"
import React from "react";
import { IndividualNewsPage } from "../../components/IndividualNewsPage";
import newsDataENG from "../../data/news.json";
import newsDataGE from "../../data/newsge.json";
import { useLanguage } from "../../context/LanguageContext";



export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { lang } = useLanguage();
  const { id } = React.use(params);
  const newsId = Number(id); 
  const newsData = lang === "en" ? newsDataENG : newsDataGE;
  const newsItem = newsData.find((item) => item.id === newsId);

  if (!newsItem) {
    return <div>{lang === "en" ? "News not found." : "სიახლე არ მოიძებნა."}</div>;
  }

  const latestNews = newsData
    .filter((item) => item.id !== newsId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return <IndividualNewsPage news={newsItem} latestNews={latestNews} />;
}
