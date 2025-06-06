
import React, { useState } from 'react';
import { Code, Brain, Cloud, Database, Zap, ArrowRight, CheckCircle, TrendingUp, Shield } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  visualExperience: string[];
  offerings: string[];
  metrics?: { label: string; value: string; color: string }[];
}

const ServicesDeepDive = () => {
  const [selectedService, setSelectedService] = useState<string>('custom-software');

  const services: Service[] = [
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      icon: <Code className="w-8 h-8" />,
      description: 'Enterprise-grade software solutions built with precision and scalability in mind.',
      visualExperience: [
        'Development Pipeline: 3D visualization of code moving through CI/CD stages',
        'Architecture Diagrams: Interactive system designs with scalability demonstrations',
        'Quality Metrics: Real-time code quality indicators, test coverage, performance benchmarks',
        'Technology Selection: Decision trees showing optimal tech stack recommendations'
      ],
      offerings: [
        'Enterprise Applications: Scalable platforms for large organizations',
        'Web Applications: Modern, responsive, progressive web experiences',
        'API Development: RESTful and GraphQL architectures with documentation',
        'Legacy Modernization: Migration strategies from monoliths to microservices',
        'Integration Services: Seamless third-party system connections'
      ],
      metrics: [
        { label: 'Code Quality', value: '98%', color: '#00D4FF' },
        { label: 'Test Coverage', value: '95%', color: '#10B981' },
        { label: 'Performance', value: '99.9%', color: '#F59E0B' }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning Solutions',
      icon: <Brain className="w-8 h-8" />,
      description: 'Intelligent systems that learn, adapt, and deliver actionable insights.',
      visualExperience: [
        'Model Training: Real-time visualization of neural network learning processes',
        'Data Pipeline: Information flowing through ETL processes and feature engineering',
        'Prediction Accuracy: Live model performance metrics and confidence intervals',
        'Algorithm Comparison: Side-by-side model performance with A/B testing'
      ],
      offerings: [
        'Predictive Analytics: Business forecasting and trend analysis systems',
        'Computer Vision: Image recognition, object detection, medical imaging',
        'Natural Language Processing: Chatbots, sentiment analysis, document processing',
        'Recommendation Engines: Personalization systems for e-commerce and content',
        'Process Automation: Intelligent workflow optimization and decision making'
      ],
      metrics: [
        { label: 'Model Accuracy', value: '94%', color: '#8B5CF6' },
        { label: 'Processing Speed', value: '2.3ms', color: '#EF4444' },
        { label: 'Data Quality', value: '97%', color: '#06B6D4' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Scalable, secure, and cost-effective cloud solutions for modern businesses.',
      visualExperience: [
        'Infrastructure Scaling: Real-time resource allocation and auto-scaling demonstrations',
        'Security Monitoring: Live threat detection and mitigation visualizations',
        'Cost Optimization: Dynamic resource usage and cost-saving recommendations',
        'Global Distribution: Network latency and CDN performance mapping'
      ],
      offerings: [
        'Cloud Migration: Seamless transition from on-premise to cloud infrastructure',
        'DevOps Automation: CI/CD pipelines with infrastructure as code',
        'Serverless Architecture: Event-driven, cost-effective scaling solutions',
        'Security Implementation: Zero-trust architecture and compliance frameworks',
        'Monitoring & Analytics: Real-time performance insights and alerting systems'
      ],
      metrics: [
        { label: 'Uptime', value: '99.99%', color: '#10B981' },
        { label: 'Cost Savings', value: '40%', color: '#F59E0B' },
        { label: 'Security Score', value: '98%', color: '#EF4444' }
      ]
    }
  ];

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section id="services-deep-dive" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Solution <span className="text-neon">Architecture</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dive into our comprehensive service offerings and see how we architect 
            solutions that transform businesses and drive innovation.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-all ${
                selectedService === service.id
                  ? 'glassmorphism neon-border text-neon'
                  : 'glassmorphism/50 text-gray-300 hover:text-white hover:bg-cyan-500/10'
              }`}
            >
              {service.icon}
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Details */}
        {selectedServiceData && (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Service Info */}
            <div className="space-y-8">
              <div className="glassmorphism p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-cyan-500/20 text-neon">
                    {selectedServiceData.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedServiceData.title}</h3>
                </div>
                <p className="text-gray-300 text-lg mb-6">{selectedServiceData.description}</p>

                {/* Metrics */}
                {selectedServiceData.metrics && (
                  <div className="grid grid-cols-3 gap-4">
                    {selectedServiceData.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="text-2xl font-bold mb-1"
                          style={{ color: metric.color }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual Experience */}
              <div className="glassmorphism p-6 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-neon" />
                  Visual Experience
                </h4>
                <div className="space-y-3">
                  {selectedServiceData.visualExperience.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Service Offerings */}
            <div className="space-y-8">
              <div className="glassmorphism p-6 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-neon" />
                  Service Offerings
                </h4>
                <div className="space-y-4">
                  {selectedServiceData.offerings.map((offering, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-all">
                        <ArrowRight className="w-5 h-5 text-neon mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <div>
                          <div className="text-white font-medium group-hover:text-neon transition-colors">
                            {offering.split(':')[0]}
                          </div>
                          {offering.includes(':') && (
                            <div className="text-gray-400 text-sm mt-1">
                              {offering.split(':')[1]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Placeholder */}
              <div className="glassmorphism p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full glassmorphism flex items-center justify-center">
                  <Database className="w-8 h-8 text-neon animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Interactive Demo</h4>
                <p className="text-gray-400 mb-4">
                  Experience our {selectedServiceData.title.toLowerCase()} capabilities
                </p>
                <button className="neon-border px-6 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all">
                  Launch Demo
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glassmorphism p-8 rounded-xl max-w-2xl mx-auto">
            <Shield className="w-12 h-12 text-neon mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our solutions can address your specific challenges and goals.
            </p>
            <button className="neon-border px-8 py-3 rounded-lg text-neon hover:bg-cyan-500/10 transition-all font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDeepDive;
