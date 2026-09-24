# Website Landing Page & Showcase Software Akuntansi

Website produk untuk software akuntansi modern yang berfungsi sebagai media presentasi produk (*product showcase*), sarana edukasi calon klien, sekaligus mesin akuisisi prospek (*lead generation*) untuk mendorong konversi menjadi pengguna trial atau permintaan jadwal demo.

Spesifikasi lengkap ada di [PRD.md](PRD.md).

## Target Audiens

- Pemilik Usaha Kecil dan Menengah (UMKM / SMEs)
- Manajer Keuangan, CFO, dan staf akuntansi perusahaan
- Konsultan akuntansi dan perpajakan independen

## Nilai Utama

- **Terpercaya & Aman** — menonjolkan standar keamanan data finansial perusahaan
- **Modern & Bersih** — tata letak minimalis, navigasi ringkas, visual dashboard representatif
- **Solutif & Informatif** — menjawab kendala pembukuan manual (human error, selisih stok, keterlambatan laporan laba-rugi)

## Struktur Halaman

Website terdiri dari 5 halaman utama yang saling terhubung:

| # | Halaman | Route | Isi Utama |
| :- | :------ | :---- | :-------- |
| 1 | **Front Page** | `/` | Hero + CTA ganda, social proof, grid 6 fitur inti, showcase dashboard interaktif bertab, testimoni, banner CTA penutup |
| 2 | **Product Features** | `/features` | Deep dive 4 modul dengan layout zig-zag (Invoicing, Inventory & HPP, Financial Reporting, Multi-Cabang) plus tabel perbandingan paket lisensi |
| 3 | **About Us** | `/about` | Profil & visi perusahaan pengembang, pilar keamanan dan kepatuhan data, tim layanan purna jual dan pelatihan |
| 4 | **Blog / Resources** | `/blog` | Arsip artikel dengan pencarian dan filter kategori, serta template artikel tunggal dengan sidebar rekomendasi |
| 5 | **Contact Us** | `/contact` | Form permohonan demo/trial dengan validasi instan, informasi kontak & Google Maps, tombol WhatsApp melayang |

## Tech Stack

- **Opsi utama (preferensi klien):** WordPress + Elementor Pro / Gutenberg Blocks + Astra Theme — konten dapat diperbarui admin tanpa menyentuh kode.
- **Opsi alternatif:** HTML5 + Tailwind CSS + Vanilla JavaScript dengan Formspree / EmailJS — loading instan dan hosting hemat.

## Target Non-Fungsional

- Responsif penuh: mobile 360–414px, tablet 768px, laptop 1366px, desktop 1920px
- Kompatibel Chrome, Safari, Firefox, dan Edge
- Skor Google PageSpeed Insights minimal 85+ (desktop & mobile)
- Aset gambar `.webp` dengan *lazy loading*
- SEO on-page: meta tag dinamis, Open Graph, Sitemap XML, dan `robots.txt`

## Timeline

Estimasi 7 hari kerja: setup & wireframing → front page → halaman fitur → about & contact → blog → tuning responsif dan kecepatan → review dan handover. Rincian per hari ada di [PRD.md](PRD.md#5-rencana-jadwal-pengerjaan-timeline-7-hari).

## Implementasi Saat Ini

Website dibangun dengan opsi alternatif: **HTML5 statis + Tailwind CSS (Play CDN) + Vanilla JavaScript**, tanpa proses build.

```
index.html       Front page
features.html    Katalog modul + matriks paket
about.html       Profil, keamanan data, tim support
blog.html        Arsip artikel + modal artikel tunggal
contact.html     Form demo, kontak, peta, FAQ
robots.txt, sitemap.xml
assets/
  css/theme.css            Komponen CSS (tombol, form, tab, modal, widget WA)
  js/tailwind.config.js    Token desain (warna navy/accent, font, shadow, animasi)
  js/main.js               Menu mobile, tab, akordion, validasi form, filter blog, widget WhatsApp
```

Menjalankan secara lokal: buka `index.html` langsung di peramban, atau jalankan static server
(`python -m http.server`) lalu akses `http://localhost:8000`.

**Sebelum go-live:**

- Ganti `CONFIG.waNumber` di `assets/js/main.js` dengan nomor WhatsApp tujuan yang sebenarnya.
- Sambungkan `form[data-validate-form]` di `contact.html` ke endpoint Formspree/EmailJS (saat ini pengiriman masih disimulasikan di sisi klien).
- Ganti placeholder peta di `contact.html` dengan `<iframe>` Google Maps Embed.
- Ganti Tailwind Play CDN dengan hasil build Tailwind CLI agar skor PageSpeed optimal.
- Sesuaikan domain pada tag canonical, Open Graph, `robots.txt`, dan `sitemap.xml`.

## Status

Kelima halaman selesai dan saling terhubung; seluruh tautan internal, anchor, dan aset terverifikasi.
