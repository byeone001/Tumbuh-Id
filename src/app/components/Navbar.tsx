import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "E-learning", path: "/" },
    { name: "Bootcamp & Program", path: "/" },
    { name: "Review CV AI", path: "/" },
    { name: "Info Loker", path: "/" },
    { name: "Blog", path: "/" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-brand-primary font-serif text-2xl font-bold tracking-tight">
          TUMBUH.ID
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-brand-text hover:text-brand-primary transition-colors font-medium text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/dashboard"
            className="px-5 py-2.5 rounded-full border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary/5 transition-colors text-sm"
          >
            Masuk
          </Link>
          <Link
            to="/dashboard"
            className="px-5 py-2.5 rounded-full bg-brand-primary text-white font-bold hover:bg-brand-secondary transition-colors text-sm shadow-md shadow-brand-primary/20"
          >
            Daftar
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-brand-text hover:text-brand-primary font-medium text-lg py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-4">
            <Link
              to="/dashboard"
              className="w-full text-center px-5 py-3 rounded-full border-2 border-brand-primary text-brand-primary font-bold"
            >
              Masuk
            </Link>
            <Link
              to="/dashboard"
              className="w-full text-center px-5 py-3 rounded-full bg-brand-primary text-white font-bold"
            >
              Daftar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
