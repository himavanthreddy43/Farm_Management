import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-96 h-96 bg-farm-green/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-poppins font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-400 mb-8 max-w-md">Have questions about our AI platform? Contact our team for a personalized demo or support.</p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                  <Phone className="w-6 h-6 text-farm-green" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Us</p>
                  <p className="font-medium">+91 9491287501</p>
                  <p className="font-medium">+91 9618967469</p>
                </div>
              </div>
              
              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                  <Mail className="w-6 h-6 text-farm-green" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">contact@farmmanagement.ai</p>
                </div>
              </div>
              
              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                  <MapPin className="w-6 h-6 text-farm-green" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-8 border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-farm-green transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-farm-green transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-farm-green transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full bg-farm-green hover:bg-green-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-farm-green/30">
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
