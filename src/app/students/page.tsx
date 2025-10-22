import {
  Calendar,
  FileText,
  Globe,
  DollarSign,
  BookOpen,
  Award,
} from "lucide-react";
import { ServiceCard } from "../components/service-card";
import { GrantsFundSection } from "../components/grants-fund-section";
import { ErasmusProgramCard } from "../components/erasmus-program-card";
import studentHubData from "../data/studenthub.json";
export default function StudentsPage() {
  const services = [
    {
      title: "Academic Calendar",
      description:
        "Important dates, semester schedules, and academic deadlines for the current year.",
      icon: Calendar,
      iconColor: "bg-blue-600",
      buttonText: "View Calendar",
      buttonColor: "bg-blue-900 hover:bg-blue-800 text-white",
    },
    {
      title: "Legal Directory",
      description:
        "University regulations, policies, and legal documents for students.",
      icon: FileText,
      iconColor: "bg-blue-600",
      buttonText: "Access Directory",
      buttonColor: "bg-blue-900 hover:bg-blue-800 text-white",
    },
    {
      title: "Academic Mobility",
      description:
        "Exchange programs and mobility opportunities for KIU students.",
      icon: Globe,
      iconColor: "bg-yellow-500",
      buttonText: "Learn More",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      expandableItems: ["External Mobility", "Internal Mobility"],
    },
    {
      title: "Tuition Fee",
      description:
        "Fee structure, payment schedules, and financial information.",
      icon: DollarSign,
      iconColor: "bg-green-600",
      buttonText: "View Fees",
      buttonColor: "bg-green-600 hover:bg-green-700 text-white",
    },
    {
      title: "Library",
      description:
        "Digital resources, catalog search, and library services for students.",
      icon: BookOpen,
      iconColor: "bg-purple-600",
      buttonText: "Access Library",
      buttonColor: "bg-purple-600 hover:bg-purple-700 text-white",
    },
    {
      title: "Student Grant Program",
      description: "Funding opportunities for student projects and activities.",
      icon: Award,
      iconColor: "bg-yellow-500",
      buttonText: "Apply Now",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      expandableItems: ["Current Grant Competition", "Financed Projects"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Student Information Hub
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Your comprehensive guide to KIU student services and resources
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Grants Fund Section */}
        <GrantsFundSection data={studentHubData.grantsFund} />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Erasmus+ Programs Section */}
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {studentHubData.erasmusPrograms.title}
              </h2>
              <p className="text-base text-gray-600">
                {studentHubData.erasmusPrograms.subtitle}
              </p>
            </div>
            <div className="bg-blue-900 rounded-full p-3 flex-shrink-0">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentHubData.erasmusPrograms.programs.map((program) => (
              <ErasmusProgramCard
                key={program.id}
                university={program.university}
                description={program.description}
                color={
                  program.color as
                    | "blue"
                    | "green"
                    | "purple"
                    | "pink"
                    | "yellow"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
