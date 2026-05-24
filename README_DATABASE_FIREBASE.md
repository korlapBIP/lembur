# Update Database Firebase - PWA Laporan Lembur BiP

Versi ini menambahkan database **Firebase Firestore** dengan pendekatan aman dan tidak merusak fitur lama.

## Yang berubah

- Data pekerja tetap disimpan lokal di browser sebagai cadangan aman.
- Jika Firebase belum dikonfigurasi, aplikasi tetap berjalan normal dalam **Mode lokal aman**.
- Jika Firebase sudah aktif, data pekerja akan disinkronkan ke Firestore.
- Saat laporan disimpan/share, ringkasan laporan juga dikirim ke Firestore.
- Ada tombol **Sync Database** untuk sinkron manual data pekerja lokal ke database.
- Ada tombol **Backup JSON** untuk menyimpan backup data pekerja dan draft laporan.

## File baru

- `firebase-config.js` - tempat konfigurasi Firebase.
- `firebase-db.js` - modul koneksi Firestore.
- `firestore.rules` - rules keamanan Firestore.
- `README_DATABASE_FIREBASE.md` - panduan ini.

## Cara mengaktifkan database

1. Buka Firebase Console.
2. Buat project baru.
3. Tambahkan Web App.
4. Salin isi `firebaseConfig` dari Firebase.
5. Buka file `firebase-config.js`.
6. Ganti nilai placeholder `ISI_...` dengan konfigurasi Firebase asli.
7. Ubah:

```js
enabled: false,
```

menjadi:

```js
enabled: true,
```

8. Aktifkan **Firestore Database**.
9. Aktifkan **Authentication > Sign-in method > Anonymous**.
10. Buka tab Firestore Rules, lalu isi dengan isi file `firestore.rules`.
11. Upload semua file ke GitHub repository.

## Struktur data Firestore

```text
/lembur_bip/workers
/lembur_bip/reports/items/{autoId}
```

`workers` menyimpan daftar pekerja.

`reports/items` menyimpan riwayat laporan lembur yang pernah disimpan/share.

## Catatan keamanan penting

Aplikasi ini adalah PWA statis. Tanpa backend/server sendiri, perlindungan terbaik adalah memakai Firebase Authentication dan Firestore Rules.

Rules bawaan versi ini hanya membuka akses untuk pengguna yang sudah login anonymous Firebase. Ini lebih aman daripada database terbuka publik, tetapi untuk data yang sangat sensitif sebaiknya nanti ditingkatkan menjadi login email/password atau role admin khusus.

## Mode fallback

Jika Firebase gagal tersambung, aplikasi tidak berhenti. Data tetap tersimpan di `localStorage` browser dan bisa dibackup dengan tombol **Backup JSON**.
