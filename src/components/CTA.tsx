
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const CTA = () => {
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
    <section id="join-waitlist" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-95 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Turn Your Ideas Into Reality?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join our waitlist today and be the first to experience the future of app development.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSubmitted}
              />
              {isSubmitted && (
                <CheckCircle className="absolute right-3 top-3 text-white" size={20} />
              )}
            </div>
            <button
              type="submit"
              className="py-3 px-6 bg-white text-saas-purple font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center group"
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
          
          <p className="mt-4 text-sm text-white/80">
            Be among the first to transform your app ideas into reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
