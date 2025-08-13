import React, { useState, useEffect, useRef } from 'react';
import { Code, Cloud, Smartphone, Brain, Database, Shield, Building, Users, GraduationCap, Settings, Zap } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(-1);
  const [neuralPulse, setNeuralPulse] = useState(0);
  const [activeSector, setActiveSector] = useState('Software Development');
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});
  const [selectedPhase, setSelectedPhase] = useState<any>(null);
  const [hoveredService, setHoveredService] = useState(-1);
  const [showPhaseScreen, setShowPhaseScreen] = useState(false);
  const [clickedService, setClickedService] = useState<any>(null);
  const [hoveredServiceTab, setHoveredServiceTab] = useState<{show: boolean, x: number, y: number}>({show: false, x: 0, y: 0});

  // Refs for section, toggle button, and service cards (for accurate connection lines)
  const sectionRef = useRef<HTMLElement | null>(null);
  const phaseToggleBtnRef = useRef<HTMLButtonElement | null>(null);
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

  const developmentPhases = {
    'Software Development': [
      {
        id: 1,
        title: "Requirements Analysis",
        phase: "Phase 01",
        description: "Deep dive into your business needs, user stories, and technical requirements through neural analysis.",
        detailedContent: "Our neural analysis engine processes your requirements through multiple cognitive layers: stakeholder interviews, user journey mapping, technical feasibility assessment, and risk analysis. We use AI-powered requirement gathering tools to ensure nothing is missed.",
        deliverables: ["Requirements Document", "User Stories", "Technical Specifications", "Risk Assessment"],
        duration: "2-3 weeks",
        icon: Brain,
        status: "completed",
        energy: 100,
      },
      {
        id: 2,
        title: "System Architecture",
        phase: "Phase 02", 
        description: "Design scalable, maintainable architecture using modern patterns and neural network principles.",
        detailedContent: "We architect your system using cutting-edge patterns like microservices, event-driven architecture, and neural network-inspired data flows. Our architects ensure scalability, security, and maintainability from day one.",
        deliverables: ["System Architecture Diagram", "API Design", "Database Schema", "Security Framework"],
        duration: "1-2 weeks",
        icon: Settings,
        status: "completed",
        energy: 90,
      },
      {
        id: 3,
        title: "Development & Testing",
        phase: "Phase 03",
        description: "Agile development with continuous integration, testing, and neural feedback loops.",
        detailedContent: "Our development process combines agile methodologies with AI-assisted coding, automated testing, and continuous integration. Neural feedback loops ensure code quality and performance optimization throughout development.",
        deliverables: ["Working Software", "Test Suite", "CI/CD Pipeline", "Documentation"],
        duration: "4-8 weeks",
        icon: Code,
        status: "in-progress",
        energy: 75,
      },
      {
        id: 4,
        title: "Deployment & Optimization",
        phase: "Phase 04",
        description: "Seamless deployment with performance optimization and neural monitoring systems.",
        detailedContent: "We deploy your application using blue-green deployment strategies, implement neural monitoring systems for real-time performance tracking, and set up automated scaling based on intelligent predictions.",
        deliverables: ["Production Deployment", "Monitoring Dashboard", "Performance Reports", "Scaling Policies"],
        duration: "1-2 weeks",
        icon: Cloud,
        status: "pending",
        energy: 60,
      }
    ],
    'BPO': [
      {
        id: 1,
        title: "Process Assessment",
        phase: "Phase 01",
        description: "Comprehensive analysis of existing business processes and identification of optimization opportunities.",
        detailedContent: "Our business analysts conduct deep-dive assessments of your current processes, identifying bottlenecks, inefficiencies, and automation opportunities using neural process mining techniques.",
        deliverables: ["Process Map", "Gap Analysis", "Optimization Report", "ROI Projections"],
        duration: "2-3 weeks",
        icon: Brain,
        status: "completed",
        energy: 100,
      },
      {
        id: 2,
        title: "Service Design",
        phase: "Phase 02",
        description: "Custom service design aligned with your business objectives and quality standards.",
        detailedContent: "We design custom BPO services tailored to your specific industry needs, incorporating best practices, quality frameworks, and neural-assisted process optimization for maximum efficiency.",
        deliverables: ["Service Design Blueprint", "Quality Standards", "SLA Framework", "Training Materials"],
        duration: "1-2 weeks",
        icon: Users,
        status: "completed",
        energy: 85,
      },
      {
        id: 3,
        title: "Team Integration",
        phase: "Phase 03",
        description: "Seamless integration of our expert teams with your existing workflows and systems.",
        detailedContent: "Our experts integrate seamlessly with your existing teams and systems, providing comprehensive training, establishing communication protocols, and implementing neural feedback mechanisms.",
        deliverables: ["Team Onboarding", "Integration Plan", "Communication Protocols", "Performance Metrics"],
        duration: "2-4 weeks",
        icon: Building,
        status: "in-progress",
        energy: 70,
      },
      {
        id: 4,
        title: "Quality Assurance",
        phase: "Phase 04",
        description: "Continuous monitoring and improvement with performance metrics and neural feedback.",
        detailedContent: "We implement comprehensive quality assurance frameworks with real-time monitoring, neural analytics for performance prediction, and continuous improvement processes.",
        deliverables: ["QA Framework", "Performance Dashboard", "Improvement Reports", "Compliance Documentation"],
        duration: "Ongoing",
        icon: Shield,
        status: "pending",
        energy: 55,
      }
    ],
    'Skill Development': [
      {
        id: 1,
        title: "Skills Assessment",
        phase: "Phase 01",
        description: "Comprehensive evaluation of current skill levels and identification of learning pathways.",
        detailedContent: "Our AI-powered assessment platform evaluates technical and soft skills, identifies learning gaps, and creates personalized development roadmaps using neural learning analytics.",
        deliverables: ["Skills Assessment Report", "Learning Gap Analysis", "Personalized Roadmap", "Baseline Metrics"],
        duration: "1 week",
        icon: Brain,
        status: "completed",
        energy: 100,
      },
      {
        id: 2,
        title: "Learning Path Design",
        phase: "Phase 02",
        description: "Personalized curriculum design based on individual goals and industry requirements.",
        detailedContent: "We create adaptive learning paths using neural network algorithms that adjust based on learning pace, style, and career objectives. Each path includes hands-on projects and real-world scenarios.",
        deliverables: ["Custom Curriculum", "Learning Materials", "Project Assignments", "Progress Tracking System"],
        duration: "1-2 weeks",
        icon: GraduationCap,
        status: "completed",
        energy: 90,
      },
      {
        id: 3,
        title: "Interactive Training",
        phase: "Phase 03",
        description: "Hands-on learning with real-world projects and neural-enhanced learning techniques.",
        detailedContent: "Our interactive training combines virtual labs, mentorship, peer collaboration, and AI-assisted learning to maximize knowledge retention and practical skill development.",
        deliverables: ["Completed Projects", "Skill Certifications", "Portfolio Development", "Peer Reviews"],
        duration: "4-12 weeks",
        icon: Users,
        status: "in-progress",
        energy: 80,
      },
      {
        id: 4,
        title: "Certification & Career Support",
        phase: "Phase 04",
        description: "Industry certifications and ongoing career guidance with neural network matching.",
        detailedContent: "We provide industry-recognized certifications, career counseling, job placement assistance, and ongoing professional development through our neural career matching platform.",
        deliverables: ["Industry Certifications", "Career Plan", "Job Placement Support", "Alumni Network Access"],
        duration: "Ongoing",
        icon: Zap,
        status: "pending",
        energy: 65,
      }
    ],
    'Technology Consulting': [
      {
        id: 1,
        title: "Technology Audit",
        phase: "Phase 01",
        description: "Comprehensive assessment of current technology stack and infrastructure capabilities.",
        detailedContent: "Our technology audit uses advanced scanning tools and neural analysis to evaluate your current tech stack, identify vulnerabilities, assess scalability, and benchmark against industry standards.",
        deliverables: ["Technology Assessment Report", "Infrastructure Analysis", "Security Audit", "Modernization Roadmap"],
        duration: "2-3 weeks",
        icon: Brain,
        status: "completed",
        energy: 100,
      },
      {
        id: 2,
        title: "Strategic Planning",
        phase: "Phase 02",
        description: "Development of technology roadmap aligned with business objectives and growth plans.",
        detailedContent: "We create comprehensive technology strategies that align with your business goals, incorporating emerging technologies, neural optimization principles, and sustainable growth frameworks.",
        deliverables: ["Technology Roadmap", "Strategic Plan", "Budget Projections", "Implementation Timeline"],
        duration: "2-4 weeks",
        icon: Settings,
        status: "completed",
        energy: 95,
      },
      {
        id: 3,
        title: "Implementation Guidance",
        phase: "Phase 03",
        description: "Expert guidance during technology implementation with neural optimization strategies.",
        detailedContent: "Our consultants provide hands-on guidance during implementation, using neural optimization to minimize risks, ensure smooth transitions, and maximize adoption rates.",
        deliverables: ["Implementation Plan", "Change Management", "Training Programs", "Success Metrics"],
        duration: "4-8 weeks",
        icon: Code,
        status: "in-progress",
        energy: 85,
      },
      {
        id: 4,
        title: "Continuous Optimization",
        phase: "Phase 04",
        description: "Ongoing monitoring and optimization with AI-driven insights and recommendations.",
        detailedContent: "We provide continuous optimization through AI-driven monitoring, predictive analytics, and neural feedback systems that identify improvement opportunities and automate optimizations.",
        deliverables: ["Optimization Reports", "Performance Dashboards", "Predictive Analytics", "Automated Systems"],
        duration: "Ongoing",
        icon: Zap,
        status: "pending",
        energy: 70,
      }
    ]
  };

  // Define meaningful connections between services and phases
  // Each service connects to ALL phases in logical sequence for comprehensive development
  const serviceToPhaseMapping = {
    'Software Development': {
      0: [1, 2, 3, 4], // Custom Software Development → Full cycle
      1: [1, 2, 3, 4], // Cloud Architecture → Full cycle
      2: [1, 2, 3, 4], // AI & ML → Full cycle
      3: [1, 2, 3, 4], // Mobile Development → Full cycle
      4: [1, 2, 3, 4], // Data Engineering → Full cycle
      5: [1, 2, 3, 4], // Cybersecurity → Full cycle
    },
    'BPO': {
      0: [1, 2, 3, 4], // Customer Support → Full process cycle
      1: [1, 2, 3, 4], // Data Processing → Full process cycle
      2: [1, 2, 3, 4], // Back Office → Full process cycle
    },
    'Skill Development': {
      0: [1, 2, 3, 4], // Technical Training → Complete learning journey
      1: [1, 2, 3, 4], // Professional Development → Complete learning journey
      2: [1, 2, 3, 4], // Certification Programs → Complete learning journey
      3: [1, 2, 3, 4], // Corporate Training → Complete learning journey
    },
    'Technology Consulting': {
      0: [1, 2, 3, 4], // Digital Transformation → Complete transformation
      1: [1, 2, 3, 4], // IT Security → Complete security implementation
      2: [1, 2, 3, 4], // Technology Strategy → Complete strategic implementation
    }
  };

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
        description: 'Industry-recognized certifications in various technology domains.',
        features: ['AWS certifications', 'Microsoft Azure', 'Google Cloud', 'Agile methodologies'],
        position: { x: 80, y: 75 },
        connections: [1, 3]
      },
      {
        icon: Users,
        title: 'Corporate Training',
        description: 'Customized training solutions for enterprise teams and organizations.',
        features: ['Team workshops', 'Skills assessment', 'Learning paths', 'Progress tracking'],
        position: { x: 20, y: 75 },
        connections: [0, 2]
      }
    ],
    'Technology Consulting': [
      {
        icon: Settings,
        title: 'Digital Transformation',
        description: 'Strategic guidance for modernizing business processes and technology stack.',
        features: ['Technology roadmaps', 'Process optimization', 'Change management', 'ROI analysis'],
        position: { x: 30, y: 20 },
        connections: [1, 2]
      },
      {
        icon: Shield,
        title: 'IT Security Consulting',
        description: 'Comprehensive security assessments and strategic security planning.',
        features: ['Security audits', 'Risk assessment', 'Compliance consulting', 'Security training'],
        position: { x: 70, y: 20 },
        connections: [0, 2]
      },
      {
        icon: Brain,
        title: 'Technology Strategy',
        description: 'Long-term technology planning and architectural decision support.',
        features: ['Architecture reviews', 'Technology selection', 'Scalability planning', 'Innovation consulting'],
        position: { x: 50, y: 80 },
        connections: [0, 1]
      }
    ]
  };

  const services = servicesBySector[activeSector] || [];

  useEffect(() => {
    const computePositions = () => {
      const sectionEl = sectionRef.current;
      const btnEl = phaseToggleBtnRef.current;
      const svcEl = serviceCardRefs.current[activeService] || null;
      const hoveredEl = hoveredService >= 0 ? serviceCardRefs.current[hoveredService] : null;
      const sectorEl = hoveredSector ? sectorBtnRefs.current[hoveredSector] : null;

      if (sectionEl && btnEl) {
        const sectionRect = sectionEl.getBoundingClientRect();
        const btnRect = btnEl.getBoundingClientRect();
        setButtonPos({
          x: btnRect.left + btnRect.width / 2 - sectionRect.left,
          y: btnRect.top + btnRect.height / 2 - sectionRect.top,
        });

        if (svcEl) {
          const svcRect = svcEl.getBoundingClientRect();
          setServicePos({
            x: svcRect.left + svcRect.width / 2 - sectionRect.left,
            y: svcRect.top + svcRect.height / 2 - sectionRect.top,
          });
        } else {
          setServicePos(null);
        }

        if (hoveredEl) {
          const hRect = hoveredEl.getBoundingClientRect();
          setHoveredServicePos({
            x: hRect.left + hRect.width / 2 - sectionRect.left,
            y: hRect.top + hRect.height / 2 - sectionRect.top,
          });
        } else {
          setHoveredServicePos(null);
        }

        if (sectorEl) {
          const secRect = sectorEl.getBoundingClientRect();
          setSectorPos({
            x: secRect.left + secRect.width / 2 - sectionRect.left,
            y: secRect.top + secRect.height / 2 - sectionRect.top,
          });
        } else {
          setSectorPos(null);
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
  }, [activeService, hoveredService, expandedPhases, activeSector, services.length, hoveredSector]);

  const togglePhases = (sectorId: string) => {
    setExpandedPhases(prev => ({
      ...prev,
      [sectorId]: !prev[sectorId]
    }));
  };

  const handlePhaseClick = (phase: any) => {
    setSelectedPhase(phase);
  };

  const closePhaseModal = () => {
    setSelectedPhase(null);
  };

  const closePhaseScreen = () => {
    setShowPhaseScreen(false);
    setClickedService(null);
    setActiveService(-1);
  };

  const handleServiceClick = (serviceIndex: number) => {
    const service = services[serviceIndex];
    setClickedService(service);
    setShowPhaseScreen(true);
    setActiveService(serviceIndex);
  };

  const handleNeuralSync = (serviceIndex: number) => {
    setActiveService(serviceIndex);
    
    // Show guidance to click the phases button
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-6 bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-6 py-3 rounded-lg backdrop-blur-sm z-50 animate-fade-in';
    notification.innerHTML = `
      <div class="flex items-center">
        <div class="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-ping"></div>
        Neural Sync ready. Click "Show Neural Development Phases" to view mappings.
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
    
    setTimeout(() => {
      const btn = phaseToggleBtnRef.current;
      if (btn) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        btn.classList.add('ring-2','ring-purple-400');
        setTimeout(() => btn.classList.remove('ring-2','ring-purple-400'), 1200);
      }
    }, 300);
  };

  React.useEffect(() => {
    const pulseInterval = setInterval(() => {
      setNeuralPulse(prev => (prev + 1) % services.length);
    }, 1500);

    return () => clearInterval(pulseInterval);
  }, [services.length]);

  // Get connected phases for a service
  const getConnectedPhases = (serviceIndex: number) => {
    return serviceToPhaseMapping[activeSector]?.[serviceIndex] || [];
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-neural-pulse"></div>
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="neuralPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="rgb(0, 212, 255)" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
              </circle>
              <line x1="50" y1="50" x2="100" y2="0" stroke="rgb(0, 212, 255)" strokeWidth="1" opacity="0.2" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="rgb(147, 51, 234)" strokeWidth="1" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralPattern)" />
        </svg>
      </div>
      {/* Hover: sector chip -> toggle button */}
      {hoveredSector && buttonPos && sectorPos && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
          <defs>
            <linearGradient id="sectorLineGradientSection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 212, 255, 0.9)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.9)" />
            </linearGradient>
          </defs>
          <path
            d={`M ${sectorPos.x} ${sectorPos.y} Q ${sectorPos.x} ${(sectorPos.y + buttonPos.y) / 2} ${buttonPos.x} ${buttonPos.y}`}
            stroke="url(#sectorLineGradientSection)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 5"
            style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.6))' }}
          />
          <circle cx={buttonPos.x} cy={buttonPos.y} r="5" fill="rgba(168, 85, 247, 0.9)" />
        </svg>
      )}

      {/* Hover-only overlay for service->toggle connection (dotted) */}
      {hoveredService >= 0 && buttonPos && hoveredServicePos && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
          <path
            d={`M ${hoveredServicePos.x} ${hoveredServicePos.y} Q ${hoveredServicePos.x} ${(hoveredServicePos.y + buttonPos.y) / 2} ${buttonPos.x} ${buttonPos.y}`}
            stroke="rgba(0, 212, 255, 0.8)"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="6 5"
            style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.4))' }}
          />
        </svg>
      )}

      {/* Section-wide overlay for service->toggle connection */}
      {activeSector === 'Software Development' && activeService >= 0 && buttonPos && servicePos && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
          <defs>
            <linearGradient id="codeLineGradientSection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 212, 255, 1)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 1)" />
            </linearGradient>
          </defs>
          <path
            d={`M ${servicePos.x} ${servicePos.y} Q ${servicePos.x} ${(servicePos.y + buttonPos.y) / 2} ${buttonPos.x} ${buttonPos.y}`}
            stroke="url(#codeLineGradientSection)"
            strokeWidth="3.5"
            fill="none"
            strokeDasharray="10 6"
            style={{ filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.6))' }}
          />
          <circle cx={buttonPos.x} cy={buttonPos.y} r="6" fill="rgba(168, 85, 247, 0.9)" />
        </svg>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-neon text-sm mb-8 animate-float">
            <Brain className="w-4 h-4 mr-2" />
            <span>Neural Service Architecture</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our <span className="text-neon animate-text-glow">Services</span> Network
          </h2>
          
          {/* Sector Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                ref={(el) => (sectorBtnRefs.current[sector.id] = el)}
                onMouseEnter={() => setHoveredSector(sector.id)}
                onMouseLeave={() => setHoveredSector(null)}
                onClick={() => { setActiveSector(sector.id); setActiveService(-1); setSelectedPhase(null); }}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSector === sector.id
                    ? 'bg-neon/20 border-2 border-neon text-neon shadow-lg shadow-neon/30'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <sector.icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{sector.name}</span>
              </button>
            ))}
          </div>

          {/* Neural Development Phases Button */}
          <div className="flex justify-center mb-12">
            <button
              ref={phaseToggleBtnRef}
              onClick={() => togglePhases(activeSector)}
              className={`flex items-center px-8 py-4 rounded-full transition-all duration-300 ${
                expandedPhases[activeSector]
                  ? 'bg-purple-500/20 border-2 border-purple-400 text-purple-300 shadow-lg shadow-purple-400/30'
                  : 'bg-white/10 border border-white/20 text-white hover:bg-purple-500/10 hover:border-purple-400/50'
              } ${activeService >= 0 ? 'ring-2 ring-purple-400 shadow-purple-400/40 animate-pulse' : ''}`}
            >
              <Brain className="w-6 h-6 mr-3" />
              <span className="font-medium text-lg">
                {expandedPhases[activeSector] ? 'Hide Neural Development Phases' : 'Show Neural Development Phases'}
              </span>
              {hoveredService >= 0 && services[hoveredService] && (
                <span className="ml-3 inline-flex items-center rounded-full border border-cyan-400/50 bg-cyan-400/10 px-2.5 py-0.5 text-xs text-cyan-300">
                  {services[hoveredService].title}
                </span>
              )}
            </button>
          </div>

          {/* Meaningful Neural Connections */}
          {expandedPhases[activeSector] && (
            <div className="relative mb-8">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-400 mb-2">
                  {activeService >= 0 
                    ? `Service "${services[activeService]?.title}" connects to specific development phases`
                    : 'Click on a service to see its neural pathway connections'
                  }
                </p>
              </div>
              
              <svg className="absolute inset-0 w-full h-64 pointer-events-none">
                <defs>
                  <linearGradient id="activeConnection" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 212, 255, 1)" />
                    <stop offset="100%" stopColor="rgba(147, 51, 234, 1)" />
                  </linearGradient>
                  <linearGradient id="inactiveConnection" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 212, 255, 0.3)" />
                    <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" />
                  </linearGradient>
                  <linearGradient id="hideButtonConnection" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(147, 51, 234, 1)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 1)" />
                  </linearGradient>
                </defs>
                
                {/* Hide Button Node */}
                <g>
                  <circle
                    cx="50%" 
                    cy="15%"
                    r={activeService >= 0 ? "12" : "8"}
                    fill={activeService >= 0 ? "rgb(147, 51, 234)" : "rgba(147, 51, 234, 0.6)"}
                    className={activeService >= 0 ? "animate-pulse" : ""}
                    style={{ filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.6))' }}
                  />
                  <text
                    x="50%" 
                    y="8%"
                    textAnchor="middle"
                    className="text-xs font-medium fill-purple-300"
                  >
                    Neural Hub
                  </text>
                </g>
                
                {/* Service nodes arranged in a cleaner layout */}
                {services.map((service, idx) => {
                  const connectedPhases = getConnectedPhases(idx);
                  const isActive = activeService === idx;
                  const angle = (idx * 60) - 30; // Better spacing
                  const radius = 25;
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 35 + radius * Math.sin((angle * Math.PI) / 180) * 0.6;
                  
                  return (
                    <g key={`service-${idx}`}>
                      {/* Connection to Hide Button (Neural Hub) */}
                      {isActive && (
                        <path
                          d={`M ${x}% ${y}% Q 50% 20% 50% 15%`}
                          stroke="url(#hideButtonConnection)"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="6,3"
                          className="animate-pulse"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(147, 51, 234, 0.8))' }}
                        />
                      )}
                      
                      {/* Service node */}
                      <circle
                        cx={`${x}%`} 
                        cy={`${y}%`}
                        r={isActive ? "10" : "6"}
                        fill={isActive ? "rgb(0, 212, 255)" : "rgba(0, 212, 255, 0.6)"}
                        className={isActive ? "animate-pulse" : ""}
                        style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.6))' }}
                      />
                      
                      {/* Service label */}
                      <text
                        x={`${x}%`} 
                        y={`${y - 6}%`}
                        textAnchor="middle"
                        className={`text-xs font-medium ${isActive ? 'fill-cyan-300' : 'fill-cyan-500'}`}
                      >
                        {service.title.split(' ')[0]}
                      </text>
                      
                      {/* Smooth curved connections to phases */}
                      {isActive && connectedPhases.map((phaseIndex) => {
                        const phaseX = 25 + ((phaseIndex - 1) * 12.5);
                        const phaseY = 85;
                        const controlY = y + ((phaseY - y) * 0.5);
                        
                        return (
                          <path
                            key={`conn-${idx}-${phaseIndex}`}
                            d={`M ${x}% ${y}% Q ${x}% ${controlY}% ${phaseX}% ${phaseY}%`}
                            stroke="url(#activeConnection)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeDasharray="8,4"
                            className="animate-pulse"
                            style={{ filter: 'drop-shadow(0 0 4px rgba(0, 212, 255, 0.6))' }}
                          />
                        );
                      })}
                    </g>
                  );
                })}
                
                {/* Phase nodes with better alignment */}
                {developmentPhases[activeSector]?.map((phase, idx) => {
                  const isConnected = activeService >= 0 && getConnectedPhases(activeService).includes(idx + 1);
                  const x = 25 + (idx * 12.5);
                  
                  return (
                    <g key={`phase-${idx}`}>
                      <circle
                        cx={`${x}%`} 
                        cy="85%"
                        r={isConnected ? "10" : "6"}
                        fill={isConnected ? "rgb(147, 51, 234)" : "rgba(147, 51, 234, 0.6)"}
                        className={isConnected ? "animate-pulse" : ""}
                        style={{ filter: 'drop-shadow(0 0 6px rgba(147, 51, 234, 0.6))' }}
                      />
                      <text
                        x={`${x}%`} 
                        y="95%"
                        textAnchor="middle"
                        className={`text-xs font-medium ${isConnected ? 'fill-purple-300' : 'fill-purple-500'}`}
                      >
                        {phase.phase}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          )}
          
          {/* Neural Development Phases */}
          {expandedPhases[activeSector] && (
            <div id="neural-phases" className="mb-16 animate-fade-in mt-20">
              <div className="bg-black/20 backdrop-blur-sm rounded-3xl border border-purple-400/30 p-8">
                <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">
                  Neural Development Phases - {sectors.find(s => s.id === activeSector)?.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {developmentPhases[activeSector]?.map((phase, index) => {
                    const isConnected = activeService >= 0 && getConnectedPhases(activeService).includes(index + 1);
                    
                    return (
                      <div
                        key={phase.id}
                        onClick={() => handlePhaseClick(phase)}
                        className={`bg-black/40 backdrop-blur-sm rounded-2xl border p-6 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg ${
                          isConnected 
                            ? 'border-purple-400 shadow-lg shadow-purple-400/30' 
                            : 'border-purple-400/20 hover:border-purple-400/50 hover:shadow-purple-400/20'
                        }`}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                            isConnected ? 'bg-purple-500/40' : 'bg-purple-500/20'
                          }`}>
                            <phase.icon className="w-5 h-5 text-purple-300" />
                          </div>
                          <div>
                            <div className="text-sm text-purple-400 font-medium">{phase.phase}</div>
                            <div className="text-white font-semibold">{phase.title}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {phase.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-2 ${
                              phase.status === 'completed' ? 'bg-green-400' :
                              phase.status === 'in-progress' ? 'bg-yellow-400 animate-pulse' :
                              'bg-gray-400'
                            }`}></div>
                            <span className="text-xs text-gray-400 capitalize">{phase.status.replace('-', ' ')}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Zap className="w-3 h-3 text-purple-400 mr-1" />
                            <span className="text-xs text-purple-300">{phase.energy}%</span>
                          </div>
                        </div>
                        
                        {isConnected && (
                          <div className="mt-3 pt-3 border-t border-purple-400/30">
                            <div className="text-xs text-purple-300 flex items-center">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                              Connected to {services[activeService]?.title}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Phase Detail Modal */}
          {selectedPhase && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" style={{ paddingTop: '160px' }}>
              <div className="bg-black/90 backdrop-blur-lg rounded-3xl border border-purple-400/30 p-8 max-w-4xl w-full max-h-[calc(85vh-160px)] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-sm text-purple-400 font-medium mb-2">{selectedPhase.phase}</div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedPhase.title}</h3>
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center text-sm ${
                        selectedPhase.status === 'completed' ? 'text-green-400' :
                        selectedPhase.status === 'in-progress' ? 'text-yellow-400' :
                        'text-gray-400'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          selectedPhase.status === 'completed' ? 'bg-green-400' :
                          selectedPhase.status === 'in-progress' ? 'bg-yellow-400 animate-pulse' :
                          'bg-gray-400'
                        }`}></div>
                        {selectedPhase.status.replace('-', ' ').charAt(0).toUpperCase() + selectedPhase.status.replace('-', ' ').slice(1)}
                      </div>
                      <div className="flex items-center text-sm text-purple-300">
                        <Zap className="w-3 h-3 mr-1" />
                        {selectedPhase.energy}% Neural Energy
                      </div>
                      <div className="text-sm text-gray-300">
                        Duration: {selectedPhase.duration}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closePhaseModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-4">Overview</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedPhase.detailedContent}
                    </p>
                    
                    <h4 className="text-xl font-semibold text-purple-300 mb-4">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {selectedPhase.deliverables?.map((deliverable: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                      <h4 className="text-xl font-semibold text-purple-300 mb-4">Neural Insights</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Complexity Level</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full mr-1 ${
                                  i < Math.floor(selectedPhase.energy / 20) ? 'bg-purple-400' : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Neural Efficiency</span>
                          <span className="text-purple-300 font-semibold">{selectedPhase.energy}%</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Timeline</span>
                          <span className="text-gray-300">{selectedPhase.duration}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const neuralSyncElement = document.getElementById('neural-phases');
                        if (neuralSyncElement) {
                          neuralSyncElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          // Close modal after scrolling
                          setTimeout(() => closePhaseModal(), 500);
                        }
                      }}
                      className="w-full mt-6 py-3 bg-purple-500/20 border border-purple-400 text-purple-300 rounded-xl hover:bg-purple-500/30 transition-all duration-300"
                    >
                      Start Neural Sync
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="max-w-6xl mx-auto mb-16">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              At Synopsyne Dynamics, we exist at the intersection of human intuition and digital precision. 
              Our name isn't just clever wordplay—it's our philosophy. Like synapses firing in perfect 
              harmony to create thought, we connect disparate elements to spark innovation.
            </p>
          </div>
        </div>

        {/* Services Network */}
        <div className="relative max-w-8xl mx-auto mb-32 mt-32">
          <div className="relative h-[1200px] w-full flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {services.map((service, index) => 
                service.connections.map(connIndex => (
                  <line
                    key={`${index}-${connIndex}`}
                    x1={`${service.position.x}%`}
                    y1={`${service.position.y}%`}
                    x2={`${services[connIndex].position.x}%`}
                    y2={`${services[connIndex].position.y}%`}
                    stroke={activeService === index || activeService === connIndex ? "rgb(0, 212, 255)" : "rgba(0, 212, 255, 0.4)"}
                    strokeWidth={activeService === index || activeService === connIndex ? "6" : "4"}
                    className={`transition-all duration-500 ${
                      activeService === index || activeService === connIndex ? 'animate-synaptic-fire' : ''
                    }`}
                    strokeLinecap="round"
                  />
                ))
              )}

              {services.map((service, index) => (
                <circle
                  key={`pulse-${index}`}
                  cx={`${service.position.x}%`}
                  cy={`${service.position.y}%`}
                  r="12"
                  fill="rgb(0, 212, 255)"
                  className={`transition-all duration-300 ${
                    neuralPulse === index ? 'animate-ping' : 'opacity-70'
                  }`}
                />
              ))}

              <defs>
                <linearGradient id="verticalLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0, 212, 255, 0.8)" />
                  <stop offset="50%" stopColor="rgba(0, 212, 255, 1)" />
                  <stop offset="100%" stopColor="rgba(0, 212, 255, 0.8)" />
                </linearGradient>
              </defs>
              
              <line
                x1="15%" y1="20%" x2="15%" y2="80%"
                stroke="url(#verticalLineGradient)"
                strokeWidth="6"
                className="animate-pulse"
                opacity="0.8"
              />
              <line
                x1="85%" y1="20%" x2="85%" y2="80%"
                stroke="url(#verticalLineGradient)"
                strokeWidth="6"
                className="animate-pulse"
                opacity="0.8"
              />
            </svg>

            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceCardRefs.current[index] = el)}
                className="absolute cursor-pointer transition-all duration-500 group"
                style={{ 
                  left: `${service.position.x}%`, 
                  top: `${service.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: activeService === index ? 50 : 10,
                  width: '300px'
                }}
                onMouseEnter={(e) => {
                  setHoveredService(index);
                  const rect = e.currentTarget.getBoundingClientRect();
                  const sectionRect = sectionRef.current?.getBoundingClientRect();
                  
                  if (sectionRect) {
                    // Calculate position relative to viewport, ensuring it doesn't overlap
                    let tabX = rect.right + 30;
                    let tabY = rect.top + rect.height / 2;
                    
                    // Adjust if tab would go off screen
                    if (tabX + 280 > window.innerWidth) {
                      tabX = rect.left - 310; // Show on left side instead
                    }
                    
                    // Ensure tab stays within viewport vertically
                    if (tabY + 100 > window.innerHeight) {
                      tabY = window.innerHeight - 120;
                    }
                    if (tabY < 20) {
                      tabY = 20;
                    }
                    
                    setHoveredServiceTab({
                      show: true,
                      x: tabX,
                      y: tabY
                    });
                  }
                }}
                onMouseLeave={() => {
                  setHoveredService(-1);
                  setHoveredServiceTab({show: false, x: 0, y: 0});
                }}
                onClick={() => handleServiceClick(index)}
              >
                <div className={`absolute inset-0 w-[350px] h-[350px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${
                  activeService === index ? 'scale-110 opacity-100' : 'scale-100 opacity-30'
                }`}></div>

                {activeService === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}

                <div className={`relative bg-black/40 backdrop-blur-sm p-6 rounded-3xl border transition-all duration-500 w-full min-h-[260px] flex flex-col justify-between ${
                  activeService === index ? 'border-cyan-400 shadow-2xl scale-105' : 'border-white/20 group-hover:border-cyan-400/50'
                }`}>
                  <div className="mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-3 transition-transform duration-500 ${
                      activeService === index ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                    }`}>
                      <service.icon className="w-5 h-5 text-neon" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 transition-all ${
                            activeService === index ? 'animate-pulse scale-125' : ''
                          }`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNeuralSync(index);
                      }}
                      className={`w-full py-2 text-cyan-400 border border-cyan-400/30 rounded-lg transition-all text-sm ${
                        activeService === index ? 'bg-cyan-400/20 border-cyan-400' : 'hover:bg-cyan-400/10 group-hover:border-cyan-400'
                      }`}
                    >
                      Neural Sync
                    </button>

                    {activeService === index && (
                      <div className="mt-3 pt-3 border-t border-cyan-500/30 animate-fade-in">
                        <div className="flex items-center text-xs text-cyan-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                          Connected to {getConnectedPhases(index).length} development phases
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Tab for Neural Development Phases */}
      {hoveredServiceTab.show && (
        <div 
          className="fixed z-[90] pointer-events-none"
          style={{
            left: `${hoveredServiceTab.x}px`,
            top: `${hoveredServiceTab.y}px`,
            transform: 'translateY(-50%)'
          }}
        >
          <div className="relative">
            {/* Dotted line connecting to tab */}
            <div 
              className={`absolute top-1/2 h-0 border-t-2 border-dotted border-cyan-400/60 ${
                hoveredServiceTab.x > window.innerWidth / 2 ? 'right-full w-8' : 'left-full w-8'
              }`}
              style={{
                transform: 'translateY(-50%)',
                animation: 'slideFromDots 0.3s ease-out'
              }}
            />
            
            {/* Neural Development Phases Tab */}
            <div 
              className={`bg-gray-900/95 backdrop-blur-xl border border-cyan-400/40 rounded-xl px-5 py-4 min-w-[280px] shadow-2xl shadow-cyan-400/10 ${
                hoveredServiceTab.x > window.innerWidth / 2 ? 'mr-2' : 'ml-2'
              }`}
              style={{
                animation: 'slideInFromRight 0.4s ease-out',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                borderImage: 'linear-gradient(135deg, #06b6d4, #a855f7) 1'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-cyan-400/30 animate-ping" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Neural Development Phases</h4>
                  <p className="text-cyan-200/80 text-xs">Click service to explore process</p>
                </div>
              </div>
              
              {/* Enhanced Progress indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-cyan-300/70">
                  <span>Analysis</span>
                  <span>Architecture</span>
                  <span>Development</span>
                  <span>Deployment</span>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4].map((phase) => (
                    <div 
                      key={phase} 
                      className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden border border-cyan-400/20"
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{
                          width: phase <= 2 ? '100%' : phase === 3 ? '60%' : '0%',
                          animation: `fillPhase 0.8s ease-out ${phase * 0.15}s both`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Neural activity indicator */}
              <div className="mt-3 pt-3 border-t border-cyan-400/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-300/70">Neural Activity</span>
                  <div className="flex items-center gap-1">
                    {[1,2,3].map((dot) => (
                      <div 
                        key={dot}
                        className="w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          animation: `pulse 1.5s ease-in-out ${dot * 0.2}s infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Phase Development Screen */}
      {showPhaseScreen && clickedService && (
        <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-7xl h-full bg-gray-900/90 rounded-3xl border border-cyan-500/30 overflow-hidden relative">
            {/* Close button */}
            <button
              onClick={closePhaseScreen}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-red-500/20 border border-red-400/30 text-red-400 hover:bg-red-500/30 transition-colors flex items-center justify-center text-xl font-bold"
            >
              ×
            </button>

            {/* Header */}
            <div className="p-8 border-b border-cyan-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <clickedService.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{clickedService.title}</h2>
                  <p className="text-gray-300 text-lg">{clickedService.description}</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Neural Development Phases</h3>
                <p className="text-gray-400">Comprehensive development journey for {clickedService.title}</p>
              </div>
            </div>

            {/* Development Phases Grid */}
            <div className="p-8 h-full overflow-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {developmentPhases[activeSector].map((phase) => (
                  <div
                    key={phase.id}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => setSelectedPhase(phase)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                        {phase.phase}
                      </span>
                      <div className={`w-3 h-3 rounded-full ${
                        phase.status === 'completed' ? 'bg-green-400' :
                        phase.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`} />
                    </div>
                    
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-4">
                      <phase.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{phase.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Energy Level</span>
                        <span>{phase.energy}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${phase.energy}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      Duration: {phase.duration}
                    </div>
                  </div>
                ))}
              </div>

              {/* Neural Connection Lines Background */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="w-full h-full">
                  {/* Animated neural connections between phases */}
                  {developmentPhases[activeSector].map((phase, index) => {
                    if (index < developmentPhases[activeSector].length - 1) {
                      return (
                        <g key={`connection-${index}`}>
                          <path
                            d={`M ${200 + (index % 4) * 300} ${300 + Math.floor(index / 4) * 200} 
                               Q ${250 + (index % 4) * 300} ${350 + Math.floor(index / 4) * 200} 
                               ${200 + ((index + 1) % 4) * 300} ${300 + Math.floor((index + 1) / 4) * 200}`}
                            stroke="rgba(6, 182, 212, 0.3)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            className="animate-pulse"
                          />
                        </g>
                      );
                    }
                    return null;
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
