
import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, Brain, Cpu, Sparkles } from 'lucide-react';

const NeuralContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(0);
  const [neuralNodes, setNeuralNodes] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate random neural nodes for the background effect
    const nodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setNeuralNodes(nodes);

    // Continuous pulse effect
    const interval = setInterval(() => {
      setPulseIntensity(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group">
      {/* Outer holographic container */}
      <div className="relative p-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse-glow">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
        
        {/* Neural network background */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
            {neuralNodes.map((node, index) => (
              <g key={node.id}>
                {/* Neural connections */}
                {neuralNodes.slice(index + 1).map((targetNode) => (
                  <line
                    key={`${node.id}-${targetNode.id}`}
                    x1={node.x}
                    y1={node.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke="url(#neural-gradient)"
                    strokeWidth="0.1"
                    opacity="0.3"
                    className="animate-synaptic-fire"
                    style={{ animationDelay: `${node.delay}s` }}
                  />
                ))}
                {/* Neural nodes */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="0.5"
                  fill="rgba(0, 212, 255, 0.8)"
                  className="animate-neural-pulse"
                  style={{ animationDelay: `${node.delay}s` }}
                />
              </g>
            ))}
            <defs>
              <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main button container */}
        <div
          className="relative bg-black/90 backdrop-blur-xl rounded-xl p-6 cursor-pointer transform transition-all duration-500 hover:scale-105 group-hover:bg-black/80"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Holographic text effect */}
          <div className="relative z-10 flex items-center space-x-4">
            {/* Animated icon cluster */}
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30">
                <MessageCircle 
                  className={`w-8 h-8 text-cyan-400 transition-all duration-300 ${
                    isHovered ? 'animate-bounce' : ''
                  }`} 
                />
                {/* Orbiting mini icons */}
                <Brain 
                  className="absolute w-4 h-4 text-purple-400 animate-orbit" 
                  style={{ animationDuration: '3s' }}
                />
                <Zap 
                  className="absolute w-3 h-3 text-pink-400 animate-orbit" 
                  style={{ animationDuration: '2s', animationDirection: 'reverse' }}
                />
                <Cpu 
                  className="absolute w-3 h-3 text-cyan-400 animate-orbit" 
                  style={{ animationDuration: '4s' }}
                />
              </div>
              
              {/* Pulsing energy rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-pulse"></div>
            </div>

            {/* Text with glitch and glow effects */}
            <div className="flex flex-col">
              <div className="relative">
                <h3 
                  className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-glow"
                  style={{
                    textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                    filter: isHovered ? 'hue-rotate(30deg)' : 'hue-rotate(0deg)',
                    transition: 'filter 0.3s ease'
                  }}
                >
                  GET IN TOUCH
                </h3>
                {isHovered && (
                  <h3 className="absolute inset-0 text-2xl font-bold text-cyan-400 animate-glitch opacity-30">
                    GET IN TOUCH
                  </h3>
                )}
              </div>
              
              <p className="text-gray-300 text-sm animate-morphing-text">
                {isHovered ? '⚡ Neural Link Activated ⚡' : 'Connect to the Future'}
              </p>
              
              {/* Dynamic progress bar */}
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"
                  style={{ width: isHovered ? '100%' : '60%' }}
                />
              </div>
            </div>

            {/* Sparkle effects */}
            <div className="relative">
              {isHovered && (
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              )}
            </div>
          </div>

          {/* Energy wave effect */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Holographic projection effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Matrix-style falling code effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono opacity-50 animate-bounce"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            >
              01101001
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NeuralContactButton;
