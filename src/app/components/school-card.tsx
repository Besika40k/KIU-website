"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Calculator,
  Briefcase,
  HeartPulse,
  Scale,
  Users,
  Building2,
} from "lucide-react";

const iconMap = {
  monitor: Monitor,
  calculator: Calculator,
  briefcase: Briefcase,
  "heart-pulse": HeartPulse,
  scale: Scale,
  users: Users,
  building: Building2,
};

interface SchoolCardProps {
  name: string;
  tagline: string;
  icon: string;
  studentCount: string;
  programCount: number;
  description: string;
  backgroundColor: string;
  borderColor: string;
}

export function SchoolCard({
  name,
  tagline,
  icon,
  studentCount,
  programCount,
  description,
  backgroundColor,
  borderColor,
}: SchoolCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Monitor;

  return (
    <Card
      className={`${backgroundColor} ${borderColor} border-2 h-full flex flex-col`}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <IconComponent className="w-6 h-6 text-slate-700" />
          </div>
          <Badge className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-semibold">
            Featured
          </Badge>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
          <p className="text-sm text-slate-600 italic">{tagline}</p>
        </div>
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="bg-white text-slate-700 border-slate-300"
          >
            {studentCount} Students
          </Badge>
          <Badge
            variant="outline"
            className="bg-white text-slate-700 border-slate-300"
          >
            {programCount} Programs
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <p className="text-sm text-slate-600 mb-4">{description}</p>
        <div className="flex gap-2">
          <Button className="flex-1 bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-semibold">
            Explore Programs
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-slate-800 text-white hover:bg-slate-900"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
