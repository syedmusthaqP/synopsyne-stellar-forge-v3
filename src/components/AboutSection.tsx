
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Link, TrendingUp, Gem, Handshake, Target, Rocket, Lightbulb, Globe } from 'lucide-react';

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeDNA, setActiveDNA] = useState(-1);
  const [activeAdvantage, setActiveAdvantage] = useState(-1);
  const [activeProofPoint, setActiveProofPoint] = useState(-1);
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

  const timelineItems = [
    {
      year: "2024",
      title: "The Spark",
      subtitle: "Genesis",
      description: "Born from late-night conversations between minds that refused to accept 'that's just how it's done.' We saw gaps where others saw walls.",
      color: "from-cyan-400 to-blue-500",
      position: { x: 20, y: 30 }
    },
    {
      year: "Today",
      title: "The Synapse",
      subtitle: "Evolution",
      description: "We've evolved from idea to impact, creating solutions that don't just solve problems—they redefine possibilities.",
      color: "from-blue-500 to-purple-500",
      position: { x: 50, y: 50 }
    },
    {
      year: "Tomorrow",
      title: "The Symphony",
      subtitle: "Revolution",
      description: "Building toward a future where technology amplifies human potential rather than replacing it.",
      color: "from-purple-500 to-pink-500",
      position: { x: 80, y: 30 }
    }
  ];

  const dnaNodes = [
    {
      icon: Brain,
      title: "Cognitive Architecture",
      subtitle: "Thinking Together",
      description: "We think differently because we think together. Our team operates like a neural network—each connection strengthening the whole.",
      position: { x: 25, y: 35 },
      connections: [1, 2]
    },
    {
      icon: Zap,
      title: "Dynamic Adaptation",
      subtitle: "Evolutionary Response",
      description: "Static solutions die quickly. We build systems that learn, evolve, and anticipate change before it happens.",
      position: { x: 75, y: 25 },
      connections: [0, 2]
    },
    {
      icon: Link,
      title: "Synthesis Philosophy",
      subtitle: "Exponential Fusion",
      description: "We don't just combine technologies; we synthesize them into something entirely new. The whole becomes exponentially greater than its parts.",
      position: { x: 50, y: 70 },
      connections: [0, 1]
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
      position: { x: 30, y: 20 },
      connections: [0, 3]
    },
    {
      icon: Rocket,
      title: "Speed Without Sacrifice",
      description: "We move at startup velocity while maintaining enterprise reliability. Fast doesn't mean fragile in our world.",
      position: { x: 70, y: 20 },
      connections: [1, 2]
    },
    {
      icon: Lightbulb,
      title: "Research-Rooted Reality",
      description: "Every solution is grounded in cognitive science principles and proven through real-world application.",
      position: { x: 50, y: 40 },
      connections: [0, 1, 2, 3, 4]
    },
    {
      icon: Globe,
      title: "Global Thinking, Local Feeling",
      description: "We build for scale but optimize for the individual experience within that scale.",
      position: { x: 50, y: 70 },
      connections: [3, 4]
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden min-h-screen">
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

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ABOUT US SECTION */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center text-neon text-sm mb-8 animate-float">
            <Brain className="w-4 h-4 mr-2" />
            <span>Where Synapses Meet Systems</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-white mb-16 leading-none">
            The <span className="text-neon animate-text-glow relative">
              Neural
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-2xl"></div>
            </span> Bridge
          </h2>

          <div className="max-w-4xl mx-auto relative">
            <p className="text-2xl text-gray-300 leading-relaxed font-light">
              At Synopsyne Dynamics, we exist at the intersection of human intuition and digital precision. 
              Our name isn't just clever wordplay—it's our philosophy. Like synapses firing in perfect harmony 
              to create thought, we connect disparate elements to spark innovation.
            </p>
            
            {/* Flowing decoration lines */}
            <svg className="absolute -top-10 -left-10 w-32 h-32 opacity-30" viewBox="0 0 100 100">
              <path d="M10,50 Q50,10 90,50 Q50,90 10,50" stroke="url(#gradient1)" strokeWidth="2" fill="none" className="animate-neural-pulse"/>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Origin Story - Flowing Timeline */}
        <div className="mb-40">
          <h3 className="text-4xl font-bold text-white text-center mb-8">The Origin Story</h3>
          <p className="text-xl text-neon text-center mb-20 font-medium">Genesis → Evolution → Revolution</p>

          <div className="relative max-w-7xl mx-auto h-96">
            {/* Flowing connection path */}
            <svg className="absolute inset-0 w-full h-full">
              <path 
                d={`M ${timelineItems[0].position.x}% ${timelineItems[0].position.y}% Q 50% 20% ${timelineItems[1].position.x}% ${timelineItems[1].position.y}% Q 70% 60% ${timelineItems[2].position.x}% ${timelineItems[2].position.y}%`}
                stroke="url(#timelineGradient)" 
                strokeWidth="3" 
                fill="none"
                className="animate-synaptic-fire"
              />
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Timeline nodes */}
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                  activeTimeline === index ? 'scale-110 z-20' : 'scale-100 z-10'
                }`}
                style={{ left: `${item.position.x}%`, top: `${item.position.y}%` }}
                onMouseEnter={() => setActiveTimeline(index)}
                onMouseLeave={() => setActiveTimeline(-1)}
              >
                {/* Organic shape container */}
                <div className={`relative p-8 text-center transition-all duration-500 ${
                  activeTimeline === index ? 'transform scale-105' : ''
                }`}>
                  {/* Organic background shape */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 blur-xl rounded-full transform rotate-12`}></div>
                  <div className="absolute inset-2 bg-black/30 backdrop-blur-sm rounded-full border border-white/20"></div>
                  
                  <div className="relative z-10">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                      {item.year}
                    </div>
                    <div className="text-xl font-semibold text-white mb-2">{item.title}</div>
                    <div className="text-neon text-sm mb-4">{item.subtitle}</div>
                    
                    {activeTimeline === index && (
                      <div className="animate-fade-in">
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our DNA - Organic Neural Network */}
        <div className="mb-40">
          <h3 className="text-4xl font-bold text-white text-center mb-8">Our <span className="text-neon">DNA</span></h3>
          <p className="text-lg text-gray-300 text-center mb-20">Interactive Neural Network Visualization</p>

          <div className="relative max-w-6xl mx-auto h-96">
            {/* Neural connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {dnaNodes.map((node, index) => 
                node.connections.map(connIndex => (
                  <line
                    key={`${index}-${connIndex}`}
                    x1={`${node.position.x}%`}
                    y1={`${node.position.y}%`}
                    x2={`${dnaNodes[connIndex].position.x}%`}
                    y2={`${dnaNodes[connIndex].position.y}%`}
                    stroke="rgba(0, 212, 255, 0.6)"
                    strokeWidth="2"
                    className={`transition-all duration-500 ${
                      activeDNA === index || activeDNA === connIndex ? 'animate-synaptic-fire opacity-100' : 'opacity-30'
                    }`}
                  />
                ))
              )}
            </svg>

            {/* DNA nodes with organic shapes */}
            {dnaNodes.map((node, index) => (
              <div
                key={index}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group"
                style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
                onMouseEnter={() => setActiveDNA(index)}
                onMouseLeave={() => setActiveDNA(-1)}
              >
                {/* Organic pulsing background */}
                <div className="absolute inset-0 w-48 h-48 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-neural-pulse"></div>
                
                <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/20 max-w-sm group-hover:border-neon transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 flex items-center justify-center mr-4 animate-pulse-glow">
                      <node.icon className="w-6 h-6 text-neon" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-neon transition-colors">
                        {node.title}
                      </h4>
                      <p className="text-sm text-neon font-medium">{node.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">{node.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Profile - Organic Layout */}
        <div className="mb-40">
          <div className="relative max-w-6xl mx-auto">
            {/* Flowing background shape */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/10 to-pink-500/5 rounded-full blur-3xl transform rotate-12"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center p-12">
              <div className="lg:col-span-1 text-center">
                {/* Organic profile container */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-pulse-glow"></div>
                  <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center">
                    <Brain className="w-24 h-24 text-neon" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">Syed Musthaq</h4>
                <p className="text-neon font-medium">Founder & Neural Architect</p>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Syed didn't just found Synopsyne Dynamics; he architected it from first principles. With a mind that naturally bridges the gap between human intuition and digital precision, Syed recognized that the future belongs to those who can synthesize complexity into elegant solutions.
                </p>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  His approach to innovation mirrors the very neural networks that inspire our company—making connections across disciplines, industries, and paradigms that others see as separate. Under his leadership, Synopsyne Dynamics has evolved from concept to catalyst, transforming how organizations think about technology integration.
                </p>

                <div>
                  <h5 className="text-2xl font-bold text-neon mb-6">The Musthaq Method:</h5>
                  <div className="space-y-4">
                    {[
                      "Pattern Recognition: Identifying opportunities where others see obstacles",
                      "Synthesis Thinking: Combining disparate elements to create breakthrough solutions",
                      "Anticipatory Leadership: Building for tomorrow's challenges with today's foundations",
                      "Human-Centric Innovation: Technology that amplifies rather than replaces human potential"
                    ].map((method, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-3 h-3 rounded-full bg-neon mt-2 mr-4 animate-pulse"></div>
                        <p className="text-gray-300 group-hover:text-white transition-colors text-lg">{method}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Ethos */}
        <div className="mb-40 text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="relative p-16">
              <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
                "We're not just building a company—we're <span className="text-neon">architecting</span> the future's nervous system."
              </blockquote>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Led by Syed's vision, our team operates like a neural network—each connection strengthening the whole. Our developers aren't just coders; they're digital neuroscientists. Our designers aren't just creative minds; they're experience architects. Together, we form a cognitive ecosystem that thinks, adapts, and innovates as one.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none">
            The <span className="text-neon animate-text-glow relative">
              Synopsyne
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-2xl"></div>
            </span> Advantage
          </h2>
          <p className="text-3xl text-gray-300 font-light">We don't compete—we create new categories.</p>
        </div>

        {/* The Five Synaptic Advantages - Organic Constellation */}
        <div className="mb-40">
          <h3 className="text-4xl font-bold text-white text-center mb-8">The Five Synaptic Advantages</h3>
          <p className="text-lg text-gray-300 text-center mb-20">Interactive Synaptic Constellation</p>

          <div className="relative max-w-7xl mx-auto h-[700px]">
            {/* Dynamic constellation background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Neural connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {activeAdvantage >= 0 && advantages[activeAdvantage].connections.map((connIndex) => (
                <line
                  key={`${activeAdvantage}-${connIndex}`}
                  x1={`${advantages[activeAdvantage].position.x}%`}
                  y1={`${advantages[activeAdvantage].position.y}%`}
                  x2={`${advantages[connIndex].position.x}%`}
                  y2={`${advantages[connIndex].position.y}%`}
                  stroke="rgba(0, 212, 255, 0.8)"
                  strokeWidth="3"
                  className="animate-synaptic-fire"
                />
              ))}
            </svg>

            {/* Advantage nodes with organic shapes */}
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group"
                style={{ left: `${advantage.position.x}%`, top: `${advantage.position.y}%` }}
                onClick={() => setActiveAdvantage(activeAdvantage === index ? -1 : index)}
                onMouseEnter={() => setActiveAdvantage(index)}
                onMouseLeave={() => setActiveAdvantage(-1)}
              >
                {/* Organic pulsing aura */}
                <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-neural-pulse"></div>
                
                <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-md group-hover:border-neon transition-all">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 flex items-center justify-center mr-4 animate-pulse-glow">
                      <advantage.icon className="w-8 h-8 text-neon" />
                    </div>
                    <div className="text-4xl">{advantage.emoji}</div>
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
                    <div className="space-y-3 animate-fade-in">
                      {advantage.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-neon mt-2 mr-3 animate-pulse"></div>
                          <p className="text-sm text-gray-300 leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 text-sm mt-8 italic">
            Hover over any advantage to see glowing pathways connecting to related advantages. Click to expand detailed connections.
          </p>
        </div>

        {/* The Proof Points - Flowing Evidence Web */}
        <div className="mb-40">
          <h3 className="text-4xl font-bold text-white text-center mb-8">The Proof Points</h3>
          <p className="text-lg text-gray-300 text-center mb-20">Interactive Evidence Web</p>

          <div className="relative max-w-6xl mx-auto">
            {/* Flowing grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {proofPoints.map((point, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transition-all duration-500 group"
                  onClick={() => setActiveProofPoint(activeProofPoint === index ? -1 : index)}
                  onMouseEnter={() => setActiveProofPoint(index)}
                  onMouseLeave={() => setActiveProofPoint(-1)}
                >
                  {/* Organic background shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  
                  <div className="relative bg-black/30 backdrop-blur-sm p-8 rounded-3xl border border-white/20 group-hover:border-neon transition-all">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <point.icon className="w-8 h-8 text-neon" />
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-neon transition-colors">
                        {point.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {point.description}
                    </p>

                    {activeProofPoint === index && (
                      <div className="mt-6 pt-6 border-t border-cyan-500/30 animate-fade-in">
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
            Click any proof point to see connections to related advantages above, creating a living demonstration of interconnected value.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="relative p-16">
              <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
                "Choose Synopsyne Dynamics not for what we've built, but for what we'll <span className="text-neon">discover</span> together."
              </blockquote>
              
              <p className="text-xl text-gray-300 leading-relaxed">
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
  );
};

export default AboutSection;
