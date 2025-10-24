"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function AboutKIUSection() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-[#0a0a0a]" style={{ fontFamily: "Playfair Display, serif" }}>
              {t.homepage.about.title.split("KIU")[0]} <span className="text-[#15396F]">KIU</span>
            </h2>
            <div className="space-y-6 text-[#3D5C84] leading-relaxed">
              {t.homepage.about.description.split('\n').filter((p: string) => p.trim() !== '').map((paragraph: string, index: number) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/<a>/g, '').replace(/<\/a>/g, '') }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {t.homepage.about.stats.map((stat: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-light text-center">
                <div 
                  className={`text-3xl font-bold mb-2 ${
                    index === 1 ? 'text-[#FED73C]' : 
                    index === 2 ? 'text-[#3D5C84]' : 
                    'text-[#15396F]'
                  }`} 
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {stat.number}
                </div>
                <p className="text-[#3D5C84] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
