
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Cpu, Network, Zap, Globe, Shield, Rocket, Target } from 'lucide-react';

const WhereSynapsesMeetSystems = () => {
  const features = [
    {
      icon: Brain,
      title: "Neural Intelligence",
      description: "Advanced AI algorithms that mimic human cognitive processes for intelligent decision-making and pattern recognition."
    },
    {
      icon: Cpu,
      title: "System Integration",
      description: "Seamless integration of AI capabilities with existing technological infrastructure and enterprise systems."
    },
    {
      icon: Network,
      title: "Adaptive Networks",
      description: "Dynamic network architectures that evolve and adapt based on real-time data and changing requirements."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast data processing and response times that enable instant decision-making and actions."
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Worldwide network connectivity that ensures seamless communication across distributed systems."
    },
    {
      icon: Shield,
      title: "Secure Architecture",
      description: "Enterprise-grade security measures that protect neural networks and sensitive data from threats."
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Infinitely scalable architectures that grow with your business needs and technological demands."
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Highly accurate data analysis and predictive modeling for strategic business insights."
    }
  ];

  const convergencePoints = [
    {
      title: "Biological Inspiration",
      description: "Drawing from the complexity of neural networks in the human brain to create intelligent systems.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Digital Transformation",
      description: "Converting biological processes into digital frameworks that can be implemented at scale.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Hybrid Intelligence",
      description: "Combining human intuition with machine precision to create superior decision-making systems.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Evolutionary Computing",
      description: "Systems that learn, adapt, and evolve continuously to improve performance over time.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Where <span className="text-neon animate-text-glow">Synapses</span> Meet <span className="text-neon animate-text-glow">Systems</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Bridging the gap between neural intelligence and technological innovation through cutting-edge AI solutions
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="glassmorphism px-6 py-3 rounded-lg">
              <span className="text-neon font-semibold">Neural Networks</span>
            </div>
            <div className="glassmorphism px-6 py-3 rounded-lg">
              <span className="text-neon font-semibold">+</span>
            </div>
            <div className="glassmorphism px-6 py-3 rounded-lg">
              <span className="text-neon font-semibold">Digital Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Convergence Points Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            The <span className="text-neon">Convergence</span> Points
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {convergencePoints.map((point, index) => (
              <div key={index} className="glassmorphism p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${point.gradient} mb-4 flex items-center justify-center`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Intelligent <span className="text-neon">System</span> Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glassmorphism p-6 rounded-lg hover:scale-105 transition-transform duration-300 group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Integration <span className="text-neon">Process</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Neural Analysis",
                  description: "Deep analysis of existing systems and identification of neural integration points"
                },
                {
                  step: "02",
                  title: "System Mapping",
                  description: "Comprehensive mapping of current infrastructure and potential enhancement areas"
                },
                {
                  step: "03",
                  title: "AI Implementation",
                  description: "Strategic implementation of AI components with minimal disruption to existing workflows"
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous monitoring and optimization of neural-system interactions for peak performance"
                }
              ].map((process, index) => (
                <div key={index} className="glassmorphism p-8 rounded-lg flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon to-cyan-400 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{process.title}</h3>
                    <p className="text-gray-300">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="glassmorphism p-12 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Bridge the Gap?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's connect your neural aspirations with systematic implementation
            </p>
            <button className="neon-border px-8 py-4 rounded-lg text-neon hover:bg-cyan-500/10 transition-all text-lg font-semibold">
              Start Your Neural Journey
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhereSynapsesMeetSystems;
