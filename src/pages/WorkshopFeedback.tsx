import React, { useState } from 'react';
import { Upload, Send, Star, Calendar, Users, Building2, Sparkles, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

interface FeedbackData {
  participantName: string;
  email: string;
  workshopTitle: string;
  workshopDate: string;
  rating: number;
  feedback: string;
  suggestions: string;
  profileImage?: string;
}

const WorkshopFeedback = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    participantName: '',
    email: '',
    workshopTitle: '',
    workshopDate: '',
    rating: 0,
    feedback: '',
    suggestions: '',
  });
  const [previewImage, setPreviewImage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 5MB.",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewImage(result);
        setFormData(prev => ({ ...prev, profileImage: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: keyof FeedbackData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.participantName || !formData.email || !formData.workshopTitle || !formData.feedback || formData.rating === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and provide a rating.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Store feedback in localStorage
      const feedbackSubmission = {
        id: `feedback-${Date.now()}`,
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      const existingFeedback = JSON.parse(localStorage.getItem('workshopFeedback') || '[]');
      existingFeedback.push(feedbackSubmission);
      localStorage.setItem('workshopFeedback', JSON.stringify(existingFeedback));

      // Store analytics data
      const analyticsData = JSON.parse(localStorage.getItem('workshopAnalytics') || '{"totalSubmissions": 0, "averageRating": 0, "workshopStats": {}, "monthlyData": {}}');
      
      analyticsData.totalSubmissions += 1;
      
      // Update workshop-specific stats
      if (!analyticsData.workshopStats[formData.workshopTitle]) {
        analyticsData.workshopStats[formData.workshopTitle] = { count: 0, totalRating: 0, averageRating: 0 };
      }
      analyticsData.workshopStats[formData.workshopTitle].count += 1;
      analyticsData.workshopStats[formData.workshopTitle].totalRating += formData.rating;
      analyticsData.workshopStats[formData.workshopTitle].averageRating = 
        analyticsData.workshopStats[formData.workshopTitle].totalRating / analyticsData.workshopStats[formData.workshopTitle].count;

      // Update monthly data
      const month = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!analyticsData.monthlyData[month]) {
        analyticsData.monthlyData[month] = { submissions: 0, totalRating: 0 };
      }
      analyticsData.monthlyData[month].submissions += 1;
      analyticsData.monthlyData[month].totalRating += formData.rating;

      // Recalculate overall average
      const allRatings = existingFeedback.map((f: any) => f.rating).concat([formData.rating]);
      analyticsData.averageRating = allRatings.reduce((a: number, b: number) => a + b, 0) / allRatings.length;

      localStorage.setItem('workshopAnalytics', JSON.stringify(analyticsData));

      toast({
        title: "Feedback Submitted Successfully!",
        description: "Thank you for your valuable feedback. We appreciate your participation.",
      });

      // Reset form
      setFormData({
        participantName: '',
        email: '',
        workshopTitle: '',
        workshopDate: '',
        rating: 0,
        feedback: '',
        suggestions: '',
      });
      setPreviewImage('');
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark/95 to-dark text-white overflow-hidden">
      {/* Enhanced Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-neon/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-tl from-yellow-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-neon rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-cyan-400/20 rounded-full blur-2xl"></div>
              <div className="relative flex items-center justify-center space-x-4 glassmorphism p-4 rounded-full neon-border">
                <Building2 className="w-10 h-10 text-neon animate-pulse" />
                <Sparkles className="w-8 h-8 text-cyan-400 animate-bounce" />
                <Award className="w-10 h-10 text-purple-400 animate-pulse delay-150" />
              </div>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-neon via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in">
              Workshop Feedback
            </h1>
            <div className="relative">
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Share your transformative experience and help us elevate future workshops, conferences, and innovation events
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-neon to-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feedback Form */}
            <div className="lg:col-span-2 glassmorphism p-8 rounded-2xl neon-border relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-neon/20 to-cyan-500/20 rounded-lg neon-glow">
                    <Send className="w-6 h-6 text-neon" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Your Feedback Matters</h2>
                </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <Input
                      value={formData.participantName}
                      onChange={(e) => handleInputChange('participantName', e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-dark/50 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="bg-dark/50 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Workshop/Event Title *
                    </label>
                    <Input
                      value={formData.workshopTitle}
                      onChange={(e) => handleInputChange('workshopTitle', e.target.value)}
                      placeholder="Enter workshop name"
                      className="bg-dark/50 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Event Date
                    </label>
                    <Input
                      type="date"
                      value={formData.workshopDate}
                      onChange={(e) => handleInputChange('workshopDate', e.target.value)}
                      className="bg-dark/50 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Overall Rating *
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className={`w-10 h-10 rounded-full transition-all hover:scale-110 ${
                          star <= formData.rating
                            ? 'text-yellow-400 neon-glow'
                            : 'text-gray-600 hover:text-yellow-300'
                        }`}
                      >
                        <Star className="w-6 h-6 mx-auto" fill={star <= formData.rating ? 'currentColor' : 'none'} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Feedback *
                  </label>
                  <Textarea
                    value={formData.feedback}
                    onChange={(e) => handleInputChange('feedback', e.target.value)}
                    placeholder="Share your experience, what you learned, and how the workshop helped you..."
                    rows={4}
                    className="bg-dark/50 border-gray-600 text-white resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Suggestions for Improvement
                  </label>
                  <Textarea
                    value={formData.suggestions}
                    onChange={(e) => handleInputChange('suggestions', e.target.value)}
                    placeholder="Any suggestions to make future workshops even better..."
                    rows={3}
                    className="bg-dark/50 border-gray-600 text-white resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Profile Photo (Optional)
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="cursor-pointer glassmorphism border border-dashed border-gray-600 rounded-lg p-4 hover:border-neon transition-colors flex-1">
                      <div className="flex flex-col items-center space-y-2">
                        <Upload className="w-6 h-6 text-gray-400" />
                        <span className="text-sm text-gray-400">Upload your photo</span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    {previewImage && (
                      <div className="w-16 h-16 rounded-full overflow-hidden neon-border">
                        <img 
                          src={previewImage} 
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden glassmorphism neon-border py-4 text-lg font-bold hover:bg-neon/10 transition-all group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon/0 via-neon/20 to-neon/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-2 border-neon border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Your Feedback...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      <span>Submit Feedback</span>
                      <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                    </div>
                  )}
                </Button>
              </form>
              </div>
            </div>

            {/* Enhanced Live Preview */}
            <div className="glassmorphism p-8 rounded-2xl neon-border relative overflow-hidden">
              {/* Preview background decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon via-cyan-400 to-purple-400"></div>
              <div className="absolute top-2 left-4 w-2 h-2 bg-neon rounded-full animate-pulse"></div>
              <div className="absolute top-2 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
              <div className="absolute top-2 left-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                  <Users className="w-5 h-5 text-neon" />
                </div>
                <span>Live Preview</span>
                <div className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full text-xs text-green-400">
                  LIVE
                </div>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden neon-border flex-shrink-0">
                    {previewImage ? (
                      <img 
                        src={previewImage} 
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neon/20 to-cyan-500/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">
                      {formData.participantName || 'Your Name'}
                    </h4>
                    <p className="text-neon text-sm">
                      {formData.email || 'your@email.com'}
                    </p>
                    {formData.workshopTitle && (
                      <p className="text-gray-400 text-sm">
                        Workshop: {formData.workshopTitle}
                      </p>
                    )}
                    {formData.rating > 0 && (
                      <div className="flex space-x-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= formData.rating ? 'text-yellow-400' : 'text-gray-600'
                            }`}
                            fill={star <= formData.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {formData.feedback && (
                  <div className="glassmorphism p-4 rounded-lg">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      "{formData.feedback}"
                    </p>
                  </div>
                )}
                
                {formData.suggestions && (
                  <div className="glassmorphism p-4 rounded-lg border-l-4 border-neon">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-neon">Suggestions:</strong> {formData.suggestions}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkshopFeedback;