import React from "react";
import { Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  BookOpen, 
  TrendingUp, 
  HeartHandshake, 
  Users, 
  LogOut,
  Bell,
  Flame
} from "lucide-react";
import { clsx } from "clsx";

const USER_AVATAR = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3OTY1NTE2M3ww&ixlib=rb-4.1.0&q=80&w=200";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Modul Belajar", path: "/learning", icon: <BookOpen size={20} /> },
    { name: "Progress", path: "/progress", icon: <TrendingUp size={20} /> },
    { name: "Konseling", path: "/counseling", icon: <HeartHandshake size={20} /> },
    { name: "Komunitas", path: "/community", icon: <Users size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F7FBF9] flex font-sans text-brand-text">
      {/* Sidebar (Desktop) */}
      <aside className="w-[280px] bg-white border-r border-gray-100 hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-8">
          <Link to="/" className="text-brand-primary font-serif text-2xl font-bold tracking-tight">
            TUMBUH.ID
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== "/dashboard");
            return (
              <Link
                key={item.name}
                to={item.path}
                className={clsx(
                  "flex items-center px-4 py-3 rounded-xl transition-all font-medium text-sm",
                  isActive 
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20" 
                    : "text-brand-muted hover:bg-brand-bg hover:text-brand-primary"
                )}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-50">
          <Link to="/" className="flex items-center px-4 py-2 text-brand-muted hover:text-red-500 transition-colors font-medium text-sm">
            <LogOut size={20} className="mr-3" />
            Keluar
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 px-8 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-brand-text">Selamat pagi, Rizky 👋</h1>
            <p className="text-sm text-brand-muted hidden sm:block">Siap untuk berkembang hari ini?</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="relative text-brand-muted hover:text-brand-primary transition-colors">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="flex items-center space-x-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              <Flame className="text-orange-500" size={18} fill="currentColor" />
              <span className="text-sm font-bold text-orange-600">12 Hari</span>
            </div>

            <button className="w-10 h-10 rounded-full border-2 border-brand-primary overflow-hidden">
              <img src={USER_AVATAR} alt="User" className="w-full h-full object-cover" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
