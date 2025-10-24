'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ComputerScienceSchoolPage() {
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

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
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
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={() => router.push('/programs')} 
              className="hover:text-primary transition-colors"
            >
              Schools
            </button>
            <span>/</span>
            <span className="text-primary font-medium">Computer Science</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
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
                    School of Computer Science
                  </h1>
                  <p className="text-xl text-accent font-medium mt-2">"Innovating Tomorrow's Digital World"</p>
                </div>
              </div>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Leading the future of technology through cutting-edge education, groundbreaking research, and
                industry partnerships.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="glassmorphism rounded-lg p-4 text-center inline-block">
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-blue-100">Students</div>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-center inline-block">
                  <div className="text-2xl font-bold text-accent">8</div>
                  <div className="text-sm text-blue-100">Programs</div>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-center inline-block">
                  <div className="text-2xl font-bold text-accent">15</div>
                  <div className="text-sm text-blue-100">Partners</div>
                </div>
                <div className="glassmorphism rounded-lg p-4 text-center inline-block">
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-sm text-blue-100">Research Centers</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent hover:bg-yellow-400 text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Apply Now
                </button>
                <button className="glassmorphism text-white hover:bg-white hover:bg-opacity-20 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  Schedule Visit
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Computer Science Lab" className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" />
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
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'overview' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => showTab('programs')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'programs' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            Programs
          </button>
          <button 
            onClick={() => showTab('faculty')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'faculty' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            Faculty
          </button>
          <button 
            onClick={() => showTab('facilities')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'facilities' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            Facilities
          </button>
          <button 
            onClick={() => showTab('research')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'research' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            Research
          </button>
          <button 
            onClick={() => showTab('admissions')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'admissions' 
                ? 'tab-active' 
                : 'tab-inactive'
            }`}
          >
            Admissions
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* About Section */}
              <div className="lg:col-span-2">
                <div className="neumorphic-card rounded-2xl p-8 scroll-reveal">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-6">About Our School</h2>
                  <div className="prose prose-lg text-secondary">
                    <p className="mb-4">
                      The School of Computer Science at Kutaisi International University stands at the
                      forefront of technological innovation and education. Our comprehensive programs combine
                      theoretical foundations with practical applications, preparing students for successful
                      careers in the rapidly evolving tech industry.
                    </p>
                    <p className="mb-4">
                      With state-of-the-art facilities, world-class faculty, and strong industry partnerships,
                      we provide an environment where students can explore cutting-edge technologies including
                      artificial intelligence, machine learning, cybersecurity, and software engineering.
                    </p>
                    <p>
                      Our graduates are highly sought after by leading technology companies worldwide, with a
                      95% employment rate within six months of graduation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="space-y-6">
                <div className="neumorphic-card rounded-2xl p-6 scroll-reveal">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Founded</span>
                      <span className="font-semibold text-primary">2010</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Students</span>
                      <span className="font-semibold text-primary">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Faculty</span>
                      <span className="font-semibold text-primary">45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Employment Rate</span>
                      <span className="font-semibold text-accent2">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Average Salary</span>
                      <span className="font-semibold text-accent2">$65,000</span>
                    </div>
                  </div>
                </div>

                <div className="neumorphic-card rounded-2xl p-6 scroll-reveal">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">Accreditations</h3>
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
              <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">What Our Students Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glassmorphism-dark rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://media.istockphoto.com/id/1395838909/photo/portrait-of-young-caucasian-men-in-office-school-environment.jpg?s=612x612&w=0&k=20&c=Io5Yro7pVGiLEG4_VF69_8zPWpTI7wieZL8fWrVTHjs="
                      alt="Student" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-primary">Levan Beridze</h4>
                      <p className="text-sm text-secondary">Software Engineering, Class of 2021</p>
                    </div>
                  </div>
                  <p className="text-secondary italic">"The hands-on projects and industry mentorship prepared me
                    perfectly for my role at Google. The curriculum is always up-to-date with the latest
                    technologies."</p>
                </div>

                <div className="glassmorphism-dark rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://thumbs.dreamstime.com/b/stylish-young-georgian-woman-relaxing-amid-lush-greenery-basking-serene-park-surroundings-portrait-vibrant-green-enjoying-359758508.jpg"
                      alt="Student" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-primary">Nino Gelashvili</h4>
                      <p className="text-sm text-secondary">AI & Machine Learning, Class of 2020</p>
                    </div>
                  </div>
                  <p className="text-secondary italic">"The research opportunities in AI were incredible. I published
                    two papers during my studies and now work as a Machine Learning Engineer at Microsoft."</p>
                </div>

                <div className="glassmorphism-dark rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://media.istockphoto.com/id/1250436971/photo/male-student.jpg?s=612x612&w=0&k=20&c=4gKa4sRcQQ0sD4yg6GVLd3aN3CpgeHNCY607Tm8oQXA="
                      alt="Student" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-primary">Giorgi Kapanadze</h4>
                      <p className="text-sm text-secondary">Cybersecurity, Class of 2021</p>
                    </div>
                  </div>
                  <p className="text-secondary italic">"The cybersecurity program gave me real-world experience with
                    the latest security tools and techniques. I landed my dream job before graduation."</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">Our Programs</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">Choose from our comprehensive range of undergraduate
                and graduate programs designed to meet industry demands.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Undergraduate Programs */}
              <div className="scroll-reveal">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Undergraduate Programs</h3>
                <div className="space-y-4">
                  <div className="program-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-secondary mb-3">Comprehensive foundation in programming, algorithms, and
                      software development.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4 Years</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">120
                        Credits</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Software
                      Engineering</h4>
                    <p className="text-secondary mb-3">Focus on large-scale software systems design and development
                      methodologies.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4 Years</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">120
                        Credits</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Cybersecurity
                    </h4>
                    <p className="text-secondary mb-3">Specialized training in information security and digital
                      forensics.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4 Years</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">120
                        Credits</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Data Science</h4>
                    <p className="text-secondary mb-3">Statistical analysis, machine learning, and big data
                      technologies.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4 Years</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">120
                        Credits</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graduate Programs */}
              <div className="scroll-reveal">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Graduate Programs</h3>
                <div className="space-y-4">
                  <div className="program-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Master of Science in Computer Science
                    </h4>
                    <p className="text-secondary mb-3">Advanced study in algorithms, systems, and theoretical
                      computer science.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">2 Years</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">36 Credits</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Master of Science in Artificial
                      Intelligence</h4>
                    <p className="text-secondary mb-3">Cutting-edge research in machine learning and neural
                      networks.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">2 Years</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">36 Credits</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Master of Science in Information
                      Security</h4>
                    <p className="text-secondary mb-3">Advanced cybersecurity concepts and risk management.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">2 Years</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">36 Credits</span>
                    </div>
                  </div>

                  <div className="program-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Ph.D. in Computer Science</h4>
                    <p className="text-secondary mb-3">Original research contributing to the advancement of computer
                      science.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">4-6 Years</span>
                      <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Research</span>
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
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">Our Faculty</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">Learn from world-renowned experts and researchers
                who are shaping the future of technology.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal">
                <img src="https://www.kiu.edu.ge/uploads_script/banner_carusel/nika_gagua.JPG"
                  alt="Nika Gagua" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Nika Gagua</h3>
                <p className="text-accent2 font-medium mb-2">Dean & Professor</p>
                <p className="text-secondary text-sm mb-4">Head of the School of Computer Science at Kutaisi International University (KIU).
                  He received his education at Sokhumi State University, Faculty of Mathematics and Computer Science, and then continued
                  his ongoing professional development in modern areas of computer science - web development, software development, data
                  science, DevOps, artificial intelligence, and RAG systems.</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">AI/ML</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">DevOps</span>
                </div>
              </div>

              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal">
                <img src="https://www.kiu.edu.ge/uploads_script/banner_carusel/dundua01.png"
                  alt="Dr. Besik Dunda" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Dr. Besik Dunda</h3>
                <p className="text-accent2 font-medium mb-2">Associated Professor</p>
                <p className="text-secondary text-sm mb-4">He received his PhD in Computer Science from the University of Porto (Portugal). He then worked as a postdoctoral fellow
                and visiting researcher in Brazil (University of Brasilia), Austria (Johannes Kepler University Linz) and Germany
                (University of Stuttgart). His work focuses on declarative programming, computer logic and formal languages.</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Declarative Programming</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Computer Logic</span>
                </div>
              </div>

              <div className="faculty-card rounded-2xl p-6 text-center scroll-reveal">
                <img src="https://www.kiu.edu.ge/uploads_script/banner_carusel/Ia_Mosashvili.jpg"
                  alt="Dr. Ia Mosashvili" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Dr. Ia Mosashvili</h3>
                <p className="text-accent2 font-medium mb-2">Associated Professor</p>
                <p className="text-secondary text-sm mb-4">Doctor of Engineering Sciences, Ia Mosashvili is one of the first to introduce modern digital design and embedded
                systems courses in STEM in Georgia. In 2008-2010, she studied at the Technical University of Kaiserslautern in Germany
                with the funding of the Volkswagen Foundation.</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Systems</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Architecture</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Facilities Tab */}
        {activeTab === 'facilities' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">State-of-the-Art Facilities</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">Our modern facilities provide the perfect
                environment for learning, research, and innovation.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="neumorphic-card rounded-2xl p-8 scroll-reveal">
                <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Computer Labs" className="w-full h-48 object-cover rounded-xl mb-6" />
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

              <div className="neumorphic-card rounded-2xl p-8 scroll-reveal">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="AI Research Lab" className="w-full h-48 object-cover rounded-xl mb-6" />
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
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">Research Excellence</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">Our faculty and students are at the forefront of
                groundbreaking research in computer science and technology.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="neumorphic-card rounded-2xl p-8 scroll-reveal">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Research Centers</h3>

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
                        <span
                          className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Cryptography</span>
                        <span
                          className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">Privacy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="stats-counter rounded-2xl p-6 text-center scroll-reveal">
                  <div className="text-3xl font-bold text-white mb-2">$2.5M</div>
                  <div className="text-white/90">Annual Research Funding</div>
                </div>

                <div className="stats-counter rounded-2xl p-6 text-center scroll-reveal">
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-white/90">Published Papers</div>
                </div>

                <div className="stats-counter rounded-2xl p-6 text-center scroll-reveal">
                  <div className="text-3xl font-bold text-white mb-2">25</div>
                  <div className="text-white/90">Active Projects</div>
                </div>

                <div className="stats-counter rounded-2xl p-6 text-center scroll-reveal">
                  <div className="text-3xl font-bold text-white mb-2">15</div>
                  <div className="text-white/90">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admissions Tab */}
        {activeTab === 'admissions' && (
          <div className="tab-content">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">Admissions Information</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">Join our community of innovators and future
                technology leaders. Learn about our admission requirements and application process.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Undergraduate Admissions */}
              <div className="neumorphic-card rounded-2xl p-8 scroll-reveal">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Undergraduate Admissions</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Requirements</h4>
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
                    <h4 className="font-semibold text-primary mb-3">Important Dates</h4>
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
                    <h4 className="font-semibold text-primary mb-2">Tuition & Fees</h4>
                    <div className="text-2xl font-bold text-accent2 mb-1">$25,000</div>
                    <div className="text-sm text-secondary">per academic year</div>
                  </div>
                </div>
              </div>

              {/* Graduate Admissions */}
              <div className="neumorphic-card rounded-2xl p-8 scroll-reveal">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Graduate Admissions</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Requirements</h4>
                    <ul className="space-y-2 text-secondary">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Bachelor's degree in relevant field</span>
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
                    <h4 className="font-semibold text-primary mb-3">Application Deadlines</h4>
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
                    <h4 className="font-semibold text-primary mb-2">Graduate Tuition</h4>
                    <div className="text-2xl font-bold text-accent2 mb-1">$18,000</div>
                    <div className="text-sm text-secondary">per academic year</div>
                  </div>
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
            Ready to Shape the Future of Technology?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our community of innovators, researchers, and future technology leaders. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-yellow-400 text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Apply Now
            </button>
            <button className="glassmorphism text-white hover:bg-white hover:bg-opacity-20 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Schedule Campus Visit
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-playfair font-bold text-primary mb-4">School of Computer Science</h3>
              <p className="text-secondary mb-4">Kutaisi International University</p>
              <p className="text-secondary mb-4">Leading innovation in technology education and research.</p>
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
              <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-secondary">
                <li><button className="hover:text-primary transition-colors">Programs</button></li>
                <li><button className="hover:text-primary transition-colors">Faculty</button></li>
                <li><button className="hover:text-primary transition-colors">Research</button></li>
                <li><button className="hover:text-primary transition-colors">Admissions</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Contact</h4>
              <ul className="space-y-2 text-secondary">
                <li>+995 431 25 25 25</li>
                <li>cs@kiu.edu.ge</li>
                <li>Computer Science Building</li>
                <li>Kutaisi, Georgia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-secondary">
            <p>&copy; 2024 Kutaisi International University - School of Computer Science. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
