
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Brain, 
  Users, 
  DollarSign, 
  ListChecks, 
  Layers, 
  Bot, 
  Palette, 
  AtSign, 
  Video, 
  Calendar, 
  UserPlus, 
  PhoneCall, 
  BarChart, 
  RefreshCcw 
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: "App Idea Validator",
    description: "Tests your idea for demand, competition, and monetization potential using AI-powered market scans.",
    icon: <Brain className="h-10 w-10 p-2 bg-purple-100 text-saas-purple rounded-lg" />,
  },
  {
    id: 2,
    title: "Niche & Persona Classifier",
    description: "Auto-identifies your target user, use case, and niche to shape the app's features and marketing.",
    icon: <Users className="h-10 w-10 p-2 bg-blue-100 text-saas-blue rounded-lg" />,
  },
  {
    id: 3,
    title: "Business Model Builder",
    description: "Recommends a monetization model and pricing strategy based on your app's category and audience.",
    icon: <DollarSign className="h-10 w-10 p-2 bg-green-100 text-green-600 rounded-lg" />,
  },
  {
    id: 4,
    title: "MVP Feature Generator",
    description: "Prioritizes what to build now vs. later using frameworks like RICE or ICE with step-by-step roadmaps.",
    icon: <ListChecks className="h-10 w-10 p-2 bg-amber-100 text-amber-600 rounded-lg" />,
  },
  {
    id: 5,
    title: "Platform Recommender",
    description: "Recommends the best no-code/low-code tools based on your app's complexity and tech needs.",
    icon: <Layers className="h-10 w-10 p-2 bg-indigo-100 text-indigo-600 rounded-lg" />,
  },
  {
    id: 6,
    title: "Auto-Prompt Builder",
    description: "Generates build-ready prompts to feed into no-code tools that support API input.",
    icon: <Bot className="h-10 w-10 p-2 bg-rose-100 text-rose-600 rounded-lg" />,
  },
  {
    id: 7,
    title: "Brand Kit Generator",
    description: "Creates app name, domain suggestions, color palette, logo idea, and visual tone.",
    icon: <Palette className="h-10 w-10 p-2 bg-fuchsia-100 text-fuchsia-600 rounded-lg" />,
  },
  {
    id: 8,
    title: "Social Handle & Bio Assistant",
    description: "Checks availability and generates bios, slogans, and link-in-bio copy tailored to your niche.",
    icon: <AtSign className="h-10 w-10 p-2 bg-sky-100 text-sky-600 rounded-lg" />,
  },
  {
    id: 9,
    title: "AI Video Script Generator",
    description: "Creates viral short-form video ideas, scripts, captions, and thumbnails using trends from your niche.",
    icon: <Video className="h-10 w-10 p-2 bg-red-100 text-red-600 rounded-lg" />,
  },
  {
    id: 10,
    title: "Social Content Scheduler",
    description: "Posts content across platforms and uses AI triggers to engage users with custom DMs.",
    icon: <Calendar className="h-10 w-10 p-2 bg-emerald-100 text-emerald-600 rounded-lg" />,
  },
  {
    id: 11,
    title: "Lead Funnel Builder",
    description: "Auto-generates a mini-funnel to capture leads via landing pages, waitlists, or book-a-call flows.",
    icon: <UserPlus className="h-10 w-10 p-2 bg-violet-100 text-violet-600 rounded-lg" />,
  },
  {
    id: 12,
    title: "AI Setter & Outreach Agent",
    description: "Calls, emails, texts, or leaves voicemails for qualified leads to book a call or close sales.",
    icon: <PhoneCall className="h-10 w-10 p-2 bg-orange-100 text-orange-600 rounded-lg" />,
  },
  {
    id: 13,
    title: "Launch Analytics Dashboard",
    description: "Tracks engagement, signups, feedback, and suggests next steps post-launch.",
    icon: <BarChart className="h-10 w-10 p-2 bg-cyan-100 text-cyan-600 rounded-lg" />,
  },
  {
    id: 14,
    title: "Pivot or Sunset Planner",
    description: "Helps shut down or pivot failed ideas—exports users, assets, and lessons learned.",
    icon: <RefreshCcw className="h-10 w-10 p-2 bg-teal-100 text-teal-600 rounded-lg" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-saas-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="grad-text">14 Powerful Features</span> To Launch Your App
          </h2>
          <p className="text-lg text-gray-700">
            Everything you need to validate, build, and launch your app idea—from concept to paying customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: Math.min(0.1 * (index % 6), 0.5) 
              }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-saas-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
