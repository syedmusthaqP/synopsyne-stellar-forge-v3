import React, { useState, useEffect } from 'react';
import { Building2, Star, Calendar, User, Trash2, Eye, MessageSquare, Filter, Activity, TrendingUp, Users, Award, Target, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';

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
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<any>({
    totalSubmissions: 0,
    averageRating: 0,
    workshopStats: {},
    monthlyData: {}
  });
  const { toast } = useToast();

  useEffect(() => {
    // Load feedback from localStorage
    const stored = localStorage.getItem('workshopFeedback');
    if (stored) {
      setFeedbackList(JSON.parse(stored));
    }

    // Load analytics data
    const storedAnalytics = localStorage.getItem('workshopAnalytics');
    if (storedAnalytics) {
      setAnalyticsData(JSON.parse(storedAnalytics));
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

  // Prepare analytics chart data
  const workshopChartData = Object.entries(analyticsData.workshopStats || {}).map(([workshop, stats]: [string, any]) => ({
    name: workshop.length > 15 ? workshop.substring(0, 15) + '...' : workshop,
    fullName: workshop,
    submissions: stats.count,
    rating: parseFloat(stats.averageRating?.toFixed(1) || '0')
  }));

  const monthlyChartData = Object.entries(analyticsData.monthlyData || {}).map(([month, data]: [string, any]) => ({
    month: month.split(' ')[0],
    fullMonth: month,
    submissions: data.submissions,
    rating: parseFloat((data.totalRating / data.submissions).toFixed(1))
  }));

  const ratingDistribution = [1, 2, 3, 4, 5].map(rating => ({
    rating: `${rating}★`,
    count: feedbackList.filter(f => f.rating === rating).length,
    value: rating
  }));

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#16a34a'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glassmorphism p-3 rounded-lg neon-border shadow-lg">
          <p className="text-white font-semibold mb-1">{payload[0]?.payload?.fullName || payload[0]?.payload?.fullMonth || label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-300 text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-neon/20 to-cyan-500/20 rounded-lg neon-glow">
            <Building2 className="w-6 h-6 text-neon" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Feedback Management</h2>
            <p className="text-gray-400">Advanced analytics & participant insights</p>
          </div>
          <span className="glassmorphism px-4 py-2 rounded-full text-sm text-neon neon-border">
            {feedbackList.length} responses
          </span>
        </div>
        <div className="flex space-x-3">
          <Button
            onClick={() => setShowAnalytics(!showAnalytics)}
            variant={showAnalytics ? "default" : "outline"}
            className="flex items-center space-x-2 glassmorphism neon-border"
          >
            <BarChart3 className="w-4 h-4" />
            <span>{showAnalytics ? 'Hide Analytics' : 'Show Analytics'}</span>
          </Button>
        </div>
      </div>

      {/* Premium Analytics Dashboard */}
      {showAnalytics && (
        <div className="mb-8">
          <div className="glassmorphism p-6 rounded-xl neon-border mb-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                <Activity className="w-5 h-5 text-neon" />
              </div>
              <h3 className="text-xl font-bold text-white">Premium Analytics</h3>
              <div className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full text-xs text-green-400">
                LIVE DASHBOARD
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="glassmorphism p-4 rounded-lg neon-border hover:bg-cyan-500/5 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg neon-glow">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total Participants</p>
                    <p className="text-2xl font-bold text-white">{analyticsData.totalSubmissions}</p>
                  </div>
                </div>
              </div>
              <div className="glassmorphism p-4 rounded-lg neon-border hover:bg-cyan-500/5 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-lg neon-glow">
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Avg Rating</p>
                    <p className="text-2xl font-bold text-white">{analyticsData.averageRating?.toFixed(1) || '0'}</p>
                  </div>
                </div>
              </div>
              <div className="glassmorphism p-4 rounded-lg neon-border hover:bg-cyan-500/5 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg neon-glow">
                    <Building2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Active Workshops</p>
                    <p className="text-2xl font-bold text-white">{Object.keys(analyticsData.workshopStats || {}).length}</p>
                  </div>
                </div>
              </div>
              <div className="glassmorphism p-4 rounded-lg neon-border hover:bg-cyan-500/5 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg neon-glow">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Satisfaction</p>
                    <p className="text-2xl font-bold text-white">
                      {feedbackList.length > 0 ? `${((feedbackList.filter(f => f.rating >= 4).length / feedbackList.length) * 100).toFixed(0)}%` : '0%'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Workshop Performance Chart */}
              <div className="glassmorphism p-4 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="w-4 h-4 text-neon" />
                  <h4 className="text-white font-semibold">Workshop Performance</h4>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={workshopChartData}>
                    <defs>
                      <linearGradient id="colorSubmissions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} />
                    <YAxis stroke="#9CA3AF" fontSize={10} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="submissions" stroke="#06b6d4" fillOpacity={1} fill="url(#colorSubmissions)" />
                    <Area type="monotone" dataKey="rating" stroke="#10b981" fillOpacity={1} fill="url(#colorRating)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Rating Distribution */}
              <div className="glassmorphism p-4 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-4 h-4 text-neon" />
                  <h4 className="text-white font-semibold">Rating Distribution</h4>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={ratingDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="count"
                      label={({ rating, count }) => count > 0 ? `${rating}: ${count}` : ''}
                    >
                      {ratingDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Insights Panel */}
            <div className="glassmorphism p-4 rounded-lg border border-gray-700 mt-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-4 h-4 text-neon" />
                <h4 className="text-white font-semibold">Key Insights</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-2 neon-glow">
                    <Award className="w-6 h-6 text-green-400" />
                  </div>
                  <h5 className="text-white font-semibold text-sm mb-1">Top Workshop</h5>
                  <p className="text-neon text-xs">
                    {workshopChartData.length > 0 
                      ? workshopChartData.reduce((prev, current) => (prev.rating > current.rating) ? prev : current).fullName
                      : 'No data yet'
                    }
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2 neon-glow">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h5 className="text-white font-semibold text-sm mb-1">Most Popular</h5>
                  <p className="text-neon text-xs">
                    {workshopChartData.length > 0 
                      ? workshopChartData.reduce((prev, current) => (prev.submissions > current.submissions) ? prev : current).fullName
                      : 'No data yet'
                    }
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-2 neon-glow">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <h5 className="text-white font-semibold text-sm mb-1">Suggestions</h5>
                  <p className="text-neon text-xs">
                    {feedbackList.filter(f => f.suggestions && f.suggestions.trim() !== '').length} received
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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