import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, TrendingUp, Award, Users, Zap, RefreshCw, Briefcase, Star } from 'lucide-react';
import { GradientText } from '@/components/ui/gradient-text';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VisionPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 0 25px rgba(0, 195, 255, 0.4)",
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>

      {/* Background light effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(0,195,255,0.03) 0%, rgba(0,195,255,0) 70%)'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(201,97,222,0.03) 0%, rgba(201,97,222,0) 70%)'
        }}></div>
        
        {/* Grid pattern overlay */}
        <svg width="100%" height="100%" className="opacity-10">
          <defs>
            <pattern id="grid-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.5" fill="#8acdff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>
      
      <Header />
      
      <div className="container mx-auto container-padding py-12 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="flex items-center justify-center text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#00c3ff] mr-3">•</span>
            <GradientText>From Vision to Impact</GradientText>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A passionate entrepreneur with experience in technology implementation
            and business development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Experience & Skill Cards */}
          <div className="lg:col-span-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {/* Experience Card */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-xl p-6 border border-[#1e4976]/60 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c3ff]/5 rounded-full blur-3xl"></div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#00c3ff]/10 rounded-full flex items-center justify-center mr-3">
                    <Briefcase className="h-5 w-5 text-[#00c3ff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>
                <p className="text-gray-300 mb-3">10+ years of industry expertise</p>
                <div className="h-1 w-16 bg-gradient-to-r from-[#00c3ff] to-[#c961de] rounded-full"></div>
              </motion.div>
              
              {/* Strategy Card */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-xl p-6 border border-[#1e4976]/60 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c961de]/5 rounded-full blur-3xl"></div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#c961de]/10 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-[#c961de]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Strategy</h3>
                </div>
                <p className="text-gray-300 mb-3">Innovative business solutions</p>
                <div className="h-1 w-16 bg-gradient-to-r from-[#c961de] to-[#00c3ff] rounded-full"></div>
              </motion.div>
              
              {/* Tech Vision Card */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-xl p-6 border border-[#1e4976]/60 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c3ff]/5 rounded-full blur-3xl"></div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#00c3ff]/10 rounded-full flex items-center justify-center mr-3">
                    <Code className="h-5 w-5 text-[#00c3ff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Tech Vision</h3>
                </div>
                <p className="text-gray-300 mb-3">AI & automation integration</p>
                <div className="h-1 w-16 bg-gradient-to-r from-[#00c3ff] to-[#c961de] rounded-full"></div>
              </motion.div>
              
              {/* Growth Card */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-xl p-6 border border-[#1e4976]/60 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c961de]/5 rounded-full blur-3xl"></div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#c961de]/10 rounded-full flex items-center justify-center mr-3">
                    <TrendingUp className="h-5 w-5 text-[#c961de]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Growth</h3>
                </div>
                <p className="text-gray-300 mb-3">Business scaling expertise</p>
                <div className="h-1 w-16 bg-gradient-to-r from-[#c961de] to-[#00c3ff] rounded-full"></div>
              </motion.div>
            </motion.div>
            
            {/* Vision Quote */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="mt-6 bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-xl p-6 border border-[#1e4976]/60 relative overflow-hidden"
            >
              <div className="absolute -top-4 -left-4 text-[#00c3ff]/20 text-8xl font-serif">
                "
              </div>
              <p className="text-gray-300 italic relative z-10 ml-4">
                My vision is to build businesses that seamlessly integrate technology with
                strategy, creating sustainable solutions for tomorrow's challenges.
              </p>
              <div className="text-right text-[#00c3ff] mt-4 font-medium">
                Syed Musthaq
              </div>
            </motion.div>
          </div>
          
          {/* Right column: Professional Journey & More */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-xl p-8 border border-[#1e4976]/60 relative overflow-hidden"
            >
              {/* Professional Journey Section */}
              <motion.div variants={itemVariants} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#00c3ff]/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-[#00c3ff]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Professional Journey</h2>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 mb-2">
                    With a foundation in <span className="text-[#00c3ff]">B.Tech (Mechanical)</span> + <span className="text-[#c961de]">MBA</span>, 
                    I've built my career at the intersection of technology and business strategy.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 mb-2">
                    My 5-year journey as <span className="text-[#00c3ff]">Co-Founder at ClientoClarity.AI (2019–2024)</span> has
                    been focused on transforming traditional business processes through AI
                    automation and strategic innovation.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 mb-2">
                    In October 2024, I founded <span className="text-[#00c3ff]">Synapsyne Dynamics Pvt Ltd</span> to further my
                    vision of integrating deep-tech solutions into industrial productivity
                    layers.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 mb-2">
                    My expertise centers on <span className="text-[#00c3ff]">strategic business innovation, automation
                    systems, and industry productivity</span> - creating frameworks that drive
                    organizational growth while optimizing resource utilization.
                  </p>
                </div>
              </motion.div>
              
              {/* Core Values Section */}
              <motion.div variants={itemVariants} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#c961de]/10 rounded-full flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-[#c961de]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Core Values</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-[rgba(10,30,50,0.5)] p-4 rounded-lg border border-[#1e4976]/40"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00c3ff] rounded-full mr-2"></div>
                      <h3 className="text-[#00c3ff] font-medium">Innovation-Driven</h3>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-[rgba(10,30,50,0.5)] p-4 rounded-lg border border-[#1e4976]/40"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00c3ff] rounded-full mr-2"></div>
                      <h3 className="text-[#00c3ff] font-medium">Sustainable Growth</h3>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-[rgba(10,30,50,0.5)] p-4 rounded-lg border border-[#1e4976]/40"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#c961de] rounded-full mr-2"></div>
                      <h3 className="text-[#c961de] font-medium">Ethical Leadership</h3>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-[rgba(10,30,50,0.5)] p-4 rounded-lg border border-[#1e4976]/40"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#c961de] rounded-full mr-2"></div>
                      <h3 className="text-[#c961de] font-medium">Continuous Learning</h3>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Skill Highlights Section */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#00c3ff]/10 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-5 w-5 text-[#00c3ff]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Skill Highlights</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[rgba(10,30,50,0.5)] p-3 rounded-lg border border-[#1e4976]/40 
                              flex justify-center items-center text-center"
                  >
                    <span className="text-white">Innovation</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[rgba(10,30,50,0.5)] p-3 rounded-lg border border-[#1e4976]/40 
                              flex justify-center items-center text-center"
                  >
                    <span className="text-white">Leadership</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[rgba(10,30,50,0.5)] p-3 rounded-lg border border-[#1e4976]/40 
                              flex justify-center items-center text-center"
                  >
                    <span className="text-white">AI Strategy</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[rgba(10,30,50,0.5)] p-3 rounded-lg border border-[#1e4976]/40 
                              flex justify-center items-center text-center"
                  >
                    <span className="text-white">Operations</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[rgba(10,30,50,0.5)] p-3 rounded-lg border border-[#1e4976]/40 
                              flex justify-center items-center text-center"
                  >
                    <span className="text-white">Business Development</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[rgba(10,30,50,0.5)] p-3 rounded-lg border border-[#1e4976]/40 
                              flex justify-center items-center text-center"
                  >
                    <span className="text-white">Market Research</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[rgba(10,30,50,0.5)] p-3 rounded-lg border border-[#1e4976]/40 
                              flex justify-center items-center text-center"
                  >
                    <span className="text-white">Team Building</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[rgba(10,30,50,0.5)] p-3 rounded-lg border border-[#1e4976]/40 
                              flex justify-center items-center text-center"
                  >
                    <span className="text-white">Strategic Planning</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}