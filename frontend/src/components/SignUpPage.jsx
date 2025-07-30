import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Eye, EyeOff, Mail, User, Lock, Check, Triangle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 2) return 'bg-red-500';
    if (passwordStrength < 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 2) return 'Weak';
    if (passwordStrength < 4) return 'Medium';
    return 'Strong';
  };

  const handleSocialSignUp = (provider) => {
    toast({
      title: `${provider} Sign Up`,
      description: `Redirecting to ${provider} authentication...`,
    });
    // Mock social signup
    console.log(`Mock: Signing up with ${provider}`);
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.acceptTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Account Created!",
      description: "Welcome! Your account has been created successfully.",
    });

    // Mock form submission
    console.log('Mock: Form submitted', formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Clean CSS Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Left Side Hero Section */}
      <div className="absolute left-0 top-0 h-full w-1/2 z-10 hidden lg:block">
        <div className="w-full h-full bg-gradient-to-r from-blue-900/40 to-slate-800/60 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Triangle className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">Digital Gate</h2>
            <p className="text-xl text-blue-200 max-w-md">
              Step into the future of digital experiences
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/20 to-slate-900/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-md lg:ml-auto lg:mr-16">
        <Card className="bg-white/5 border-blue-300/20 shadow-2xl backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
                  <Triangle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-lg"></div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              Join the Future
            </h1>
            <p className="text-blue-200/80 text-sm">
              Create your account and step through the digital gate
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Sign Up Buttons */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full bg-white/10 border-blue-300/30 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => handleSocialSignUp('Google')}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full bg-white/10 border-blue-300/30 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => handleSocialSignUp('Apple')}
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Continue with Apple
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Separator className="flex-1 bg-blue-300/20" />
              <span className="text-blue-200/60 text-sm font-medium">or</span>
              <Separator className="flex-1 bg-blue-300/20" />
            </div>

            {/* Email Sign Up Form */}
            <form onSubmit={handleEmailSignUp} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-blue-100 text-sm font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-blue-300/60" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-100 text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-blue-300/60" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-100 text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-blue-300/60" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-blue-300/60 hover:text-blue-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-blue-200/60">
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-blue-100 text-sm font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-blue-300/60" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-blue-300/60 hover:text-blue-300"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div 
                    className={`w-5 h-5 rounded border-2 cursor-pointer transition-all duration-200 flex items-center justify-center ${
                      formData.acceptTerms 
                        ? 'bg-blue-500 border-blue-500' 
                        : 'border-blue-300/40 hover:border-blue-300/60'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, acceptTerms: !prev.acceptTerms }))}
                  >
                    {formData.acceptTerms && <Check className="h-3 w-3 text-white" />}
                  </div>
                </div>
                <label htmlFor="acceptTerms" className="text-sm text-blue-200/80 cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Create Account
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <p className="text-blue-200/60 text-sm">
                Already have an account?{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium underline">
                  Sign in
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;