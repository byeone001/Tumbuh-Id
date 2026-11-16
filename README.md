# Tumbuh.ID — Platform Pembelajaran & Pengembangan Diri Terpadu

> **Platform edukasi dan pendampingan holistik untuk kesehatan mental, literasi finansial, dan pengembangan karir generasi muda Indonesia.**

---

## 1. Tentang Project & Deskripsi Singkat

**Tumbuh.ID** adalah aplikasi web interaktif yang dirancang untuk membantu individu mengatasi tantangan quarter-life crisis, stres perkuliahan maupun kerja, serta kebiasaan finansial yang kurang sehat. Dengan pendekatan terpadu (holistik), Tumbuh.ID menggabungkan tiga pilar pertumbuhan utama dalam satu ekosistem digital:

1. **Mental & Psikologis**: Membantu pengguna mengenali emosi, mengelola kecemasan, serta merawat kesehatan mental melalui asesmen mandiri berbasis CBT (*Cognitive Behavioral Therapy*), latihan *mindfulness*, dan sesi konseling privat bersama psikolog berlisensi.
2. **Finansial & Pemulihan**: Memberikan edukasi literasi keuangan dari nol (budgeting harian, pemulihan pinjaman/kebiasaan impulsif, hingga pengenalan investasi aman).
3. **Skill & Pengembangan Karir**: Memfasilitasi peningkatan produktivitas (*time blocking*), persiapan karir (*mentoring*, review CV), dan pembelajaran aplikatif bagi mahasiswa maupun *fresh graduate*.

Aplikasi ini dibangun dengan antarmuka yang modern, responsif, dan *mobile-first*, memberikan pengalaman pengguna yang menenangkan dan intuitif (*wellness-oriented UI*).

---

## 2. Fitur Utama

- **Halaman Beranda Interaktif (Landing Page)**
  - Pengenalan 3 pilar utama Tumbuh.ID dengan ilustrasi bio-organik visual.
  - Statistik dampak, testimoni pengguna nyata, dan tombol aksi cepat menuju registrasi.
- **Mood Tracker & Jurnal Harian**
  - Pemantauan suasana hati harian dengan 5 skala emosi interaktif.
  - Perhitungan *streak count* harian untuk membangun rutinitas positif yang konsisten.
  - Kutipan motivasi harian (*Daily Inspiration*).
- **Sesi CBT (Cognitive Behavioral Therapy) Mandiri**
  - Kuis dan asesmen refleksi kecemasan interaktif berpanduan langkah demi langkah.
  - Indikator progres sesi untuk memandu pengguna menyelesaikan evaluasi diri tanpa merasa kewalahan.
- **Modul Pembelajaran Mandiri (Learning Center)**
  - Kurikulum bertahap mulai dari *Mindfulness*, *Literasi Reksadana 101*, hingga *Time Blocking*.
  - Status modul terstruktur (Selesai, Aktif, dan Terkunci) beserta estimasi waktu dan sertifikat kelulusan.
- **Layanan Konseling Profesional (1-on-1 Counseling)**
  - Pilihan sesi melalui **Video Call** langsung atau **Live Chat**.
  - Direktori profil psikolog klinis, *career counselor*, dan *relationship counselor* lengkap dengan rating, jadwal ketersediaan, dan biaya sesi.
  - Manajemen jadwal sesi mendatang yang terintegrasi.
- **Komunitas & Forum Diskusi Suportif**
  - Ruang berbagi cerita anonim/publik antar-pengguna dengan filter kategori (*Mental Health*, *Finansial*, *Produktivitas*, *Relasi*).
  - Tab kategori diskusi (*Semua*, *Trending*, *Terbaru*), pencarian topik, serta interaksi suka (*likes*) dan tanggapan (*replies*).
- **Pelacakan Progres & Analitik Pribadi (Progress Analytics)**
  - Visualisasi tren suasana hati mingguan berbasis grafik interaktif (*Area Chart*).
  - Metrik pencapaian bulanan berdasarkan kategori.
  - Sistem gamifikasi dan lencana apresiasi (*Badges & Achievements*).
- **Manajemen Akun & Profil Pengguna**
  - Fitur sunting biodata dan foto profil.
  - Pengaturan preferensi notifikasi, privasi & keamanan, serta dialog konfirmasi aksi akun.
- **Alur Autentikasi Pengguna**
  - Halaman Masuk (*Login*), Pendaftaran Akun Baru (*Register*), dan Pemulihan Kata Sandi (*Forgot Password*).

---

## 3. Tech Stack & Library

| Kategori | Teknologi | Deskripsi / Fungsi |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) | Library UI komponen modular |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Pengetikan statis untuk keamanan kode dan skalabilitas |
| **Build Tool & Bundler** | [Vite 6](https://vite.dev/) | Tool build generasi baru yang sangat cepat dengan HMR |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Framework utility-first CSS modern |
| **UI Component Primitives** | [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/) | Komponen UI yang aksesibel, fleksibel, dan terstandarisasi |
| **Routing** | [React Router v7](https://reactrouter.com/) | Manajemen rute SPA (*Single Page Application*) berbasis deklaratif |
| **Data Visualization** | [Recharts 2](https://recharts.org/) | Library grafik berbasis SVG untuk chart progress & mood |
| **Icons** | [Lucide React](https://lucide.dev/) | Koleksi ikon SVG yang konsisten dan ringan |
| **Animations & Effects** | [Motion](https://motion.dev/) & [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) | Animasi transisi halus dan efek perayaan capaian |
| **Typography** | *Plus Jakarta Sans* & *DM Serif Display* | Tipografi modern berpadu elegan khas platform edukasi & wellness |

---

## 4. Struktur Folder Project

```text
Tumbuh-Id/
├── public/                      # Asset publik statis
├── src/
│   ├── app/
│   │   ├── components/          # Komponen UI modular yang dapat digunakan kembali
│   │   │   ├── figma/           # Utility fallback gambar dan asset Figma
│   │   │   ├── layout/          # Layout wrapper halaman (DashboardLayout, MainLayout)
│   │   │   ├── ui/              # Koleksi komponen atomik shadcn/ui (Button, Dialog, Card, dll.)
│   │   │   ├── MobileShell.tsx  # Shell container mobile-first dengan navigation bar
│   │   │   ├── Navbar.tsx       # Komponen bilah navigasi
│   │   │   ├── Footer.tsx       # Komponen footer halaman utama
│   │   │   └── SimpleAreaChart.tsx # Komponen grafik area progres
│   │   ├── pages/               # Halaman-halaman view aplikasi
│   │   │   ├── LandingPage.tsx        # Halaman muka / landing page publik
│   │   │   ├── LoginPage.tsx          # Halaman masuk pengguna
│   │   │   ├── RegisterPage.tsx       # Halaman registrasi akun baru
│   │   │   ├── ForgotPasswordPage.tsx # Halaman reset kata sandi
│   │   │   ├── DashboardPage.tsx      # Dashboard utama (Mood tracker & aktivitas)
│   │   │   ├── LearningModulePage.tsx # Modul kurikulum pembelajaran
│   │   │   ├── CbtSessionPage.tsx     # Sesi asesmen mandiri CBT
│   │   │   ├── CounselingPage.tsx     # Katalog & booking konseling
│   │   │   ├── CommunityPage.tsx      # Forum komunitas & ruang diskusi
│   │   │   ├── ProgressPage.tsx       # Analitik & grafik perkembangan
│   │   │   └── ProfilePage.tsx        # Pengaturan akun & profil pengguna
│   │   ├── App.tsx              # Root component dengan router provider
│   │   └── routes.tsx           # Definisi daftar rute URL aplikasi
│   ├── styles/                  # File styling global dan konfigurasi tema
│   │   ├── custom.css           # Variabel palet warna Tumbuh (--tumbuh-primary, dll.)
│   │   ├── fonts.css            # Import Google Fonts (Plus Jakarta Sans & DM Serif)
│   │   ├── tailwind.css         # Konfigurasi Tailwind CSS v4
│   │   └── index.css            # Entry point stylesheet
│   └── main.tsx                 # Titik masuk utama aplikasi React (DOM rendering)
├── index.html                   # Shell HTML utama aplikasi
├── package.json                 # Metadata project, script perintah, dan dependensi
├── postcss.config.mjs           # Konfigurasi plugin PostCSS
├── vite.config.ts               # Konfigurasi bundler Vite dan alias direktori (@)
└── README.md                    # Dokumentasi panduan project
```

---

## ⚙️ 5. Prasyarat & Cara Instalasi

### Prasyarat Sistem (Prerequisites)
Pastikan lingkungan lokal Anda telah terpasang:
- **Node.js**: Versi `18.x` atau lebih baru (disarankan versi LTS terbaru). Periksa dengan menjalankan:
  ```bash
  node -v
  ```
- **Package Manager**: `npm` (bawaan Node.js), atau alternatif lain seperti `pnpm` / `yarn`. Periksa dengan:
  ```bash
  npm -v
  ```

---

### Langkah-langkah Instalasi

1. **Clone Repository atau Buka Folder Project**
   ```bash
   git clone <URL_REPOSITORY_ANDA>
   cd Tumbuh-Id
   ```

2. **Instal Dependensi Project**
   Jalankan perintah instalasi dependensi menggunakan package manager pilihan Anda:
   ```bash
   npm install
   ```
   *(Atau `pnpm install` jika Anda menggunakan pnpm)*.

3. **Verifikasi Instalasi**
   Pastikan folder `node_modules/` telah terbuat dan tidak ada dependensi yang *missing*.

---

## 6. Konfigurasi Environment Variables

Saat ini aplikasi berjalan di sisi frontend menggunakan data simulasi lokal (*interactive mock state*). Ketika Anda menghubungkan aplikasi dengan layanan backend (seperti Express.js, Supabase, Firebase, atau REST API), Anda dapat membuat file `.env` di direktori root project.

Salin atau buat file `.env` berdasarkan template berikut:

```env
# URL API Backend Utama
VITE_API_BASE_URL=http://localhost:5000/api/v1

# Konfigurasi Opsional (Misal integrasi Supabase / Firebase)
# VITE_SUPABASE_URL=https://your-project.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Tabel Penjelasan Variabel Environment

| Variabel | Tipe | Wajib? | Nilai Bawaan / Contoh | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| `VITE_API_BASE_URL` | `String` | Opsional | `http://localhost:5000/api/v1` | URL endpoint server backend untuk autentikasi, modul, dan konseling. |
| `VITE_SUPABASE_URL` | `String` | Opsional | `https://xxxx.supabase.co` | Alamat host Supabase jika menggunakan BaaS Supabase. |
| `VITE_SUPABASE_ANON_KEY` | `String` | Opsional | `eyJh...` | Public API key / anon key untuk koneksi ke database Supabase. |

> **Catatan Vite**: Pada Vite, variabel lingkungan yang dapat diakses di sisi browser wajib menggunakan awalan `VITE_` (misalnya `import.meta.env.VITE_API_BASE_URL`).

---

## 7. Cara Penggunaan & Menjalankan Project

### 1. Menjalankan Server Pengembangan (Development Server)
Untuk menjalankan aplikasi dalam mode pengembangan lokal dengan fitur *Hot Module Replacement* (HMR):

```bash
npm run dev
```

Secara default, Vite akan menjalankan aplikasi pada:
 **`http://localhost:5173/`**

Buka tautan tersebut di peramban (browser) favorit Anda.

---

### 2. Membangun Aplikasi untuk Tahap Produksi (Production Build)
Untuk melakukan kompilasi file TypeScript dan *bundling* aset ke folder `dist/`:

```bash
npm run build
```

---

### 3. Meninjau Hasil Build (Preview Build)
Untuk menguji hasil build produksi secara lokal sebelum melakukan deployment:

```bash
npm run preview
```

---

### Panduan Rute & Navigasi Aplikasi

Setelah aplikasi berjalan di browser, Anda dapat menjelajahi halaman-halaman berikut:

| Rute URL | Nama Halaman | Fungsi / Deskripsi |
| :--- | :--- | :--- |
| `/` | **Landing Page** | Halaman utama dengan pengenalan fitur, pilar, dan testimoni. |
| `/dashboard` | **Dashboard** | Pusat kendali aktivitas harian, mood tracker, ringkasan progres, dan modul. |
| `/learning` | **Modul Belajar** | Daftar kurikulum, daftar sesi pelatihan, dan progres materi. |
| `/cbt` | **Sesi CBT** | Asesmen interaktif kecemasan dan refleksi diri. |
| `/counseling`| **Konseling** | Pemesanan sesi konseling (Video Call & Chat) bersama psikolog. |
| `/community` | **Komunitas** | Forum berbagi cerita, postingan tren, dan diskusi interaktif. |
| `/progress` | **Progress Saya** | Grafik mingguan tren mood, statistik sesi, dan lencana apresiasi. |
| `/profile` | **Profil Pengguna** | Pengaturan informasi personal, preferensi akun, dan keluar sistem. |
| `/login` | **Masuk** | Halaman autentikasi pengguna terdaftar. |
| `/register` | **Daftar** | Halaman pendaftaran akun baru. |
| `/forgot-password` | **Lupa Password** | Halaman pengajuan pemulihan kata sandi akun. |

---

## Palet Warna & Identitas Desain

Tumbuh.ID menggunakan kombinasi warna alam yang menenangkan:
- **Tumbuh Emerald / Primary**: `#00D260` (Melambangkan pertumbuhan, kesegaran, dan harapan)
- **Tumbuh Secondary**: `#20B25D` (Warna hijau pendukung untuk gradasi dan kartu)
- **Tumbuh Accent**: `#FFC107` / Amber (Melambangkan kehangatan dan motivasi)
- **Background Slate**: `#F7FBF9` (Latar belakang lembut yang ramah di mata)
- **Deep Forest Text**: `#1A2B22` (Kontras tinggi yang mudah dibaca)

---

## Lisensi & Atribusi

- **Aset & Komponen**:
  - Komponen UI diadaptasi dari [shadcn/ui](https://ui.shadcn.com/) di bawah lisensi [MIT](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).
  - Foto dan ilustrasi foto bersumber dari [Unsplash](https://unsplash.com) di bawah lisensi [Unsplash License](https://unsplash.com/license).
  - Ikon disediakan oleh [Lucide Icons](https://lucide.dev/).
