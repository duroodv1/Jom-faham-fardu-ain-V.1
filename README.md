# 🕌 JOM FAHAM FARDU AIN V.1

**“Belajar, Faham dan Amalkan”** — Aplikasi pendidikan Islam **100% luar talian** untuk kanak-kanak **8–11 tahun** (termasuk sokongan murid autisme, ADHD, disleksia dan *slow learner* melalui butang besar, audio ulang, tiada had masa wajib dan mod mesra disleksia).

![Logo aplikasi](assets/images/logo/logo-app.png)

> Logo aplikasi menggunakan imej yang dibekalkan oleh pemilik projek (buku terbuka di bawah bulan sabit & bintang, biru–turquoise) dan telah dijadikan ikon PWA/Android/Windows dalam `assets/icons/`.

---

## ✅ Status V1 — Jujur & Telus (sila baca)

| Bahagian | Status | Catatan |
|---|---|---|
| PWA (web app) lengkap, responsif, boleh dipasang | ✅ **Siap & berfungsi** | 6 modul, kuiz, 10 permainan, kemajuan setempat, service worker *offline* |
| 6 modul + 23 pelajaran sebenar (bukan mockup) | ✅ Siap | Akidah, Taharah, Solat, Akhlak, Ibadah, Sirah |
| Gambar/ilustrasi tempatan | ✅ Siap (SVG vektor) | Cover setiap modul + carta 10 langkah wuduk + 8 pergerakan solat + huruf hijaiyah; tiada pautan gambar luar |
| Teks Arab sebagai teks sebenar | ✅ Siap | Bukan gambar; menggunakan fon Arab sistem peranti (luar talian) |
| Audio bacaan (MP3 tempatan) | ✅ **Siap — 130 fail MP3 luar talian** | Doa (Arab+maksud), bacaan solat, al-Fatihah/al-Ikhlas, 28 huruf hijaiyah, penerangan Melayu semua pelajaran. ⚠️ Bacaan **sintesis suara** (bukan rakaman qari/guru) — wajib disemak & sebaiknya diganti rakaman sebenar; lihat `docs/SENARAI-AUDIO.md` |
| Audio MP3 | ✅ 130 fail (`docs/SENARAI-AUDIO.md`) |
| Kuiz (40 soalan) + 10 permainan berfungsi | ✅ Siap | Logik sebenar, maklum balas serta-merta + penerangan, boleh ulang tanpa penalti |
| Bintang, lencana, profil, sijil digital | ✅ Siap | Disimpan setempat; eksport/import sandaran JSON; reset dengan pengesahan |
| Windows `.EXE` | ✅ **Binari telah dibina** (`releases/JomFahamFarduAin-V1-Setup.exe`, 102MB) | Pemasang NSIS + Electron 31 dibina dalam persekitaran Linux ini. Belum diuji pasang pada Windows sebenar — uji sebelum edar. Alternatif rasmi: GitHub Actions (electron-builder). Ikon fail .exe utama masih ikon lalai Electron (pemasang & pintasan menggunakan ikon app). |
| Android APK | ✅ **Binari telah dibina** (`releases/JomFahamFarduAin-V1.apk`, 34MB) | APK WebView asli (API 24–34) ditandatangani *debug key* — boleh dipasang untuk ujian (sideload). Untuk Play Store: bina AAB *release* dengan keystore sendiri (Capacitor/Android Studio atau GitHub Actions). Belum diuji pada peranti sebenar. |
| Semakan rasmi kandungan agama | 🔴 **Belum mendapat kelulusan rasmi** | **WAJIB disemak guru Pendidikan Islam berkelayakan** sebelum penerbitan rasmi — lihat `docs/RUJUKAN-KANDUNGAN.md` |

**Prinsip projek:** Tiada fail palsu/kosong didakwa siap. Bahagian yang belum lengkap dinyatakan secara terbuka supaya boleh disiapkan mengikut Panduan.

---

## 🚀 Cara Guna (Pengguna)

1. Buka aplikasi (web/PWA, Windows atau Android).
2. Tekan **🚀 Mula Belajar** atau pilih modul di **📚 Semua Modul**.
3. Dalam pelajaran: tekan **🔊 Dengar**, baca isi, tekan **⭐ Tandakan Pelajaran Siap**.
4. Jawab **📝 Kuiz** dan main **🎮 Permainan** untuk mengumpul bintang & lencana.
5. Lihat **⭐ Kemajuan Saya**, **🔁 Ulang Kaji** (kad imbas) dan **🎓 Sijil Digital** apabila semua modul siap.
6. Ibu bapa/guru: tetapkan nama panggilan, tahap 1–3, tulisan besar / mod disleksia di **⚙️ Tetapan**.

**Privasi kanak-kanak:** Hanya nama panggilan disimpan, hanya pada peranti ini. Tiada akaun, tiada iklan, tiada pembelian dalam aplikasi, tiada pengumpulan data.

## 📚 Kandungan 8 Modul

| # | Modul | Fokus |
|---|---|---|
| 1 | Asas Akidah | Allah SWT, Nabi SAW, 6 Rukun Iman, 5 Rukun Islam, malaikat/kitab/rasul |
| 2 | Taharah dan Bersuci | Air, najis, **10 langkah wuduk (RUKUN vs SUNAT dibezakan)**, pembatal wuduk, mandi wajib, tayamum |
| 3 | Solat | 5 waktu & rakaat, syarat wajib/sah, rukun & 8 carta pergerakan, al-Fatihah (Arab/Rumi/maksud), adab masjid |
| 4 | Akhlak dan Adab Islam | Ibu bapa/guru/rakan, makan/tidur/pakaian, urus marah, **keselamatan telefon & internet** |
| 5 | Puasa dan Ibadah | Puasa, niat, sahur/berbuka, pembatal puasa, zakat fitrah, korban, haji/umrah |
| 6 | Sirah Nabi dan Kisah Islam | Kelahiran, wahyu pertama, hijrah, Madinah (**tanpa gambaran wajah nabi**) |

**🎮 10 Permainan:** Kuiz Fardu Ain • Padankan Kad (Memori) • Susun Langkah (5 set) • Cari Pasangan • Betul atau Salah • Isi Tempat Kosong • Cari Jawapan dalam Gambar • Dengar dan Pilih • Misi Pengembaraan Islam (8 perhentian) • Cabaran Ulang Kaji.

**🏅 Lencana:** Juara Akidah, Pakar Wuduk, Hebat Solat, Anak Berakhlak Mulia, Sahabat Ramadan, Pencinta Sirah, Juara Fardu Ain, Pemain Hebat.

## 📴 Luar Talian 100% (PWA)

- `manifest.webmanifest` + `service-worker.js` menyimpan **semua aset teras (48 fail)** dalam cache pada lawatan pertama.
- Selepas itu aplikasi dibuka tanpa internet. Banner dalam app memaparkan status 📴/🌐.
- **Nota GitHub Pages:** Internet diperlukan untuk lawatan/muat turun pertama sahaja; penggunaan seterusnya luar talian selepas caching lengkap.
- Tiada CDN, fon dalam talian atau API luar untuk fungsi teras.

## 📁 Struktur Projek

```
jom-faham-fardu-ain/
├── index.html                  # Rangka app (memuat CSS/JS tempatan sahaja)
├── manifest.webmanifest        # PWA installable
├── service-worker.js           # Cache offline (48 aset)
├── package.json                # Skrip Electron/Capacitor
├── capacitor.config.json       # Android (Capacitor)
├── desktop/main.js             # Electron (Windows)
├── src/
│   ├── app.js                  # Router, UI, enjin kuiz & permainan, ganjaran
│   ├── data.js                 # Semua kandungan 6 modul, doa, bank soalan
│   ├── database.js             # Storan tempatan + eksport/import sandaran
│   ├── audio.js                # Audio: fail MP3 tempatan (jika ada) → suara peranti
│   ├── styles/main.css, responsive.css
│   └── data/*.json             # Eksport JSON kandungan untuk semakan guru
├── assets/
│   ├── images/ (logo, cover modul, carta wuduk/solat SVG)
│   ├── audio/  (slot rakaman sebenar — lihat README-AUDIO.md)
│   └── icons/  (ikon 512–32px daripada logo dibekalkan)
├── docs/ (PANDUAN, RUJUKAN, LAPORAN-UJIAN, SENARAI-ASET)
├── tests/smoke-test.js         # 311 semakan automatik (node tests/smoke-test.js)
└── .github/workflows/          # Pages + bina EXE/APK automatik
```

> Nota seni bina V1: Fail modul distruktur sebagai data berpusat dalam `src/data.js` + eksport JSON per modul (`src/data/*.json`) supaya berfungsi juga melalui `file://` dalam Electron dan mudah disemak guru. Struktur boleh dipecahkan kepada `src/modules/*.js` pada versi seterusnya tanpa mengubah UI.

## 🛠️ Pembangun — Jalan Pantas

```bash
# 1) Jalankan PWA pada komputer (pilih satu)
python3 -m http.server 8000        # kemudian buka http://localhost:8000
# atau: npx --yes serve . -l 8000

# 2) Uji
node tests/smoke-test.js

# 3) Windows EXE (pada Windows)
npm install
npm run desktop:build              # hasil: dist/*.exe (pemasang NSIS + portable)

# 4) Android APK (perlu Android Studio/JDK 17)
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap add android && npx cap sync android
cd android && ./gradlew assembleDebug   # APK ujian: android/app/build/outputs/apk/debug/
```

Panduan langkah demi langkah untuk pemula (GitHub, GitHub Pages, EXE, APK, ujian luar talian): **`docs/PANDUAN-PEMULA.md`**.

## ♿ Kebolehcapaian

Butang besar (min. 52px), kontras mencukupi, teks alternatif gambar, sokongan papan kekunci (fokus jelas, kad imbas boleh dibalik dengan papan kekunci), audio boleh diulang/dijeda, kelajuan suara boleh laras, mod tulisan besar & mesra disleksia, maklum balas positif tanpa memalukan, tiada permainan pantas bermasa wajib.

## 📄 Lesen & Kredit

Kod sumber untuk kegunaan pendidikan pemilik projek. Imej logo dibekalkan oleh pemilik projek. Ilustrasi SVG dihasilkan untuk projek ini. Kandungan agama © penyusun — tertakluk kepada semakan berkelayakan sebelum penerbitan rasmi.
