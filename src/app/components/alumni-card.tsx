import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

interface AlumniCardProps {
  name: string;
  degree: string;
  image: string;
  quote: string;
}

export function AlumniCard({ name, degree, image, quote }: AlumniCardProps) {
  return (
    <Card className="bg-white border-slate-200 h-full">
      <CardContent className="p-6 space-y-4">
        <Quote className="w-8 h-8 text-slate-300" />
        <p className="text-slate-600 text-sm leading-relaxed">{quote}</p>
        <div className="flex items-center gap-3 pt-2">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-slate-900">{name}</p>
            <p className="text-sm text-slate-600">{degree}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
