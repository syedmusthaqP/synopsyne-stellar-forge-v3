import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '', details: '' });
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 contact-section-mobile relative">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Start Your <span className="text-neon">Digital Journey</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-3xl lg:max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', content: 'syedmusthaqk786@gmail.com', subtitle: 'We respond within 24 hours' },
                { icon: Phone, title: 'Call Us', content: '+91 7013425496', subtitle: 'Mon-Fri 9AM-6PM IST' },
                { icon: MapPin, title: 'Visit Us', content: 'Andhra Pradesh, India', subtitle: '' }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:animate-pulse-glow">
                    <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium sm:font-semibold group-hover:text-neon transition-colors text-base sm:text-lg">
                      {contact.title}
                    </h4>
                    <p className="text-neon text-base sm:text-lg">{contact.content}</p>
                    {contact.subtitle && (
                      <p className="text-gray-400 text-xs sm:text-sm">{contact.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Success stories preview */}
            <div className="glassmorphism p-3 sm:p-6 rounded-xl mt-6 sm:mt-8">
              <h4 className="text-white font-medium sm:font-semibold mb-2 sm:mb-4 text-base sm:text-lg">Why Choose Synopsyne?</h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  '99% client satisfaction rate',
                  '24/7 support and maintenance',
                  'Cutting-edge technology stack'
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon mr-2 sm:mr-3" />
                    <span className="text-gray-300 text-xs sm:text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism contact-form-card rounded-xl neon-border">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder=""
                      autoComplete="off"
                      style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder=""
                      autoComplete="off"
                      style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Your Company"
                    autoComplete="off"
                    style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project, goals, and timeline..."
                    style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="details" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    value={formData.details}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Any other information you'd like to share?"
                    style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full neon-border px-5 sm:px-6 py-3 sm:py-4 rounded-lg text-neon hover:bg-cyan-500/10 transition-all group font-semibold text-base sm:text-lg"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-1 sm:ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 sm:py-12">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse-glow">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Message Sent!</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
