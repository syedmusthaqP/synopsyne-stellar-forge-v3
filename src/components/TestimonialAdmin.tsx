import React, { useState, useEffect } from 'react';
import { Brain, Trash2, Eye, Calendar, User } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

interface PendingTestimonial {
  id: string;
  name: string;
  designation: string;
  description: string;
  profileImage: string;
  submittedAt: string;
}

const TestimonialAdmin = () => {
  const [pendingTestimonials, setPendingTestimonials] = useState<PendingTestimonial[]>([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState<PendingTestimonial | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load pending testimonials from localStorage
    const stored = localStorage.getItem('pendingTestimonials');
    if (stored) {
      setPendingTestimonials(JSON.parse(stored));
    }
  }, []);

  const deleteTestimonial = (id: string) => {
    const updated = pendingTestimonials.filter(t => t.id !== id);
    setPendingTestimonials(updated);
    localStorage.setItem('pendingTestimonials', JSON.stringify(updated));
    setSelectedTestimonial(null);
    
    toast({
      title: "Testimonial Deleted",
      description: "The testimonial has been removed from pending submissions.",
    });
  };

  const approveTestimonial = (testimonial: PendingTestimonial) => {
    // Add to live testimonials (for Testimonials page)
    const existingLiveTestimonials = JSON.parse(localStorage.getItem('liveTestimonials') || '{"ids": [], "details": {}}');
    const newId = `live-${Date.now()}`;
    
    existingLiveTestimonials.ids.push(newId);
    existingLiveTestimonials.details[newId] = {
      id: newId,
      description: testimonial.description,
      profileImage: testimonial.profileImage,
      name: testimonial.name,
      designation: testimonial.designation,
    };
    
    localStorage.setItem('liveTestimonials', JSON.stringify(existingLiveTestimonials));
    
    // Add to CMS testimonials list
    const existingCMSTestimonials = JSON.parse(localStorage.getItem('cmsTestimonials') || '[]');
    const cmsTestimonial = {
      id: Date.now(),
      name: testimonial.name,
      designation: testimonial.designation,
      description: testimonial.description,
      profileImage: testimonial.profileImage,
      approvedAt: new Date().toISOString()
    };
    
    existingCMSTestimonials.push(cmsTestimonial);
    localStorage.setItem('cmsTestimonials', JSON.stringify(existingCMSTestimonials));
    
    // Remove from pending
    deleteTestimonial(testimonial.id);
    
    toast({
      title: "Testimonial Approved",
      description: "The testimonial has been approved and is now live.",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="w-6 h-6 text-neon" />
        <h2 className="text-2xl font-bold text-white">Pending Testimonials</h2>
        <span className="glassmorphism px-3 py-1 rounded-full text-sm text-neon">
          {pendingTestimonials.length} pending
        </span>
      </div>

      {pendingTestimonials.length === 0 ? (
        <div className="text-center py-12">
          <Brain className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">No pending testimonials</p>
          <p className="text-gray-500 text-sm">
            Share your testimonial submission link with clients to collect feedback
          </p>
          <div className="mt-4 glassmorphism p-4 rounded-lg inline-block">
            <p className="text-neon text-sm font-mono">
              {window.location.origin}/submit-testimonial
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Testimonials List */}
          <div className="space-y-4">
            {pendingTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`glassmorphism p-4 rounded-lg cursor-pointer transition-all hover:bg-cyan-500/5 ${
                  selectedTestimonial?.id === testimonial.id ? 'neon-border' : 'border border-gray-700'
                }`}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden neon-border flex-shrink-0">
                    <img 
                      src={testimonial.profileImage} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold truncate">{testimonial.name}</h3>
                    <p className="text-neon text-sm truncate">{testimonial.designation}</p>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                      {testimonial.description}
                    </p>
                    <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(testimonial.submittedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Testimonial Details */}
          <div className="lg:sticky lg:top-6">
            {selectedTestimonial ? (
              <div className="glassmorphism p-6 rounded-lg neon-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Review Testimonial</h3>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => approveTestimonial(selectedTestimonial)}
                      className="glassmorphism neon-border px-4 py-2 text-sm hover:bg-green-500/10"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Approve
                    </Button>
                    <Button
                      onClick={() => deleteTestimonial(selectedTestimonial.id)}
                      variant="destructive"
                      className="px-4 py-2 text-sm"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>

                {/* Full Testimonial Preview */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden neon-border flex-shrink-0">
                      <img 
                        src={selectedTestimonial.profileImage} 
                        alt={selectedTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{selectedTestimonial.name}</h4>
                      <p className="text-neon">{selectedTestimonial.designation}</p>
                      <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Submitted {formatDate(selectedTestimonial.submittedAt)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="glassmorphism p-4 rounded-lg">
                    <h5 className="text-white font-medium mb-2">Testimonial Text:</h5>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedTestimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glassmorphism p-6 rounded-lg text-center">
                <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Select a testimonial to review</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialAdmin;