import React, { useState, useEffect } from 'react';
import { Brain, Zap, Link, TrendingUp, Gem, Handshake, Target, Rocket, Lightbulb, Globe, Eye, Layers, Users, Compass, Sparkles, Network, Shield, Crown, Atom } from 'lucide-react';

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeDNA, setActiveDNA] = useState(-1);
  const [activeProofPoint, setActiveProofPoint] = useState(-1);
  const [activeMethod, setActiveMethod] = useState(-1);
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
      position: { x: 25, y: 25 },
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
      position: { x: 50, y: 85 },
      connections: [0, 1]
    }
  ];

  const methodNodes = [
    {
      icon: Eye,
      title: "Pattern Recognition",
      description: "Identifying opportunities where others see obstacles",
      position: { x: 20, y: 30 },
      connections: [1, 3]
    },
    {
      icon: Layers,
      title: "Synthesis Thinking", 
      description: "Combining disparate elements to create breakthrough solutions",
      position: { x: 80, y: 30 },
      connections: [0, 2]
    },
    {
      icon: Compass,
      title: "Anticipatory Leadership",
      description: "Building for tomorrow's challenges with today's foundations", 
      position: { x: 80, y: 70 },
      connections: [1, 3]
    },
    {
      icon: Users,
      title: "Human-Centric Innovation",
      description: "Technology that amplifies rather than replaces human potential",
      position: { x: 20, y: 70 },
      connections: [0, 2]
    }
  ];

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

  const proofPoints = [
    {
      icon: Shield,
      title: "Precision Without Rigidity",
      description: "Our solutions hit targets that haven't been set yet while remaining flexible enough to pivot with purpose.",
      neural: "Adaptive targeting systems that learn and evolve with changing requirements.",
      metrics: "99.7% accuracy with 100% adaptability",
      position: { x: 25, y: 25 }
    },
    {
      icon: Rocket,
      title: "Speed Without Sacrifice",
      description: "We move at startup velocity while maintaining enterprise reliability. Fast doesn't mean fragile in our world.",
      neural: "Velocity optimization through neural pathway acceleration and smart caching.",
      metrics: "10x faster deployment, 0% compromise on quality",
      position: { x: 75, y: 25 }
    },
    {
      icon: Atom,
      title: "Research-Rooted Reality",
      description: "Every solution is grounded in cognitive science principles and proven through real-world application.",
      neural: "Science-backed methodologies translated into practical, measurable business outcomes.",
      metrics: "100+ research papers implemented, 1000+ hours of testing",
      position: { x: 25, y: 75 }
    },
    {
      icon: Globe,
      title: "Global Thinking, Local Feeling",
      description: "We build for scale but optimize for the individual experience within that scale.",
      neural: "Fractal architecture that maintains human intimacy at any scale.",
      metrics: "Scales to millions while feeling personal to each user",
      position: { x: 75, y: 75 }
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
        
        {/* THE NEURAL BRIDGE SECTION with increased font size */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center text-neon text-sm mb-8 animate-float">
            <Brain className="w-4 h-4 mr-2" />
            <span>Where Synapses Meet Systems</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-none">
            The <span className="text-neon animate-text-glow relative">
              Neural
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-2xl"></div>
            </span> Bridge
          </h2>

          <div className="max-w-4xl mx-auto relative">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
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

        {/* Origin Story - Flowing Timeline with reduced spacing */}
        <div className="mb-24">
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

            {/* Timeline nodes with consistent design */}
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
                {/* Consistent organic shape container for all items */}
                <div className={`relative p-8 text-center transition-all duration-500 ${
                  activeTimeline === index ? 'transform scale-105' : ''
                }`}>
                  {/* Consistent organic background shape */}
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

        {/* Our DNA - Neural Network - moved up with reduced spacing */}
        <div className="mb-32">
          <h3 className="text-4xl font-bold text-white text-center mb-8">Our <span className="text-neon">DNA</span></h3>
          <p className="text-lg text-gray-300 text-center mb-20">Interactive Neural Network Visualization</p>

          <div className="relative max-w-6xl mx-auto h-[700px]">
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

            {/* DNA nodes with equal sizing */}
            {dnaNodes.map((node, index) => (
              <div
                key={index}
                className="absolute cursor-pointer transition-all duration-500 group"
                style={{ 
                  left: `${node.position.x}%`, 
                  top: `${node.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: activeDNA === index ? 50 : 10,
                  width: '350px',
                  height: '280px'
                }}
                onMouseEnter={() => setActiveDNA(index)}
                onMouseLeave={() => setActiveDNA(-1)}
              >
                {/* Organic pulsing background */}
                <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-neural-pulse -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className={`relative bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/20 w-full h-full flex flex-col justify-between group-hover:border-neon transition-all ${
                  activeDNA === index ? 'scale-105' : ''
                }`}>
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
                  
                  <p className="text-gray-300 leading-relaxed text-sm flex-grow">{node.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Profile - Clean Design */}
        <div className="mb-40">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Visionary Behind the Vision
            </h2>
          </div>

          {/* Main Profile Block */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
              {/* Left Column - Photo */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  {/* Neural network animation around photo */}
                  <div className="absolute inset-0 w-64 h-64 rounded-full">
                    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border border-purple-500/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute inset-8 border border-pink-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Photo placeholder */}
                  <div className="relative w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Brain className="w-24 h-24 text-neon" />
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Syed Musthaq</h3>
                  <p className="text-xl text-neon font-medium mb-6">Founder & Chief Synapse Officer</p>
                </div>

                {/* Enhanced quote with attractive box */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
                  <div className="relative glassmorphism p-6 rounded-lg border border-cyan-400/30">
                    <blockquote className="text-lg text-neon italic border-l-2 border-cyan-400 pl-6">
                      "Every great leap forward starts with seeing patterns others miss. At Synopsyne Dynamics, we don't just connect dots—we discover new constellations."
                    </blockquote>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-base">
                  Syed Musthaq didn't just found Synopsyne Dynamics; he architected it from first principles. With a mind that naturally bridges the gap between human intuition and digital precision, Syed recognized that the future belongs to those who can synthesize complexity into elegant solutions.
                </p>

                <p className="text-gray-300 leading-relaxed text-base">
                  His approach to innovation mirrors the very neural networks that inspire our company—making connections across disciplines, industries, and paradigms that others see as separate. Under his leadership, Synopsyne Dynamics has evolved from concept to catalyst, transforming how organizations think about technology integration.
                </p>
              </div>
            </div>

            {/* The Musthaq Method - Enhanced Neural Network */}
            <div className="relative">
              <h4 className="text-3xl font-bold text-center text-white mb-4">The Musthaq Method</h4>
              <p className="text-center text-neon mb-12">Interactive Neural Network Framework</p>

              <div className="relative max-w-6xl mx-auto h-[600px]">
                {/* Enhanced neural connections with rectangular paths */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {methodNodes.map((node, index) => 
                    node.connections.map(connIndex => (
                      <g key={`${index}-${connIndex}`}>
                        {/* Rectangular neural path */}
                        <rect
                          x={Math.min(node.position.x, methodNodes[connIndex].position.x) + '%'}
                          y={Math.min(node.position.y, methodNodes[connIndex].position.y) + '%'}
                          width={Math.abs(node.position.x - methodNodes[connIndex].position.x) + '%'}
                          height={Math.abs(node.position.y - methodNodes[connIndex].position.y) + '%'}
                          fill="rgba(0, 212, 255, 0.05)"
                          stroke="rgba(0, 212, 255, 0.2)"
                          strokeWidth="1"
                          rx="8"
                          className={`transition-all duration-500 ${
                            activeMethod === index || activeMethod === connIndex ? 'opacity-100' : 'opacity-30'
                          }`}
                        />
                        {/* Connection line */}
                        <line
                          x1={`${node.position.x}%`}
                          y1={`${node.position.y}%`}
                          x2={`${methodNodes[connIndex].position.x}%`}
                          y2={`${methodNodes[connIndex].position.y}%`}
                          stroke="rgba(0, 212, 255, 0.6)"
                          strokeWidth="3"
                          className={`transition-all duration-500 ${
                            activeMethod === index || activeMethod === connIndex ? 'animate-synaptic-fire opacity-100 stroke-cyan-400' : 'opacity-40'
                          }`}
                        />
                      </g>
                    ))
                  )}
                  
                  {/* Enhanced central hub with gradient flash */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="60"
                    fill="url(#centralGradient)"
                    stroke="rgba(0, 212, 255, 0.8)"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                  
                  {/* Gradient flash effect */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45"
                    fill="url(#flashGradient)"
                    className="animate-ping opacity-60"
                  />
                  
                  <defs>
                    <radialGradient id="centralGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(0, 212, 255, 0.3)" />
                      <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
                      <stop offset="100%" stopColor="rgba(0, 212, 255, 0.1)" />
                    </radialGradient>
                    <radialGradient id="flashGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                      <stop offset="100%" stopColor="rgba(0, 212, 255, 0.2)" />
                    </radialGradient>
                  </defs>
                  
                  {/* Connection points */}
                  {methodNodes.map((node, index) => (
                    <circle
                      key={`point-${index}`}
                      cx={`${node.position.x}%`}
                      cy={`${node.position.y}%`}
                      r="8"
                      fill="rgb(0, 212, 255)"
                      className={`transition-all duration-300 ${
                        activeMethod === index ? 'animate-pulse scale-150' : 'opacity-60'
                      }`}
                    />
                  ))}
                </svg>

                {/* Method nodes */}
                {methodNodes.map((node, index) => (
                  <div
                    key={index}
                    className={`absolute cursor-pointer transition-all duration-500 group ${
                      activeMethod === index ? 'scale-105' : ''
                    }`}
                    style={{ 
                      left: `${node.position.x}%`, 
                      top: `${node.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onMouseEnter={() => setActiveMethod(index)}
                    onMouseLeave={() => setActiveMethod(-1)}
                  >
                    {/* Gradient background that appears on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl transition-opacity duration-500 ${
                      activeMethod === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/20 w-64 group-hover:border-neon transition-all">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <node.icon className="w-8 h-8 text-neon" />
                        </div>
                        
                        <h5 className="text-lg font-bold text-white group-hover:text-neon transition-colors mb-3">
                          {node.title}
                        </h5>
                        
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {node.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Enhanced central method label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <div className="text-xl font-bold text-neon animate-pulse">Neural Core</div>
                  <div className="text-base text-gray-400">Method Hub</div>
                </div>
              </div>
            </div>

            {/* Team Ethos with reduced font size */}
            <div className="text-center mt-20 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
              <div className="relative p-12">
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                  "We're not just building a company—we're <span className="text-neon">architecting</span> the future's nervous system."
                </blockquote>
                
                <p className="text-base text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Led by Syed's vision, our team operates like a neural network—each connection strengthening the whole. Our developers aren't just coders; they're digital neuroscientists. Our designers aren't just creative minds; they're experience architects. Together, we form a cognitive ecosystem that thinks, adapts, and innovates as one.
                </p>
              </div>
            </div>
          </div>
        </div>

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

        {/* The Proof Points - Enhanced Neural Design */}
        <div className="mb-40">
          <h3 className="text-4xl font-bold text-white text-center mb-8">Neural <span className="text-cyan-400">Proof Points</span></h3>
          <p className="text-lg text-gray-300 text-center mb-20">Evidence-Based Innovation Network</p>

          <div className="relative max-w-6xl mx-auto">
            {/* Neural Connection Web */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              {activeProofPoint >= 0 && proofPoints.map((point, index) => {
                if (index !== activeProofPoint) {
                  return (
                    <line
                      key={`connection-${activeProofPoint}-${index}`}
                      x1={`${proofPoints[activeProofPoint].position.x}%`}
                      y1={`${proofPoints[activeProofPoint].position.y}%`}
                      x2={`${point.position.x}%`}
                      y2={`${point.position.y}%`}
                      stroke="rgb(6, 182, 212)"
                      strokeWidth="2"
                      className="animate-synaptic-fire"
                    />
                  );
                }
                return null;
              })}
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {proofPoints.map((point, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transition-all duration-500 group"
                  onClick={() => setActiveProofPoint(activeProofPoint === index ? -1 : index)}
                  onMouseEnter={() => setActiveProofPoint(index)}
                  onMouseLeave={() => setActiveProofPoint(-1)}
                >
                  {/* Neural Aura */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl transition-all duration-500 ${
                    activeProofPoint === index ? 'scale-110 opacity-100' : 'opacity-50'
                  }`}></div>
                  
                  {/* Synaptic Activity */}
                  {activeProofPoint === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            animationDelay: `${i * 0.15}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                  
                  <div className={`relative bg-black/40 backdrop-blur-sm p-8 rounded-3xl border transition-all duration-500 ${
                    activeProofPoint === index ? 'border-cyan-400 shadow-2xl' : 'border-white/20 group-hover:border-cyan-400/50'
                  }`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 flex items-center justify-center mr-4 transition-transform duration-500 ${
                        activeProofPoint === index ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                      }`}>
                        <point.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {point.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-base mb-4">
                      {point.description}
                    </p>

                    <div className="border-t border-cyan-500/30 pt-4">
                      <p className="text-sm text-cyan-400 font-medium mb-2">Neural Implementation:</p>
                      <p className="text-sm text-gray-400 mb-3">{point.neural}</p>
                      
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-3">
                        <p className="text-xs text-cyan-300 font-bold">{point.metrics}</p>
                      </div>
                    </div>

                    {activeProofPoint === index && (
                      <div className="mt-6 pt-4 border-t border-cyan-500/30 animate-fade-in">
                        <div className="flex items-center text-sm text-cyan-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                          Neural network active - analyzing connections...
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-300 text-sm mt-12 italic">
              Interact with proof points to activate neural connections and see real-time evidence validation.
            </p>
          </div>
        </div>

        {/* Closing Statement with reduced font size */}
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
  );
};

export default AboutSection;
