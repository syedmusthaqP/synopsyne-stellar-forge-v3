
import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Rocket } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Dynamic gradient overlay based on mouse position */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)`
        }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Animated badge */}
        <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
          <Zap className="w-4 h-4 text-neon mr-2" />
          <span className="text-white text-sm">Leading Innovation Since 2020</span>
        </div>

        {/* Main headline with animated text */}
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
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Custom solutions, cutting-edge technology, measurable results.
          We build the future, one line of code at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Primary CTA */}
          <button className="group relative overflow-hidden neon-border px-8 py-4 rounded-lg text-white hover:bg-cyan-500/10 transition-all transform hover:scale-105">
            <span className="relative z-10 flex items-center text-lg font-semibold">
              Start Your Digital Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          {/* Secondary CTA */}
          <button className="group glassmorphism px-8 py-4 rounded-lg text-white hover:bg-white/10 transition-all transform hover:scale-105">
            <span className="flex items-center text-lg font-semibold">
              <Rocket className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Explore Our Solutions
            </span>
          </button>
        </div>

        {/* Floating cards with stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { label: 'Projects Delivered', value: '500+', delay: '0s' },
            { label: 'Client Satisfaction', value: '99%', delay: '0.2s' },
            { label: 'Years of Excellence', value: '4+', delay: '0.4s' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 rounded-xl text-center animate-float hover:neon-border transition-all group cursor-pointer"
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-3xl font-bold text-neon mb-2 group-hover:animate-pulse">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
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
