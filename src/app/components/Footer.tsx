import React from "react";
import { Link } from "react-router";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-brand-primary font-serif text-3xl font-bold tracking-tight block mb-4">
            TUMBUH.ID
          </Link>
          <p className="text-brand-muted text-sm leading-relaxed mb-6">
            Platform self-growth & e-learning #1 di Indonesia. Kuasai ratusan skill untuk karir dan mental yang lebih baik.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-brand-text mb-6">Program Kami</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">E-Learning</a></li>
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Bootcamp Intensif</a></li>
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Review CV AI</a></li>
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Corporate Training</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-text mb-6">Perusahaan</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Tentang Kami</a></li>
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Karir</a></li>
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Blog</a></li>
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-text mb-6">Bantuan</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Syarat & Ketentuan</a></li>
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">Kebijakan Privasi</a></li>
            <li><a href="#" className="text-brand-muted hover:text-brand-primary text-sm">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-brand-muted text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} TUMBUH.ID. All rights reserved.
        </p>
        <div className="flex space-x-4 opacity-50 grayscale">
          {/* Placeholder for payment logos */}
          <div className="w-12 h-8 bg-gray-200 rounded"></div>
          <div className="w-12 h-8 bg-gray-200 rounded"></div>
          <div className="w-12 h-8 bg-gray-200 rounded"></div>
          <div className="w-12 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </footer>
  );
};
