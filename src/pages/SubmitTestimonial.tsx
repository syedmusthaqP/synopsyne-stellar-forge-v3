import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Upload, User, Star, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const SubmitTestimonial = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    description: '',
    profileImage: null as File | null
  });
  const [previewImage, setPreviewImage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setFormData(prev => ({ ...prev, profileImage: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.designation || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create the testimonial data object
      const testimonialData = {
        id: `testimonial-${Date.now()}`,
        name: formData.name,
        designation: formData.designation,
        description: formData.description,
        profileImage: previewImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
        submittedAt: new Date().toISOString(),
      };

      // For now, we'll just log the data and show success
      // In a real implementation, this would be sent to your backend/CMS
      console.log('Testimonial submitted:', testimonialData);
      
      // Store in localStorage as a temporary solution
      const existingTestimonials = JSON.parse(localStorage.getItem('pendingTestimonials') || '[]');
      existingTestimonials.push(testimonialData);
      localStorage.setItem('pendingTestimonials', JSON.stringify(existingTestimonials));

      toast({
        title: "Testimonial Submitted!",
        description: "Thank you for your feedback. Your testimonial has been submitted successfully.",
      });

      // Reset form
      setFormData({
        name: '',
        designation: '',
        description: '',
        profileImage: null
      });
      setPreviewImage('');
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your testimonial. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
                <Brain className="w-4 h-4 text-neon mr-2" />
                <span className="text-white text-sm">Submit Your Feedback</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Share Your <span className="text-neon animate-text-glow">Experience</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Help us showcase our neural approach to innovation by sharing your project experience. 
                Your feedback inspires future collaborations.
              </p>
            </div>

            {/* Testimonial Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative glassmorphism p-8 md:p-12 rounded-2xl neon-border">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Profile Image Upload */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 neon-border">
                        {previewImage ? (
                          <img 
                            src={previewImage} 
                            alt="Profile preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full glassmorphism flex items-center justify-center">
                            <User className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <label className="cursor-pointer inline-flex items-center glassmorphism px-4 py-2 rounded-full text-sm text-white hover:bg-cyan-500/10 transition-all">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white font-medium">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="glassmorphism border-gray-600 text-white placeholder-gray-400 focus:border-neon"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white font-medium">Position & Company *</label>
                      <Input
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="e.g., CTO at TechFlow Solutions"
                        className="glassmorphism border-gray-600 text-white placeholder-gray-400 focus:border-neon"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white font-medium">Your Testimonial *</label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Share your experience working with Synopsyne Dynamics. How did our neural approach to software development impact your business?"
                      rows={6}
                      className="glassmorphism border-gray-600 text-white placeholder-gray-400 focus:border-neon resize-none"
                      required
                    />
                    <div className="text-right text-gray-400 text-sm">
                      {formData.description.length}/500 characters
                    </div>
                  </div>

                  {/* Star Rating Visual (decorative) */}
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-gray-300">Rate your experience:</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="glassmorphism neon-border px-8 py-3 text-lg font-semibold hover:bg-cyan-500/10 transition-all group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                          Submit Testimonial
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Preview Card */}
            {(formData.name || formData.designation || formData.description) && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white text-center mb-6">
                  Preview Your <span className="text-neon">Testimonial</span>
                </h3>
                <div className="relative max-w-2xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl blur-lg"></div>
                  <div className="relative glassmorphism p-6 rounded-xl neon-border">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden neon-border flex-shrink-0">
                        {previewImage ? (
                          <img 
                            src={previewImage} 
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full glassmorphism flex items-center justify-center">
                            <User className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">
                          {formData.name || 'Your Name'}
                        </h4>
                        <p className="text-sm text-neon mb-3">
                          {formData.designation || 'Your Position & Company'}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {formData.description || 'Your testimonial will appear here...'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubmitTestimonial;