
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Users, Target, Zap, Activity, Brain } from 'lucide-react';

const FirstSynapsesSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [neuralActivity, setNeuralActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const validationNode = {
    id: 'momentum',
    icon: Rocket,
    title: 'Early Momentum Node',
    pattern: 'Growth Acceleration Synapses',
    subtitle: 'Startup Stats That Matter:',
    metrics: [
      { label: 'Founded', value: 'January 2024', detail: '(6 months of pure momentum)' },
      { label: 'Client Base', value: '8 active projects', detail: 'across 5 industries' },
      { label: 'Growth Rate', value: '200% quarter-over-quarter', detail: 'client acquisition' },
      { label: 'Retention', value: '100% client retention', detail: '(every client has expanded their engagement)' },
      { label: 'Revenue Growth', value: '150% month-over-month', detail: 'since launch' }
    ],
    quote: "In startup time, we're already thinking at enterprise speed.",
    color: 'from-cyan-400 via-blue-500 to-purple-600',
    position: { x: '25%', y: '45%' }
  };

  const neuralConnections = [
    { from: { x: 20, y: 30 }, to: { x: 50, y: 50 }, delay: 0 },
    { from: { x: 80, y: 20 }, to: { x: 50, y: 50 }, delay: 0.5 },
    { from: { x: 15, y: 70 }, to: { x: 50, y: 50 }, delay: 1 },
    { from: { x: 85, y: 80 }, to: { x: 50, y: 50 }, delay: 1.5 },
    { from: { x: 50, y: 10 }, to: { x: 50, y: 50 }, delay: 2 },
    { from: { x: 50, y: 90 }, to: { x: 50, y: 50 }, delay: 2.5 }
  ];

  const satelliteNodes = [
    { icon: TrendingUp, position: { x: 20, y: 30 }, color: 'from-green-400 to-emerald-500', label: 'Growth' },
    { icon: Users, position: { x: 80, y: 20 }, color: 'from-blue-400 to-indigo-500', label: 'Clients' },
    { icon: Target, position: { x: 15, y: 70 }, color: 'from-orange-400 to-red-500', label: 'Precision' },
    { icon: Activity, position: { x: 85, y: 80 }, color: 'from-purple-400 to-pink-500', label: 'Performance' },
    { icon: Brain, position: { x: 50, y: 10 }, color: 'from-indigo-400 to-purple-500', label: 'Intelligence' },
    { icon: Zap, position: { x: 50, y: 90 }, color: 'from-yellow-400 to-orange-500', label: 'Energy' }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Advanced Neural Background */}
      <div className="absolute inset-0">
        {/* Dynamic neural mesh */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-neural-pulse"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['#00D4FF', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'][Math.floor(Math.random() * 5)]
                }, transparent)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Neural wave patterns */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform rotate-45 animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform -rotate-45 animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          />
        </div>
      </div>

      {/* Enhanced Neural Network SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="neuralFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#00D4FF', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0 }} />
          </linearGradient>
          
          <filter id="neuralGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="neuralPulse">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feFlood floodColor="#00D4FF" result="glowColor"/>
            <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
            <feMerge>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic neural pathways */}
        {neuralConnections.map((connection, i) => (
          <g key={i}>
            <path
              d={`M ${connection.from.x}% ${connection.from.y}% Q 50% 50% ${connection.to.x}% ${connection.to.y}%`}
              stroke="url(#neuralFlow)"
              strokeWidth="2"
              fill="none"
              filter="url(#neuralGlow)"
              className="animate-synaptic-fire"
              style={{ animationDelay: `${connection.delay}s` }}
            />
            
            {/* Neural impulse particles */}
            <circle
              r="3"
              fill="#00D4FF"
              filter="url(#neuralPulse)"
              className="animate-neural-pulse"
              style={{ animationDelay: `${connection.delay}s` }}
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin={`${connection.delay}s`}
              >
                <path d={`M ${connection.from.x}% ${connection.from.y}% Q 50% 50% ${connection.to.x}% ${connection.to.y}%`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* Central neural nexus rings */}
        <g transform="translate(50%, 50%)">
          {[30, 50, 70, 90].map((radius, i) => (
            <circle
              key={i}
              r={radius}
              fill="none"
              stroke={`rgba(0, 212, 255, ${0.3 - i * 0.05})`}
              strokeWidth="1"
              className="animate-spin"
              style={{ 
                animationDuration: `${20 + i * 10}s`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
              }}
            />
          ))}
        </g>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header with Neural Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <div className="relative">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text-glow">
              Neural Momentum
            </h2>
            
            {/* Floating neural particles around title */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${10 + (i % 2) * 80}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i}s`
                }}
              />
            ))}
          </div>
          
          <h3 className="text-4xl md:text-5xl font-semibold mb-8 text-white animate-morphing-text">
            Proving Our Synapses Fire
          </h3>
          
          <div className="text-2xl md:text-3xl text-cyan-400 mb-8 font-medium relative">
            <span className="relative z-10">"From Idea to Impact: Our First Neural Connections"</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" />
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every breakthrough begins with a single synapse. Here's proof our network is growing stronger every day.
          </p>
        </motion.div>

        {/* Advanced Neural Network Layout */}
        <div className="relative min-h-[800px] flex items-center justify-center">
          {/* Central Neural Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="relative">
              {/* Core neural processor with multiple layers */}
              <div className="w-40 h-40 rounded-full relative">
                {/* Outer energy field */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/40 to-purple-600/30 animate-pulse-glow" />
                
                {/* Main core */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 animate-pulse-glow">
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/40 to-transparent backdrop-blur-sm flex items-center justify-center">
                    <Zap className="w-16 h-16 text-white animate-neural-pulse" />
                  </div>
                </div>

                {/* Multiple orbital rings */}
                {[60, 80, 100, 120].map((size, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full border-2 animate-spin`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: `50%`,
                      left: `50%`,
                      transform: 'translate(-50%, -50%)',
                      borderColor: `rgba(${i % 2 === 0 ? '0, 212, 255' : '139, 92, 246'}, ${0.4 - i * 0.05})`,
                      animationDuration: `${8 + i * 4}s`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  >
                    {/* Orbital particles */}
                    <div 
                      className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-neural-pulse"
                      style={{
                        top: '-6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Satellite Neural Nodes */}
          {satelliteNodes.map((node, index) => {
            const IconComponent = node.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                className="absolute z-20 cursor-pointer group"
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setActiveNode(`satellite-${index}`)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="relative">
                  {/* Node core */}
                  <div className={`
                    w-24 h-24 rounded-full relative
                    bg-gradient-to-br ${node.color}
                    animate-pulse-glow
                    group-hover:scale-110 transition-transform duration-300
                    ${activeNode === `satellite-${index}` ? 'animate-neural-pulse' : ''}
                  `}>
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/30 to-transparent flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Node label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3">
                    <span className="text-sm font-semibold text-white bg-slate-800/80 px-3 py-1 rounded-full border border-cyan-400/30">
                      {node.label}
                    </span>
                  </div>

                  {/* Energy pulses */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                </div>
              </motion.div>
            );
          })}

          {/* Main Validation Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0, x: -200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="absolute z-20"
            style={{
              left: validationNode.position.x,
              top: validationNode.position.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div
              className="relative cursor-pointer group"
              onMouseEnter={() => setActiveNode(validationNode.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Enhanced node design */}
              <div className={`
                w-32 h-32 rounded-full relative
                bg-gradient-to-br ${validationNode.color}
                animate-pulse-glow
                group-hover:scale-110 transition-all duration-500
                ${activeNode === validationNode.id ? 'animate-neural-pulse' : ''}
              `}>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/25 to-transparent flex items-center justify-center backdrop-blur-sm">
                  <validationNode.icon className="w-12 h-12 text-white" />
                </div>

                {/* Multiple energy rings */}
                {[40, 60, 80].map((size, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border animate-spin"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderColor: `rgba(255, 255, 255, ${0.3 - i * 0.1})`,
                      animationDuration: `${6 + i * 2}s`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  />
                ))}
              </div>

              {/* Enhanced Information Display */}
              <div className={`
                absolute top-full left-1/2 transform -translate-x-1/2 mt-12
                w-[500px] transition-all duration-700
                ${activeNode === validationNode.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
              `}>
                <div className="relative">
                  {/* Neural connection beam */}
                  <div className="absolute -top-12 left-1/2 w-1 h-12 bg-gradient-to-b from-cyan-400 via-purple-400 to-transparent transform -translate-x-1/2" />
                  
                  {/* Enhanced content container */}
                  <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl p-10 border border-cyan-400/30 shadow-2xl">
                    {/* Neural pattern overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-3xl" />
                    
                    {/* Floating particles */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-40"
                        style={{
                          left: `${10 + i * 10}%`,
                          top: `${10 + (i % 3) * 30}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                    
                    <div className="relative z-10">
                      <h3 className="text-4xl font-bold text-white mb-4 animate-text-glow">
                        {validationNode.title}
                      </h3>
                      <p className="text-sm text-cyan-400 font-semibold mb-6 uppercase tracking-wider">
                        Neural Pattern: {validationNode.pattern}
                      </p>
                      <p className="text-2xl font-semibold text-gray-200 mb-8">
                        {validationNode.subtitle}
                      </p>

                      {/* Enhanced Metrics with neural styling */}
                      <div className="space-y-6 mb-10">
                        {validationNode.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: activeNode === validationNode.id ? 1 : 0, x: activeNode === validationNode.id ? 0 : -40 }}
                            transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                            className="flex items-start space-x-6 group"
                          >
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 flex-shrink-0 animate-neural-pulse group-hover:scale-125 transition-transform" />
                            <div className="flex-1">
                              <span className="text-white font-semibold text-xl">{metric.label}: </span>
                              <span className="text-cyan-300 font-bold text-xl">{metric.value}</span>
                              {metric.detail && (
                                <div className="text-gray-300 mt-2 text-base italic">{metric.detail}</div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Enhanced Quote with neural effects */}
                      <blockquote className="relative text-2xl italic text-center text-cyan-300 font-semibold p-6 border-l-4 border-cyan-400/50 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-r-lg">
                        <div className="absolute -left-6 -top-4 text-6xl text-cyan-400/30">"</div>
                        <div className="relative z-10">
                          {validationNode.quote}
                        </div>
                        <div className="absolute -right-6 -bottom-4 text-6xl text-cyan-400/30">"</div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Neural Activity Monitor */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-full px-10 py-6 border border-cyan-400/30">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-full bg-cyan-400 animate-neural-pulse" />
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-neural-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-neural-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            
            <span className="text-xl font-bold text-cyan-400 uppercase tracking-wider">
              Neural Activity: 
              <span className="text-white ml-2 animate-text-glow">ACCELERATING</span>
            </span>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-neural-pulse" style={{ animationDelay: '0.9s' }} />
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-neural-pulse" style={{ animationDelay: '1.2s' }} />
              <div className="w-5 h-5 rounded-full bg-cyan-400 animate-neural-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
          
          {/* Neural activity graph */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                style={{ width: `${60 + Math.sin(neuralActivity * 0.1) * 20}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">Real-time neural network growth</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSynapsesSection;
