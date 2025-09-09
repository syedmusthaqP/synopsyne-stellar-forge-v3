import React, { useState, useEffect } from 'react';
import { Building2, Star, Calendar, User, Trash2, Eye, MessageSquare, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

interface WorkshopFeedback {
  id: string;
  participantName: string;
  email: string;
  workshopTitle: string;
  workshopDate: string;
  rating: number;
  feedback: string;
  suggestions: string;
  profileImage?: string;
  submittedAt: string;
}

const FeedbackAdmin = () => {
  const [feedbackList, setFeedbackList] = useState<WorkshopFeedback[]>([]);
  const [selectedFeedback, setSelectedFeedback] = useState<WorkshopFeedback | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [filterWorkshop, setFilterWorkshop] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Load feedback from localStorage
    const stored = localStorage.getItem('workshopFeedback');
    if (stored) {
      setFeedbackList(JSON.parse(stored));
    }
  }, []);

  const deleteFeedback = (id: string) => {
    const updated = feedbackList.filter(f => f.id !== id);
    setFeedbackList(updated);
    localStorage.setItem('workshopFeedback', JSON.stringify(updated));
    setSelectedFeedback(null);
    
    // Update analytics
    updateAnalyticsAfterDeletion();
    
    toast({
      title: "Feedback Deleted",
      description: "The feedback has been removed.",
    });
  };

  const updateAnalyticsAfterDeletion = () => {
    // Recalculate analytics data
    const remaining = feedbackList.filter(f => f.id !== selectedFeedback?.id);
    
    const analyticsData = {
      totalSubmissions: remaining.length,
      averageRating: remaining.length > 0 ? remaining.reduce((sum, f) => sum + f.rating, 0) / remaining.length : 0,
      workshopStats: {} as any,
      monthlyData: {} as any
    };

    // Recalculate workshop stats
    remaining.forEach(feedback => {
      if (!analyticsData.workshopStats[feedback.workshopTitle]) {
        analyticsData.workshopStats[feedback.workshopTitle] = { count: 0, totalRating: 0, averageRating: 0 };
      }
      analyticsData.workshopStats[feedback.workshopTitle].count += 1;
      analyticsData.workshopStats[feedback.workshopTitle].totalRating += feedback.rating;
    });

    // Calculate average ratings
    Object.keys(analyticsData.workshopStats).forEach(workshop => {
      const stats = analyticsData.workshopStats[workshop];
      stats.averageRating = stats.totalRating / stats.count;
    });

    // Recalculate monthly data
    remaining.forEach(feedback => {
      const month = new Date(feedback.submittedAt).toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!analyticsData.monthlyData[month]) {
        analyticsData.monthlyData[month] = { submissions: 0, totalRating: 0 };
      }
      analyticsData.monthlyData[month].submissions += 1;
      analyticsData.monthlyData[month].totalRating += feedback.rating;
    });

    localStorage.setItem('workshopAnalytics', JSON.stringify(analyticsData));
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

  // Filter feedback based on search and filters
  const filteredFeedback = feedbackList.filter(feedback => {
    const matchesSearch = feedback.participantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.workshopTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = filterRating === null || feedback.rating === filterRating;
    const matchesWorkshop = filterWorkshop === '' || feedback.workshopTitle === filterWorkshop;
    
    return matchesSearch && matchesRating && matchesWorkshop;
  });

  // Get unique workshops for filter
  const uniqueWorkshops = [...new Set(feedbackList.map(f => f.workshopTitle))];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <Building2 className="w-6 h-6 text-neon" />
        <h2 className="text-2xl font-bold text-white">Workshop Feedback Management</h2>
        <span className="glassmorphism px-3 py-1 rounded-full text-sm text-neon">
          {feedbackList.length} responses
        </span>
      </div>

      {/* Filters */}
      <div className="glassmorphism p-4 rounded-lg neon-border">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="w-5 h-5 text-neon" />
          <h3 className="text-white font-semibold">Filters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Input
              placeholder="Search participants, workshops, emails..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-dark/50 border-gray-600 text-white"
            />
          </div>
          <div>
            <select
              value={filterRating || ''}
              onChange={(e) => setFilterRating(e.target.value ? parseInt(e.target.value) : null)}
              className="w-full bg-dark/50 border border-gray-600 text-white rounded-md px-3 py-2"
            >
              <option value="">All Ratings</option>
              {[5, 4, 3, 2, 1].map(rating => (
                <option key={rating} value={rating}>{rating} Star{rating !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={filterWorkshop}
              onChange={(e) => setFilterWorkshop(e.target.value)}
              className="w-full bg-dark/50 border border-gray-600 text-white rounded-md px-3 py-2"
            >
              <option value="">All Workshops</option>
              {uniqueWorkshops.map(workshop => (
                <option key={workshop} value={workshop}>{workshop}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredFeedback.length === 0 ? (
        <div className="text-center py-12">
          <Building2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">
            {feedbackList.length === 0 ? 'No feedback submissions yet' : 'No feedback matches your filters'}
          </p>
          <p className="text-gray-500 text-sm">
            Share your feedback link with workshop participants to collect responses
          </p>
          <div className="mt-4 glassmorphism p-4 rounded-lg inline-block">
            <p className="text-neon text-sm font-mono">
              {window.location.origin}/workshop-feedback
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Feedback List */}
          <div className="space-y-4">
            {filteredFeedback.map((feedback) => (
              <div
                key={feedback.id}
                className={`glassmorphism p-4 rounded-lg cursor-pointer transition-all hover:bg-cyan-500/5 ${
                  selectedFeedback?.id === feedback.id ? 'neon-border' : 'border border-gray-700'
                }`}
                onClick={() => setSelectedFeedback(feedback)}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden neon-border flex-shrink-0">
                    {feedback.profileImage ? (
                      <img 
                        src={feedback.profileImage} 
                        alt={feedback.participantName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neon/20 to-cyan-500/20 flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold truncate">{feedback.participantName}</h3>
                    <p className="text-neon text-sm truncate">{feedback.workshopTitle}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3 h-3 ${
                              star <= feedback.rating ? 'text-yellow-400' : 'text-gray-600'
                            }`}
                            fill={star <= feedback.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs">
                        {feedback.rating}/5
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                      {feedback.feedback}
                    </p>
                    <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(feedback.submittedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Feedback Details */}
          <div className="lg:sticky lg:top-6">
            {selectedFeedback ? (
              <div className="glassmorphism p-6 rounded-lg neon-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Feedback Details</h3>
                  <Button
                    onClick={() => deleteFeedback(selectedFeedback.id)}
                    variant="destructive"
                    className="px-4 py-2 text-sm"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>

                {/* Participant Info */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden neon-border flex-shrink-0">
                      {selectedFeedback.profileImage ? (
                        <img 
                          src={selectedFeedback.profileImage} 
                          alt={selectedFeedback.participantName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-neon/20 to-cyan-500/20 flex items-center justify-center">
                          <User className="w-8 h-8 text-gray-500" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{selectedFeedback.participantName}</h4>
                      <p className="text-neon">{selectedFeedback.email}</p>
                      <p className="text-gray-400">Workshop: {selectedFeedback.workshopTitle}</p>
                      {selectedFeedback.workshopDate && (
                        <p className="text-gray-400">Date: {new Date(selectedFeedback.workshopDate).toLocaleDateString()}</p>
                      )}
                      <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Submitted {formatDate(selectedFeedback.submittedAt)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="glassmorphism p-4 rounded-lg">
                    <h5 className="text-white font-medium mb-2 flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Overall Rating</span>
                    </h5>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-6 h-6 ${
                              star <= selectedFeedback.rating ? 'text-yellow-400' : 'text-gray-600'
                            }`}
                            fill={star <= selectedFeedback.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold text-white">{selectedFeedback.rating}/5</span>
                    </div>
                  </div>

                  {/* Feedback */}
                  <div className="glassmorphism p-4 rounded-lg">
                    <h5 className="text-white font-medium mb-2 flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-neon" />
                      <span>Feedback</span>
                    </h5>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedFeedback.feedback}
                    </p>
                  </div>

                  {/* Suggestions */}
                  {selectedFeedback.suggestions && (
                    <div className="glassmorphism p-4 rounded-lg border-l-4 border-neon">
                      <h5 className="text-white font-medium mb-2">Suggestions for Improvement</h5>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedFeedback.suggestions}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="glassmorphism p-6 rounded-lg text-center">
                <Eye className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Select feedback to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackAdmin;