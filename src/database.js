/* Storan tempatan (localStorage) — berfungsi luar talian & juga pada file:// (Electron).
   Untuk PWA berskala besar, struktur ini boleh dipindahkan ke IndexedDB tanpa ubah UI. */
const DB_KEY = "jffa_progress_v1";
const DB_DEFAULT = {
  nickname: "Sahabat Muslim",
  tahap: 1,
  stars: 0,
  completedLessons: {},   // {moduleId: [lessonId,...]}
  quizScores: {},         // {moduleId: bestPercent}
  quizDone: {},
  memorizedDoa: [],
  badges: [],
  gamesPlayed: {},        // {gameId: count}
  gameBest: {},           // {gameId: bestScore}
  reviewList: [],         // tajuk untuk diulang
  watchedVideos: [],      // Koleksi Video Pendidikan (berasingan daripada modul)
  lastRoute: "",
  settings: { sound: true, kadarSuara: 1, fonBesar: false, Dyslexia: false, kontras: false },
  createdAt: null
};
const DB = {
  load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (!raw) return JSON.parse(JSON.stringify(DB_DEFAULT));
      const d = JSON.parse(raw);
      return Object.assign(JSON.parse(JSON.stringify(DB_DEFAULT)), d, { settings: Object.assign({}, DB_DEFAULT.settings, d.settings || {}) });
    } catch (e) { return JSON.parse(JSON.stringify(DB_DEFAULT)); }
  },
  save(data) { try { localStorage.setItem(DB_KEY, JSON.stringify(data)); } catch (e) { console.warn("Storan penuh/gagal", e); } },
  reset() { localStorage.removeItem(DB_KEY); },
  exportJSON(data) { return JSON.stringify({ app: "JOM FAHAM FARDU AIN V.1", versi: 1, dieksportPada: new Date().toISOString(), kemajuan: data }, null, 2); },
  importJSON(text) {
    const o = JSON.parse(text);
    if (!o || o.app !== "JOM FAHAM FARDU AIN V.1" || !o.kemajuan) throw new Error("Fail sandaran tidak sah.");
    return Object.assign(JSON.parse(JSON.stringify(DB_DEFAULT)), o.kemajuan);
  }
};
