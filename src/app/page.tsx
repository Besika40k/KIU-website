"use client";
import { useLanguage } from "./context/LanguageContext";
import en from "../i18n/en.json";
import ge from "../i18n/ge.json";
import { motion } from "framer-motion";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-4">{t.home.title}</h2>
      <p className="text-gray-700">
        This is a demo homepage for the university website.
      </p>
    </motion.section>
  );
}
