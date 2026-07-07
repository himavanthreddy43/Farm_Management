import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = ({ onOpenAuth }: { onOpenAuth: (mode: 'login' | 'signup') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-farm-green to-teal-400 rounded-xl flex items-center justify-center shadow-lg shadow-farm-green/30">
              <span className="text-white font-poppins font-bold text-2xl tracking-tighter">FM</span>
            </div>
            <span className={`font-poppins font-bold text-2xl ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'} transition-colors`}>
              Farm_<span className="text-farm-green">management</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {['Home', 'Features', 'Solutions', 'Dashboard', 'Pricing'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`px-4 py-2 rounded-full font-medium transition-all ${isScrolled ? 'text-slate-600 hover:text-farm-green hover:bg-farm-green/10 dark:text-slate-300 dark:hover:text-farm-green' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full font-medium transition-colors flex items-center border border-white/10">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
                <button 
                  onClick={() => signOut()}
                  className="text-red-400 hover:text-red-300 px-4 py-2 rounded-full font-medium transition-colors flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => onOpenAuth('login')}
                  className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-farm-green dark:text-slate-300' : 'text-white hover:text-white/80'}`}
                >
                  Login
                </button>
                <a href="#pricing" className="bg-farm-green hover:bg-green-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-farm-green/30 flex items-center group">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {['Home', 'Features', 'Solutions', 'Dashboard', 'Pricing'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-3 text-slate-800 dark:text-slate-200 font-medium hover:bg-farm-green/10 hover:text-farm-green rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {user ? (
                <>
                  <Link 
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-left text-slate-800 dark:text-slate-200 font-medium hover:bg-farm-green/10 hover:text-farm-green rounded-lg transition-colors flex items-center"
                  >
                    <LayoutDashboard className="w-5 h-5 mr-3" />
                    Go to Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-3 text-left text-red-500 font-medium hover:bg-red-500/10 rounded-lg transition-colors flex items-center"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => {
                      onOpenAuth('login');
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-3 text-left text-slate-800 dark:text-slate-200 font-medium hover:bg-farm-green/10 hover:text-farm-green rounded-lg transition-colors"
                  >
                    Login
                  </button>
                  <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-farm-green text-white px-4 py-3 rounded-xl font-semibold shadow-lg shadow-farm-green/30 text-center w-full block">
                    Get Started
                  </a>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
