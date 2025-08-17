import React, { useState } from 'react';
import { Code, Cloud, Smartphone, Brain, Database, Shield, Building, Users, GraduationCap, Settings, Zap } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(-1);
  const [activeSector, setActiveSector] = useState('Software Development');
  const [hoveredService, setHoveredService] = useState(-1);
  const [clickedService, setClickedService] = useState<any>(null);

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
        description: 'Industry-recognized certifications to validate your skills and advance your career.',
        features: ['AWS certifications', 'Google Cloud certifications', 'Microsoft Azure certifications', 'Professional project management'],
        position: { x: 20, y: 75 },
        connections: [3, 0]
      },
      {
        icon: Users,
        title: 'Corporate Training Solutions',
        description: 'Customized training programs designed for enterprise teams and organizations.',
        features: ['Team workshops', 'Leadership development', 'Digital transformation training', 'Custom curriculum design'],
        position: { x: 80, y: 75 },
        connections: [2, 1]
      }
    ],
    'Technology Consulting': [
      {
        icon: Brain,
        title: 'Digital Transformation',
        description: 'End-to-end digital transformation strategies to modernize your business operations.',
        features: ['Process automation', 'Legacy system migration', 'Cloud adoption strategy', 'Change management'],
        position: { x: 30, y: 30 },
        connections: [1, 2]
      },
      {
        icon: Shield,
        title: 'IT Security Consulting',
        description: 'Comprehensive cybersecurity assessments and implementation of robust security frameworks.',
        features: ['Security audits', 'Compliance consulting', 'Risk assessment', 'Incident response planning'],
        position: { x: 70, y: 30 },
        connections: [0, 2]
      },
      {
        icon: Settings,
        title: 'Technology Strategy',
        description: 'Strategic technology planning aligned with your business objectives and growth plans.',
        features: ['Technology roadmapping', 'Architecture design', 'Vendor selection', 'Cost optimization'],
        position: { x: 50, y: 70 },
        connections: [0, 1]
      }
    ]
  };

  const handleServiceClick = (service: any, sector: string) => {
    setClickedService({ ...service, sector });
  };

  const closeServiceModal = () => {
    setClickedService(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-600';
      case 'in-progress':
        return 'from-blue-500 to-cyan-600';
      case 'pending':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  const currentServices = servicesBySector[activeSector as keyof typeof servicesBySector] || [];

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-neon animate-text-glow">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Comprehensive solutions across multiple domains, powered by cutting-edge technology and expert teams
          </p>
        </div>

        {/* Sector Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectors.map((sector, index) => (
            <button
              key={sector.id}
              onClick={() => setActiveSector(sector.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeSector === sector.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              <sector.icon size={20} />
              {sector.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service, index) => (
              <div
                key={index}
                className={`glassmorphism p-6 rounded-xl transition-all duration-300 cursor-pointer group hover:shadow-xl ${
                  hoveredService === index ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(-1)}
                onClick={() => handleServiceClick(service, activeSector)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neon"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {clickedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900/95 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto m-4">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600">
                  <clickedService.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{clickedService.title}</h3>
                  <p className="text-neon">{clickedService.sector}</p>
                </div>
              </div>
              <button
                onClick={closeServiceModal}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            <p className="text-gray-300 mb-8 text-lg">{clickedService.description}</p>

            {/* Development Phases for clicked service */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">Development Process</h4>
              {developmentPhases[clickedService.sector as keyof typeof developmentPhases]?.map((phase, index) => (
                <div key={phase.id} className="glassmorphism p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getStatusColor(phase.status)}`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-white">{phase.title}</h5>
                      <span className="text-sm text-neon">{phase.phase}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{phase.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="text-white font-semibold mb-2">Deliverables:</h6>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-white font-semibold mb-2">Duration:</h6>
                      <p className="text-gray-400 text-sm">{phase.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;