
import React, { useEffect, useState } from 'react';
import { ArrowRight, Rocket, Brain, Code, Database, Cpu } from 'lucide-react';
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
      {/* Professional AI/Software Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)`
          }}
        ></div>

        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Neural Network Nodes */}
        <div className="absolute inset-0">
          {/* Central Processing Unit */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 animate-pulse flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
              <Brain className="w-10 h-10 text-cyan-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg animate-ping"></div>
            </div>
          </div>

          {/* Neural Network Nodes */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-lg bg-black/30 backdrop-blur-sm border border-cyan-400/40 animate-float flex items-center justify-center">
            <Code className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-lg bg-black/30 backdrop-blur-sm border border-purple-400/40 animate-float flex items-center justify-center" style={{animationDelay: '1s'}}>
            <Database className="w-5 h-5 text-purple-400" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-14 h-14 rounded-lg bg-black/30 backdrop-blur-sm border border-blue-400/40 animate-float flex items-center justify-center" style={{animationDelay: '2s'}}>
            <Cpu className="w-7 h-7 text-blue-400" />
          </div>

          {/* Code Snippets */}
          <div className="absolute top-20 left-10 opacity-20">
            <div className="text-cyan-400 font-mono text-xs space-y-1 animate-pulse glassmorphism p-3 rounded border border-cyan-400/20">
              <div>const AI = () =&gt; &#123;</div>
              <div>  return future;</div>
              <div>&#125;;</div>
            </div>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <div className="text-purple-400 font-mono text-xs space-y-1 animate-pulse glassmorphism p-3 rounded border border-purple-400/20" style={{animationDelay: '1s'}}>
              <div>class Neural &#123;</div>
              <div>  process() &#123;</div>
              <div>    return data;</div>
              <div>  &#125;</div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Data Flow Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 212, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" />
              </linearGradient>
            </defs>
            <line x1="25" y1="25" x2="75" y2="75" stroke="url(#dataFlow)" strokeWidth="0.1" strokeDasharray="2,2" opacity="0.6">
              <animate attributeName="stroke-dashoffset" values="0;4" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="75" y1="25" x2="25" y2="75" stroke="url(#dataFlow)" strokeWidth="0.1" strokeDasharray="2,2" opacity="0.4">
              <animate attributeName="stroke-dashoffset" values="0;4" dur="4s" repeatCount="indefinite"/>
            </line>
          </svg>

          {/* Matrix-style Data Points */}
          <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-5/6 right-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/12 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/12 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>

          {/* Tech Architecture Diagrams */}
          <div className="absolute top-10 right-20 opacity-15">
            <svg width="80" height="60" viewBox="0 0 80 60">
              <rect x="10" y="10" width="15" height="10" fill="none" stroke="rgba(0, 212, 255, 0.8)" strokeWidth="1"/>
              <rect x="35" y="10" width="15" height="10" fill="none" stroke="rgba(147, 51, 234, 0.8)" strokeWidth="1"/>
              <rect x="60" y="10" width="15" height="10" fill="none" stroke="rgba(0, 212, 255, 0.8)" strokeWidth="1"/>
              <line x1="25" y1="15" x2="35" y2="15" stroke="rgba(0, 212, 255, 0.6)" strokeWidth="1"/>
              <line x1="50" y1="15" x2="60" y2="15" stroke="rgba(147, 51, 234, 0.6)" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-10 left-20 opacity-15">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <circle cx="20" cy="20" r="8" fill="none" stroke="rgba(147, 51, 234, 0.8)" strokeWidth="1"/>
              <circle cx="40" cy="20" r="6" fill="none" stroke="rgba(0, 212, 255, 0.8)" strokeWidth="1"/>
              <line x1="28" y1="20" x2="34" y2="20" stroke="rgba(147, 51, 234, 0.6)" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* Subtle Tech Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/60"></div>
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
