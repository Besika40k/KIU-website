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
              About <span className="text-[#15396F]">KIU</span>
            </h2>
            <div className="space-y-6 text-[#3D5C84] leading-relaxed">
              <p>
                Kutaisi International University Campus is located in the city of Kutaisi. KIU has opened its doors to the first cohort of students in 2020. The goal of the university is to gradually become an international hub of education, science and technology in the region.
              </p>
              <p>
                KIU is currently offering undergraduate degree English language programs. KIU plans to add vocational, graduate, and post-graduate degree programs in the future. The aim of the university is to prepare highly qualified workforce and human capital that will promote economic growth and development of Georgia and the entire region.
              </p>
              <p>
                The Cartu Foundation is investing over 1 billion Euro into the development of the Kutaisi International University (KIU) project. Kutaisi International University is legal entity for public law (i.e a state university).
              </p>
              <p>
                KIU collaborates with Technical University of Munich (TUM), the leading European university. The operational model of the university is developed in partnership with TUM and TUM International GmbH. The Honorary President of Kutaisi International University is Prof. Dr. Wolfgang A. Herrmann, former President of TUM.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-light text-center">
              <div className="text-3xl font-bold text-[#15396F] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                2020
              </div>
              <p className="text-[#3D5C84] font-medium">Founded</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-light text-center">
              <div className="text-3xl font-bold text-[#FED73C] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                1B€
              </div>
              <p className="text-[#3D5C84] font-medium">Investment</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-light text-center">
              <div className="text-3xl font-bold text-[#3D5C84] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                100%
              </div>
              <p className="text-[#3D5C84] font-medium">English Programs</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-light text-center">
              <div className="text-3xl font-bold text-[#15396F] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                TUM
              </div>
              <p className="text-[#3D5C84] font-medium">Partnership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
