
import React, { useState } from 'react';
import { Code, Cloud, Smartphone, Brain, Database, Shield } from 'lucide-react';

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
      position: { x: 15, y: 20 },
      connections: [1, 5]
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture & DevOps',
      description: 'Scalable cloud solutions with automated deployment and infrastructure management.',
      features: ['AWS/Azure/GCP setup', 'CI/CD pipelines', 'Container orchestration', 'Monitoring & logging'],
      position: { x: 50, y: 10 },
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
      position: { x: 50, y: 90 },
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center text-neon text-sm mb-8 animate-float">
            <Brain className="w-4 h-4 mr-2" />
            <span>Neural Service Architecture</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Our <span className="text-neon animate-text-glow">Services</span> Network
          </h2>
          
          {/* The Neural Bridge - Increased Size */}
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The Neural <span className="text-neon">Bridge</span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              At Synopsyne Dynamics, we exist at the intersection of human intuition and digital precision. 
              Our name isn't just clever wordplay—it's our philosophy. Like synapses firing in perfect 
              harmony to create thought, we connect disparate elements to spark innovation.
            </p>
          </div>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Interconnected solutions that form a comprehensive neural ecosystem, 
            each service amplifying the others to create exponential value.
          </p>
        </div>

        {/* Neural Services Network - Better Alignment */}
        <div className="relative max-w-7xl mx-auto mb-20">
          <div className="relative h-[700px] w-full">
            {/* Neural connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {services.map((service, index) => 
                service.connections.map(connIndex => (
                  <line
                    key={`${index}-${connIndex}`}
                    x1={`${service.position.x}%`}
                    y1={`${service.position.y}%`}
                    x2={`${services[connIndex].position.x}%`}
                    y2={`${services[connIndex].position.y}%`}
                    stroke={activeService === index || activeService === connIndex ? "rgb(0, 212, 255)" : "rgba(0, 212, 255, 0.3)"}
                    strokeWidth={activeService === index || activeService === connIndex ? "3" : "2"}
                    className={`transition-all duration-500 ${
                      activeService === index || activeService === connIndex ? 'animate-synaptic-fire' : ''
                    }`}
                  />
                ))
              )}

              {/* Pulsing connection points */}
              {services.map((service, index) => (
                <circle
                  key={`pulse-${index}`}
                  cx={`${service.position.x}%`}
                  cy={`${service.position.y}%`}
                  r="8"
                  fill="rgb(0, 212, 255)"
                  className={`transition-all duration-300 ${
                    neuralPulse === index ? 'animate-ping' : 'opacity-60'
                  }`}
                />
              ))}
            </svg>

            {/* Service nodes - Better positioning */}
            {services.map((service, index) => (
              <div
                key={index}
                className="absolute cursor-pointer transition-all duration-500 group"
                style={{ 
                  left: `${service.position.x}%`, 
                  top: `${service.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: activeService === index ? 50 : 10,
                  width: '320px'
                }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(-1)}
              >
                {/* Neural aura */}
                <div className={`absolute inset-0 w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${
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

                <div className={`relative bg-black/40 backdrop-blur-sm p-6 rounded-3xl border transition-all duration-500 w-full ${
                  activeService === index ? 'border-cyan-400 shadow-2xl scale-105' : 'border-white/20 group-hover:border-cyan-400/50'
                }`}>
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-3 transition-transform duration-500 ${
                      activeService === index ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                    }`}>
                      <service.icon className="w-6 h-6 text-neon" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm">
                      {service.description}
                    </p>
                  </div>

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
            ))}
          </div>

          <p className="text-center text-gray-300 text-sm mt-12 italic">
            Hover over any service to see neural connections and synaptic relationships.
          </p>
        </div>

        {/* Process Timeline - Neural Enhanced */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Neural Development <span className="text-neon">Process</span>
          </h3>
          
          <div className="relative">
            {/* Neural pathway line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-60"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
              {[
                { step: '01', title: 'Discovery', description: 'Understanding your vision and requirements', icon: '🧠' },
                { step: '02', title: 'Design', description: 'Creating intuitive user experiences', icon: '⚡' },
                { step: '03', title: 'Development', description: 'Building with cutting-edge technologies', icon: '🔗' },
                { step: '04', title: 'Testing', description: 'Ensuring quality and performance', icon: '🎯' },
                { step: '05', title: 'Deployment', description: 'Launching your solution to the world', icon: '🚀' }
              ].map((phase, index) => (
                <div key={index} className="text-center group relative">
                  {/* Neural node */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-cyan-400 bg-black/40 backdrop-blur-sm flex items-center justify-center text-cyan-400 font-bold text-lg group-hover:bg-cyan-400/20 transition-all relative z-10">
                    {phase.step}
                    
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-30"></div>
                  </div>
                  
                  <div className="text-2xl mb-2">{phase.icon}</div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-neon transition-colors">
                    {phase.title}
                  </h4>
                  <p className="text-gray-400 text-sm max-w-32">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
