import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Star, Calendar, Building2, Award, Target, Activity } from 'lucide-react';

interface AnalyticsData {
  totalSubmissions: number;
  averageRating: number;
  workshopStats: { [key: string]: { count: number; totalRating: number; averageRating: number } };
  monthlyData: { [key: string]: { submissions: number; totalRating: number } };
}

const WorkshopAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalSubmissions: 0,
    averageRating: 0,
    workshopStats: {},
    monthlyData: {}
  });
  const [feedbackData, setFeedbackData] = useState<any[]>([]);

  useEffect(() => {
    // Load analytics data
    const storedAnalytics = localStorage.getItem('workshopAnalytics');
    if (storedAnalytics) {
      setAnalyticsData(JSON.parse(storedAnalytics));
    }

    // Load feedback data
    const storedFeedback = localStorage.getItem('workshopFeedback');
    if (storedFeedback) {
      setFeedbackData(JSON.parse(storedFeedback));
    }
  }, []);

  // Prepare chart data
  const workshopChartData = Object.entries(analyticsData.workshopStats).map(([workshop, stats]) => ({
    name: workshop.length > 20 ? workshop.substring(0, 20) + '...' : workshop,
    fullName: workshop,
    submissions: stats.count,
    averageRating: parseFloat(stats.averageRating.toFixed(1))
  }));

  const monthlyChartData = Object.entries(analyticsData.monthlyData).map(([month, data]) => ({
    month: month.split(' ')[0], // Just the month name
    fullMonth: month,
    submissions: data.submissions,
    averageRating: parseFloat((data.totalRating / data.submissions).toFixed(1))
  }));

  const ratingDistribution = [1, 2, 3, 4, 5].map(rating => ({
    rating: `${rating} Star${rating !== 1 ? 's' : ''}`,
    count: feedbackData.filter(f => f.rating === rating).length,
    value: rating
  }));

  const COLORS = ['#ff6b6b', '#ffa726', '#ffeb3b', '#66bb6a', '#4caf50'];

  const StatCard = ({ icon: Icon, title, value, subtitle, trend, color }: any) => (
    <div className="glassmorphism p-6 rounded-xl neon-border hover:bg-cyan-500/5 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className={`p-3 rounded-lg ${color} neon-glow`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-300 text-sm font-medium">{title}</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-1">{value}</p>
          {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
        </div>
        {trend && (
          <div className="flex items-center space-x-1 text-green-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">{trend}</span>
          </div>
        )}
      </div>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glassmorphism p-4 rounded-lg neon-border shadow-lg">
          <p className="text-white font-semibold mb-2">{payload[0].payload.fullName || payload[0].payload.fullMonth || label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-300" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3 mb-6">
        <Activity className="w-6 h-6 text-neon" />
        <h2 className="text-2xl font-bold text-white">Workshop Analytics</h2>
        <div className="glassmorphism px-3 py-1 rounded-full text-sm text-neon">
          Premium Dashboard
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Participants"
          value={analyticsData.totalSubmissions}
          subtitle="Across all workshops"
          trend="+12%"
          color="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <StatCard
          icon={Star}
          title="Average Rating"
          value={analyticsData.averageRating.toFixed(1)}
          subtitle="Out of 5 stars"
          trend="+0.3"
          color="bg-gradient-to-br from-yellow-500 to-yellow-600"
        />
        <StatCard
          icon={Building2}
          title="Active Workshops"
          value={Object.keys(analyticsData.workshopStats).length}
          subtitle="Currently tracked"
          color="bg-gradient-to-br from-green-500 to-green-600"
        />
        <StatCard
          icon={Award}
          title="Satisfaction Rate"
          value={`${((feedbackData.filter(f => f.rating >= 4).length / Math.max(1, feedbackData.length)) * 100).toFixed(0)}%`}
          subtitle="4+ star ratings"
          trend="+5%"
          color="bg-gradient-to-br from-purple-500 to-purple-600"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Workshop Performance */}
        <div className="glassmorphism p-6 rounded-xl neon-border">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-5 h-5 text-neon" />
            <h3 className="text-xl font-bold text-white">Workshop Performance</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={workshopChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                stroke="#9CA3AF" 
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="submissions" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              <Bar dataKey="averageRating" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Rating Distribution */}
        <div className="glassmorphism p-6 rounded-xl neon-border">
          <div className="flex items-center space-x-3 mb-6">
            <Star className="w-5 h-5 text-neon" />
            <h3 className="text-xl font-bold text-white">Rating Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ratingDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ rating, count }) => count > 0 ? `${rating}: ${count}` : ''}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {ratingDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Trends */}
        <div className="glassmorphism p-6 rounded-xl neon-border">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="w-5 h-5 text-neon" />
            <h3 className="text-xl font-bold text-white">Monthly Trends</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="submissions" 
                stroke="#06b6d4" 
                strokeWidth={3}
                dot={{ fill: '#06b6d4', strokeWidth: 2, r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="averageRating" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Feedback Highlights */}
        <div className="glassmorphism p-6 rounded-xl neon-border">
          <div className="flex items-center space-x-3 mb-6">
            <Activity className="w-5 h-5 text-neon" />
            <h3 className="text-xl font-bold text-white">Recent Feedback</h3>
          </div>
          <div className="space-y-4 max-h-72 overflow-y-auto">
            {feedbackData.slice(-5).reverse().map((feedback, index) => (
              <div key={index} className="glassmorphism p-4 rounded-lg border border-gray-700">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-white font-semibold text-sm">{feedback.participantName}</h4>
                    <p className="text-neon text-xs">{feedback.workshopTitle}</p>
                  </div>
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
                </div>
                <p className="text-gray-300 text-xs line-clamp-3">
                  {feedback.feedback}
                </p>
              </div>
            ))}
            {feedbackData.length === 0 && (
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">No feedback data yet</p>
                <p className="text-gray-500 text-sm">
                  Share your feedback link to start collecting responses
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Insights Panel */}
      <div className="glassmorphism p-6 rounded-xl neon-border">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
          <TrendingUp className="w-5 h-5 text-neon" />
          <span>Key Insights</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 neon-glow">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Top Performing Workshop</h4>
            <p className="text-neon text-sm">
              {workshopChartData.length > 0 
                ? workshopChartData.reduce((prev, current) => (prev.averageRating > current.averageRating) ? prev : current).fullName
                : 'No data yet'
              }
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 neon-glow">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Most Popular Workshop</h4>
            <p className="text-neon text-sm">
              {workshopChartData.length > 0 
                ? workshopChartData.reduce((prev, current) => (prev.submissions > current.submissions) ? prev : current).fullName
                : 'No data yet'
              }
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 neon-glow">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Improvement Focus</h4>
            <p className="text-neon text-sm">
              {feedbackData.filter(f => f.suggestions && f.suggestions.trim() !== '').length > 0
                ? `${feedbackData.filter(f => f.suggestions && f.suggestions.trim() !== '').length} suggestions received`
                : 'No suggestions yet'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopAnalytics;