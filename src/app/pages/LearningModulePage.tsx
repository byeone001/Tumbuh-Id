import { MobileShell } from "../components/MobileShell";
import { Link } from "react-router";
import { CheckCircle2, Lock, PlayCircle, Clock, BookOpen } from "lucide-react";

const LESSONS = [
  { id: 1, title: "Pengenalan Mindfulness", duration: "8 menit", status: "done" },
  { id: 2, title: "Teknik Pernapasan Dasar 4-7-8", duration: "12 menit", status: "done" },
  { id: 3, title: "Body Scan & Awareness", duration: "15 menit", status: "done" },
  { id: 4, title: "Mindful Eating Practice", duration: "10 menit", status: "active", progress: 62 },
  { id: 5, title: "Mindfulness di Tempat Kerja", duration: "14 menit", status: "locked" },
  { id: 6, title: "Mengelola Pikiran Negatif", duration: "18 menit", status: "locked" },
  { id: 7, title: "Membangun Rutinitas Harian", duration: "11 menit", status: "locked" },
  { id: 8, title: "Refleksi & Evaluasi Akhir", duration: "20 menit", status: "locked" },
];

export const LearningModulePage = () => {
  const overallProgress = 62;

  return (
    <MobileShell title="Modul Belajar">
      <div className="space-y-4 pb-2">
        {/* Module Header Card */}
        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-4 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10" />
          <div className="relative">
            <div className="inline-block bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-2">
              Mental Health
            </div>
            <h2 className="font-serif mb-1 leading-tight text-base">
              Mindfulness untuk Pemula
            </h2>
            <p className="text-white/80 text-xs mb-4 leading-relaxed">
              8 sesi praktis untuk membangun kebiasaan mindful yang meningkatkan fokus dan kualitas hidup.
            </p>

            <div className="flex items-center gap-4 text-xs text-white/80 mb-4">
              <span className="flex items-center gap-1"><BookOpen size={12} /> 8 Sesi</span>
              <span className="flex items-center gap-1"><Clock size={12} /> 108 mnt</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={12} /> Sertifikat</span>
            </div>

            {/* Progress bar */}
            <div className="bg-white/20 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold">Progress Modul</span>
                <span className="text-sm font-bold">{overallProgress}%</span>
              </div>
              <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <p className="text-[10px] text-white/70 mt-1.5">3 dari 8 sesi selesai</p>
            </div>
          </div>
        </div>

        {/* Lesson list */}
        <div>
          <h3 className="font-bold text-sm mb-3">Daftar Sesi</h3>
          <div className="space-y-2.5">
            {LESSONS.map((lesson, i) => {
              const isDone = lesson.status === "done";
              const isActive = lesson.status === "active";
              const isLocked = lesson.status === "locked";

              return (
                <div
                  key={lesson.id}
                  className={`bg-white rounded-2xl p-3.5 border-2 transition-all flex items-center gap-3 ${
                    isActive
                      ? "border-brand-primary"
                      : isLocked
                      ? "border-gray-50 opacity-60"
                      : "border-gray-50"
                  }`}
                >
                  {/* Status icon */}
                  <div className="shrink-0">
                    {isDone && (
                      <div className="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                        <CheckCircle2 size={18} />
                      </div>
                    )}
                    {isActive && (
                      <div className="w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                        <PlayCircle size={18} />
                      </div>
                    )}
                    {isLocked && (
                      <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center">
                        <Lock size={16} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[9px] font-bold text-brand-muted">SESI {i + 1}</span>
                      {isDone && <span className="text-[9px] font-bold text-brand-primary">SELESAI</span>}
                      {isActive && (
                        <span className="text-[9px] font-bold text-brand-primary animate-pulse">AKTIF</span>
                      )}
                    </div>
                    <h4 className="font-bold text-xs leading-snug truncate">{lesson.title}</h4>
                    <div className="flex items-center gap-2 text-[10px] text-brand-muted mt-0.5">
                      <span className="flex items-center gap-1">
                        <Clock size={10} /> {lesson.duration}
                      </span>
                      {isActive && lesson.progress && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                            <span
                              className="block h-full bg-brand-primary rounded-full"
                              style={{ width: `${lesson.progress}%` }}
                            />
                          </span>
                          {lesson.progress}%
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="shrink-0">
                    {isLocked ? (
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                        <Lock size={12} className="text-gray-400" />
                      </div>
                    ) : isActive ? (
                      <Link
                        to="/cbt"
                        className="px-3 py-1.5 rounded-full bg-brand-primary text-white font-bold text-[10px] shadow-md shadow-brand-primary/20"
                      >
                        Lanjut
                      </Link>
                    ) : (
                      <button className="px-3 py-1.5 rounded-full border border-gray-200 text-brand-muted font-bold text-[10px]">
                        Ulangi
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MobileShell>
  );
};

export default LearningModulePage;
