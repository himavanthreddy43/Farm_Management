const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-farm-green rounded-lg flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-sm">FM</span>
              </div>
              <span className="font-poppins font-bold text-xl text-white">Farm_management</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">The Intelligent Operating System for Modern Poultry Farming.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-farm-green transition-colors text-sm">Features</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-farm-green transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-farm-green transition-colors text-sm">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-farm-green transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-farm-green transition-colors text-sm">Knowledge Base</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-farm-green transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-farm-green transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-farm-green transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 Farm Management. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
