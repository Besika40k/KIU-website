"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { getCategoryColor, formatDate } from "./NewsHelperFunctions";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
  fullContent?: string;
  quote?: {
    text: string;
    author: string;
    title: string;
    image: string;
  } | null;
  eventDuration?: string;
  location?: string;
}

interface IndividualNewsPageProps {
  news: NewsItem;
  latestNews: NewsItem[];
}

export function IndividualNewsPage({
  news,
  latestNews,
}: IndividualNewsPageProps) {
  const { lang, setLang } = useLanguage();
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-12 py-12 px-4">
        {/* Main Content */}
        <main className="w-full lg:max-w-3xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <div className="relative w-full h-64 md:h-[450px] rounded-xl overflow-hidden mb-8">
              <Image
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-gray-500 text-base mb-3">
              {formatDate(news.date, lang)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-slate-800">
              {news.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                  news.category
                )}`}
              >
                {news.category}
              </span>
              {/* You can map over more categories if your data supports it */}
            </div>
            <hr className="my-8 border-gray-200" />
            <div className="text-lg text-gray-700 leading-relaxed prose prose-lg max-w-none whitespace-pre-line">
              {news.fullContent && news.quote ? (
                (() => {
                  const parts = news.fullContent.split("[QUOTE_BLOCK]");
                  return (
                    <>
                      <p>{parts[0]}</p>
                      {parts.length > 1 && (
                        <div className="my-10 p-6 bg-blue-50/50 border-l-4 border-blue-300 rounded-r-lg not-prose">
                          <div className="flex items-start gap-5">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={news.quote?.image || "/placeholder.svg"}
                                alt={news.quote?.author || ""}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <blockquote className="text-slate-700 italic text-base md:text-lg border-none p-0 m-0">
                                "{news.quote?.text}"
                              </blockquote>
                              <p className="text-slate-600 text-sm mt-4">
                                — {news.quote?.author}, {news.quote?.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      <p>{parts[1]}</p>
                    </>
                  );
                })()
              ) : (
                <p>{news.content}</p>
              )}
            </div>
          </div>
        </main>
        {/* Sidebar */}
        <aside className="w-full lg:w-96 flex-shrink-0">
          <div className="space-y-8 sticky top-8">
            {/* Quick Facts Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-slate-800">
                {lang === "en" ? "Quick Facts" : "სწრაფი ფაქტები"}
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-50/70 rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-slate-700">
                    {lang === "en"
                      ? "Event Duration"
                      : "ღონისძიების ხანგრძლივობა"}
                  </p>
                  <p className="text-slate-600">
                    {news.eventDuration ||
                      (lang === "en" ? "N/A" : "არ არის მითითებული")}
                  </p>
                </div>
                <div className="bg-slate-50/70 rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-slate-700">
                    {lang === "en" ? "Location" : "მდებარეობა"}
                  </p>
                  <p className="text-slate-600">
                    {news.location ||
                      (lang === "en" ? "N/A" : "არ არის მითითებული")}
                  </p>
                </div>
              </div>
            </div>

            {/* Latest News Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-slate-800">
                {lang === "en" ? "Latest News" : "უახლესი ამბები"}
              </h3>
              <div className="space-y-5">
                {latestNews.map((item) => (
                  <Link
                    href={`/news/${item.id}`}
                    key={item.id}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                    <div>
                      <p className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-500">
                        {formatDate(item.date, lang)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
