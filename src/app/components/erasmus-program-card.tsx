import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ErasmusProgramCardProps {
  university: string;
  description: string;
  color: "blue" | "green" | "purple" | "pink" | "yellow";
}

const colorClasses = {
  blue: "bg-blue-50 hover:bg-blue-100",
  green: "bg-green-50 hover:bg-green-100",
  purple: "bg-purple-50 hover:bg-purple-100",
  pink: "bg-pink-50 hover:bg-pink-100",
  yellow: "bg-yellow-50 hover:bg-yellow-100",
};

export function ErasmusProgramCard({
  university,
  description,
  color,
}: ErasmusProgramCardProps) {
  return (
    <Card
      className={`${colorClasses[color]} border-none transition-colors duration-200`}
    >
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-900">
          {university}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href="#"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Details
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
