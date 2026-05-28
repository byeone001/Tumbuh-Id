import { Outlet, Link, useLocation } from 'react-router';
import { LayoutDashboard, BookOpen, TrendingUp, Heart, Users, Bell } from 'lucide-react';

export function DashboardLayout() {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/app' },
    { label: 'Modul Belajar', icon: BookOpen, path: '/app/module' },
    { label: 'Progress', icon: TrendingUp, path: '/app/progress' },
    { label: 'Konseling', icon: Heart, path: '/app/cbt' },
    { label: 'Komunitas', icon: Users, path: '/app/community' },
  ];

  return (
    <div className="min-h-screen bg-tumbuh-bg flex font-['Plus_Jakarta_Sans']">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col hidden md:flex sticky top-0 h-screen">
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold font-heading text-tumbuh-primary">
            TUMBUH.ID
          </Link>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-tumbuh-primary/10 text-tumbuh-primary font-semibold' 
                    : 'text-tumbuh-text-secondary hover:bg-gray-50 hover:text-tumbuh-text-primary'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-tumbuh-primary' : 'text-gray-400'}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-sm">Rizky</p>
              <p className="text-xs text-gray-500">Free Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 flex items-center justify-between px-8">
          <div>
            <h1 className="text-xl font-bold text-tumbuh-text-primary">Selamat pagi, Rizky 👋</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full text-sm font-semibold">
              🔥 12 Hari Streak
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden md:hidden">
               <img src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
