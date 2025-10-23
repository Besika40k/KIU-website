// app/context/LanguageContext.tsx
"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

type Language = "en" | "ge";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  // ⭐️ NEW STATE: Tracks if localStorage has been read
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang) {
      setLang(savedLang);
    }
    // ⭐️ Set to true after checking localStorage
    setIsLoaded(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  if (!isLoaded) {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          opacity: 0,
        }}
      >
        {/* if it loads slow we can add a loading animation or sum */}
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
