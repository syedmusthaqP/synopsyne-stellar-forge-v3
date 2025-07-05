
import React, { useState } from 'react';
import { Brain, Mail, Phone, MapPin, Send, Calendar, Clock, Users, Zap, Target, BarChart3, Settings, MessageSquare, Database, Shield, Cpu, Cloud, Code, Bot } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: '',
    customProjectType: '',
    timeline: '',
    budget: '',
    budgetCurrency: 'USD',
    features: []
  });

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const productivityFeatures = [
    { id: 'ai-automation', name: 'AI Process Automation', icon: Zap, description: 'Automate repetitive tasks with intelligent workflows' },
    { id: 'real-time-analytics', name: 'Real-time Analytics Dashboard', icon: BarChart3, description: 'Monitor performance and KPIs in real-time' },
    { id: 'team-collaboration', name: 'Advanced Team Collaboration', icon: Users, description: 'Seamless communication and project management tools' },
    { id: 'smart-scheduling', name: 'AI-Powered Scheduling', icon: Calendar, description: 'Intelligent meeting and resource scheduling' },
    { id: 'performance-tracking', name: 'Performance Optimization', icon: Target, description: 'Track and optimize team productivity metrics' },
    { id: 'workflow-integration', name: 'Workflow Integration Hub', icon: Settings, description: 'Connect all your tools in one unified platform' },
    { id: 'intelligent-reporting', name: 'Intelligent Reporting', icon: MessageSquare, description: 'Auto-generated insights and progress reports' },
    { id: 'time-management', name: 'Smart Time Management', icon: Clock, description: 'AI-driven time tracking and optimization suggestions' },
    { id: 'data-visualization', name: 'Advanced Data Visualization', icon: Database, description: 'Interactive charts and comprehensive data insights' },
    { id: 'security-compliance', name: 'Security & Compliance Suite', icon: Shield, description: 'Enterprise-grade security with compliance automation' },
    { id: 'machine-learning', name: 'Custom ML Models', icon: Cpu, description: 'Tailored machine learning solutions for your business' },
    { id: 'cloud-integration', name: 'Multi-Cloud Integration', icon: Cloud, description: 'Seamless integration across AWS, Azure, and GCP' },
    { id: 'api-development', name: 'Custom API Development', icon: Code, description: 'RESTful and GraphQL APIs for seamless integrations' },
    { id: 'chatbot-ai', name: 'AI-Powered Chatbots', icon: Bot, description: 'Intelligent customer service and internal support bots' },
    { id: 'predictive-analytics', name: 'Predictive Analytics Engine', icon: BarChart3, description: 'Forecast trends and make data-driven decisions' },
    { id: 'voice-recognition', name: 'Voice Recognition System', icon: MessageSquare, description: 'Advanced voice commands and speech-to-text capabilities' },
    { id: 'blockchain-integration', name: 'Blockchain Solutions', icon: Shield, description: 'Secure and transparent blockchain implementations' },
    { id: 'iot-connectivity', name: 'IoT Device Management', icon: Cpu, description: 'Connect and manage Internet of Things devices' },
    { id: 'augmented-reality', name: 'AR/VR Integration', icon: Code, description: 'Immersive augmented and virtual reality experiences' },
    { id: 'automated-testing', name: 'Automated Testing Suite', icon: Settings, description: 'Comprehensive automated testing and quality assurance' }
  ];

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      const selectedFeatureNames = selectedFeatures
        .map(id => productivityFeatures.find(f => f.id === id)?.name)
        .filter(Boolean);
      
      console.log('Neural Connection Request Submitted:', {
        ...formData,
        features: selectedFeatureNames,
        timestamp: new Date().toISOString()
      });
      
      setSubmitMessage(`🧠 Neural Connection Established Successfully! 

Thank you ${formData.name || 'valued client'}, your digital transformation request has been processed by our AI systems.

📋 PROJECT SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Client: ${formData.name || 'To be provided'}
• Company: ${formData.company || 'Individual/Startup'}
• Project Type: ${formData.projectType === 'other' ? formData.customProjectType : formData.projectType || 'Custom Solution'}
• Timeline: ${formData.timeline || 'To be discussed'}
• Budget Range: ${formData.budget || 'To be determined'} ${formData.budgetCurrency}
• Selected Features: ${selectedFeatureNames.length > 0 ? selectedFeatureNames.join(', ') : 'Basic consultation package'}

🚀 NEXT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Initial consultation call within 4 hours
2. Technical requirements analysis
3. Custom solution architecture design
4. Project timeline and milestone planning
5. Development team assignment

💡 INNOVATION PREVIEW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Based on your selections, we'll incorporate cutting-edge AI technologies including machine learning algorithms, cloud-native architecture, and advanced automation systems to deliver a solution that exceeds your expectations.

Our neural network has analyzed your requirements and prepared a preliminary solution blueprint. Expect a detailed proposal with cost analysis, technical specifications, and implementation roadmap.

🔗 Connection Status: ACTIVE | Priority: HIGH | Response Time: < 4 Hours`);
      
      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        projectType: '',
        customProjectType: '',
        timeline: '',
        budget: '',
        budgetCurrency: 'USD',
        features: []
      });
      setSelectedFeatures([]);
      
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .custom-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          /* Fix autocomplete styling */
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px rgba(0, 0, 0, 0.4) inset !important;
            -webkit-text-fill-color: white !important;
            transition: background-color 5000s;
          }
          
          /* Enhanced scrolling for features */
          .features-grid {
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .features-grid::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
              <Brain className="w-4 h-4 text-neon mr-2" />
              <span className="text-white text-sm">Neural Connection Request</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">Touch</span>
            </h1>

            <div className="relative mb-12 max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
              <div className="relative glassmorphism p-6 rounded-lg">
                <p className="text-lg md:text-xl text-gray-300">
                  Ready to transform your business with cutting-edge AI and software solutions? 
                  Let's discuss how we can boost your productivity and efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glassmorphism p-8 rounded-2xl border border-cyan-400/30">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Start Your Digital Transformation</h2>
              
              {submitMessage && (
                <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30">
                  <pre className="text-green-300 text-sm whitespace-pre-wrap">{submitMessage}</pre>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Your full name"
                      required
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="your.email@company.com"
                      required
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Your company name"
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Project Type</label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                        style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <option value="" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Select project type</option>
                        <option value="web-app" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Web Application</option>
                        <option value="mobile-app" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Mobile Application</option>
                        <option value="ai-integration" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>AI Integration</option>
                        <option value="cloud-solution" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Cloud Solution</option>
                        <option value="consulting" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Consulting</option>
                        <option value="other" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                    {formData.projectType === 'other' && (
                      <input
                        type="text"
                        name="customProjectType"
                        value={formData.customProjectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all mt-2"
                        placeholder="Please specify your project type"
                        style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Timeline</label>
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                        style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <option value="" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Select innovation timeline</option>
                        <option value="lightning-sprint" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>⚡ Lightning Sprint (2-4 weeks)</option>
                        <option value="neural-acceleration" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>🧠 Neural Acceleration (1-3 months)</option>
                        <option value="quantum-development" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>⚛️ Quantum Development (3-6 months)</option>
                        <option value="digital-evolution" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>🚀 Digital Evolution (6-12 months)</option>
                        <option value="infinite-partnership" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>♾️ Infinite Partnership (Ongoing)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Budget Range</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <select
                          name="budgetCurrency"
                          value={formData.budgetCurrency}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-cyan-400/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                          style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          <option value="USD" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>USD $</option>
                          <option value="INR" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>INR ₹</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative flex-[2]">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                          style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          <option value="" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Select range</option>
                          {formData.budgetCurrency === 'USD' ? (
                            <>
                              <option value="10k-25k" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$10k - $25k</option>
                              <option value="25k-50k" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$25k - $50k</option>
                              <option value="50k-100k" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$50k - $100k</option>
                              <option value="100k-250k" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$100k - $250k</option>
                              <option value="250k+" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$250k+</option>
                            </>
                          ) : (
                            <>
                              <option value="8L-20L" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹8L - ₹20L</option>
                              <option value="20L-40L" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹20L - ₹40L</option>
                              <option value="40L-80L" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹40L - ₹80L</option>
                              <option value="80L-2Cr" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹80L - ₹2Cr</option>
                              <option value="2Cr+" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹2Cr+</option>
                            </>
                          )}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Productivity Features Selection */}
                <div>
                  <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-4">
                    Productivity Features You're Interested In:
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 features-grid pr-2">
                    {productivityFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        onClick={() => handleFeatureToggle(feature.id)}
                        className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
                          selectedFeatures.includes(feature.id)
                            ? 'border-cyan-400/50 bg-cyan-500/10'
                            : 'border-gray-600 hover:border-cyan-400/50 bg-gray-800/30'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <feature.icon 
                            className={`w-5 h-5 mt-0.5 ${
                              selectedFeatures.includes(feature.id) ? 'text-neon' : 'text-gray-400'
                            }`} 
                          />
                          <div>
                            <h4 className={`font-medium ${
                              selectedFeatures.includes(feature.id) ? 'text-neon' : 'text-white'
                            }`}>
                              {feature.name}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(10px)',
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-border px-8 py-4 rounded-lg text-white font-semibold hover:bg-cyan-500/10 transition-all transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyan-400 mr-2"></div>
                      Processing Neural Connection...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Neural Connection Request
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Quick Stats */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="glassmorphism p-8 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 bg-clip-border">
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 -m-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Connect Directly</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg glassmorphism border border-cyan-400/30 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-neon" />
                      </div>
                      <div>
                        <p className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent font-semibold text-lg">Email</p>
                        <p className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-medium text-lg">syedmusthaqk786@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg glassmorphism border border-cyan-400/30 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-neon" />
                      </div>
                      <div>
                        <p className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent font-semibold text-lg">Phone</p>
                        <p className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-medium text-lg">7013425496</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg glassmorphism border border-cyan-400/30 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-neon" />
                      </div>
                      <div>
                        <p className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent font-semibold text-lg">Location</p>
                        <p className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-medium text-lg">Andhra Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time & Stats */}
              <div className="glassmorphism p-8 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 bg-clip-border">
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 -m-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Our Commitment</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                      <span className="text-white">Response Time</span>
                      <span className="text-neon font-bold">&lt; 4 hours</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                      <span className="text-white">Project Success Rate</span>
                      <span className="text-neon font-bold">98.5%</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                      <span className="text-white">Average Productivity Boost</span>
                      <span className="text-neon font-bold">245%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="glassmorphism p-8 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 bg-clip-border">
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 -m-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Why Choose Us?</h3>
                  
                  <div className="space-y-3">
                    {[
                      'Free initial consultation & project scope',
                      'Dedicated project manager assigned',
                      'Weekly progress reports & demos',
                      'Post-launch support & optimization',
                      'Scalable solutions that grow with you'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-neon"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
