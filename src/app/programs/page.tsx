'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import programsData from '../data/programs.json';
import enTranslations from '../../../i18n/en.json';
import geTranslations from '../../../i18n/ge.json';

interface School {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  studentCount: string;
  programCount: number;
  description: string;
  backgroundColor: string;
  borderColor: string;
}

interface AlumniStory {
  id: number;
  name: string;
  degree: string;
  image: string;
  quote: string;
}

// Extended school data with additional details
const extendedSchoolsData = {
  'computer-science': {
    name: 'Computer Science',
    description: 'Cutting-edge technology education with focus on software development, AI, and digital innovation.',
    programs: [
      "Bachelor's Degree in Computer Science",
      "Master's in Artificial Intelligence",
      "PhD in Data Science",
      "Certificate in Web Development",
    ],
    research: [
      "AI Ethics and Bias",
      "Quantum Computing Algorithms",
      "Cybersecurity Systems",
      "Human-Computer Interaction",
    ]
  },
  'mathematics': {
    name: 'Mathematics',
    description: 'Pure and applied mathematics with emphasis on analytical thinking and problem-solving skills.',
    programs: [
      "Bachelor's Degree in Pure Mathematics",
      "Master's in Applied Statistics",
      "PhD in Theoretical Physics",
      "Certificate in Financial Modeling",
    ],
    research: [
      "Number Theory Applications",
      "Topology and Geometry",
      "Mathematical Biology",
      "Computational Fluid Dynamics",
    ]
  },
  'management': {
    name: 'Management',
    description: 'Business leadership and strategic management education for tomorrow\'s global leaders.',
    programs: [
      "Bachelor of Business Administration (BBA)",
      "Master of Business Administration (MBA)",
      "PhD in Organizational Behavior",
      "Certificate in Project Management",
    ],
    research: [
      "Sustainable Business Practices",
      "Global Supply Chain Optimization",
      "Leadership in Digital Transformation",
      "Consumer Psychology",
    ]
  },
  'medicine': {
    name: 'Medicine',
    description: 'Comprehensive medical education combining clinical practice with cutting-edge research.',
    programs: [
      "Doctor of Medicine (MD)",
      "Master of Public Health (MPH)",
      "PhD in Biomedical Sciences",
      "Residency Programs (various specialties)",
    ],
    research: [
      "Cancer Immunotherapy",
      "Neurodegenerative Diseases",
      "Infectious Disease Epidemiology",
      "Personalized Medicine",
    ]
  },
  'law': {
    name: 'Law',
    description: 'Legal education focused on justice, ethics, and contemporary legal practice.',
    programs: [
      "Juris Doctor (JD)",
      "Master of Laws (LL.M)",
      "PhD in International Law",
      "Certificate in Corporate Law",
    ],
    research: [
      "Human Rights Law",
      "Environmental Law",
      "Cyber Law and Privacy",
      "International Arbitration",
    ]
  },
  'psychology': {
    name: 'Psychology and Social Sciences',
    description: 'Understanding human behavior and society through research and evidence-based practice.',
    programs: [
      "Bachelor's Degree in Psychology",
      "Master's in Clinical Psychology",
      "PhD in Cognitive Neuroscience",
      "Certificate in Social Work",
    ],
    research: [
      "Child Development and Education",
      "Mental Health Interventions",
      "Social Justice and Inequality",
      "Cross-cultural Psychology",
    ]
  },
  'architecture': {
    name: 'Architecture, Urban Planning, and Design',
    description: 'Creative design education shaping sustainable environments and innovative architectural solutions.',
    programs: [
      "Bachelor of Architecture (B.Arch)",
      "Master of Urban Planning (MUP)",
      "PhD in Sustainable Design",
      "Certificate in Interior Design",
    ],
    research: [
      "Green Building Technologies",
      "Smart City Planning",
      "Historic Preservation",
      "Parametric Design",
    ]
  }
};

const eventTags = {
  'computer-science': 'AI Conf Oct 15',
  'mathematics': 'Math Olympiad Nov 3',
  'management': 'Business Summit Dec 10',
  'medicine': 'Medical Symposium Jan 20',
  'law': 'Moot Court Finals Feb 14',
  'psychology': 'Psychology Week Mar 5',
  'architecture': 'Design Expo Apr 12'
};

const microStories = {
  'computer-science': '500+ Students • 15 Research Labs • 25 Industry Partners',
  'mathematics': '300+ Students • 8 Research Centers • 12 International Collaborations',
  'management': '750+ Students • 25 Corporate Partners • 95% Employment Rate',
  'medicine': '400+ Students • 5 Teaching Hospitals • 18 Research Labs',
  'law': '350+ Students • 10 Law Clinics • 85% Bar Pass Rate',
  'psychology': '450+ Students • 14 Research Projects • 3 Community Clinics',
  'architecture': '250+ Students • 8 Design Studios • 6 Sustainability Awards'
};

const newsHighlights = {
  'computer-science': { title: 'Latest News', content: 'CS Students Win National Hackathon with AI Healthcare Solution' },
  'mathematics': { title: 'Research Breakthrough', content: 'New Algorithm Advances Climate Modeling Accuracy by 40%' },
  'management': { title: 'Student Achievement', content: 'MBA Team Wins International Case Competition in London' },
  'medicine': { title: 'Research Grant', content: '$2M NIH Grant Awarded for Cancer Immunotherapy Research' },
  'law': { title: 'Competition Win', content: 'Law Students Win Regional Human Rights Moot Court' },
  'psychology': { title: 'Community Impact', content: 'Free Mental Health Clinic Serves 1000+ Community Members' },
  'architecture': { title: 'Award Recognition', content: 'Student Project Wins International Green Building Competition' }
};

const deans = {
  'computer-science': { name: 'Dr. Alex Smith', title: 'Dean of Computer Science', quote: 'We\'re shaping the future of technology' },
  'mathematics': { name: 'Dr. Maria Johnson', title: 'Dean of Mathematics', quote: 'Mathematics is the language of the universe' },
  'management': { name: 'Prof. David Wilson', title: 'Dean of Management', quote: 'Innovation drives business success' },
  'medicine': { name: 'Dr. Sarah Chen', title: 'Dean of Medicine', quote: 'Compassion meets innovation in medicine' },
  'law': { name: 'Prof. Elena Rodriguez', title: 'Dean of Law', quote: 'Justice is the foundation of society' },
  'psychology': { name: 'Dr. Lisa Thompson', title: 'Dean of Psychology and Social Sciences', quote: 'Mental health is universal health' },
  'architecture': { name: 'Prof. Carlos Martinez', title: 'Dean of Architecture, Urban Planning, and Design', quote: 'Architecture shapes human experience' }
};

// Function to convert Tailwind color classes to hex values
const getColorFromTailwind = (tailwindClass: string): string => {
  const colorMap: { [key: string]: string } = {
    'bg-purple-50': '#faf5ff',
    'bg-blue-50': '#eff6ff',
    'bg-green-50': '#f0fdf4',
    'bg-emerald-50': '#ecfdf5',
    'bg-sky-50': '#f0f9ff',
    'bg-pink-50': '#fdf2f8',
    'bg-amber-50': '#fffbeb',
    'border-purple-200': '#e9d5ff',
    'border-blue-200': '#bfdbfe',
    'border-green-200': '#bbf7d0',
    'border-emerald-200': '#a7f3d0',
    'border-sky-200': '#bae6fd',
    'border-pink-200': '#fbcfe8',
    'border-amber-200': '#fed7aa'
  };
  return colorMap[tailwindClass] || '#f8fafc';
};

const getIcon = (iconName: string) => {
  const icons = {
    monitor: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"></line>
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"></line>
      </svg>
    ),
    calculator: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    ),
    briefcase: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
    'heart-pulse': (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    scale: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-3m3 3l3-3"></path>
      </svg>
    ),
    users: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    building: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    )
  };
  return icons[iconName as keyof typeof icons] || icons.monitor;
};

export default function ProgramsPage() {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enTranslations : geTranslations;
  const [expandedSchool, setExpandedSchool] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  const schools: School[] = programsData.schools;
  const alumniStories: AlumniStory[] = programsData.alumniStories;

  const handleSchoolClick = (schoolId: string) => {
    setExpandedSchool(schoolId);
    setShowOverlay(true);
  };

  const closeExpandedCard = () => {
    setExpandedSchool(null);
    setShowOverlay(false);
  };

  const quickApply = (schoolId: string) => {
    alert(`Quick apply to ${extendedSchoolsData[schoolId as keyof typeof extendedSchoolsData]?.name} - Redirecting to application form...`);
    closeExpandedCard();
  };

  const navigateToSchool = (schoolId: string) => {
    if (schoolId === 'computer-science') {
      router.push('/schools/computer-science');
    } else {
      alert('Work in progress - This school page is coming soon!');
    }
    closeExpandedCard();
  };

  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const partnerUniversitiesData = [
    {
      id: 'MIT',
      country: 'USA',
      flag: '🇺🇸',
      type: 'research',
      students: 45,
      projects: 12,
      established: 2021,
      x: 120,
      y: 100
    },
    {
      id: 'Oxford',
      country: 'United Kingdom',
      flag: '🇬🇧',
      type: 'both',
      students: 32,
      projects: 8,
      established: 2020,
      x: 360,
      y: 50
    },
    {
      id: 'TUM',
      country: 'Germany',
      flag: '🇩🇪',
      type: 'strategic',
      students: 67,
      projects: 25,
      established: 2019,
      x: 385,
      y: 63
    },
    {
      id: 'Sorbonne',
      country: 'France',
      flag: '🇫🇷',
      type: 'exchange',
      students: 28,
      projects: 6,
      established: 2021,
      x: 367,
      y: 75
    },
    {
      id: 'UofT',
      country: 'Canada',
      flag: '🇨🇦',
      type: 'research',
      students: 23,
      projects: 9,
      established: 2022,
      x: 130,
      y: 50
    },
    {
      id: 'Melbourne',
      country: 'Australia',
      flag: '🇦🇺',
      type: 'research',
      students: 18,
      projects: 7,
      established: 2022,
      x: 700,
      y: 285
    },
    {
      id: 'Tokyo',
      country: 'Japan',
      flag: '🇯🇵',
      type: 'research',
      students: 35,
      projects: 14,
      established: 2021,
      x: 680,
      y: 170
    },
    {
      id: 'Shanghai',
      country: 'China',
      flag: '🇨🇳',
      type: 'both',
      students: 52,
      projects: 18,
      established: 2019,
      x: 685,
      y: 70
    }
  ];

  const partnerUniversities = partnerUniversitiesData.map(partner => ({
    ...partner,
    name: t.programs.globalNetwork.partners[partner.id as keyof typeof t.programs.globalNetwork.partners].name,
    field: t.programs.globalNetwork.partners[partner.id as keyof typeof t.programs.globalNetwork.partners].field,
    description: t.programs.globalNetwork.partners[partner.id as keyof typeof t.programs.globalNetwork.partners].description
  }));

  const handleMapHover = (partner: typeof partnerUniversities[0], event: React.MouseEvent) => {
    setTooltip({
      visible: true,
      content: `${partner.flag} ${partner.name}`,
      x: event.pageX + 15,
      y: event.pageY + 15
    });
  };

  const handleMapLeave = () => {
    setTooltip({ visible: false, content: '', x: 0, y: 0 });
  };

  const handlePartnerClick = (partnerId: string) => {
    setSelectedPartner(selectedPartner === partnerId ? null : partnerId);
  };

  const filteredPartners = filterType === 'all' 
    ? partnerUniversities 
    : partnerUniversities.filter(p => p.type === filterType || p.type === 'both');

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

  return (
    <div className="bg-gray-50 font-inter text-gray-800">
      {/* Tooltip */}
      {tooltip.visible && (
        <div 
          className="absolute bg-primary text-white text-xs rounded py-1 px-2 pointer-events-none z-50 shadow-lg"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.content}
        </div>
      )}

      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-blue bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
                {t.programs.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                {t.programs.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    document.getElementById('choose-path-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-accent hover:bg-yellow-400 text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  {t.programs.hero.exploreButton}
                </button>
                <button className="glassmorphism text-white hover:bg-white hover:bg-opacity-20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer">
                  {t.programs.hero.virtualTourButton}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] relative">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="100" cy="100" r="60" fill="rgba(254, 215, 60, 0.3)"></circle>
                  <circle cx="300" cy="150" r="40" fill="rgba(255, 255, 255, 0.2)"></circle>
                  <rect x="50" y="200" width="80" height="120" rx="10" fill="rgba(255, 255, 255, 0.9)"></rect>
                  <rect x="150" y="180" width="100" height="140" rx="10" fill="rgba(254, 215, 60, 0.9)"></rect>
                  <rect x="270" y="220" width="70" height="100" rx="10" fill="rgba(255, 255, 255, 0.8)"></rect>
                  
                  <circle cx="80" cy="280" r="15" fill="#15396F"></circle>
                  <rect x="70" y="295" width="20" height="40" rx="10" fill="#15396F"></rect>
                  
                  <circle cx="200" cy="290" r="15" fill="#3D5C84"></circle>
                  <rect x="190" y="305" width="20" height="35" rx="10" fill="#3D5C84"></rect>
                  
                  <circle cx="310" cy="285" r="15" fill="#15396F"></circle>
                  <rect x="300" y="300" width="20" height="38" rx="10" fill="#15396F"></rect>
                  
                  <path d="M20 50 Q 100 20 180 50 T 340 50" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="3" fill="none"></path>
                  <path d="M380 200 Q 300 170 220 200 T 60 200" stroke="rgba(254, 215, 60, 0.6)" strokeWidth="3" fill="none"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Academic Network Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8 scroll-reveal" data-scroll-delay="0">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-4">{t.programs.globalNetwork.title}</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">{t.programs.globalNetwork.subtitle}</p>
        </div>
        
        {/* Network Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 scroll-reveal" data-scroll-delay="100">
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{partnerUniversities.length}+</div>
            <div className="text-sm text-secondary">{t.programs.globalNetwork.stats.partnerUniversities}</div>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{partnerUniversities.reduce((sum, p) => sum + p.students, 0)}+</div>
            <div className="text-sm text-secondary">{t.programs.globalNetwork.stats.exchangeStudents}</div>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{partnerUniversities.reduce((sum, p) => sum + p.projects, 0)}+</div>
            <div className="text-sm text-secondary">{t.programs.globalNetwork.stats.jointProjects}</div>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-secondary">{t.programs.globalNetwork.stats.countries}</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 scroll-reveal" data-scroll-delay="150">
          <button 
            onClick={() => setFilterType('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
              filterType === 'all' 
                ? 'bg-primary text-white shadow-lg' 
                : 'glassmorphism text-primary hover:bg-primary hover:text-white'
            }`}
          >
            {t.programs.globalNetwork.filterAll}
          </button>
          <button 
            onClick={() => setFilterType('research')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
              filterType === 'research' 
                ? 'bg-accent text-primary shadow-lg' 
                : 'glassmorphism text-primary hover:bg-accent'
            }`}
          >
            {t.programs.globalNetwork.filterResearch}
          </button>
          <button 
            onClick={() => setFilterType('exchange')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
              filterType === 'exchange' 
                ? 'bg-secondary text-white shadow-lg' 
                : 'glassmorphism text-primary hover:bg-secondary hover:text-white'
            }`}
          >
            {t.programs.globalNetwork.filterExchange}
          </button>
          <button 
            onClick={() => setFilterType('strategic')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
              filterType === 'strategic' 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'glassmorphism text-primary hover:bg-green-600 hover:text-white'
            }`}
          >
            {t.programs.globalNetwork.filterStrategic}
          </button>
        </div>
        
        {/* Interactive World Map */}
        <div className="world-map rounded-2xl p-4 md:p-8 relative overflow-hidden scroll-reveal mb-8" data-scroll-delay="200" style={{ minHeight: '500px' }}>
          <svg viewBox="0 0 800 350" className="w-full h-full" style={{ minHeight: '450px' }}>
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <radialGradient id="pulseGradient">
                <stop offset="0%" style={{ stopColor: '#FED73C', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FED73C', stopOpacity: 0 }} />
              </radialGradient>
            </defs>

            {/* World Map Background Image */}
            <image 
              href="/world-map-306338_1280.webp" 
              x="0" 
              y="0" 
              width="800" 
              height="350" 
              opacity="0.15"
              preserveAspectRatio="xMidYMid slice"
            />

            {/* Grid Lines */}
            <g opacity="0.08" stroke="#15396F" strokeWidth="0.5" strokeDasharray="5,5">
              <line x1="0" y1="87.5" x2="800" y2="87.5"/>
              <line x1="0" y1="175" x2="800" y2="175"/>
              <line x1="0" y1="262.5" x2="800" y2="262.5"/>
              <line x1="200" y1="0" x2="200" y2="350"/>
              <line x1="400" y1="0" x2="400" y2="350"/>
              <line x1="600" y1="0" x2="600" y2="350"/>
            </g>

            {/* Connection Lines with Animation */}
            {filteredPartners.map((partner, index) => (
              <g key={`connection-${partner.id}`}>
                <line 
                  x1="472" 
                  y1="90" 
                  x2={partner.x} 
                  y2={partner.y}
                  stroke={selectedPartner === partner.id ? '#FED73C' : '#15396F'}
                  strokeWidth={selectedPartner === partner.id ? '2' : '1'}
                  opacity={selectedPartner === partner.id ? '0.8' : '0.3'}
                  strokeDasharray="5,5"
                  className="connection-line"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    transition: 'all 0.3s ease'
                  }}
                />
                
                {/* Animated particles along connection lines */}
                {selectedPartner === partner.id && (
                  <circle r="3" fill="#FED73C" filter="url(#glow)">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M472,90 L${partner.x},${partner.y}`}
                    />
                  </circle>
                )}
              </g>
            ))}

            {/* Partner University Markers */}
            {filteredPartners.map((partner, index) => (
              <g 
                key={partner.id}
                onClick={() => handlePartnerClick(partner.id)}
                onMouseOver={(e) => handleMapHover(partner, e as any)}
                onMouseLeave={handleMapLeave}
                className="cursor-pointer"
                style={{ transition: 'all 0.3s ease' }}
              >
                {/* Pulse effect */}
                <circle 
                  cx={partner.x} 
                  cy={partner.y} 
                  r={selectedPartner === partner.id ? "20" : "12"} 
                  fill="url(#pulseGradient)"
                  opacity={selectedPartner === partner.id ? "0.6" : "0.3"}
                  className="partner-uni-glow"
                >
                  <animate
                    attributeName="r"
                    values={selectedPartner === partner.id ? "20;30;20" : "12;18;12"}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* Main marker */}
                <circle 
                  cx={partner.x} 
                  cy={partner.y} 
                  r={selectedPartner === partner.id ? "10" : "7"}
                  fill="#FED73C"
                  stroke="#15396F"
                  strokeWidth="2"
                  filter="url(#glow)"
                  style={{ transition: 'all 0.3s ease' }}
                />
                
                {/* Partner initial/flag */}
                <text 
                  x={partner.x} 
                  y={partner.y + 3} 
                  textAnchor="middle" 
                  fill="#15396F" 
                  fontSize={selectedPartner === partner.id ? "8" : "6"}
                  fontWeight="bold"
                  style={{ pointerEvents: 'none', transition: 'all 0.3s ease' }}
                >
                  {partner.flag}
                </text>
              </g>
            ))}

            {/* KIU Central Hub (Georgia) */}
            <g>
              <circle cx="472" cy="90" r="25" fill="url(#pulseGradient)" opacity="0.4">
                <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite"/>
              </circle>
              
              <circle cx="472" cy="90" r="15" fill="#15396F" stroke="#FED73C" strokeWidth="3" filter="url(#glow)"/>
              
              <text x="472" y="95" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                KIU
              </text>
              
              <text x="472" y="115" textAnchor="middle" fill="#15396F" fontSize="9" fontWeight="600">
                Georgia 🇬🇪
              </text>
            </g>
          </svg>
        </div>

        {/* Partner Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 scroll-reveal" data-scroll-delay="300">
          {filteredPartners.map((partner, index) => (
            <div 
              key={partner.id}
              onClick={() => handlePartnerClick(partner.id)}
              className={`glassmorphism rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedPartner === partner.id 
                  ? 'ring-2 ring-accent scale-105 bg-gradient-to-br from-primary/5 to-accent/5' 
                  : 'hover:scale-102'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{partner.flag}</div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  partner.type === 'research' ? 'bg-blue-100 text-blue-700' :
                  partner.type === 'exchange' ? 'bg-green-100 text-green-700' :
                  partner.type === 'strategic' ? 'bg-purple-100 text-purple-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {t.programs.globalNetwork.typeLabels[partner.type as keyof typeof t.programs.globalNetwork.typeLabels]}
                </span>
              </div>
              
              <h4 className="font-semibold text-primary mb-1 text-sm leading-tight">{partner.name}</h4>
              <p className="text-xs text-secondary mb-3">{partner.field}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary">{t.programs.globalNetwork.detailLabels.students}</span>
                  <span className="font-semibold text-primary">{partner.students}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary">{t.programs.globalNetwork.detailLabels.projects}</span>
                  <span className="font-semibold text-primary">{partner.projects}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary">{t.programs.globalNetwork.detailLabels.since}</span>
                  <span className="font-semibold text-primary">{partner.established}</span>
                </div>
              </div>
              
              {selectedPartner === partner.id && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-secondary italic">{partner.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Schools Section */}
      <section id="choose-path-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 scroll-reveal" data-scroll-delay="0">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-4">{t.programs.choosePath.title}</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">{t.programs.choosePath.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <div 
              key={school.id}
              className="neumorphic-card card-3d rounded-2xl p-6 relative overflow-hidden scroll-reveal cursor-pointer"
              data-school={school.id}
              onClick={() => handleSchoolClick(school.id)}
              style={{
                '--card-bg-from': getColorFromTailwind(school.backgroundColor),
                '--card-bg-to': getColorFromTailwind(school.borderColor)
              } as React.CSSProperties}
            >
              <div className="event-tag">{eventTags[school.id as keyof typeof eventTags]}</div>
              
              <div className="micro-story glassmorphism rounded-lg px-4 py-2">
                <div className="text-xs font-semibold text-primary">{microStories[school.id as keyof typeof microStories]}</div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="school-icon w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4">
                  {getIcon(school.icon)}
                </div>
                <h3 className="text-lg font-playfair font-semibold text-primary mb-1">
                  {school.name}
                </h3>
                <p className="text-xs italic text-black font-medium mb-3">"{school.tagline}"</p>
                
                <div className="flex justify-center gap-4 mb-4 text-xs">
                  <span className="glassmorphism text-primary px-3 py-1 rounded-full font-medium">{school.studentCount} {t.programs.students}</span>
                  <span className="glassmorphism-dark text-primary px-3 py-1 rounded-full font-medium">{school.programCount} {t.programs.programs}</span>
                </div>
                
                <p className="text-secondary text-sm mb-4">
                  {school.description}
                </p>
                
                <div className="flex gap-2 justify-center">
                  <button 
                    className="apply-cta text-primary font-medium px-4 py-2 rounded-lg text-sm cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToSchool(school.id);
                    }}
                  >
                    {t.programs.explorePrograms}
                  </button>
                  <button 
                    className="bg-primary hover:bg-secondary text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 text-sm cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      quickApply(school.id);
                    }}
                  >
                    {t.programs.applyNow}
                  </button>
                </div>
              </div>
              
              <div className="face-reveal glassmorphism-dark rounded-t-2xl p-4">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt={deans[school.id as keyof typeof deans]?.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-white">{deans[school.id as keyof typeof deans]?.name}</div>
                    <div className="text-xs text-blue-600">{deans[school.id as keyof typeof deans]?.title}</div>
                    <div className="text-xs italic text-black mt-1">"{deans[school.id as keyof typeof deans]?.quote}"</div>
                  </div>
                </div>
              </div>
              
              <div className="news-highlight">
                <div className="text-xs font-semibold text-primary mb-1">{newsHighlights[school.id as keyof typeof newsHighlights]?.title}</div>
                <div className="text-xs text-secondary">{newsHighlights[school.id as keyof typeof newsHighlights]?.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Success Stories */}
        <div className="mt-20 scroll-reveal" data-scroll-delay="0">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">{t.programs.alumniStories.title}</h2>
            <p className="text-lg text-secondary">{t.programs.alumniStories.subtitle}</p>
          </div>
          
          <div className="alumni-slider rounded-2xl p-8 overflow-hidden">
            <div className="flex gap-6">
              {[...alumniStories, ...alumniStories].map((alumni, index) => (
                <div key={`${alumni.id}-${index}`} className="flex-shrink-0 w-80 glassmorphism rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={alumni.image} alt={alumni.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-primary">{alumni.name}</div>
                      <div className="text-sm text-secondary">{alumni.degree}</div>
                    </div>
                  </div>
                  <p className="text-sm text-secondary italic">"{alumni.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Card Modal */}
      {showOverlay && (
        <div 
          className="fixed inset-0 bg-primary bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeExpandedCard}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {expandedSchool && extendedSchoolsData[expandedSchool as keyof typeof extendedSchoolsData] && (
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
                    {extendedSchoolsData[expandedSchool as keyof typeof extendedSchoolsData].name}
                  </h2>
                  <p className="text-lg text-secondary">
                    {extendedSchoolsData[expandedSchool as keyof typeof extendedSchoolsData].description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="glassmorphism rounded-xl p-6">
                    <h3 className="font-semibold text-primary mb-4">Academic Programs</h3>
                    <ul className="space-y-2 text-secondary">
                      {extendedSchoolsData[expandedSchool as keyof typeof extendedSchoolsData].programs.map((program, index) => (
                        <li key={index}>• {program}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="glassmorphism rounded-xl p-6">
                    <h3 className="font-semibold text-primary mb-4">Research Areas</h3>
                    <ul className="space-y-2 text-secondary">
                      {extendedSchoolsData[expandedSchool as keyof typeof extendedSchoolsData].research.map((research, index) => (
                        <li key={index}>• {research}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={closeExpandedCard}
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors mr-4 cursor-pointer"
                  >
                    {t.programs.close}
                  </button>
                  <button 
                    onClick={() => navigateToSchool(expandedSchool)}
                    className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary transition-colors mr-4 cursor-pointer"
                  >
                    {t.programs.learnMore}
                  </button>
                  <button 
                    onClick={() => quickApply(expandedSchool)}
                    className="bg-accent text-primary px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors cursor-pointer"
                  >
                    {t.programs.applyNow}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
