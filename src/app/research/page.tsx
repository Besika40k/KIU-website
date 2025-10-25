'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import translations from '@/../i18n/en.json';
import translationsGe from '@/../i18n/ge.json';

export default function ResearchPage() {
  const { lang } = useLanguage();
  const t = lang === 'en' ? translations : translationsGe;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div {...fadeInUp} className="inline-block">
              <span className="inline-block px-4 py-2 bg-accent text-text text-sm font-semibold rounded-full mb-6">
                {t.research?.hero?.tag || 'RESEARCH EXCELLENCE'}
              </span>
            </motion.div>
            <motion.h1 
              {...fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text mb-6 leading-tight"
            >
              {t.research?.hero?.title1 || 'Research at'} <span className="text-primary">{t.research?.hero?.title2 || 'KIU'}</span>
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed"
            >
              {t.research?.hero?.description || 'Advancing scientific knowledge and innovation through cutting-edge research facilities, international collaborations, and state-of-the-art infrastructure'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Research Strategy Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary text-background text-sm font-semibold rounded-full mb-4">
                {t.research?.strategy?.tag || 'OUR VISION'}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-text mb-8 leading-tight">
                {t.research?.strategy?.title1 || 'Research'} <span className="text-accent">{t.research?.strategy?.title2 || 'Strategy'}</span>
              </h2>
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>{t.research?.strategy?.content1 || "KIU is aiming to become an international research and education hub in the region. The research strategy of KIU includes development of the state-of-the-art facilities and modern research infrastructure."}</p>
                <p>{t.research?.strategy?.content2 || "Research facilities and labs will be organized to support development of the Masters, Doctoral, and Post-doctoral programs at KIU through attracting scientists and leading experts in the respective fields."}</p>
                <p>{t.research?.strategy?.content3 || "KIU's strategic development plan envisions establishment of a Hadron Therapy Center. This research center will offer its facilities for the scientific research in particle physics, radiation physics and biophysics, as well as support operations of the Proton Therapy Center, coupled with the faculty of Medicine at KIU."}</p>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary text-background p-8 rounded-2xl shadow-lg mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-playfair">{t.research?.strategy?.highlight?.title || 'International Collaborations'}</h3>
                    <p className="text-blue-100 leading-relaxed">
                      {t.research?.strategy?.highlight?.description || 'KIU supports international scientific collaborations of academic, administrative, and research staff. For more information about partnerships, please visit KIU website (www.kiu.edu.ge) or contact us at info@kiu.edu.ge'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Image 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop&crop=center" 
                  alt="Research Laboratory"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <Image 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center" 
                  alt="Scientific Equipment"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <Image 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=center" 
                  alt="Modern Facilities"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg col-span-2"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hadron Therapy Center Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary text-background text-sm font-semibold rounded-full mb-6">
              {t.research?.htc?.tag || 'ADVANCED TECHNOLOGY'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-text mb-6">
              {t.research?.htc?.title1 || 'Hadron Therapy'} <span className="text-primary">{t.research?.htc?.title2 || 'Center'}</span> {t.research?.htc?.title3 || '(HTC)'}
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              {t.research?.htc?.subtitle || 'Advanced particle accelerator technology for groundbreaking research and medical treatment'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>{t.research?.htc?.description || 'The Kutaisi International University will house a Hadron Therapy Center. The center will be equipped with the cyclotron particle accelerators for conducting scientific research and medical treatment.'}</p>
                <p className="font-semibold text-text">{t.research?.htc?.facilitiesTitle || 'HTC will provide facilities and labs for research and education along the following main directions:'}</p>
              </div>

              <div className="space-y-6">
                <div className="bg-background rounded-2xl p-8 shadow-lg border-l-4 border-accent hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text mb-2 font-playfair">{t.research?.htc?.area1?.title || 'Medical and Experimental Physics'}</h4>
                      <p className="text-secondary">{t.research?.htc?.area1?.description || 'Advanced research in medical physics applications and experimental methodologies for cutting-edge healthcare solutions'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text mb-2 font-playfair">{t.research?.htc?.area2?.title || 'Medical and Radiation Biophysics'}</h4>
                      <p className="text-secondary">{t.research?.htc?.area2?.description || 'Comprehensive study of biological effects of radiation and innovative medical applications'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text mb-2 font-playfair">{t.research?.htc?.area3?.title || 'Radiochemistry'}</h4>
                      <p className="text-secondary">{t.research?.htc?.area3?.description || 'Advanced chemical processes involving radioactive materials and isotope research'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&h=500&fit=crop&crop=center" 
                alt="Cyclotron Facility"
                width={700}
                height={500}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-text mb-2 font-playfair">{t.research?.htc?.cyclotron?.title || 'State-of-the-Art Cyclotron Technology'}</h3>
                  <p className="text-secondary">{t.research?.htc?.cyclotron?.description || 'Advanced particle accelerator systems for precision research and treatment'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kutaisi Campus Box */}
          <div className="bg-gradient-to-r from-primary to-secondary text-background rounded-2xl p-12 shadow-lg mt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-accent text-text text-sm font-semibold rounded-full mb-6">
                  {t.research?.campus?.tag || 'LOCATION'}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-playfair">{t.research?.campus?.title || 'Kutaisi Campus'}</h3>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  {t.research?.campus?.description || 'The facilities at the Kutaisi International University Campus will be provided by IBA (Ion Beam Applications SA) cyclotrons. Center will be established to support both: scientific research, as well as treatment of cancer patients.'}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2 font-playfair">{t.research?.campus?.stats?.partner || 'IBA'}</div>
                    <p className="text-blue-200 text-sm">{t.research?.campus?.stats?.partnerLabel || 'Technology Partner'}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2 font-playfair">{t.research?.campus?.stats?.year || '2024'}</div>
                    <p className="text-blue-200 text-sm">{t.research?.campus?.stats?.yearLabel || 'Expected Opening'}</p>
                  </div>
                </div>
              </div>
              <div>
                <Image 
                  src="https://www.medlinkstudents.com/wp-content/uploads/2021/02/Kutaisi-University-Georgia.jpg" 
                  alt="Kutaisi Campus"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proton Therapy Clinic Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-accent text-text text-sm font-semibold rounded-full mb-6">
              {t.research?.protonClinic?.tag || 'MEDICAL INNOVATION'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-text mb-6">
              {t.research?.protonClinic?.title1 || 'Proton Therapy'} <span className="text-primary">{t.research?.protonClinic?.title2 || 'Clinic'}</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              {t.research?.protonClinic?.subtitle || 'The most advanced form of radiation therapy for precision cancer treatment'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>{t.research?.protonClinic?.description || 'A Proton Therapy Clinic will be established at the Kutaisi International University Campus and will offer its patients a combined diagnostic and treatment facilities. Cancer research and treatment will be based on the state of the art proton therapy based methods.'}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-4 font-playfair">{t.research?.protonClinic?.highlight?.title || 'Advanced Treatment Technology'}</h3>
                  </div>
                </div>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>{t.research?.protonClinic?.highlight?.content1 || 'Proton therapy is considered the most advanced form of radiation therapy that uses high-energy proton beam to irradiate tumors. The range of the applications of this cutting edge solution is expanding.'}</p>
                  <p className="font-semibold text-text">{t.research?.protonClinic?.highlight?.content2 || "The center will join world's largest and most advanced networks of the proton therapy centers."}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Image 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=350&h=250&fit=crop&crop=center" 
                alt="Medical Equipment"
                width={350}
                height={250}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <Image 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=350&h=250&fit=crop&crop=center" 
                alt="Treatment Room"
                width={350}
                height={250}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <Image 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=350&h=250&fit=crop&crop=center" 
                alt="Medical Technology"
                width={350}
                height={250}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <Image 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=350&h=250&fit=crop&crop=center" 
                alt="Research Lab"
                width={350}
                height={250}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center border-t-4 border-accent hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-text mb-3 font-playfair">{t.research?.protonClinic?.feature1?.title || 'Precision Treatment'}</h4>
              <p className="text-secondary">{t.research?.protonClinic?.feature1?.description || 'Targeted therapy with minimal side effects'}</p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg text-center border-t-4 border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-text mb-3 font-playfair">{t.research?.protonClinic?.feature2?.title || 'Research Integration'}</h4>
              <p className="text-secondary">{t.research?.protonClinic?.feature2?.description || 'Combined treatment and research facilities'}</p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg text-center border-t-4 border-secondary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-text mb-3 font-playfair">{t.research?.protonClinic?.feature3?.title || 'Global Network'}</h4>
              <p className="text-secondary">{t.research?.protonClinic?.feature3?.description || 'Connected to worldwide proton therapy centers'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary text-background text-sm font-semibold rounded-full mb-6">
              {t.research?.publications?.tag || 'ACADEMIC EXCELLENCE'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-text mb-6">
              {t.research?.publications?.title1 || 'Research'} <span className="text-accent">{t.research?.publications?.title2 || 'Publications'}</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              {t.research?.publications?.subtitle || 'Annual conferences showcasing cutting-edge research and scientific achievements across multiple disciplines'}
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-background rounded-2xl p-12 shadow-lg text-center max-w-4xl mx-auto">
              <p className="text-lg text-secondary leading-relaxed">
                {t.research?.publications?.description || 'Kutaisi International University holds annual conferences at the end of every academic year, where professors and scientists of the university can present their research. Conference is organized into parallel sessions, depending on the research topics.'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Conference 2021 */}
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-accent">
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-text font-playfair">21</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-6 font-playfair">{t.research?.publications?.conf2021?.title || 'KIU Annual Conference 2021'}</h3>
              <div className="space-y-4 text-left">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2021?.track1 || 'Management'}</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2021?.track2 || 'Mathematics and Computer Science'}</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2021?.track3 || 'Physics'}</h4>
                </div>
              </div>
            </div>

            {/* Conference 2022 */}
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-primary">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-background font-playfair">22</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-6 font-playfair">{t.research?.publications?.conf2022?.title || 'KIU Annual Conference 2022'}</h3>
              <div className="space-y-4 text-left">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2022?.track1 || 'Management'}</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2022?.track2 || 'Mathematics and Computer Science'}</h4>
                </div>
              </div>
            </div>

            {/* Conference 2023 */}
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-secondary">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-background font-playfair">23</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-6 font-playfair">{t.research?.publications?.conf2023?.title || 'KIU Annual Conference 2023'}</h3>
              <div className="space-y-4 text-left">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2023?.track1 || 'Management'}</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2023?.track2 || 'Mathematics and Computer Science'}</h4>
                </div>
              </div>
            </div>

            {/* Conference 2024 */}
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-green-500">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-background font-playfair">24</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-6 font-playfair">{t.research?.publications?.conf2024?.title || 'KIU Annual Conference 2024'}</h3>
              <div className="space-y-4 text-left">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2024?.track1 || 'Management'}</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-text">{t.research?.publications?.conf2024?.track2 || 'Mathematics and Computer Science'}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Image 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&h=400&fit=crop&crop=center" 
              alt="Conference Hall"
              width={1000}
              height={400}
              className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8"
            />
            <h3 className="text-2xl font-bold text-text mb-4 font-playfair">{t.research?.publications?.conferenceTitle || 'Annual Research Conference'}</h3>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              {t.research?.publications?.conferenceDescription || 'Join leading researchers and academics from around the world at our prestigious annual conference'}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
