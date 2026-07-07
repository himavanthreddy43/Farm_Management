import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Activity, Bird, Thermometer, Droplets } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const mockData = [
  { name: 'Mon', eggs: 4000, temp: 24, feed: 2400 },
  { name: 'Tue', eggs: 3000, temp: 25, feed: 2210 },
  { name: 'Wed', eggs: 2000, temp: 24, feed: 2290 },
  { name: 'Thu', eggs: 2780, temp: 23, feed: 2000 },
  { name: 'Fri', eggs: 1890, temp: 24, feed: 2181 },
  { name: 'Sat', eggs: 2390, temp: 26, feed: 2500 },
  { name: 'Sun', eggs: 3490, temp: 25, feed: 2100 },
];

const DashboardPage = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const tabs = [
    { id: 'Overview', icon: <Activity className="w-5 h-5 mr-3" /> },
    { id: 'Flock Health', icon: <Bird className="w-5 h-5 mr-3" /> },
    { id: 'Climate', icon: <Thermometer className="w-5 h-5 mr-3" /> },
    { id: 'Resources', icon: <Droplets className="w-5 h-5 mr-3" /> },
  ];

  return (
    <div className="min-h-screen flex bg-slate-900 text-slate-200 font-inter">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="w-8 h-8 bg-farm-green rounded-lg flex items-center justify-center mr-3 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-white font-poppins font-bold text-sm">FM</span>
          </div>
          <span className="font-poppins font-bold text-lg text-white">Dashboard</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors font-medium ${
                activeTab === tab.id 
                  ? 'bg-farm-green/10 text-farm-green' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {tab.icon}
              {tab.id}
            </button>
          ))}
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
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 flex items-center justify-between px-8 bg-slate-950/50 backdrop-blur-md border-b border-slate-800">
          <h1 className="text-2xl font-poppins font-bold text-white">{activeTab}</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </header>

        <div className="p-8 flex-1 overflow-y-auto">
          {activeTab === 'Overview' && (
            <>
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

              <div className="grid md:grid-cols-2 gap-6 h-96">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                  <h5 className="text-slate-300 text-sm font-medium mb-4">Egg Production Trend</h5>
                  <ResponsiveContainer width="100%" height={240}>
                    <AreaChart data={mockData}>
                      <defs>
                        <linearGradient id="colorEggs" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#16A34A" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#16A34A" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="eggs" stroke="#16A34A" strokeWidth={3} fillOpacity={1} fill="url(#colorEggs)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                  <h5 className="text-slate-300 text-sm font-medium mb-4">Temperature Variation (°C)</h5>
                  <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={mockData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[20, 30]} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }} />
                      <Line type="monotone" dataKey="temp" stroke="#FBBF24" strokeWidth={3} dot={{ r: 4, fill: '#FBBF24' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Flock Health' && (
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-96 flex items-center justify-center">
              <div className="text-center">
                <Bird className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Flock Health Module</h3>
                <p className="text-slate-500">AI Disease Detection and mortality tracking will appear here.</p>
              </div>
            </div>
          )}

          {activeTab === 'Climate' && (
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-96 flex items-center justify-center">
              <div className="text-center">
                <Thermometer className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Climate Intelligence</h3>
                <p className="text-slate-500">Real-time HVAC controls and environmental sensors will appear here.</p>
              </div>
            </div>
          )}

          {activeTab === 'Resources' && (
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-96 flex items-center justify-center">
              <div className="text-center">
                <Droplets className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Resource Management</h3>
                <p className="text-slate-500">Feed and water inventory tracking will appear here.</p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
