"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./SearchButton";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = lang === "en" ? en : ge;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(50); // percentage
  const [isResizing, setIsResizing] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleLanguageSwitch = (newLang: "en" | "ge") => {
    if (newLang !== lang) {
      setLang(newLang);
    }
  };

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    
    const newWidth = (e.clientX / window.innerWidth) * 100;
    // Limit width between 20% and 80%
    if (newWidth >= 20 && newWidth <= 80) {
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, handleMouseMove]);

  const navigationItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "programs", href: "/programs" },
    { key: "research", href: "/research" },
    { key: "projects", href: "/projects" },
    { key: "admission", href: "/admission" },
    { key: "students", href: "/students" },
    { key: "news", href: "/news" },
    { key: "campus", href: "/campus" },
    { key: "vacancies", href: "/vacancies" },
  ];

  return (
    <header className="bg-white">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between px-8 py-2">
        {/* Left Section - Logo and University Name */}
        <div className="flex items-center space-x-4">
          <div 
            className="relative cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setIsSidebarOpen(true)}
          >
            <div className="w-16 h-16 rounded-full shadow-lg overflow-hidden">
              <Image
                src="/kiuLogo.png"
                alt="KIU Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full shadow-lg blur-sm opacity-50 -z-10"></div>
          </div>
          {!isSearchExpanded && (
            <Link 
              href="/" 
              className="text-[#1E40AF] font-bold cursor-pointer transition-all duration-300 animate-in fade-in slide-in-from-left-5"
            >
              <div className="text-lg leading-tight">Kutaisi</div>
              <div className="text-lg leading-tight">International</div>
              <div className="text-lg leading-tight">University</div>
            </Link>
          )}
        </div>

        {/* Middle Section - Navigation */}
        <nav className="flex space-x-6">
          {navigationItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[#374151] hover:text-blue-600 font-medium transition-colors duration-200 text-base"
            >
              {t.navigation[item.key as keyof typeof t.navigation]}
            </a>
          ))}
        </nav>

        {/* Right Section - Search and Language Switcher */}
        <div className="flex items-center space-x-3">
          {/* Search Button */}
          <SearchButton onExpandChange={setIsSearchExpanded} />
          
          {/* Language Switcher */}
          <div
            className="relative flex items-center justify-center w-[102px] h-[44px] rounded-full bg-[#F3F4F6] 
  shadow-[8px_8px_16px_0px_#D1D5DB_inset,-8px_-8px_16px_0px_#D1D5DB_inset] px-[6px] gap-1"
          >
            {/* Sliding Indicator Background */}
            <div
              className={`absolute w-[48px] h-[32px] rounded-full bg-[#F3F4F6] 
                shadow-[-4px_-4px_8px_0px_#FFFFFF,4px_4px_8px_0px_#D1D5DB]
                transition-all duration-500 ease-out
                ${lang === "en" ? "translate-x-[-23px]" : "translate-x-[23px]"}`}
            />
            
            {/* English Button */}
            <button
              onClick={() => handleLanguageSwitch("en")}
              className={`relative z-10 flex items-center justify-center w-[48px] h-[32px] rounded-full 
      transition-all duration-300 cursor-pointer
      hover:scale-105 active:scale-95
      ${lang === "en" ? "scale-100" : "scale-95 opacity-70"}`}
            >
              <Image
                src="/united-kingdom.png"
                alt="English"
                width={24}
                height={24}
                className={`w-6 h-6 object-cover transition-all duration-300 
                  ${lang === "en" ? "scale-100 opacity-100" : "scale-90 opacity-60"}`}
              />
            </button>

            {/* Georgian Button */}
            <button
              onClick={() => handleLanguageSwitch("ge")}
              className={`relative z-10 flex items-center justify-center w-[48px] h-[32px] rounded-full 
      transition-all duration-300 cursor-pointer
      hover:scale-105 active:scale-95
      ${lang === "ge" ? "scale-100" : "scale-95 opacity-70"}`}
            >
              <Image
                src="/georgia.png"
                alt="Georgian"
                width={24}
                height={24}
                className={`w-6 h-6 object-cover transition-all duration-300 
                  ${lang === "ge" ? "scale-100 opacity-100" : "scale-90 opacity-60"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden px-4 py-2">
        {/* Mobile Top Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="relative cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => setIsSidebarOpen(true)}
            >
              <div className="w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <Image
                  src="/kiuLogo.png"
                  alt="KIU Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full shadow-lg blur-sm opacity-50 -z-10"></div>
            </div>
            {!isSearchExpanded && (
              <div className="text-[#1E40AF] font-bold transition-all duration-300 animate-in fade-in slide-in-from-left-5">
                <div className="text-sm leading-tight">Kutaisi</div>
                <div className="text-sm leading-tight">International</div>
                <div className="text-sm leading-tight">University</div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <SearchButton onExpandChange={setIsSearchExpanded} />
            
            {/* Language Switcher */}
            <div
              className="relative flex items-center justify-center w-[102px] h-[44px] rounded-full bg-[#F3F4F6] 
  shadow-[8px_8px_16px_0px_#D1D5DB_inset,-8px_-8px_16px_0px_#D1D5DB_inset] px-[6px] gap-1"
            >
              {/* Sliding Indicator Background */}
              <div
                className={`absolute w-[48px] h-[32px] rounded-full bg-[#F3F4F6] 
                  shadow-[-4px_-4px_8px_0px_#FFFFFF,4px_4px_8px_0px_#D1D5DB]
                  transition-all duration-500 ease-out
                  ${lang === "en" ? "translate-x-[-23px]" : "translate-x-[23px]"}`}
              />
              
              {/* English Button */}
              <button
                onClick={() => handleLanguageSwitch("en")}
                className={`relative z-10 flex items-center justify-center w-[48px] h-[32px] rounded-full 
       transition-all duration-300 cursor-pointer
       hover:scale-105 active:scale-95
       ${lang === "en" ? "scale-100" : "scale-95 opacity-70"}`}
              >
                <Image
                  src="/united-kingdom.png"
                  alt="English"
                  width={24}
                  height={24}
                  className={`w-6 h-6 object-cover transition-all duration-300 
                    ${lang === "en" ? "scale-100 opacity-100" : "scale-90 opacity-60"}`}
                />
              </button>

              {/* Georgian Button */}
              <button
                onClick={() => handleLanguageSwitch("ge")}
                className={`relative z-10 flex items-center justify-center w-[48px] h-[32px] rounded-full 
       transition-all duration-300 cursor-pointer
       hover:scale-105 active:scale-95
       ${lang === "ge" ? "scale-100" : "scale-95 opacity-70"}`}
              >
                <Image
                  src="/georgia.png"
                  alt="Georgian"
                  width={24}
                  height={24}
                  className={`w-6 h-6 object-cover transition-all duration-300 
                    ${lang === "ge" ? "scale-100 opacity-100" : "scale-90 opacity-60"}`}
                />
              </button>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 p-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="mt-4 py-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-[#374151] hover:text-blue-600 font-medium transition-colors duration-200 text-base py-2 px-3 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.navigation[item.key as keyof typeof t.navigation]}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* LMS Sidebar */}
      {isSidebarOpen && (
        <div 
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full bg-white shadow-2xl z-50 border-r-4 border-[#3D5C84]"
          style={{ width: `${sidebarWidth}%` }}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#3D5C84] text-white">
            <div className="flex items-center space-x-3">
              <Image
                src="/kiuLogo.png"
                alt="KIU Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h2 className="text-xl font-bold">KIU LMS</h2>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-[#1E3A8A] rounded-full transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          {/* Iframe Container */}
          <div className="w-full h-[calc(100%-64px)]">
            <iframe
              src="https://lms.kiu.edu.ge/"
              className="w-full h-full border-0"
              title="KIU LMS"
              allow="fullscreen"
            />
          </div>

          {/* Resize Handle */}
          <div
            onMouseDown={handleMouseDown}
            className="absolute top-0 right-0 w-2 h-full cursor-ew-resize hover:bg-[#3D5C84] hover:opacity-50 transition-all duration-200 group"
          >
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1 h-16 bg-[#3D5C84] opacity-50 group-hover:opacity-100 rounded-l-full"></div>
          </div>
        </div>
      )}
    </header>
  );
}
