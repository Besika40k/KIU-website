"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export function ExpressionOfInterest() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-semibold mb-4">
        {t.vacancies.expressionOfInterest.title}
      </h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          {t.vacancies.expressionOfInterest.intro}{" "}
          <Link
            href="mailto:admin@kiu.edu.ge"
            className="text-blue-600 hover:underline"
          >
            admin@kiu.edu.ge
          </Link>
        </p>

        <p>
          {t.vacancies.expressionOfInterest.description}{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            {t.vacancies.expressionOfInterest.readGuidelines}
          </Link>
          .
        </p>

        <Card className="bg-blue-50 border-blue-100 p-6 mt-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            {t.vacancies.expressionOfInterest.readyTitle}
          </h3>
          <p className="text-sm mb-4 text-foreground">
            {t.vacancies.expressionOfInterest.readyDescription}
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            {t.vacancies.expressionOfInterest.submitButton}
          </Button>
        </Card>
      </div>
    </Card>
  );
}
