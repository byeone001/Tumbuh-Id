import { MobileShell } from "../components/MobileShell";
import { Video, MessageCircle, Calendar, Clock, Star } from "lucide-react";

const COUNSELORS = [
  {
    id: 1,
    name: "Dr. Sarah Wijaya, M.Psi",
    specialty: "Psikolog Klinis",
    rating: 4.9,
    sessions: 234,
    price: "Rp 250.000",
    available: ["Sen", "Rab", "Jum"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHN5Y2hvbG9naXN0fGVufDB8fHx8MTc3OTY1NTE2M3ww&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    id: 2,
    name: "Rizki Pratama, M.Psi",
    specialty: "Career Counselor",
    rating: 4.8,
    sessions: 189,
    price: "Rp 200.000",
    available: ["Sel", "Kam", "Sab"],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3Nzk2NTUxNjN8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    id: 3,
    name: "Dewi Lestari, S.Psi",
    specialty: "Relationship Counselor",
    rating: 4.9,
    sessions: 312,
    price: "Rp 225.000",
    available: ["Sen", "Kam", "Sab"],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhc2lhbiUyMHdvbWFuJTIwcHN5Y2hvbG9naXN0fGVufDB8fHx8MTc3OTY1NTE2M3ww&ixlib=rb-4.1.0&q=80&w=200",
  },
];

export const CounselingPage = () => {
  return (
    <MobileShell title="Konseling">
      <div className="space-y-4 pb-2">
        {/* Upcoming session banner */}
        <div className="bg-white rounded-2xl p-3.5 border border-brand-primary/30 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
              <Video size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-brand-muted">Sesi Mendatang</p>
              <h4 className="font-bold text-xs">Dr. Sarah Wijaya</h4>
              <div className="flex items-center gap-2 text-[10px] text-brand-muted mt-0.5">
                <span className="flex items-center gap-1"><Calendar size={10} /> 28 Mei 2026</span>
                <span className="flex items-center gap-1"><Clock size={10} /> 14:00 - 15:00</span>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-full bg-brand-primary text-white font-bold text-[10px] shrink-0">
              Join
            </button>
          </div>
        </div>

        {/* Session types */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
            <Video size={22} className="relative mb-2" />
            <h3 className="font-serif text-sm relative mb-1">Video Call</h3>
            <p className="text-[10px] text-blue-100 relative mb-3">Sesi 60 menit tatap muka online</p>
            <button className="bg-white text-blue-600 px-3 py-1.5 rounded-full font-bold text-[10px] relative">
              Mulai
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
            <MessageCircle size={22} className="relative mb-2" />
            <h3 className="font-serif text-sm relative mb-1">Chat</h3>
            <p className="text-[10px] text-emerald-100 relative mb-3">Konseling via chat kapan saja</p>
            <button className="bg-white text-emerald-600 px-3 py-1.5 rounded-full font-bold text-[10px] relative">
              Mulai
            </button>
          </div>
        </div>

        {/* Counselors */}
        <div>
          <h3 className="font-bold text-sm mb-3">Konselor Tersedia</h3>
          <div className="space-y-3">
            {COUNSELORS.map((counselor) => (
              <div
                key={counselor.id}
                className="bg-white rounded-2xl p-3.5 shadow-card border border-gray-50 flex items-start gap-3"
              >
                <img
                  src={counselor.image}
                  alt={counselor.name}
                  className="w-14 h-14 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs leading-tight truncate">{counselor.name}</h4>
                      <p className="text-[10px] text-brand-muted">{counselor.specialty}</p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <p className="text-xs font-bold text-brand-primary">{counselor.price}</p>
                      <p className="text-[9px] text-brand-muted">per sesi</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <Star size={11} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-[10px] font-bold">{counselor.rating}</span>
                    <span className="text-[10px] text-brand-muted">({counselor.sessions} sesi)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {counselor.available.map((day) => (
                        <span
                          key={day}
                          className="text-[9px] bg-brand-primary/10 text-brand-primary px-1.5 py-0.5 rounded-full font-bold"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                    <button className="text-brand-primary font-bold text-[10px]">
                      Buat Janji →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileShell>
  );
};

export default CounselingPage;
