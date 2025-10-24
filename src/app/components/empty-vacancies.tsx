"use client";

import { Card } from "@/components/ui/card";
import { Ban } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export function EmptyVacancies() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <Card className="p-12">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <Ban className="w-8 h-8 text-muted-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            {t.vacancies.emptyVacancies.title}
          </h3>
          <p className="text-muted-foreground">
            {t.vacancies.emptyVacancies.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
