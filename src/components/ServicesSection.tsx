
import React from 'react';
import { Code, Cloud, Smartphone, Brain, Database, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Bespoke applications tailored to your unique business requirements and workflows.',
      features: ['Full-stack development', 'Legacy system modernization', 'API integration', 'Code auditing']
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture & DevOps',
      description: 'Scalable cloud solutions with automated deployment and infrastructure management.',
      features: ['AWS/Azure/GCP setup', 'CI/CD pipelines', 'Container orchestration', 'Monitoring & logging']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that learn and adapt to drive business insights and automation.',
      features: ['Predictive analytics', 'Natural language processing', 'Computer vision', 'Recommendation systems']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter development', 'Progressive Web Apps', 'App store optimization']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Robust data pipelines and analytics platforms for data-driven decision making.',
      features: ['ETL pipelines', 'Data warehousing', 'Real-time analytics', 'Data visualization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets and infrastructure.',
      features: ['Security audits', 'Penetration testing', 'Compliance consulting', 'Incident response']
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-neon">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive software solutions 
            that drive innovation and accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glassmorphism p-8 rounded-xl hover:neon-border transition-all duration-300 hover:transform hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <service.icon className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3 group-hover:animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full py-2 text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-all group-hover:border-cyan-400">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Development <span className="text-neon">Process</span>
          </h3>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', description: 'Creating intuitive user experiences' },
              { step: '03', title: 'Development', description: 'Building with cutting-edge technologies' },
              { step: '04', title: 'Testing', description: 'Ensuring quality and performance' },
              { step: '05', title: 'Deployment', description: 'Launching your solution to the world' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 font-bold text-lg group-hover:bg-cyan-400/10 transition-all">
                  {phase.step}
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-neon transition-colors">
                  {phase.title}
                </h4>
                <p className="text-gray-400 text-sm max-w-32">
                  {phase.description}
                </p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
