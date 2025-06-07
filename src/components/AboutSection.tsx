
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Repeat, Users, Target, Rocket, Microscope, Globe } from 'lucide-react';

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeDNA, setActiveDNA] = useState(0);

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

  const dnaNodes = [
    {
      icon: Brain,
      title: "Cognitive Architecture",
      subtitle: "Connection Node: Thinking Together",
      description: "We think differently because we think together. Our team operates like a neural network—each connection strengthening the whole.",
      bgColor: "from-cyan-500/20 to-blue-500/20",
      position: { x: 20, y: 30 }
    },
    {
      icon: Zap,
      title: "Dynamic Adaptation",
      subtitle: "Connection Node: Evolutionary Response",
      description: "Static solutions die quickly. We build systems that learn, evolve, and anticipate change before it happens.",
      bgColor: "from-blue-500/20 to-purple-500/20",
      position: { x: 80, y: 20 }
    },
    {
      icon: Repeat,
      title: "Synthesis Philosophy",
      subtitle: "Connection Node: Exponential Fusion",
      description: "We don't just combine technologies; we synthesize them into something entirely new. The whole becomes exponentially greater than its parts.",
      bgColor: "from-purple-500/20 to-pink-500/20",
      position: { x: 50, y: 70 }
    }
  ];

  const musthaqMethods = [
    {
      title: "Pattern Recognition",
      description: "Identifying opportunities where others see obstacles"
    },
    {
      title: "Synthesis Thinking",
      description: "Combining disparate elements to create breakthrough solutions"
    },
    {
      title: "Anticipatory Leadership",
      description: "Building for tomorrow's challenges with today's foundations"
    },
    {
      title: "Human-Centric Innovation",
      description: "Technology that amplifies rather than replaces human potential"
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

        {/* Interactive Timeline - The Origin Story */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-white text-center mb-4">
            The Origin Story
          </h3>
          <p className="text-lg text-neon text-center mb-16 font-medium">
            Genesis → Evolution → Revolution
          </p>

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
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg z-10 animate-pulse`}></div>
                  
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

        {/* Our DNA - Interactive Neural Network Visualization */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Our <span className="text-neon">DNA</span>
          </h3>
          <p className="text-lg text-gray-300 text-center mb-16">
            Interactive Neural Network Visualization
          </p>

          <div className="relative max-w-6xl mx-auto h-96">
            {/* Neural Network Background */}
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
                    className={`transition-all duration-500 ${activeDNA === index || activeDNA === (index + targetIndex + 1) ? 'opacity-100' : 'opacity-30'}`}
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
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${node.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-neural-pulse`}>
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

                {/* Synaptic pulse effects */}
                <div className="absolute inset-0 rounded-full animate-synaptic-fire opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
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
                {/* Founder Image Placeholder */}
                <div className="lg:col-span-1">
                  <div className="w-48 h-48 mx-auto rounded-full glassmorphism flex items-center justify-center animate-pulse-glow">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white text-center mt-6 mb-2">Syed Musthaq</h4>
                  <p className="text-neon text-center font-medium">Founder & Neural Architect</p>
                </div>

                {/* Founder Description */}
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Syed didn't just found Synopsyne Dynamics; he architected it from first principles. With a mind that naturally bridges the gap between human intuition and digital precision, Syed recognized that the future belongs to those who can synthesize complexity into elegant solutions.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    His approach to innovation mirrors the very neural networks that inspire our company—making connections across disciplines, industries, and paradigms that others see as separate. Under his leadership, Synopsyne Dynamics has evolved from concept to catalyst, transforming how organizations think about technology integration.
                  </p>

                  {/* The Musthaq Method */}
                  <div>
                    <h5 className="text-xl font-bold text-neon mb-4">The Musthaq Method:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {musthaqMethods.map((method, index) => (
                        <div key={index} className="glassmorphism p-4 rounded-lg hover:neon-border transition-all group">
                          <div className="font-semibold text-white mb-2 group-hover:text-neon transition-colors">
                            {method.title}
                          </div>
                          <div className="text-sm text-gray-300">
                            {method.description}
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
        <div className="text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-2xl"></div>
            <div className="relative glassmorphism p-12 rounded-xl">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                "We're not just building a company—we're <span className="text-neon">architecting</span> the future's nervous system."
              </blockquote>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Led by Syed's vision, our team operates like a neural network—each connection strengthening the whole. Our developers aren't just coders; they're digital neuroscientists. Our designers aren't just creative minds; they're experience architects. Together, we form a cognitive ecosystem that thinks, adapts, and innovates as one.
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
      
      {/* Additional floating neural nodes */}
      <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-neon animate-pulse opacity-80" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-cyan-300 animate-pulse opacity-45" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/5 right-1/4 w-1 h-1 rounded-full bg-purple-300 animate-pulse opacity-70" style={{animationDelay: '2.5s'}}></div>
    </section>
  );
};

export default AboutSection;
