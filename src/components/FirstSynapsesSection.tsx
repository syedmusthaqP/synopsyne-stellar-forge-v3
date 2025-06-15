
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Users, Target, Zap } from 'lucide-react';

const FirstSynapsesSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const validationNodes = [
    {
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
      glowColor: 'rgba(6, 182, 212, 0.6)',
      position: { x: '25%', y: '40%' }
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Enhanced Neural background with particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="neural-bg"></div>
        {/* Dynamic neural particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#00D4FF', '#8B5CF6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 4)]
              }, transparent)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Complex neural connection network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="primarySynapse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#00D4FF', stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.5 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main neural pathways */}
        <path
          d="M 5% 20% Q 25% 45% 50% 50% T 95% 30%"
          stroke="url(#primarySynapse)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          className="animate-synaptic-fire"
        />
        
        <path
          d="M 10% 80% Q 30% 55% 50% 50% T 90% 70%"
          stroke="rgba(0, 212, 255, 0.4)"
          strokeWidth="2"
          fill="none"
          className="animate-synaptic-fire"
          style={{ animationDelay: '1s' }}
        />
        
        <path
          d="M 50% 10% Q 25% 25% 25% 45% T 25% 90%"
          stroke="rgba(147, 51, 234, 0.3)"
          strokeWidth="1.5"
          fill="none"
          className="animate-synaptic-fire"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Neural junction points */}
        {[
          { x: '15%', y: '25%' },
          { x: '35%', y: '60%' },
          { x: '65%', y: '35%' },
          { x: '85%', y: '75%' }
        ].map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#00D4FF"
            className="animate-neural-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-neon animate-text-glow">
            Neural Momentum
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Proving Our Synapses Fire
          </h3>
          <div className="text-xl md:text-2xl text-cyan-400 mb-6 font-medium">
            "From Idea to Impact: Our First Neural Connections"
          </div>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every breakthrough begins with a single synapse. Here's proof our network is growing stronger every day.
          </p>
        </motion.div>

        {/* Interactive Neural Network Layout */}
        <div className="relative min-h-[700px] flex items-center justify-center">
          {/* Central Processing Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              {/* Core neural processor */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 animate-pulse-glow relative">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/30 to-transparent flex items-center justify-center">
                  <Zap className="w-12 h-12 text-white animate-neural-pulse" />
                </div>
                
                {/* Energy rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="absolute -top-2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-neural-pulse"></div>
                </div>
                
                <div className="absolute -inset-6 rounded-full border border-purple-400/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full animate-neural-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-neural-pulse"></div>
                </div>
                
                <div className="absolute -inset-12 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-1/4 right-0 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-0 left-1/4 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Validation Node */}
          {validationNodes.map((node, index) => {
            const IconComponent = node.icon;
            const isActive = activeNode === node.id;
            
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.4 + 0.6 }}
                className="absolute z-10"
                style={{
                  left: node.position.x,
                  top: node.position.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div
                  className={`
                    relative cursor-pointer transition-all duration-700 transform
                    ${isActive ? 'scale-110' : 'hover:scale-105'}
                  `}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Neural Node Core */}
                  <div className={`
                    w-28 h-28 rounded-full relative
                    bg-gradient-to-br ${node.color}
                    animate-pulse-glow
                    ${isActive ? 'animate-neural-pulse' : ''}
                  `}>
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/25 to-transparent flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Orbital systems */}
                    <div className={`
                      absolute inset-0 rounded-full border-2 border-white/40
                      ${isActive ? 'animate-spin' : ''}
                    `} style={{ animationDuration: '8s' }}>
                      <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 animate-neural-pulse"></div>
                    </div>
                    
                    <div className={`
                      absolute -inset-5 rounded-full border border-cyan-400/30
                      ${isActive ? 'animate-spin' : ''}
                    `} style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                      <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-neural-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full animate-neural-pulse"></div>
                    </div>
                  </div>

                  {/* Enhanced Information Display */}
                  <div className={`
                    absolute top-full left-1/2 transform -translate-x-1/2 mt-10
                    w-96 transition-all duration-700
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}
                  `}>
                    <div className="relative">
                      {/* Neural connection beam */}
                      <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-gradient-to-b from-cyan-400 via-purple-400 to-transparent transform -translate-x-1/2"></div>
                      
                      {/* Content container */}
                      <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/20 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-3xl"></div>
                        
                        <div className="relative z-10">
                          <h3 className="text-3xl font-bold text-white mb-3">
                            {node.title}
                          </h3>
                          <p className="text-sm text-cyan-400 font-semibold mb-4 uppercase tracking-wider">
                            Neural Pattern: {node.pattern}
                          </p>
                          <p className="text-xl font-semibold text-gray-200 mb-6">
                            {node.subtitle}
                          </p>

                          {/* Enhanced Metrics */}
                          <div className="space-y-4 mb-8">
                            {node.metrics.map((metric, metricIndex) => (
                              <motion.div
                                key={metricIndex}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -30 }}
                                transition={{ duration: 0.4, delay: metricIndex * 0.1 }}
                                className="flex items-start space-x-4"
                              >
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 flex-shrink-0 animate-neural-pulse"></div>
                                <div className="flex-1">
                                  <span className="text-white font-semibold text-lg">{metric.label}: </span>
                                  <span className="text-cyan-300 font-bold text-lg">{metric.value}</span>
                                  {metric.detail && (
                                    <div className="text-gray-300 mt-1 text-sm">{metric.detail}</div>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Enhanced Quote */}
                          <blockquote className="relative text-xl italic text-center text-cyan-300 font-semibold">
                            <div className="absolute -left-4 -top-2 text-4xl text-cyan-400/50">"</div>
                            <div className="pl-8 pr-8">
                              {node.quote}
                            </div>
                            <div className="absolute -right-4 -bottom-2 text-4xl text-cyan-400/50">"</div>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Satellite neural nodes */}
          {[
            { icon: TrendingUp, position: { x: '70%', y: '25%' }, color: 'from-green-400 to-emerald-500' },
            { icon: Users, position: { x: '80%', y: '65%' }, color: 'from-blue-400 to-indigo-500' },
            { icon: Target, position: { x: '20%', y: '75%' }, color: 'from-orange-400 to-red-500' }
          ].map((satellite, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
              className="absolute z-5"
              style={{
                left: satellite.position.x,
                top: satellite.position.y,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${satellite.color} animate-pulse-glow opacity-70 hover:opacity-100 transition-opacity duration-300`}>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
                  <satellite.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Activity Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-full px-8 py-4 border border-cyan-400/20">
            <div className="w-4 h-4 rounded-full bg-cyan-400 animate-neural-pulse"></div>
            <span className="text-lg font-semibold text-cyan-400 uppercase tracking-wider">Neural Activity: ACCELERATING</span>
            <div className="w-4 h-4 rounded-full bg-purple-400 animate-neural-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSynapsesSection;
