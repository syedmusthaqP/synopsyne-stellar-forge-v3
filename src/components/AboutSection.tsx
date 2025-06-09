
import React, { useState, useEffect } from 'react';
import { Brain, Target, Zap, Users, Code, Database, Shield, TrendingUp, Lightbulb, Cpu, Network, Layers } from 'lucide-react';

const AboutSection = () => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [founderHover, setFounderHover] = useState(false);
  const [activeMethod, setActiveMethod] = useState(-1);
  const [neuralPulse, setNeuralPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvantage(prev => (prev + 1) % 5);
    }, 3000);

    const pulseInterval = setInterval(() => {
      setNeuralPulse(prev => (prev + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(pulseInterval);
    };
  }, []);

  const principles = [
    {
      icon: Target,
      title: 'Pattern Recognition',
      description: 'Identifying opportunities where others see obstacles',
      position: { x: 20, y: 20 },
      connections: [1, 3]
    },
    {
      icon: Zap,
      title: 'Synthesis Thinking',
      description: 'Combining disparate elements to create breakthrough solutions',
      position: { x: 80, y: 20 },
      connections: [0, 2]
    },
    {
      icon: TrendingUp,
      title: 'Anticipatory Leadership',
      description: 'Building for tomorrow\'s challenges with today\'s foundations',
      position: { x: 80, y: 80 },
      connections: [1, 3]
    },
    {
      icon: Users,
      title: 'Human-Centric Innovation',
      description: 'Technology that amplifies rather than replaces human potential',
      position: { x: 20, y: 80 },
      connections: [2, 0]
    }
  ];

  const advantages = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Architecture',
      description: 'We think in systems, not silos',
      details: 'Our approach mirrors neural networks—every solution is interconnected, adaptive, and intelligent.',
      proof: '40% faster problem resolution through integrated thinking',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Adaptive Intelligence',
      description: 'Learning and evolving with every project',
      details: 'Like synapses strengthening with use, our methodologies improve with each challenge.',
      proof: '95% client satisfaction through continuous improvement',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Synaptic Integration',
      description: 'Seamless connections across technologies',
      details: 'We create harmony between diverse systems, making them function as a unified whole.',
      proof: '60% reduction in integration complexity',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Predictive Synthesis',
      description: 'Anticipating needs before they arise',
      details: 'Our solutions evolve with your business, staying three steps ahead of market demands.',
      proof: '80% future-readiness score across all implementations',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Dynamic Adaptation',
      description: 'Flexible frameworks that grow with you',
      details: 'Built for change, our architectures bend without breaking, scale without limits.',
      proof: '300% average scalability improvement',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* About Us Section: The Neural Bridge */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About <span className="text-neon animate-text-glow">Us</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              The Neural <span className="text-neon">Bridge</span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Synopsyne Dynamics, we exist at the intersection of human intuition and digital precision. 
              Our name isn't just clever wordplay—it's our philosophy. Like synapses firing in perfect 
              harmony to create thought, we connect disparate elements to spark innovation.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Founded on the principle that the most powerful solutions emerge from the synthesis of 
              seemingly unrelated concepts, we approach every project with a neural mindset—seeing 
              connections, patterns, and possibilities that others miss.
            </p>
          </div>
        </div>

        {/* DNA Section - Moved Up Slightly */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-neon animate-text-glow">DNA</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the principles of neural networks, we approach every challenge 
              with interconnected thinking and adaptive intelligence.
            </p>
          </div>

          {/* DNA Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Brain, title: 'Cognitive Architecture', desc: 'Thinking in interconnected systems' },
              { icon: Zap, title: 'Adaptive Intelligence', desc: 'Learning and evolving continuously' },
              { icon: Network, title: 'Synaptic Integration', desc: 'Seamless technology harmony' },
              { icon: TrendingUp, title: 'Predictive Synthesis', desc: 'Anticipating future needs' }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="glassmorphism p-6 rounded-xl text-center hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-neon" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Profile Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Visionary Behind the <span className="text-neon">Vision</span>
            </h2>
          </div>

          {/* Main Profile Block */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Photo */}
            <div className="text-center lg:text-right">
              <div 
                className="relative inline-block"
                onMouseEnter={() => setFounderHover(true)}
                onMouseLeave={() => setFounderHover(false)}
              >
                {/* Neural aura around photo */}
                <div className={`absolute inset-0 w-80 h-80 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
                  founderHover ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
                }`}></div>
                
                {/* Photo */}
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
                  <img 
                    src="/placeholder.svg" 
                    alt="Syed Musthaq - Founder" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Pulse animation */}
                  <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-ping opacity-30"></div>
                </div>

                {/* Neural sparks */}
                {founderHover && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Syed Musthaq</h3>
                <p className="text-xl text-neon mb-4">Founder & Chief Synapse Officer</p>
                
                <blockquote className="text-lg text-cyan-400 italic mb-6 border-l-4 border-cyan-400 pl-4">
                  "Every great leap forward starts with seeing patterns others miss. At Synopsyne Dynamics, 
                  we don't just connect dots—we discover new constellations."
                </blockquote>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Syed Musthaq didn't just found Synopsyne Dynamics; he architected it from first principles. 
                With a mind that naturally bridges the gap between human intuition and digital precision, 
                Syed recognized that the future belongs to those who can synthesize complexity into elegant solutions.
              </p>

              <p className="text-gray-300 leading-relaxed">
                His approach to innovation mirrors the very neural networks that inspire our company—making 
                connections across disciplines, industries, and paradigms that others see as separate. Under 
                his leadership, Synopsyne Dynamics has evolved from concept to catalyst, transforming how 
                organizations think about technology integration.
              </p>
            </div>
          </div>

          {/* The Musthaq Method - Interactive Neural Network */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              The Musthaq <span className="text-neon">Method</span>
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[500px]">
                {/* Neural connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {principles.map((principle, index) => 
                    principle.connections.map(connIndex => (
                      <line
                        key={`${index}-${connIndex}`}
                        x1={`${principle.position.x}%`}
                        y1={`${principle.position.y}%`}
                        x2={`${principles[connIndex].position.x}%`}
                        y2={`${principles[connIndex].position.y}%`}
                        stroke={activeMethod === index || activeMethod === connIndex ? "rgb(0, 212, 255)" : "rgba(0, 212, 255, 0.4)"}
                        strokeWidth={activeMethod === index || activeMethod === connIndex ? "3" : "2"}
                        className={`transition-all duration-500 ${
                          activeMethod === index || activeMethod === connIndex ? 'animate-pulse' : ''
                        }`}
                      />
                    ))
                  )}

                  {/* Center hub */}
                  <circle cx="50%" cy="50%" r="40" fill="rgba(0, 212, 255, 0.1)" stroke="rgb(0, 212, 255)" strokeWidth="2" />
                  <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="white" fontSize="14" fontWeight="bold">
                    The Musthaq Method
                  </text>

                  {/* Pulsing connection points */}
                  {principles.map((principle, index) => (
                    <circle
                      key={`pulse-${index}`}
                      cx={`${principle.position.x}%`}
                      cy={`${principle.position.y}%`}
                      r="8"
                      fill="rgb(0, 212, 255)"
                      className={`transition-all duration-300 ${
                        neuralPulse === index ? 'animate-ping' : 'opacity-60'
                      }`}
                    />
                  ))}
                </svg>

                {/* Principle nodes */}
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="absolute cursor-pointer transition-all duration-500 group"
                    style={{ 
                      left: `${principle.position.x}%`, 
                      top: `${principle.position.y}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: activeMethod === index ? 50 : 10
                    }}
                    onMouseEnter={() => setActiveMethod(index)}
                    onMouseLeave={() => setActiveMethod(-1)}
                  >
                    <div className={`glassmorphism p-6 rounded-xl border transition-all duration-500 w-72 ${
                      activeMethod === index ? 'border-cyan-400 shadow-2xl scale-105 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' : 'border-white/20 group-hover:border-cyan-400/50'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center transition-transform duration-500 ${
                          activeMethod === index ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                        }`}>
                          <principle.icon className="w-6 h-6 text-neon" />
                        </div>
                        <h4 className="text-lg font-bold text-white group-hover:text-neon transition-colors">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-sm">{principle.description}</p>

                      {activeMethod === index && (
                        <div className="mt-4 pt-4 border-t border-cyan-500/30 animate-fade-in">
                          <div className="flex items-center text-xs text-cyan-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                            Neural pathway activated - synaptic enhancement in progress...
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Ethos */}
          <div className="text-center glassmorphism p-8 rounded-xl max-w-4xl mx-auto">
            <blockquote className="text-xl text-cyan-400 italic mb-4">
              "We're not just building a company—we're architecting the future's nervous system."
            </blockquote>
            <p className="text-gray-300 leading-relaxed">
              Led by Syed's vision, our team operates like a neural network—each connection strengthening the whole. 
              Our developers aren't just coders; they're digital neuroscientists. Our designers aren't just creative minds; 
              they're experience architects. Together, we form a cognitive ecosystem that thinks, adapts, and innovates as one.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section: "The Synopsyne Advantage" */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose <span className="text-neon animate-text-glow">Us</span>
            </h2>
            <h3 className="text-3xl font-bold text-white mb-8">
              The <span className="text-neon">Synopsyne</span> Advantage
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What makes us different isn't just what we do—it's how our neural approach 
              creates exponential value through interconnected thinking.
            </p>
          </div>

          {/* Neural Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  activeAdvantage === index ? 'scale-105 z-10' : 'hover:scale-102'
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Neural sparks for active card */}
                {activeAdvantage === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${10 + Math.random() * 80}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}

                <div className="relative glassmorphism p-8 rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-all h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${advantage.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-black/80 rounded-xl flex items-center justify-center text-white">
                      {advantage.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                  <p className="text-gray-400 mb-4 text-xs leading-relaxed">
                    {advantage.details}
                  </p>

                  {/* Proof point */}
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">
                        {advantage.proof}
                      </span>
                    </div>
                  </div>

                  {/* Active indicator */}
                  {activeAdvantage === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Proof Points Section */}
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Neural Network <span className="text-neon">Proof Points</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { metric: '40%', label: 'Faster Problem Resolution', description: 'Through cognitive architecture' },
                { metric: '95%', label: 'Client Satisfaction', description: 'Via adaptive intelligence' },
                { metric: '60%', label: 'Integration Simplification', description: 'Using synaptic methods' }
              ].map((point, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    {/* Neural connection lines */}
                    {index < 2 && (
                      <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent opacity-60 hidden md:block"></div>
                    )}
                    
                    <div className="w-20 h-20 mx-auto rounded-full border-2 border-cyan-400 bg-black/40 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all relative">
                      <span className="text-2xl font-bold text-neon">{point.metric}</span>
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-30"></div>
                    </div>
                  </div>
                  
                  <h4 className="text-white font-semibold mb-2 group-hover:text-neon transition-colors">
                    {point.label}
                  </h4>
                  <p className="text-gray-400 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
