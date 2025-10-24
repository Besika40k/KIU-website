import { format } from "date-fns";
import { enUS, ka } from "date-fns/locale";

export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    TECHNOLOGY: "bg-blue-500 text-white",
    ტექნოლოგია: "bg-blue-500 text-white",

    RESEARCH: "bg-purple-600 text-white",
    კვლევა: "bg-purple-600 text-white",

    CAMPUS: "bg-green-600 text-white",
    კამპუსი: "bg-green-600 text-white",

    PARTNERSHIP: "bg-orange-500 text-white",
    პარტნიორობა: "bg-orange-500 text-white",

    LECTURE: "bg-purple-700 text-white",
    ლექცია: "bg-purple-700 text-white",

    EDUCATION: "bg-green-500 text-white",
    განათლება: "bg-green-500 text-white",
  };

  return colors[category] || "bg-gray-600 text-white";
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
