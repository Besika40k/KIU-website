"use client";

import {
  Calendar,
  FileText,
  Globe,
  DollarSign,
  BookOpen,
  Award,
} from "lucide-react";
import { ServiceCard } from "../components/service-card";
import { GrantsFundSection } from "../components/grants-fund-section";
import { ErasmusProgramCard } from "../components/erasmus-program-card";
import studentHubDataEn from "../data/studenthub.json";
import studentHubDataGe from "../data/studenthubge.json";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function StudentsPage() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;
  const studentHubData = lang === "en" ? studentHubDataEn : studentHubDataGe;

  const services = [
    {
      title: t.students.services.academicCalendar.title,
      description: t.students.services.academicCalendar.description,
      icon: Calendar,
      iconColor: "bg-blue-600",
      buttonText: t.students.services.academicCalendar.button,
      buttonColor: "bg-blue-900 hover:bg-blue-800 text-white",
    },
    {
      title: t.students.services.legalDirectory.title,
      description: t.students.services.legalDirectory.description,
      icon: FileText,
      iconColor: "bg-blue-600",
      buttonText: t.students.services.legalDirectory.button,
      buttonColor: "bg-blue-900 hover:bg-blue-800 text-white",
    },
    {
      title: t.students.services.academicMobility.title,
      description: t.students.services.academicMobility.description,
      icon: Globe,
      iconColor: "bg-yellow-500",
      buttonText: t.students.services.academicMobility.button,
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      expandableItems: [
        t.students.services.academicMobility.external,
        t.students.services.academicMobility.internal,
      ],
    },
    {
      title: t.students.services.tuitionFee.title,
      description: t.students.services.tuitionFee.description,
      icon: DollarSign,
      iconColor: "bg-green-600",
      buttonText: t.students.services.tuitionFee.button,
      buttonColor: "bg-green-600 hover:bg-green-700 text-white",
    },
    {
      title: t.students.services.library.title,
      description: t.students.services.library.description,
      icon: BookOpen,
      iconColor: "bg-purple-600",
      buttonText: t.students.services.library.button,
      buttonColor: "bg-purple-600 hover:bg-purple-700 text-white",
    },
    {
      title: t.students.services.studentGrant.title,
      description: t.students.services.studentGrant.description,
      icon: Award,
      iconColor: "bg-yellow-500",
      buttonText: t.students.services.studentGrant.button,
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      expandableItems: [
        t.students.services.studentGrant.current,
        t.students.services.studentGrant.financed,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t.students.hero.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            {t.students.hero.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Grants Fund Section */}
        <GrantsFundSection data={studentHubData.grantsFund} />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Erasmus+ Programs Section */}
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {studentHubData.erasmusPrograms.title}
              </h2>
              <p className="text-base text-gray-600">
                {studentHubData.erasmusPrograms.subtitle}
              </p>
            </div>
            <div className="bg-blue-900 rounded-full p-3 flex-shrink-0">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentHubData.erasmusPrograms.programs.map((program) => (
              <ErasmusProgramCard
                key={program.id}
                university={program.university}
                description={program.description}
                color={
                  program.color as
                    | "blue"
                    | "green"
                    | "purple"
                    | "pink"
                    | "yellow"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
