/* Sistem Audio JFFA
   1) Keutamaan: fail MP3 tempatan dalam assets/audio/ JIKA wujud (lihat AUDIO_FILES).
      Semak kewujudan dengan HEAD/fetch — jika tiada, gunakan (2).
   2) Bacaan suara peranti (Web Speech API / speechSynthesis) — terbina dalam
      Windows/Android/pelayar, TIDAK memerlukan internet (suara bergantung peranti).
   Status 1.4.0: fail MP3 dalam assets/audio/ ialah bacaan SINTESIS SUARA (dijana semasa
   pembangunan) untuk bantuan latihan — BUKAN rakaman qari/guru sebenar. Wajib disemak
   guru berkelayakan dan sebaiknya diganti rakaman sebenar. Lihat docs/SENARAI-AUDIO.md. */
const AUDIO_FILES = {
  "doa-doa1": "assets/audio/doa/doa1.mp3",
  "doa-maksud-doa1": "assets/audio/doa/maksud-doa1.mp3",
  "doa-doa2": "assets/audio/doa/doa2.mp3",
  "doa-maksud-doa2": "assets/audio/doa/maksud-doa2.mp3",
  "doa-doa3": "assets/audio/doa/doa3.mp3",
  "doa-maksud-doa3": "assets/audio/doa/maksud-doa3.mp3",
  "doa-doa4": "assets/audio/doa/doa4.mp3",
  "doa-maksud-doa4": "assets/audio/doa/maksud-doa4.mp3",
  "doa-doa5": "assets/audio/doa/doa5.mp3",
  "doa-maksud-doa5": "assets/audio/doa/maksud-doa5.mp3",
  "doa-doa6": "assets/audio/doa/doa6.mp3",
  "doa-maksud-doa6": "assets/audio/doa/maksud-doa6.mp3",
  "doa-doa7": "assets/audio/doa/doa7.mp3",
  "doa-maksud-doa7": "assets/audio/doa/maksud-doa7.mp3",
  "doa-doa8": "assets/audio/doa/doa8.mp3",
  "doa-maksud-doa8": "assets/audio/doa/maksud-doa8.mp3",
  "doa-doa9": "assets/audio/doa/doa9.mp3",
  "doa-maksud-doa9": "assets/audio/doa/maksud-doa9.mp3",
  "doa-doa10": "assets/audio/doa/doa10.mp3",
  "doa-maksud-doa10": "assets/audio/doa/maksud-doa10.mp3",
  "doa-doa11": "assets/audio/doa/doa11.mp3",
  "doa-maksud-doa11": "assets/audio/doa/maksud-doa11.mp3",
  "doa-doa12": "assets/audio/doa/doa12.mp3",
  "doa-maksud-doa12": "assets/audio/doa/maksud-doa12.mp3",
  "doa-doa13": "assets/audio/doa/doa13.mp3",
  "doa-maksud-doa13": "assets/audio/doa/maksud-doa13.mp3",
  "solat-takbir": "assets/audio/solat/takbir.mp3",
  "niat-subuh": "assets/audio/solat/niat-subuh.mp3",
  "niat-subuh-maksud": "assets/audio/solat/niat-subuh-maksud.mp3",
  "niat-zuhur": "assets/audio/solat/niat-zuhur.mp3",
  "niat-zuhur-maksud": "assets/audio/solat/niat-zuhur-maksud.mp3",
  "niat-asar": "assets/audio/solat/niat-asar.mp3",
  "niat-asar-maksud": "assets/audio/solat/niat-asar-maksud.mp3",
  "niat-maghrib": "assets/audio/solat/niat-maghrib.mp3",
  "niat-maghrib-maksud": "assets/audio/solat/niat-maghrib-maksud.mp3",
  "niat-isyak": "assets/audio/solat/niat-isyak.mp3",
  "niat-isyak-maksud": "assets/audio/solat/niat-isyak-maksud.mp3",
  "surah-alikhlas": "assets/audio/solat/surah-alikhlas.mp3",
  "surah-alikhlas-maksud": "assets/audio/solat/surah-alikhlas-maksud.mp3",
  "surah-alfalaq": "assets/audio/solat/surah-alfalaq.mp3",
  "surah-alfalaq-maksud": "assets/audio/solat/surah-alfalaq-maksud.mp3",
  "surah-annas": "assets/audio/solat/surah-annas.mp3",
  "surah-annas-maksud": "assets/audio/solat/surah-annas-maksud.mp3",
  "solat-alfatihah": "assets/audio/solat/alfatihah.mp3",
  "surah-alfatihah": "assets/audio/solat/alfatihah.mp3",
  "surah-alfatihah-maksud": "assets/audio/solat/surah-alfatihah-maksud.mp3",
  "solat-rukuk": "assets/audio/solat/rukuk.mp3",
  "solat-maksud-rukuk": "assets/audio/solat/maksud-rukuk.mp3",
  "solat-iktidal": "assets/audio/solat/iktidal.mp3",
  "solat-maksud-iktidal": "assets/audio/solat/maksud-iktidal.mp3",
  "solat-sujud": "assets/audio/solat/sujud.mp3",
  "solat-maksud-sujud": "assets/audio/solat/maksud-sujud.mp3",
  "solat-duduk-dua-sujud": "assets/audio/solat/duduk-dua-sujud.mp3",
  "solat-maksud-duduk-dua-sujud": "assets/audio/solat/maksud-duduk-dua-sujud.mp3",
  "solat-tahiyat": "assets/audio/solat/tahiyat.mp3",
  "solat-tahiyat-awal": "assets/audio/solat/tahiyat-awal.mp3",
  "solat-maksud-tahiyat": "assets/audio/solat/maksud-tahiyat.mp3",
  "solat-maksud-tahiyat-awal": "assets/audio/solat/maksud-tahiyat-awal.mp3",
  "solat-salam": "assets/audio/solat/salam.mp3",
  "solat-maksud-salam": "assets/audio/solat/maksud-salam.mp3",
  "alquran-alikhlas": "assets/audio/al-quran/al-ikhlas.mp3",
  "hijaiyah-penuh": "assets/audio/al-quran/hijaiyah-penuh.mp3",
  "hijaiyah-01": "assets/audio/al-quran/hijaiyah-01.mp3",
  "hijaiyah-02": "assets/audio/al-quran/hijaiyah-02.mp3",
  "hijaiyah-03": "assets/audio/al-quran/hijaiyah-03.mp3",
  "hijaiyah-04": "assets/audio/al-quran/hijaiyah-04.mp3",
  "hijaiyah-05": "assets/audio/al-quran/hijaiyah-05.mp3",
  "hijaiyah-06": "assets/audio/al-quran/hijaiyah-06.mp3",
  "hijaiyah-07": "assets/audio/al-quran/hijaiyah-07.mp3",
  "hijaiyah-08": "assets/audio/al-quran/hijaiyah-08.mp3",
  "hijaiyah-09": "assets/audio/al-quran/hijaiyah-09.mp3",
  "hijaiyah-10": "assets/audio/al-quran/hijaiyah-10.mp3",
  "hijaiyah-11": "assets/audio/al-quran/hijaiyah-11.mp3",
  "hijaiyah-12": "assets/audio/al-quran/hijaiyah-12.mp3",
  "hijaiyah-13": "assets/audio/al-quran/hijaiyah-13.mp3",
  "hijaiyah-14": "assets/audio/al-quran/hijaiyah-14.mp3",
  "hijaiyah-15": "assets/audio/al-quran/hijaiyah-15.mp3",
  "hijaiyah-16": "assets/audio/al-quran/hijaiyah-16.mp3",
  "hijaiyah-17": "assets/audio/al-quran/hijaiyah-17.mp3",
  "hijaiyah-18": "assets/audio/al-quran/hijaiyah-18.mp3",
  "hijaiyah-19": "assets/audio/al-quran/hijaiyah-19.mp3",
  "hijaiyah-20": "assets/audio/al-quran/hijaiyah-20.mp3",
  "hijaiyah-21": "assets/audio/al-quran/hijaiyah-21.mp3",
  "hijaiyah-22": "assets/audio/al-quran/hijaiyah-22.mp3",
  "hijaiyah-23": "assets/audio/al-quran/hijaiyah-23.mp3",
  "hijaiyah-24": "assets/audio/al-quran/hijaiyah-24.mp3",
  "hijaiyah-25": "assets/audio/al-quran/hijaiyah-25.mp3",
  "hijaiyah-26": "assets/audio/al-quran/hijaiyah-26.mp3",
  "hijaiyah-27": "assets/audio/al-quran/hijaiyah-27.mp3",
  "hijaiyah-28": "assets/audio/al-quran/hijaiyah-28.mp3",
  "akidah-syahadah": "assets/audio/akidah/syahadah.mp3",
  "akidah-selawat": "assets/audio/akidah/selawat.mp3",
  "lafaz-alhamdulillah": "assets/audio/doa/lafaz-alhamdulillah.mp3",
  "lafaz-subhanallah": "assets/audio/doa/lafaz-subhanallah.mp3",
  "lafaz-assalamualaikum": "assets/audio/doa/lafaz-assalamualaikum.mp3",
  "instr-carta-wuduk": "assets/audio/instructions/carta-wuduk.mp3",
  "instr-jenis-air": "assets/audio/instructions/jenis-air.mp3",
  "instr-najis": "assets/audio/instructions/najis.mp3",
  "instr-batal-wuduk": "assets/audio/instructions/batal-wuduk.mp3",
  "instr-solat-waktu": "assets/audio/instructions/solat-waktu.mp3",
  "instr-batal-solat": "assets/audio/instructions/batal-solat-penuh.mp3",
  "instr-jemaah": "assets/audio/instructions/solat-jemaah.mp3",
  "instr-akhlak": "assets/audio/instructions/akhlak.mp3",
  "instr-batal-puasa-rukhsah": "assets/audio/instructions/batal-puasa-rukhsah.mp3",
  "instr-zakat-korban-haji": "assets/audio/instructions/zakat-korban-haji.mp3",
  "instr-carta-solat": "assets/audio/instructions/carta-solat.mp3",
  "instr-salam": "assets/audio/instructions/selamat-datang.mp3",
  "instr-arahan": "assets/audio/instructions/arahan-permainan.mp3",
  "feedback-betul": "assets/audio/feedback/betul.mp3",
  "feedback-belum-tepat": "assets/audio/feedback/belum-tepat.mp3",
  "feedback-tahniah": "assets/audio/feedback/tahniah-bintang.mp3",
  "modul-akidah": "assets/audio/instructions/modul-akidah.mp3",
  "pelajaran-akidah-a1": "assets/audio/instructions/pelajaran-akidah-a1.mp3",
  "pelajaran-akidah-a2": "assets/audio/instructions/pelajaran-akidah-a2.mp3",
  "pelajaran-akidah-a3": "assets/audio/instructions/pelajaran-akidah-a3.mp3",
  "pelajaran-akidah-a4": "assets/audio/instructions/pelajaran-akidah-a4.mp3",
  "pelajaran-akidah-a5": "assets/audio/instructions/pelajaran-akidah-a5.mp3",
  "modul-taharah": "assets/audio/instructions/modul-taharah.mp3",
  "pelajaran-taharah-t1": "assets/audio/instructions/pelajaran-taharah-t1.mp3",
  "pelajaran-taharah-t2": "assets/audio/instructions/pelajaran-taharah-t2.mp3",
  "pelajaran-taharah-t3": "assets/audio/instructions/pelajaran-taharah-t3.mp3",
  "pelajaran-taharah-t4": "assets/audio/instructions/pelajaran-taharah-t4.mp3",
  "modul-solat": "assets/audio/instructions/modul-solat.mp3",
  "pelajaran-solat-s1": "assets/audio/instructions/pelajaran-solat-s1.mp3",
  "pelajaran-solat-s2": "assets/audio/instructions/pelajaran-solat-s2.mp3",
  "pelajaran-solat-s3": "assets/audio/instructions/pelajaran-solat-s3.mp3",
  "pelajaran-solat-s4": "assets/audio/instructions/pelajaran-solat-s4.mp3",
  "modul-alquran": "assets/audio/instructions/modul-alquran.mp3",
  "pelajaran-alquran-q1": "assets/audio/instructions/pelajaran-alquran-q1.mp3",
  "pelajaran-alquran-q2": "assets/audio/instructions/pelajaran-alquran-q2.mp3",
  "pelajaran-alquran-q3": "assets/audio/instructions/pelajaran-alquran-q3.mp3",
  "pelajaran-alquran-q4": "assets/audio/instructions/pelajaran-alquran-q4.mp3",
  "modul-doa": "assets/audio/instructions/modul-doa.mp3",
  "pelajaran-doa-d1": "assets/audio/instructions/pelajaran-doa-d1.mp3",
  "pelajaran-doa-d2": "assets/audio/instructions/pelajaran-doa-d2.mp3",
  "pelajaran-doa-d3": "assets/audio/instructions/pelajaran-doa-d3.mp3",
  "pelajaran-doa-d4": "assets/audio/instructions/pelajaran-doa-d4.mp3",
  "modul-akhlak": "assets/audio/instructions/modul-akhlak.mp3",
  "pelajaran-akhlak-k1": "assets/audio/instructions/pelajaran-akhlak-k1.mp3",
  "pelajaran-akhlak-k2": "assets/audio/instructions/pelajaran-akhlak-k2.mp3",
  "pelajaran-akhlak-k3": "assets/audio/instructions/pelajaran-akhlak-k3.mp3",
  "pelajaran-akhlak-k4": "assets/audio/instructions/pelajaran-akhlak-k4.mp3",
  "modul-ibadah": "assets/audio/instructions/modul-ibadah.mp3",
  "pelajaran-ibadah-i1": "assets/audio/instructions/pelajaran-ibadah-i1.mp3",
  "pelajaran-ibadah-i2": "assets/audio/instructions/pelajaran-ibadah-i2.mp3",
  "pelajaran-ibadah-i3": "assets/audio/instructions/pelajaran-ibadah-i3.mp3",
  "modul-sirah": "assets/audio/instructions/modul-sirah.mp3",
  "pelajaran-sirah-h1": "assets/audio/instructions/pelajaran-sirah-h1-penuh.mp3",
  "pelajaran-sirah-h2": "assets/audio/instructions/pelajaran-sirah-h2.mp3",
  "pelajaran-sirah-h3": "assets/audio/instructions/pelajaran-sirah-h3.mp3",
};
let _audioEl = null, _speaking = false;
function audioStop() {
  if (_audioEl) { try { _audioEl.pause(); _audioEl.currentTime = 0; } catch (e) {} _audioEl = null; }
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  _speaking = false;
  document.querySelectorAll(".btn-dengar").forEach(b => b.classList.remove("sedang-main"));
}
function audioTogglePause() {
  if (_audioEl) { _audioEl.paused ? _audioEl.play() : _audioEl.pause(); return; }
  if ("speechSynthesis" in window) { speechSynthesis.paused ? speechSynthesis.resume() : speechSynthesis.pause(); }
}
async function audioPlay(text, opts) {
  opts = opts || {};
  const settings = (window.JFFA_STATE && window.JFFA_STATE.settings) || { sound: true, kadarSuara: 1 };
  if (settings.sound === false) { alert("Bunyi dimatikan. Hidupkan bunyi di Tetapan untuk mendengar."); return; }
  audioStop();
  const key = opts.key;
  // Cuba fail MP3 tempatan dahulu jika dipetakan (terus main — berfungsi pada
  // http, file:// Electron dan WebView Android; kegagalan -> suara peranti)
  if (key && AUDIO_FILES[key]) {
    try {
      _audioEl = new Audio(AUDIO_FILES[key]);
      _audioEl.playbackRate = opts.rate || settings.kadarSuara || 1;
      _audioEl.onended = () => { _speaking = false; };
      await _audioEl.play();
      _speaking = true;
      return true;
    } catch (e) { _audioEl = null; /* teruskan ke suara peranti */ }
  }
  if (!("speechSynthesis" in window)) { alert("Maaf, peranti ini tiada fungsi bacaan suara. Minta bantuan guru/ibu bapa untuk membacakan."); return false; }
  const u = new SpeechSynthesisUtterance(text);
  const lang = opts.lang || ( /[\u0600-\u06FF]/.test(text) ? "ar-SA" : "ms-MY");
  u.lang = lang; u.rate = opts.rate || settings.kadarSuara || 1;
  // Pilih suara paling sesuai jika ada
  try {
    const vs = speechSynthesis.getVoices();
    const v = vs.find(v => v.lang && v.lang.toLowerCase().startsWith(lang.slice(0, 2))) || vs.find(v => v.lang && v.lang.toLowerCase().startsWith("ms")) || vs[0];
    if (v) u.voice = v;
  } catch (e) {}
  u.onend = () => { _speaking = false; document.querySelectorAll(".btn-dengar").forEach(b => b.classList.remove("sedang-main")); };
  speechSynthesis.speak(u);
  _speaking = true;
  return true;
}
if ("speechSynthesis" in window) { try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices(); } catch (e) {} }
