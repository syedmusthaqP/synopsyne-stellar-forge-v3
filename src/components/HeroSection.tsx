
import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Rocket, Brain } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [neuralPulse, setNeuralPulse] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setNeuralPulse(prev => (prev + 1) % 8);
    }, 800);

    return () => clearInterval(pulseInterval);
  }, []);

  const neuralNodes = [
    { x: 15, y: 20, size: 12, delay: 0 },
    { x: 85, y: 15, size: 8, delay: 0.2 },
    { x: 70, y: 70, size: 10, delay: 0.4 },
    { x: 20, y: 80, size: 6, delay: 0.6 },
    { x: 50, y: 25, size: 14, delay: 0.8 },
    { x: 30, y: 50, size: 9, delay: 1 },
    { x: 80, y: 45, size: 7, delay: 1.2 },
    { x: 60, y: 85, size: 11, delay: 1.4 }
  ];

  const neuralConnections = [
    { from: 0, to: 4 }, { from: 1, to: 2 }, { from: 2, to: 6 },
    { from: 3, to: 5 }, { from: 4, to: 5 }, { from: 5, to: 6 },
    { from: 0, to: 3 }, { from: 1, to: 4 }
  ];

  const handleStartTransformation = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="min-h-screen flex items-center justify-start relative pt-20">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)`
          }}
        ></div>

        {/* Neural connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {neuralConnections.map((connection, index) => {
            const fromNode = neuralNodes[connection.from];
            const toNode = neuralNodes[connection.to];
            return (
              <line
                key={index}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="rgba(0, 212, 255, 0.2)"
                strokeWidth="1"
                className="transition-all duration-500"
                style={{
                  opacity: neuralPulse === index % 4 ? 0.6 : 0.2,
                  strokeWidth: neuralPulse === index % 4 ? '2' : '1'
                }}
              />
            );
          })}
        </svg>

        {/* Neural nodes */}
        {neuralNodes.map((node, index) => (
          <div
            key={index}
            className="absolute transition-all duration-700"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${node.delay}s`
            }}
          >
            {/* Node glow */}
            <div 
              className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 transition-all duration-500 ${
                neuralPulse === index ? 'scale-150 opacity-80' : 'scale-100 opacity-40'
              }`}
              style={{
                width: `${node.size * 2}px`,
                height: `${node.size * 2}px`,
                left: `-${node.size / 2}px`,
                top: `-${node.size / 2}px`,
                filter: 'blur(4px)'
              }}
            ></div>
            
            {/* Node core */}
            <div 
              className={`relative rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 transition-all duration-300 ${
                neuralPulse === index ? 'animate-pulse' : ''
              }`}
              style={{
                width: `${node.size}px`,
                height: `${node.size}px`,
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)'
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Company Logo with glowing effect - right side, slightly moved left */}
      <div className="hidden md:block absolute right-16 top-1/2 z-20 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          {/* Glowing gradient light behind logo */}
          <div className="absolute -inset-8 rounded-3xl blur-2xl opacity-50 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 60% 50%, #00D4FF 0%, #8B5CF6 50%, transparent 85%)',
              filter: 'blur(30px)',
              zIndex: 0,
            }}>
          </div>
          {/* Logo image */}
          <img
            src="/lovable-uploads/4b99589a-d4bb-4fbd-98d6-1b0fb06de699.png"
            alt="Synopsyne Dynamics Logo"
            className="relative z-10 max-w-[200px] rounded-xl shadow-lg"
            style={{
              border: '2px solid rgba(0, 212, 255, .44)',
              background: 'rgba(20,25,35,0.55)',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex justify-start">
        {/* Left Side: Hero Content - pushed to left */}
        <div className="w-full md:w-3/5 lg:w-1/2 text-left">
          {/* Animated badge */}
          <div className="inline-flex items-center glassmorphism px-6 py-3 rounded-full mb-10 animate-float">
            <Brain className="w-5 h-5 text-neon mr-3" />
            <span className="text-white text-sm font-medium">Neural Innovation Since 2020</span>
          </div>

          {/* Main headline with animated text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            We Engineer{' '}
            <span className="text-neon animate-text-glow block md:inline">Software</span>
            <br />
            That Transforms{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block md:inline">
              Industries
            </span>
          </h1>

          {/* Enhanced subheadline */}
          <div className="relative mb-12 max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative glassmorphism p-8 rounded-2xl border border-cyan-500/20">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Custom solutions, cutting-edge technology, measurable results.
                <br />
                <span className="text-cyan-400 font-semibold">We build the future, one neural connection at a time.</span>
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            {/* Primary CTA - Now functional */}
            <button 
              onClick={handleStartTransformation}
              className="group relative overflow-hidden neon-border px-10 py-5 rounded-xl text-white hover:bg-cyan-500/10 transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center text-lg font-bold">
                Start Your Neural Transformation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Secondary CTA */}
            <button className="group glassmorphism px-10 py-5 rounded-xl text-white hover:bg-white/10 transition-all transform hover:scale-105">
              <span className="flex items-center text-lg font-bold">
                <Rocket className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Explore Neural Solutions
              </span>
            </button>
          </div>

          {/* Redesigned floating card with only one stat */}
          <div className="max-w-sm">
            <div className="glassmorphism p-8 rounded-2xl text-center animate-float hover:neon-border transition-all group cursor-pointer border border-cyan-500/20">
              <div className="text-4xl font-bold text-neon mb-3 group-hover:animate-pulse">99%</div>
              <div className="text-gray-300 text-lg font-medium">Synaptic Satisfaction</div>
              <div className="text-gray-400 text-sm mt-2">Client satisfaction rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
