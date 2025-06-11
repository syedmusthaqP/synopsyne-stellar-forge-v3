
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, LogOut, Plus, Edit2, Trash2, Upload, Image as ImageIcon } from 'lucide-react';

const CMS = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [testimonials, setTestimonials] = useState([
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
    }
  ]);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: Date.now() + Math.random(),
          name: file.name,
          url: e.target.result,
          size: file.size,
          type: file.type
        };
        setUploadedImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const deleteImage = (imageId) => {
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
  };

  const addTestimonial = (testimonialData) => {
    const newTestimonial = {
      ...testimonialData,
      id: Date.now()
    };
    setTestimonials(prev => [...prev, newTestimonial]);
    setIsAddingNew(false);
  };

  const updateTestimonial = (id, testimonialData) => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...testimonialData, id } : t));
    setEditingTestimonial(null);
  };

  const deleteTestimonial = (id) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const TestimonialForm = ({ testimonial, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      quote: testimonial?.quote || '',
      name: testimonial?.name || '',
      designation: testimonial?.designation || '',
      src: testimonial?.src || ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };

    const useUploadedImage = (imageUrl) => {
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
              rows="4"
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
            
            {/* Uploaded Images Selection */}
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

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 min-h-screen">
        {/* Header */}
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

        <div className="container mx-auto px-6 py-8">
          {/* Image Upload Section */}
          <div className="mb-8">
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

          {/* Testimonials Management */}
          <div className="mb-8">
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

            {/* Add/Edit Form */}
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

            {/* Testimonials List */}
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
                      <p className="text-gray-300 text-sm">{testimonial.quote}</p>
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
        </div>
      </div>
    </div>
  );
};

export default CMS;
