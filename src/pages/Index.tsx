
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Test visibility div */}
      <div className="fixed top-0 left-0 bg-red-500 text-white p-4 z-50 m-4">
        APP IS WORKING - INDEX PAGE LOADED
      </div>
      
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>
      
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;
