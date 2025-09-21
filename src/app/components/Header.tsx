"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../i18n/en.json";
import ge from "../../i18n/ge.json";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kutaisi International University</h1>
        <div className="space-x-2">
          <button
            className={`px-3 py-1 rounded ${
              lang === "en"
                ? "bg-blue-600 text-white"
                : "border border-blue-600"
            }`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={`px-3 py-1 rounded ${
              lang === "ge"
                ? "bg-blue-600 text-white"
                : "border border-blue-600"
            }`}
            onClick={() => setLang("ge")}
          >
            GE
          </button>
        </div>
      </header>

      <nav className="flex space-x-4 mb-6 text-blue-700 font-semibold">
        <a href="/">{t.home.title}</a>
        <a href="/news">{t.home.news}</a>
        <a href="/schools">{t.home.schools}</a>
      </nav>
    </>
  );
}
