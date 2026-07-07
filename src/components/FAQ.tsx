import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How accurate is the AI Disease Detection?",
    answer: "Our AI model is trained on millions of data points and currently maintains a 99% accuracy rate for detecting common poultry diseases like Coccidiosis, Fowl Pox, and respiratory issues."
  },
  {
    question: "Do I need to buy expensive cameras?",
    answer: "No, you can use your existing CCTV cameras or even your smartphone camera. Our AI processes the video feed in the cloud to provide insights."
  },
  {
    question: "Does it support local languages?",
    answer: "Yes, our Voice AI Assistant supports multiple regional languages including Telugu and Hindi, allowing you to ask questions naturally, like 'When is the next vaccination?'"
  },
  {
    question: "What happens if my farm loses internet connection?",
    answer: "The platform has an offline mode that syncs data once the connection is restored. Core alerts will still trigger via local network if configured."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-panel rounded-2xl overflow-hidden border border-white/10">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-poppins font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-farm-green transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
