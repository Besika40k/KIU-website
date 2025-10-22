import { Card, CardContent } from "@/components/ui/card";

interface GrantsFundData {
  title: string;
  subtitle: string;
  description: string;
  contactEmail: string;
}

interface GrantsFundSectionProps {
  data: GrantsFundData;
}

export function GrantsFundSection({ data }: GrantsFundSectionProps) {
  return (
    <Card className="bg-yellow-400 border-yellow-400 overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {data.title}
          </h2>
          <p className="text-base md:text-lg text-gray-800">{data.subtitle}</p>
        </div>
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="text-sm md:text-base text-gray-700 space-y-4">
              {data.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>
                  {paragraph.includes("email us at:") ? (
                    <>
                      {paragraph.split("email us at:")[0]}
                      email us at:{" "}
                      <a
                        href={`mailto:${data.contactEmail}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {data.contactEmail}
                      </a>
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
