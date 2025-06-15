import React, { useEffect, useState } from 'react';
import { ArrowRight, Rocket, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [neuralPulse, setNeuralPulse] = useState(0);
  const navigate = useNavigate();

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

  const handleNeuralTransformation = () => {
    navigate('/contact');
  };

  const handleExploreSolutions = () => {
    navigate('/services');
  };

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

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
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

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Animated badge */}
        <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
          <Brain className="w-4 h-4 text-neon mr-2" />
          <span className="text-white text-sm">Neural Innovation Since 2020</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          We Engineer{' '}
          <span className="text-neon animate-text-glow">Software</span>
          <br />
          That Transforms{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Industries
          </span>
        </h1>

        {/* Subheadline */}
        <div className="relative mb-12 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
          <div className="relative glassmorphism p-6 rounded-lg">
            <p className="text-lg md:text-xl text-gray-300">
              Custom solutions, cutting-edge technology, measurable results.
              We build the future, one neural connection at a time.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Primary CTA */}
          <button 
            onClick={handleNeuralTransformation}
            className="group relative overflow-hidden neon-border px-8 py-4 rounded-lg text-white hover:bg-cyan-500/10 transition-all transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center text-lg font-semibold">
              Start Your Neural Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          {/* Secondary CTA */}
          <button 
            onClick={handleExploreSolutions}
            className="group glassmorphism px-8 py-4 rounded-lg text-white hover:bg-white/10 transition-all transform hover:scale-105"
          >
            <span className="flex items-center text-lg font-semibold">
              <Rocket className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Explore Neural Solutions
            </span>
          </button>
        </div>

        {/* Floating cards with stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { label: 'Successful Projects', value: '' },
            { label: 'Client Satisfaction', value: '' },
            { label: 'Years of Excellence', value: '' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 rounded-xl text-center animate-float hover:neon-border transition-all group cursor-pointer min-h-[90px] flex flex-col items-center justify-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Value is intentionally left empty for user to add later */}
              <div className="text-3xl font-bold text-neon mb-2 group-hover:animate-pulse">{stat.value}</div>
              <div className="text-gray-300 text-base">{stat.label}</div>
            </div>
          ))}
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
