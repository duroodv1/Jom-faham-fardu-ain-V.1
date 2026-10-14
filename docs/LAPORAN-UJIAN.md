# Laporan Ujian & Status Fungsi — JOM FAHAM FARDU AIN V.1

**Tarikh ujian persekitaran ini:** Semasa pembangunan V1 (pelayan tempatan Python `http.server`, Node 20, ujian automatik `tests/smoke-test.js`).
**Keputusan automatik:** ✅ **311 lulus, 0 gagal** (`node tests/smoke-test.js`). Semakan HTTP: **16/16 laluan teras status 200**. Tiada CDN luar dalam `index.html`.

## Senarai Ujian Mengikut Keperluan Projek

| # | Ujian | Status | Bukti / Catatan |
|---|---|---|---|
| 1 | Semua 6 modul boleh dibuka | ✅ Lulus (logik data & laluan) | Ujian automatik mengesahkan 6 modul; router `#/modul/:id` untuk setiap modul. Ujian klik sebenar pada peranti disyorkan. |
| 2 | Setiap pelajaran kandungan sebenar | ✅ Lulus | 23 pelajaran, setiap satu intro + ≥3 isi (disemak automatik). |
| 3 | Gambar dimuat daripada aset tempatan | ✅ Lulus | Semua cover/carta dirujuk wujud; HTTP 200; tiada imej luar untuk kandungan wajib. |
| 4 | Semua butang berfungsi | 🟡 Separa | Semua butang UI mempunyai handler/laluan dalam kod (tiada butang hiasan untuk fungsi teras). Ujian klik menyeluruh pada peranti sebenar masih diperlukan. |
| 5 | Audio boleh dimainkan tanpa internet | ✅ Lulus (fail) / 🟡 Ujian peranti | **130 fail MP3 tempatan** dijana & disemak (tempoh 0.8–62s, jumlah 17.9MB; semua dirujuk wujud oleh ujian automatik). App memainkan MP3 dahulu, suara peranti sebagai sandaran. Klik Main sebenar pada Windows/Android masih perlu diuji. Audio ialah sintesis suara — bukan rakaman manusia. |
| 6 | Kuiz memberikan markah betul | ✅ Lulus (logik) | Enjin kuiz mengira betul/total & peratus; bank 40 soalan disemak indeks jawapan sah secara automatik. |
| 7 | Permainan boleh dimainkan berulang kali | ✅ Lulus (logik) | 10 permainan dengan keadaan (state) dirawak semula setiap sesi; butang Main Semula disediakan. |
| 8–9 | Kemajuan disimpan & kekal selepas dibuka semula | 🟡 Separa | Storan tempatan + eksport/import/reset dilaksanakan dalam kod. Kekekalan mesti disahkan pada pelayar/peranti sebenar (data bergantung origin/peranti yang sama). |
| 10 | PWA luar talian selepas caching | 🟡 Separa | Manifest sah (standalone, 3 ikon), SW cache-first dengan 48 aset & banner status luar talian. Ujian mod kapal terbang pada peranti sebenar diperlukan ( ikut Panduan E). |
| 11 | Windows EXE boleh dipasang/dijalankan | 🟡 **Binari dibina, belum diuji pasang** | `releases/JomFahamFarduAin-V1-Setup.exe` (102MB, NSIS PE32 + Electron 31, struktur `resources/app` disahkan). Persekitaran ini tiada Windows/Wine untuk ujian jalanan — **uji pemasangan pada Windows 10/11 sebenar sebelum edar**. |
| 12 | Android APK boleh dipasang/dijalankan | 🟡 **Binari dibina & disahkan tandatangan, belum diuji peranti** | `releases/JomFahamFarduAin-V1.apk` (34MB, `com.jomfaham.farduain` v1.0, min API 24/target 34, `apksigner verify` lulus, 245 fail aset). APK *debug-signed* untuk ujian sideload. Uji pada telefon sebenar sebelum edar. |
| 13 | Tiada pautan/aset rosak | ✅ Lulus | Ujian automatik mengesahkan setiap aset dirujuk SW & data wujud di cakera. |
| 14 | Tiada ralat JavaScript menghalang | ✅ Lulus (sintaks) | `node --check` untuk semua fail JS utama berjaya. Ralat masa jalan pada pelayar sebenar perlu disemak di konsol semasa ujian peranti. |
| 15 | Kandungan Arab dipaparkan betul | 🟡 Separa | Teks Arab sebenar dengan `dir=rtl`, `lang=ar` dan saiz besar. Rendering bergantung fon Arab peranti — sahkan pada peranti sasaran bersama guru. |
| 16 | Sesuai telefon/tablet/komputer | 🟡 Separa | CSS responsif + navigasi bawah telefon disediakan. Ujian visual pada saiz skrin sebenar disyorkan. |
| 17 | Kandungan agama ditandakan untuk semakan | ✅ Lulus (proses) | Amaran semakan dipaparkan dalam app (`#/rujukan`), README dan `docs/RUJUKAN-KANDUNGAN.md`. **Kelulusan sebenar belum diperoleh — menunggu penyemak.** |

## Perintah Ujian Semula

```bash
node tests/smoke-test.js
node --check src/data.js && node --check src/app.js && node --check src/audio.js && node --check src/database.js
python3 -m http.server 8000   # uji di http://localhost:8000 (telefon/tablet/komputer + mod kapal terbang)
```

## Perkara Belum Lengkap (ringkasan jujur)

1. Binari **Windows .EXE** dan **Android APK/AAB** belum dibina/diuji dalam persekitaran ini (konfigurasi & workflow lengkap disediakan).
2. **Rakaman audio manusia** (doa/solat/hijaiyah) belum dibekalkan — V1 menggunakan suara peranti.
3. **Semakan/kelulusan rasmi kandungan agama** belum diperoleh.
4. Ujian penerimaan pada peranti sebenar (butang, audio, luar talian, kekekalan data, responsif) perlu dilengkapkan oleh pasukan/pengguna mengikut Panduan Bahagian E.
