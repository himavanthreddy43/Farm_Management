
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar Placeholder */}
      <nav className="fixed w-full z-50 glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-10 h-10 bg-farm-green rounded-lg flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-xl">SL</span>
              </div>
              <span className="font-poppins font-bold text-xl text-farm-forest">Sri Laxmi Farms AI</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-slate-600 hover:text-farm-green transition-colors font-medium">Features</a>
              <a href="#dashboard" className="text-slate-600 hover:text-farm-green transition-colors font-medium">Dashboard</a>
              <a href="#pricing" className="text-slate-600 hover:text-farm-green transition-colors font-medium">Pricing</a>
              <button className="bg-farm-green hover:bg-farm-forest text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg shadow-farm-green/30">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Placeholder */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for video background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1548850650-711e737c35fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Farm Background" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6 leading-tight"
          >
            The World's Smartest AI <br />
            <span className="text-gradient">Poultry Farm Management</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-light"
          >
            Manage your poultry farm with Artificial Intelligence. Detect diseases, monitor birds through CCTV, predict egg production, calculate feed, manage expenses, automate reports, and grow profits—all from one intelligent dashboard.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="bg-farm-green hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-farm-green/40 w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all w-full sm:w-auto">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer Placeholder */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 Sri Laxmi Farms AI. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
