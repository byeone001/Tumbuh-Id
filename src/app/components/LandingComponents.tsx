import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold text-tumbuh-primary tracking-tight">
              TUMBUH.ID
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#elearning" className="text-tumbuh-text hover:text-tumbuh-primary font-medium transition-colors">E-learning</a>
            <a href="#bootcamp" className="text-tumbuh-text hover:text-tumbuh-primary font-medium transition-colors">Bootcamp & Program</a>
            <a href="#reviewcv" className="text-tumbuh-text hover:text-tumbuh-primary font-medium transition-colors">Review CV AI</a>
            <a href="#loker" className="text-tumbuh-text hover:text-tumbuh-primary font-medium transition-colors">Info Loker</a>
            <a href="#blog" className="text-tumbuh-text hover:text-tumbuh-primary font-medium transition-colors">Blog</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-5 py-2.5 rounded-full border border-tumbuh-primary text-tumbuh-primary font-semibold hover:bg-tumbuh-primary/5 transition-colors">
              Masuk
            </Link>
            <Link to="/register" className="px-5 py-2.5 rounded-full bg-tumbuh-primary text-white font-semibold hover:bg-tumbuh-secondary transition-colors shadow-lg shadow-tumbuh-primary/20">
              Daftar
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-tumbuh-text">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <a href="#elearning" className="block text-tumbuh-text font-medium py-2">E-learning</a>
          <a href="#bootcamp" className="block text-tumbuh-text font-medium py-2">Bootcamp & Program</a>
          <a href="#reviewcv" className="block text-tumbuh-text font-medium py-2">Review CV AI</a>
          <a href="#loker" className="block text-tumbuh-text font-medium py-2">Info Loker</a>
          <a href="#blog" className="block text-tumbuh-text font-medium py-2">Blog</a>
          <div className="pt-4 flex flex-col space-y-3">
            <Link to="/login" className="w-full text-center px-5 py-3 rounded-full border border-tumbuh-primary text-tumbuh-primary font-semibold">
              Masuk
            </Link>
            <Link to="/register" className="w-full text-center px-5 py-3 rounded-full bg-tumbuh-primary text-white font-semibold shadow-lg shadow-tumbuh-primary/20">
              Daftar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-heading font-bold text-tumbuh-primary tracking-tight mb-4 inline-block">
              TUMBUH.ID
            </Link>
            <p className="text-tumbuh-muted text-sm leading-relaxed mb-6">
              Platform self-growth & e-learning #1 di Indonesia yang fokus pada mental health, edukasi finansial, dan pengembangan karir.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-tumbuh-muted hover:text-tumbuh-primary hover:bg-tumbuh-primary/10 cursor-pointer transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-tumbuh-muted hover:text-tumbuh-primary hover:bg-tumbuh-primary/10 cursor-pointer transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-tumbuh-text mb-4">Layanan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">E-learning</a></li>
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Bootcamp</a></li>
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Konseling 1-on-1</a></li>
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Review CV</a></li>
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Corporate Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-tumbuh-text mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Karir</a></li>
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-tumbuh-muted hover:text-tumbuh-primary text-sm transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-tumbuh-text mb-4">Pembayaran</h4>
            <div className="flex flex-wrap gap-2">
              <div className="w-12 h-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">BCA</div>
              <div className="w-12 h-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">MANDIRI</div>
              <div className="w-12 h-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">BNI</div>
              <div className="w-12 h-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">GOPAY</div>
              <div className="w-12 h-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">OVO</div>
              <div className="w-12 h-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">DANA</div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tumbuh-muted text-sm">&copy; {new Date().getFullYear()} TUMBUH.ID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
