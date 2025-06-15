
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, Target, DollarSign, Brain, Zap, Heart, Award, Lightbulb, Rocket, Trophy, Shield, HandHeart } from 'lucide-react';

const FirstSynapsesSection = () => {
  const [activeConnection, setActiveConnection] = useState<string | null>(null);
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [synapsePhase, setSynapsePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSynapsePhase(prev => (prev + 1) % 4);
      setNeuralActivity(prev => (prev + Math.random() * 10) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Neural Validation Nodes for Synopsyne Dynamics
  const validationNodes = [
    {
      id: 'momentum',
      position: { x: 20, y: 25 },
      icon: Rocket,
      color: '#00d4ff',
      title: '🚀 Early Momentum',
      subtitle: 'Growth Acceleration Synapses',
      stats: [
        { label: 'Founded', value: 'Jan 2024', detail: '6 months of pure momentum' },
        { label: 'Client Base', value: '8 Projects', detail: 'across 5 industries' },
        { label: 'Growth Rate', value: '200%', detail: 'quarter-over-quarter client acquisition' },
        { label: 'Retention', value: '100%', detail: 'every client has expanded' },
        { label: 'Revenue Growth', value: '150%', detail: 'month-over-month since launch' }
      ],
      quote: "In startup time, we're already thinking at enterprise speed."
    },
    {
      id: 'recognition',
      position: { x: 80, y: 20 },
      icon: Trophy,
      color: '#ffcc00',
      title: '💡 Innovation Recognition',
      subtitle: 'Market Validation Synapses',
      stats: [
        { label: 'Featured', value: 'TechCrunch', detail: 'Startup Spotlight (March 2024)' },
        { label: 'Winner', value: 'AI Integration', detail: 'Regional Startup Awards' },
        { label: 'Speaking', value: 'Future of Work', detail: 'Conference 2024 presenter' },
        { label: 'Press', value: 'Forbes Quote', detail: 'AI-Human Collaboration article' },
        { label: 'Recognition', value: 'TechStars', detail: 'Accelerator shortlist' }
      ],
      quote: "When you're solving real problems, the recognition follows."
    },
    {
      id: 'validation',
      position: { x: 85, y: 75 },
      icon: HandHeart,
      color: '#00ff88',
      title: '🤝 Market Validation',
      subtitle: 'Trust Network Synapses',
      stats: [
        { label: 'Healthcare', value: '70% Faster', detail: 'patient data processing time' },
        { label: 'E-commerce', value: '45% Increase', detail: 'conversion rates via predictive UX' },
        { label: 'Manufacturing', value: '60% Cut', detail: 'operational inefficiencies via AI' },
        { label: 'FinTech', value: '3x Faster', detail: 'regulatory compliance achievement' },
        { label: 'Consulting', value: '95% Accuracy', detail: '24/7 AI assistant support' }
      ],
      quote: "Our clients don't just recommend us—they become case studies."
    },
    {
      id: 'technical',
      position: { x: 15, y: 70 },
      icon: Shield,
      color: '#ff6b6b',
      title: '⚡ Technical Credibility',
      subtitle: 'Infrastructure Trust Synapses',
      stats: [
        { label: 'Security', value: 'SOC 2 Type II', detail: 'compliance in progress' },
        { label: 'Reliability', value: '99.97% Uptime', detail: 'across all deployed systems' },
        { label: 'Speed', value: '60% Faster', detail: 'than industry standard implementation' },
        { label: 'Quality', value: 'Zero Bugs', detail: 'critical bugs in production (6 months)' },
        { label: 'Partnerships', value: 'Cloud Certified', detail: 'AWS, Google Cloud, Microsoft Azure' }
      ],
      quote: "We built enterprise-grade systems while keeping startup agility."
    }
  ];

  // Meaningful connections between validation nodes
  const synapticConnections = [
    {
      from: 'momentum',
      to: 'recognition',
      meaning: 'Excellence',
      icon: Award,
      description: 'Rapid growth attracts industry recognition',
      midpoint: { x: 50, y: 22.5 }
    },
    {
      from: 'recognition',
      to: 'validation',
      meaning: 'Trust',
      icon: Heart,
      description: 'Recognition builds client trust and validation',
      midpoint: { x: 82.5, y: 47.5 }
    },
    {
      from: 'validation',
      to: 'technical',
      meaning: 'Foundation',
      icon: Brain,
      description: 'Client success demands technical excellence',
      midpoint: { x: 50, y: 72.5 }
    },
    {
      from: 'technical',
      to: 'momentum',
      meaning: 'Innovation',
      icon: Lightbulb,
      description: 'Technical strength enables sustainable momentum',
      midpoint: { x: 17.5, y: 47.5 }
    }
  ];

  const getConnectionPath = (from: any, to: any) => {
    const fromNode = validationNodes.find(n => n.id === from);
    const toNode = validationNodes.find(n => n.id === to);
    if (!fromNode || !toNode) return '';

    const x1 = fromNode.position.x;
    const y1 = fromNode.position.y;
    const x2 = toNode.position.x;
    const y2 = toNode.position.y;
    
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const offsetX = (y2 - y1) * 0.2;
    const offsetY = (x1 - x2) * 0.2;
    
    return `M ${x1}% ${y1}% Q ${midX + offsetX}% ${midY + offsetY}% ${x2}% ${y2}%`;
  };

  const handleConnectionHover = (connectionId: string) => {
    setActiveConnection(connectionId);
  };

  const handleConnectionLeave = () => {
    setActiveConnection(null);
  };

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Enhanced Neural Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(64,224,255,0.3)_1px,_transparent_0)] bg-[40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(64,224,255,0.1)_0%,_transparent_60%)]" />
        
        {/* Floating Neural Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Gradient Lights */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Neural Momentum
          </h2>
          <h3 className="text-3xl md:text-5xl font-light mb-6 text-white/90">
            Proving Our Synapses Fire
          </h3>
          <p className="text-xl text-cyan-300 max-w-4xl mx-auto leading-relaxed mb-8">
            From Idea to Impact: Our First Neural Connections
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every breakthrough begins with a single synapse. Here's proof our network is growing stronger every day.
          </p>
        </motion.div>

        {/* Neural Network Visualization */}
        <div className="relative min-h-[800px] mt-20">
          {/* SVG for Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <filter id="connectionGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <linearGradient id="energyFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#40e0ff', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#40e0ff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#40e0ff', stopOpacity: 0 }} />
              </linearGradient>
            </defs>

            {/* Neural Pathways */}
            {synapticConnections.map((connection, index) => {
              const isActive = activeConnection === `${connection.from}-${connection.to}` || synapsePhase === index;
              const pathD = getConnectionPath(connection.from, connection.to);

              return (
                <g key={`${connection.from}-${connection.to}`}>
                  <path
                    d={pathD}
                    stroke={isActive ? '#40e0ff' : '#40e0ff60'}
                    strokeWidth={isActive ? "4" : "2"}
                    fill="none"
                    filter="url(#connectionGlow)"
                    opacity={isActive ? 1 : 0.4}
                    className="transition-all duration-700 ease-in-out"
                  />
                  
                  {isActive && (
                    <>
                      <circle r="3" fill="#40e0ff" filter="url(#connectionGlow)">
                        <animateMotion dur="2s" repeatCount="indefinite">
                          <path d={pathD} />
                        </animateMotion>
                      </circle>
                      <circle r="2" fill="#ffffff" opacity="0.8">
                        <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s">
                          <path d={pathD} />
                        </animateMotion>
                      </circle>
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Central Synapse Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 animate-pulse flex items-center justify-center relative">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/30 to-transparent flex items-center justify-center backdrop-blur-sm">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                
                {[1, 2, 3].map((ring, i) => (
                  <div
                    key={ring}
                    className="absolute rounded-full border-2 border-cyan-400/30 animate-spin"
                    style={{
                      width: `${140 + ring * 20}px`,
                      height: `${140 + ring * 20}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animationDuration: `${10 + ring * 5}s`,
                      animationDirection: ring % 2 === 0 ? 'reverse' : 'normal'
                    }}
                  />
                ))}
              </div>
              
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-center">
                <span className="text-2xl font-bold text-cyan-400 whitespace-nowrap bg-slate-900/80 px-6 py-3 rounded-full border border-cyan-400/30 backdrop-blur-sm">
                  🧠 Validation Core
                </span>
              </div>
            </div>
          </motion.div>

          {/* Validation Nodes with Glass Cards */}
          {validationNodes.map((node, index) => {
            const IconComponent = node.icon;
            
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className="absolute z-20 cursor-pointer group"
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Glass Card */}
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 w-80 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
                    {/* Node Icon */}
                    <div 
                      className="w-16 h-16 rounded-full mb-4 flex items-center justify-center border-2 border-white/30"
                      style={{
                        background: `radial-gradient(circle, ${node.color}, ${node.color}aa)`,
                        boxShadow: `0 0 30px ${node.color}40`
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="text-xl font-bold text-white mb-2">{node.title}</h3>
                    <p className="text-sm text-purple-300 mb-4 italic">{node.subtitle}</p>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      {node.stats.slice(0, 3).map((stat, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{stat.label}:</span>
                          <span className="text-white font-bold text-sm">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-cyan-300 italic text-sm border-l-2 border-cyan-400/50 pl-3">
                      {node.quote}
                    </blockquote>

                    {/* Hover Details */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 pt-4 border-t border-white/20">
                      {node.stats.slice(3).map((stat, i) => (
                        <div key={i} className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-xs">{stat.label}:</span>
                          <span className="text-white font-bold text-xs">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pulse effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl border-2 animate-ping opacity-40"
                    style={{ borderColor: node.color }}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* Connection Meaning Nodes */}
          {synapticConnections.map((connection, index) => {
            const IconComponent = connection.icon;
            const isActive = activeConnection === `${connection.from}-${connection.to}` || synapsePhase === index;
            
            return (
              <motion.div
                key={`meaning-${connection.from}-${connection.to}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                className="absolute z-15 cursor-pointer"
                style={{
                  left: `${connection.midpoint.x}%`,
                  top: `${connection.midpoint.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => handleConnectionHover(`${connection.from}-${connection.to}`)}
                onMouseLeave={handleConnectionLeave}
              >
                <div className="relative group">
                  <div className={`
                    w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500
                    flex items-center justify-center border-2 border-white/30
                    transition-all duration-500 group-hover:scale-150
                    ${isActive ? 'scale-125 animate-pulse' : 'scale-100'}
                  `}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                    <span className={`text-sm font-bold text-purple-300 whitespace-nowrap transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                      {connection.meaning}
                    </span>
                  </div>

                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                    <div className="bg-slate-900/95 backdrop-blur-sm rounded-lg px-4 py-3 border border-purple-400/30 w-64 text-center">
                      <p className="text-purple-300 text-sm">{connection.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Neural Activity Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 3 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-full px-12 py-6 border border-cyan-400/30">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-lg font-bold text-cyan-400">VALIDATION ACTIVE</span>
            </div>
            
            <div className="text-2xl font-bold text-white">
              {Math.round(neuralActivity)}% PROVEN
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
              <span className="text-lg font-bold text-green-400">MOMENTUM BUILDING</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSynapsesSection;
