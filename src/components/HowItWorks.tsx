
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Wand2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Input Your App Idea",
    description: "Describe your app concept in simple terms. Our AI will analyze and understand your vision.",
    icon: <BrainCircuit className="h-12 w-12 text-white" />,
    color: "bg-saas-purple",
  },
  {
    id: 2,
    title: "AI Validates & Builds",
    description: "Our platform assesses market fit, creates functional specs, designs visuals, and prepares launch assets.",
    icon: <Wand2 className="h-12 w-12 text-white" />,
    color: "bg-saas-blue",
  },
  {
    id: 3,
    title: "Launch Your App",
    description: "Deploy your fully-functional app with payment processing, marketing materials, and growth tools.",
    icon: <Rocket className="h-12 w-12 text-white" />,
    color: "bg-gradient-to-r from-saas-purple to-saas-blue",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="grad-text">AI Idea To App</span> Works
          </h2>
          <p className="text-lg text-gray-700">
            From concept to launch in three simple steps—no coding required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`${step.color} rounded-full p-6 mb-6 shadow-lg`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-saas-navy">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Animation showing the process */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto bg-saas-light-purple p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg overflow-hidden bg-white p-6 shadow-inner">
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-saas-purple/10 rounded w-2/3 mx-auto"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="h-10 bg-hero-gradient rounded-lg w-1/3 mx-auto"></div>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
              Real-time AI processing visualization
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
