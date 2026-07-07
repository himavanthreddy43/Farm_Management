import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = ({ onOpenAuth }: { onOpenAuth: (mode: 'login' | 'signup') => void }) => {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Choose the perfect plan for your farm's size and needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-poppins font-bold text-white mb-2">Starter</h3>
            <p className="text-slate-400 text-sm mb-6">Perfect for small farms starting out.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹999</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Up to 5,000 birds', 'Basic AI Disease Detection', 'Daily Reports', 'WhatsApp Support'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-farm-green mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onOpenAuth('signup')}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl transition-colors border border-white/10"
            >
              Start Free Trial
            </button>
          </motion.div>

          {/* Professional */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 border-2 border-farm-green relative transform md:-translate-y-4 shadow-[0_0_40px_-10px_rgba(22,163,74,0.3)]"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-farm-green text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-poppins font-bold text-white mb-2">Professional</h3>
            <p className="text-slate-400 text-sm mb-6">For growing commercial operations.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹2,999</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Up to 50,000 birds', 'Advanced AI & CCTV integration', 'Smart Climate Alerts', 'Voice Assistant (Local Languages)', 'Priority Support'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-farm-green mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onOpenAuth('signup')}
              className="w-full bg-farm-green hover:bg-green-500 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-farm-green/30"
            >
              Get Started
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-poppins font-bold text-white mb-2">Enterprise</h3>
            <p className="text-slate-400 text-sm mb-6">For large-scale integrations.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">Custom</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited birds', 'Custom AI Model Training', 'Multi-farm Dashboard', 'Dedicated Account Manager', 'On-site Installation'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-farm-green mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl transition-colors border border-white/10">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
