import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Activity, ThermometerSun, Syringe, X } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "AI Disease Detection",
    desc: "Upload a photo or use live CCTV to detect respiratory diseases, Coccidiosis, and Fowl Pox instantly. Get confidence scores and immediate veterinary recommendations.",
    icon: <Activity className="w-6 h-6 text-farm-green" />,
    image: "https://images.unsplash.com/photo-1548850650-711e737c35fa?auto=format&fit=crop&w=800&q=80",
    details: [
      "Detects 15+ common poultry diseases with 99% accuracy.",
      "Analyzes bird droppings, behavior, and physical symptoms.",
      "Provides automated isolation and treatment recommendations.",
      "Direct integration with local veterinary networks for emergency consultations."
    ]
  },
  {
    id: 2,
    title: "Smart CCTV Monitoring",
    desc: "24/7 AI surveillance detects dead birds, crowding, feed theft, and predators. Receive instant mobile alerts if something goes wrong.",
    icon: <Camera className="w-6 h-6 text-farm-green" />,
    image: "https://images.unsplash.com/photo-1582210609347-111107c11f7a?auto=format&fit=crop&w=800&q=80",
    details: [
      "Works with your existing IP cameras and smartphones.",
      "Identifies cannibalism and bird fights in real-time.",
      "Tracks unauthorized human access or predators at night.",
      "Automatically logs incidents with video snippets."
    ]
  },
  {
    id: 3,
    title: "Climate Intelligence",
    desc: "Real-time monitoring of temperature, humidity, ammonia, CO₂, and light levels. Prevents heat stress and automatically suggests ventilation changes.",
    icon: <ThermometerSun className="w-6 h-6 text-farm-green" />,
    image: "https://images.unsplash.com/photo-1629853965561-30d853eebff1?auto=format&fit=crop&w=800&q=80",
    details: [
      "Predicts heatwaves 48 hours in advance.",
      "Monitors harmful Ammonia and CO2 levels.",
      "Connects to automated ventilation systems (Enterprise plan).",
      "Calculates the perfect light cycles for maximum egg production."
    ]
  },
  {
    id: 4,
    title: "Vaccination Manager",
    desc: "Automated timeline for vaccinations. Tracks medicine records, withdrawal periods, and sends calendar notifications to your staff.",
    icon: <Syringe className="w-6 h-6 text-farm-green" />,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",
    details: [
      "Automatically generates schedules based on bird age and breed.",
      "Sends SMS reminders to farm workers.",
      "Maintains compliance logs for government audits.",
      "Tracks medicine inventory and alerts before stock runs out."
    ]
  }
];

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section className="py-24 bg-slate-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">Intelligent Farm Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to scale your poultry business with cutting-edge AI technology.</p>
        </div>

        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div key={feature.id} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
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
                <button 
                  onClick={() => setSelectedFeature(feature)}
                  className="text-farm-green font-semibold hover:text-green-400 transition-colors flex items-center"
                >
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

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setSelectedFeature(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                <img src={selectedFeature.image} alt={selectedFeature.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent md:bg-gradient-to-r" />
              </div>
              
              <div className="p-8 w-full md:w-2/3">
                <button 
                  onClick={() => setSelectedFeature(null)} 
                  className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-farm-green/10 rounded-lg flex items-center justify-center mr-3">
                    {selectedFeature.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-white">{selectedFeature.title}</h3>
                </div>
                
                <p className="text-slate-400 mb-6">{selectedFeature.desc}</p>
                
                <h4 className="text-white font-semibold mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {selectedFeature.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <span className="text-farm-green mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Features;
