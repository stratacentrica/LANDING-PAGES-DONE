import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Mail, User, Upload } from 'lucide-react';

const WaitingList2 = () => {
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
    
    // Deeper alien sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(80, audioContext.currentTime + 0.4);
    oscillator.frequency.exponentialRampToValueAtTime(250, audioContext.currentTime + 0.8);
    
    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.0);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1.0);

    console.log('Sending to watchtower@oione.io and BCC stratacentrica@gmail.com:', formData);
    setSubmitted(true);
  };

  if (timeExpired) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/kumujma6_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%28170%29.jpg"
            alt="Merkaba Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse drop-shadow-2xl">
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
            src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/kumujma6_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%28170%29.jpg"
            alt="Merkaba Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50"></div>
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-7xl font-bold text-white mb-4 animate-bounce drop-shadow-2xl">
            YOU'RE IN!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background - Medium Tone */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://customer-assets.emergentagent.com/job_blue-silver-portal/artifacts/kumujma6_THE%20FAKE%20LABEL%20OFFICIAL%20OFFICE%20HQ-USE%20%28170%29.jpg"
          alt="Merkaba Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/50 to-indigo-900/60"></div>
      </div>

      {/* Logo Area */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-20 h-20 bg-white/8 backdrop-blur-lg rounded-2xl border border-white/15 flex items-center justify-center shadow-2xl">
          <Upload className="w-8 h-8 text-white/70" />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-white/50 whitespace-nowrap">
            LOGO HERE
          </div>
        </div>
      </div>

      {/* Countdown Timer - Darker */}
      <div className="absolute top-8 right-8 z-30">
        <div className="bg-white/8 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/15 shadow-xl">
          <div className="text-2xl font-mono font-bold text-white drop-shadow-lg">
            {formatTime(timeLeft)}
          </div>
          <div className="text-xs text-white/50 text-center">TIME LEFT</div>
        </div>
      </div>

      {/* Main Content - Enhanced Glass Effect */}
      <div className="relative z-20 w-full max-w-md">
        <Card className="bg-white/3 backdrop-blur-2xl border border-white/8 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
          <CardContent className="p-8 relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                JOIN WAITING LIST
              </h1>
              <p className="text-blue-100/70 text-lg">
                Elite access reserved
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field - Thicker Glass */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/80 text-sm font-medium">
                  Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-4 h-5 w-5 text-white/40" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-12 h-14 bg-white/8 backdrop-blur-md border border-white/15 text-white placeholder:text-white/30 focus:border-purple-400/40 focus:ring-purple-400/15 rounded-xl shadow-inner"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80 text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 h-5 w-5 text-white/40" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-12 h-14 bg-white/8 backdrop-blur-md border border-white/15 text-white placeholder:text-white/30 focus:border-purple-400/40 focus:ring-purple-400/15 rounded-xl shadow-inner"
                    required
                  />
                </div>
              </div>

              {/* Optional Field */}
              <div className="space-y-2">
                <Label htmlFor="optional" className="text-white/60 text-sm font-medium">
                  Anything else? (Optional)
                </Label>
                <Textarea
                  id="optional"
                  name="optional"
                  placeholder="Tell us more..."
                  value={formData.optional}
                  onChange={handleInputChange}
                  className="h-20 bg-white/8 backdrop-blur-md border border-white/15 text-white placeholder:text-white/30 focus:border-purple-400/40 focus:ring-purple-400/15 rounded-xl resize-none shadow-inner"
                />
              </div>

              {/* Submit Button - Deeper Colors */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-gradient-to-r from-purple-600/70 to-indigo-600/70 hover:from-purple-700/80 hover:to-indigo-700/80 text-white font-semibold shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-[1.02] rounded-xl backdrop-blur-sm border border-purple-400/25"
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
          <a href="#" className="text-white/50 hover:text-white/80 transition-colors">Privacy</a>
          <a href="#" className="text-white/50 hover:text-white/80 transition-colors">Terms</a>
          <a href="#" className="text-white/50 hover:text-white/80 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default WaitingList2;