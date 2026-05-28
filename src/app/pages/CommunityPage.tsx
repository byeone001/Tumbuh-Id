import { MobileShell } from "../components/MobileShell";
import { MessageCircle, Heart, MessageSquare, TrendingUp, Users, Plus, Search } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const DISCUSSION_TOPICS = [
  {
    id: 1,
    title: "Tips Mengatasi Anxiety di Tempat Kerja",
    author: "Andi W.",
    category: "Mental Health",
    categoryColor: "bg-emerald-100 text-emerald-700",
    replies: 23,
    likes: 45,
    time: "2 jam lalu",
  },
  {
    id: 2,
    title: "Investasi Pertama untuk Gen Z - Mulai dari Mana?",
    author: "Siti R.",
    category: "Finansial",
    categoryColor: "bg-yellow-100 text-yellow-700",
    replies: 18,
    likes: 32,
    time: "5 jam lalu",
  },
  {
    id: 3,
    title: "Morning Routine yang Mengubah Hidup Saya",
    author: "Budi S.",
    category: "Produktivitas",
    categoryColor: "bg-blue-100 text-blue-700",
    replies: 41,
    likes: 89,
    time: "1 hari lalu",
  },
  {
    id: 4,
    title: "Cara Komunikasi Efektif dengan Pasangan",
    author: "Dewi L.",
    category: "Relasi",
    categoryColor: "bg-pink-100 text-pink-700",
    replies: 27,
    likes: 56,
    time: "2 hari lalu",
  },
];

const TABS = ["Semua", "Trending", "Terbaru"];

export const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <MobileShell
      title="Komunitas"
      headerRight={
        <button className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center">
          <Plus size={16} />
        </button>
      }
    >
      <div className="space-y-4 pb-2">
        {/* Stats mini row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Anggota", value: "8.2K", icon: Users, color: "text-brand-primary bg-brand-primary/10" },
            { label: "Diskusi", value: "1.4K", icon: MessageCircle, color: "text-emerald-600 bg-emerald-50" },
            { label: "Minggu ini", value: "+342", icon: TrendingUp, color: "text-orange-600 bg-orange-50" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-2xl p-3 shadow-card border border-gray-50 text-center">
                <div className={`w-7 h-7 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-1.5`}>
                  <Icon size={14} />
                </div>
                <p className="font-bold text-xs text-brand-text">{stat.value}</p>
                <p className="text-[9px] text-brand-muted">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-gray-100 shadow-card">
          <Search size={15} className="text-brand-muted shrink-0" />
          <input
            type="text"
            placeholder="Cari diskusi..."
            className="flex-1 text-xs outline-none bg-transparent placeholder:text-brand-muted/60"
          />
        </div>

        {/* Tab filter */}
        <div className="flex gap-2">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === i
                  ? "bg-brand-primary text-white"
                  : "bg-white text-brand-muted border border-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Discussions */}
        <div className="space-y-2.5">
          {DISCUSSION_TOPICS.map((topic) => (
            <Link
              key={topic.id}
              to="/dashboard"
              className="block bg-white rounded-2xl p-3.5 shadow-card border border-gray-50 active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${topic.categoryColor}`}>
                  {topic.category}
                </span>
                <span className="text-[9px] text-brand-muted">{topic.time}</span>
              </div>
              <h4 className="font-bold text-xs leading-snug mb-1">{topic.title}</h4>
              <p className="text-[10px] text-brand-muted mb-2">oleh {topic.author}</p>

              <div className="flex items-center gap-4 pt-2 border-t border-gray-50">
                <div className="flex items-center gap-1 text-[10px] text-brand-muted">
                  <MessageSquare size={12} />
                  <span>{topic.replies}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-brand-muted">
                  <Heart size={12} />
                  <span>{topic.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MobileShell>
  );
};

export default CommunityPage;
