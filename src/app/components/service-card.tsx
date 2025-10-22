import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  buttonText: string;
  buttonColor: string;
  expandableItems?: string[];
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  iconColor,
  buttonText,
  buttonColor,
  expandableItems,
}: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className={`rounded-full p-2 ${iconColor}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end space-y-2">
        {expandableItems && (
          <div className="space-y-2 mb-3">
            {expandableItems.map((item, index) => (
              <div
                key={index}
                className="text-sm text-foreground bg-muted/50 px-3 py-2 rounded flex items-center"
              >
                <span className="mr-2">→</span>
                {item}
              </div>
            ))}
          </div>
        )}
        <Button className={`w-full ${buttonColor}`}>{buttonText}</Button>
      </CardContent>
    </Card>
  );
}
