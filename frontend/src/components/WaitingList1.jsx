import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Mail, User, Upload } from 'lucide-react';

const WaitingList1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    optional: ''
  });
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
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
    
    // Play alien sound effect
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
    oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.6);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.8);

    // Mock email sending
    console.log('Sending to watchtower@oione.io and BCC stratacentrica@gmail.com:', formData);
    
    setSubmitted(true);
  };

  if (timeExpired) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/h0xukzw6_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%2886%29.jpg"
            alt="DNA Helix Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
            MAYBE NEXT TIME
          </h1>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/h0xukzw6_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%2886%29.jpg"
            alt="DNA Helix Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-7xl font-bold text-white mb-4 animate-bounce">
            YOU'RE IN!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/h0xukzw6_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%2886%29.jpg"
          alt="DNA Helix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-blue-900/40 to-indigo-800/50"></div>
      </div>

      {/* Logo Area */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl">
          <Upload className="w-8 h-8 text-white/80" />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-white/60 whitespace-nowrap">
            LOGO HERE
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="absolute top-8 right-8 z-30">
        <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
          <div className="text-2xl font-mono font-bold text-white">
            {formatTime(timeLeft)}
          </div>
          <div className="text-xs text-white/60 text-center">TIME LEFT</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-md">
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">
                JOIN WAITING LIST
              </h1>
              <p className="text-blue-200/80 text-lg">
                Exclusive access awaits
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/90 text-sm font-medium">
                  Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-4 h-5 w-5 text-white/50" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-12 h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-blue-400/50 focus:ring-blue-400/20 rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90 text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 h-5 w-5 text-white/50" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-12 h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-blue-400/50 focus:ring-blue-400/20 rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* Optional Field */}
              <div className="space-y-2">
                <Label htmlFor="optional" className="text-white/70 text-sm font-medium">
                  Anything else? (Optional)
                </Label>
                <Textarea
                  id="optional"
                  name="optional"
                  placeholder="Tell us more..."
                  value={formData.optional}
                  onChange={handleInputChange}
                  className="h-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-blue-400/50 focus:ring-blue-400/20 rounded-xl resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-gradient-to-r from-blue-500/80 to-indigo-500/80 hover:from-blue-600/90 hover:to-indigo-600/90 text-white font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] rounded-xl backdrop-blur-sm border border-blue-400/30"
              >
                ENTER GRAND PRIZE DRAW
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-white/60 hover:text-white/90 transition-colors">Privacy</a>
          <a href="#" className="text-white/60 hover:text-white/90 transition-colors">Terms</a>
          <a href="#" className="text-white/60 hover:text-white/90 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default WaitingList1;