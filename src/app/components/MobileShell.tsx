import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { LayoutDashboard, BookOpen, TrendingUp, HeartHandshake, Users, Bell, ArrowLeft, LogOut, User, Settings } from "lucide-react";
import { clsx } from "clsx";

interface MobileShellProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
  backTo?: string;
  headerRight?: React.ReactNode;
  noPadding?: boolean;
  hideNav?: boolean;
}

const NAV_ITEMS = [
  { name: "Home", path: "/dashboard", icon: LayoutDashboard },
  { name: "Belajar", path: "/learning", icon: BookOpen },
  { name: "Progress", path: "/progress", icon: TrendingUp },
  { name: "Konseling", path: "/counseling", icon: HeartHandshake },
  { name: "Komunitas", path: "/community", icon: Users },
];

const StatusBar = () => null;

const USER_AVATAR =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3OTY1NTE2M3ww&ixlib=rb-4.1.0&q=80&w=100";

export const MobileShell = ({
  children,
  title,
  showBack,
  backTo,
  headerRight,
  noPadding,
  hideNav,
}: MobileShellProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const isActive = (path: string) => {
    if (path === "/dashboard") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const handleBack = () => {
    if (backTo) navigate(backTo);
    else navigate(-1);
  };

  const handleLogout = () => {
    setShowProfileMenu(false);
    // TODO: Clear auth state
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-full bg-[#F7FBF9] font-sans text-brand-text overflow-hidden">
      <StatusBar />

      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2">
          {showBack ? (
            <button
              onClick={handleBack}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F7FBF9] mr-1"
            >
              <ArrowLeft size={18} className="text-brand-text" />
            </button>
          ) : null}
          <span className="font-bold text-brand-text">
            {title || (
              <span className="text-brand-primary font-serif">TUMBUH.ID</span>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {headerRight || (
            <>
              <button className="relative w-9 h-9 rounded-full bg-[#F7FBF9] flex items-center justify-center">
                <Bell size={17} className="text-brand-text" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-9 h-9 rounded-full overflow-hidden border-2 border-brand-primary hover:border-brand-secondary transition-colors"
                >
                  <img src={USER_AVATAR} alt="User" className="w-full h-full object-cover" />
                </button>

                {/* Profile Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                    {/* User Info Header */}
                    <div className="px-4 py-3 bg-brand-primary/5 border-b border-gray-100">
                      <p className="text-xs font-bold text-brand-text">Rizky Pratama</p>
                      <p className="text-[10px] text-brand-muted">rizky.pratama@email.com</p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <Link
                        to="/profile"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-brand-text hover:bg-[#F7FBF9] transition-colors"
                      >
                        <User size={16} className="text-brand-primary" />
                        Profil Saya
                      </Link>
                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          // TODO: Navigate to settings
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-brand-text hover:bg-[#F7FBF9] transition-colors text-left"
                      >
                        <Settings size={16} className="text-brand-primary" />
                        Pengaturan
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100" />

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold"
                    >
                      <LogOut size={16} />
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className={clsx("flex-1 overflow-hidden", !noPadding ? "overflow-y-auto px-4 py-4" : "flex flex-col")}>
        {children}
      </div>

      {/* Bottom Navigation */}
      {!hideNav && (
        <div className="bg-white border-t border-gray-100 shrink-0 pb-safe">
          <div className="flex items-center justify-around pt-2 pb-3">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex flex-col items-center gap-0.5 min-w-0 flex-1"
                >
                  <div
                    className={clsx(
                      "w-10 h-7 rounded-xl flex items-center justify-center transition-all",
                      active ? "bg-brand-primary text-white" : "text-brand-muted"
                    )}
                  >
                    <Icon size={17} />
                  </div>
                  <span
                    className={clsx(
                      "text-[10px] font-bold leading-none",
                      active ? "text-brand-primary" : "text-brand-muted"
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
