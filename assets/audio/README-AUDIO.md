# Folder Audio — Cara Membekalkan Rakaman Sebenar (WAJIB dibaca)

V1 semasa menggunakan **bacaan suara terbina peranti** (Web Speech API) supaya app
berfungsi luar talian tanpa fail tambahan. Untuk kualiti dan ketepatan bacaan agama,
rakaman suara manusia oleh **guru/qari berkelayakan** perlu dibekalkan dan DISAHKAN:

| Folder | Kandungan diperlukan | Format |
|---|---|---|
| `doa/` | `doa1.mp3` … `doa13.mp3` (ikut id dalam `src/data.js` APP_DATA.doaList) | MP3/OGG, mono, jelas |
| `solat/` | `takbir.mp3`, `alfatihah.mp3`, bacaan rukuk/sujud dll (ikut sukatan guru) | MP3/OGG |
| `al-quran/` | Huruf hijaiyah & surah pendek daripada sumber sahih yang disemak | MP3/OGG |
| `instructions/` | Arahan permainan & penerangan modul (pilihan) | MP3/OGG |
| `feedback/` | Maklum balas "Betul/Tahniah" (pilihan) | MP3/OGG |

Selepas meletakkan fail, daftarkan dalam `AUDIO_FILES` di `src/audio.js`, contoh:
`"doa-doa1": "assets/audio/doa/doa1.mp3"` — app akan memainkan fail ini secara
automatik dan hanya menggunakan suara peranti jika fail tiada.
Jangan dakwa rakaman wujud/sahih selagi fail belum dibekalkan dan disemak.
