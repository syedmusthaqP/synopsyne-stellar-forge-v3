
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Shield, Clock, Target, Code } from 'lucide-react';

const FirstSynapsesSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const validationNodes = [
    {
      id: 'foundation',
      icon: Rocket,
      title: 'Early Foundation Node',
      pattern: 'Startup Momentum Synapses',
      subtitle: 'Building From Day One:',
      metrics: [
        { label: 'Founded', value: 'October 2nd 2024', detail: '(6 months of focused development)' },
        { label: 'Active Projects', value: '3 pilot implementations', detail: 'underway' },
        { label: 'Client Feedback', value: '100% satisfaction', detail: 'on delivered milestones' },
        { label: 'Response Time', value: 'Average 4-hour response', detail: 'to all client inquiries' },
        { label: 'Project Delivery', value: 'On-time delivery', detail: 'for 100% of completed phases' }
      ],
      quote: "We're new, but we're not inexperienced. Every synapse counts.",
      color: 'from-blue-500 to-cyan-400',
      glowColor: 'rgba(59, 130, 246, 0.5)',
      position: { x: '20%', y: '30%' }
    },
    {
      id: 'technical',
      icon: Lightbulb,
      title: 'Technical Foundation Node',
      pattern: 'Capability Validation Synapses',
      subtitle: 'Proof of Technical Excellence:',
      metrics: [
        { label: 'Development Stack', value: 'Modern, scalable architecture', detail: 'from day one' },
        { label: 'Security First', value: 'SSL, encrypted communications', detail: 'secure coding practices' },
        { label: 'Quality Assurance', value: 'Rigorous testing protocols', detail: 'on every deliverable' },
        { label: 'Documentation', value: 'Complete technical documentation', detail: 'for all solutions' },
        { label: 'Backup Systems', value: '99.9% uptime guarantee', detail: 'with redundant infrastructure' }
      ],
      quote: "Built right from the first line of code.",
      color: 'from-purple-500 to-pink-400',
      glowColor: 'rgba(147, 51, 234, 0.5)',
      position: { x: '70%', y: '50%' }
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Enhanced Neural background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="neural-bg"></div>
        {/* Floating neural particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400 animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Neural connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="synapseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#00D4FF', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>
        
        {/* Main connection line between nodes */}
        <path
          d="M 20% 35% Q 50% 10% 70% 55%"
          stroke="url(#synapseGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-synaptic-fire"
        />
        
        {/* Additional neural pathways */}
        <path
          d="M 10% 20% Q 30% 40% 50% 25%"
          stroke="rgba(0, 212, 255, 0.3)"
          strokeWidth="1"
          fill="none"
          className="animate-synaptic-fire"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M 60% 70% Q 80% 30% 90% 60%"
          stroke="rgba(147, 51, 234, 0.3)"
          strokeWidth="1"
          fill="none"
          className="animate-synaptic-fire"
          style={{ animationDelay: '2s' }}
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-neon animate-text-glow">
            First Synapses - Building Neural Momentum
          </h2>
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            <span className="text-cyan-400">"From Zero to Neural Network: Our Initial Connections"</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Every breakthrough begins with a first client. Here's how we're building trust, one synapse at a time.
          </p>
        </motion.div>

        {/* Interactive Neural Network Layout */}
        <div className="relative min-h-[600px]">
          {validationNodes.map((node, index) => {
            const IconComponent = node.icon;
            const isActive = activeNode === node.id;
            
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="absolute"
                style={{
                  left: node.position.x,
                  top: node.position.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Central Neural Node */}
                <div
                  className={`
                    relative cursor-pointer transition-all duration-500 transform
                    ${isActive ? 'scale-110' : 'hover:scale-105'}
                  `}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Neural Core */}
                  <div className={`
                    w-24 h-24 rounded-full relative
                    bg-gradient-to-br ${node.color}
                    animate-pulse-glow
                    ${isActive ? 'animate-neural-pulse' : ''}
                  `}>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Orbital rings */}
                    <div className={`
                      absolute inset-0 rounded-full border-2 border-white/30
                      ${isActive ? 'animate-spin' : ''}
                    `} style={{ animationDuration: '8s' }}>
                      <div className="absolute -top-1 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2"></div>
                    </div>
                    
                    <div className={`
                      absolute -inset-4 rounded-full border border-white/20
                      ${isActive ? 'animate-spin' : ''}
                    `} style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                      <div className="absolute top-0 right-0 w-1 h-1 bg-cyan-400 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Information Panel */}
                  <div className={`
                    absolute top-full left-1/2 transform -translate-x-1/2 mt-8
                    w-80 transition-all duration-500
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                  `}>
                    <div className="relative">
                      {/* Neural connection to panel */}
                      <div className="absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent transform -translate-x-1/2"></div>
                      
                      {/* Content */}
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {node.title}
                          </h3>
                          <p className="text-sm text-cyan-400 font-semibold mb-3">
                            Neural Pattern: {node.pattern}
                          </p>
                          <p className="text-lg font-semibold text-gray-300 mb-4">
                            {node.subtitle}
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="space-y-3 mb-6">
                          {node.metrics.map((metric, metricIndex) => (
                            <motion.div
                              key={metricIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                              transition={{ duration: 0.3, delay: metricIndex * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-neural-pulse"></div>
                              <div>
                                <span className="text-white font-semibold">{metric.label}: </span>
                                <span className="text-cyan-300 font-bold">{metric.value}</span>
                                {metric.detail && (
                                  <span className="text-gray-400 ml-1">{metric.detail}</span>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg italic text-center text-cyan-300 font-semibold border-l-4 border-cyan-400 pl-4">
                          {node.quote}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Central hub node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-transparent border-2 border-white/30 animate-pulse-glow">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 animate-neural-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* Neural Activity Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 text-cyan-400">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-neural-pulse"></div>
            <span className="text-sm font-semibold">Neural Activity: ACTIVE</span>
            <div className="w-3 h-3 rounded-full bg-purple-400 animate-neural-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSynapsesSection;
