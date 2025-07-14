
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Brain, Lock, User, ArrowLeft } from 'lucide-react';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple hardcoded credentials - trim whitespace to avoid issues
    const username = credentials.username.trim();
    const password = credentials.password.trim();
    
    if (username === 'admin' && password === 'synopsyne2024') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/cms');
    } else {
      setError('Invalid credentials. Use: admin / synopsyne2024');
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Back to website header */}
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-neon">Synopsyne</span>
              <span className="ml-1">Dynamics</span>
            </Link>
            
            {/* Back button */}
            <Link 
              to="/" 
              className="flex items-center text-white hover:text-neon transition-colors glassmorphism px-4 py-2 rounded-lg border border-cyan-500/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Website
            </Link>
          </div>
        </nav>
      </header>
      
      {/* Floating elements */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="glassmorphism p-8 rounded-xl neon-border">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glassmorphism neon-border mb-4">
              <Brain className="w-8 h-8 text-neon" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              <span className="text-neon">Synopsyne</span> CMS
            </h1>
            <p className="text-gray-300 mt-2">Neural Content Management System</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 glassmorphism rounded-lg text-white placeholder-gray-400 focus:neon-border focus:outline-none transition-all"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full neon-border px-6 py-3 rounded-lg text-white font-semibold hover:bg-cyan-500/10 transition-all transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Neural Login
              </span>
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-sm text-cyan-300 text-center">
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: synopsyne2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
