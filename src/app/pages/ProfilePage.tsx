import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileShell } from "../components/MobileShell";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit2,
  Save,
  X,
  Settings,
  LogOut,
  Shield,
  Bell as BellIcon,
  Trash2,
} from "lucide-react";

const USER_DATA = {
  name: "Rizky Pratama",
  email: "rizky.pratama@email.com",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia",
  joinDate: "Bergabung Januari 2024",
  bio: "Passionate learner dan digital enthusiast",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3OTY1NTE2M3ww&ixlib=rb-4.1.0&q=80&w=100",
};

const SETTINGS = [
  { id: "notifications", label: "Notifikasi", icon: BellIcon, desc: "Atur pengaturan notifikasi" },
  { id: "privacy", label: "Privasi & Keamanan", icon: Shield, desc: "Kelola privasi akun Anda" },
  { id: "settings", label: "Pengaturan Akun", icon: Settings, desc: "Kelola preferensi akun" },
];

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(USER_DATA);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Simpan data ke backend
  };

  const handleLogout = () => {
    // TODO: Clear auth state
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    // TODO: Delete account
    navigate("/");
  };

  return (
    <MobileShell title="Profil Saya" showBack>
      <div className="space-y-4 pb-4">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-3 border-brand-primary shrink-0">
              <img src={editData.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              {isEditing ? (
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="w-full bg-[#F7FBF9] border border-gray-200 rounded-lg px-3 py-2 text-sm font-bold mb-2 focus:outline-none focus:border-brand-primary"
                />
              ) : (
                <h2 className="font-bold text-lg">{editData.name}</h2>
              )}

              {isEditing ? (
                <textarea
                  value={editData.bio}
                  onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                  placeholder="Tulis bio Anda..."
                  className="w-full bg-[#F7FBF9] border border-gray-200 rounded-lg px-3 py-2 text-xs text-brand-muted focus:outline-none focus:border-brand-primary resize-none"
                  rows={2}
                />
              ) : (
                <p className="text-xs text-brand-muted">{editData.bio}</p>
              )}
            </div>

            {isEditing ? (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="w-9 h-9 rounded-lg bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition-colors"
                >
                  <Save size={16} />
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditData(USER_DATA);
                  }}
                  className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-9 h-9 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center hover:bg-brand-primary/20 transition-colors"
              >
                <Edit2 size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <h3 className="font-bold text-sm mb-3">Informasi Kontak</h3>
          <div className="space-y-3">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div className="flex-1 min-w-0">
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    className="w-full bg-[#F7FBF9] border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-primary"
                  />
                ) : (
                  <>
                    <p className="text-xs text-brand-muted">Email</p>
                    <p className="text-sm font-medium text-brand-text truncate">{editData.email}</p>
                  </>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div className="flex-1 min-w-0">
                {isEditing ? (
                  <input
                    type="tel"
                    value={editData.phone}
                    onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    className="w-full bg-[#F7FBF9] border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-primary"
                  />
                ) : (
                  <>
                    <p className="text-xs text-brand-muted">Nomor Telepon</p>
                    <p className="text-sm font-medium text-brand-text">{editData.phone}</p>
                  </>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div className="flex-1 min-w-0">
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                    className="w-full bg-[#F7FBF9] border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-primary"
                  />
                ) : (
                  <>
                    <p className="text-xs text-brand-muted">Lokasi</p>
                    <p className="text-sm font-medium text-brand-text">{editData.location}</p>
                  </>
                )}
              </div>
            </div>

            {/* Join Date */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Calendar size={16} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-brand-muted">Tergabung</p>
                <p className="text-sm font-medium text-brand-text">{editData.joinDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50">
          <h3 className="font-bold text-sm mb-3">Pengaturan Akun</h3>
          <div className="space-y-2">
            {SETTINGS.map((setting) => {
              const Icon = setting.icon;
              return (
                <button
                  key={setting.id}
                  onClick={() => {
                    // TODO: Navigate to settings pages
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#F7FBF9] hover:bg-gray-100 transition-colors border border-gray-100 active:scale-[0.98]"
                >
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-brand-primary">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs font-bold text-brand-text">{setting.label}</p>
                    <p className="text-[10px] text-brand-muted">{setting.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-50 space-y-2">
          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-blue-600 border border-blue-100 active:scale-[0.98] font-semibold"
          >
            <LogOut size={18} />
            Keluar
          </button>

          {/* Delete Account */}
          <button
            onClick={() => setShowDeleteModal(true)}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors text-red-600 border border-red-100 active:scale-[0.98] font-semibold"
          >
            <Trash2 size={18} />
            Hapus Akun
          </button>
        </div>

        {/* Info */}
        <div className="bg-brand-primary/5 rounded-2xl p-4 border border-brand-primary/20">
          <p className="text-xs text-brand-text leading-relaxed">
            <span className="font-bold">💡 Tip:</span> Pastikan email Anda selalu aktif untuk menerima notifikasi penting tentang akun Anda.
          </p>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-4 animate-in slide-in-from-bottom">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Hapus Akun?</h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-brand-muted mb-6 leading-relaxed">
              Menghapus akun akan menghilangkan semua data Anda secara permanen. Tindakan ini tidak dapat dibatalkan.
            </p>

            <div className="space-y-2">
              <button
                onClick={handleDeleteAccount}
                className="w-full bg-red-500 text-white font-bold py-3 rounded-xl hover:bg-red-600 transition-colors active:scale-95"
              >
                Ya, Hapus Akun Saya
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-full bg-gray-100 text-brand-text font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors active:scale-95"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </MobileShell>
  );
};

export default ProfilePage;
