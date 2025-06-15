
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Sparkles, Network, TrendingUp, Crown, Handshake } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeAdvantage, setActiveAdvantage] = useState(-1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [neuralPulse, setNeuralPulse] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const pulseInterval = setInterval(() => {
      setNeuralPulse(prev => (prev + 1) % 5);
    }, 2000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(pulseInterval);
    };
  }, []);

  const advantages = [
    {
      icon: Sparkles,
      title: "Predictive Innovation",
      emoji: "⚡",
      pattern: "Future-Backward Synapses",
      headline: "While others react to trends, we create them.",
      description: "Neural problem-solving that anticipates tomorrow's challenges and builds solutions today.",
      features: [
        "Neuromorphic Problem-Solving: We approach challenges like the human brain—through pattern recognition and adaptive learning",
        "Future-Backward Design: We start with tomorrow's needs and engineer backward to today's solutions",
        "Anticipatory Architecture: Our systems evolve with your growth, not against it"
      ],
      position: { x: 50, y: 20 },
      color: "from-blue-400 to-cyan-500",
      connections: [1, 4]
    },
    {
      icon: Network,
      title: "Symbiotic Integration",
      emoji: "🔗",
      pattern: "Ecosystem Synapses",
      headline: "We don't build islands; we create ecosystems.",
      description: "Seamless technology fusion that feels like it was always part of your workflow.",
      features: [
        "Seamless Synthesis: Our solutions integrate so naturally, you'll forget where your existing systems end and ours begin",
        "Living Interfaces: Technology that adapts to human behavior rather than forcing behavior to adapt to technology",
        "Cross-Platform Fluency: We speak every digital language and make them all work together"
      ],
      position: { x: 85, y: 40 },
      color: "from-purple-400 to-pink-500",
      connections: [0, 2]
    },
    {
      icon: TrendingUp,
      title: "Cognitive Scaling",
      emoji: "📈",
      pattern: "Exponential Growth Synapses",
      headline: "Growth shouldn't mean growing pains.",
      description: "Intelligence that compounds as you scale, creating exponential value multiplication.",
      features: [
        "Intelligence That Compounds: Our systems get smarter as they scale, not more complex",
        "Elastic Architecture: Solutions that breathe with your business rhythms",
        "Wisdom Accumulation: Every interaction makes the entire system more intelligent"
      ],
      position: { x: 70, y: 75 },
      color: "from-green-400 to-emerald-500",
      connections: [1, 3]
    },
    {
      icon: Crown,
      title: "Transparent Complexity",
      emoji: "💎",
      pattern: "Elegant Simplicity Synapses",
      headline: "Sophisticated solutions with elegant simplicity.",
      description: "Advanced technology that feels intuitive, powerful systems that work like magic.",
      features: [
        "Invisible Complexity: The most powerful systems are the ones you don't have to think about",
        "Intuitive Interfaces: If it needs a manual, we haven't finished building it",
        "Graceful Performance: Our solutions work so smoothly, they feel like magic"
      ],
      position: { x: 30, y: 75 },
      color: "from-amber-400 to-orange-500",
      connections: [2, 4]
    },
    {
      icon: Handshake,
      title: "Partnership Paradigm",
      emoji: "🤝",
      pattern: "Co-Evolution Synapses",
      headline: "We don't have clients—we have co-evolutionaries.",
      description: "True partnership where your success becomes our shared mission and innovation pathway.",
      features: [
        "Shared Success Metrics: Your wins are our wins, your challenges are our puzzles to solve",
        "Continuous Calibration: We don't deliver and disappear; we grow alongside you",
        "Innovation Partnership: You bring the vision, we bring the impossible-made-possible"
      ],
      position: { x: 15, y: 40 },
      color: "from-violet-400 to-purple-500",
      connections: [0, 3]
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
      
      {/* Dynamic Neural Background */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.2) 0%, transparent 40%),
            radial-gradient(circle at ${100-mousePosition.x}% ${100-mousePosition.y}%, rgba(147, 51, 234, 0.2) 0%, transparent 40%),
            conic-gradient(from ${neuralPulse * 72}deg at 50% 50%, rgba(0, 212, 255, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(0, 212, 255, 0.1))
          `
        }}
      ></div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Why Choose <span className="text-neon animate-text-glow">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover what sets Synopsyne Dynamics apart in the digital transformation landscape
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* WHY CHOOSE US SECTION */}
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-none">
              The <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-text-glow relative">
                Synopsyne
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-20 blur-2xl"></div>
              </span> Advantage
            </h2>
            <p className="text-sm text-gray-400 font-light">We don't compete—we create new categories.</p>
          </div>

          {/* The Five Synaptic Advantages - Enhanced with Neural Paths */}
          <div className="mb-40">
            <h3 className="text-4xl font-bold text-white text-center mb-8">The Five Synaptic Advantages</h3>
            <p className="text-lg text-gray-300 text-center mb-20">Neural Innovation Constellation</p>

            <div className="relative max-w-7xl mx-auto">
              {/* Neural Grid Background */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <svg width="100%" height="100%" className="absolute inset-0">
                  <defs>
                    <pattern id="neuralGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <circle cx="50" cy="50" r="2" fill="rgb(6, 182, 212)" opacity="0.5">
                        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <line x1="50" y1="50" x2="100" y2="50" stroke="rgb(6, 182, 212)" strokeWidth="1" opacity="0.3" />
                      <line x1="50" y1="50" x2="50" y2="100" stroke="rgb(6, 182, 212)" strokeWidth="1" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#neuralGrid)" />
                </svg>
              </div>

              {/* Neural Path Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {advantages.map((advantage, index) => 
                  advantage.connections.map(connIndex => (
                    <g key={`${index}-${connIndex}`}>
                      {/* Rectangular neural path background */}
                      <rect
                        x={Math.min(advantage.position.x, advantages[connIndex].position.x) - 5 + '%'}
                        y={Math.min(advantage.position.y, advantages[connIndex].position.y) - 5 + '%'}
                        width={Math.abs(advantage.position.x - advantages[connIndex].position.x) + 10 + '%'}
                        height={Math.abs(advantage.position.y - advantages[connIndex].position.y) + 10 + '%'}
                        fill="rgba(0, 212, 255, 0.03)"
                        stroke="rgba(0, 212, 255, 0.15)"
                        strokeWidth="1"
                        rx="12"
                        className={`transition-all duration-500 ${
                          activeAdvantage === index || activeAdvantage === connIndex ? 'opacity-100' : 'opacity-40'
                        }`}
                      />
                      {/* Connection line */}
                      <line
                        x1={`${advantage.position.x}%`}
                        y1={`${advantage.position.y}%`}
                        x2={`${advantages[connIndex].position.x}%`}
                        y2={`${advantages[connIndex].position.y}%`}
                        stroke="rgba(0, 212, 255, 0.6)"
                        strokeWidth="2"
                        className={`transition-all duration-500 ${
                          activeAdvantage === index || activeAdvantage === connIndex ? 'animate-synaptic-fire opacity-100' : 'opacity-30'
                        }`}
                      />
                    </g>
                  ))
                )}
              </svg>

              {/* Advantage Cards in Neural Formation */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer transition-all duration-700 group ${
                      activeAdvantage === index ? 'scale-105 z-50' : 'z-10'
                    } ${index === 2 ? 'lg:col-start-2' : ''}`}
                    onClick={() => setActiveAdvantage(activeAdvantage === index ? -1 : index)}
                    onMouseEnter={() => setActiveAdvantage(index)}
                    onMouseLeave={() => setActiveAdvantage(-1)}
                  >
                    {/* Neural Aura */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-20 rounded-3xl blur-2xl transition-all duration-700 ${
                      activeAdvantage === index ? 'scale-110 opacity-40' : ''
                    }`}></div>
                    
                    {/* Synaptic Connections */}
                    {activeAdvantage === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    )}
                    
                    <div className={`relative bg-black/40 backdrop-blur-sm p-8 rounded-3xl border transition-all duration-500 ${
                      activeAdvantage === index ? 'border-cyan-400 shadow-2xl' : 'border-white/20 group-hover:border-cyan-400/50'
                    }`}>
                      {/* Neural Header */}
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${advantage.color} bg-opacity-30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                          <advantage.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl">{advantage.emoji}</div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {advantage.title}
                      </h4>
                      
                      <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent`}>
                        Neural Pattern: {advantage.pattern}
                      </p>
                      
                      <p className="text-gray-300 font-medium mb-4 leading-relaxed">
                        {advantage.headline}
                      </p>

                      <p className="text-gray-400 text-sm mb-4">
                        {advantage.description}
                      </p>

                      {activeAdvantage === index && (
                        <div className="space-y-3 animate-fade-in border-t border-cyan-500/30 pt-6">
                          <div className="text-sm font-semibold text-cyan-400 mb-3">Neural Pathways:</div>
                          {advantage.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3 animate-pulse"></div>
                              <p className="text-sm text-gray-300 leading-relaxed">{feature}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-300 text-sm mt-12 italic">
                Click any advantage to expand neural pathways and see detailed synaptic connections.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
              <div className="relative p-16">
                <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
                  "Choose Synopsyne Dynamics not for what we've built, but for what we'll <span className="text-neon">discover</span> together."
                </blockquote>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  The future isn't something that happens to you—it's something you actively create. We're not just service providers; we're co-architects of tomorrow's digital nervous system. When you choose us, you're not buying a solution—you're investing in evolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating organic elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          ></div>
        ))}
      </section>
      
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
