import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface VacancyItemProps {
  title: string;
  isOpen: boolean;
}

export function VacancyItem({ title, isOpen }: VacancyItemProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Badge
          variant={isOpen ? "default" : "destructive"}
          className={
            isOpen
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          }
        >
          {isOpen ? "Open" : "Closed"}
        </Badge>
        <p className="text-sm leading-relaxed flex-1">{title}</p>
      </div>
    </Card>
  );
}
