# **Product Requirements Document (PRD)**

## **Website Profil Desa (Prototype KKN)**

**Versi:** 1.0  
 **Status:** Prototype / MVP (Minimum Viable Product)  
 **Project:** Website Profil Desa KKN  
 **Target Platform:** Web Responsive  
 **Tim:** KKN Ilmu Komputer

---

# **1\. Latar Belakang**

Website Profil Desa bertujuan sebagai media informasi resmi desa yang dapat diakses oleh masyarakat secara online. Website ini hanya berfungsi sebagai media publikasi informasi sehingga **tidak memiliki fitur login, admin, maupun CRUD melalui website**.

Seluruh konten website dikelola menggunakan **Google Spreadsheet** sebagai penyimpanan data dan **Google Drive** sebagai penyimpanan file (gambar maupun dokumen). Website akan mengambil data melalui **Google Apps Script** yang menyediakan REST API.

Dengan pendekatan ini, perangkat desa cukup mengelola data melalui Google Spreadsheet tanpa perlu memahami pengelolaan website.

---

# **2\. Tujuan**

Membangun website profil desa yang:

* Gratis  
* Dapat diakses publik  
* Mudah dikelola perangkat desa  
* Tidak memerlukan hosting backend  
* Tidak memerlukan database server  
* Responsif pada desktop dan mobile

---

# **3\. Target Pengguna**

### **Pengunjung**

Masyarakat umum yang ingin memperoleh informasi mengenai desa.

Hak akses:

* Melihat seluruh informasi  
* Mengunduh dokumen publik  
* Melihat galeri

---

### **Operator Desa**

Perangkat desa yang bertugas memperbarui informasi.

Hak akses:

* Mengubah data melalui Google Spreadsheet  
* Mengunggah file ke Google Drive

Operator **tidak mengakses dashboard website**.

---

# **4\. Ruang Lingkup**

Prototype hanya berfokus pada:

* Menampilkan data  
* Mengambil data dari Google Spreadsheet  
* Menampilkan gambar dari Google Drive  
* Menampilkan dokumen publik

Tidak mencakup:

* Login  
* Register  
* Dashboard Admin  
* CRUD melalui website  
* Komentar  
* Form pengajuan  
* Pembayaran  
* Surat online

---

# **5\. Arsitektur Sistem**

                Google Spreadsheet  
                       │  
                       │  
                Google Apps Script  
                (REST API / JSON)  
                       │  
                       │  
               Cloudflare Pages  
            HTML \+ CSS \+ JavaScript  
                       │  
                       │  
                 Browser Pengunjung

Google Drive  
│  
├── Foto  
├── Banner  
├── Dokumen  
└── Galeri  
---

# **6\. Teknologi**

## **Frontend**

* HTML5  
* CSS3  
* JavaScript (Vanilla)

---

## **Backend**

Google Apps Script

---

## **Database**

Google Spreadsheet

---

## **Storage**

Google Drive

---

## **Hosting**

Cloudflare Pages

---

# **7\. Struktur Spreadsheet**

## **Sheet Profil**

| Key | Value |
| ----- | ----- |
| nama\_desa | Desa Palangan |
| kecamatan | Jangkar |
| kabupaten | Situbondo |
| sejarah | ... |
| visi | ... |
| misi | ... |

---

## **Sheet Berita**

| id | judul | ringkasan | isi | tanggal | thumbnail |
| :---: | :---: | :---: | :---: | :---: | :---: |

---

## **Sheet Perangkat**

| nama | jabatan | foto |
| :---: | :---: | :---: |

---

## **Sheet Galeri**

| id | judul | foto |
| :---: | :---: | :---: |

---

## **Sheet Dokumen**

| judul | kategori | file |
| :---: | :---: | :---: |

---

# **8\. API**

Semua data berasal dari Google Apps Script.

## **GET /profile**

Mengambil data profil desa.

Response

{  
 "nama\_desa":"Desa Palangan",  
 "visi":"...",  
 "misi":"..."  
}  
---

## **GET /news**

Mengambil daftar berita.

---

## **GET /gallery**

Mengambil galeri.

---

## **GET /official**

Mengambil perangkat desa.

---

## **GET /documents**

Mengambil dokumen publik.

---

# **9\. Sitemap**

Home

Profil Desa

Berita

Galeri

Perangkat Desa

Dokumen

Kontak  
---

# **10\. Halaman**

## **Home**

Menampilkan

* Hero Banner  
* Sambutan Kepala Desa  
* Statistik singkat  
* Berita terbaru  
* Galeri terbaru

---

## **Profil Desa**

Menampilkan

* Sejarah  
* Visi  
* Misi  
* Informasi Desa

---

## **Berita**

Menampilkan seluruh berita dalam bentuk card.

Setiap card memiliki

* Thumbnail  
* Judul  
* Ringkasan  
* Tombol Baca Selengkapnya

---

## **Detail Berita**

Menampilkan

* Judul  
* Foto  
* Tanggal  
* Isi berita

---

## **Galeri**

Menampilkan seluruh foto kegiatan desa.

---

## **Perangkat Desa**

Menampilkan

* Foto  
* Nama  
* Jabatan

---

## **Dokumen**

Menampilkan daftar dokumen.

Misalnya

* RPJMDes  
* APBDes  
* Peraturan Desa

Tombol

Lihat

atau

Download

---

## **Kontak**

Menampilkan

* Alamat  
* Nomor Telepon  
* Email  
* Google Maps Embed

---

# **11\. Komponen Frontend**

## **Navbar**

Menu navigasi utama.

---

## **Hero Banner**

Banner desa.

---

## **Card Berita**

Menampilkan ringkasan berita.

---

## **Card Galeri**

Menampilkan foto.

---

## **Card Perangkat**

Menampilkan foto dan jabatan.

---

## **Footer**

Berisi

* Alamat  
* Kontak  
* Copyright

---

# **12\. Alur Data**

Operator Desa

↓

Mengubah Spreadsheet

↓

Apps Script membaca Spreadsheet

↓

Menghasilkan JSON

↓

Website melakukan Fetch

↓

Data ditampilkan kepada pengunjung  
---

# **13\. Pengelolaan File**

Google Drive digunakan untuk menyimpan:

Banner

Foto Berita

Foto Perangkat

Foto Galeri

Dokumen PDF

Spreadsheet hanya menyimpan URL file.

---

# **14\. Responsive**

Website harus mendukung

* Desktop  
* Tablet  
* Mobile

---

# **15\. Non Functional Requirements**

* Loading halaman \< 3 detik pada koneksi normal.  
* Desain responsif untuk berbagai ukuran layar.  
* Website bersifat **read-only** tanpa autentikasi.  
* Data diperbarui secara otomatis saat Spreadsheet berubah (setelah halaman dimuat ulang).  
* API mengembalikan data dalam format JSON.  
* Kode frontend dipisahkan menjadi HTML, CSS, dan JavaScript yang terstruktur.

---

# **16\. MVP (Minimum Viable Product)**

Untuk tahap prototype, fokus pada fitur-fitur berikut:

| Fitur | Prioritas | Status |
| ----- | ----- | ----- |
| Landing Page | Tinggi | Prototype |
| Ambil data Profil dari Spreadsheet | Tinggi | Prototype |
| Ambil data Berita dari Spreadsheet | Tinggi | Prototype |
| Ambil data Galeri dari Spreadsheet | Tinggi | Prototype |
| Menampilkan gambar dari Google Drive | Tinggi | Prototype |
| Halaman Detail Berita | Sedang | Prototype |
| Halaman Dokumen Publik | Sedang | Prototype |
| Responsive Design | Tinggi | Prototype |
| Hosting di Cloudflare Pages | Tinggi | Deployment |
| Google Apps Script API | Tinggi | Backend |

---

# **17\. Rencana Pengembangan (Out of Scope)**

Fitur-fitur berikut **tidak termasuk dalam prototype**, tetapi dapat dipertimbangkan pada versi selanjutnya:

* Dashboard admin berbasis web.  
* Pencarian berita dan dokumen.  
* Filter berdasarkan kategori berita atau UMKM.  
* Integrasi dengan media sosial desa.  
* Halaman UMKM dan potensi wisata yang lebih lengkap.  
* Agenda atau kalender kegiatan desa.  
* Statistik pengunjung.  
* Multi-bahasa (Indonesia/Inggris).  
* Optimasi SEO.  
* Integrasi Progressive Web App (PWA).

## **Catatan Arsitektur**

Agar frontend tetap sederhana dan mudah dipelihara, **Google Apps Script menjadi satu-satunya sumber API** yang diakses oleh website. Frontend tidak berkomunikasi langsung dengan Google Spreadsheet maupun Google Drive.

Dengan pola ini, jika di masa depan struktur Spreadsheet berubah atau desa memutuskan berpindah ke database lain, perubahan hanya dilakukan pada Google Apps Script tanpa perlu memodifikasi kode frontend. Ini merupakan pendekatan yang bersih, modular, dan sangat sesuai untuk proyek KKN yang diharapkan dapat terus digunakan setelah program selesai.

