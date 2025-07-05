
import React, { useState } from 'react';
import { Brain, Mail, Phone, MapPin, Send, Calendar, Clock, Users, Zap, Target, BarChart3, Settings, MessageSquare } from 'lucide-react';

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

  const productivityFeatures = [
    { id: 'ai-automation', name: 'AI Process Automation', icon: Zap, description: 'Automate repetitive tasks with intelligent workflows' },
    { id: 'real-time-analytics', name: 'Real-time Analytics Dashboard', icon: BarChart3, description: 'Monitor performance and KPIs in real-time' },
    { id: 'team-collaboration', name: 'Advanced Team Collaboration', icon: Users, description: 'Seamless communication and project management tools' },
    { id: 'smart-scheduling', name: 'AI-Powered Scheduling', icon: Calendar, description: 'Intelligent meeting and resource scheduling' },
    { id: 'performance-tracking', name: 'Performance Optimization', icon: Target, description: 'Track and optimize team productivity metrics' },
    { id: 'workflow-integration', name: 'Workflow Integration Hub', icon: Settings, description: 'Connect all your tools in one unified platform' },
    { id: 'intelligent-reporting', name: 'Intelligent Reporting', icon: MessageSquare, description: 'Auto-generated insights and progress reports' },
    { id: 'time-management', name: 'Smart Time Management', icon: Clock, description: 'AI-driven time tracking and optimization suggestions' }
  ];

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, features: selectedFeatures });
    // Handle form submission logic here
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
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
                    className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
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
                    className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glassmorphism rounded-lg text-white focus:neon-border focus:outline-none transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="cloud-solution">Cloud Solution</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
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
                    className="w-full px-4 py-3 glassmorphism rounded-lg text-white focus:neon-border focus:outline-none transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">ASAP (Rush project)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="ongoing">Ongoing partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glassmorphism rounded-lg text-white focus:neon-border focus:outline-none transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-250k">$100k - $250k</option>
                    <option value="250k+">$250k+</option>
                  </select>
                </div>
              </div>

              {/* Productivity Features Selection */}
              <div>
                <label className="block text-white text-sm font-medium mb-4">
                  Productivity Features You're Interested In:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full neon-border px-8 py-4 rounded-lg text-white font-semibold hover:bg-cyan-500/10 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Neural Connection Request
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
                    <p className="text-gray-300">hello@synopsyne.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg glassmorphism neon-border flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg glassmorphism neon-border flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">San Francisco, CA</p>
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
