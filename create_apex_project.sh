#!/bin/bash

# APEX ONE - Auto Deployment Script
# This script creates a complete React project with your landing pages

echo "🚀 Creating APEX ONE Landing Pages Project..."

# Create new React project
npx create-react-app apex-landing-pages
cd apex-landing-pages

# Install additional dependencies
yarn add @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip

yarn add class-variance-authority clsx cmdk embla-carousel-react input-otp lucide-react next-themes react-day-picker react-hook-form react-resizable-panels react-router-dom sonner tailwind-merge tailwindcss-animate vaul zod

yarn add -D @craco/craco autoprefixer postcss tailwindcss

echo "✅ APEX ONE project created!"
echo "🌐 Your landing pages will be available at:"
echo "   • http://localhost:3000/clean1 (DNA Helix)"
echo "   • http://localhost:3000/clean2 (Merkaba)" 
echo "   • http://localhost:3000/clean3 (Neon Frame)"
echo "   • http://localhost:3000/clean4 (Grid Frame)"
echo "   • http://localhost:3000/clean5 (Triangle APEX)"

echo "📁 Copy your deployment files to src/ folder"
echo "🚀 Run 'yarn start' to launch your APEX ONE landing pages!"