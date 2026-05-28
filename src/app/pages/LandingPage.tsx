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
  {
    title: "Literasi Digital",
    desc: "Anti-hoaks, keamanan digital, komunikasi asertif.",
    icon: Globe2,
    accent: "from-violet-400 to-purple-600",
    soft: "bg-violet-50",
    iconColor: "text-violet-600",
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

export const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="flex flex-col h-full bg-[#F7FBF9] font-sans text-brand-text overflow-y-auto">
      {/* Top Bar */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
        <span className="text-brand-primary font-serif font-bold">TUMBUH.ID</span>
        <Link
          to="/login"
          className="text-xs font-bold text-brand-primary border border-brand-primary px-3 py-1.5 rounded-full"
        >
          Masuk
        </Link>
      </div>

      <div className="flex-1 px-4 py-5 space-y-5">
        {/* Hero */}
        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-8 -mb-8" />

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold mb-4">
              <Sparkles size={11} /> Platform Self-Growth #1 Indonesia
            </div>

            <h1 className="font-serif mb-3 leading-tight text-white">
              Tumbuh Jadi Versi Terbaik Dirimu
            </h1>

            <p className="text-white/80 text-xs mb-5 leading-relaxed">
              4 pilar pertumbuhan terintegrasi: mental, finansial, karir, dan digital — dalam satu aplikasi.
            </p>

            <div className="flex flex-col gap-2.5 mb-5">
              {[
                "CBT & konseling profesional",
                "Modul belajar berbasis sains",
                "Komunitas 8.000+ anggota aktif",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle2 size={14} className="text-white shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-2.5 rounded-full font-bold text-sm shadow-lg"
            >
              Mulai Gratis <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 4 Pillars */}
        <div>
          <h2 className="font-bold text-sm mb-3">4 Pilar Pertumbuhan</h2>
          <div className="grid grid-cols-2 gap-2.5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className={`${pillar.soft} rounded-2xl p-3.5 border border-white`}>
                  <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-2 ${pillar.iconColor}`}>
                    <Icon size={17} />
                  </div>
                  <h3 className="font-bold text-xs mb-1 leading-tight">{pillar.title}</h3>
                  <p className="text-[10px] text-brand-muted leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <h3 className="font-bold text-sm mb-3 text-center">Sudah Dipercaya</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { value: "8K+", label: "Pengguna Aktif" },
              { value: "94%", label: "Puas dengan Layanan" },
              { value: "30 Hari", label: "Rata-rata Transformasi" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-brand-primary" style={{ fontSize: 20 }}>
                  {stat.value}
                </p>
                <p className="text-[9px] text-brand-muted leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-bold text-sm mb-3">Cerita Sukses</h3>
          <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
            <div className="mb-3">
              <p className="text-xs text-brand-text leading-relaxed mb-3 italic">
                "{TESTIMONIALS[activeTestimonial].text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-base">
                  {TESTIMONIALS[activeTestimonial].avatar}
                </div>
                <div>
                  <p className="text-xs font-bold">{TESTIMONIALS[activeTestimonial].name}</p>
                  <p className="text-[10px] text-brand-muted">{TESTIMONIALS[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-1.5 justify-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeTestimonial ? "bg-brand-primary w-6" : "bg-gray-200 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA bottom */}
        <div className="bg-[#1A2B22] rounded-2xl p-5 text-white text-center">
          <p className="font-serif mb-1 leading-snug">Siap untuk Bertumbuh?</p>
          <p className="text-[10px] text-white/60 mb-4">Mulai perjalananmu sekarang, gratis 7 hari.</p>
          <Link
            to="/register"
            className="flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-bold text-sm w-full"
          >
            Daftar Sekarang <ChevronRight size={16} />
          </Link>
        </div>

        <div className="pb-4" />
      </div>
    </div>
  );
};

export default LandingPage;
