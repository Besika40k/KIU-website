import { IndividualNewsPage } from "../../components/IndividualNewsPage";
import newsData from "../../data/news.json";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsId = Number(params.id);
  const newsItem = newsData.find((item) => item.id === newsId);

  if (!newsItem) {
    return <div>News not found.</div>;
  }

  const latestNews = newsData
    .filter((item) => item.id !== newsId) // Exclude the current article
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by most recent
    .slice(0, 3); // Get top 3

  return <IndividualNewsPage news={newsItem} latestNews={latestNews} />;
}