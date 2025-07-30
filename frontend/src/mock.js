// Mock data for sign up functionality
export const mockSignUpData = {
  socialProviders: [
    {
      name: 'Google',
      icon: 'google',
      redirectUrl: 'https://accounts.google.com/oauth/authorize',
      enabled: true
    },
    {
      name: 'Apple', 
      icon: 'apple',
      redirectUrl: 'https://appleid.apple.com/auth/authorize',
      enabled: true
    }
  ],
  
  // Mock user accounts (for demonstration)
  users: [],
  
  // Mock form validation rules
  validation: {
    password: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
  },

  // Mock API responses
  responses: {
    socialSignUp: (provider) => ({
      success: true,
      message: `Redirecting to ${provider} authentication...`,
      data: {
        redirectUrl: `https://mock-${provider.toLowerCase()}.com/auth`,
        state: 'mock-state-' + Date.now()
      }
    }),
    
    emailSignUp: (userData) => {
      // Simulate API delay
      return new Promise((resolve) => {
        setTimeout(() => {
          // Add to mock users array
          const newUser = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            createdAt: new Date().toISOString(),
            verified: false
          };
          
          mockSignUpData.users.push(newUser);
          
          resolve({
            success: true,
            message: 'Account created successfully!',
            data: {
              user: newUser,
              token: 'mock-jwt-token-' + Date.now()
            }
          });
        }, 1000);
      });
    },
    
    checkEmailExists: (email) => ({
      exists: mockSignUpData.users.some(user => user.email === email),
      message: 'Email availability checked'
    })
  }
};

// Mock utility functions
export const mockAuth = {
  validatePassword: (password) => {
    const rules = mockSignUpData.validation.password;
    const checks = {
      length: password.length >= rules.minLength,
      uppercase: rules.requireUppercase ? /[A-Z]/.test(password) : true,
      lowercase: rules.requireLowercase ? /[a-z]/.test(password) : true,
      numbers: rules.requireNumbers ? /[0-9]/.test(password) : true,
      special: rules.requireSpecialChars ? /[^A-Za-z0-9]/.test(password) : true
    };
    
    const passed = Object.values(checks).filter(Boolean).length;
    return {
      isValid: passed === 5,
      strength: passed,
      checks
    };
  },
  
  validateEmail: (email) => {
    return mockSignUpData.validation.email.pattern.test(email);
  }
};