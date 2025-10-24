"use client";

import type React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  GraduationCap,
  ArrowRight,
  Sun,
  Cloud,
  Home,
  Utensils,
  Download,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    image: string;
    overview?: {
      title: string;
      description: string;
    };
    keyFeatures?: string[];
    goals?: {
      title: string;
      description: string;
      additionalInfo?: string;
    };
    conferenceDates?: {
      dates: string;
      year: string;
    };
    registrationFees?: {
      regular: string;
      students: string;
    };
    about?: {
      title: string;
      description: string;
      additionalInfo?: string;
    };
    scientificProgram?: {
      title: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    accommodationEvents?: {
      title: string;
      items: Array<{
        icon: string;
        title: string;
      }>;
    };
    registration?: {
      title: string;
      description: string;
      submitTo: string;
      notification: string;
      downloadLink: string;
    };
    scientificCommittee?: Array<{
      name: string;
      affiliation: string;
    }>;
    plenarySpeakers?: Array<{
      name: string;
      affiliation: string;
    }>;
  };
}

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-6 w-6" />,
  "arrow-right": <ArrowRight className="h-6 w-6" />,
  sun: <Sun className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  home: <Home className="h-5 w-5" />,
  utensils: <Utensils className="h-5 w-5" />,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Project Header */}
        <div className="flex items-start gap-4 p-6 pb-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-primary">
            {iconMap[project.icon]}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-blue-600">{project.subtitle}</p>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative aspect-[2/1] w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Conference Dates (if applicable) */}
        {project.conferenceDates && (
          <div className="mx-6 -mt-8 relative z-10">
            <Card className="bg-blue-900 text-white">
              <CardContent className="p-4">
                <p className="text-sm font-medium mb-1">{t.projects.labels.conferenceDates}</p>
                <p className="text-2xl font-bold">
                  {project.conferenceDates.dates}
                </p>
                <p className="text-sm">{project.conferenceDates.year}</p>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="p-6 space-y-6">
          {/* Overview or About */}
          {project.overview && (
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                {project.overview.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.overview.description}
              </p>
            </div>
          )}

          {project.about && (
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                {project.about.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {project.about.description}
              </p>
              {project.about.additionalInfo && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.about.additionalInfo}
                </p>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t.projects.labels.keyFeatures}
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-yellow-500 mt-1">●</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Registration Fees */}
          {project.registrationFees && (
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t.projects.labels.registrationFees}
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {t.projects.labels.regular}
                  </span>
                  <span className="font-semibold">
                    {project.registrationFees.regular}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {t.projects.labels.students}
                  </span>
                  <span className="font-semibold">
                    {project.registrationFees.students}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Scientific Program */}
          {project.scientificProgram && (
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {project.scientificProgram.title}
              </h4>
              <div className="grid gap-3">
                {project.scientificProgram.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-yellow-500 mt-0.5">
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accommodation & Events */}
          {project.accommodationEvents && (
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {project.accommodationEvents.title}
              </h4>
              <div className="grid gap-2">
                {project.accommodationEvents.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-yellow-500">{iconMap[item.icon]}</div>
                    <p className="text-sm text-muted-foreground">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Program Goals */}
          {project.goals && (
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                {project.goals.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {project.goals.description}
              </p>
              {project.goals.additionalInfo && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.goals.additionalInfo}
                </p>
              )}
            </div>
          )}

          {/* Registration & Abstract */}
          {project.registration && (
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                {project.registration.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {project.registration.description}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                {t.projects.labels.submitAbstracts}{" "}
                <a
                  href={`mailto:${project.registration.submitTo}`}
                  className="text-blue-600 hover:underline"
                >
                  {project.registration.submitTo}
                </a>
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                {project.registration.notification}
              </p>
              <Button className="bg-yellow-400 text-primary hover:bg-yellow-500">
                <Download className="mr-2 h-4 w-4" />
                {project.registration.downloadLink}
              </Button>
            </div>
          )}

          {/* Scientific Committee */}
          {project.scientificCommittee && (
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t.projects.labels.scientificCommittee}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.scientificCommittee.map((member, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-3">
                    <p className="text-sm font-medium">{member.name}</p>
                    {member.affiliation && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {member.affiliation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Plenary Speakers */}
          {project.plenarySpeakers && (
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t.projects.labels.plenarySpeakers}
              </h4>
              <div className="grid gap-3">
                {project.plenarySpeakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-600 pl-4 py-2"
                  >
                    <p className="font-medium text-sm">{speaker.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {speaker.affiliation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
