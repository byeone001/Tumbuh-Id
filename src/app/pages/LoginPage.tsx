import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, ArrowLeft, Mail, Lock } from "lucide-react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Email dan password harus diisi");
      return;
    }

    setLoading(true);
    // Simulasi login
    setTimeout(() => {
      setLoading(false);
      // Navigate ke dashboard setelah login
      navigate("/dashboard");
    }, 1500);
  };

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
      <div className="flex-1 px-4 py-6 flex flex-col justify-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            T
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-2">Selamat Kembali!</h1>
        <p className="text-sm text-brand-muted text-center mb-6">
          Masuk ke akun Anda untuk melanjutkan perjalanan tumbuh Anda
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
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

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-brand-text">Password</label>
              <Link
                to="/forgot-password"
                className="text-xs text-brand-primary font-semibold"
              >
                Lupa password?
              </Link>
            </div>
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
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3">
              <p className="text-xs text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl mt-6 hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Masuk...
              </>
            ) : (
              "Masuk"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-brand-muted">atau</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full border border-gray-200 bg-white text-brand-text font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Google
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-brand-muted mt-6">
          Belum punya akun?{" "}
          <Link to="/register" className="text-brand-primary font-bold">
            Daftar di sini
          </Link>
        </p>
      </div>

      {/* Bottom Info */}
      <div className="px-4 py-4 bg-[#F7FBF9] border-t border-gray-100 text-xs text-brand-muted text-center">
        <p>Dengan masuk, Anda setuju dengan Syarat & Ketentuan kami</p>
      </div>
    </div>
  );
};

export default LoginPage;
