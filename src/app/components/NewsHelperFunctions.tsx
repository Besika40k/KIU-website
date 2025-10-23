import { format } from "date-fns";
import { enUS, ka } from "date-fns/locale";

export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    TECHNOLOGY: "bg-blue-100 text-blue-800",
    ტექნოლოგია: "bg-blue-100 text-blue-800",

    RESEARCH: "bg-orange-100 text-orange-800",
    კვლევა: "bg-orange-100 text-orange-800",

    CAMPUS: "bg-green-100 text-green-800",
    კამპუსი: "bg-green-100 text-green-800",

    PARTNERSHIP: "bg-purple-100 text-purple-800",
    პარტნიორობა: "bg-purple-100 text-purple-800",

    LECTURE: "bg-red-100 text-red-800",
    ლექცია: "bg-red-100 text-red-800",
  };

  return colors[category] || "bg-gray-100 text-gray-800";
};

export function formatDate(dateString: string, lang: string): string;
export function formatDate(dateString: string): string;
export function formatDate(dateString: string, lang?: string): string {
  const date = new Date(dateString);
  const isEnglish = lang ? lang === "en" : true; // Default to English if no language provided
  const locale = isEnglish ? enUS : ka;
  const dateFormat = isEnglish ? "MMMM dd, yyyy" : "dd MMMM, yyyy";
  return format(date, dateFormat, { locale });
}
