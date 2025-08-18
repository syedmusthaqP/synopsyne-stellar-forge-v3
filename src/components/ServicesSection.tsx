import React, { useState, useEffect, useRef } from 'react';
import { Code, Cloud, Smartphone, Brain, Database, Shield, Building, Users, GraduationCap, Settings, Zap } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(-1);
  const [neuralPulse, setNeuralPulse] = useState(0);
  const [activeSector, setActiveSector] = useState('Software Development');
  const [hoveredService, setHoveredService] = useState(-1);
  const [hoveredServiceTab, setHoveredServiceTab] = useState<{show: boolean, x: number, y: number}>({show: false, x: 0, y: 0});

  // Refs for section, toggle button, and service cards (for accurate connection lines)
  const sectionRef = useRef<HTMLElement | null>(null);
  const serviceCardRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const sectorBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Hover tracking for sectors
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  // Calculated pixel positions within the section for overlay connections
  const [buttonPos, setButtonPos] = useState<{ x: number; y: number } | null>(null);
  const [servicePos, setServicePos] = useState<{ x: number; y: number } | null>(null);
  const [hoveredServicePos, setHoveredServicePos] = useState<{ x: number; y: number } | null>(null);
  const [sectorPos, setSectorPos] = useState<{ x: number; y: number } | null>(null);
  
  const sectors = [
    { id: 'Software Development', name: 'Software Development', icon: Code, color: '#00d4ff' },
    { id: 'BPO', name: 'BPO Services', icon: Building, color: '#9333ea' },
    { id: 'Skill Development', name: 'Skill Development', icon: GraduationCap, color: '#ec4899' },
    { id: 'Technology Consulting', name: 'Technology Consulting', icon: Settings, color: '#06b6d4' }
  ];

  const servicesBySector = {
    'Software Development': [
      {
        icon: Code,
        title: 'Custom Software Development',
        description: 'Bespoke applications tailored to your unique business requirements and workflows.',
        features: ['Full-stack development', 'Legacy system modernization', 'API integration', 'Code auditing'],
        position: { x: 15, y: 20 },
        connections: [1, 5]
      },
      {
        icon: Cloud,
        title: 'Cloud Architecture & DevOps',
        description: 'Scalable cloud solutions with automated deployment and infrastructure management.',
        features: ['AWS/Azure/GCP setup', 'CI/CD pipelines', 'Container orchestration', 'Monitoring & logging'],
        position: { x: 50, y: 15 },
        connections: [0, 2]
      },
      {
        icon: Brain,
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions that learn and adapt to drive business insights and automation.',
        features: ['Predictive analytics', 'Natural language processing', 'Computer vision', 'Recommendation systems'],
        position: { x: 85, y: 20 },
        connections: [1, 3]
      },
      {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        features: ['React Native', 'Flutter development', 'Progressive Web Apps', 'App store optimization'],
        position: { x: 85, y: 80 },
        connections: [2, 4]
      },
      {
        icon: Database,
        title: 'Data Engineering',
        description: 'Robust data pipelines and analytics platforms for data-driven decision making.',
        features: ['ETL pipelines', 'Data warehousing', 'Real-time analytics', 'Data visualization'],
        position: { x: 50, y: 85 },
        connections: [3, 5]
      },
      {
        icon: Shield,
        title: 'Cybersecurity Solutions',
        description: 'Comprehensive security measures to protect your digital assets and infrastructure.',
        features: ['Security audits', 'Penetration testing', 'Compliance consulting', 'Incident response'],
        position: { x: 15, y: 80 },
        connections: [4, 0]
      }
    ],
    'BPO': [
      {
        icon: Users,
        title: 'Customer Support Services',
        description: '24/7 customer support with multi-channel communication capabilities.',
        features: ['Live chat support', 'Email management', 'Phone support', 'Ticket resolution'],
        position: { x: 25, y: 30 },
        connections: [1, 2]
      },
      {
        icon: Database,
        title: 'Data Processing & Analysis',
        description: 'Efficient data entry, processing, and analytical services for business insights.',
        features: ['Data entry', 'Document processing', 'Quality assurance', 'Analytics reporting'],
        position: { x: 75, y: 30 },
        connections: [0, 2]
      },
      {
        icon: Building,
        title: 'Back Office Operations',
        description: 'Streamlined administrative and operational support services.',
        features: ['Document management', 'Invoice processing', 'HR administration', 'Compliance tracking'],
        position: { x: 50, y: 70 },
        connections: [0, 1]
      }
    ],
    'Skill Development': [
      {
        icon: GraduationCap,
        title: 'Technical Training Programs',
        description: 'Comprehensive training in modern technologies and development practices.',
        features: ['Programming bootcamps', 'Cloud certifications', 'DevOps training', 'AI/ML courses'],
        position: { x: 20, y: 25 },
        connections: [1, 3]
      },
      {
        icon: Brain,
        title: 'Professional Development',
        description: 'Soft skills and leadership development for career advancement.',
        features: ['Communication skills', 'Project management', 'Leadership training', 'Team collaboration'],
        position: { x: 80, y: 25 },
        connections: [0, 2]
      },
      {
        icon: Code,
        title: 'Certification Programs',
        description: 'Industry-recognized certifications to validate and advance your expertise.',
        features: ['Technology certifications', 'Professional credentials', 'Skills validation', 'Career advancement'],
        position: { x: 20, y: 75 },
        connections: [0, 3]
      },
      {
        icon: Users,
        title: 'Corporate Training Solutions',
        description: 'Customized training programs for organizations and teams.',
        features: ['Team workshops', 'Leadership development', 'Skills assessment', 'Performance improvement'],
        position: { x: 80, y: 75 },
        connections: [1, 2]
      }
    ],
    'Technology Consulting': [
      {
        icon: Brain,
        title: 'Digital Transformation',
        description: 'Strategic guidance for modernizing business processes and technology infrastructure.',
        features: ['Process optimization', 'Technology assessment', 'Change management', 'Digital strategy'],
        position: { x: 30, y: 25 },
        connections: [1, 2]
      },
      {
        icon: Shield,
        title: 'IT Security Consulting',
        description: 'Comprehensive security strategy and implementation for enterprise environments.',
        features: ['Security assessments', 'Compliance frameworks', 'Risk management', 'Incident response'],
        position: { x: 70, y: 25 },
        connections: [0, 2]
      },
      {
        icon: Settings,
        title: 'Technology Strategy & Planning',
        description: 'Long-term technology planning aligned with business objectives and growth.',
        features: ['Strategic roadmaps', 'Technology evaluation', 'Investment planning', 'Innovation strategy'],
        position: { x: 50, y: 75 },
        connections: [0, 1]
      }
    ]
  };

  const services = servicesBySector[activeSector as keyof typeof servicesBySector] || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralPulse(prev => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    const computePositions = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        
        if (hoveredSector && sectorBtnRefs.current[hoveredSector]) {
          const sectorRect = sectorBtnRefs.current[hoveredSector]!.getBoundingClientRect();
          setSectorPos({
            x: sectorRect.left + sectorRect.width / 2 - sectionRect.left,
            y: sectorRect.top + sectorRect.height / 2 - sectionRect.top
          });
        }
        
        if (hoveredService >= 0 && serviceCardRefs.current[hoveredService]) {
          const serviceRect = serviceCardRefs.current[hoveredService]!.getBoundingClientRect();
          setHoveredServicePos({
            x: serviceRect.left + serviceRect.width / 2 - sectionRect.left,
            y: serviceRect.top + serviceRect.height / 2 - sectionRect.top
          });
        }
        
        if (activeService >= 0 && serviceCardRefs.current[activeService]) {
          const serviceRect = serviceCardRefs.current[activeService]!.getBoundingClientRect();
          setServicePos({
            x: serviceRect.left + serviceRect.width / 2 - sectionRect.left,
            y: serviceRect.top + serviceRect.height / 2 - sectionRect.top
          });
        }
      } else {
        setButtonPos(null);
        setServicePos(null);
        setHoveredServicePos(null);
        setSectorPos(null);
      }
    };
    computePositions();
    window.addEventListener('resize', computePositions);
    window.addEventListener('scroll', computePositions);
    return () => {
      window.removeEventListener('resize', computePositions);
      window.removeEventListener('scroll', computePositions);
    };
  }, [activeService, hoveredService, activeSector, services.length, hoveredSector]);

  const handleServiceClick = (serviceIndex: number) => {
    setActiveService(serviceIndex);
  };

  const handleNeuralSync = (serviceIndex: number) => {
    setActiveService(serviceIndex);
    
    // Show guidance to click the neural development process button
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-6 bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-6 py-3 rounded-lg backdrop-blur-sm z-50 animate-fade-in';
    notification.innerHTML = `
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <span class="text-sm">Click "Show Neural Development Process" to explore phases</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 4000);
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Neural <span className="text-neon">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced service delivery through intelligent automation and cognitive architectures
          </p>
        </div>

        {/* Sector Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <button
                key={sector.id}
                ref={(el) => { sectorBtnRefs.current[sector.id] = el; }}
                onClick={() => setActiveSector(sector.id)}
                onMouseEnter={() => setHoveredSector(sector.id)}
                onMouseLeave={() => setHoveredSector(null)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSector === sector.id 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                    : 'glassmorphism text-gray-300 hover:text-white'
                }`}
                style={{
                  boxShadow: activeSector === sector.id ? `0 0 20px ${sector.color}40` : undefined
                }}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{sector.name}</span>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSector === sector.id ? 'bg-white' : 'bg-gray-500 group-hover:bg-gray-300'
                }`}></div>
              </button>
            );
          })}
        </div>

        {/* Services Grid with Neural Network Visualization */}
        <div className="relative">
          {/* Neural connections SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(0, 212, 255)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.6" />
              </linearGradient>
              <filter id="neuralGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Connection lines between services */}
            {services.map((service, index) => 
              service.connections.map(connIndex => {
                if (connIndex >= services.length) return null;
                const targetService = services[connIndex];
                const isActive = activeService === index || activeService === connIndex;
                const isHovered = hoveredService === index || hoveredService === connIndex;
                
                return (
                  <line
                    key={`${index}-${connIndex}`}
                    x1={`${service.position.x}%`}
                    y1={`${service.position.y}%`}
                    x2={`${targetService.position.x}%`}
                    y2={`${targetService.position.y}%`}
                    stroke={isActive || isHovered ? "url(#neuralGradient)" : "rgba(0, 212, 255, 0.2)"}
                    strokeWidth={isActive || isHovered ? "2" : "1"}
                    filter={isActive || isHovered ? "url(#neuralGlow)" : "none"}
                    className="transition-all duration-500"
                  />
                );
              })
            )}

            {/* Neural pulse indicators */}
            {services.map((service, index) => (
              <circle
                key={`pulse-${index}`}
                cx={`${service.position.x}%`}
                cy={`${service.position.y}%`}
                r="3"
                fill="rgb(0, 212, 255)"
                className={`transition-all duration-300 ${
                  neuralPulse === index ? 'animate-ping' : 'opacity-40'
                }`}
              />
            ))}
          </svg>

          {/* Service Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ zIndex: 2 }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { serviceCardRefs.current[index] = el; }}
                  className={`group relative glassmorphism p-6 rounded-xl border border-cyan-500/20 transition-all duration-500 cursor-pointer ${
                    activeService === index 
                      ? 'scale-105 shadow-2xl border-cyan-500/50' 
                      : 'hover:scale-102 hover:border-cyan-500/30'
                  }`}
                  style={{
                    position: 'absolute',
                    left: `${service.position.x}%`,
                    top: `${service.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                    width: '300px',
                    minHeight: '250px'
                  }}
                  onClick={() => handleServiceClick(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(-1)}
                >
                  {/* Neural energy indicator */}
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                    activeService === index ? 'bg-cyan-400 animate-pulse' : 'bg-gray-500'
                  }`}></div>

                  {/* Service icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeService === index ? 'scale-110' : 'group-hover:scale-105'
                  }`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Service content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Neural Sync Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full">
                      <span className="text-xs text-cyan-300 font-medium">Neural Sync</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Neural link button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNeuralSync(index);
                    }}
                    className="w-full mt-auto py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm font-medium hover:from-cyan-500/30 hover:to-purple-600/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Brain className="w-4 h-4" />
                    Neural Link
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;