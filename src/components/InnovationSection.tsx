import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/gradient-text';
import { Clock, TrendingUp, Layers, RefreshCw, ClipboardList, Users, Shield, Zap, Building } from 'lucide-react';

export function InnovationSection() {
  const [activeTab, setActiveTab] = useState(0);
  
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
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };
  
  const statCards = [
    {
      icon: <Clock className="h-6 w-6 text-[#00c3ff]" />,
      title: "100+ Hours Saved Monthly",
      description: "Streamlined manual, time-intensive tasks by introducing AI-powered automation across traditional operations—freeing over 100 hours monthly and allowing departments to focus on core business functions.",
      color: "from-[#00c3ff] to-[#0080ff]"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#c961de]" />,
      title: "72% Increase in BPO Team Productivity",
      description: "Combined traditional task management structures with newly developed Standard Operating Procedures (SOPs) to optimize workflow, significantly boosting performance and operational discipline.",
      color: "from-[#c961de] to-[#9932cc]"
    },
    {
      icon: <Layers className="h-6 w-6 text-[#00cc99]" />,
      title: "3 Departments Scaled Successfully",
      description: "Led the scale-up of three business units by blending traditional resource planning, people management, and reporting systems with modern digital tools and process restructuring.",
      color: "from-[#00cc99] to-[#009973]"
    }
  ];
  
  const operationTabs = [
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Traditional Operations Reimagined",
      content: [
        {
          heading: "Manual Workflow Mapping",
          description: "Reviewed and documented existing processes across departments using proven operations techniques such as time-motion studies and bottleneck analysis."
        },
        {
          heading: "Role-Based Accountability",
          description: "Defined traditional hierarchy-based responsibilities while introducing agile elements to improve adaptability."
        },
        {
          heading: "Resource Planning",
          description: "Applied time-tested methods in workforce scheduling, asset utilization, and cost control, layered with real-time monitoring tools."
        },
        {
          heading: "Client Service Frameworks",
          description: "Retained service standards rooted in SLA agreements, trust-building, and human touch—while improving turnaround times with automation and analytics."
        }
      ]
    },
    {
      icon: <ClipboardList className="h-5 w-5" />,
      title: "Standard Operating Procedures (SOPs)",
      subtitle: "Modernizing Traditional Workflows with Structure and Consistency",
      content: [
        {
          heading: "Purpose",
          description: "To formalize routine operational tasks and ensure consistent delivery across teams."
        },
        {
          heading: "Application",
          description: "Implemented in customer support, data processing, HR, and administration."
        },
        {
          heading: "Key Features",
          description: "Step-by-step task breakdown using traditional flowcharts and modern process documentation tools, role clarity with escalation mechanisms, integration with digital dashboards and task tracking systems."
        },
        {
          heading: "Outcomes",
          description: "72% boost in output efficiency, 50% reduction in onboarding time for new employees, alignment between legacy workflows and scalable digital infrastructure."
        }
      ]
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Conflict-Free Industrial Relations System",
      content: [
        {
          heading: "Framework",
          description: "Established a zero-conflict Industrial Relations (IR) framework at ClienteClarify.AI, drawing from traditional IR principles."
        },
        {
          heading: "Key Components",
          description: "Structured grievance redressal, transparent communication, and policy enforcement—enhanced by digital reporting tools and engagement analytics."
        },
        {
          heading: "Outcome",
          description: "Maintained a healthy work culture with minimal conflicts, improved employee satisfaction, and better compliance with labor regulations."
        }
      ]
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Vision of Synopsyne Dynamics Pvt. Ltd.",
      content: [
        {
          heading: "Mission",
          description: "Founded Synopsyne Dynamics to modernize legacy operational systems with deep-tech integrations."
        },
        {
          heading: "Approach",
          description: "Bridge traditional business models with forward-looking technology—helping companies evolve without losing the essence of operational stability, compliance, and people-centric performance."
        },
        {
          heading: "Focus Areas",
          description: "Process automation, workflow optimization, data-driven decision making, and AI-enhanced operational systems."
        }
      ]
    }
  ];

  return (
    <section id="innovation" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#052037] to-[#0a1929]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(0,195,255,0.05) 0%, rgba(0,195,255,0) 70%)'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(201,97,222,0.05) 0%, rgba(201,97,222,0) 70%)'
        }}></div>
        
        {/* Circuit Lines */}
        <svg width="100%" height="100%" className="opacity-30">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="#8acdff" />
            <circle cx="50" cy="50" r="0.5" fill="#c961de" />
            <circle cx="90" cy="90" r="0.5" fill="#8acdff" />
            <path d="M10,10 L50,50 L90,90" stroke="#1e4976" strokeWidth="0.2" strokeDasharray="2,3" fill="none" />
            <path d="M90,10 L50,50 L10,90" stroke="#1e4976" strokeWidth="0.2" strokeDasharray="2,3" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
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
              <Zap className="h-5 w-5 text-[#00c3ff] inline-block mr-2" />
              <span className="text-[#00c3ff] font-medium">Innovation & Impact</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Innovation in Action</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming Traditional Operations with Strategic Innovation and Technology
          </p>
        </motion.div>
        
        {/* Results Statistics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-xl p-6 border border-[#1e4976]/60 relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{
                background: `radial-gradient(circle, ${stat.color.includes('00c3ff') ? 'rgba(0, 195, 255, 0.5)' : 
                             stat.color.includes('c961de') ? 'rgba(201, 97, 222, 0.5)' : 
                             'rgba(0, 204, 153, 0.5)'} 0%, transparent 70%)`
              }}></div>
              
              <div className="absolute top-2 right-2">
                <motion.svg width="40" height="40" viewBox="0 0 40 40" opacity="0.2">
                  <motion.path
                    d="M5,5 L35,5 L35,35 L5,35 Z"
                    stroke={stat.color.includes('00c3ff') ? '#00c3ff' : 
                             stat.color.includes('c961de') ? '#c961de' : 
                             '#00cc99'}
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                  />
                </motion.svg>
              </div>
              
              {/* Content */}
              <div className="flex flex-col h-full relative z-10">
                <div className="mb-4 flex items-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                    {stat.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{stat.title}</h3>
                <p className="text-gray-400">{stat.description}</p>
                
                {/* Animated Underline */}
                <motion.div 
                  className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tabs Section */}
        <div className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-xl border border-[#1e4976]/60 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-[#1e4976]/60">
            {operationTabs.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center py-4 px-6 whitespace-nowrap transition-all duration-300 ${
                  activeTab === index
                    ? 'text-[#00c3ff] border-b-2 border-[#00c3ff]'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className={`w-8 h-8 rounded-full ${
                  activeTab === index
                    ? 'bg-[#00c3ff]/20'
                    : 'bg-[rgba(30,73,118,0.3)]'
                } flex items-center justify-center mr-2`}>
                  {React.cloneElement(tab.icon, { 
                    className: `h-4 w-4 ${activeTab === index ? 'text-[#00c3ff]' : 'text-gray-400'}`
                  })}
                </div>
                <span className="font-medium">{tab.title}</span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {operationTabs.map((tab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeTab === index ? 1 : 0,
                  y: activeTab === index ? 0 : 20,
                  display: activeTab === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {tab.subtitle && (
                  <p className="text-[#c961de] font-medium mb-4">{tab.subtitle}</p>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tab.content.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="bg-[rgba(7,35,55,0.5)] backdrop-blur-sm p-5 rounded-lg border border-[#1e4976]/40 relative overflow-hidden"
                    >
                      {/* Animated background element */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 opacity-10" style={{
                        background: 'radial-gradient(circle, rgba(0, 195, 255, 0.8) 0%, transparent 70%)'
                      }}></div>
                      
                      <h4 className="text-[#00c3ff] font-medium mb-2 flex items-center">
                        <div className="w-2 h-2 bg-[#00c3ff] rounded-full mr-2"></div>
                        {item.heading}
                      </h4>
                      <p className="text-gray-300">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Vision Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white text-lg italic max-w-4xl mx-auto">
            "Our innovation philosophy bridges traditional business foundations with 
            cutting-edge technology—creating sustainable solutions that respect operational
            stability while driving transformative growth."
          </p>
          <div className="mt-4 text-[#00c3ff]">Syed Musthaq</div>
          
          {/* Animated Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 rounded-full bg-[#00c3ff]"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}