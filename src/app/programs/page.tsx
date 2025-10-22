import { Button } from "@/components/ui/button";
import { SchoolCard } from "../components/school-card";
import { AlumniCard } from "../components/alumni-card";
import programsData from "../data/programs.json";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Schools at Kutaisi International University
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed">
                Discover our diverse academic schools, each dedicated to
                excellence in education, research, and innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-semibold">
                  Explore All Schools
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Virtual Campus Tour
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-48">
                {/* Decorative illustration placeholder */}
                <div className="absolute inset-0 flex items-end justify-around">
                  <div className="w-16 h-24 bg-slate-600 rounded-t-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-slate-800 rounded-full" />
                  </div>
                  <div className="w-16 h-32 bg-yellow-400 rounded-t-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-slate-800 rounded-full" />
                  </div>
                  <div className="w-16 h-24 bg-slate-600 rounded-t-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-slate-800 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Academic Network Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Global Academic Network
            </h2>
            <p className="text-slate-600">
              Our schools maintain partnerships with leading universities
              worldwide
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Partner Universities
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>→ MIT - Computer Science</li>
                  <li>→ Oxford - Law</li>
                  <li>→ ETH - Architecture</li>
                  <li>→ Heidelberg - Law</li>
                  <li>→ KAIST - Technology</li>
                </ul>
              </div>
              <div className="flex-1 relative h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                {/* World map illustration placeholder */}
                <div className="relative w-full h-full">
                  <svg
                    viewBox="0 0 400 200"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Simple world map outline */}
                    <path
                      d="M50,100 Q100,80 150,100 T250,100 T350,100"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M50,120 Q100,140 150,120 T250,120 T350,120"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Partner location dots */}
                    <circle cx="80" cy="90" r="6" fill="#fbbf24" />
                    <circle cx="150" cy="85" r="6" fill="#fbbf24" />
                    <circle cx="200" cy="95" r="6" fill="#fbbf24" />
                    <circle cx="280" cy="88" r="6" fill="#fbbf24" />
                    <circle cx="320" cy="100" r="6" fill="#fbbf24" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Choose Your Academic Path
            </h2>
            <p className="text-slate-600">
              Each school offers unique opportunities for growth, discovery, and
              professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programsData.schools.map((school) => (
              <SchoolCard key={school.id} {...school} />
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Alumni Success Stories
            </h2>
            <p className="text-slate-600">
              Our graduates are making impact worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programsData.alumniStories.map((alumni) => (
              <AlumniCard key={alumni.id} {...alumni} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
