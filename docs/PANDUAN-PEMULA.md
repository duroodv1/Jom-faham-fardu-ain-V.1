# Panduan Langkah demi Langkah untuk Pemula
## JOM FAHAM FARDU AIN V.1

Panduan ini mengandaikan anda baru bermula. Ikut turutan — jangan langkau langkah bertanda ⛔.

---

## Bahagian A — Sediakan & Jalankan pada Komputer Anda

**Perlu:** Komputer Windows/Mac/Linux + pelayar moden (Chrome/Edge disyorkan untuk PWA).

Simpan/folderkan projek:
1. Jika anda menerima fail ZIP, ekstrak (Extract All) ke folder mudah seperti `Dokumen/jom-faham-fardu-ain`.
2. Pastikan struktur kekal: `index.html` berada sebaris dengan folder `src` dan `assets`. ⛔ Jangan asingkan `index.html` daripada folder lain.

Jalankan (pilih SATU cara):

### Cara 1 — Python (paling mudah jika ada Python 3)
3. Buka terminal/Command Prompt dalam folder projek.
4. Taip: `python -m http.server 8000`  (Mac/Linux: `python3 -m http.server 8000`)
5. Buka pelayar ke `http://localhost:8000` — aplikasi akan dibuka.

### Cara 2 — VS Code Live Server
3. Pasang VS Code dan sambungan “Live Server”.
4. Buka folder projek dalam VS Code → klik kanan `index.html` → “Open with Live Server”.

### Cara 3 — Node.js
3. Pasang Node.js LTS dari nodejs.org.
4. Dalam folder projek taip: `npx --yes serve . -l 8000` kemudian buka `http://localhost:8000`.

> ⛔ Membuka `index.html` secara terus (double-click, `file://`) kebanyakannya berfungsi untuk belajar, tetapi **Service Worker dan pemasangan PWA memerlukan http/https** (localhost dikira selamat). Gunakan Cara 1–3 untuk ujian penuh.

Semakan pantas: Jalankan `node tests/smoke-test.js` — keputusan sepatutnya **311 lulus, 0 gagal**.

---

## Bahagian B — Muat Naik ke GitHub & Aktifkan GitHub Pages (PWA)

**Perlu:** Akaun GitHub percuma (github.com).

1. Di GitHub, klik **New repository**. Nama cadangan: `jom-faham-fardu-ain`. Pilih Public (percuma untuk Pages). **Jangan** tandakan “Add README” (projek sudah ada README). Klik Create.
2. Muat naik kod — pilih satu:
   - **Tanpa terminal (web):** Pada halaman repo kosong, klik “uploading an existing file”, seret **semua kandungan dalam folder projek** (termasuk folder `src`, `assets`, `docs`, `.github` — perhatikan folder tersembunyi `.github` mesti turut dimuat naik; jika web menyusahkan, gunakan GitHub Desktop di bawah).
   - **GitHub Desktop (disyorkan pemula):** Pasang GitHub Desktop → File → Add Local Repository → pilih folder projek → “Publish repository”.
   - **Terminal (git):**
     ```bash
     git init && git add . && git commit -m "Jom Faham Fardu Ain V.1"
     git branch -M main
     git remote add origin https://github.com/NAMA-ANDA/jom-faham-fardu-ain.git
     git push -u origin main
     ```
3. Aktifkan Pages — pilih satu:
   - **Paling mudah:** Repo → **Settings → Pages** → Source: “Deploy from a branch” → Branch: `main` / `(root)` → Save. Tunggu 1–3 minit. URL anda: `https://NAMA-ANDA.github.io/jom-faham-fardu-ain/`
   - **Automat:** Projek ini sudah ada `.github/workflows/pages.yml` — jika Source dipilih “GitHub Actions”, setiap push ke `main` akan menerbitkan semula secara automatik.
4. Buka URL Pages itu pada telefon dan komputer. Tekan menu pelayar → **“Add to Home screen / Install app”** untuk memasang sebagai PWA.
5. **Uji luar talian:** Selepas app dibuka sekali (tunggu beberapa saat untuk caching), hidupkan mod kapal terbang (Airplane mode) dan buka semula app. Banner akan menunjukkan 📴 Luar Talian dan semua modul/permainan mesti berfungsi. Jika tidak, muat semula sekali semasa dalam talian dan uji semula.

> Fahami perkara ini: GitHub Pages memerlukan internet untuk lawatan & muat turun **pertama**. Luar talian hanya selepas app dipasang/dibuka dan caching selesai.

---

## Bahagian C — Bina Fail Windows (.EXE)

**Perlu:** Windows 10/11 + Node.js LTS. Hasil: pemasang (Setup) + versi portable dalam folder `dist`.

1. Buka Command Prompt/PowerShell dalam folder projek.
2. `npm install`  (muat turun Electron — perlu internet, buat sekali sahaja)
3. Semak app desktop tanpa membina pemasang: `npm run desktop:dev`
4. Bina pemasang: `npm run desktop:build`
5. Ambil fail dalam folder `dist`: fail `*.exe` (NSIS Setup untuk pasang, Portable untuk jalan terus tanpa pasang). Klik dua kali untuk uji pada Windows. App desktop berjalan tanpa pelayar luaran dan tanpa internet; semua aset dibungkus bersama.

**Tanpa komputer Windows / automatik:** Di GitHub repo → tab **Actions** → “Bina Windows EXE dan Android APK” → **Run workflow**. Apabila siap, muat turun artifak **Windows-EXE** (fail .exe) daripada run tersebut.

> Nota jujur: Binari EXE tidak dibina di dalam persekitaran penulisan kod ini (memerlukan Windows/electron-builder). Kod, ikon dan konfigurasi pembinaan telah lengkap dan mesti diuji pada mesin Windows sebenar sebelum diedarkan.

---

## Bahagian D — Bina Android APK

Ada dua laluan. Laluan 1 paling mudah untuk pemula.

### Laluan 1 — PWABuilder (tanpa Android Studio)
1. Terbitkan PWA ke GitHub Pages dahulu (Bahagian B) dan pastikan URL Pages dibuka dengan baik.
2. Pergi ke **pwabuilder.com**, masukkan URL Pages anda, ikut analisis.
3. Pilih **Android → Generate App Package**. Untuk ujian, hasilkan pakej yang boleh dipasang; untuk Google Play gunakan **AAB** dan ikut keperluan akaun pembangun Google (yuran & dasar semasa dikenakan oleh Google).
4. Pasang pada telefon ujian dan uji luar talian (mod kapal terbang).

### Laluan 2 — Capacitor + Android Studio (APK sebenar daripada kod ini)
**Perlu:** Node.js LTS, JDK 17, Android Studio (dengan Android SDK).
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap add android
npx cap sync android
npx cap open android
```
Dalam Android Studio: **Build → Build App Bundle(s)/APK(s) → Build APK(s)**. APK debug berada di `android/app/build/outputs/apk/debug/`. Untuk edaran rasmi, bina **signed release AAB** (Build → Generate Signed Bundle/APK) dan simpan keystore dengan selamat — jangan kongsi keystore/kata laluan.

**Automat melalui GitHub:** Tab Actions → “Bina Windows EXE dan Android APK” → Run workflow → muat turun artifak **Android-APK-Debug** (APK debug untuk ujian sideload; bukan untuk Play Store).

> Nota jujur: APK tidak dibina dalam persekitaran ini kerana tiada Android SDK/JDK binaan di sini. Konfigurasi Capacitor (`capacitor.config.json`, appId `com.jomfaham.farduain`) dan workflow telah disediakan. Uji pada peranti Android sebenar sebelum diedarkan.

---

## Bahagian E — Senarai Ujian Luar Talian & Penerimaan (buat sebelum edar)

- [ ] Buka app dalam talian sekali; tunggu 10 saat (caching).
- [ ] Mod kapal terbang: buka semula — 8 modul, carta wuduk/solat, doa, semua permainan berfungsi.
- [ ] Tutup app sepenuhnya dan buka semula luar talian: bintang/lencana/kemajuan masih ada.
- [ ] Main setiap daripada 10 permainan sekurang-kurangnya sekali hingga tamat.
- [ ] Jawab kuiz setiap modul; sahkan markah, penerangan jawapan dan rekod di Kemajuan Saya.
- [ ] Eksport sandaran JSON → tetapkan semula → Import semula — kemajuan kembali.
- [ ] Uji pada telefon kecil, tablet dan komputer (responsif, butang mudah ditekan).
- [ ] Uji pemasangan PWA (ikon logo muncul di skrin utama).
- [ ] Windows: pasang .EXE pada komputer bersih (tanpa Node) dan jalankan luar talian.
- [ ] Android: pasang APK pada telefon sebenar dan jalankan luar talian.
- [ ] **Kandungan agama disemak & ditandatangani guru berkelayakan** (bacaan Arab, wuduk, solat) — lihat `docs/RUJUKAN-KANDUNGAN.md`.

## Masalah Lazim

| Masalah | Penyelesaian |
|---|---|
| Halaman kosong / gaya tidak muncul | Pastikan anda menjalankan melalui `http://localhost` (bukan membuka fail bersendirian) dan folder `src`/`assets` tidak berasingan daripada `index.html`. |
| PWA tidak boleh dipasang | Gunakan Chrome/Edge, URL mesti HTTPS atau localhost, dan buka app sekurang-kurangnya sekali. Semak `manifest.webmanifest` boleh dicapai. |
| Audio senyap | Hidupkan bunyi di Tetapan; semak suara Melayu/Arab dipasang pada peranti (Tetapan suara sistem). Audio menggunakan suara peranti — lihat Senarai Aset untuk rakaman sebenar. |
| Kemajuan hilang | Kemajuan disimpan pada pelayar/peranti yang sama. Gunakan Eksport sandaran sebelum menukar peranti/membersih data pelayar. |
| GitHub Pages 404 | Tunggu beberapa minit, pastikan Source Pages betul (branch `main` / root atau GitHub Actions) dan fail `index.html` berada di root repo. |
