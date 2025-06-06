import React, { useState, useEffect } from 'react';
import { Brain, Zap, Repeat, Users, Target, Rocket, Microscope, Globe } from 'lucide-react';

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const dnaCards = [
    {
      icon: Brain,
      title: "Cognitive Architecture",
      description: "We think differently because we think together. Our team operates like a neural network—each connection strengthening the whole.",
      bgColor: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Zap,
      title: "Dynamic Adaptation",
      description: "Static solutions die quickly. We build systems that learn, evolve, and anticipate change before it happens.",
      bgColor: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Repeat,
      title: "Synthesis Philosophy",
      description: "We don't just combine technologies; we synthesize them into something entirely new. The whole becomes exponentially greater than its parts.",
      bgColor: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const synapticAdvantages = [
    {
      id: 1,
      title: "Predictive Innovation",
      subtitle: "While others react to trends, we create them.",
      points: [
        "Neuromorphic Problem-Solving: We approach challenges like the human brain—through pattern recognition and adaptive learning",
        "Future-Backward Design: We start with tomorrow's needs and engineer backward to today's solutions",
        "Anticipatory Architecture: Our systems evolve with your growth, not against it"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "Symbiotic Integration",
      subtitle: "We don't build islands; we create ecosystems.",
      points: [
        "Seamless Synthesis: Our solutions integrate so naturally, you'll forget where your existing systems end and ours begin",
        "Living Interfaces: Technology that adapts to human behavior rather than forcing behavior to adapt to technology",
        "Cross-Platform Fluency: We speak every digital language and make them all work together"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "Cognitive Scaling",
      subtitle: "Growth shouldn't mean growing pains.",
      points: [
        "Intelligence That Compounds: Our systems get smarter as they scale, not more complex",
        "Elastic Architecture: Solutions that breathe with your business rhythms",
        "Wisdom Accumulation: Every interaction makes the entire system more intelligent"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Transparent Complexity",
      subtitle: "Sophisticated solutions with elegant simplicity.",
      points: [
        "Invisible Complexity: The most powerful systems are the ones you don't have to think about",
        "Intuitive Interfaces: If it needs a manual, we haven't finished building it",
        "Graceful Performance: Our solutions work so smoothly, they feel like magic"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      id: 5,
      title: "Partnership Paradigm",
      subtitle: "We don't have clients—we have co-evolutionaries.",
      points: [
        "Shared Success Metrics: Your wins are our wins, your challenges are our puzzles to solve",
        "Continuous Calibration: We don't deliver and disappear; we grow alongside you",
        "Innovation Partnership: You bring the vision, we bring the impossible-made-possible"
      ],
      color: "from-red-500 to-orange-500"
    }
  ];

  const proofPoints = [
    {
      icon: Target,
      title: "Precision Without Rigidity",
      description: "Our solutions hit targets that haven't been set yet while remaining flexible enough to pivot with purpose.",
      color: "cyan"
    },
    {
      icon: Rocket,
      title: "Speed Without Sacrifice",
      description: "We move at startup velocity while maintaining enterprise reliability. Fast doesn't mean fragile in our world.",
      color: "blue"
    },
    {
      icon: Microscope,
      title: "Research-Rooted Reality",
      description: "Every solution is grounded in cognitive science principles and proven through real-world application.",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Global Thinking, Local Feeling",
      description: "We build for scale but optimize for the individual experience within that scale.",
      color: "pink"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Dynamic gradient overlay based on mouse position */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)`
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Opening Hook */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
            <Users className="w-4 h-4 text-neon mr-2" />
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

        {/* Interactive Timeline */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            The Origin Story
          </h3>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline connector */}
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
                  {/* Timeline node */}
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg z-10`}></div>
                  
                  <div className="glassmorphism p-8 rounded-xl mt-12 hover:neon-border transition-all group">
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

        {/* Our DNA Cards */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Our <span className="text-neon">DNA</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dnaCards.map((card, index) => (
              <div
                key={index}
                className="glassmorphism p-8 rounded-xl hover:neon-border transition-all group cursor-pointer animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-8 h-8 text-neon" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-neon transition-colors">
                  {card.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - The Synopsyne Advantage */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The <span className="text-neon">Synopsyne</span> Advantage
            </h3>
            <p className="text-2xl text-gray-300 font-semibold">
              We don't compete—we <span className="text-neon">create new categories</span>.
            </p>
          </div>

          {/* The Five Synaptic Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
            {synapticAdvantages.map((advantage, index) => (
              <div
                key={advantage.id}
                className={`glassmorphism p-8 rounded-xl cursor-pointer transition-all duration-500 ${
                  activeAdvantage === index ? 'neon-border scale-105' : 'hover:neon-border'
                }`}
                onClick={() => setActiveAdvantage(index)}
                onMouseEnter={() => setActiveAdvantage(index)}
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent mb-2`}>
                  {advantage.id}. {advantage.title}
                </div>
                <div className="text-lg text-neon mb-4 font-medium">{advantage.subtitle}</div>
                <div className="space-y-3">
                  {advantage.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">{point.split(':')[0]}:</span>
                      <span className="ml-1">{point.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* The Proof Points */}
          <div className="mb-20">
            <h4 className="text-2xl font-bold text-white text-center mb-12">The Proof Points</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {proofPoints.map((point, index) => (
                <div
                  key={index}
                  className="glassmorphism p-6 rounded-xl hover:neon-border transition-all group cursor-pointer animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-12 h-12 rounded-full bg-${point.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <point.icon className={`w-6 h-6 text-${point.color}-400`} />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-3 group-hover:text-neon transition-colors">
                    {point.title}
                  </h5>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-2xl"></div>
              <div className="relative glassmorphism p-12 rounded-xl">
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                  "Choose Synopsyne Dynamics not for what we've built, but for what we'll <span className="text-neon">discover together</span>."
                </blockquote>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  The future isn't something that happens to you—it's something you actively create. We're not just service providers; we're co-architects of tomorrow's digital nervous system. When you choose us, you're not buying a solution—you're investing in evolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Ethos - Enhanced */}
        <div className="text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-2xl"></div>
            <div className="relative glassmorphism p-12 rounded-xl">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                "We're not just building a company—we're <span className="text-neon">architecting</span> the future's nervous system."
              </blockquote>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                <div className="p-4 glassmorphism rounded-lg">
                  <div className="font-semibold text-cyan-400 mb-2">Our Founders</div>
                  <div>Pattern recognizers who saw connections others missed</div>
                </div>
                <div className="p-4 glassmorphism rounded-lg">
                  <div className="font-semibold text-blue-400 mb-2">Our Developers</div>
                  <div>Digital neuroscientists crafting intelligent systems</div>
                </div>
                <div className="p-4 glassmorphism rounded-lg">
                  <div className="font-semibold text-purple-400 mb-2">Our Designers</div>
                  <div>Experience architects building tomorrow's interfaces</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Neural Network Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400 animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-blue-400 animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-400 animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-pink-400 animate-pulse opacity-30" style={{animationDelay: '3s'}}></div>
      
      {/* Additional floating neural nodes */}
      <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-neon animate-pulse opacity-80" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-cyan-300 animate-pulse opacity-45" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/5 right-1/4 w-1 h-1 rounded-full bg-purple-300 animate-pulse opacity-70" style={{animationDelay: '2.5s'}}></div>
    </section>
  );
};

export default AboutSection;
