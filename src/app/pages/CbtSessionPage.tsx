import { useState } from "react";
import { Link } from "react-router";
import { X } from "lucide-react";
import { MobileShell } from "../components/MobileShell";

const QUESTIONS = [
  {
    question: "Bagaimana intensitas perasaan cemas yang kamu rasakan hari ini?",
    helper: "Pilih yang paling menggambarkan kondisimu.",
    options: [
      "Tidak sama sekali — saya merasa tenang",
      "Ringan — sedikit gelisah tapi terkontrol",
      "Sedang — cukup mengganggu aktivitas",
      "Berat — sulit untuk fokus",
      "Sangat berat — terasa overwhelming",
    ],
  },
];

export const CbtSessionPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const progress = 40;
  const q = QUESTIONS[0];

  return (
    <MobileShell
      showBack
      backTo="/learning"
      title="CBT · Sesi 2 dari 5"
      hideNav
      headerRight={
        <Link to="/dashboard">
          <X size={20} className="text-brand-muted" />
        </Link>
      }
      noPadding
    >
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Progress bar */}
        <div className="px-4 pt-3 pb-1">
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question content */}
        <div className="flex-1 px-4 pt-5 pb-4 overflow-y-auto min-h-0">
          <div className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold mb-4">
            Asesmen Kecemasan
          </div>
          <h2 className="font-serif text-brand-text mb-2 leading-snug">
            {q.question}
          </h2>
          <p className="text-brand-muted text-xs mb-6">{q.helper}</p>

          <div className="space-y-2.5">
            {q.options.map((opt, i) => {
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all flex items-center gap-3 ${
                    isActive
                      ? "bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/30"
                      : "bg-white border-gray-100 text-brand-text"
                  }`}
                >
                  <span
                    className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${
                      isActive
                        ? "border-white bg-white text-brand-primary"
                        : "border-gray-200 text-brand-muted"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-xs font-medium leading-snug">{opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA footer */}
        <div className="px-4 py-4 bg-white border-t border-gray-100 shrink-0">
          <p className="text-[10px] text-brand-muted text-center mb-3">
            {selected === null
              ? "Pilih salah satu jawaban untuk melanjutkan"
              : "Bagus! Lanjut ke pertanyaan berikutnya"}
          </p>
          <button
            disabled={selected === null}
            className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all ${
              selected !== null
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </MobileShell>
  );
};

export default CbtSessionPage;
