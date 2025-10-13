"use client";
import { useLanguage } from "./context/LanguageContext";
import en from "../../i18n/en.json";
import ge from "../../i18n/ge.json";
import { motion } from "framer-motion";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
          {t.home.title}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          This is a demo homepage for the university website.
        </p>
      </div>
    </motion.section>
  );
}
