"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function OurSchoolsSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            {t.homepage.schools.title.split(t.homepage.schools.titleHighlight)[0]} <span className="text-[#FED73C]">{t.homepage.schools.titleHighlight}</span>
          </h2>
          <p className="text-xl text-[#3D5C84]">{t.homepage.schools.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.homepage.schools.programs.map((program: { color: string; title: string; description: string }, index: number) => {
            const getGradientClass = (color: string) => {
              switch(color) {
                case 'blue': return 'from-[#15396F] to-[#3D5C84]';
                case 'yellow': return 'from-[#FED73C] to-yellow-400';
                case 'dark-blue': return 'from-[#3D5C84] to-gray-600';
                case 'green': return 'from-green-500 to-green-600';
                default: return 'from-[#15396F] to-[#3D5C84]';
              }
            };
            
            const getIconColor = (color: string) => {
              switch(color) {
                case 'yellow': return 'text-[#FED73C]';
                case 'dark-blue': return 'text-[#3D5C84]';
                case 'green': return 'text-green-500';
                default: return 'text-[#15396F]';
              }
            };
            
            const getTitleColor = (color: string) => color === 'yellow' ? 'text-[#0a0a0a]' : 'text-white';
            const getDescColor = (color: string) => {
              switch(color) {
                case 'yellow': return 'text-yellow-800';
                case 'dark-blue': return 'text-gray-200';
                case 'green': return 'text-green-100';
                default: return 'text-blue-100';
              }
            };
            
            return (
              <div key={index} className={`bg-gradient-to-br ${getGradientClass(program.color)} rounded-lg p-8 text-center shadow-light hover:shadow-neuro-sm transition-all duration-300 hover:scale-105 cursor-pointer`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-light">
                  <svg className={`w-8 h-8 ${getIconColor(program.color)}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${getTitleColor(program.color)} mb-4`} style={{ fontFamily: "Playfair Display, serif" }}>
                  {program.title}
                </h3>
                <p className={`${getDescColor(program.color)} text-sm`}>{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
