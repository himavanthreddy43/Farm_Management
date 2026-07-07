import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Activity, Bird, Thermometer, Droplets } from 'lucide-react';

const DashboardPage = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-slate-900 text-slate-200 font-inter">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="w-8 h-8 bg-farm-green rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-poppins font-bold text-sm">FM</span>
          </div>
          <span className="font-poppins font-bold text-lg text-white">Dashboard</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center px-4 py-3 bg-farm-green/10 text-farm-green rounded-xl font-medium">
            <Activity className="w-5 h-5 mr-3" />
            Overview
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-xl transition-colors font-medium">
            <Bird className="w-5 h-5 mr-3" />
            Flock Health
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-xl transition-colors font-medium">
            <Thermometer className="w-5 h-5 mr-3" />
            Climate
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-xl transition-colors font-medium">
            <Droplets className="w-5 h-5 mr-3" />
            Resources
          </a>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-xl transition-colors font-medium"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-20 flex items-center justify-between px-8 bg-slate-950/50 backdrop-blur-md border-b border-slate-800">
          <h1 className="text-2xl font-poppins font-bold text-white">Farm Overview</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </header>

        <div className="p-8 flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-slate-400 text-sm mb-2">Total Birds</h3>
              <p className="text-3xl font-bold text-white">45,230</p>
              <span className="text-farm-green text-sm font-medium">Healthy Status</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-slate-400 text-sm mb-2">Egg Production (Today)</h3>
              <p className="text-3xl font-bold text-white">38,102</p>
              <span className="text-farm-green text-sm font-medium">+4.5% vs yesterday</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-slate-400 text-sm mb-2">Average Temp</h3>
              <p className="text-3xl font-bold text-white">24.5°C</p>
              <span className="text-farm-green text-sm font-medium">Optimal</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-slate-400 text-sm mb-2">Water Level</h3>
              <p className="text-3xl font-bold text-white">82%</p>
              <span className="text-slate-400 text-sm font-medium">Refill in 3 days</span>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-96 flex items-center justify-center">
            <p className="text-slate-500">More detailed analytics charts will appear here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
