import { Outlet, Link } from 'react-router';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-tumbuh-bg flex flex-col font-['Plus_Jakarta_Sans']">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold font-heading text-tumbuh-primary">
              TUMBUH.ID
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium text-tumbuh-text-primary">
              <Link to="/" className="hover:text-tumbuh-primary transition-colors">E-learning</Link>
              <Link to="/" className="hover:text-tumbuh-primary transition-colors">Bootcamp & Program</Link>
              <Link to="/" className="hover:text-tumbuh-primary transition-colors">Review CV AI</Link>
              <Link to="/" className="hover:text-tumbuh-primary transition-colors">Info Loker</Link>
              <Link to="/" className="hover:text-tumbuh-primary transition-colors">Blog</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/app" className="hidden md:block px-6 py-2.5 rounded-full border border-tumbuh-primary text-tumbuh-primary font-semibold hover:bg-tumbuh-primary/5 transition-colors">
              Masuk
            </Link>
            <Link to="/app" className="px-6 py-2.5 rounded-full bg-tumbuh-primary text-white font-semibold hover:bg-tumbuh-secondary transition-colors shadow-sm">
              Daftar
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold font-heading text-tumbuh-primary mb-4">TUMBUH.ID</h3>
              <p className="text-tumbuh-text-secondary max-w-sm mb-6">
                Platform self-growth & e-learning terdepan di Indonesia. Menguasai skill mental, finansial, dan karir untuk masa depan yang lebih baik.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-tumbuh-primary hover:text-white cursor-pointer transition-colors">Ig</div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-tumbuh-primary hover:text-white cursor-pointer transition-colors">Li</div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-tumbuh-primary hover:text-white cursor-pointer transition-colors">Tw</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-3 text-tumbuh-text-secondary">
                <li>E-learning</li>
                <li>Bootcamp</li>
                <li>Mentoring</li>
                <li>Corporate Training</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-3 text-tumbuh-text-secondary">
                <li>Tentang Kami</li>
                <li>Karir</li>
                <li>Hubungi Kami</li>
                <li>Syarat & Ketentuan</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>© 2026 TUMBUH.ID. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="font-semibold">BCA</span>
              <span className="font-semibold">Mandiri</span>
              <span className="font-semibold">GoPay</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
