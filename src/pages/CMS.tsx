
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, LogOut, Users, FileText, BarChart3, Settings, Plus, Edit, Trash2 } from 'lucide-react';

const CMS = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('testimonials');
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      designation: "CTO at TechFlow Solutions",
      quote: "Synopsyne Dynamics transformed our entire infrastructure. Their neural approach to software development isn't just innovative—it's revolutionary.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      designation: "Founder & CEO at InnovateLab",
      quote: "Working with Synopsyne was like having a team of digital neuroscientists. They understood our vision before we even fully articulated it.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const deleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const menuItems = [
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glassmorphism border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-neon" />
                <span className="text-xl font-bold text-white">
                  <span className="text-neon">Synopsyne</span> CMS
                </span>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 glassmorphism px-4 py-2 rounded-lg text-white hover:neon-border transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 glassmorphism min-h-screen border-r border-cyan-500/20">
          <nav className="p-6">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeTab === item.id
                          ? 'neon-border bg-cyan-500/10 text-neon'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'testimonials' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-white">Testimonials Management</h1>
                <button className="flex items-center space-x-2 neon-border px-4 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all">
                  <Plus className="w-4 h-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="grid gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="glassmorphism p-6 rounded-xl">
                    <div className="flex items-start justify-between">
                      <div className="flex space-x-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-cyan-400/30"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                          <p className="text-cyan-400 text-sm">{testimonial.designation}</p>
                          <p className="text-gray-300 mt-2">{testimonial.quote}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 glassmorphism rounded-lg text-cyan-400 hover:neon-border transition-all">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteTestimonial(testimonial.id)}
                          className="p-2 glassmorphism rounded-lg text-red-400 hover:border-red-400 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-6">Content Management</h1>
              <div className="glassmorphism p-6 rounded-xl">
                <p className="text-gray-300">Content management features coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-6">Analytics</h1>
              <div className="glassmorphism p-6 rounded-xl">
                <p className="text-gray-300">Analytics dashboard coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>
              <div className="glassmorphism p-6 rounded-xl">
                <p className="text-gray-300">Settings panel coming soon...</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CMS;
