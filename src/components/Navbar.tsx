
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-saas-purple" />
          <span className="font-bold text-xl text-saas-navy">AI Idea To App</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-saas-navy hover:text-saas-purple transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-saas-navy hover:text-saas-purple transition-colors">
            How It Works
          </a>
          <a href="#join-waitlist" className="button-primary">
            Join Waitlist
          </a>
        </div>
        
        <button 
          className="md:hidden text-saas-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 transform",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-saas-navy hover:text-saas-purple transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-saas-navy hover:text-saas-purple transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#join-waitlist" 
            className="button-primary text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
