import { ExpressionOfInterest } from "../components/expression-of-interest";
import { EmptyVacancies } from "../components/empty-vacancies";
import { VacancyItem } from "../components/vacancy-item";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import vacanciesData from "../data/vacancies.json";

export default function VacanciesPage() {
  const openVacancies = vacanciesData.vacancies.filter((v) => v.isOpen);
  const closedVacancies = vacanciesData.vacancies.filter((v) => !v.isOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Vacancies</h1>
          <p className="text-muted-foreground">
            Join our academic community at Kutaisi International University
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
        {/* Expression of Interest Section */}
        <ExpressionOfInterest />

        {/* Current Vacancy Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Current Vacancy</h2>
          {openVacancies.length === 0 ? (
            <EmptyVacancies />
          ) : (
            <div className="space-y-3">
              {openVacancies.map((vacancy) => (
                <VacancyItem
                  key={vacancy.id}
                  title={vacancy.title}
                  isOpen={vacancy.isOpen}
                />
              ))}
            </div>
          )}
        </div>

        {/* Closed Vacancies Section */}
        {closedVacancies.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Closed Vacancies at KIU
            </h2>
            <div className="space-y-3">
              {closedVacancies.map((vacancy) => (
                <VacancyItem
                  key={vacancy.id}
                  title={vacancy.title}
                  isOpen={vacancy.isOpen}
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer CTA Section */}
        <Card className="bg-blue-600 text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Interested in Future Opportunities?
          </h2>
          <p className="mb-6 text-blue-50">
            Stay updated with new vacancies and submit your expression of
            interest.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="secondary" size="lg">
              Submit Expression of Interest
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
