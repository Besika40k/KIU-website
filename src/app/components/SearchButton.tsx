"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";
import newsEn from "../data/news.json";
import newsGe from "../data/newsge.json";
import programs from "../data/programs.json";

interface SearchResult {
  type: "page" | "school" | "news" | "content";
  title: string;
  description?: string;
  url: string;
  category?: string;
}

interface SearchButtonProps {
  onExpandChange?: (isExpanded: boolean) => void;
}

export default function SearchButton({ onExpandChange }: SearchButtonProps) {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setShowResults(false);
        setSearchQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Notify parent when expansion state changes
  useEffect(() => {
    if (onExpandChange) {
      onExpandChange(isExpanded);
    }
  }, [isExpanded, onExpandChange]);

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const navigationItems = [
    { key: "home", href: "/", title: t.navigation?.home || "Home" },
    { key: "about", href: "/about", title: t.navigation.about },
    { key: "programs", href: "/programs", title: t.navigation.programs },
    { key: "research", href: "/research", title: t.navigation.research },
    { key: "projects", href: "/projects", title: t.navigation.projects },
    { key: "admission", href: "/admission", title: t.navigation.admission },
    { key: "students", href: "/students", title: t.navigation.students },
    { key: "news", href: "/news", title: t.navigation.news },
    { key: "campus", href: "/campus", title: t.navigation.campus },
    { key: "vacancies", href: "/vacancies", title: t.navigation.vacancies },
  ];

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search navigation pages
    navigationItems.forEach((item) => {
      if (item.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: "page",
          title: item.title,
          url: item.href,
          category: t.search?.page || "Page",
        });
      }
    });

    // Search schools
    programs.schools.forEach((school) => {
      if (
        school.name.toLowerCase().includes(lowerQuery) ||
        school.tagline.toLowerCase().includes(lowerQuery) ||
        school.description.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          type: "school",
          title: school.name,
          description: school.tagline,
          url: `/schools/${school.id}`,
          category: t.search?.school || "School",
        });
      }
    });

    // Search news
    const newsData = lang === "en" ? newsEn : newsGe;
    newsData.forEach((article: { title: string; content: string; category: string; id: number }) => {
      if (
        article.title.toLowerCase().includes(lowerQuery) ||
        article.content.toLowerCase().includes(lowerQuery) ||
        article.category.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          type: "news",
          title: article.title,
          description: article.content.substring(0, 100) + "...",
          url: `/news/${article.id}`,
          category: article.category,
        });
      }
    });

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
    setShowResults(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    performSearch(value);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setSearchQuery("");
      setShowResults(false);
    }
  };

  return (
    <div ref={searchRef} className="relative flex items-center">
      <div
        className={`flex items-center h-[44px] rounded-full bg-[#F3F4F6] 
          shadow-[8px_8px_16px_0px_#D1D5DB_inset,-8px_-8px_16px_0px_#D1D5DB_inset]
          transition-all duration-500 ease-out overflow-hidden
          ${isExpanded ? "w-[280px] px-4" : "w-[44px] justify-center"}`}
      >
        {/* Search Icon Button */}
        <button
          onClick={handleToggle}
          className={`flex items-center justify-center min-w-[32px] w-[32px] h-[32px] rounded-full 
            ${!isExpanded ? 'bg-[#F3F4F6] shadow-[-4px_-4px_8px_0px_#FFFFFF,4px_4px_8px_0px_#D1D5DB]' : 'bg-transparent'}
            transition-all duration-300 cursor-pointer flex-shrink-0
            hover:scale-105 active:scale-95 z-10`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-[#374151]"
          >
            {isExpanded ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            )}
          </svg>
        </button>

        {/* Search Input */}
        {isExpanded && (
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={t.search?.placeholder || "Search..."}
            className="ml-2 flex-1 bg-transparent border-none outline-none text-[#374151] 
              placeholder:text-[#9CA3AF] text-sm"
          />
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div
          className="absolute top-[52px] right-0 w-[400px] max-h-[500px] overflow-y-auto
          bg-white rounded-2xl shadow-[8px_8px_24px_0px_rgba(0,0,0,0.1),-4px_-4px_16px_0px_rgba(255,255,255,0.8)]
          border border-gray-100 z-50"
        >
          <div className="p-2">
            {searchResults.map((result, index) => (
              <a
                key={`${result.type}-${index}`}
                href={result.url}
                onClick={() => {
                  setIsExpanded(false);
                  setShowResults(false);
                  setSearchQuery("");
                }}
                className="block p-3 rounded-xl hover:bg-[#F3F4F6] transition-colors duration-200
                  border border-transparent hover:border-[#E5E7EB]"
              >
                <div className="flex items-start space-x-3">
                  {/* Icon based on type */}
                  <div className="flex-shrink-0 mt-1">
                    {result.type === "page" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-[#1E40AF]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    )}
                    {result.type === "school" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-[#1E40AF]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        />
                      </svg>
                    )}
                    {result.type === "news" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-[#1E40AF]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-[#1E40AF] truncate">
                        {result.title}
                      </h4>
                      {result.category && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full bg-[#FED73C] 
                          text-[#15396F] font-medium ml-2 flex-shrink-0"
                        >
                          {result.category}
                        </span>
                      )}
                    </div>
                    {result.description && (
                      <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">
                        {result.description}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {showResults && searchResults.length === 0 && searchQuery.trim() && (
        <div
          className="absolute top-[52px] right-0 w-[400px]
          bg-white rounded-2xl shadow-[8px_8px_24px_0px_rgba(0,0,0,0.1),-4px_-4px_16px_0px_rgba(255,255,255,0.8)]
          border border-gray-100 z-50 p-6 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-gray-400 mx-auto mb-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
            />
          </svg>
          <p className="text-sm text-[#6B7280]">
            {t.search?.noResults || "No results found"}
          </p>
        </div>
      )}
    </div>
  );
}

