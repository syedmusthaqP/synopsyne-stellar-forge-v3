
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, TrendingUp, Target, DollarSign, Calendar, Zap, Award, Heart } from 'lucide-react';

const FirstSynapsesSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [neuralStorm, setNeuralStorm] = useState(false);
  const [connectionPhase, setConnectionPhase] = useState(0);

  useEffect(() => {
    if (neuralStorm) {
      const timer = setTimeout(() => {
        setNeuralStorm(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [neuralStorm]);

  useEffect(() => {
    const interval = setInterval(() => {
      setConnectionPhase(prev => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Neural nodes with meaningful relationships
  const neuralNodes = [
    {
      id: 'founded',
      position: { x: 20, y: 20 },
      icon: Calendar,
      color: '#00d4ff',
      title: 'Genesis Node',
      metric: 'January 2024',
      detail: '6 months of pure momentum',
      meaning: 'The spark that started it all',
      connections: ['clients', 'growth']
    },
    {
      id: 'clients',
      position: { x: 75, y: 15 },
      icon: Users,
      color: '#40e0ff',
      title: 'Trust Network Node',
      metric: '8 active projects',
      detail: 'Across 5 industries',
      meaning: 'Trust breeds opportunity',
      connections: ['growth', 'retention']
    },
    {
      id: 'growth',
      position: { x: 85, y: 45 },
      icon: TrendingUp,
      color: '#00ff88',
      title: 'Velocity Node',
      metric: '200% quarter-over-quarter',
      detail: 'Client acquisition velocity',
      meaning: 'Momentum creates momentum',
      connections: ['retention', 'revenue']
    },
    {
      id: 'retention',
      position: { x: 65, y: 75 },
      icon: Target,
      color: '#ffcc00',
      title: 'Loyalty Loop Node',
      metric: '100% client retention',
      detail: 'Every client expanded engagement',
      meaning: 'Quality compounds loyalty',
      connections: ['revenue', 'founded']
    },
    {
      id: 'revenue',
      position: { x: 25, y: 65 },
      icon: DollarSign,
      color: '#00ff44',
      title: 'Success Amplifier Node',
      metric: '150% month-over-month',
      detail: 'Revenue growth trajectory',
      meaning: 'Success funds innovation',
      connections: ['founded', 'clients']
    }
  ];

  // Intermediate meaning nodes that appear on connections
  const meaningNodes = [
    { id: 'trust', position: { x: 47.5, y: 17.5 }, icon: Heart, label: 'Trust', connection: ['founded', 'clients'] },
    { id: 'momentum', position: { x: 80, y: 30 }, icon: Zap, label: 'Momentum', connection: ['clients', 'growth'] },
    { id: 'excellence', position: { x: 75, y: 60 }, icon: Award, label: 'Excellence', connection: ['growth', 'retention'] },
    { id: 'value', position: { x: 45, y: 70 }, icon: Target, label: 'Value', connection: ['retention', 'revenue'] },
    { id: 'innovation', position: { x: 22.5, y: 42.5 }, icon: Rocket, label: 'Innovation', connection: ['revenue', 'founded'] }
  ];

  const getConnectionPath = (node1: any, node2: any) => {
    const x1 = node1.position.x;
    const y1 = node1.position.y;
    const x2 = node2.position.x;
    const y2 = node2.position.y;
    
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    return `M ${x1}% ${y1}% Q ${midX + (Math.random() - 0.5) * 10}% ${midY + (Math.random() - 0.5) * 10}% ${x2}% ${y2}%`;
  };

  const handleCentralNodeClick = () => {
    setNeuralStorm(true);
  };

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#40e0ff_1px,_transparent_0)] bg-[30px_30px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(64,224,255,0.1)_0%,_transparent_50%)]" />
        
        {/* Ambient Neural Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-neural-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              opacity: 0.4
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
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text-glow">
            Neural Momentum
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Proving Our Synapses Fire
          </h3>
          <div className="text-xl md:text-2xl text-cyan-400 mb-6 font-medium">
            "From Idea to Impact: Our First Neural Connections"
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Every breakthrough begins with a single synapse. Here's proof our network is growing stronger every day.
          </p>
        </motion.div>

        {/* Neural Network Container */}
        <div className="relative min-h-[700px] mt-20">
          {/* SVG for Neural Network */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="connectionGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#40e0ff', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#40e0ff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#40e0ff', stopOpacity: 0 }} />
              </linearGradient>
              
              <filter id="neuralGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Neural Connections */}
            {neuralNodes.map((node) => {
              return node.connections.map((targetId) => {
                const targetNode = neuralNodes.find(n => n.id === targetId);
                if (!targetNode) return null;

                const isActive = activeNode === node.id || activeNode === targetId || connectionPhase === neuralNodes.findIndex(n => n.id === node.id);
                const pathD = getConnectionPath(node, targetNode);

                return (
                  <g key={`${node.id}-${targetId}`}>
                    {/* Main Connection Path */}
                    <path
                      d={pathD}
                      stroke={isActive ? node.color : '#40e0ff'}
                      strokeWidth={isActive ? "3" : "2"}
                      fill="none"
                      filter={isActive ? "url(#strongGlow)" : "url(#neuralGlow)"}
                      opacity={isActive ? 1 : 0.6}
                      className="transition-all duration-500"
                    />
                    
                    {/* Energy Particles */}
                    {(isActive || neuralStorm) && [...Array(neuralStorm ? 5 : 2)].map((_, i) => (
                      <circle
                        key={i}
                        r="2.5"
                        fill={node.color}
                        filter="url(#strongGlow)"
                        className="opacity-90"
                      >
                        <animateMotion
                          dur={neuralStorm ? "1s" : "3s"}
                          repeatCount="indefinite"
                          begin={`${i * 0.5}s`}
                        >
                          <path d={pathD} />
                        </animateMotion>
                      </circle>
                    ))}
                  </g>
                );
              });
            })}
          </svg>

          {/* Central Momentum Neuron */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
            onMouseEnter={() => setActiveNode('central')}
            onMouseLeave={() => setActiveNode(null)}
            onClick={handleCentralNodeClick}
          >
            <div className="relative">
              {/* Central Processing Hub */}
              <div className={`
                w-24 h-24 rounded-full relative
                bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600
                animate-pulse-glow
                ${neuralStorm ? 'animate-neural-pulse' : ''}
                group-hover:scale-110 transition-transform duration-300
                border-4 border-white/20
              `}>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/50 to-transparent flex items-center justify-center backdrop-blur-sm">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                
                {/* Orbital Rings */}
                {[35, 45, 55].map((size, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border-2 animate-spin opacity-30"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderColor: '#40e0ff',
                      animationDuration: `${8 + i * 3}s`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  />
                ))}

                {/* Energy Pulses */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20" />
                <div className="absolute inset-2 rounded-full border border-blue-300 animate-ping opacity-30" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Central Label */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-center">
                <span className="text-xl font-bold text-cyan-400 whitespace-nowrap bg-slate-900/80 px-4 py-2 rounded-full border border-cyan-400/30 backdrop-blur-sm">
                  🚀 Early Momentum Node
                </span>
              </div>
            </div>
          </motion.div>

          {/* Neural Metric Nodes */}
          {neuralNodes.map((node, index) => {
            const IconComponent = node.icon;
            const isActive = activeNode === node.id;
            
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 + index * 0.3 }}
                className="absolute z-20 cursor-pointer group"
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="relative">
                  {/* Node Core */}
                  <div 
                    className={`
                      w-16 h-16 rounded-full relative
                      transition-all duration-300
                      group-hover:scale-125
                      ${isActive ? 'animate-neural-pulse scale-110' : ''}
                      border-2 border-white/20
                    `}
                    style={{
                      background: `radial-gradient(circle, ${node.color}, ${node.color}aa)`,
                      boxShadow: `0 0 20px ${node.color}50`
                    }}
                  >
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/40 to-transparent flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Node Pulse Ring */}
                    <div 
                      className="absolute inset-0 rounded-full border-2 animate-ping opacity-40"
                      style={{ borderColor: node.color }}
                    />
                  </div>

                  {/* Metric Card */}
                  <div className={`
                    absolute transition-all duration-500 pointer-events-none z-50
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    ${node.position.x > 50 ? 'right-20' : 'left-20'}
                    ${node.position.y > 50 ? 'bottom-0' : 'top-0'}
                    w-72
                  `}>
                    <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border-2 shadow-2xl"
                         style={{ borderColor: `${node.color}40` }}>
                      <div className="absolute inset-0 rounded-2xl opacity-10"
                           style={{ background: `linear-gradient(135deg, ${node.color}20, transparent)` }} />
                      
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <IconComponent className="w-5 h-5" style={{ color: node.color }} />
                          {node.title}
                        </h4>
                        <p className="text-2xl font-bold mb-2" style={{ color: node.color }}>
                          {node.metric}
                        </p>
                        <p className="text-gray-300 text-sm mb-3">
                          {node.detail}
                        </p>
                        <div className="text-xs text-cyan-300 italic border-t border-gray-700 pt-2">
                          💡 {node.meaning}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Meaning Nodes on Connections */}
          {meaningNodes.map((meaningNode, index) => {
            const IconComponent = meaningNode.icon;
            const isConnectionActive = connectionPhase === index;
            
            return (
              <motion.div
                key={meaningNode.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                className="absolute z-15"
                style={{
                  left: `${meaningNode.position.x}%`,
                  top: `${meaningNode.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`
                  w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500
                  flex items-center justify-center border border-white/30
                  transition-all duration-500
                  ${isConnectionActive ? 'scale-150 animate-pulse' : 'scale-100'}
                `}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                
                <div className={`
                  absolute -bottom-8 left-1/2 transform -translate-x-1/2
                  text-xs font-semibold text-purple-300 whitespace-nowrap
                  transition-opacity duration-500
                  ${isConnectionActive ? 'opacity-100' : 'opacity-60'}
                `}>
                  {meaningNode.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 3 }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl md:text-3xl italic text-cyan-300 font-semibold max-w-4xl mx-auto">
            "In startup time, we're already thinking at enterprise speed."
          </blockquote>
        </motion.div>

        {/* Neural Activity Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 3.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-full px-10 py-5 border border-cyan-400/30">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-cyan-400 animate-neural-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            
            <span className="text-lg font-bold text-cyan-400 uppercase tracking-wider">
              Neural Network Status: 
              <span className="text-white ml-2">ACCELERATING GROWTH</span>
            </span>
            
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-green-400 animate-neural-pulse"
                  style={{ animationDelay: `${(i + 3) * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSynapsesSection;
