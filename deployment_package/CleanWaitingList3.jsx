import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Mail, User } from 'lucide-react';

const CleanWaitingList3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    optional: ''
  });
  const [timeLeft, setTimeLeft] = useState(300);
  const [submitted, setSubmitted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !submitted && !timeExpired) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !submitted) {
      setTimeExpired(true);
      setFormData({ name: '', email: '', optional: '' });
    }
  }, [timeLeft, submitted, timeExpired]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted to watchtower@oione.io and BCC stratacentrica@gmail.com:', formData);
    setSubmitted(true);
  };

  if (timeExpired) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/po7yc7vi_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%28275%29%20-%20Copy.jpg"
            alt="Neon Frame Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">MAYBE NEXT TIME</h1>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/po7yc7vi_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%28275%29%20-%20Copy.jpg"
            alt="Neon Frame Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-7xl font-bold text-white mb-4">YOU'RE IN!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/po7yc7vi_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%28275%29%20-%20Copy.jpg"
          alt="Neon Frame Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-slate-900/60 to-purple-900/70"></div>
      </div>

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
          <div className="text-xs text-white/40 text-center">LOGO HERE</div>
        </div>
      </div>

      <div className="absolute top-8 right-8 z-30">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/10 shadow-2xl">
          <div className="text-2xl font-mono font-bold text-white">{formatTime(timeLeft)}</div>
          <div className="text-xs text-white/40 text-center">TIME LEFT</div>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-md">
        <Card className="bg-white/2 backdrop-blur-3xl border border-white/5 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent rounded-3xl"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-6 w-12 h-0.5 bg-white/10 rotate-12 rounded"></div>
            <div className="absolute top-12 right-8 w-8 h-0.5 bg-white/8 -rotate-45 rounded"></div>
            <div className="absolute bottom-16 left-10 w-16 h-0.5 bg-white/6 rotate-6 rounded"></div>
          </div>
          <CardContent className="p-8 relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">JOIN WAITING LIST</h1>
              <p className="text-purple-100/60 text-lg">Restricted clearance required</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/70 text-sm font-medium">Name</Label>
                <div className="relative">
                  <User className="absolute left-4 top-4 h-5 w-5 text-white/30" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-12 h-14 bg-white/5 backdrop-blur-lg border border-white/10 text-white placeholder:text-white/25 focus:border-purple-400/30 focus:ring-purple-400/10 rounded-xl shadow-inner"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/70 text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 h-5 w-5 text-white/30" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-12 h-14 bg-white/5 backdrop-blur-lg border border-white/10 text-white placeholder:text-white/25 focus:border-purple-400/30 focus:ring-purple-400/10 rounded-xl shadow-inner"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="optional" className="text-white/50 text-sm font-medium">Anything else? (Optional)</Label>
                <Textarea
                  id="optional"
                  name="optional"
                  placeholder="Tell us more..."
                  value={formData.optional}
                  onChange={handleInputChange}
                  className="h-20 bg-white/5 backdrop-blur-lg border border-white/10 text-white placeholder:text-white/25 focus:border-purple-400/30 focus:ring-purple-400/10 rounded-xl resize-none shadow-inner"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-gradient-to-r from-purple-700/60 to-indigo-800/60 hover:from-purple-800/70 hover:to-indigo-900/70 text-white font-semibold shadow-xl transition-all duration-300 rounded-xl backdrop-blur-sm border border-purple-400/20"
              >
                ENTER GRAND PRIZE DRAW
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-white/40 hover:text-white/70 transition-colors">Privacy</a>
          <a href="#" className="text-white/40 hover:text-white/70 transition-colors">Terms</a>
          <a href="#" className="text-white/40 hover:text-white/70 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default CleanWaitingList3;