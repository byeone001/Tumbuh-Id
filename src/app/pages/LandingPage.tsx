import React, { useState } from "react";
import { Link } from "react-router";
import {
  Brain,
  Wallet,
  Briefcase,
  Globe2,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const PILLARS = [
  {
    title: "Mental & Psikologis",
    desc: "CBT terstruktur, konseling 1-on-1, mindfulness harian.",
    icon: Brain,
    accent: "from-emerald-400 to-emerald-600",
    soft: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Finansial & Pemulihan",
    desc: "Budgeting, detox kecanduan digital, komunitas recovery.",
    icon: Wallet,
    accent: "from-amber-400 to-orange-500",
    soft: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Skill & Karir",
    desc: "Bootcamp praktisi, review CV AI, mentoring karir.",
    icon: Briefcase,
    accent: "from-sky-400 to-blue-600",
    soft: "bg-sky-50",
    iconColor: "text-sky-600",
  },
];

const TESTIMONIALS = [
  {
    name: "Rizky A.",
    role: "Fresh Graduate",
    text: "Dalam 30 hari, saya berhasil kelola kecemasan karir dan dapat kerja impian!",
    avatar: "🧑‍💼",
  },
  {
    name: "Dewi S.",
    role: "Ibu Rumah Tangga",
    text: "Modul finansial bantu saya mulai investasi dari nol. Luar biasa!",
    avatar: "👩‍👧",
  },
];

// SVG Organic Pattern Component
const OrganicPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
    viewBox="0 0 1200 1600"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Monstera Leaves Pattern */}
    <defs>
      <pattern id="monstera" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
        {/* Leaf 1 */}
        <path d="M 100 50 Q 120 40 140 50 Q 150 70 140 90 Q 120 100 100 90 Z" fill="#00D260" />
        {/* Leaf 2 */}
        <path d="M 200 150 Q 230 130 260 150 Q 280 180 260 210 Q 230 220 200 210 Z" fill="#1A9B4E" />
        {/* Leaf 3 */}
        <path d="M 50 250 Q 80 230 110 250 Q 130 280 110 310 Q 80 320 50 310 Z" fill="#00D260" />
      </pattern>

      {/* Growth Graph Lines */}
      <pattern id="growth" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
        <path d="M 0 250 L 50 200 L 100 180 L 150 150 L 200 100 L 250 80 L 300 30" 
              stroke="#CD853F" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="50" cy="200" r="2" fill="#CD853F" />
        <circle cx="150" cy="150" r="2" fill="#CD853F" />
        <circle cx="250" cy="80" r="2" fill="#CD853F" />
      </pattern>

      {/* Bio Pattern - Brain Cells */}
      <pattern id="bio" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
        <circle cx="50" cy="50" r="4" fill="#00A86B" />
        <circle cx="150" cy="100" r="3" fill="#00A86B" />
        <circle cx="200" cy="180" r="3.5" fill="#00A86B" />
        <line x1="50" y1="50" x2="150" y2="100" stroke="#00A86B" strokeWidth="0.8" />
        <line x1="150" y1="100" x2="200" y2="180" stroke="#00A86B" strokeWidth="0.8" />
      </pattern>
    </defs>

    {/* Apply patterns */}
    <rect width="1200" height="1600" fill="url(#monstera)" />
    <rect width="1200" height="1600" fill="url(#growth)" />
    <rect width="1200" height="1600" fill="url(#bio)" />
  </svg>
);

export const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="flex flex-col h-full font-sans text-brand-text overflow-y-auto relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#0F4C3A] via-[#1A6B52] to-[#2D5A4A]" />
      
      {/* Organic Pattern Overlay */}
      <div className="fixed inset-0 -z-10 h-full w-full opacity-[0.08]">
        <OrganicPattern />
      </div>

      {/* Ambient Glow - Left (Mental/Green) */}
      <div className="fixed top-[30%] -left-32 w-96 h-96 bg-gradient-radial from-brand-primary/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      
      {/* Ambient Glow - Right (Finansial/Orange) */}
      <div className="fixed top-[50%] -right-40 w-96 h-96 bg-gradient-radial from-amber-500/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      {/* Top Bar */}
      <div className="bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-white/20 sticky top-0 z-20 shadow-sm">
        <span className="text-brand-primary font-serif font-bold text-lg">TUMBUH.ID</span>
        <Link
          to="/login"
          className="text-xs font-bold text-white bg-brand-primary hover:bg-brand-secondary px-4 py-1.5 rounded-full transition-all shadow-md hover:shadow-lg"
        >
          Masuk
        </Link>
      </div>

      <div className="flex-1 px-4 py-5 space-y-5 relative z-0">
        {/* Hero */}
        <div className="bg-gradient-to-br from-brand-primary via-emerald-600 to-teal-600 rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-12 -mb-12 blur-2xl" />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
               style={{backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px'}} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 border border-white/20">
              <Sparkles size={12} className="animate-pulse" /> Platform Self-Growth #1 Indonesia
            </div>

            <h1 className="font-serif mb-3 leading-tight text-white text-2xl drop-shadow-lg">
              Tumbuh Jadi Versi Terbaik Dirimu
            </h1>

            <p className="text-white/90 text-sm mb-5 leading-relaxed">
              4 pilar pertumbuhan terintegrasi: mental, finansial, karir, dan digital — dalam satu aplikasi.
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              {[
                "CBT & konseling profesional",
                "Modul belajar berbasis sains",
                "Komunitas 8.000+ anggota aktif",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/95">
                  <CheckCircle2 size={16} className="text-white shrink-0 drop-shadow" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Mulai Gratis <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="mt-8">
          <h2 className="font-bold text-lg mb-4 text-white drop-shadow-md">4 Pilar Pertumbuhan</h2>
          <div className="grid grid-cols-2 gap-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title} 
                  className={`${pillar.soft} rounded-2xl p-4 border-2 border-white/20 backdrop-blur-sm hover:border-white/40 transition-all shadow-lg hover:shadow-xl hover:scale-105 group cursor-pointer`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-all group-hover:scale-110`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xs mb-1.5 leading-tight text-brand-text">{pillar.title}</h3>
                  <p className="text-[10px] text-brand-muted leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20 mt-8">
          <h3 className="font-bold text-sm mb-4 text-center text-brand-text">Sudah Dipercaya Ribuan Pengguna</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "8K+", label: "Pengguna Aktif" },
              { value: "94%", label: "Puas" },
              { value: "30d", label: "Transformasi" },
            ].map((stat) => (
              <div key={stat.label} className="p-3 rounded-xl bg-gradient-to-br from-brand-primary/10 to-emerald-500/10">
                <p className="font-serif text-brand-primary font-bold text-xl drop-shadow">{stat.value}</p>
                <p className="text-[9px] text-brand-text font-medium leading-tight mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-8">
          <h3 className="font-bold text-lg mb-4 text-white drop-shadow-md">Cerita Sukses</h3>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
            <div className="mb-4">
              <p className="text-sm text-brand-text leading-relaxed mb-4 italic font-medium">
                <span className="text-brand-primary text-lg">❝</span>{TESTIMONIALS[activeTestimonial].text}<span className="text-brand-primary text-lg">❞</span>
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-emerald-600 flex items-center justify-center text-lg shadow-md">
                  {TESTIMONIALS[activeTestimonial].avatar}
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-text">{TESTIMONIALS[activeTestimonial].name}</p>
                  <p className="text-[10px] text-brand-muted">{TESTIMONIALS[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`transition-all rounded-full ${
                    i === activeTestimonial ? "bg-brand-primary w-8 h-2" : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA bottom */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white text-center border border-white/20 shadow-lg mt-8">
          <p className="font-serif mb-2 leading-snug text-2xl drop-shadow-lg">Siap untuk Bertumbuh?</p>
          <p className="text-sm text-white/80 mb-5">Mulai perjalananmu sekarang, gratis 7 hari pertama.</p>
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-emerald-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full"
          >
            Daftar Sekarang <ChevronRight size={18} />
          </Link>
        </div>

        <div className="pb-4" />
      </div>
    </div>
  );
};

export default LandingPage;
