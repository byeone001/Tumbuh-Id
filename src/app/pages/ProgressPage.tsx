import { MobileShell } from "../components/MobileShell";
import { TrendingUp, TrendingDown, Award, Flame, Target } from "lucide-react";
import { SimpleAreaChart } from "../components/SimpleAreaChart";
import { useMemo } from "react";

const WEEKLY_STATS = [
  { label: "Sesi Selesai", value: "12", change: "+3", trend: "up" },
  { label: "Streak Hari", value: "7", change: "+2", trend: "up" },
  { label: "Modul Aktif", value: "3", change: "0", trend: "neutral" },
  { label: "Total Poin", value: "485", change: "+75", trend: "up" },
];

const MONTHLY_PROGRESS = [
  { category: "Mental Health", completed: 8, total: 12, color: "bg-emerald-500" },
  { category: "Finansial", completed: 5, total: 10, color: "bg-yellow-500" },
  { category: "Produktivitas", completed: 6, total: 8, color: "bg-blue-500" },
  { category: "Karir", completed: 2, total: 6, color: "bg-purple-500" },
];

const ACHIEVEMENTS = [
  { title: "Konsisten 7 Hari", desc: "7 hari berturut-turut", icon: Flame, unlocked: true, color: "bg-orange-500" },
  { title: "Mindful Master", desc: "10 sesi mindfulness", icon: Award, unlocked: true, color: "bg-emerald-500" },
  { title: "Early Bird", desc: "Mulai sebelum jam 8", icon: Target, unlocked: false, color: "bg-gray-300" },
];

export const ProgressPage = () => {
  const moodData = useMemo(
    () => [
      { day: "Sen", value: 60 },
      { day: "Sel", value: 70 },
      { day: "Rab", value: 65 },
      { day: "Kam", value: 80 },
      { day: "Jum", value: 75 },
      { day: "Sab", value: 85 },
      { day: "Min", value: 90 },
    ],
    []
  );

  return (
    <MobileShell title="Progress Kamu">
      <div className="space-y-4 pb-2">
        {/* Weekly Stats grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {WEEKLY_STATS.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-3.5 shadow-card border border-gray-50">
              <p className="text-[10px] text-brand-muted mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <span className="font-serif text-brand-primary" style={{ fontSize: 28 }}>
                  {stat.value}
                </span>
                <div
                  className={`flex items-center gap-0.5 text-[10px] font-bold ${
                    stat.trend === "up"
                      ? "text-emerald-600"
                      : stat.trend === "down"
                      ? "text-red-600"
                      : "text-gray-400"
                  }`}
                >
                  {stat.trend === "up" && <TrendingUp size={12} />}
                  {stat.trend === "down" && <TrendingDown size={12} />}
                  <span>{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mood Trend Chart */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold text-sm">Tren Mood Minggu Ini</h3>
              <p className="text-[10px] text-brand-muted">Rata-rata meningkat 15%</p>
            </div>
            <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-[10px] font-bold">
              <TrendingUp size={11} /> Membaik
            </div>
          </div>
          <div className="h-28">
            <SimpleAreaChart data={moodData} />
          </div>
        </div>

        {/* Monthly Progress bars */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <h3 className="font-bold text-sm mb-3">Progress Bulan Ini</h3>
          <div className="space-y-3.5">
            {MONTHLY_PROGRESS.map((item) => {
              const percentage = Math.round((item.completed / item.total) * 100);
              return (
                <div key={item.category}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold">{item.category}</span>
                    <span className="text-[10px] text-brand-muted">
                      {item.completed}/{item.total} sesi
                    </span>
                  </div>
                  <div className="h-2 bg-[#F7FBF9] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm">Pencapaian</h3>
            <span className="text-[10px] text-brand-muted">2/3 terbuka</span>
          </div>
          <div className="space-y-2.5">
            {ACHIEVEMENTS.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${
                    achievement.unlocked
                      ? "bg-brand-primary/5 border-brand-primary/20"
                      : "bg-gray-50 border-gray-100 opacity-60"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${achievement.color} text-white flex items-center justify-center shrink-0`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs">{achievement.title}</h4>
                    <p className="text-[10px] text-brand-muted">{achievement.desc}</p>
                  </div>
                  {achievement.unlocked && (
                    <div className="text-[10px] font-bold text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full shrink-0">
                      Terbuka
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MobileShell>
  );
};

export default ProgressPage;
