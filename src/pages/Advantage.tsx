
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Zap, Brain, Globe, Users, Trophy, Rocket, Target, CheckCircle, ArrowRight } from 'lucide-react';

const Advantage = () => {
  const coreAdvantages = [
    {
      icon: Brain,
      title: "Neural Intelligence Leadership",
      description: "Pioneering AI solutions that think, learn, and adapt like the human brain but with computational precision.",
      benefits: ["Advanced pattern recognition", "Predictive analytics", "Self-improving algorithms"]
    },
    {
      icon: Zap,
      title: "Lightning-Fast Implementation",
      description: "Rapid deployment of AI solutions with minimal disruption to existing business processes.",
      benefits: ["Quick integration", "Zero downtime migration", "Instant ROI visibility"]
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Military-level security protocols protecting your data and AI models from threats.",
      benefits: ["End-to-end encryption", "Compliance ready", "Threat detection AI"]
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Solutions that scale seamlessly from startup to enterprise across multiple continents.",
      benefits: ["Cloud-native architecture", "Multi-region deployment", "Elastic scaling"]
    }
  ];

  const competitiveAdvantages = [
    {
      title: "10x Faster Development",
      description: "Our neural development framework accelerates AI project delivery by 1000%",
      metric: "10x",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "99.9% Uptime Guarantee",
      description: "Enterprise-grade reliability with automatic failover and disaster recovery",
      metric: "99.9%",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "500+ Successful Deployments",
      description: "Proven track record across industries and organizational sizes",
      metric: "500+",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "24/7 Neural Support",
      description: "Round-the-clock AI-powered support with human expertise backup",
      metric: "24/7",
      color: "from-orange-500 to-red-500"
    }
  ];

  const industryLeadership = [
    "First to market with neural-integrated business systems",
    "Recognized leader in AI transformation consulting",
    "Patent-pending neural architecture frameworks",
    "Award-winning customer success programs",
    "Industry-standard security certifications",
    "Global network of AI specialists"
  ];

  const clientSuccessMetrics = [
    { metric: "300%", label: "Average ROI Increase" },
    { metric: "85%", label: "Operational Efficiency Gain" },
    { metric: "60%", label: "Cost Reduction" },
    { metric: "95%", label: "Client Satisfaction Rate" }
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
            The Synopsyne <span className="text-neon animate-text-glow">Advantage</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover what sets us apart in the digital transformation landscape and why industry leaders choose Synopsyne
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="glassmorphism px-6 py-3 rounded-lg">
              <span className="text-neon font-semibold">Innovation</span>
            </div>
            <div className="glassmorphism px-6 py-3 rounded-lg">
              <span className="text-neon font-semibold">+</span>
            </div>
            <div className="glassmorphism px-6 py-3 rounded-lg">
              <span className="text-neon font-semibold">Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Core <span className="text-neon">Advantages</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreAdvantages.map((advantage, index) => (
              <div key={index} className="glassmorphism p-8 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-6">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-300 mb-6">{advantage.description}</p>
                <ul className="space-y-2">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-neon mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Competitive <span className="text-neon">Edge</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${advantage.color} flex items-center justify-center mx-auto mb-6 glassmorphism`}>
                  <span className="text-3xl font-bold text-white">{advantage.metric}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leadership Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Industry <span className="text-neon">Leadership</span>
            </h2>
            <div className="glassmorphism p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {industryLeadership.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Trophy className="w-6 h-6 text-neon flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Proven <span className="text-neon">Results</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {clientSuccessMetrics.map((item, index) => (
              <div key={index} className="text-center glassmorphism p-6 rounded-lg">
                <div className="text-4xl font-bold text-neon mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Synopsyne */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose <span className="text-neon">Synopsyne?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We don't just implement AI solutions—we architect intelligent ecosystems that transform how businesses think, operate, and grow in the digital age.
            </p>
            <div className="glassmorphism p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <Users className="w-8 h-8 text-neon" />
                  <span className="text-xl text-white">Expert Team of Neural Architects</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Target className="w-8 h-8 text-neon" />
                  <span className="text-xl text-white">Customized Solutions for Every Industry</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Rocket className="w-8 h-8 text-neon" />
                  <span className="text-xl text-white">Future-Ready Technology Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="glassmorphism p-12 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Synopsyne Advantage
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of industry leaders who've transformed their business with our neural intelligence solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-border px-8 py-4 rounded-lg text-neon hover:bg-cyan-500/10 transition-all text-lg font-semibold flex items-center justify-center">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-white hover:shadow-lg transition-all text-lg font-semibold">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Advantage;
