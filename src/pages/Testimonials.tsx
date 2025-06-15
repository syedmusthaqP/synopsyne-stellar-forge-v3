import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain } from 'lucide-react';
import { Carousel, TestimonialCard, iTestimonial } from '../components/ui/retro-testimonial';

type TestimonialDetails = {
  [key: string]: iTestimonial & {id: string};
};

const Testimonials = () => {
  const testimonialData = {
    ids: [
      "e60aa346-f6da-11ed-b67e-0242ac120002",
      "e60aa346-f6da-11ed-b67e-0242ac120003",
      "e60aa346-f6da-11ed-b67e-0242ac120004",
      "e60aa346-f6da-11ed-b67e-0242ac120005",
      "e60aa346-f6da-11ed-b67e-0242ac120006",
      "e60aa346-f6da-11ed-b67e-0242ac120007",
    ],
    details: {
      "e60aa346-f6da-11ed-b67e-0242ac120002": {
        id: "e60aa346-f6da-11ed-b67e-0242ac120002",
        description: "Synopsyne Dynamics transformed our entire infrastructure. Their neural approach to software development isn't just innovative—it's revolutionary. Our system performance improved by 300%.",
        profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&crop=face",
        name: "Sarah Chen",
        designation: "CTO at TechFlow Solutions",
      },
      "e60aa346-f6da-11ed-b67e-0242ac120003": {
        id: "e60aa346-f6da-11ed-b67e-0242ac120003",
        description: "Working with Synopsyne was like having a team of digital neuroscientists. They understood our vision before we even fully articulated it. The AI solutions they built have become the backbone of our operations.",
        profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
        name: "Marcus Rodriguez",
        designation: "Founder & CEO at InnovateLab",
      },
      "e60aa346-f6da-11ed-b67e-0242ac120004": {
        id: "e60aa346-f6da-11ed-b67e-0242ac120004",
        description: "The neural networks they implemented for our patient management system have revolutionized how we deliver healthcare. Their approach to connecting disparate systems mirrors how synapses create complex thoughts.",
        profileImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face",
        name: "Dr. Amanda Foster",
        designation: "Head of Digital Innovation at MedTech Global",
      },
      "e60aa346-f6da-11ed-b67e-0242ac120005": {
        id: "e60aa346-f6da-11ed-b67e-0242ac120005",
        description: "Synopsyne Dynamics doesn't just build software—they architect digital ecosystems. Their cloud solutions are so intuitive, it's like they read our minds. The scalability is phenomenal.",
        profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face",
        name: "James Thompson",
        designation: "VP Engineering at CloudVision",
      },
      "e60aa346-f6da-11ed-b67e-0242ac120006": {
        id: "e60aa346-f6da-11ed-b67e-0242ac120006",
        description: "The mobile applications they developed for us have a neural-like intelligence. They adapt to user behavior in real-time. Our customer engagement has increased by 250% since launch.",
        profileImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=500&fit=crop&crop=face",
        name: "Lisa Park",
        designation: "Chief Digital Officer at RetailNext",
      },
      "e60aa346-f6da-11ed-b67e-0242ac120007": {
        id: "e60aa346-f6da-11ed-b67e-0242ac120007",
        description: "Their cybersecurity solutions are like having a digital immune system. The way they anticipate and prevent threats feels almost precognitive. We haven't had a single security incident since implementation.",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
        name: "David Kumar",
        designation: "Director of Technology at FinanceForward",
      }
    },
  };

  // Create testimonial cards for the retro carousel
  const cards = testimonialData.ids.map((cardId: string, index: number) => {
    const details = testimonialData.details as TestimonialDetails;
    return (
      <TestimonialCard
        key={cardId}
        testimonial={details[cardId]}
        index={index}
        backgroundImage="https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    );
  });

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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Retro Testimonials Section */}
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

          {/* Retro Testimonial Carousel */}
          <div className="max-w-7xl mx-auto">
            <Carousel items={cards} />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { label: 'Happy Clients', value: 'Achieved', delay: '0s' },
              { label: 'Success Rate', value: 'Delivered', delay: '0.2s' },
              { label: 'Project Completion', value: 'Guaranteed', delay: '0.4s' }
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
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
