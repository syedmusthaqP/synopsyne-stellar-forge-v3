
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import NeuralDevelopmentProcess from '../components/ui/neural-development-process';

const NeuralServiceArchitecture = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Neural <span className="text-neon animate-text-glow">Service</span> Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Advanced neural network architectures for modern service delivery
          </p>
        </div>
      </section>
      
      {/* Neural Development Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <NeuralDevelopmentProcess />
        </div>
      </section>
      
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default NeuralServiceArchitecture;
