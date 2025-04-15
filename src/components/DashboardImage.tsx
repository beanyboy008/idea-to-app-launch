
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Smartphone, Home, Book, Clock, User, ChevronRight } from 'lucide-react';
import { Progress } from './ui/progress';

const DashboardImage = () => {
  return (
    <div className="relative w-full aspect-video max-w-lg mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-saas-light-purple via-white to-white opacity-70 rounded-xl" />
      
      {/* Main Dashboard Container */}
      <motion.div 
        className="absolute inset-[5%] bg-white rounded-xl shadow-xl p-6 overflow-hidden flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side - Input */}
        <motion.div 
          className="w-2/5 h-full flex flex-col gap-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-saas-light-purple/30 p-4 rounded-lg h-full flex flex-col">
            <h3 className="text-sm font-semibold text-saas-purple mb-2">Your App Idea</h3>
            
            <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-800">Build a restaurant booking app</p>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-xs text-gray-600">Market validation: Strong</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-xs text-gray-600">Monetization potential: High</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <p className="text-xs text-gray-600">Competition: Medium</p>
              </div>
            </div>
            
            <div className="mt-auto">
              <p className="text-xs text-gray-500 mb-2">Build progress</p>
              <Progress value={65} className="h-2" />
              <div className="flex justify-between mt-1">
                <p className="text-xs">Idea</p>
                <p className="text-xs">Live App</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Side - App Preview */}
        <motion.div 
          className="w-3/5 h-full"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-full flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-saas-blue mb-1">App Preview</h3>
            
            {/* Phone mockup */}
            <div className="bg-gray-100 rounded-lg p-2 flex-grow relative">
              <div className="bg-white h-full rounded-md overflow-hidden border border-gray-200 flex flex-col">
                {/* App navbar */}
                <div className="bg-saas-blue p-2 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Home className="h-3 w-3 text-white" />
                    <p className="text-xs text-white font-medium">TableNow</p>
                  </div>
                  <User className="h-3 w-3 text-white" />
                </div>
                
                {/* App content */}
                <div className="p-2 flex-grow flex flex-col gap-2">
                  <div className="text-xs font-medium">Find your table</div>
                  
                  <motion.div 
                    className="bg-gray-50 rounded p-1 flex items-center justify-between"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                  >
                    <div className="text-[9px] text-gray-500">Search restaurants...</div>
                    <div className="bg-saas-blue/90 rounded-sm p-[2px]">
                      <ChevronRight className="h-2 w-2 text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Mini calendar */}
                  <div className="flex gap-1 overflow-x-auto py-1">
                    {[
                      { day: 'Mon', date: '24', active: false },
                      { day: 'Tue', date: '25', active: false },
                      { day: 'Wed', date: '26', active: true },
                      { day: 'Thu', date: '27', active: false },
                      { day: 'Fri', date: '28', active: false },
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className={`flex flex-col items-center p-[3px] rounded-sm ${
                          item.active ? 'bg-saas-purple text-white' : 'bg-gray-100'
                        }`}
                      >
                        <span className="text-[7px]">{item.day}</span>
                        <span className="text-[8px] font-medium">{item.date}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Restaurant card */}
                  <div className="bg-white border border-gray-100 rounded-sm p-1 shadow-sm">
                    <div className="h-8 bg-gray-200 rounded-sm mb-1 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Book className="h-3 w-3 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[9px] font-medium">Italian Garden</div>
                        <div className="text-[7px] text-gray-500 flex items-center gap-[2px]">
                          <Clock className="h-2 w-2" />
                          <span>20:00 • 2 people</span>
                        </div>
                      </div>
                      <motion.button 
                        className="bg-saas-purple text-white text-[7px] px-1 py-[2px] rounded-sm"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                      >
                        Reserve
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Time slots */}
                  <div className="text-[8px] font-medium mt-1">Available times</div>
                  <div className="flex flex-wrap gap-1">
                    {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map((time, i) => (
                      <div 
                        key={i} 
                        className={`text-[7px] p-[2px] border rounded-sm ${
                          time === '20:00' ? 'border-saas-purple bg-saas-purple/10 text-saas-purple' : 'border-gray-200'
                        }`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom nav */}
                <div className="flex justify-around py-1 border-t border-gray-100">
                  <Home className="h-2 w-2 text-saas-blue" />
                  <Calendar className="h-2 w-2 text-gray-400" />
                  <Book className="h-2 w-2 text-gray-400" />
                  <User className="h-2 w-2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute -right-4 top-1/4 h-6 w-6 bg-saas-blue/80 rounded-full flex items-center justify-center text-white"
            animate={{ 
              y: [0, -5, 0],
              boxShadow: [
                '0 0 0 rgba(37, 99, 235, 0)',
                '0 0 8px rgba(37, 99, 235, 0.5)',
                '0 0 0 rgba(37, 99, 235, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Calendar className="h-3 w-3" />
          </motion.div>
          
          <motion.div 
            className="absolute right-1/4 -bottom-2 h-5 w-5 bg-saas-purple/80 rounded-full flex items-center justify-center text-white"
            animate={{ 
              y: [0, -4, 0],
              boxShadow: [
                '0 0 0 rgba(91, 33, 182, 0)',
                '0 0 8px rgba(91, 33, 182, 0.5)',
                '0 0 0 rgba(91, 33, 182, 0)'
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <Smartphone className="h-2.5 w-2.5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardImage;
