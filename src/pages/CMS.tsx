
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, LogOut, Plus, Edit2, Trash2, Upload, Image as ImageIcon, Home, Users, Settings, FileText } from 'lucide-react';
import TestimonialAdmin from '../components/TestimonialAdmin';

import FeedbackAdmin from '../components/FeedbackAdmin';

const CMS = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('contacts');
  const [contacts, setContacts] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState(() => {
    // Load testimonials from localStorage, fallback to default data
    const storedTestimonials = localStorage.getItem('cmsTestimonials');
    return storedTestimonials ? JSON.parse(storedTestimonials) : [
    {
      id: 1,
      quote: "Synopsyne Dynamics transformed our entire infrastructure. Their neural approach to software development isn't just innovative—it's revolutionary. Our system performance improved by 300%.",
      name: "Sarah Chen",
      designation: "CTO at TechFlow Solutions",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "Working with Synopsyne was like having a team of digital neuroscientists. They understood our vision before we even fully articulated it. The AI solutions they built have become the backbone of our operations.",
      name: "Marcus Rodriguez",
      designation: "Founder & CEO at InnovateLab",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face"
    },
    {
      id: 3,
      quote: "The neural networks they implemented for our patient management system have revolutionized how we deliver healthcare. Their approach to connecting disparate systems mirrors how synapses create complex thoughts.",
      name: "Dr. Amanda Foster",
      designation: "Head of Digital Innovation at MedTech Global",
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face"
    },
    {
      id: 4,
      quote: "Synopsyne Dynamics doesn't just build software—they architect digital ecosystems. Their cloud solutions are so intuitive, it's like they read our minds. The scalability is phenomenal.",
      name: "James Thompson",
      designation: "VP Engineering at CloudVision",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face"
    },
    {
      id: 5,
      quote: "The mobile applications they developed for us have a neural-like intelligence. They adapt to user behavior in real-time. Our customer engagement has increased by 250% since launch.",
      name: "Lisa Park",
      designation: "Chief Digital Officer at RetailNext",
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=500&fit=crop&crop=face"
    },
    {
      id: 6,
      quote: "Their cybersecurity solutions are like having a digital immune system. The way they anticipate and prevent threats feels almost precognitive. We haven't had a single security incident since implementation.",
      name: "David Kumar",
      designation: "Director of Technology at FinanceForward",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
     }
    ];
  });

  const [heroContent, setHeroContent] = useState({
    title: "Neural Software Development",
    subtitle: "Building Tomorrow's Digital Synapses",
    description: "We architect neural pathways in code, creating interconnected systems that think, adapt, and evolve like the human brain."
  });

  const [aboutContent, setAboutContent] = useState({
    title: "About Synopsyne Dynamics",
    description: "We are digital neuroscientists, crafting software that mirrors the complexity and beauty of neural networks."
  });

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Web Applications",
      description: "Neural-inspired web solutions that adapt and learn from user interactions.",
      icon: "Globe"
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Synaptic mobile experiences that create lasting connections with users.",
      icon: "Smartphone"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Distributed neural networks in the cloud for maximum scalability.",
      icon: "Cloud"
    },
    {
      id: 4,
      title: "AI Integration",
      description: "Artificial neural pathways that enhance human decision-making.",
      icon: "Brain"
    }
  ]);

  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
  const [editingHero, setEditingHero] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      // Load contacts from localStorage
      const savedContacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      setContacts(savedContacts);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    
    Array.from(files).forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: Date.now() + Math.random(),
          name: file.name,
          url: e.target?.result as string,
          size: file.size,
          type: file.type
        };
        setUploadedImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const deleteImage = (imageId: number) => {
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
  };

  // Testimonial functions
  const addTestimonial = (testimonialData: any) => {
    const newTestimonial = {
      ...testimonialData,
      id: Date.now()
    };
    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('cmsTestimonials', JSON.stringify(updatedTestimonials));
    setIsAddingNew(false);
  };

  const updateTestimonial = (id: number, testimonialData: any) => {
    const updatedTestimonials = testimonials.map(t => t.id === id ? { ...testimonialData, id } : t);
    setTestimonials(updatedTestimonials);
    localStorage.setItem('cmsTestimonials', JSON.stringify(updatedTestimonials));
    setEditingTestimonial(null);
  };

  const deleteTestimonial = (id: number) => {
    const updatedTestimonials = testimonials.filter(t => t.id !== id);
    setTestimonials(updatedTestimonials);
    localStorage.setItem('cmsTestimonials', JSON.stringify(updatedTestimonials));
  };

  // Service functions
  const addService = (serviceData: any) => {
    const newService = {
      ...serviceData,
      id: Date.now()
    };
    setServices(prev => [...prev, newService]);
    setIsAddingNew(false);
  };

  const updateService = (id: number, serviceData: any) => {
    setServices(prev => prev.map(s => s.id === id ? { ...serviceData, id } : s));
    setEditingService(null);
  };

  const deleteService = (id: number) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const TestimonialForm = ({ testimonial, onSave, onCancel }: { testimonial?: any, onSave: (data: any) => void, onCancel: () => void }) => {
    const [formData, setFormData] = useState({
      quote: testimonial?.quote || '',
      name: testimonial?.name || '',
      designation: testimonial?.designation || '',
      src: testimonial?.src || ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(formData);
    };

    const useUploadedImage = (imageUrl: string) => {
      setFormData(prev => ({ ...prev, src: imageUrl }));
    };

    return (
      <div className="glassmorphism p-6 rounded-xl neon-border">
        <h3 className="text-xl font-bold text-white mb-6">
          {testimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">Quote</label>
            <textarea
              value={formData.quote}
              onChange={(e) => setFormData(prev => ({ ...prev, quote: e.target.value }))}
              className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all resize-none"
              rows={4}
              placeholder="Enter testimonial quote"
              required
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
              placeholder="Enter name"
              required
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">Designation</label>
            <input
              type="text"
              value={formData.designation}
              onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
              className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
              placeholder="Enter designation"
              required
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">Image URL</label>
            <input
              type="url"
              value={formData.src}
              onChange={(e) => setFormData(prev => ({ ...prev, src: e.target.value }))}
              className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
              placeholder="Enter image URL or select from uploaded images"
              required
            />
            
            {uploadedImages.length > 0 && (
              <div className="mt-3">
                <p className="text-sm text-gray-300 mb-2">Or select from uploaded images:</p>
                <div className="grid grid-cols-4 gap-2">
                  {uploadedImages.map(image => (
                    <div
                      key={image.id}
                      className="relative cursor-pointer group"
                      onClick={() => useUploadedImage(image.url)}
                    >
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-16 object-cover rounded border-2 border-transparent group-hover:border-cyan-400 transition-all"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                        <span className="text-xs text-white">Use</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 neon-border px-6 py-3 rounded-lg text-white font-semibold hover:bg-cyan-500/10 transition-all"
            >
              Save Testimonial
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 border border-gray-500 px-6 py-3 rounded-lg text-gray-300 font-semibold hover:bg-gray-500/10 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };

  if (!isAuthenticated) {
    return null;
  }

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'contacts':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Contact Submissions</h2>
              <span className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm">
                {contacts.length} Total Submissions
              </span>
            </div>

            <div className="space-y-4">
              {contacts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400">No contact submissions yet.</p>
                </div>
              ) : (
                contacts.map((contact, index) => (
                  <div key={contact.id} className="glassmorphism p-6 rounded-xl border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-bold text-white text-lg">{contact.name}</h3>
                        <p className="text-cyan-400">{contact.email}</p>
                        <p className="text-gray-300">{contact.company || 'No company provided'}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">
                          {new Date(contact.timestamp).toLocaleDateString()} at {new Date(contact.timestamp).toLocaleTimeString()}
                        </p>
                        <p className="text-sm text-neon">{contact.projectType || 'No project type'}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Timeline:</span>
                        <p className="text-white">{contact.timeline || 'Not specified'}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Budget:</span>
                        <p className="text-white">{contact.budget || 'Not specified'} {contact.budgetCurrency}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Features:</span>
                        <p className="text-white">{contact.features?.length > 0 ? contact.features.join(', ') : 'None selected'}</p>
                      </div>
                    </div>
                    
                    {contact.message && (
                      <div className="mt-4">
                        <span className="text-gray-400">Message:</span>
                        <p className="text-gray-300 mt-1">{contact.message}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        );

      case 'pending-testimonials':
        return <TestimonialAdmin />;


      case 'feedback-admin':
        return <FeedbackAdmin />;

      case 'hero':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Hero Section</h2>
              <button
                onClick={() => setEditingHero(true)}
                className="flex items-center px-4 py-2 neon-border rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Hero
              </button>
            </div>

            {editingHero ? (
              <div className="glassmorphism p-6 rounded-xl neon-border">
                <h3 className="text-xl font-bold text-white mb-6">Edit Hero Content</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={heroContent.title}
                      onChange={(e) => setHeroContent(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Subtitle</label>
                    <input
                      type="text"
                      value={heroContent.subtitle}
                      onChange={(e) => setHeroContent(prev => ({ ...prev, subtitle: e.target.value }))}
                      className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={heroContent.description}
                      onChange={(e) => setHeroContent(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all resize-none"
                      rows={3}
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setEditingHero(false)}
                      className="flex-1 neon-border px-6 py-3 rounded-lg text-white font-semibold hover:bg-cyan-500/10 transition-all"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditingHero(false)}
                      className="flex-1 border border-gray-500 px-6 py-3 rounded-lg text-gray-300 font-semibold hover:bg-gray-500/10 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glassmorphism p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">{heroContent.title}</h3>
                <p className="text-lg text-neon mb-2">{heroContent.subtitle}</p>
                <p className="text-gray-300">{heroContent.description}</p>
              </div>
            )}
          </div>
        );

      case 'testimonials':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Testimonials Management</h2>
              <button
                onClick={() => setIsAddingNew(true)}
                className="flex items-center px-4 py-2 neon-border rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New
              </button>
            </div>

            {(isAddingNew || editingTestimonial) && (
              <div className="mb-6">
                <TestimonialForm
                  testimonial={editingTestimonial}
                  onSave={(data) => {
                    if (editingTestimonial) {
                      updateTestimonial(editingTestimonial.id, data);
                    } else {
                      addTestimonial(data);
                    }
                  }}
                  onCancel={() => {
                    setIsAddingNew(false);
                    setEditingTestimonial(null);
                  }}
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="glassmorphism p-6 rounded-xl border border-white/20">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover neon-border"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-neon mb-2">{testimonial.designation}</p>
                      <p className="text-gray-300 text-sm line-clamp-3">{testimonial.quote}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() => setEditingTestimonial(testimonial)}
                      className="flex items-center px-3 py-2 rounded-lg glassmorphism neon-border text-cyan-400 hover:bg-cyan-500/10 transition-all"
                    >
                      <Edit2 className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTestimonial(testimonial.id)}
                      className="flex items-center px-3 py-2 rounded-lg glassmorphism border border-red-500 text-red-400 hover:bg-red-500/10 transition-all"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'photos':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Photo Management</h2>
            
            <div className="glassmorphism p-6 rounded-xl neon-border mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Upload Photos</h3>
                <label className="flex items-center px-4 py-2 neon-border rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-all cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Files
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {uploadedImages.map(image => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <button
                          onClick={() => deleteImage(image.id)}
                          className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-1 text-xs text-gray-400 truncate">{image.name}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {uploadedImages.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No photos uploaded yet. Click "Choose Files" to upload images.</p>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <div className="particle-bg"></div>
      
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 min-h-screen">
        <header className="glassmorphism backdrop-blur-lg border-b border-white/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Brain className="w-8 h-8 text-neon mr-3" />
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-neon">Synopsyne</span> CMS
                </h1>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 rounded-lg glassmorphism neon-border text-white hover:bg-red-500/10 transition-all"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="flex">
          <nav className="w-64 glassmorphism border-r border-white/20 min-h-screen p-6">
            <div className="space-y-2">
              {[
                { id: 'contacts', label: 'Contact Submissions', icon: Users },
                { id: 'testimonials', label: 'Testimonials', icon: Users },
                { id: 'pending-testimonials', label: 'Pending Testimonials', icon: FileText },
                { id: 'feedback-admin', label: 'Feedback Management', icon: FileText },
                { id: 'hero', label: 'Hero Section', icon: Home },
                { id: 'photos', label: 'Photos', icon: ImageIcon },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'neon-border text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          <main className="flex-1 p-6">
            {renderSectionContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CMS;
