
import React, { useEffect, useState } from 'react';
import { ArrowRight, Rocket, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const handleNeuralTransformation = () => {
    navigate('/contact');
  };

  const handleExploreSolutions = () => {
    navigate('/services');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* AI/Software Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)`
          }}
        ></div>

        {/* Animated Neural Network Nodes */}
        <div className="absolute inset-0">
          {/* Central AI Brain Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 animate-pulse flex items-center justify-center">
              <Brain className="w-10 h-10 text-cyan-300" />
            </div>
            
            {/* Neural Connection Lines */}
            <svg className="absolute inset-0 w-96 h-96 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 400 400">
              {/* Connection lines with animation */}
              <g className="animate-pulse">
                <line x1="200" y1="200" x2="80" y2="120" stroke="rgba(0, 212, 255, 0.6)" strokeWidth="2" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="200" y1="200" x2="320" y2="120" stroke="rgba(0, 212, 255, 0.6)" strokeWidth="2" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite"/>
                </line>
                <line x1="200" y1="200" x2="80" y2="280" stroke="rgba(147, 51, 234, 0.6)" strokeWidth="2" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="200" y1="200" x2="320" y2="280" stroke="rgba(147, 51, 234, 0.6)" strokeWidth="2" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="1.8s" repeatCount="indefinite"/>
                </line>
                <line x1="200" y1="200" x2="200" y2="80" stroke="rgba(0, 212, 255, 0.6)" strokeWidth="2" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="2.2s" repeatCount="indefinite"/>
                </line>
                <line x1="200" y1="200" x2="200" y2="320" stroke="rgba(147, 51, 234, 0.6)" strokeWidth="2" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="2.8s" repeatCount="indefinite"/>
                </line>
              </g>
            </svg>
          </div>

          {/* Software/Code Elements */}
          <div className="absolute top-20 left-20 w-12 h-12 border border-cyan-400/30 rounded-lg animate-float flex items-center justify-center">
            <div className="text-cyan-400 text-xs font-mono">&lt;/&gt;</div>
          </div>
          <div className="absolute top-32 right-32 w-10 h-10 border border-purple-400/30 rounded-lg animate-float flex items-center justify-center" style={{animationDelay: '1s'}}>
            <div className="text-purple-400 text-xs font-mono">AI</div>
          </div>
          <div className="absolute bottom-32 left-32 w-14 h-14 border border-blue-400/30 rounded-lg animate-float flex items-center justify-center" style={{animationDelay: '2s'}}>
            <div className="text-blue-400 text-xs font-mono">ML</div>
          </div>
          <div className="absolute bottom-20 right-20 w-12 h-12 border border-pink-400/30 rounded-lg animate-float flex items-center justify-center" style={{animationDelay: '1.5s'}}>
            <div className="text-pink-400 text-xs font-mono">DB</div>
          </div>

          {/* Neural Nodes */}
          <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400/50 to-blue-500/50 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400/50 to-pink-500/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400/50 to-cyan-500/50 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400/50 to-purple-500/50 animate-pulse" style={{animationDelay: '1.5s'}}></div>

          {/* Data Flow Particles */}
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/12 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/12 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px'
          }}></div>
        </div>
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
