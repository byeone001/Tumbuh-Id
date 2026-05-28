import { MobileShell } from "../components/MobileShell";
import { SimpleAreaChart } from "../components/SimpleAreaChart";
import { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  PlayCircle,
  HeartHandshake,
  Users,
  NotebookPen,
  Sparkles,
  TrendingUp,
  Flame,
} from "lucide-react";

const MOODS = [
  { emoji: "😔", label: "Sedih" },
  { emoji: "😐", label: "Datar" },
  { emoji: "🙂", label: "Cukup" },
  { emoji: "😊", label: "Senang" },
  { emoji: "🤩", label: "Bahagia" },
];

export const DashboardPage = () => {
  const [selectedMood, setSelectedMood] = useState(3);

  const progressData = useMemo(
    () => [
      { day: "Sen", value: 20 },
      { day: "Sel", value: 35 },
      { day: "Rab", value: 30 },
      { day: "Kam", value: 55 },
      { day: "Jum", value: 70 },
      { day: "Sab", value: 65 },
      { day: "Min", value: 82 },
    ],
    []
  );

  return (
    <MobileShell>
      <div className="space-y-4 pb-2">
        {/* Greeting */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-brand-muted text-xs">Selamat pagi 👋</p>
            <h2 className="font-bold text-brand-text">Rizky Pratama</h2>
          </div>
          <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
            <Flame className="text-orange-500" size={14} fill="currentColor" />
            <span className="text-xs font-bold text-orange-600">12 Hari</span>
          </div>
        </div>

        {/* Mood Tracker */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-12 -mt-12" />
          <div className="relative">
            <div className="flex items-center gap-1.5 mb-1 text-brand-primary text-xs font-bold">
              <Sparkles size={13} /> Mood Hari Ini
            </div>
            <p className="text-brand-text font-bold mb-3 leading-tight">
              Bagaimana perasaanmu hari ini?
            </p>
            <div className="flex gap-1.5">
              {MOODS.map((m, i) => {
                const isActive = selectedMood === i;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedMood(i)}
                    className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border-2 transition-all ${
                      isActive
                        ? "bg-brand-primary border-brand-primary text-white shadow-md shadow-brand-primary/30 -translate-y-0.5"
                        : "bg-white border-gray-100 hover:border-brand-primary/40 text-brand-text"
                    }`}
                  >
                    <span className="text-xl">{m.emoji}</span>
                    <span className="text-[9px] font-bold">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Access 2x2 grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              title: "Mulai Sesi",
              desc: "CBT & refleksi",
              icon: <PlayCircle size={20} />,
              color: "bg-brand-primary",
              to: "/cbt",
            },
            {
              title: "Konseling",
              desc: "Bicara dengan ahli",
              icon: <HeartHandshake size={20} />,
              color: "bg-blue-500",
              to: "/counseling",
            },
            {
              title: "Komunitas",
              desc: "Diskusi bareng",
              icon: <Users size={20} />,
              color: "bg-purple-500",
              to: "/community",
            },
            {
              title: "Jurnal Harian",
              desc: "Tuliskan ceritamu",
              icon: <NotebookPen size={20} />,
              color: "bg-orange-500",
              to: "/dashboard",
            },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="bg-white rounded-2xl p-3.5 shadow-card border border-gray-50 active:scale-95 transition-transform"
            >
              <div
                className={`w-9 h-9 rounded-xl ${c.color} text-white flex items-center justify-center mb-2.5`}
              >
                {c.icon}
              </div>
              <h3 className="font-bold text-sm mb-0.5">{c.title}</h3>
              <p className="text-[10px] text-brand-muted">{c.desc}</p>
            </Link>
          ))}
        </div>

        {/* Progress Chart */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-brand-muted text-xs">Progress Minggu Ini</p>
              <h3 className="font-bold text-brand-text">82% Tercapai</h3>
            </div>
            <div className="flex items-center gap-1 bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full text-xs font-bold">
              <TrendingUp size={12} /> +24%
            </div>
          </div>
          <div className="h-32">
            <SimpleAreaChart data={progressData} />
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-5 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-6 -mb-6" />
          <Sparkles size={20} className="relative mb-2" />
          <p className="relative font-serif leading-snug mb-2 text-sm">
            "Bertumbuh itu bukan tentang menjadi sempurna, tapi menjadi versi terbaik dari dirimu."
          </p>
          <p className="relative text-[10px] text-white/70">— Tumbuh Daily Quote</p>
        </div>

        {/* Continue Learning */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm">Lanjutkan Belajar</h3>
            <Link to="/learning" className="text-brand-primary text-xs font-bold">
              Lihat semua →
            </Link>
          </div>
          <div className="space-y-2.5">
            {[
              {
                title: "Mindfulness untuk Pemula",
                progress: 62,
                cat: "Mental Health",
                color: "bg-emerald-100 text-emerald-700",
              },
              {
                title: "Investasi Reksadana 101",
                progress: 38,
                cat: "Finansial",
                color: "bg-yellow-100 text-yellow-700",
              },
              {
                title: "Time Blocking Mastery",
                progress: 75,
                cat: "Produktivitas",
                color: "bg-blue-100 text-blue-700",
              },
            ].map((m) => (
              <Link
                to="/learning"
                key={m.title}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FBF9] border border-gray-100 active:scale-[0.98] transition-transform"
              >
                <div className="flex-1 min-w-0">
                  <div className={`inline-block ${m.color} text-[9px] font-bold px-2 py-0.5 rounded-full mb-1`}>
                    {m.cat}
                  </div>
                  <h4 className="text-xs font-bold truncate leading-tight mb-2">{m.title}</h4>
                  <div className="h-1.5 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-primary rounded-full"
                      style={{ width: `${m.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-brand-muted font-medium shrink-0">{m.progress}%</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MobileShell>
  );
};

export default DashboardPage;
