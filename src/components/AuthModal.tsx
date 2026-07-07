import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'signup';
}

const AuthModal = ({ isOpen, onClose, defaultMode = 'login' }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (mode === 'login') {
        await signIn();
      } else {
        await signUp();
      }
      onClose();
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          <div className="absolute top-4 right-4 z-20">
            <button onClick={onClose} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-farm-green to-teal-400 rounded-xl flex items-center justify-center shadow-lg shadow-farm-green/30 mx-auto mb-4">
                <span className="text-white font-poppins font-bold text-xl">FM</span>
              </div>
              <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                {mode === 'login' ? 'Welcome Back' : 'Start Your Free Trial'}
              </h3>
              <p className="text-slate-400 text-sm">
                {mode === 'login' 
                  ? 'Enter your details to access your farm dashboard.' 
                  : 'Join thousands of modern farmers. No credit card required.'}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Farm Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-farm-green transition-colors"
                    placeholder="Farm Management"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-farm-green transition-colors"
                  placeholder="name@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
                <input 
                  type="password" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-farm-green transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {mode === 'login' && (
                <div className="flex justify-end">
                  <button type="button" className="text-sm text-farm-green hover:text-green-400">Forgot Password?</button>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-farm-green hover:bg-green-500 disabled:bg-green-600 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-farm-green/30 mt-2"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  mode === 'login' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-400">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-farm-green font-semibold hover:text-green-400 transition-colors"
              >
                {mode === 'login' ? 'Start Free Trial' : 'Sign In'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;
