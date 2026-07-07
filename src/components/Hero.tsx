import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ShieldCheck, Cpu, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900" id="home">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        
        {/* Animated Particles/Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-farm-green/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-farm-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-farm-green"></span>
          </span>
          <span className="text-white/90 text-sm font-medium">Meet the future of poultry farming</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          The World's Smartest AI <br />
          <span className="text-gradient">Poultry Farm Management</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl font-light leading-relaxed"
        >
          Manage your poultry farm with Artificial Intelligence. Detect diseases, monitor birds through CCTV, predict egg production, calculate feed, manage expenses, and grow profits—all from one intelligent dashboard.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full"
        >
          <button className="bg-farm-green hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_40px_-10px_rgba(22,163,74,0.6)] w-full sm:w-auto flex items-center justify-center group">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all w-full sm:w-auto flex items-center justify-center group">
            <Play className="w-5 h-5 mr-2 text-farm-green group-hover:scale-110 transition-transform" />
            Watch Demo
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-10 border-t border-white/10 w-full"
        >
          <div className="flex flex-col items-center">
            <Cpu className="w-8 h-8 text-farm-green mb-3" />
            <h3 className="text-white font-bold text-3xl font-poppins mb-1">25+</h3>
            <p className="text-slate-400 text-sm">AI Features</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 text-farm-green mb-3" />
            <h3 className="text-white font-bold text-3xl font-poppins mb-1">99%</h3>
            <p className="text-slate-400 text-sm">Detection Accuracy</p>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone className="w-8 h-8 text-farm-green mb-3" />
            <h3 className="text-white font-bold text-3xl font-poppins mb-1">24/7</h3>
            <p className="text-slate-400 text-sm">Farm Monitoring</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center text-farm-green mb-3 font-bold text-xl">A/अ</div>
            <h3 className="text-white font-bold text-3xl font-poppins mb-1">10+</h3>
            <p className="text-slate-400 text-sm">Regional Languages</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
