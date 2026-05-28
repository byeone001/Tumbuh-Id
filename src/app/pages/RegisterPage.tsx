import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User, CheckCircle2 } from "lucide-react";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!fullName.trim()) {
      setError("Nama lengkap harus diisi");
      return false;
    }
    if (!email) {
      setError("Email harus diisi");
      return false;
    }
    if (password.length < 8) {
      setError("Password minimal 8 karakter");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Password tidak cocok");
      return false;
    }
    if (!agreeTerms) {
      setError("Anda harus menyetujui Syarat & Ketentuan");
      return false;
    }
    return true;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);
    // Simulasi register
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const passwordStrength = (() => {
    if (!password) return { level: 0, text: "" };
    if (password.length < 8) return { level: 1, text: "Lemah", color: "text-red-500" };
    if (password.length < 12) return { level: 2, text: "Sedang", color: "text-yellow-500" };
    return { level: 3, text: "Kuat", color: "text-green-500" };
  })();

  return (
    <div className="flex flex-col h-full bg-white font-sans text-brand-text overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F7FBF9]"
        >
          <ArrowLeft size={18} className="text-brand-text" />
        </button>
        <span className="font-bold text-brand-text text-brand-primary font-serif">TUMBUH.ID</span>
        <div className="w-9" />
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            T
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-2">Mulai Tumbuh Bersama Kami!</h1>
        <p className="text-sm text-brand-muted text-center mb-6">
          Buat akun untuk akses semua fitur pembelajaran dan pengembangan diri
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-brand-text mb-2">Nama Lengkap</label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Rizky Pratama"
                className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary bg-[#F7FBF9]"
              />
            </div>
          </div>

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

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-brand-text mb-2">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-9 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary bg-[#F7FBF9]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {password && (
              <p className={`text-xs font-semibold mt-1 ${passwordStrength.color}`}>
                Kekuatan: {passwordStrength.text}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-brand-text mb-2">Konfirmasi Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-9 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary bg-[#F7FBF9]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {confirmPassword && password === confirmPassword && (
              <div className="flex items-center gap-1 mt-1 text-green-500 text-xs font-semibold">
                <CheckCircle2 size={14} /> Password cocok
              </div>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-1 w-4 h-4 rounded accent-brand-primary cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-brand-muted leading-relaxed">
              Saya setuju dengan{" "}
              <a href="#" className="text-brand-primary font-bold">
                Syarat & Ketentuan
              </a>{" "}
              dan{" "}
              <a href="#" className="text-brand-primary font-bold">
                Kebijakan Privasi
              </a>
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3">
              <p className="text-xs text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl mt-6 hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Mendaftar...
              </>
            ) : (
              "Daftar Sekarang"
            )}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-brand-muted mt-6">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-brand-primary font-bold">
            Masuk di sini
          </Link>
        </p>
      </div>

      {/* Bottom Info */}
      <div className="px-4 py-4 bg-[#F7FBF9] border-t border-gray-100 text-xs text-brand-muted text-center">
        <p>Data Anda dilindungi dengan enkripsi end-to-end</p>
      </div>
    </div>
  );
};

export default RegisterPage;
