import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Mail, CheckCircle2, Lock } from "lucide-react";

type Step = "email" | "verification" | "reset";

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email harus diisi");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("verification");
      setSuccessMessage("Kode verifikasi telah dikirim ke email Anda");
    }, 1000);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const code = verificationCode.join("");
    if (code.length !== 6) {
      setError("Kode verifikasi harus 6 digit");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("reset");
      setSuccessMessage("");
    }, 1000);
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Password dan konfirmasi harus diisi");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Password tidak cocok");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Password berhasil direset! Silakan masuk dengan password baru.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white font-sans text-brand-text overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
        <button
          onClick={() => {
            if (step !== "email") {
              setStep("email");
              setError("");
              setSuccessMessage("");
            } else {
              navigate(-1);
            }
          }}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F7FBF9]"
        >
          <ArrowLeft size={18} className="text-brand-text" />
        </button>
        <span className="font-bold text-brand-text text-brand-primary font-serif">TUMBUH.ID</span>
        <div className="w-9" />
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 flex flex-col justify-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            T
          </div>
        </div>

        {step === "email" && (
          <>
            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-2">Lupa Password?</h1>
            <p className="text-sm text-brand-muted text-center mb-6">
              Masukkan email Anda dan kami akan mengirimkan kode untuk reset password
            </p>

            {/* Form */}
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-brand-text mb-2">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary bg-[#F7FBF9]"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                  <p className="text-xs text-red-700 font-medium">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl mt-6 hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Mengirim...
                  </>
                ) : (
                  "Kirim Kode Verifikasi"
                )}
              </button>
            </form>
          </>
        )}

        {step === "verification" && (
          <>
            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-2">Verifikasi Email</h1>
            <p className="text-sm text-brand-muted text-center mb-6">
              Masukkan 6 digit kode yang telah kami kirim ke {email}
            </p>

            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4 flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                <p className="text-xs text-green-700 font-medium">{successMessage}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleCodeSubmit} className="space-y-4">
              {/* Code Inputs */}
              <div className="flex gap-2 justify-center mb-6">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="w-11 h-11 text-center text-lg font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary bg-[#F7FBF9]"
                  />
                ))}
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                  <p className="text-xs text-red-700 font-medium">{error}</p>
                </div>
              )}

              {/* Resend Link */}
              <p className="text-center text-xs text-brand-muted">
                Tidak menerima kode?{" "}
                <button
                  type="button"
                  onClick={() => handleEmailSubmit({} as React.FormEvent)}
                  className="text-brand-primary font-bold hover:underline"
                >
                  Kirim ulang
                </button>
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || verificationCode.join("").length !== 6}
                className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl mt-6 hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Memverifikasi...
                  </>
                ) : (
                  "Verifikasi"
                )}
              </button>
            </form>
          </>
        )}

        {step === "reset" && (
          <>
            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-2">Buat Password Baru</h1>
            <p className="text-sm text-brand-muted text-center mb-6">
              Masukkan password baru yang kuat untuk keamanan akun Anda
            </p>

            {/* Form */}
            <form onSubmit={handlePasswordReset} className="space-y-4">
              {/* New Password */}
              <div>
                <label className="block text-xs font-bold text-brand-text mb-2">Password Baru</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary bg-[#F7FBF9]"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-brand-text mb-2">Konfirmasi Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary bg-[#F7FBF9]"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                  <p className="text-xs text-red-700 font-medium">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {successMessage && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-green-700 font-medium">{successMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl mt-6 hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Mereset...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
