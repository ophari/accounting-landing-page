# Product Requirements Document (PRD)

**Nama Proyek:** Website Landing Page & Showcase Software Akuntansi  
**Estimasi Waktu Pengerjaan:** 7 Hari Kerja  
**Target Platform:** Web (Desktop, Tablet, Mobile Responsive)  
**Referensi Desain Utama:** [AutoCount Accounting V2](https://www.autocountsoft.com/pro-accounting2.html)  
**Link Proyek (Projects.co.id):** [Membuat Website untuk Aplikasi Accounting](https://projects.co.id/public/browse_projects/view/ac5a1d/membuat-website-untuk-aplikasi-accounting)

---

## 1. Project Overview & Objective

### 1.1 Latar Belakang & Tujuan
Proyek ini bertujuan untuk membangun website produk software akuntansi modern yang profesional, elegan, dan informatif. Website ini berfungsi sebagai media presentasi produk (product showcase), sarana edukasi bagi calon klien, serta mesin akuisisi prospek (lead generation) untuk mendorong konversi calon pembeli menjadi pengguna trial atau permintaan jadwal demo.

### 1.2 Target Audiens
* Pemilik Usaha Kecil dan Menengah (UMKM / SMEs).
* Manajer Keuangan, Chief Financial Officer (CFO), dan Staf Akuntansi perusahaan.
* Konsultan akuntansi dan perpajakan independen.

### 1.3 Nilai Utama & Brand Image
* **Terpercaya & Aman:** Menonjolkan standar keamanan data finansial perusahaan.
* **Modern & Bersih:** Menggunakan tata letak minimalis, navigasi ringkas, dan visual representatif (dashboard preview).
* **Solutif & Informatif:** Menonjolkan solusi atas kendala pembukuan manual (human error, stok selisih, keterlambatan laporan laba-rugi).

---

## 2. Arsitektur Informasi & Sitemap

Website terdiri dari 5 halaman utama yang saling terhubung:
1. **Front Page (`/`):** Ringkasan solusi produk, social proof, showcase modul utama, dan tombol Call-to-Action (CTA).
2. **Product Features (`/features`):** Pembahasan mendalam modul sistem akuntansi lengkap dengan screenshot antarmuka.
3. **About Us (`/about`):** Profil tim pengembang, visi-misi, standar kepatuhan regulasi finansial, dan data security.
4. **Blog / Resources (`/blog`):** Pusat publikasi artikel tips akuntansi, pajak bisnis, tutorial aplikasi, dan optimasi SEO.
5. **Contact Us (`/contact`):** Form permohonan demo/trial produk, informasi kontak resmi, peta lokasi, serta direct button WhatsApp.

---

## 3. Spesifikasi Detail Per Halaman

### 3.1 Halaman 1: Front Page (Home / Landing)
* **Header / Sticky Navigation Bar:**
  * Logo software di sisi kiri.
  * Menu navigasi: `Features`, `About Us`, `Blog`, `Contact`.
  * CTA Button Primer: `Coba Gratis 14 Hari` atau `Minta Demo`.
* **Hero Section:**
  * *Headline:* "Kelola Pembukuan & Arus Kas Bisnis Lebih Cepat Tanpa Ribet".
  * *Sub-headline:* "Software akuntansi lengkap dan mudah digunakan untuk otomasi faktur, pencatatan biaya, manajemen stok, dan laporan keuangan real-time."
  * *Double Action Buttons:* `Mulai Uji Coba Gratis` (Solid Button) & `Lihat Demo Sistem` (Outline Button).
  * *Hero Graphic:* Mockup dashboard aplikasi dengan chart visual performa finansial.
* **Social Proof / Trust Badges:**
  * Baris logo partner bank/pembayaran atau statistik (contoh: "Dipercaya oleh 500+ bisnis di Indonesia").
* **Top Key Features Highlight (Adaptasi Gaya AutoCount):**
  * Grid interaktif berisi 6 pilar fitur inti:
    1. *Invoicing & Piutang Otomatis*
    2. *Smart Inventory & Costing (HPP)*
    3. *Laporan Laba Rugi & Neraca 1-Klik*
    4. *Pencatatan Pajak & e-Faktur Ready*
    5. *Rekonsiliasi Bank Otomatis*
    6. *Multi-User & Hak Akses Bertingkat*
* **Interactive Dashboard Showcase:**
  * Komponen tab navigasi horizontal: pengunjung dapat memilih kategori modul (*Penjualan, Pembelian, Kas/Bank, Laporan*) dan tampilan gambar dashboard otomatis berganti sesuai tab yang aktif.
* **Testimonial Section:**
  * Card slider/grid berisi review autentik dari pemilik usaha mengenai efisiensi waktu setelah menggunakan software.
* **Bottom CTA Banner:**
  * Banner penutup sebelum footer dengan headline persuasif: "Siap Merapikan Keuangan Bisnis Anda Hari Ini?"
* **Footer:**
  * Kolom ringkasan link sitemap, copyright, tautan legalitas (Kebijakan Privasi & Syarat Ketentuan), serta ikon media sosial.

---

### 3.2 Halaman 2: Product Features (Katalog Modul)
* **Pengantar Modul:** Penjelasan bahwa sistem dibangun dengan arsitektur modular yang dapat disesuaikan skala bisnis.
* **Deep Dive Modul (Tata Letak Alternating Zig-Zag: Teks Kiri + Visual Kanan, bergantian):**
  * **Modul 1: Smart Invoicing & Billing**
    * Pembuatan invoice kustom berlogo perusahaan dalam hitungan detik.
    * Pengiriman otomatis via WhatsApp dan email.
    * Otomasi pengingat jatuh tempo pembayaran piutang.
  * **Modul 2: Intelligent Stock & Inventory Costing**
    * Sinkronisasi mutasi stok real-time dari pembelian hingga penjualan.
    * Kalkulasi HPP (FIFO/Average) akurat menghindari salah penentuan harga jual.
    * Notifikasi dini saat persediaan barang menipis (low-stock warning).
  * **Modul 3: Comprehensive Financial Reporting**
    * Neraca Keuangan, Laporan Laba Rugi, dan Arus Kas tersedia seketika tanpa tunggu akhir bulan.
    * Ekspor laporan sekali klik ke format PDF dan Excel.
  * **Modul 4: Aksesibilitas Multi-Cabang & Multi-Peran**
    * Pantau performa finansial beberapa outlet/cabang dalam satu dashboard terpadu.
    * Pembatasan hak akses staf kasir, supervisor, dan akuntan utama.
* **Tabel Perbandingan Versi (Feature Matrix):**
  * Komparasi paket lisensi (misal: Paket UMKM vs Paket Enterprise) memudahkan pemilihan sesuai kebutuhan calon pembeli.

---

### 3.3 Halaman 3: About Us
* **Profil Perusahaan Pengembang:**
  * Visi membantu digitalisasi manajemen finansial UMKM dan korporasi di Indonesia.
  * Cerita singkat di balik pembuatan produk software.
* **Pilar Keamanan & Kepatuhan Data (Financial Data Security):**
  * Enkripsi data standar perbankan (SSL/TLS 256-bit).
  * Sistem pencadangan berkala otomatis (Automated Daily Cloud Backup).
  * Jaminan kerahasiaan data pembukuan klien (Non-Disclosure & Privacy Guarantee).
* **Tim Layanan Purna Jual & Pelatihan:**
  * Komitmen layanan onboarding: pendampingan instalasi, training tim akuntansi klien, dan dukungan teknis harian.

---

### 3.4 Halaman 4: Blog (Resource & Pusat Edukasi)
* **Blog Archive (Daftar Artikel):**
  * Grid responsif menampilkan thumbnail artikel, judul, tanggal publikasi, kategori (Pajak, Kas Usaha, Manajemen Stok), dan ringkasan singkat.
  * Fitur pencarian artikel dan filter berdasarkan topik bahasan.
* **Detail Halaman Artikel (Single Post):**
  * Tipografi yang nyaman dibaca untuk konten panjang.
  * Tombol share ke media sosial & WhatsApp.
  * Sidebar sticky berisi artikel rekomendasi dan banner penawaran coba gratis aplikasi.

---

### 3.5 Halaman 5: Contact Us & Form Permohonan Demo
* **Lead Generation Form Terpadu:**
  * Field:
    * Nama Lengkap (Wajib)
    * Nama Bisnis / Instansi (Wajib)
    * Nomor WhatsApp / Telepon Aktif (Wajib)
    * Alamat Email Perusahaan (Wajib)
    * Estimasi Jumlah Transaksi / Karyawan (Dropdown Pilihan)
    * Catatan Kebutuhan Khusus (Textarea)
  * Validasi form instan sebelum submit.
  * Pengiriman notifikasi data otomatis ke inbox email pemilik bisnis.
* **Informasi Kontak Langsung:**
  * Alamat kantor fisik dan jam operasional tim customer service.
  * Tautan interaktif Google Maps.
* **Floating WhatsApp Action:**
  * Widget tombol WhatsApp melayang di pojok kanan bawah yang selalu tersedia di setiap halaman untuk konsultasi kilat.

---

## 4. Spesifikasi Teknis & Non-Fungsional

### 4.1 Rekomendasi Tech Stack
* **Opsi Utama (Sesuai Preferensi Klien):** **WordPress + Elementor Pro / Gutenberg Blocks + Astra Theme**
  * *Keunggulan:* Klien atau admin internal dapat mengedit teks, memperbarui banner, dan menambah postingan blog baru di kemudian hari tanpa perlu menyentuh kode program.
* **Opsi Alternatif (Custom Code / Super Fast):** **HTML5, Tailwind CSS, Vanilla JavaScript + Formspree / EmailJS API**
  * *Keunggulan:* Loading instan (< 1 detik), tanpa beban database berat, sangat hemat hosting, dan keamanan statis absolut.

### 4.2 Desain Responsif & Kompatibilitas
* Berjalan optimal di seluruh resolusi layar (Mobile Screen 360px - 414px, Tablet 768px, Laptop 1366px, Monitor Full HD 1920px).
* Kompatibel lintas peramban modern (Google Chrome, Safari, Mozilla Firefox, Microsoft Edge).

### 4.3 Kinerja & Optimasi Kecepatan (Web Performance)
* Skor Google PageSpeed Insights ditargetkan **minimal 85+** di mode Desktop maupun Mobile.
* Kompresi seluruh aset visual menggunakan format modern (`.webp`).
* Penerapan teknik *lazy loading* untuk aset gambar showcase dan screenshot produk.

### 4.4 SEO On-Page Dasar
* Konfigurasi meta tag dinamis (Title, Meta Description, Canonical URL).
* Optimasi Open Graph Tag agar tautan yang dibagikan ke WhatsApp dan media sosial otomatis menampilkan thumbnail menarik dan cuplikan deskripsi rapi.
* Pemasangan Sitemap XML dan Robots.txt.

---

## 5. Rencana Jadwal Pengerjaan (Timeline 7 Hari)

| Hari | Fase Pengerjaan | Output / Deliverable |
| :--- | :--- | :--- |
| **Hari 1** | *Setup & Wireframing* | Penyiapan environment hosting/WordPress, setup skema warna brand & tipografi, serta struktur layout kasar. |
| **Hari 2** | *Front Page Development* | Penyelesaian halaman depan lengkap (Hero, Key Features Grid, Dashboard Preview, Testimoni). |
| **Hari 3** | *Product Features Page* | Penyusunan halaman fitur detail per modul (Zig-zag layout, screenshot showcase, feature matrix). |
| **Hari 4** | *About Us & Contact Page* | Penyelesaian halaman profil perusahaan, setup formulir kontak + notifikasi email masuk, serta floating WhatsApp. |
| **Hari 5** | *Blog Page & Content Template* | Setup layout katalog artikel blog, template artikel tunggal, dan input 2 artikel contoh. |
| **Hari 6** | *Responsive & Speed Tuning* | Penyesuaian tampilan mobile, pengujian lintas perangkat, kompresi aset gambar, dan audit PageSpeed. |
| **Hari 7** | *Review & Handover* | Presentasi hasil ke klien, penyesuaian revisi minor, penyerahan akses kredensial admin dan dokumentasi panduan dasar. |

---

## 6. Kriteria Penerimaan (Acceptance Criteria)

1. Kelima halaman navigasi (`/`, `/features`, `/about`, `/blog`, `/contact`) berfungsi normal tanpa tautan rusak (*broken link* 404).
2. Formulir kontak diuji dan terbukti berhasil mengirimkan data notifikasi leads ke email klien secara instan.
3. Desain tampil proporsional pada browser smartphone tanpa pergeseran horizontal (*no horizontal overflow*).
4. Tombol WhatsApp melayang berfungsi mengarahkan pengunjung langsung ke jendela obrolan chat dengan nomor tujuan yang benar.
5. Admin dapat masuk ke dashboard pengelolaan konten dan melakukan pembaruan artikel blog secara mandiri.
