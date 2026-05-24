// Konfigurasi Firebase untuk PWA Laporan Lembur BiP.
//
// Cara pakai:
// 1. Buat project Firebase gratis di https://console.firebase.google.com/
// 2. Aktifkan Firestore Database.
// 3. Aktifkan Authentication > Sign-in method > Anonymous.
// 4. Buat Web App, lalu salin firebaseConfig ke bawah.
// 5. Ubah enabled menjadi true.
// 6. Terapkan rules dari file firestore.rules.
//
// Catatan keamanan:
// - firebaseConfig bukan password/secret, tetapi tetap jangan tulis data sensitif di aplikasi publik.
// - Rules Firestore wajib dipasang agar database tidak terbuka bebas.

export const firebaseSettings = {
  enabled: false,
  collectionPrefix: 'lembur_bip',
  firebaseConfig: {
  apiKey: "AIzaSyAqdlJRJM-J71y3dvzU1vwa9zBJGVE3U0U",
  authDomain: "pwa-lembur-bip.firebaseapp.com",
  projectId: "pwa-lembur-bip",
  storageBucket: "pwa-lembur-bip.firebasestorage.app",
  messagingSenderId: "265001168008",
  appId: "1:265001168008:web:c9769309d6afec37ed033d"
  }
};
