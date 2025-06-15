
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
      glowColor: 'rgba(59, 130, 246, 0.5)'
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
      glowColor: 'rgba(147, 51, 234, 0.5)'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Neural background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="neural-bg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon animate-text-glow">
            First Synapses - Building Neural Momentum
          </h2>
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            <span className="text-cyan-400">"From Zero to Neural Network: Our Initial Connections"</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Every breakthrough begins with a first client. Here's how we're building trust, one synapse at a time.
          </p>
        </motion.div>

        {/* Interactive Neural Validation Nodes */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {validationNodes.map((node, index) => {
            const IconComponent = node.icon;
            const isActive = activeNode === node.id;
            
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div
                  className={`
                    relative p-8 rounded-2xl glassmorphism border-2 cursor-pointer
                    transition-all duration-500 transform
                    ${isActive ? 'scale-105 border-cyan-400' : 'border-white/20 hover:border-cyan-400/50'}
                    ${isActive ? 'shadow-2xl' : 'hover:shadow-xl'}
                  `}
                  style={{
                    boxShadow: isActive ? `0 0 30px ${node.glowColor}` : undefined
                  }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Neural pulse effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-20
                    bg-gradient-to-br ${node.color}
                    ${isActive ? 'animate-neural-pulse' : ''}
                  `}></div>

                  {/* Icon and title */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center mb-4">
                      <div className={`
                        p-3 rounded-full bg-gradient-to-br ${node.color}
                        mr-4 animate-pulse-glow
                      `}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {node.title}
                        </h3>
                        <p className="text-sm text-cyan-400 font-semibold">
                          Neural Pattern: {node.pattern}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-gray-300 mb-4">
                      {node.subtitle}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="relative z-10 space-y-4 mb-6">
                    {node.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + metricIndex * 0.1 }}
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
                  <div className="relative z-10">
                    <blockquote className="text-lg italic text-center text-cyan-300 font-semibold border-l-4 border-cyan-400 pl-4">
                      {node.quote}
                    </blockquote>
                  </div>

                  {/* Synaptic connections */}
                  <div className={`
                    absolute top-1/2 right-0 w-20 h-1 bg-gradient-to-r ${node.color}
                    transform translate-x-full -translate-y-1/2 opacity-60
                    ${isActive ? 'animate-synaptic-fire' : ''}
                  `}></div>
                </div>

                {/* Floating neural nodes */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full glassmorphism animate-float opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full glassmorphism animate-float opacity-40" style={{animationDelay: '1s'}}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Connection line between nodes */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 animate-synaptic-fire"></div>
      </div>
    </section>
  );
};

export default FirstSynapsesSection;
