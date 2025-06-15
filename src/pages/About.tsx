
import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>
      
      <Header />
      
      {/* About Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
            <Users className="w-4 h-4 text-neon mr-2" />
            <span className="text-white text-sm">Our Story</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="text-neon animate-text-glow">Synopsyne</span>
            <br />
            Dynamics
          </h1>

          <div className="relative mb-12 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
            <div className="relative glassmorphism p-6 rounded-lg">
              <p className="text-lg md:text-xl text-gray-300">
                We are a team of neural architects, building connections that transform 
                the digital landscape through innovative software solutions and AI-driven experiences.
              </p>
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

      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
