import { motion } from 'framer-motion';
import { Camera, Activity, ThermometerSun, Syringe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "AI Disease Detection",
      desc: "Upload a photo or use live CCTV to detect respiratory diseases, Coccidiosis, and Fowl Pox instantly. Get confidence scores and immediate veterinary recommendations.",
      icon: <Activity className="w-6 h-6 text-farm-green" />,
      image: "https://images.unsplash.com/photo-1548850650-711e737c35fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Smart CCTV Monitoring",
      desc: "24/7 AI surveillance detects dead birds, crowding, feed theft, and predators. Receive instant mobile alerts if something goes wrong.",
      icon: <Camera className="w-6 h-6 text-farm-green" />,
      image: "https://images.unsplash.com/photo-1582210609347-111107c11f7a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Climate Intelligence",
      desc: "Real-time monitoring of temperature, humidity, ammonia, CO₂, and light levels. Prevents heat stress and automatically suggests ventilation changes.",
      icon: <ThermometerSun className="w-6 h-6 text-farm-green" />,
      image: "https://images.unsplash.com/photo-1629853965561-30d853eebff1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Vaccination Manager",
      desc: "Automated timeline for vaccinations. Tracks medicine records, withdrawal periods, and sends calendar notifications to your staff.",
      icon: <Syringe className="w-6 h-6 text-farm-green" />,
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="py-24 bg-slate-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">Intelligent Farm Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to scale your poultry business with cutting-edge AI technology.</p>
        </div>

        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <div className="w-12 h-12 bg-farm-green/10 rounded-xl flex items-center justify-center mb-6 border border-farm-green/20">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-poppins font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  {feature.desc}
                </p>
                <button className="text-farm-green font-semibold hover:text-green-400 transition-colors flex items-center">
                  Learn more <span className="ml-2">→</span>
                </button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <div className="absolute inset-0 bg-farm-green/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <img src={feature.image} alt={feature.title} className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
