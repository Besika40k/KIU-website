'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import enTranslations from '../../../../i18n/en.json';
import geTranslations from '../../../../i18n/ge.json';

export default function ComputerScienceSchoolPage() {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enTranslations : geTranslations;
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  // Scroll reveal effect
  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('revealed');
        }
      });
    };

    // Initialize scroll reveal
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Add staggered animation to cards
    const cards = document.querySelectorAll('.neumorphic-card2, .faculty-card, .program-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-in-up');
      }, index * 100);
    });

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('load', revealOnScroll);
    };
  }, []);

  const showTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-gray-50 font-inter">
      {/* Navigation Breadcrumb */}
      <nav className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-secondary">
            <button 
              onClick={() => router.push('/')} 
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {t.computerScience.breadcrumb.home}
            </button>
            <span>/</span>
            <button 
              onClick={() => router.push('/programs')} 
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {t.computerScience.breadcrumb.schools}
            </button>
            <span>/</span>
            <span className="text-primary font-medium">{t.computerScience.breadcrumb.computerScience}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
        <div className="particle top-20 right-20 w-8 h-8">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-accent">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        </div>
        <div className="particle top-32 left-16 w-6 h-6">
          <div className="w-full h-full bg-accent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="school-icon w-64 h-32 rounded-xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor"
                      strokeWidth="2" />
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                    {t.computerScience.hero.title}
                  </h1>
                  <p className="text-xl text-accent font-medium mt-2">&quot;{t.computerScience.hero.tagline}&quot;</p>
                </div>
              </div>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                {t.computerScience.hero.description}
              </p>

              {/* Quick Stats */}
              <div className="flex  flex-wrap gap-4 mb-8">
                <div className="glassmorphism rounded-lg p-4 text-center inline-block">
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-blue-100">{t.computerScience.hero.stats.students}</div>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-center inline-block">
                  <div className="text-2xl font-bold text-accent">8</div>
                  <div className="text-sm text-blue-100">{t.computerScience.hero.stats.programs}</div>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-center inline-block">
                  <div className="text-2xl font-bold text-accent">15</div>
                  <div className="text-sm text-blue-100">{t.computerScience.hero.stats.partners}</div>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-center inline-block">
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-sm text-blue-100">{t.computerScience.hero.stats.researchCenters}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent hover:bg-yellow-400 text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                  {t.computerScience.hero.applyButton}
                </button>
                <button className="glassmorphism text-white hover:bg-white hover:bg-opacity-20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer">
                  {t.computerScience.hero.scheduleVisitButton}
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Computer Science Lab" 
                width={800}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 scroll-reveal">
          <button 
            onClick={() => showTab('overview')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'overview' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            {t.computerScience.tabs.overview}
          </button>
          <button 
            onClick={() => showTab('programs')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'programs' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            {t.computerScience.tabs.programs}
          </button>
          <button 
            onClick={() => showTab('faculty')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'faculty' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            {t.computerScience.tabs.faculty}
          </button>
          <button 
            onClick={() => showTab('facilities')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'facilities' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            {t.computerScience.tabs.facilities}
          </button>
          <button 
            onClick={() => showTab('research')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'research' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            {t.computerScience.tabs.research}
          </button>
          <button 
            onClick={() => showTab('admissions')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'admissions' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            {t.computerScience.tabs.admissions}
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* About Section */}
              <div className="lg:col-span-2">
                <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal fade-in-up">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-6">{t.computerScience.overview.aboutTitle}</h2>
                  <div className="prose prose-lg text-secondary">
                    <p className="mb-4">
                      {t.computerScience.overview.aboutP1}
                    </p>
                    <p className="mb-4">
                      {t.computerScience.overview.aboutP2}
                    </p>
                    <p>
                      {t.computerScience.overview.aboutP3}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="space-y-6">
                <div className="neumorphic-card2 rounded-2xl p-6 scroll-reveal fade-in-up">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">{t.computerScience.overview.quickFacts}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">{t.computerScience.overview.founded}</span>
                      <span className="font-semibold text-primary">2010</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">{t.computerScience.hero.stats.students}</span>
                      <span className="font-semibold text-primary">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">{t.computerScience.overview.faculty}</span>
                      <span className="font-semibold text-primary">45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">{t.computerScience.overview.employmentRate}</span>
                      <span className="font-semibold text-accent2">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">{t.computerScience.overview.averageSalary}</span>
                      <span className="font-semibold text-accent2">$65,000</span>
                    </div>
                  </div>
                </div>

                <div className="neumorphic-card2 rounded-2xl p-6 scroll-reveal fade-in-up">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">{t.computerScience.overview.accreditations}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-secondary">ABET Accredited</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-secondary">IEEE Partnership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-secondary">ACM Student Chapter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Testimonials */}
            <div className="scroll-reveal">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">{t.computerScience.overview.testimonials}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glassmorphism-dark rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src="https://media.istockphoto.com/id/1395838909/photo/portrait-of-young-caucasian-men-in-office-school-environment.jpg?s=612x612&w=0&k=20&c=Io5Yro7pVGiLEG4_VF69_8zPWpTI7wieZL8fWrVTHjs="
                      alt="Student" 
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-primary">Levan Beridze</h4>
                      <p className="text-sm text-secondary">Software Engineering, Class of 2021</p>
                    </div>
                  </div>
                  <p className="text-secondary italic">&quot;The hands-on projects and industry mentorship prepared me
                    perfectly for my role at Google. The curriculum is always up-to-date with the latest
                    technologies.&quot;</p>
                </div>

                <div className="glassmorphism-dark rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src="https://thumbs.dreamstime.com/b/stylish-young-georgian-woman-relaxing-amid-lush-greenery-basking-serene-park-surroundings-portrait-vibrant-green-enjoying-359758508.jpg"
                      alt="Student" 
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-primary">Nino Gelashvili</h4>
                      <p className="text-sm text-secondary">AI &amp; Machine Learning, Class of 2020</p>
                    </div>
                  </div>
                  <p className="text-secondary italic">&quot;The research opportunities in AI were incredible. I published
                    two papers during my studies and now work as a Machine Learning Engineer at Microsoft.&quot;</p>
                </div>

                <div className="glassmorphism-dark rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src="https://media.istockphoto.com/id/1250436971/photo/male-student.jpg?s=612x612&w=0&k=20&c=4gKa4sRcQQ0sD4yg6GVLd3aN3CpgeHNCY607Tm8oQXA="
                      alt="Student" 
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-primary">Giorgi Kapanadze</h4>
                      <p className="text-sm text-secondary">Cybersecurity, Class of 2021</p>
                    </div>
                  </div>
                  <p className="text-secondary italic">&quot;The cybersecurity program gave me real-world experience with
                    the latest security tools and techniques. I landed my dream job before graduation.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal revealed">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">{t.computerScience.programsTab.title}</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">{t.computerScience.programsTab.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Undergraduate Programs */}
              <div className="scroll-reveal revealed">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">{t.computerScience.programsTab.undergraduate}</h3>
                <div className="space-y-4">
                  <div className="program-card rounded-xl p-6 fade-in-up">
                    <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-secondary mb-3">Comprehensive foundation in programming, algorithms, and
                      software development.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4 {t.computerScience.programsTab.duration}</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">120 {t.computerScience.programsTab.credits}</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6 fade-in-up">
                    <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Software
                      Engineering</h4>
                    <p className="text-secondary mb-3">Focus on large-scale software systems design and development
                      methodologies.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4 {t.computerScience.programsTab.duration}</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">120 {t.computerScience.programsTab.credits}</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6 fade-in-up">
                    <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Cybersecurity
                    </h4>
                    <p className="text-secondary mb-3">Specialized training in information security and digital
                      forensics.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4 {t.computerScience.programsTab.duration}</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">120 {t.computerScience.programsTab.credits}</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6 fade-in-up">
                    <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Data Science</h4>
                    <p className="text-secondary mb-3">Statistical analysis, machine learning, and big data
                      technologies.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4 {t.computerScience.programsTab.duration}</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">120 {t.computerScience.programsTab.credits}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graduate Programs */}
              <div className="scroll-reveal revealed">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">{t.computerScience.programsTab.graduate}</h3>
                <div className="space-y-4">
                  <div className="program-card rounded-xl p-6 fade-in-up">
                    <h4 className="text-lg font-semibold text-primary mb-2">Master of Science in Computer Science
                    </h4>
                    <p className="text-secondary mb-3">Advanced study in algorithms, systems, and theoretical
                      computer science.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">2 {t.computerScience.programsTab.duration}</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">36 {t.computerScience.programsTab.credits}</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6 fade-in-up">
                    <h4 className="text-lg font-semibold text-primary mb-2">Master of Science in Artificial
                      Intelligence</h4>
                    <p className="text-secondary mb-3">Cutting-edge research in machine learning and neural
                      networks.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">2 {t.computerScience.programsTab.duration}</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">36 {t.computerScience.programsTab.credits}</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6 fade-in-up">
                    <h4 className="text-lg font-semibold text-primary mb-2">Master of Science in Information
                      Security</h4>
                    <p className="text-secondary mb-3">Advanced cybersecurity concepts and risk management.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">2 {t.computerScience.programsTab.duration}</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">36 {t.computerScience.programsTab.credits}</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6 fade-in-up">
                    <h4 className="text-lg font-semibold text-primary mb-2">Ph.D. in Computer Science</h4>
                    <p className="text-secondary mb-3">Original research contributing to the advancement of computer
                      science.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4-6 {t.computerScience.programsTab.duration}</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">{t.computerScience.programsTab.research}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Faculty Tab */}
        {activeTab === 'faculty' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal revealed">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">{t.computerScience.facultyTab.title}</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">{t.computerScience.facultyTab.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal revealed fade-in-up">
                <Image src="https://www.kiu.edu.ge/uploads_script/banner_carusel/nika_gagua.JPG"
                  alt="Nika Gagua" 
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Nika Gagua</h3>
                <p className="text-accent2 font-medium mb-2">Dean &amp; Professor</p>
                <p className="text-secondary text-sm mb-4">Head of the School of Computer Science at Kutaisi International University (KIU).
                
                
                
                He received his education at Sokhumi State University, Faculty of Mathematics and Computer Science, and then continued
                his ongoing professional development in modern areas of computer science - web development, software development, data
                science, DevOps, artificial intelligence, and RAG systems.
                
                
                
                His professional experience includes a 10-year successful career in the technology industry - from IT support specialist
                to full-stack developer and leadership positions. He worked in fintech companies as a Python and Odoo developer, as well
                as in international technology companies as a Full-stack developer. Additionally, he collaborated on various projects as
                a freelancer, which involved working with diverse programming languages and technology stacks.</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">AI/ML</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">DevOps</span>
                </div>
              </div>

              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal revealed fade-in-up">
                <Image src="https://www.kiu.edu.ge/uploads_script/banner_carusel/dundua01.png"
                  alt="Dr. Besik Dunda" 
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Dr. Besik Dunda</h3>
                <p className="text-accent2 font-medium mb-2">Associated Professor</p>
                <p className="text-secondary text-sm mb-4">He received his PhD in Computer Science from the University of Porto (Portugal). He then worked as a postdoctoral fellow
                and visiting researcher in Brazil (University of Brasilia), Austria (Johannes Kepler University Linz) and Germany
                (University of Stuttgart). His work focuses on declarative programming, computer logic and formal languages: the
                foundations of formalisms, computational mechanisms and implementation. He has published more than 30 articles on these
                topics, together with colleagues from universities in Austria, Brazil, Germany, Spain, Japan, Portugal, Romania, France
                and Georgia, and has presented his results at more than 40 conferences.</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Declarative Programming</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Computer Logic</span>
                </div>
              </div>

              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal revealed fade-in-up">
                <Image src="https://www.kiu.edu.ge/uploads_script/banner_carusel/Ia_Mosashvili.jpg"
                  alt="Dr. Ia Mosashvili" 
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Dr. Ia Mosashvili</h3>
                <p className="text-accent2 font-medium mb-2">Associated Professor</p>
                <p className="text-secondary text-sm mb-4">Doctor of Engineering Sciences, Ia Mosashvili is one of the first to introduce modern digital design and embedded
                systems courses in STEM in Georgia. In 2008-2010, she studied at the Technical University of Kaiserslautern in Germany
                with the funding of the Volkswagen Foundation, after which she successfully implemented the courses she studied in
                Georgia. She organized the Digital Systems and Remote Laboratories. Since 2022, she has been leading a preparatory,
                intensive course at the Master&apos;s level at the University of Kaiserslautern-Landau in Germany: Design of Digital Circuits
                at the Register Transfer Level. After completing a training course in the United States, from 2016 to 2024, she led
                courses in Computer Engineering, Electrical Engineering, and Computer Science at San Diego State University (Georgia).</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Systems</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Architecture</span>
                </div>
              </div>

              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal revealed fade-in-up">
                <Image src="https://www.kiu.edu.ge/uploads_script/banner_carusel/dsc_5618_1.jpg"
                  alt="Dr. Eva Maria Knirsch" 
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Dr. Eva Maria Knirsch</h3>
                <p className="text-accent2 font-medium mb-2">Associate Professor of Data Science</p>
                <p className="text-secondary text-sm mb-4">M.A. graduated in Computer Science and English. A DAAD full scholarship allowed her to get her Master at the State
                University of New York. For more than 30 years she held different positions in the IT business, among those IT Project
                Manager at the Robert Koch-Institut in Berlin (www.rki.de), Senior Engineer with SRA International in Fairfax, Virginia
                (www.csra.com) and General Manager for the Forum für Informationssicherheit (https://www.forum-is.de, Berlin – Dresden).
            
            Since 2011 she has been teaching as an Adjunct Professor at the Hochschule für Technik und Wirtschaft (HTW), Berlin.
            Databases and data analysis are her focus. Her teaching is application-oriented, driving students to build up knowledge
            that is in high demand in the IT business world.</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Data Analysis</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Databases</span>
                </div>
              </div>

              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal revealed fade-in-up">
                <Image src="https://www.kiu.edu.ge/uploads/.jpg"
                  alt="Dr. Konstantinos Kokkinos" 
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Dr. Konstantinos Kokkinos</h3>
                <p className="text-accent2 font-medium mb-2">Invited Professor</p>
                <p className="text-secondary text-sm mb-4">Greek scientist Dr. Konstantinos Kokkinos, Assistant Professor at the University of Thessaly, has joined the team of
                Kutaisi International University (KIU). As an invited professor, Dr. Kokkinos will be teaching courses in the Bachelor&apos;s
                program in Computer Science, including Fundamentals of Programming and Introduction to Informatics I.
                
                Dr. Konstantinos Kokkinos was awarded a B.Sc. in Physics, from the Aristotle&apos;s University of Thessaloniki, Greece
                (1989), a M.Sc. and a PhD in Computer Science from C.S. Dept. Western Michigan University, U.S.A. (1995 and 2002
                respectively). Dr. Kokkinos is an active member of IEEE Society, and an OpenMI-Association member.
                </p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Informatics</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Physics</span>
                </div>
              </div>

              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal revealed fade-in-up">
                <Image src="https://www.kiu.edu.ge/uploads_script/banner_carusel/walter1.new.jpg"
                  alt="Dr. Walter F. Tichy" 
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Dr. Walter F. Tichy</h3>
                <p className="text-accent2 font-medium mb-2">Professor of Software Engineering</p>
                <p className="text-secondary text-sm mb-4">He earned an M.S. and a PhD in Computer Science from Carnegie-Mellon University in 1976 and 1980, resp. He was a
                Director at the Forschungszentrum Informatik, a Technology Transfer Institute in Karlsruhe.
                He is a co-founder of ParTec, a company specializing in cluster computing, and ESCde, a consulting company.
                
                He has published almost 200 peer reviewed papers and graduated 35 Ph.Ds. He has been given two impact awards, several
                teaching awards and the Intel Award for the Advancement of Parallel Computing. Dr. Tichy is a fellow of the ACM and a
                member of ACM, GI and the IEEE.
                For more information about his work and publications, go to : https://ps.ipd.kit.edu/english/index.php</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Software Engineering</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Parallelism</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Facilities Tab */}
        {activeTab === 'facilities' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal revealed">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">{t.computerScience.facilitiesTab.title}</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">{t.computerScience.facilitiesTab.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal revealed fade-in-up">
                <Image src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Computer Labs" 
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Advanced Computer Labs</h3>
                <p className="text-secondary mb-4">Six state-of-the-art computer labs equipped with the latest hardware
                  and software for programming, development, and research.</p>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>200+ high-performance workstations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Latest development tools and IDEs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>24/7 access for students</span>
                  </li>
                </ul>
              </div>

              <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal revealed fade-in-up">
                <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="AI Research Lab" 
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">AI Research Laboratory</h3>
                <p className="text-secondary mb-4">Dedicated space for artificial intelligence and machine learning
                  research with specialized hardware and software.</p>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>GPU clusters for deep learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>High-performance computing resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Collaborative research spaces</span>
                  </li>
                </ul>
              </div>

              <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal revealed fade-in-up">
                <Image src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Cybersecurity Lab" 
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Cybersecurity Laboratory</h3>
                <p className="text-secondary mb-4">Specialized facility for cybersecurity training and research with
                  isolated networks and security testing environments.</p>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Isolated testing networks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Digital forensics equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Penetration testing tools</span>
                  </li>
                </ul>
              </div>

              <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal revealed fade-in-up">
                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Innovation Hub" 
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Innovation Hub</h3>
                <p className="text-secondary mb-4">Collaborative workspace for student projects, startups, and industry
                  partnerships with modern amenities.</p>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Flexible project spaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>3D printing and prototyping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Mentorship programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal revealed">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">{t.computerScience.researchTab.title}</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">{t.computerScience.researchTab.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal revealed fade-in-up">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-6">{t.computerScience.researchTab.researchCenters}</h3>

                  <div className="space-y-6">
                    <div className="glassmorphism-dark rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-primary mb-3">Center for Artificial Intelligence
                      </h4>
                      <p className="text-secondary mb-4">Leading research in machine learning, natural language
                        processing, and computer vision with applications in healthcare, finance, and
                        autonomous systems.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Machine
                          Learning</span>
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Computer
                          Vision</span>
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">NLP</span>
                      </div>
                    </div>

                    <div className="glassmorphism-dark rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-primary mb-3">Cybersecurity Research Institute
                      </h4>
                      <p className="text-secondary mb-4">Developing next-generation security solutions for
                        protecting digital infrastructure, privacy, and data integrity.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Network
                          Security</span>
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Cryptography</span>
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Privacy</span>
                      </div>
                    </div>

                    <div className="glassmorphism-dark rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-primary mb-3">Software Systems Laboratory</h4>
                      <p className="text-secondary mb-4">Research in distributed systems, cloud computing, and
                        software architecture for scalable and reliable applications.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Distributed
                          Systems</span>
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Cloud
                          Computing</span>
                        <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="stats-counter rounded-2xl p-6 text-center scroll-reveal revealed">
                  <div className="text-3xl font-bold text-white mb-2">$2.5M</div>
                  <div className="text-white/90">{t.computerScience.researchTab.annualFunding}</div>
                </div>

                <div className="stats-counter rounded-2xl p-6 text-center scroll-reveal revealed">
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-white/90">{t.computerScience.researchTab.publishedPapers}</div>
                </div>

                <div className="stats-counter rounded-2xl p-6 text-center scroll-reveal revealed">
                  <div className="text-3xl font-bold text-white mb-2">25</div>
                  <div className="text-white/90">{t.computerScience.researchTab.activeProjects}</div>
                </div>

                <div className="stats-counter rounded-2xl p-6 text-center scroll-reveal revealed">
                  <div className="text-3xl font-bold text-white mb-2">15</div>
                  <div className="text-white/90">{t.computerScience.researchTab.industryPartners}</div>
                </div>
              </div>
            </div>

            <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal revealed fade-in-up">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6">{t.computerScience.researchTab.recentPublications}</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-primary mb-1">&quot;Deep Learning Approaches for Medical Image
                    Analysis&quot;</h4>
                  <p className="text-secondary text-sm mb-2">Dr. Michael Thompson, Dr. Sarah Williams - Nature Machine
                    Intelligence, 2024</p>
                  <p className="text-secondary text-sm">Novel CNN architectures for automated diagnosis in medical
                    imaging applications.</p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-primary mb-1">&quot;Quantum-Resistant Cryptographic Protocols&quot;</h4>
                  <p className="text-secondary text-sm mb-2">Dr. James Chen, Dr. Emily Rodriguez - IEEE Security &amp;
                    Privacy, 2024</p>
                  <p className="text-secondary text-sm">Development of post-quantum cryptographic methods for secure
                    communications.</p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-primary mb-1">&quot;Scalable Distributed Computing Frameworks&quot;</h4>
                  <p className="text-secondary text-sm mb-2">Dr. Robert Kim, Dr. Lisa Park - ACM Computing Surveys,
                    2023</p>
                  <p className="text-secondary text-sm">Comprehensive survey of modern distributed computing paradigms
                    and performance optimization.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admissions Tab */}
        {activeTab === 'admissions' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal revealed">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">{t.computerScience.admissionsTab.title}</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">{t.computerScience.admissionsTab.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Undergraduate Admissions */}
              <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal revealed fade-in-up">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">{t.computerScience.admissionsTab.undergrad}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">{t.computerScience.admissionsTab.requirements}</h4>
                    <ul className="space-y-2 text-secondary">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>High school diploma or equivalent</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Minimum GPA of 3.0</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>SAT/ACT scores</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Letters of recommendation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Personal statement</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">{t.computerScience.admissionsTab.importantDates}</h4>
                    <div className="space-y-2 text-secondary">
                      <div className="flex justify-between">
                        <span>Early Decision</span>
                        <span className="font-medium">November 15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Regular Decision</span>
                        <span className="font-medium">January 15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transfer Applications</span>
                        <span className="font-medium">March 1</span>
                      </div>
                    </div>
                  </div>

                  <div className="glassmorphism-dark rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">{t.computerScience.admissionsTab.tuitionFees}</h4>
                    <div className="text-2xl font-bold text-accent2 mb-1">$25,000</div>
                    <div className="text-sm text-secondary">{t.computerScience.admissionsTab.perYear}</div>
                  </div>
                </div>
              </div>

              {/* Graduate Admissions */}
              <div className="neumorphic-card2 rounded-2xl p-8 scroll-reveal revealed fade-in-up">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">{t.computerScience.admissionsTab.graduate}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">{t.computerScience.admissionsTab.requirements}</h4>
                    <ul className="space-y-2 text-secondary">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Bachelor&apos;s degree in relevant field</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Minimum GPA of 3.5</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>GRE scores</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Three letters of recommendation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Statement of purpose</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Research experience (preferred)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">{t.computerScience.admissionsTab.applicationDeadlines}</h4>
                    <div className="space-y-2 text-secondary">
                      <div className="flex justify-between">
                        <span>Fall Admission</span>
                        <span className="font-medium">January 15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Spring Admission</span>
                        <span className="font-medium">September 15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ph.D. Applications</span>
                        <span className="font-medium">December 1</span>
                      </div>
                    </div>
                  </div>

                  <div className="glassmorphism-dark rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">{t.computerScience.admissionsTab.tuitionFees}</h4>
                    <div className="text-2xl font-bold text-accent2 mb-1">$18,000</div>
                    <div className="text-sm text-secondary">{t.computerScience.admissionsTab.perYear}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Aid */}
            <div className="neumorphic-card2 rounded-2xl p-8 mt-8 scroll-reveal revealed fade-in-up">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6 text-center">{t.computerScience.admissionsTab.financialAid}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glassmorphism-dark rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{t.computerScience.admissionsTab.meritScholarships}</h4>
                  <p className="text-secondary text-sm">{t.computerScience.admissionsTab.meritDesc}
                  </p>
                </div>

                <div className="glassmorphism-dark rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{t.computerScience.admissionsTab.needBasedAid}</h4>
                  <p className="text-secondary text-sm">{t.computerScience.admissionsTab.needDesc}</p>
                </div>

                <div className="glassmorphism-dark rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{t.computerScience.admissionsTab.researchAssistantships}</h4>
                  <p className="text-secondary text-sm">{t.computerScience.admissionsTab.researchDesc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            {t.computerScience.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {t.computerScience.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-yellow-400 text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              {t.computerScience.cta.applyButton}
            </button>
            <button className="glassmorphism text-white hover:bg-white hover:bg-opacity-20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer">
              {t.computerScience.cta.scheduleButton}
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer">
              {t.computerScience.cta.downloadButton}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-playfair font-bold text-primary mb-4">{t.computerScience.hero.title}</h3>
              <p className="text-secondary mb-4">Kutaisi International University</p>
              <p className="text-secondary mb-4">{t.computerScience.footer.description}</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">{t.computerScience.footer.quickLinks}</h4>
              <ul className="space-y-2 text-secondary">
                <li><button className="hover:text-primary transition-colors cursor-pointer">{t.computerScience.tabs.programs}</button></li>
                <li><button className="hover:text-primary transition-colors cursor-pointer">{t.computerScience.tabs.faculty}</button></li>
                <li><button className="hover:text-primary transition-colors cursor-pointer">{t.computerScience.tabs.research}</button></li>
                <li><button className="hover:text-primary transition-colors cursor-pointer">{t.computerScience.tabs.admissions}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">{t.computerScience.footer.contact}</h4>
              <ul className="space-y-2 text-secondary">
                <li>+995 431 25 25 25</li>
                <li>cs@kiu.edu.ge</li>
                <li>Computer Science Building</li>
                <li>Kutaisi, Georgia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-secondary">
            <p>&copy; 2024 {t.computerScience.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
