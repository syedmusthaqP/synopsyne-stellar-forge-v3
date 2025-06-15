
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, Target, DollarSign, Brain, Zap, Heart, Award, Lightbulb } from 'lucide-react';

const FirstSynapsesSection = () => {
  const [activeConnection, setActiveConnection] = useState<string | null>(null);
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [synapsePhase, setSynapsePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSynapsePhase(prev => (prev + 1) % 6);
      setNeuralActivity(prev => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Core business metrics with meaningful positioning
  const metricNodes = [
    {
      id: 'genesis',
      position: { x: 50, y: 20 },
      icon: Calendar,
      color: '#00d4ff',
      title: 'Genesis',
      value: 'Jan 2024',
      detail: '6 months of pure momentum',
      meaning: 'The spark that ignited our neural network'
    },
    {
      id: 'trust',
      position: { x: 85, y: 35 },
      icon: Users,
      color: '#40e0ff',
      title: 'Trust Network',
      value: '8 Projects',
      detail: 'Across 5 industries',
      meaning: 'Trust creates exponential opportunities'
    },
    {
      id: 'velocity',
      position: { x: 80, y: 70 },
      icon: TrendingUp,
      color: '#00ff88',
      title: 'Velocity',
      value: '200% Growth',
      detail: 'Quarter-over-quarter acceleration',
      meaning: 'Momentum compounds momentum'
    },
    {
      id: 'loyalty',
      position: { x: 35, y: 80 },
      icon: Target,
      color: '#ffcc00',
      title: 'Loyalty Loop',
      value: '100% Retention',
      detail: 'Every client expanded',
      meaning: 'Excellence breeds loyalty'
    },
    {
      id: 'prosperity',
      position: { x: 15, y: 45 },
      icon: DollarSign,
      color: '#00ff44',
      title: 'Prosperity',
      value: '150% Revenue',
      detail: 'Month-over-month growth',
      meaning: 'Success funds innovation'
    }
  ];

  // Meaningful connections between concepts
  const synapticConnections = [
    {
      from: 'genesis',
      to: 'trust',
      meaning: 'Vision',
      icon: Lightbulb,
      description: 'Our founding vision creates trusted relationships',
      midpoint: { x: 67.5, y: 27.5 }
    },
    {
      from: 'trust',
      to: 'velocity',
      meaning: 'Momentum',
      icon: Zap,
      description: 'Trust accelerates business growth velocity',
      midpoint: { x: 82.5, y: 52.5 }
    },
    {
      from: 'velocity',
      to: 'loyalty',
      meaning: 'Excellence',
      icon: Award,
      description: 'Growth velocity drives service excellence',
      midpoint: { x: 57.5, y: 75 }
    },
    {
      from: 'loyalty',
      to: 'prosperity',
      meaning: 'Value',
      icon: Heart,
      description: 'Client loyalty generates sustainable value',
      midpoint: { x: 25, y: 62.5 }
    },
    {
      from: 'prosperity',
      to: 'genesis',
      meaning: 'Innovation',
      icon: Brain,
      description: 'Prosperity enables continued innovation',
      midpoint: { x: 32.5, y: 32.5 }
    }
  ];

  const getConnectionPath = (from: any, to: any) => {
    const fromNode = metricNodes.find(n => n.id === from);
    const toNode = metricNodes.find(n => n.id === to);
    if (!fromNode || !toNode) return '';

    const x1 = fromNode.position.x;
    const y1 = fromNode.position.y;
    const x2 = toNode.position.x;
    const y2 = toNode.position.y;
    
    // Create organic curves
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const offsetX = (y2 - y1) * 0.3;
    const offsetY = (x1 - x2) * 0.3;
    
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
            Neural Synapse
          </h2>
          <h3 className="text-3xl md:text-5xl font-light mb-6 text-white/90">
            Where Ideas Connect & Multiply
          </h3>
          <p className="text-xl text-cyan-300 max-w-4xl mx-auto leading-relaxed">
            Every breakthrough begins with meaningful connections. Our neural network shows how each success 
            synapse fires to create exponential momentum.
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
                  {/* Main pathway */}
                  <path
                    d={pathD}
                    stroke={isActive ? '#40e0ff' : '#40e0ff60'}
                    strokeWidth={isActive ? "4" : "2"}
                    fill="none"
                    filter="url(#connectionGlow)"
                    opacity={isActive ? 1 : 0.4}
                    className="transition-all duration-700 ease-in-out"
                  />
                  
                  {/* Energy particles flowing along path */}
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
                      <circle r="1.5" fill="#00ff88">
                        <animateMotion dur="2s" repeatCount="indefinite" begin="1s">
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
                
                {/* Orbital rings */}
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
                  🧠 Synapse Core
                </span>
              </div>
            </div>
          </motion.div>

          {/* Metric Nodes */}
          {metricNodes.map((node, index) => {
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
                <div className="relative">
                  {/* Node Core */}
                  <div 
                    className="w-20 h-20 rounded-full relative group-hover:scale-125 transition-all duration-500 border-4 border-white/20"
                    style={{
                      background: `radial-gradient(circle, ${node.color}, ${node.color}aa)`,
                      boxShadow: `0 0 30px ${node.color}40`
                    }}
                  >
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/40 to-transparent flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Pulse ring */}
                    <div 
                      className="absolute inset-0 rounded-full border-2 animate-ping opacity-40"
                      style={{ borderColor: node.color }}
                    />
                  </div>

                  {/* Node Label */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-lg font-bold text-white mb-1">{node.title}</div>
                    <div className="text-xl font-extrabold" style={{ color: node.color }}>
                      {node.value}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">{node.detail}</div>
                  </div>

                  {/* Meaning tooltip */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-slate-900/95 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-400/30 whitespace-nowrap">
                      <p className="text-cyan-300 text-sm italic">💡 {node.meaning}</p>
                    </div>
                  </div>
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

                  {/* Connection description */}
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
              <span className="text-lg font-bold text-cyan-400">NEURAL ACTIVITY</span>
            </div>
            
            <div className="text-2xl font-bold text-white">
              {neuralActivity}% ACTIVE
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
              <span className="text-lg font-bold text-green-400">SYNAPSES FIRING</span>
            </div>
          </div>
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 3.5 }}
          className="text-center mt-16"
        >
          <blockquote className="text-3xl md:text-4xl italic text-cyan-300 font-light max-w-5xl mx-auto leading-relaxed">
            "In the neural network of business, every connection creates new possibilities."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSynapsesSection;
