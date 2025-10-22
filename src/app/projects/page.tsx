import { ProjectCard } from "../components/project-card";
import { QuickNavigation } from "../components/quick-navigation";
import projectsData from "../data/projects.json";

export default function ProjectsPage() {
  const quickNavItems = projectsData.map((project) => ({
    id: project.id,
    title: project.title,
    icon: project.icon as "graduation-cap" | "arrow-right",
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover innovative initiatives and academic conferences that
            advance education and research at Kutaisi International University
          </p>
        </div>

        {/* Quick Navigation */}
        <QuickNavigation items={quickNavItems} />
      </div>

      {/* Current Projects Section */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Current Projects
        </h2>

        <div className="space-y-12 max-w-5xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} id={project.id} className="scroll-mt-24">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
