
import React, { useState } from 'react';
import { Brain, Mail, Phone, MapPin, Send, Calendar, Clock, Users, Zap, Target, BarChart3, Settings, MessageSquare, Database, Shield, Cpu, Cloud, Code, Bot } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: '',
    timeline: '',
    budget: '',
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
    { id: 'chatbot-ai', name: 'AI-Powered Chatbots', icon: Bot, description: 'Intelligent customer service and internal support bots' }
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
      
      setSubmitMessage(`🧠 Neural Connection Established! 
      
Thank you ${formData.name || 'valued client'}, your request for ${formData.projectType || 'custom solution'} has been transmitted to our AI systems. 

Selected Features: ${selectedFeatureNames.length > 0 ? selectedFeatureNames.join(', ') : 'Basic consultation'}
Timeline: ${formData.timeline || 'To be discussed'}
Budget Range: ${formData.budget || 'To be determined'}

Our neural network is processing your requirements. Expect a response within 4 hours with a personalized solution architecture.`);
      
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
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
            <Brain className="w-4 h-4 text-neon mr-2" />
            <span className="text-white text-sm">Neural Connection Request</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get In <span className="text-neon animate-text-glow">Touch</span>
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
          <div className="glassmorphism p-8 rounded-2xl neon-border">
            <h2 className="text-2xl font-bold text-white mb-6">Start Your Digital Transformation</h2>
            
            {submitMessage && (
              <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30">
                <pre className="text-green-300 text-sm whitespace-pre-wrap">{submitMessage}</pre>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all"
                    style={{
                      backgroundImage: 'none',
                      appearance: 'none'
                    }}
                  >
                    <option value="" className="bg-gray-900 text-white">Select project type</option>
                    <option value="web-app" className="bg-gray-900 text-white">Web Application</option>
                    <option value="mobile-app" className="bg-gray-900 text-white">Mobile Application</option>
                    <option value="ai-integration" className="bg-gray-900 text-white">AI Integration</option>
                    <option value="cloud-solution" className="bg-gray-900 text-white">Cloud Solution</option>
                    <option value="consulting" className="bg-gray-900 text-white">Consulting</option>
                    <option value="other" className="bg-gray-900 text-white">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all"
                    style={{
                      backgroundImage: 'none',
                      appearance: 'none'
                    }}
                  >
                    <option value="" className="bg-gray-900 text-white">Select timeline</option>
                    <option value="urgent" className="bg-gray-900 text-white">ASAP (Rush project)</option>
                    <option value="1-3-months" className="bg-gray-900 text-white">1-3 months</option>
                    <option value="3-6-months" className="bg-gray-900 text-white">3-6 months</option>
                    <option value="6-12-months" className="bg-gray-900 text-white">6-12 months</option>
                    <option value="ongoing" className="bg-gray-900 text-white">Ongoing partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all"
                    style={{
                      backgroundImage: 'none',
                      appearance: 'none'
                    }}
                  >
                    <option value="" className="bg-gray-900 text-white">Select budget range</option>
                    <option value="10k-25k" className="bg-gray-900 text-white">$10k - $25k</option>
                    <option value="25k-50k" className="bg-gray-900 text-white">$25k - $50k</option>
                    <option value="50k-100k" className="bg-gray-900 text-white">$50k - $100k</option>
                    <option value="100k-250k" className="bg-gray-900 text-white">$100k - $250k</option>
                    <option value="250k+" className="bg-gray-900 text-white">$250k+</option>
                  </select>
                </div>
              </div>

              {/* Productivity Features Selection */}
              <div>
                <label className="block text-white text-sm font-medium mb-4">
                  Productivity Features You're Interested In:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                  {productivityFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
                        selectedFeatures.includes(feature.id)
                          ? 'neon-border bg-cyan-500/10'
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
                <label className="block text-white text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
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
            <div className="glassmorphism p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Connect Directly</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg glassmorphism neon-border flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">syedmusthaqk786@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg glassmorphism neon-border flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">7013425496</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg glassmorphism neon-border flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time & Stats */}
            <div className="glassmorphism p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Commitment</h3>
              
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

            {/* Quick Benefits */}
            <div className="glassmorphism p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              
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
    </section>
  );
};

export default ContactSection;
