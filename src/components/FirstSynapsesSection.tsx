
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, TrendingUp, Target, DollarSign, Calendar } from 'lucide-react';

const FirstSynapsesSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [neuralStorm, setNeuralStorm] = useState(false);
  const [particleFlow, setParticleFlow] = useState(1);

  useEffect(() => {
    if (neuralStorm) {
      setParticleFlow(3);
      const timer = setTimeout(() => {
        setNeuralStorm(false);
        setParticleFlow(1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [neuralStorm]);

  const synapticBranches = [
    {
      id: 'founded',
      position: { x: 20, y: 25 },
      icon: Calendar,
      color: '#00d4ff',
      title: 'Founded Node',
      metric: 'January 2024',
      detail: '6 months of pure momentum',
      pathType: 'curved'
    },
    {
      id: 'clients',
      position: { x: 80, y: 25 },
      icon: Users,
      color: '#40e0ff',
      title: 'Client Base Node',
      metric: '8 active projects',
      detail: 'Across 5 industries',
      pathType: 'branching'
    },
    {
      id: 'growth',
      position: { x: 85, y: 50 },
      icon: TrendingUp,
      color: '#00ff88',
      title: 'Growth Rate Node',
      metric: '200% quarter-over-quarter',
      detail: 'Client acquisition velocity',
      pathType: 'accelerating'
    },
    {
      id: 'retention',
      position: { x: 75, y: 75 },
      icon: Target,
      color: '#ffcc00',
      title: 'Retention Node',
      metric: '100% client retention',
      detail: 'Every client expanded engagement',
      pathType: 'loop'
    },
    {
      id: 'revenue',
      position: { x: 25, y: 75 },
      icon: DollarSign,
      color: '#00ff44',
      title: 'Revenue Node',
      metric: '150% month-over-month',
      detail: 'Revenue growth trajectory',
      pathType: 'ascending'
    }
  ];

  const handleCentralNodeClick = () => {
    setNeuralStorm(true);
  };

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle Background Neural Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#40e0ff_1px,_transparent_0)] bg-[20px_20px]" />
        {/* Ambient Background Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-neural-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
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

        {/* Neural Constellation Container */}
        <div className="relative min-h-[600px] mt-20">
          {/* SVG for Neural Pathways */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="synapticGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#40e0ff', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#40e0ff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#40e0ff', stopOpacity: 0 }} />
              </linearGradient>
              
              <filter id="neuralGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Synaptic Pathways */}
            {synapticBranches.map((branch, i) => {
              const centerX = 50;
              const centerY = 50;
              const branchX = branch.position.x;
              const branchY = branch.position.y;
              
              let pathD = '';
              switch (branch.pathType) {
                case 'curved':
                  pathD = `M ${centerX}% ${centerY}% Q ${(centerX + branchX) / 2 - 10}% ${(centerY + branchY) / 2 - 10}% ${branchX}% ${branchY}%`;
                  break;
                case 'branching':
                  pathD = `M ${centerX}% ${centerY}% L ${branchX - 5}% ${branchY + 5}% M ${branchX - 5}% ${branchY + 5}% L ${branchX}% ${branchY}%`;
                  break;
                case 'loop':
                  pathD = `M ${centerX}% ${centerY}% Q ${branchX + 10}% ${centerY}% ${branchX}% ${branchY}% Q ${centerX}% ${branchY + 10}% ${centerX}% ${centerY}%`;
                  break;
                case 'ascending':
                  pathD = `M ${centerX}% ${centerY}% Q ${(centerX + branchX) / 2}% ${branchY - 20}% ${branchX}% ${branchY}%`;
                  break;
                default:
                  pathD = `M ${centerX}% ${centerY}% L ${branchX}% ${branchY}%`;
              }

              return (
                <g key={branch.id}>
                  <path
                    d={pathD}
                    stroke={branch.color}
                    strokeWidth={activeNode === branch.id ? "4" : "2"}
                    fill="none"
                    filter="url(#neuralGlow)"
                    opacity={activeNode && activeNode !== branch.id ? 0.3 : 1}
                    className="transition-all duration-300"
                  />
                  
                  {/* Traveling Particles */}
                  {[...Array(particleFlow)].map((_, particleIndex) => (
                    <circle
                      key={particleIndex}
                      r="2"
                      fill={branch.color}
                      filter="url(#neuralGlow)"
                      className="opacity-80"
                    >
                      <animateMotion
                        dur={`${3 / particleFlow}s`}
                        repeatCount="indefinite"
                        begin={`${particleIndex * (1 / particleFlow)}s`}
                      >
                        <path d={pathD} />
                      </animateMotion>
                    </circle>
                  ))}
                </g>
              );
            })}
          </svg>

          {/* Central Momentum Neuron */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onMouseEnter={() => setActiveNode('central')}
            onMouseLeave={() => setActiveNode(null)}
            onClick={handleCentralNodeClick}
          >
            <div className="relative">
              {/* Central Node */}
              <div className={`
                w-20 h-20 rounded-full relative
                bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600
                animate-pulse-glow
                ${neuralStorm ? 'animate-neural-pulse' : ''}
                group-hover:scale-110 transition-transform duration-300
              `}>
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/40 to-transparent flex items-center justify-center backdrop-blur-sm">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                
                {/* Orbital Rings */}
                {[30, 40, 50].map((size, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border animate-spin"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderColor: `rgba(64, 224, 255, ${0.4 - i * 0.1})`,
                      animationDuration: `${6 + i * 2}s`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  />
                ))}
              </div>

              {/* Central Node Label */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-center">
                <span className="text-lg font-bold text-cyan-400 whitespace-nowrap">
                  🚀 Early Momentum Node
                </span>
              </div>
            </div>
          </motion.div>

          {/* Synaptic Branch Nodes */}
          {synapticBranches.map((branch, index) => {
            const IconComponent = branch.icon;
            
            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className="absolute z-20 cursor-pointer group"
                style={{
                  left: `${branch.position.x}%`,
                  top: `${branch.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setActiveNode(branch.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="relative">
                  {/* Branch Node */}
                  <div 
                    className={`
                      w-12 h-12 rounded-full relative
                      transition-all duration-300
                      group-hover:scale-125
                      ${activeNode === branch.id ? 'animate-neural-pulse' : ''}
                      ${activeNode && activeNode !== branch.id ? 'opacity-50' : 'opacity-100'}
                    `}
                    style={{
                      background: `radial-gradient(circle, ${branch.color}, ${branch.color}aa)`
                    }}
                  >
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 to-transparent flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`
                    absolute transition-all duration-500 pointer-events-none
                    ${activeNode === branch.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    ${branch.position.x > 50 ? 'right-16' : 'left-16'}
                    ${branch.position.y > 50 ? 'bottom-0' : 'top-0'}
                    w-64
                  `}>
                    <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30 shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-2xl" />
                      
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold text-white mb-2">
                          {branch.title}
                        </h4>
                        <p className="text-cyan-300 font-semibold text-lg mb-2">
                          {branch.metric}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {branch.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Node Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-30" />
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
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-20"
        >
          <blockquote className="text-2xl md:text-3xl italic text-cyan-300 font-semibold max-w-4xl mx-auto">
            "In startup time, we're already thinking at enterprise speed."
          </blockquote>
        </motion.div>

        {/* Neural Activity Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-full px-8 py-4 border border-cyan-400/30">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-cyan-400 animate-neural-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
            
            <span className="text-lg font-bold text-cyan-400 uppercase tracking-wider">
              Neural Activity: 
              <span className="text-white ml-2">ACCELERATING</span>
            </span>
            
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-cyan-400 animate-neural-pulse"
                  style={{ animationDelay: `${(i + 3) * 0.3}s` }}
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
