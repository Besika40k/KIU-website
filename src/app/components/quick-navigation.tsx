"use client";

import type React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ArrowRight } from "lucide-react";

interface QuickNavItem {
  id: string;
  title: string;
  icon: "graduation-cap" | "arrow-right";
}

interface QuickNavigationProps {
  items: QuickNavItem[];
}

const iconMap = {
  "graduation-cap": GraduationCap,
  "arrow-right": ArrowRight,
};

export function QuickNavigation({ items }: QuickNavigationProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-muted/30 rounded-xl p-8">
      <h2 className="text-center text-xl font-semibold text-primary mb-6">
        Quick Navigation
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer w-40">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-center text-sm font-medium text-primary">
                    {item.title}
                  </p>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
}
