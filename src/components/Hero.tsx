
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DashboardImage from './DashboardImage';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
        variant: "default"
      });
      setEmail('');
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-saas-light-purple via-white to-white -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className="space-y-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Turn Any <span className="grad-text">Idea</span> Into a Live App — In <span className="grad-text">One Click</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Design, build, and launch payment-ready apps instantly using AI. No coding required.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-3">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saas-purple/30"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting || isSubmitted}
                  />
                  {isSubmitted && (
                    <CheckCircle className="absolute right-3 top-3 text-green-500" size={20} />
                  )}
                </div>
                <button
                  type="submit"
                  className="button-primary flex items-center justify-center group"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : isSubmitted ? (
                    <span>Added to Waitlist</span>
                  ) : (
                    <>
                      <span>Join Waitlist</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CheckCircle className="h-4 w-4 text-saas-purple" />
              <span>Join the revolution in no-code app development</span>
            </motion.div>
          </div>
          
          {/* Right column - illustration */}
          <motion.div
            className="lg:block" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DashboardImage />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
