
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Synopsyne Dynamics transformed our entire infrastructure. Their neural approach to software development isn't just innovative—it's revolutionary. Our system performance improved by 300%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Founder & CEO, InnovateLab",
      company: "InnovateLab",
      content: "Working with Synopsyne was like having a team of digital neuroscientists. They understood our vision before we even fully articulated it. The AI solutions they built have become the backbone of our operations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Amanda Foster",
      position: "Head of Digital Innovation, MedTech Global",
      company: "MedTech Global",
      content: "The neural networks they implemented for our patient management system have revolutionized how we deliver healthcare. Their approach to connecting disparate systems mirrors how synapses create complex thoughts.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "James Thompson",
      position: "VP Engineering, CloudVision",
      company: "CloudVision",
      content: "Synopsyne Dynamics doesn't just build software—they architect digital ecosystems. Their cloud solutions are so intuitive, it's like they read our minds. The scalability is phenomenal.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Chief Digital Officer, RetailNext",
      company: "RetailNext",
      content: "The mobile applications they developed for us have a neural-like intelligence. They adapt to user behavior in real-time. Our customer engagement has increased by 250% since launch.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "David Kumar",
      position: "Director of Technology, FinanceForward",
      company: "FinanceForward",
      content: "Their cybersecurity solutions are like having a digital immune system. The way they anticipate and prevent threats feels almost precognitive. We haven't had a single security incident since implementation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>
      
      <Header />
      
      {/* Testimonials Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
            <Brain className="w-4 h-4 text-neon mr-2" />
            <span className="text-white text-sm">Neural Testimonials</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Client <span className="text-neon animate-text-glow">Success</span>
            <br />
            Stories
          </h1>

          <div className="relative mb-12 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
            <div className="relative glassmorphism p-6 rounded-lg">
              <p className="text-lg md:text-xl text-gray-300">
                Discover how our neural approach to software development has transformed businesses 
                across industries, creating connections that spark innovation and drive exponential growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { label: 'Happy Clients', value: '150+', delay: '0s' },
              { label: 'Success Rate', value: '99.2%', delay: '0.2s' },
              { label: 'Project Completion', value: '100%', delay: '0.4s' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 rounded-xl text-center animate-float hover:neon-border transition-all group cursor-pointer"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-neon mb-2 group-hover:animate-pulse">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Neural <span className="text-neon">Connections</span> That Matter
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every project is a synapse in our growing network of success. 
              Here's what our clients say about their transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="glassmorphism p-6 rounded-xl hover:neon-border transition-all group cursor-pointer animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 text-neon mr-1">⭐</div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-400/30"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.position}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                {/* Neural connection indicator */}
                <div className="mt-4 pt-4 border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center text-xs text-cyan-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                    Neural connection established
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <button className="group relative overflow-hidden neon-border px-8 py-4 rounded-lg text-white hover:bg-cyan-500/10 transition-all transform hover:scale-105">
              <span className="relative z-10 flex items-center text-lg font-semibold">
                Join Our Neural Network
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
