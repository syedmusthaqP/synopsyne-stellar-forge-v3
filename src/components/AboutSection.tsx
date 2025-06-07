
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Link, TrendingUp, Gem, Handshake, Target, Rocket, Lightbulb, Globe } from 'lucide-react';

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeDNA, setActiveDNA] = useState(-1);
  const [activeAdvantage, setActiveAdvantage] = useState(-1);
  const [activeProofPoint, setActiveProofPoint] = useState(-1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [constellationRotation, setConstellationRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const rotationInterval = setInterval(() => {
      setConstellationRotation(prev => (prev + 0.5) % 360);
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(rotationInterval);
    };
  }, []);

  const timelineItems = [
    {
      year: "2024",
      title: "The Spark",
      subtitle: "Genesis",
      description: "Born from late-night conversations between minds that refused to accept 'that's just how it's done.' We saw gaps where others saw walls.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      year: "Today",
      title: "The Synapse",
      subtitle: "Evolution",
      description: "We've evolved from idea to impact, creating solutions that don't just solve problems—they redefine possibilities.",
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "Tomorrow",
      title: "The Symphony",
      subtitle: "Revolution",
      description: "Building toward a future where technology amplifies human potential rather than replacing it.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const dnaNodes = [
    {
      icon: Brain,
      title: "Cognitive Architecture",
      subtitle: "Connection Node: Thinking Together",
      description: "We think differently because we think together. Our team operates like a neural network—each connection strengthening the whole.",
      position: { x: 25, y: 30 }
    },
    {
      icon: Zap,
      title: "Dynamic Adaptation",
      subtitle: "Connection Node: Evolutionary Response",
      description: "Static solutions die quickly. We build systems that learn, evolve, and anticipate change before it happens.",
      position: { x: 75, y: 25 }
    },
    {
      icon: Brain,
      title: "Synthesis Philosophy",
      subtitle: "Connection Node: Exponential Fusion",
      description: "We don't just combine technologies; we synthesize them into something entirely new. The whole becomes exponentially greater than its parts.",
      position: { x: 50, y: 75 }
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Predictive Innovation",
      emoji: "⚡",
      pattern: "Future-Backward Synapses",
      headline: "While others react to trends, we create them.",
      features: [
        "Neuromorphic Problem-Solving: We approach challenges like the human brain—through pattern recognition and adaptive learning",
        "Future-Backward Design: We start with tomorrow's needs and engineer backward to today's solutions",
        "Anticipatory Architecture: Our systems evolve with your growth, not against it"
      ],
      position: { x: 50, y: 20 },
      connections: [1, 3]
    },
    {
      icon: Link,
      title: "Symbiotic Integration",
      emoji: "🔗",
      pattern: "Ecosystem Synapses",
      headline: "We don't build islands; we create ecosystems.",
      features: [
        "Seamless Synthesis: Our solutions integrate so naturally, you'll forget where your existing systems end and ours begin",
        "Living Interfaces: Technology that adapts to human behavior rather than forcing behavior to adapt to technology",
        "Cross-Platform Fluency: We speak every digital language and make them all work together"
      ],
      position: { x: 80, y: 40 },
      connections: [0, 2, 4]
    },
    {
      icon: TrendingUp,
      title: "Cognitive Scaling",
      emoji: "📈",
      pattern: "Exponential Growth Synapses",
      headline: "Growth shouldn't mean growing pains.",
      features: [
        "Intelligence That Compounds: Our systems get smarter as they scale, not more complex",
        "Elastic Architecture: Solutions that breathe with your business rhythms",
        "Wisdom Accumulation: Every interaction makes the entire system more intelligent"
      ],
      position: { x: 65, y: 75 },
      connections: [1, 3, 4]
    },
    {
      icon: Gem,
      title: "Transparent Complexity",
      emoji: "💎",
      pattern: "Elegant Simplicity Synapses",
      headline: "Sophisticated solutions with elegant simplicity.",
      features: [
        "Invisible Complexity: The most powerful systems are the ones you don't have to think about",
        "Intuitive Interfaces: If it needs a manual, we haven't finished building it",
        "Graceful Performance: Our solutions work so smoothly, they feel like magic"
      ],
      position: { x: 35, y: 75 },
      connections: [0, 2, 4]
    },
    {
      icon: Handshake,
      title: "Partnership Paradigm",
      emoji: "🤝",
      pattern: "Co-Evolution Synapses",
      headline: "We don't have clients—we have co-evolutionaries.",
      features: [
        "Shared Success Metrics: Your wins are our wins, your challenges are our puzzles to solve",
        "Continuous Calibration: We don't deliver and disappear; we grow alongside you",
        "Innovation Partnership: You bring the vision, we bring the impossible-made-possible"
      ],
      position: { x: 20, y: 40 },
      connections: [1, 2, 3]
    }
  ];

  const proofPoints = [
    {
      icon: Target,
      title: "Precision Without Rigidity",
      description: "Our solutions hit targets that haven't been set yet while remaining flexible enough to pivot with purpose.",
      connections: [0, 3] // Connects to Predictive Innovation + Transparent Complexity
    },
    {
      icon: Rocket,
      title: "Speed Without Sacrifice",
      description: "We move at startup velocity while maintaining enterprise reliability. Fast doesn't mean fragile in our world.",
      connections: [1, 2] // Connects to Symbiotic Integration + Cognitive Scaling
    },
    {
      icon: Lightbulb,
      title: "Research-Rooted Reality",
      description: "Every solution is grounded in cognitive science principles and proven through real-world application.",
      connections: [0, 1, 2, 3, 4] // Connects to all advantages
    },
    {
      icon: Globe,
      title: "Global Thinking, Local Feeling",
      description: "We build for scale but optimize for the individual experience within that scale.",
      connections: [3, 4] // Connects to Partnership Paradigm + Transparent Complexity
    }
  ];

  const musthaqMethods = [
    "Pattern Recognition: Identifying opportunities where others see obstacles",
    "Synthesis Thinking: Combining disparate elements to create breakthrough solutions",
    "Anticipatory Leadership: Building for tomorrow's challenges with today's foundations",
    "Human-Centric Innovation: Technology that amplifies rather than replaces human potential"
  ];

  const renderConnectionLines = (fromNodes: any[], toNodes: any[], activeIndex: number, connections: number[]) => {
    if (activeIndex === -1) return null;
    
    const fromNode = fromNodes[activeIndex];
    if (!fromNode) return null;

    return connections.map((connectionIndex) => {
      const toNode = toNodes[connectionIndex];
      if (!toNode) return null;

      return (
        <line
          key={`${activeIndex}-${connectionIndex}`}
          x1={`${fromNode.position.x}%`}
          y1={`${fromNode.position.y}%`}
          x2={`${toNode.position.x}%`}
          y2={`${toNode.position.y}%`}
          stroke="rgba(0, 212, 255, 0.8)"
          strokeWidth="3"
          className="animate-synaptic-fire"
        />
      );
    });
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Dynamic gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)`
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ABOUT US SECTION: The Neural Bridge */}
        
        {/* Opening Hook */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
            <Brain className="w-4 h-4 text-neon mr-2" />
            <span className="text-white text-sm">Where Synapses Meet Systems</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            The <span className="text-neon animate-text-glow">Neural</span> Bridge
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
            <div className="relative glassmorphism p-8 rounded-lg">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Synopsyne Dynamics, we exist at the intersection of human intuition and digital precision. 
                Our name isn't just clever wordplay—it's our philosophy. Like synapses firing in perfect harmony 
                to create thought, we connect disparate elements to spark innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Timeline - The Origin Story */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-white text-center mb-4">The Origin Story</h3>
          <p className="text-lg text-neon text-center mb-16 font-medium">Genesis → Evolution → Revolution</p>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    activeTimeline === index ? 'scale-105' : 'scale-95 opacity-70'
                  }`}
                  onClick={() => setActiveTimeline(index)}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg z-10 animate-pulse`}></div>
                  
                  <div className="glassmorphism p-8 rounded-xl mt-12 hover:neon-border transition-all">
                    <div className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                        {item.year}
                      </div>
                      <div className="text-xl font-semibold text-white mb-2">{item.title}</div>
                      <div className="text-neon text-sm mb-4">{item.subtitle}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our DNA - Interactive Neural Network Visualization */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Our <span className="text-neon">DNA</span></h3>
          <p className="text-lg text-gray-300 text-center mb-16">Interactive Neural Network Visualization</p>

          <div className="relative max-w-6xl mx-auto h-96">
            <div className="absolute inset-0 neural-bg"></div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {dnaNodes.map((node, index) => (
                dnaNodes.slice(index + 1).map((targetNode, targetIndex) => (
                  <line
                    key={`${index}-${targetIndex}`}
                    x1={`${node.position.x}%`}
                    y1={`${node.position.y}%`}
                    x2={`${targetNode.position.x}%`}
                    y2={`${targetNode.position.y}%`}
                    stroke="rgba(0, 212, 255, 0.3)"
                    strokeWidth="2"
                    className={`transition-all duration-500 ${activeDNA === index || activeDNA === (index + targetIndex + 1) ? 'opacity-100 animate-synaptic-fire' : 'opacity-30'}`}
                  />
                ))
              )).flat()}
            </svg>

            {/* DNA Nodes */}
            {dnaNodes.map((node, index) => (
              <div
                key={index}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  activeDNA === index ? 'scale-110 z-20' : 'scale-100 z-10'
                }`}
                style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
                onMouseEnter={() => setActiveDNA(index)}
                onMouseLeave={() => setActiveDNA(-1)}
              >
                <div className={`glassmorphism p-6 rounded-xl hover:neon-border transition-all group max-w-sm ${
                  activeDNA === index ? 'neon-border' : ''
                }`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-neural-pulse">
                    <node.icon className="w-8 h-8 text-neon" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-neon transition-colors">
                    {node.title}
                  </h4>
                  
                  <p className="text-sm text-neon mb-3 font-medium">
                    {node.subtitle}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {node.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 text-sm mt-8 italic">
            Interactive web of connecting nodes with pulsing synapses. Hover on any node to see how it connects to others, creating a living visualization of interconnected thinking.
          </p>
        </div>

        {/* Founder Profile - Syed Musthaq */}
        <div className="mb-32">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-2xl"></div>
            <div className="relative glassmorphism p-12 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-48 h-48 mx-auto rounded-full glassmorphism flex items-center justify-center animate-pulse-glow">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white text-center mt-6 mb-2">Syed Musthaq</h4>
                  <p className="text-neon text-center font-medium">Founder & Neural Architect</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Syed didn't just found Synopsyne Dynamics; he architected it from first principles. With a mind that naturally bridges the gap between human intuition and digital precision, Syed recognized that the future belongs to those who can synthesize complexity into elegant solutions.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    His approach to innovation mirrors the very neural networks that inspire our company—making connections across disciplines, industries, and paradigms that others see as separate. Under his leadership, Synopsyne Dynamics has evolved from concept to catalyst, transforming how organizations think about technology integration.
                  </p>

                  <div>
                    <h5 className="text-xl font-bold text-neon mb-4">The Musthaq Method:</h5>
                    <div className="space-y-3">
                      {musthaqMethods.map((method, index) => (
                        <div key={index} className="glassmorphism p-4 rounded-lg hover:neon-border transition-all group">
                          <div className="text-gray-300 group-hover:text-white transition-colors">
                            {method}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Ethos */}
        <div className="mb-32 text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-2xl"></div>
            <div className="relative glassmorphism p-12 rounded-xl">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                "We're not just building a company—we're <span className="text-neon">architecting</span> the future's nervous system."
              </blockquote>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Led by Syed's vision, our team operates like a neural network—each connection strengthening the whole. Our developers aren't just coders; they're digital neuroscientists. Our designers aren't just creative minds; they're experience architects. Together, we form a cognitive ecosystem that thinks, adapts, and innovates as one.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION: The Synopsyne Advantage */}
        
        {/* Lead Statement */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            The <span className="text-neon animate-text-glow">Synopsyne</span> Advantage
          </h2>
          <p className="text-2xl text-gray-300 font-medium">We don't compete—we create new categories.</p>
        </div>

        {/* The Five Synaptic Advantages - Interactive Synaptic Constellation */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-white text-center mb-8">The Five Synaptic Advantages</h3>
          <p className="text-lg text-gray-300 text-center mb-16">Interactive Synaptic Constellation</p>

          <div 
            className="relative max-w-6xl mx-auto h-[600px]"
            style={{ transform: `rotate(${constellationRotation * 0.1}deg)` }}
          >
            {/* Constellation Background */}
            <div className="absolute inset-0 neural-bg"></div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {renderConnectionLines(advantages, advantages, activeAdvantage, activeAdvantage >= 0 ? advantages[activeAdvantage].connections : [])}
            </svg>

            {/* Advantage Nodes */}
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  activeAdvantage === index ? 'scale-110 z-20' : 'scale-100 z-10'
                }`}
                style={{ left: `${advantage.position.x}%`, top: `${advantage.position.y}%` }}
                onClick={() => setActiveAdvantage(activeAdvantage === index ? -1 : index)}
                onMouseEnter={() => setActiveAdvantage(index)}
                onMouseLeave={() => setActiveAdvantage(-1)}
              >
                <div className={`glassmorphism p-6 rounded-xl hover:neon-border transition-all group max-w-md ${
                  activeAdvantage === index ? 'neon-border' : ''
                }`}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform animate-neural-pulse">
                      <advantage.icon className="w-8 h-8 text-neon" />
                    </div>
                    <div className="text-3xl">{advantage.emoji}</div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
                    {advantage.title}
                  </h4>
                  
                  <p className="text-sm text-neon mb-3 font-medium">
                    Neural Pattern: {advantage.pattern}
                  </p>
                  
                  <p className="text-gray-300 font-medium mb-4">
                    {advantage.headline}
                  </p>

                  {activeAdvantage === index && (
                    <div className="space-y-2 animate-fade-in">
                      {advantage.features.map((feature, featureIndex) => (
                        <p key={featureIndex} className="text-sm text-gray-300 leading-relaxed">
                          • {feature}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 text-sm mt-8 italic">
            Hover over any advantage to see glowing pathways connecting to related advantages. Click to expand detailed connections. The constellation rotates slowly, showing the dynamic relationship between all five elements.
          </p>
        </div>

        {/* The Proof Points - Interactive Evidence Web */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-white text-center mb-8">The Proof Points</h3>
          <p className="text-lg text-gray-300 text-center mb-16">Interactive Evidence Web</p>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proofPoints.map((point, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    activeProofPoint === index ? 'scale-105' : 'scale-100'
                  }`}
                  onClick={() => setActiveProofPoint(activeProofPoint === index ? -1 : index)}
                  onMouseEnter={() => setActiveProofPoint(index)}
                  onMouseLeave={() => setActiveProofPoint(-1)}
                >
                  <div className={`glassmorphism p-8 rounded-xl hover:neon-border transition-all group ${
                    activeProofPoint === index ? 'neon-border' : ''
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <point.icon className="w-6 h-6 text-neon" />
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-neon transition-colors">
                        {point.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {point.description}
                    </p>

                    {activeProofPoint === index && (
                      <div className="mt-4 pt-4 border-t border-cyan-500/30 animate-fade-in">
                        <p className="text-sm text-neon font-medium">
                          Connects to: {point.connections.map(conn => advantages[conn]?.title).join(' + ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-300 text-sm mt-8 italic">
            Click any proof point to see animated connections to related advantages above, creating a living demonstration of interconnected value.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-2xl"></div>
            <div className="relative glassmorphism p-12 rounded-xl">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                "Choose Synopsyne Dynamics not for what we've built, but for what we'll <span className="text-neon">discover</span> together."
              </blockquote>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                The future isn't something that happens to you—it's something you actively create. We're not just service providers; we're co-architects of tomorrow's digital nervous system. When you choose us, you're not buying a solution—you're investing in evolution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Neural Network Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400 animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-blue-400 animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-400 animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-pink-400 animate-pulse opacity-30" style={{animationDelay: '3s'}}></div>
    </section>
  );
};

export default AboutSection;
