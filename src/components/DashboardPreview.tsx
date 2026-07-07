import { motion } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area 
} from 'recharts';

const data = [
  { name: 'Mon', eggs: 4000, mortality: 24, feed: 2400 },
  { name: 'Tue', eggs: 3000, mortality: 13, feed: 2210 },
  { name: 'Wed', eggs: 2000, mortality: 98, feed: 2290 },
  { name: 'Thu', eggs: 2780, mortality: 39, feed: 2000 },
  { name: 'Fri', eggs: 1890, mortality: 48, feed: 2181 },
  { name: 'Sat', eggs: 2390, mortality: 38, feed: 2500 },
  { name: 'Sun', eggs: 3490, mortality: 43, feed: 2100 },
];

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-slate-900 relative" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">Command Center for Your Farm</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Monitor everything in real-time. Our AI processes millions of data points to give you actionable insights.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
            <div>
              <h3 className="text-2xl font-bold text-white font-poppins">Live Farm Analytics</h3>
              <p className="text-slate-400 text-sm">Updated just now</p>
            </div>
            <div className="flex space-x-3">
              <span className="bg-farm-green/20 text-farm-green px-4 py-1.5 rounded-full text-sm font-semibold border border-farm-green/30">
                Health Score: 98/100
              </span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Birds', value: '45,230', trend: '+1.2%' },
              { label: 'Egg Production', value: '38,102', trend: '+4.5%' },
              { label: 'Feed Stock', value: '12.4 Tons', trend: '-2.1%' },
              { label: 'Mortality Rate', value: '0.04%', trend: '-0.01%' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <span className={`text-xs font-medium ${stat.trend.startsWith('+') ? 'text-farm-green' : 'text-red-400'}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Area */}
          <div className="grid md:grid-cols-2 gap-6 h-80">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h5 className="text-slate-300 text-sm font-medium mb-4">Egg Production Trend</h5>
              <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorEggs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FBBF24" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="eggs" stroke="#FBBF24" strokeWidth={3} fillOpacity={1} fill="url(#colorEggs)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h5 className="text-slate-300 text-sm font-medium mb-4">Feed Consumption</h5>
              <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="feed" stroke="#16A34A" strokeWidth={3} dot={{ r: 4, fill: '#16A34A' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
