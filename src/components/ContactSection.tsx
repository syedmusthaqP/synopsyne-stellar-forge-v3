import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/gradient-text';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
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
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "syedmusthaqk786@gmail.com",
      link: "mailto:syedmusthaqk786@gmail.com",
      color: "from-[#00c3ff] to-[#0080ff]"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Andhra Pradesh, India",
      link: "#",
      color: "from-[#c961de] to-[#9932cc]"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 7013425496",
      link: "tel:+917013425496",
      color: "from-[#00cc99] to-[#009973]"
    }
  ];
  
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      link: "#",
      color: "#0077B5"
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      link: "#",
      color: "#333"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      link: "#",
      color: "#1DA1F2"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a1929] to-[#071525]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(0,195,255,0.05) 0%, rgba(0,195,255,0) 70%)'
        }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(201,97,222,0.05) 0%, rgba(201,97,222,0) 70%)'
        }}></div>
        
        {/* Animated dots background */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: i % 2 === 0 ? '#00c3ff' : '#c961de',
                opacity: 0.3
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
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
              <Mail className="h-5 w-5 text-[#00c3ff] inline-block mr-2" />
              <span className="text-[#00c3ff] font-medium">Get in Touch</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Let's Connect</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reach out to discuss collaboration opportunities, strategic partnerships, or innovative projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of the channels below. I'm always open to discussing new projects, 
                innovative ideas, or opportunities to collaborate.
              </p>
            </motion.div>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 0 20px rgba(0, 195, 255, 0.3)",
                    y: -2
                  }}
                  className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg p-5 rounded-lg border border-[#1e4976]/60 flex items-center relative overflow-hidden block"
                >
                  {/* Background gradient */}
                  <div className={`absolute top-0 right-0 w-full h-full opacity-5 bg-gradient-to-br ${info.color}`}></div>
                  
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mr-4 relative z-10`}>
                    {info.icon}
                  </div>
                  
                  {/* Info Text */}
                  <div className="relative z-10">
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-[#00c3ff]">{info.value}</p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="ml-auto relative z-10">
                    <ArrowRight className="h-5 w-5 text-gray-500" />
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social Media Links */}
            <motion.div variants={itemVariants} className="mt-10">
              <h4 className="text-white font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 15px ${social.color}50` 
                    }}
                    className="w-10 h-10 rounded-full bg-[rgba(7,25,45,0.7)] backdrop-blur-sm border border-[#1e4976]/60 flex items-center justify-center text-white transition-colors"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Additional Info */}
            <motion.div variants={itemVariants} className="mt-12 p-6 bg-[rgba(7,25,45,0.7)] backdrop-blur-lg rounded-lg border border-[#1e4976]/60 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10" style={{
                background: 'radial-gradient(circle, rgba(0, 195, 255, 0.8) 0%, transparent 70%)'
              }}></div>
              
              <h4 className="text-white font-bold mb-2 relative z-10">Looking for Strategic Partnership?</h4>
              <p className="text-gray-400 mb-4 relative z-10">
                For business inquiries, collaborations, or speaking engagements, please reach out through the contact form or connect directly via email.
              </p>
              <div className="relative z-10">
                <a href="mailto:syedmusthaqk786@gmail.com" className="text-[#00c3ff] font-medium hover:underline inline-flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  syedmusthaqk786@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[rgba(7,25,45,0.7)] backdrop-blur-lg p-8 rounded-lg border border-[#1e4976]/60 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c3ff] to-[#c961de]"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 opacity-5" style={{
                background: 'radial-gradient(circle, rgba(201, 97, 222, 0.8) 0%, transparent 70%)'
              }}></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-[rgba(7,35,55,0.6)] text-white border border-[#1e4976]/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00c3ff]/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-[rgba(7,35,55,0.6)] text-white border border-[#1e4976]/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00c3ff]/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                {/* Subject Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-[rgba(7,35,55,0.6)] text-white border border-[#1e4976]/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00c3ff]/50 transition-all"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                {/* Message Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Your Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-[rgba(7,35,55,0.6)] text-white border border-[#1e4976]/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00c3ff]/50 transition-all resize-none"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button
                    type="submit"
                    className="w-full py-4 mt-4 bg-gradient-to-r from-[#00c3ff] to-[#c961de] rounded-lg text-white font-medium relative overflow-hidden"
                    disabled={formStatus === 'submitting'}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : formStatus === 'success' ? (
                        'Message Sent!'
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </span>
                    
                    {/* Animated light streak */}
                    <motion.div 
                      className="absolute top-0 -right-20 w-20 h-full transform rotate-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ 
                        right: ["120%", "-20%"],
                        transition: { duration: 1.5, repeat: Infinity, repeatDelay: 3 }
                      }}
                    />
                  </Button>
                </motion.div>
                
                {/* Success Message */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm mt-3 flex items-center"
                  >
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your message has been sent successfully. I'll get back to you soon!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Footer Note */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00c3ff] to-[#c961de] rounded-full"></div>
            </div>
            <p className="text-gray-400">
              Thank you for visiting my portfolio. I look forward to connecting with you and exploring potential collaborations.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} Syed Musthaq
          </div>
        </motion.div>
      </div>
    </section>
  );
}