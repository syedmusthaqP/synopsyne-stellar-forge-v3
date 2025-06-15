
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FirstSynapsesSection from '../components/FirstSynapsesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>
      
      <Header />
      <HeroSection />
      <FirstSynapsesSection />
      <Footer />
    </div>
  );
};

export default Index;
