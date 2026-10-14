# Senarai Aset — Tersedia & Belum Tersedia
## JOM FAHAM FARDU AIN V.1

## ✅ Aset yang WUJUD dalam pakej ini (disemak automatik)

| Aset | Lokasi | Jenis/Catatan |
|---|---|---|
| Logo asal dibekalkan pengguna | `assets/images/logo/logo-asal.jpg` (1024×1024) | Imej dibekalkan pemilik projek |
| Logo app | `assets/images/logo/logo-app.png` | Digunakan di UI & sijil |
| Ikon app 512/192/180/152/144/128/96/72/32 + maskable | `assets/icons/` | Dijana daripada logo dibekalkan; digunakan PWA/Windows/Android |
| Cover 8 modul + Pusat Permainan + Watak | `assets/images/*/cover-*.svg`, `assets/images/games/`, `assets/images/characters/` | SVG vektor asal projek (tajuk teks dalam SVG ialah label Melayu, bukan teks Arab bergambar) |
| Carta langkah wuduk (10 kad) | `assets/images/taharah/wuduk-*.jpg` (+ sandaran `wuduk-*.svg`) | Ilustrasi kartun terperinci watak Ahmad + penerangan teks sebenar dalam app |
| Carta pergerakan solat (8 kad) | `assets/images/solat/gerak-*.svg` | SVG ikon + penerangan teks HTML sebenar |
| Carta huruf hijaiyah (28 huruf interaktif) | Dalam app (`#/audio/quran`, Modul Al-Quran) | Teks Arab sebenar, boleh ditekan & didengar |
| Watak Ahmad & Aisyah | SVG terbenam dalam `src/app.js` (`watakSVG()`) | Watak kanak-kanak konsisten; bukan gambaran nabi |
| Kandungan teks 8 modul, 40 soalan kuiz, bank 10 permainan, 13 doa | `src/data.js` + `src/data/*.json` | Fail sebenar, diuji automatik |
| Fon | Fon sistem peranti (Segoe UI/Verdana; Arab: Traditional Arabic/Scheherazade jika ada) | Tiada muat turun fon — sengaja luar talian. Tiada fail fon dibungkus dalam V1. |

**Hak penggunaan:** Logo = dibekalkan pemilik projek. SVG app = dihasilkan untuk projek ini. Emoji sistem (💧🤲📖 dll) dipaparkan oleh fon emoji peranti pengguna — bukan fail yang diedarkan.

## 🔴 Aset BELUM tersedia (mesti dibekalkan — jangan dakwa siap)

| # | Aset diperlukan | Spesifikasi | Keutamaan |
|---|---|---|---|
| 1 | ~~Rakaman audio doa~~ → **MP3 sintesis telah dijana (121 fail)** — tindakan seterusnya: **rakaman semula oleh guru/qari berkelayakan** untuk menggantikan sintesis | `assets/audio/doa/`, `solat/`, `al-quran/`, `instructions/`, `feedback/`, `akidah/` — senarai: `docs/SENARAI-AUDIO.md` | **Tinggi (penggantian)** |
| 2 | Rakaman bacaan solat & al-Fatihah/surah pendek | `assets/audio/solat/`, `assets/audio/al-quran/` daripada sumber sahih yang disemak | **Tinggi** |
| 3 | Rakaman sebutan huruf hijaiyah & contoh tajwid oleh guru | `assets/audio/al-quran/` | Tinggi |
| 4 | Ilustrasi kartun watak/peristiwa berkualiti penerbitan (jika mahu menggantikan SVG ikon V1) | WebP/PNG dengan alt-text; konsisten Ahmad & Aisyah; **tanpa wajah nabi**; sah hak guna | Sederhana |
| 5 | Ilustrasi solat terperinci (8 pergerakan) masih perlu dijana; wuduk (10 langkah) telah dijana | Semak postur setiap pergerakan dengan guru sebelum menggantikan kad SVG solat | Sederhana |
| 6 | Sijil/keystore penerbitan: Windows code-signing, Android keystore, akaun Google Play (jika perlu) | Keselamatan penerbit; jangan kongsi | Penerbitan |

Selepas membekalkan fail audio, daftarkan pemetaan dalam `AUDIO_FILES` (`src/audio.js`) — app akan menggunakannya secara automatik sebelum suara peranti. Kemas kini jadual ini dan `docs/LAPORAN-UJIAN.md` selepas setiap aset ditambah dan DISAHKAN.
