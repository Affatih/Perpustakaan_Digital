# Sistem Manajemen Perpustakaan Digital

<p align="center">
  <img src="https://img.icons8.com/color/120/000000/library.png" alt="LiberaCatalog Logo" width="120" height="120" style="border-radius: 24px;"/>
</p>

<p align="center">
  <strong>Sistem Manajemen Perpustakaan Modern dengan Arsitektur RESTful API & Decoupled Architecture</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CodeIgniter-EF4223?style=for-the-badge&logo=codeigniter&logoColor=white" alt="CodeIgniter"/>
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman"/>
</p>

---

## Deskripsi Proyek

**LiberaCatalog** adalah sistem informasi manajemen perpustakaan yang dibangun dengan pendekatan *Decoupled Architecture*. Sistem ini memisahkan secara penuh antara layanan penyedia data (*Backend* berbasis CodeIgniter 4) dan antarmuka pengguna (*Frontend* berbasis Vue.js 3). 

Proyek ini dirancang untuk memberikan efisiensi operasional bagi pustakawan dalam mengelola data buku dan peminjaman, serta menjadi media implementasi standar rekayasa perangkat lunak modern seperti keamanan *token-based authentication*, *cross-origin resource sharing* (CORS), dan struktur basis data relasional yang ternormalisasi.

---

## Dokumentasi Visual

### 1. Skema Relasi Database
<img width="1145" height="596" alt="image" src="https://github.com/user-attachments/assets/0241d54e-5299-4f0d-bace-e7dcd50d7caf" />


### 2. Proteksi API (Uji Coba 401 Unauthorized)
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/f29eec80-c12a-4f79-895e-9111d49904b9" />


### Antarmuka Aplikasi (Screenshots)
<p align="center">
  <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/0de5a4a0-1e3d-4acf-ab08-61bab3173a39" />

  <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/c91c73b8-e5bb-4450-8bd9-17f19d65159f" />

  <img width="1365" height="630" alt="image" src="https://github.com/user-attachments/assets/3ae4f816-ba3d-43f7-b22e-25cf9e745c7c" />


</p>

---

## Fitur Utama

- **Manajemen Katalog Terintegrasi:** Operasi CRUD (*Create, Read, Update, Delete*) penuh untuk data buku dengan validasi sisi *server*.
- **Otomasi Lokasi Penyimpanan:** Fitur penentuan rak buku secara dinamis untuk memudahkan pencarian fisik di perpustakaan.
- **Proteksi API Profesional:** Pengamanan rute API menggunakan simulasi token autentikasi.
- **Responsif UI/UX:** Tampilan antarmuka yang bersih dan responsif berkat integrasi penuh dengan TailwindCSS.
- **Normalisasi Database:** Pemisahan struktur data antara *Master Data* (Peminjam) dan *Transaction Data* (Peminjaman) untuk integritas data yang lebih baik.

---

## Tumpukan Teknologi (Tech Stack)

Aplikasi ini dibangun menggunakan ekosistem teknologi terkini:
- **Backend:** CodeIgniter 4 (PHP 8)
- **Frontend:** Vue.js 3 (CDN Build)
- **Styling:** TailwindCSS
- **Database:** MariaDB/MySQL
- **Komunikasi Data:** Axios REST Client

---

## Arsitektur Perangkat Lunak

```text
UAS_Web2_NIM_Nama/
├── backend-api/            # Framework CodeIgniter 4 (Restful API)
│   ├── app/Controllers/    # Logika Bisnis & API Endpoint
│   ├── app/Models/         # Struktur Database & Query
│   └── app/Config/         # Konfigurasi CORS & Routing
├── frontend-spa/           # Single Page Application
│   ├── components/         # Modul komponen (Dashboard, Katalog, Login)
│   ├── app.js              # Router & State Management
│   └── index.html          # Entry Point Aplikasi
└── README.md
```

## Petunjuk Instalasi

Untuk menjalankan proyek ini secara lokal, pastikan Anda telah menginstal **PHP**, **Composer**, **MySQL/MariaDB**, dan **Python** di komputer Anda. Ikuti langkah-langkah berikut:

### 1. Persiapan Database
- Buka **phpMyAdmin** atau *database client* favorit Anda.
- Buat database baru dengan nama `db_elibrary`.
- Impor file database dari folder `backend-api/database.sql` (pastikan Anda sudah mengekspor database Anda ke file tersebut).

### 2. Menjalankan Backend (API)
- Buka terminal dan arahkan ke direktori proyek:
  ```bash
  cd backend-api
