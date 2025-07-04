
import React, { useState } from 'react';
import { Code, Cloud, Smartphone, Brain, Database, Shield } from 'lucide-react';
import NeuralDevelopmentProcess from '@/components/ui/neural-development-process';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(-1);
  const [neuralPulse, setNeuralPulse] = useState(0);

  React.useEffect(() => {
    const pulseInterval = setInterval(() => {
      setNeuralPulse(prev => (prev + 1) % 6);
    }, 1500);

    return () => clearInterval(pulseInterval);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Bespoke applications tailored to your unique business requirements and workflows.',
      features: ['Full-stack development', 'Legacy system modernization', 'API integration', 'Code auditing'],
      position: { x: 15, y: 30 },
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
      position: { x: 85, y: 30 },
      connections: [1, 3]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter development', 'Progressive Web Apps', 'App store optimization'],
      position: { x: 85, y: 70 },
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
      position: { x: 15, y: 70 },
      connections: [4, 0]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Neural Network Background */}
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-neon text-sm mb-8 animate-float">
            <Brain className="w-4 h-4 mr-2" />
            <span>Neural Service Architecture</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our <span className="text-neon animate-text-glow">Services</span> Network
          </h2>
          
          {/* Philosophy text with smaller font size */}
          <div className="max-w-6xl mx-auto mb-16">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              At Synopsyne Dynamics, we exist at the intersection of human intuition and digital precision. 
              Our name isn't just clever wordplay—it's our philosophy. Like synapses firing in perfect 
              harmony to create thought, we connect disparate elements to spark innovation.
            </p>
          </div>
        </div>

        {/* Neural Services Network with reduced card size */}
        <div className="relative max-w-8xl mx-auto mb-32 mt-32">
          <div className="relative h-[1000px] w-full flex items-center justify-center">
            {/* Enhanced Neural connections with thicker vertical lines */}
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

              {/* Enhanced pulsing connection points */}
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

              {/* Additional vertical emphasis lines */}
              <defs>
                <linearGradient id="verticalLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0, 212, 255, 0.8)" />
                  <stop offset="50%" stopColor="rgba(0, 212, 255, 1)" />
                  <stop offset="100%" stopColor="rgba(0, 212, 255, 0.8)" />
                </linearGradient>
              </defs>
              
              {/* Vertical connection enhancement between specific services */}
              <line
                x1="15%" y1="30%" x2="15%" y2="70%"
                stroke="url(#verticalLineGradient)"
                strokeWidth="6"
                className="animate-pulse"
                opacity="0.8"
              />
              <line
                x1="85%" y1="30%" x2="85%" y2="70%"
                stroke="url(#verticalLineGradient)"
                strokeWidth="6"
                className="animate-pulse"
                opacity="0.8"
              />
            </svg>

            {/* Service nodes with reduced sizing */}
            {services.map((service, index) => (
              <div
                key={index}
                className="absolute cursor-pointer transition-all duration-500 group"
                style={{ 
                  left: `${service.position.x}%`, 
                  top: `${service.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: activeService === index ? 50 : 10,
                  width: '300px'
                }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(-1)}
              >
                {/* Neural aura with smaller sizing */}
                <div className={`absolute inset-0 w-[350px] h-[350px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${
                  activeService === index ? 'scale-110 opacity-100' : 'scale-100 opacity-30'
                }`}></div>

                {/* Synaptic sparks */}
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

                {/* Reduced hexagon-shaped card */}
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
                    <button className={`w-full py-2 text-cyan-400 border border-cyan-400/30 rounded-lg transition-all text-sm ${
                      activeService === index ? 'bg-cyan-400/20 border-cyan-400' : 'hover:bg-cyan-400/10 group-hover:border-cyan-400'
                    }`}>
                      Neural Sync
                    </button>

                    {activeService === index && (
                      <div className="mt-3 pt-3 border-t border-cyan-500/30 animate-fade-in">
                        <div className="flex items-center text-xs text-cyan-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                          Neural pathways activated - analyzing connections...
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neural Development Process */}
        <div className="mt-20">
          <NeuralDevelopmentProcess />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
