import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/gradient-text';
import { Briefcase, GraduationCap, Award, Calendar, ArrowUp, Star, History } from 'lucide-react';

export function TimelineSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const timelineItems = [
    {
      year: "2024 – Present",
      title: "Founder & Director",
      organization: "Synopsyne Dynamics Pvt. Ltd.",
      description: "Launched my own venture, Synopsyne Dynamics Pvt. Ltd., on October 2nd, 2024.",
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-[#00c3ff] to-[#0080ff]",
      achievements: [
        "Focusing on AI solutions, strategic management, and business consulting",
        "Building a vision to drive future-ready businesses",
        "Developing innovative technologies for industry transformation"
      ]
    },
    {
      year: "2019 – 2024",
      title: "Co-Founder & Director",
      organization: "ClienteClarify.AI Pvt. Ltd.",
      description: "Co-founded ClienteClarify.AI Pvt. Ltd., an AI-driven company focused on software development and business solutions.",
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-[#c961de] to-[#9932cc]",
      achievements: [
        "Led the company for 5 years",
        "Built strong foundation in AI and business process optimization",
        "Worked on projects that reshaped industries",
        "Developed expertise in software development solutions"
      ]
    },
    {
      year: "2019",
      title: "B.Tech",
      organization: "Mechanical Engineering",
      description: "Graduated with a B.Tech in Mechanical Engineering and transitioned into the professional world.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-[#00cc99] to-[#009973]",
      achievements: [
        "Focused on innovation, technology, and entrepreneurship",
        "Developed foundational skills for future ventures",
        "Applied engineering principles to business context"
      ]
    },
    {
      year: "2018 – 2019",
      title: "Technical and Marketing Executive",
      organization: "AMZ Automotive",
      description: "Joined AMZ Automotive while pursuing B.Tech degree.",
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-[#00c3ff] to-[#0080ff]",
      achievements: [
        "Worked as Technical Trainer for teams",
        "Provided training on automotive technology",
        "Developed and implemented marketing strategies"
      ]
    },
    {
      year: "2016 – 2019",
      title: "City Ambassador",
      organization: "Soha Technologies Pvt. Ltd., Pune",
      description: "Worked as a City Ambassador during B.Tech Mechanical Engineering studies.",
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-[#c961de] to-[#9932cc]",
      achievements: [
        "Promoted and supported company's initiatives",
        "Built connections across the city",
        "Represented the brand throughout Pune"
      ]
    }
  ];
  
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

  return (
    <section id="timeline" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a1929] to-[#052037]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(0,195,255,0.05) 0%, rgba(0,195,255,0) 70%)'
        }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(201,97,222,0.05) 0%, rgba(201,97,222,0) 70%)'
        }}></div>
        
        {/* Timeline Background */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00c3ff]/10 via-[#c961de]/10 to-[#00c3ff]/10"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="bg-[rgba(7,25,45,0.7)] backdrop-blur-md px-6 py-2 rounded-full border border-[rgba(30,73,118,0.6)]">
              <History className="h-5 w-5 text-[#00c3ff] inline-block mr-2" />
              <span className="text-[#00c3ff] font-medium">Professional Journey</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Career Timeline</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A chronological journey through my professional experiences and educational achievements
          </p>
        </motion.div>
        
        {/* Interactive Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00c3ff] via-[#c961de] to-[#00c3ff] transform -translate-x-1/2 z-0 opacity-50"></div>
          
          {/* Timeline Items */}
          <motion.div 
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredItem === index;
              
              return (
                <motion.div 
                  key={index}
                  className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center mb-12 relative`}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Timeline item content */}
                  <motion.div 
                    className="w-5/12"
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: isHovered ? 1 : 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg p-6 rounded-xl border border-[#1e4976]/60 relative overflow-hidden"
                      whileHover={{ 
                        boxShadow: "0 0 20px rgba(0, 195, 255, 0.3)",
                        y: -5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background gradient */}
                      <div className={`absolute top-0 right-0 w-full h-32 opacity-5 bg-gradient-to-br ${item.color}`}></div>
                      
                      {/* Date badge - SUPER ENHANCED to be extremely visible */}
                      <div className={`absolute -top-5 ${isEven ? 'left-4' : 'right-4'} px-5 py-3 rounded-lg bg-gradient-to-r ${item.color} text-white font-extrabold shadow-2xl flex items-center z-20 border-2 border-white/30`}
                        style={{ fontSize: "1rem", letterSpacing: "0.5px" }}
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{item.year}</span>
                        
                        {/* Multiple overlapping animations to make years extremely prominent */}
                        <motion.div 
                          className="absolute inset-0 rounded-lg"
                          animate={{ 
                            boxShadow: ["0 0 0 0 rgba(255,255,255,0.4)", "0 0 0 10px rgba(255,255,255,0)"],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                        
                        {/* Glowing border animation */}
                        <motion.div 
                          className="absolute inset-0 rounded-lg"
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            boxShadow: [
                              `0 0 5px 0 ${item.color.includes('00c3ff') ? '#00c3ff' : 
                                         item.color.includes('c961de') ? '#c961de' : 
                                         '#00cc99'}`,
                              `0 0 15px 0 ${item.color.includes('00c3ff') ? '#00c3ff' : 
                                          item.color.includes('c961de') ? '#c961de' : 
                                          '#00cc99'}`,
                              `0 0 5px 0 ${item.color.includes('00c3ff') ? '#00c3ff' : 
                                         item.color.includes('c961de') ? '#c961de' : 
                                         '#00cc99'}`
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                        
                        {/* Subtle shine effect */}
                        <motion.div 
                          className="absolute inset-0 overflow-hidden rounded-lg"
                          initial={{ opacity: 0 }}
                        >
                          <motion.div 
                            className="w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-20 absolute"
                            animate={{
                              left: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                          />
                        </motion.div>
                      </div>
                      
                      {/* Content */}
                      <div className="mt-2">
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-[#00c3ff] font-medium mb-2">{item.organization}</p>
                        <p className="text-gray-400 mb-3">{item.description}</p>
                        
                        {/* Achievements */}
                        {item.achievements && (
                          <div className="mt-4 pt-4 border-t border-[#1e4976]/30">
                            <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                              <Award className="h-4 w-4 text-[#c961de] mr-2" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start text-gray-400 text-sm"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ 
                                    opacity: isHovered ? 1 : 0.7,
                                    x: isHovered ? 0 : -5
                                  }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <div className="mr-2 mt-1 min-w-5">
                                    <Star className="h-3 w-3 text-[#00c3ff]" />
                                  </div>
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Center point */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div 
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg z-20`}
                      whileHover={{ scale: 1.2 }}
                      animate={{ 
                        boxShadow: isHovered ? 
                          "0 0 15px rgba(0, 195, 255, 0.7)" : 
                          "0 0 5px rgba(0, 195, 255, 0.3)"
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Vertical line above the circle */}
                    {index !== 0 && (
                      <motion.div 
                        className="absolute top-0 left-1/2 w-0.5 h-12 bg-[#1e4976]/80 transform -translate-y-full -translate-x-1/2"
                        initial={{ height: 0 }}
                        whileInView={{ height: 50 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    )}
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-5/12"></div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Future indicator */}
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#00c3ff]"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
              <p className="text-[#00c3ff] mt-4 flex items-center">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>New adventures await</span>
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Vision quote */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00c3ff] to-[#c961de] rounded-full"></div>
            </div>
            <h3 className="text-2xl text-white mb-6">Continuous Learning & Growth</h3>
            <p className="text-gray-400 italic">
              "Every role in my career has been a building block—combining traditional business 
              principles with technological innovation to create systems that drive measurable 
              impact while respecting operational fundamentals."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}