/* JOM FAHAM FARDU AIN V.1 — Enjin aplikasi (router, pelajaran, kuiz, 10 permainan, ganjaran) */
let STATE = DB.load();
if (!STATE.createdAt) { STATE.createdAt = new Date().toISOString(); DB.save(STATE); }
if (!Array.isArray(STATE.adventure)) STATE.adventure = [];
// Migrasi: buang rekod modul yang tidak lagi ditawarkan (contoh: modul dipadam)
{
  const sah = APP_DATA.modules.map(m => m.id);
  [STATE.completedLessons, STATE.quizScores, STATE.quizDone].forEach(obj => { Object.keys(obj || {}).forEach(k => { if (!sah.includes(k)) delete obj[k]; }); });
  const pautanIds = APP_DATA.modules.filter(m => m.pautan).map(m => m.id);
  const pautanBadges = APP_DATA.modules.filter(m => m.pautan && m.lencana).map(m => m.lencana.id);
  pautanIds.forEach(id => { delete (STATE.completedLessons || {})[id]; delete (STATE.quizScores || {})[id]; delete (STATE.quizDone || {})[id]; });
  STATE.adventure = (STATE.adventure || []).filter(id => sah.includes(id) && !pautanIds.includes(id));
  STATE.badges = (STATE.badges || []).filter(id => !["sahabat-quran", "penghafal-doa", ...pautanBadges].includes(id));
  STATE.memorizedDoa = [];
}
window.JFFA_STATE = STATE.settings;
const $app = document.getElementById("app");
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { const x = [...a]; for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[x[i], x[j]] = [x[j], x[i]]; } return x; };
const modById = id => APP_DATA.modules.find(m => m.id === id);
function isExternalModule(mod) { return !!(mod && mod.pautan); }
function modulBelajar() { return APP_DATA.modules.filter(m => !isExternalModule(m)); }
function save() { window.JFFA_STATE = STATE.settings; DB.save(STATE); }
function applySettings() {
  document.body.classList.toggle("font-besar", !!STATE.settings.fonBesar);
  document.body.classList.toggle("dyslexia", !!STATE.settings.Dyslexia);
  document.body.classList.toggle("kontras", !!STATE.settings.kontras);
}
function moduleProgress(mod) {
  if (isExternalModule(mod)) return { done: 0, total: 0, pct: 100, external: true };
  const sahIds = mod.pelajaran.map(l => l.id);
  const done = (STATE.completedLessons[mod.id] || []).filter(id => sahIds.includes(id)).length;
  return { done, total: mod.pelajaran.length, pct: mod.pelajaran.length ? Math.round(done / mod.pelajaran.length * 100) : 0 };
}
function totalStarsDisplay() { return STATE.stars || 0; }
function awardStars(n) { if (n > 0) { STATE.stars = (STATE.stars || 0) + n; } }
function checkBadges() {
  const baru = [];
  modulBelajar().forEach(m => {
    const p = moduleProgress(m);
    if (p.pct === 100 && (STATE.quizScores[m.id] || 0) >= 70 && !STATE.badges.includes(m.lencana.id)) { STATE.badges.push(m.lencana.id); baru.push(m.lencana.nama); awardStars(3); }
  });
  const semuaModul = modulBelajar().every(m => moduleProgress(m).pct === 100);
  if (semuaModul && !STATE.badges.includes("juara-fardu-ain")) { STATE.badges.push("juara-fardu-ain"); baru.push("Juara Fardu Ain"); awardStars(5); }
  if (Object.keys(STATE.gamesPlayed).filter(k => k.startsWith("g")).length >= 10 && !STATE.badges.includes("pemain-hebat")) { STATE.badges.push("pemain-hebat"); baru.push("Pemain Hebat"); awardStars(3); }
  save();
  return baru;
}
function recordGame(gameId, pct) {
  STATE.gamesPlayed[gameId] = (STATE.gamesPlayed[gameId] || 0) + 1;
  const bestSebelum = STATE.gameBest[gameId] || 0;
  if (pct > bestSebelum) { STATE.gameBest[gameId] = pct; if (pct >= 80 && bestSebelum < 80) awardStars(2); else if (pct >= 60 && bestSebelum < 60) awardStars(1); }
  const baru = checkBadges(); save();
  return baru;
}
function completeLesson(modId, lessonId) {
  if (!STATE.completedLessons[modId]) STATE.completedLessons[modId] = [];
  if (!STATE.completedLessons[modId].includes(lessonId)) { STATE.completedLessons[modId].push(lessonId); awardStars(1); }
  const baru = checkBadges(); save(); return baru;
}
function addReview(tajuk) { if (!STATE.reviewList.includes(tajuk)) STATE.reviewList.push(tajuk); save(); }
function speak(text, lang, key) { audioPlay(text, { lang: lang || "ms-MY", key: key }); }
function jsArg(value) {
  return JSON.stringify(value == null ? "" : String(value)).replace(/'/g, "\\u0027").replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}
function watakSVG() {
  return `<figure style="margin:0 auto;max-width:360px">
  <img src="assets/images/characters/watak-utama.jpg" alt="Ilustrasi Ahmad bersongkok dan berbaju biru bersama Aisyah bertudung merah jambu, kawan belajar kamu" style="width:100%;border-radius:18px;display:block">
  <figcaption style="display:flex;justify-content:space-around;margin-top:6px"><span>👦 Ahmad</span><span>🧕 Aisyah</span></figcaption>
  </figure>`;
}
function headerStars() { return `<span class="bintang" aria-label="Jumlah bintang">⭐ ${totalStarsDisplay()} bintang</span> <span class="pill pill-gold">🏅 ${STATE.badges.length} lencana</span>`; }
function audioBar(text, arabText, arabKey, msKey) {
  const msOpts = `{lang:"ms-MY"${msKey ? `, key:${jsArg(msKey)}` : ""}}`;
  const arOpts = `{lang:"ar-SA"${arabKey ? `, key:${jsArg(arabKey)}` : ""}}`;
  return `<div class="aksi-row no-print" role="group" aria-label="Kawalan audio">
    <button class="btn btn-teal btn-dengar" onclick='audioPlay(${jsArg(text)}, ${msOpts})'>🔊 Dengar</button>
    ${arabText ? `<button class="btn btn-blue btn-dengar" onclick='audioPlay(${jsArg(arabText)}, ${arOpts})'>🔊 Dengar Arab (MP3)</button>` : ""}
    <button class="btn btn-gold" onclick="audioTogglePause()">⏸️ Jeda / Sambung</button>
    <button class="btn btn-kelabu" onclick="audioStop()">⏹️ Henti</button>
    <button class="btn btn-putih" style="background:#fff;border:2px solid #00a99d;color:#00796b" onclick='audioPlay(${jsArg(arabText || text)}, ${arabText ? arOpts : msOpts})'>🔁 Ulang</button>
  </div>`;
}
const ARAB_KEY_BY_LESSON = { "akidah-a1": "akidah-syahadah", "akidah-a2": "akidah-selawat", "akidah-a4": "akidah-syahadah", "taharah-t3": "doa-doa12", "solat-s3": "solat-takbir" };
/* ---------- ROUTER ---------- */
function router() {
  applySettings();
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
  if (hash !== "#/tetapan") { STATE.lastRoute = hash; save(); }
  audioStop();
  if (parts.length === 0) return viewHome();
  if (parts[0] === "modul" && parts.length === 1) return viewModules();
  if (parts[0] === "modul" && parts[1]) return viewModule(parts[1]);
  if (parts[0] === "belajar" && parts[1] && parts[2]) return viewLesson(parts[1], parts[2]);
  if (parts[0] === "kuiz" && parts[1]) return viewQuiz(parts[1]);
  if (parts[0] === "permainan" && parts.length === 1) return viewGames();
  if (parts[0] === "permainan" && parts[1]) return viewGame(parts[1]);
  if (parts[0] === "audio") return viewAudio(parts[1] || "arahan");
  if (parts[0] === "video" && parts.length === 1) return viewVideos();
  if (parts[0] === "video" && parts[1]) return viewVideoPlayer(parts[1]);
  if (parts[0] === "ulangkaji") return viewReview();
  if (parts[0] === "kemajuan") return viewProgress();
  if (parts[0] === "tetapan") return viewSettings();
  if (parts[0] === "sijil") return viewCert();
  if (parts[0] === "rujukan") return viewRefs();
  return viewHome();
}
window.addEventListener("hashchange", router);
/* ---------- HOME ---------- */
let tipIdx = Math.floor(Math.random() * APP_DATA.tipsWatak.length);
function viewHome() {
  const sambung = STATE.lastRoute && STATE.lastRoute !== "#/" ? `<a class="btn-besar b-gold" href="${esc(STATE.lastRoute)}"><span class="ic">▶️</span> Sambung Belajar Terakhir</a>` : "";
  const belum = APP_DATA.modules.filter(m => m.pelajaran.length).map(m => ({ m, p: moduleProgress(m) })).find(x => x.p.pct < 100);
  const mulaPelajaran = belum ? (belum.m.pelajaran[belum.p.done] || belum.m.pelajaran[0]) : null;
  const mulaHref = mulaPelajaran ? `#/belajar/${belum.m.id}/${mulaPelajaran.id}` : "#/modul";
  $app.innerHTML = `
  <section class="hero">
    <img class="logo-besar" src="assets/images/logo/logo-app.png" alt="Logo Jom Faham Fardu Ain — buku terbuka di bawah bulan sabit dan bintang">
    <div><h1>JOM FAHAM<br>FARDU AIN <span style="color:#ffc93c">V.1</span></h1>
    <div class="tagline">“Belajar, Faham dan Amalkan”</div>
    <p>Selamat datang, <strong>${esc(STATE.nickname)}</strong>! ${headerStars()} &nbsp; <span class="pill pill-teal">Tahap ${STATE.tahap}</span></p>
    <div class="watak-bubble">${watakSVG()}<p id="tipWatak">💬 ${esc(APP_DATA.tipsWatak[tipIdx])}</p>
    <button class="btn btn-gold" onclick="tipBaru()">💡 Tip Baru</button></div></div>
  </section>
  <div class="grid-btn">
    <a class="btn-besar b-teal" href="${mulaHref}"><span class="ic">🚀</span> Mula Belajar</a>
    <a class="btn-besar b-blue" href="#/modul"><span class="ic">📚</span> Semua Modul</a>
    <a class="btn-besar b-pink" href="#/permainan"><span class="ic">🎮</span> Permainan</a>
    <a class="btn-besar b-purple" href="#/audio/arahan"><span class="ic">🎧</span> Audio</a>
    <a class="btn-besar b-pink" href="#/video"><span class="ic">🎬</span> Koleksi Video</a>
    <a class="btn-besar b-green" href="#/ulangkaji"><span class="ic">🔁</span> Ulang Kaji</a>
    <a class="btn-besar b-gold" href="#/kemajuan"><span class="ic">⭐</span> Kemajuan Saya</a>
    <a class="btn-besar b-putih" href="#/tetapan"><span class="ic">⚙️</span> Tetapan</a>
    ${sambung}
  </div>
  <div class="kad"><h2 style="margin-top:0">📚 Pilih Modul (tekan kad untuk belajar)</h2><div class="modul-grid">
  ${APP_DATA.modules.map(m => { const p = moduleProgress(m); const luar = isExternalModule(m); return `<article class="modul-kad"><img src="${m.cover}" onerror="this.onerror=null;this.src='assets/images/logo/logo-app.png'" alt="Ilustrasi modul ${esc(m.tajuk)}"><div class="isi"><h3>${m.emoji} ${esc(m.tajuk)}</h3><p>${esc(m.ringkas)}</p>${luar ? `<div class="maklum" style="text-align:left">🌐 <strong>Pautan luar:</strong> memerlukan internet.</div><small><strong>Kandungan dalam app telah dibuang.</strong> Kisah dibuka di laman KENALI 25 RASUL.</small><a class="btn btn-teal" href="${esc(m.pautan)}" target="_blank" rel="noopener noreferrer">🌐 Layari Kisah ➜</a>` : `<div class="bar-kemajuan" role="progressbar" aria-valuenow="${p.pct}" aria-valuemin="0" aria-valuemax="100"><div style="width:${p.pct}%"></div></div><small><strong>${p.done}/${p.total} pelajaran</strong> • Kuiz terbaik: ${STATE.quizScores[m.id] || 0}%</small><a class="btn btn-teal" href="#/modul/${m.id}">Buka Modul ➜</a>`}</div></article>`; }).join("")}
  </div></div>
  <div class="kad"><h3>ℹ️ Untuk Ibu Bapa & Guru</h3><p>Modul tempatan aplikasi ini berfungsi luar talian selepas dibuka/dipasang. Khusus bahagian Kisah Para Nabi & Rasul, kandungan dalam app telah digantikan dengan pautan ke laman KENALI 25 RASUL dan memerlukan internet serta bimbingan ibu bapa/guru. Tiada iklan dan tiada pembelian dalam app. Kandungan agama perlu disemak guru berkelayakan — lihat <a href="#/rujukan">Rujukan & Status Semakan</a>. Tiada had masa wajib dalam kuiz dan permainan.</p></div>`;
  window.scrollTo(0, 0);
}
function tipBaru() { tipIdx = (tipIdx + 1) % APP_DATA.tipsWatak.length; const el = document.getElementById("tipWatak"); if (el) el.textContent = "💬 " + APP_DATA.tipsWatak[tipIdx]; }
function viewModules() {
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/'">⬅️ Kembali</button><h1>📚 Semua Modul</h1><p>Pilih modul. Setiap modul ada pelajaran bergambar, audio, permainan dan kuiz. Boleh ulang tanpa penalti.</p><div class="modul-grid">
  ${APP_DATA.modules.map(m => { const p = moduleProgress(m); const luar = isExternalModule(m); return `<article class="modul-kad"><img src="${m.cover}" onerror="this.onerror=null;this.src='assets/images/logo/logo-app.png'" alt="Ilustrasi ${esc(m.tajuk)}"><div class="isi"><h3>${m.emoji} ${esc(m.tajuk)}</h3><p>${esc(m.ringkas)}</p>${luar ? `<small><strong>Pautan luar</strong> • kandungan kisah dibuka di tab baharu (internet diperlukan)</small><div class="aksi-row"><a class="btn btn-teal" href="${esc(m.pautan)}" target="_blank" rel="noopener noreferrer">🌐 Layari Kisah</a><a class="btn btn-blue" href="#/modul/${m.id}">ℹ️ Penerangan</a></div>` : `<div class="bar-kemajuan"><div style="width:${p.pct}%"></div></div><small>${p.pct}% siap • ${p.done}/${p.total} pelajaran</small><div class="aksi-row"><a class="btn btn-teal" href="#/modul/${m.id}">📖 Belajar</a><a class="btn btn-blue" href="#/kuiz/${m.id}">📝 Kuiz</a></div>`}</div></article>`; }).join("")}</div>`;
  window.scrollTo(0, 0);
}
const MOD_GAME = { akidah: "g4", taharah: "g3", solat: "g3", akhlak: "g7", ibadah: "g4", sirah: "g3" };
function viewModule(id) {
  const m = modById(id); if (!m) return viewModules();
  const p = moduleProgress(m);
  if (isExternalModule(m)) {
    $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/modul'">⬅️ Semua Modul</button>
  <div class="kad" style="padding:0;overflow:hidden"><img src="${m.cover}" onerror="this.onerror=null;this.src='assets/images/logo/logo-app.png'" alt="Gambar muka depan ${esc(m.tajuk)}" style="width:100%;height:220px;object-fit:cover;display:block"><div style="padding:18px"><h1 style="margin:4px 0">${m.emoji} ${esc(m.tajuk)}</h1><p>${esc(m.ringkas)}</p>
  <div class="maklum">🌐 <strong>Kandungan dalam aplikasi telah dibuang.</strong> Untuk melayari Kisah Para Nabi & Rasul, tekan butang di bawah. Ia akan membuka <strong>${esc(m.pautanLabel || "KENALI 25 RASUL")}</strong> sebagai laman berasingan. Sambungan internet diperlukan dan kanak-kanak perlu dibimbing oleh ibu bapa/guru.</div>
  <a class="btn btn-teal" style="display:block;text-align:center;font-size:1.2rem;padding:16px" href="${esc(m.pautan)}" target="_blank" rel="noopener noreferrer">🌐 ${esc(m.pautanLabel || "Layari Kisah Para Nabi & Rasul")} ➜</a>
  <p><small>Pautan: ${esc(m.pautan)}</small></p>
  <div class="aksi-row"><a class="btn btn-kelabu" href="#/modul">⬅️ Kembali ke Semua Modul</a><a class="btn btn-blue" href="#/">🏠 Laman Utama</a></div>
  </div></div>`;
    window.scrollTo(0, 0);
    return;
  }
  const jenisKad = id === "taharah" ? `<div class="kad"><h2>🖼️ Kad Gambar: Jenis-Jenis Air</h2>
  <img src="assets/images/taharah/jenis-air.jpg" alt="Ilustrasi Ahmad bersongkok dan Aisyah bertudung di tepi telaga, sungai dan laut dengan hujan, gunung bersalji dan embun pada daun" style="width:100%;border-radius:18px">
  <p>Ada <strong>4 jenis air</strong> yang perlu kita kenal supaya wuduk dan mandi kita sah. Tekan <strong>Dengar</strong> untuk penerangan penuh poster ini.</p>
  ${audioBar("Jenis-jenis Air. " + APP_DATA.jenisAir.map((j, i) => `${i + 1}. ${j.nama}. ${j.status}. ${j.maksud}`).join(" ") + " Sumber Air Mutlak ada tujuh: " + APP_DATA.sumberMutlak.map(x => x.replace(/^\S+\s/, "")).join(", ") + ". Ingat, air paip yang bersih di rumah kita ialah Air Mutlak.", null, null, "instr-jenis-air")}
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px">${APP_DATA.jenisAir.map(j => `<div style="border:3px solid ${{ betul: "#43a047", tengah: "#fb8c00", salah: "#e53935" }[j.kelas]};border-radius:18px;padding:14px;background:#fff"><div style="font-size:2.2rem">${j.emo}</div><h3 style="margin:4px 0">${esc(j.nama)}</h3><span class="pill" style="background:${{ betul: "#e8f5e9", tengah: "#fff3e0", salah: "#ffebee" }[j.kelas]}">${esc(j.status)}</span><p>${esc(j.maksud)}</p><p><strong>Contoh:</strong> ${esc(j.contoh)}</p></div>`).join("")}</div>
  <h3>🌊 7 Sumber Air Mutlak (Suci Lagi Menyucikan)</h3>
  <p>${APP_DATA.sumberMutlak.map(x => `<span class="pill pill-teal" style="margin:3px;font-size:1rem;padding:8px 14px">${esc(x)}</span>`).join("")}</p>
  <div class="maklum betul">🏠 <strong>Ingat ya!</strong> Air paip yang bersih di rumah kita ialah <strong>Air Mutlak</strong> — gunakannya untuk berwuduk. Jika kamu tidak pasti tentang sesuatu air, tanya guru atau ibu bapa dahulu.</div></div>` : "";
  const gridKad = items => `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px">${items.map(x => `<div style="border:3px solid #26c6da;border-radius:18px;overflow:hidden;background:#fff">${x.img ? `<img src="${x.img}" alt="Ilustrasi ${esc(x.t || x.nama)}" style="width:100%;height:150px;object-fit:cover;object-position:center top">` : `<div style="height:150px;display:flex;align-items:center;justify-content:center;font-size:3.4rem;background:#e0f2f1" aria-hidden="true">${x.emo}</div>`}<div style="padding:12px"><h3 style="margin:4px 0">${x.emo} ${esc(x.t || x.nama)}</h3>${x.contoh ? `<p><strong>Contoh:</strong> ${esc(x.contoh)}</p>` : ""}<p>${x.d ? esc(x.d) : `<strong>Cara menyucikan:</strong> ${esc(x.cara)}`}</p>${x.cara && x.d ? `<p><strong>Cara:</strong> ${esc(x.cara)}</p>` : ""}</div></div>`).join("")}</div>`;
  const najisKad = id === "taharah" ? `<div class="kad"><h2>🧽 Kenali Najis & Cara Menyucikannya</h2><p>Najis ialah kekotoran yang perlu disucikan sebelum kita solat. Ada <strong>3 jenis najis</strong>:</p>
  ${audioBar("Jenis-jenis Najis dan Cara Menyucikannya. " + APP_DATA.najisJenis.map((n, i) => `${i + 1}. ${n.nama}. Contohnya: ${n.contoh} ${n.cara}`).join(" ") + " Langkah umum menyucikan najis: " + APP_DATA.langkahSucikan.join(". "), null, null, "instr-najis")}
  ${gridKad(APP_DATA.najisJenis)}
  <h3>🪜 Langkah Umum Menyucikan Najis</h3><ol>${APP_DATA.langkahSucikan.map(x => `<li style="margin:6px 0">${esc(x)}</li>`).join("")}</ol></div>` : "";
  const batalKad = id === "taharah" ? `<div class="kad"><h2>⚠️ Perkara yang Membatalkan Wuduk</h2><p>Jika berlaku mana-mana perkara ini, wuduk kita <strong>terbatal</strong> dan perlu diambil semula sebelum solat. Tiada apa yang memalukan — Ahmad dan Aisyah pun belajar perkara yang sama!</p>
  ${audioBar("Perkara yang Membatalkan Wuduk. " + APP_DATA.batalWuduk.map((b, i) => `${i + 1}. ${b.t}. ${b.d}`).join(" ") + " Jika wuduk terbatal, ambil wuduk semula sebelum solat.", null, null, "instr-batal-wuduk")}
  ${gridKad(APP_DATA.batalWuduk)}
  <div class="maklum betul">🤲 <strong>Ingat:</strong> Terbatal wuduk bukan dosa dan bukan perkara memalukan. Basuh tangan, ambil wuduk semula dan kita sedia untuk solat.</div></div>` : "";
  const waktuSolatKad = id === "solat" ? `<div class="kad"><h2>🕐 Kad Gambar: Solat Lima Waktu</h2><p>Setiap solat fardu ada waktu dan bilangan rakaatnya. <strong>Ingat urutan rakaat: 2 – 4 – 4 – 3 – 4.</strong></p>
  ${audioBar("Solat Lima Waktu. " + APP_DATA.solatWaktu.map(w => `${w.t}, ${w.rakaat} rakaat. ${w.masa}. ${w.d}`).join(" ") + " Ingat urutan bilangan rakaat: Subuh 2, Zuhur 4, Asar 4, Maghrib 3 dan Isyak 4.", null, null, "instr-solat-waktu")}
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px">${APP_DATA.solatWaktu.map(w => `<div style="border:3px solid #7e57c2;border-radius:18px;overflow:hidden;background:#fff"><img src="${w.img}" alt="Ilustrasi solat ${esc(w.t)} mengikut suasana waktunya" style="width:100%;height:150px;object-fit:cover;object-position:center top"><div style="padding:12px"><h3 styl${w.emo} ${esc(w.t)}</h3><span class="pill pill-gold">${w.rakaat} Rakaat</span> <span class="pill pill-teal">${esc(w.masa)}</span><p>${esc(w.d)}</p><div style="border-top:2px dashed #ce93d8;margin-top:10px;padding-top:10px"><strong>🤲 Niat Solat ${esc(w.t)}:</strong><div class="arab" lang="ar" dir="rtl" style="font-size:1.3rem;line-height:2">${esc(w.niatArab)}</div><p class="rumi">${esc(w.niatRumi)}</p><p class="maksud"><strong>Maksud:</strong> ${esc(w.niatMaksud)}</p>${audioBar("Niat solat " + w.t + ". " + w.niatMaksud, w.niatArab, "niat-" + w.t.toLowerCase(), "niat-" + w.t.toLowerCase() + "-maksud")}</div></div></div>`).join("")}</div></div>` : "";
  const batalSolatKad = id === "solat" ? `<div class="kad"><h2>⚠️ Perkara yang Membatalkan Solat</h2><p>Semasa solat, kita menjaga adab dan tumpuan. Perkara berikut boleh membatalkan solat — jika berlaku, jangan panik; betulkan dan mulakan semula mengikut bimbingan guru.</p>
  ${audioBar("Perkara yang Membatalkan Solat. " + APP_DATA.batalSolat.map((b, i) => `${i + 1}. ${b.t}. ${b.d}`).join(" "), null, null, "instr-batal-solat")}
  ${gridKad(APP_DATA.batalSolat)}</div>` : "";
  const akhlakKadSection = id === "akhlak" ? `<div class="kad"><h2>💛 Kad Gambar: Akhlak & Adab Islam</h2><p>Tekan <strong>Dengar</strong> dan pilih satu kad untuk diamalkan hari ini.</p>
  ${audioBar("Akhlak dan Adab Islam. " + APP_DATA.akhlakKad.map((k, i) => `${i + 1}. ${k.t}. ${k.d}`).join(" "), null, null, "instr-akhlak")}
  ${gridKad(APP_DATA.akhlakKad)}</div>` : "";
  const ibadahKadSection = id === "ibadah" ? `<div class="kad"><h2>🌙 Perkara yang Membatalkan Puasa</h2>
  ${audioBar("Perkara yang Membatalkan Puasa. " + APP_DATA.batalPuasa.map((b, i) => `${i + 1}. ${b.t}. ${b.d}`).join(" ") + " Pengenalan Kelonggaran dalam Ibadah Puasa. " + APP_DATA.rukhsahPuasa.map(r => `${r.t}. ${r.d}`).join(" "), null, null, "instr-batal-puasa-rukhsah")}
  ${gridKad(APP_DATA.batalPuasa)}
  <h2>💛 Pengenalan Kelonggaran (Rukhsah) dalam Puasa</h2>
  <img src="assets/images/ibadah/rukhsah-puasa.jpg" alt="Ilustrasi ibu memberi ubat dan air kepada Ahmad yang sakit di katil" style="width:100%;border-radius:18px">
  <p>Allah memberi kelonggaran kepada hamba-Nya yang mempunyai keuzuran. Kelonggaran bukan alasan untuk meninggalkan puasa tanpa sebab yang dibenarkan.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px">${APP_DATA.rukhsahPuasa.map(r => `<div style="border:3px solid #ffb300;border-radius:18px;padding:14px;background:#fff"><div style="font-size:2.2rem">${r.emo}</div><h3 style="margin:4px 0">${esc(r.t)}</h3><p>${esc(r.d)}</p></div>`).join("")}</div>
  <div class="maklum betul">👨‍👩‍👧 Kanak-kanak yang belum baligh berlatih berpuasa mengikut kemampuan dan kesihatan dengan bimbingan ibu bapa. Jika tidak sihat atau tidak mampu, beritahu orang dewasa.</div></div>
  ${APP_DATA.ibadahInfo.map(info => `<div class="kad"><h2>${info.emo} ${esc(info.tajuk)}</h2><img src="${info.img}" alt="Ilustrasi ${esc(info.tajuk)}" style="width:100%;border-radius:18px">${info.id === "zakat-fitrah" ? "" : ""}<ol>${info.points.map(pt => `<li style="margin:7px 0">${esc(pt)}</li>`).join("")}</ol></div>`).join("")}
  <div class="kad"><h2>🎧 Dengar Penerangan Zakat, Korban, Haji & Umrah</h2>${audioBar(APP_DATA.ibadahInfo.map(info => `${info.tajuk}. ` + info.points.join(" ")).join(" "), null, null, "instr-zakat-korban-haji")}</div>` : "";
  const extra = id === "taharah" ? `<div class="kad"><h2>💧 Carta Langkah Berwuduk (dengan gambar)</h2><p>Tekan “Dengar Langkah” untuk mendengar penerangan. <strong>RUKUN</strong> mesti dilakukan, <strong>SUNAT</strong> digalakkan mengikut ajaran guru.</p><img src="assets/images/taharah/wuduk-langkah-penuh.jpg" alt="Carta penuh sembilan langkah berwuduk" style="width:100%;border-radius:14px;margin:6px 0 10px" loading="lazy">${audioBar(APP_DATA.wudukLangkah.map((s, i) => `Langkah ${i + 1}: ${s.t}. ${s.d}`).join(" "), null, null, "instr-carta-wuduk")}<div class="langkah-grid">${APP_DATA.wudukLangkah.map((s, i) => `<div class="langkah-kad"><img src="${s.img}" alt="Ilustrasi langkah wuduk: ${esc(s.t)}"><span class="n">${i + 1}</span><h4>${s.emo} ${esc(s.t)}</h4><p style="padding:0 10px">${esc(s.d)}</p></div>`).join("")}</div></div>` : "";
  const extraSolat = id === "solat" ? `<div class="kad"><h2>🧎 Carta Pergerakan Solat</h2>${audioBar(APP_DATA.solatGerak.map((s, i) => `Pergerakan ${i + 1}: ${s.t}. ${s.d}`).join(" "), null, null, "instr-carta-solat")}<div class="langkah-grid">${APP_DATA.solatGerak.map((s, i) => `<div class="langkah-kad"><img src="${s.img}" alt="Ilustrasi pergerakan solat: ${esc(s.t)}"><span class="n">${i + 1}</span><h4>${s.emo} ${esc(s.t)}</h4><p style="padding:0 10px">${esc(s.d)}</p></div>`).join("")}</div></div>` : "";
  const aturanKad = id === "solat" ? `<div class="kad"><h2>🕌 Aturan Solat</h2><p>Poster tertib solat dari niat hingga memberi salam. Ikuti langkah demi langkah bersama guru.</p><img src="${APP_DATA.aturanSolat}" alt="Poster Aturan Solat: tertib 13 langkah solat dari niat, takbiratul ihram, rukuk, sujud, tahiyat hingga salam" style="width:100%;border-radius:18px"></div>` : "";
  const bacaRingkasKad = id === "solat" ? `<div class="kad"><h2>📖 Baca Ringkas Dalam Solat</h2><p>Poster bacaan ringkas dalam solat: takbiratul ihram, al-Fatihah, surah ringkas, rukuk, iktidal, sujud, duduk antara dua sujud, tasyahhud akhir dan salam. Baca dengan tartil dan khusyuk — semak bacaan bersama guru.</p><img src="${APP_DATA.bacaRingkasSolat}" alt="Poster Baca Ringkas Dalam Solat: 9 langkah bacaan solat dari takbiratul ihram hingga salam" style="width:100%;border-radius:18px"></div>` : "";
  const surahPendekKad = id === "solat" ? `<div class="kad"><h2>📖 Baca Ringkas Dalam Solat — Surah Pendek</h2><p>Surah pendek yang selalu dibaca dalam solat selepas Surah Al-Fatihah. Tekan <strong>Dengar</strong> untuk maksud dalam Bahasa Melayu dan <strong>Dengar Arab (MP3)</strong> untuk bacaan penuh setiap surah (dimulakan dengan Basmalah).</p><p><em>Al-Mu'awwidzatain (Al-Falaq &amp; An-Nas) ialah surah perlindungan — dibaca juga pada waktu pagi dan petang serta sebelum tidur.</em></p>${APP_DATA.surahPendek.map(b => `<div class="kad" style="border:2px solid #a5d6a7"><h3>${b.emo} ${esc(b.tajuk)}</h3><p>${esc(b.info)}</p>${b.id === "alfatihah" ? "" : '<div class="arab" lang="ar" dir="rtl" style="font-size:1.15rem">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>'}<div class="arab" lang="ar" dir="rtl">${esc(b.arab)}</div><p class="rumi">${esc(b.rumi)}</p><p class="maksud"><strong>Maksud:</strong> ${esc(b.maksud)}</p>${audioBar(b.tajuk + ". Maksudnya: " + b.maksud, b.audioArab, "surah-" + b.id, "surah-" + b.id + "-maksud")}</div>`).join("")}</div>` : "";
  const bacaSolatKad = id === "solat" ? `<div class="kad"><h2>🕌 Bacaan Dalam Solat (MP3)</h2><p>Tekan <strong>Dengar</strong> untuk maksud dalam Bahasa Melayu dan <strong>Dengar Arab (MP3)</strong> untuk bacaan Arab. Berlatih bersama guru untuk sebutan yang betul.</p><div class="kad" style="border:2px solid #ffe082"><h3>☝️ Takbiratul Ihram</h3><div class="arab" lang="ar" dir="rtl">ٱللَّهُ أَكْبَرُ</div><p class="rumi">Allahu Akbar</p><p class="maksud"><strong>Maksud:</strong> Allah Maha Besar.</p>${audioBar("Allahu Akbar. Maksudnya Allah Maha Besar.", "ٱللَّهُ أَكْبَرُ", "solat-takbir")}</div>${APP_DATA.solatBacaan.map(b => `<div class="kad" style="border:2px solid #ffe082"><h3>${b.emo} ${esc(b.tajuk)}</h3><div class="arab" lang="ar" dir="rtl">${esc(b.arab)}</div><p class="rumi">${esc(b.rumi)}</p><p class="maksud"><strong>Maksud:</strong> ${esc(b.maksud)}</p>${audioBar(b.tajuk + ". " + b.maksud, b.audioArab, "solat-" + b.id, "solat-maksud-" + b.id)}</div>`).join("")}</div>` : "";
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/modul'">⬅️ Semua Modul</button>
  <div class="kad" style="padding:0;overflow:hidden"><img src="${m.cover}" onerror="this.onerror=null;this.src='assets/images/logo/logo-app.png'" alt="Gambar muka depan modul ${esc(m.tajuk)}" style="width:100%;height:220px;object-fit:cover;display:block"><div style="padding:18px"><h1 style="margin:4px 0">${m.emoji} ${esc(m.tajuk)}</h1><p>${esc(m.ringkas)}</p>
  <div class="bar-kemajuan"><div style="width:${p.pct}%"></div></div><p><strong>Status kemajuan: ${p.pct}%</strong> (${p.done}/${p.total} pelajaran) • Kuiz terbaik: ${STATE.quizScores[m.id] || 0}% • Lencana: ${esc(m.lencana.emoji)} ${esc(m.lencana.nama)} ${STATE.badges.includes(m.lencana.id) ? "✅ Sudah diperoleh" : "(siapkan semua pelajaran + kuiz ≥70%)"}</p>
  <div class="aksi-row"><a class="btn btn-teal" href="#/belajar/${m.id}/${m.pelajaran[0].id}">📖 Mula Belajar</a><button class="btn btn-blue" onclick='speak(${jsArg(m.tajuk + ". " + m.ringkas)}, "ms-MY", "modul-" + m.id)'>🎧 Dengar Penerangan</button><a class="btn btn-pink" href="#/permainan/${MOD_GAME[m.id]}">🎮 Main</a><a class="btn btn-gold" href="#/kuiz/${m.id}">📝 Kuiz Modul</a></div></div></div>
  <h2>📖 Senarai Pelajaran</h2>
  ${m.pelajaran.map((l, i) => `<a class="pelajaran-item" href="#/belajar/${m.id}/${l.id}"><span class="emo" aria-hidden="true">${l.emoji}</span><span style="flex:1"><strong>${i + 1}. ${esc(l.tajuk)}</strong><br><small>${esc(l.intro.slice(0, 90))}…</small></span><span>${(STATE.completedLessons[m.id] || []).includes(l.id) ? "✅ Siap" : "▶️ Belajar"}</span></a>`).join("")}
  ${jenisKad}${najisKad}${extra}${batalKad}${waktuSolatKad}${extraSolat}${aturanKad}${bacaRingkasKad}${surahPendekKad}${bacaSolatKad}${batalSolatKad}${akhlakKadSection}${ibadahKadSection}`;
  window.scrollTo(0, 0);
}
function viewLesson(modId, lessonId) {
  const m = modById(modId); if (!m) return viewModules();
  const idx = m.pelajaran.findIndex(l => l.id === lessonId); const l = m.pelajaran[idx]; if (!l) return viewModule(modId);
  const siap = (STATE.completedLessons[modId] || []).includes(lessonId);
  const teksDengar = `${l.tajuk}. ${l.intro} ${l.isi.join(" ")} ${l.tip || ""}`;
  const prev = idx > 0 ? m.pelajaran[idx - 1] : null, next = idx < m.pelajaran.length - 1 ? m.pelajaran[idx + 1] : null;
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/modul/${m.id}'">⬅️ Kembali ke ${esc(m.tajuk)}</button>
  <article class="kad"><div style="text-align:center;font-size:4rem" aria-hidden="true">${l.emoji}</div><h1 style="text-align:center">${esc(l.tajuk)}</h1>${l.gambar ? `<img src="${l.gambar}" alt="Gambar pelajaran ${esc(l.tajuk)}" style="width:100%;border-radius:18px;margin:8px 0">` : ""}
  <p style="text-align:center"><span class="pill pill-teal">${esc(m.tajuk)}</span> <span class="pill pill-gold">Pelajaran ${idx + 1} / ${m.pelajaran.length}</span> ${siap ? '<span class="pill pill-pink">✅ Sudah Siap</span>' : ""}</p>
  <p style="font-size:1.08rem">${esc(l.intro)}</p>
  ${audioBar(teksDengar, l.arab || null, ARAB_KEY_BY_LESSON[m.id + "-" + l.id], "pelajaran-" + m.id + "-" + l.id)}
  ${l.arab ? `<div class="arab" lang="ar" dir="rtl">${esc(l.arab)}</div><p class="rumi">${esc(l.rumi || "")}</p><p class="maksud"><strong>Maksud:</strong> ${esc(l.maksud || "")}</p>` : ""}
  <h2>📌 Perkara Penting</h2><ul>${l.isi.map(x => `<li style="margin:8px 0">${esc(x)}</li>`).join("")}</ul>
  ${l.sumber ? `<div class="maklum">📚 <strong>Sumber kisah:</strong> ${esc(l.sumber)}. Fakta kisah ini diambil daripada Al-Quran; penceritaannya diringkaskan dan dipermudahkan untuk kanak-kanak — semak bersama guru Pendidikan Islam untuk pembelajaran lanjut. (Tiada gambaran rupa fizikal para nabi dalam aplikasi ini.)</div>` : ""}
  ${l.tip ? `<div class="maklum betul">💡 <strong>Tip Ahmad & Aisyah:</strong> ${esc(l.tip)}</div>` : ""}
  <div class="aksi-row"><button class="btn btn-gold" onclick="siapPelajaran('${m.id}','${l.id}')">${siap ? "✅ Sudah Ditandakan Siap" : "⭐ Tandakan Pelajaran Siap (+1 bintang)"}</button>
  <a class="btn btn-pink" href="#/kuiz/${m.id}">📝 Jawab Kuiz Modul</a><a class="btn btn-blue" href="#/permainan/${MOD_GAME[m.id]}">🎮 Main Permainan Berkaitan</a></div>
  <div class="aksi-row">${prev ? `<a class="btn btn-kelabu" href="#/belajar/${m.id}/${prev.id}">⬅️ ${esc(prev.tajuk)}</a>` : ""}${next ? `<a class="btn btn-teal" href="#/belajar/${m.id}/${next.id}">${esc(next.tajuk)} ➡️</a>` : `<a class="btn btn-teal" href="#/modul/${m.id}">🏁 Tamat Modul — Kembali</a>`}</div>
  <p><small>Nota guru/ibu bapa: Kandungan ini untuk pembelajaran asas. Semak bacaan Arab dan hukum bersama guru Pendidikan Islam berkelayakan. Lihat <a href="#/rujukan">Rujukan & Semakan</a>.</small></p></article>`;
  window.scrollTo(0, 0);
}
function siapPelajaran(modId, lessonId) {
  const baru = completeLesson(modId, lessonId);
  speak("Tahniah! Pelajaran ditandakan siap. Kamu mendapat satu bintang." + (baru.length ? " Lencana baru: " + baru.join(", ") : ""));
  alert("🎉 Tahniah! Pelajaran siap. ⭐ +1 bintang" + (baru.length ? "\n🏅 Lencana baru: " + baru.join(", ") : ""));
  router();
}
/* ---------- KUIZ ENGINE (tiada had masa) ---------- */
let quizState = null;
function startQuizRunner(soalan, tajuk, onFinish, gameId) {
  quizState = { soalan: shuffle(soalan).map(q => ({ ...q, pilihAcak: shuffle(q.pilih.map((t, i) => ({ t, betul: i === q.j }))) })), idx: 0, betul: 0, tajuk, onFinish, gameId, jawab: false };
  renderQuizSoalan();
}
function renderQuizSoalan() {
  const q = quizState.soalan[quizState.idx];
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/permainan'">⬅️ Keluar (boleh sambung lain kali)</button>
  <div class="kad"><h1>${esc(quizState.tajuk)}</h1><p>Soalan ${quizState.idx + 1} / ${quizState.soalan.length} • Betul: ${quizState.betul} • ⏰ Tiada had masa — fikir perlahan-lahan ya!</p>
  <div class="bar-kemajuan"><div style="width:${Math.round(quizState.idx / quizState.soalan.length * 100)}%"></div></div>
  ${q.emo ? `<div style="text-align:center;font-size:2.6rem" aria-hidden="true">${q.emo}</div>` : ""}
  <h2>${esc(q.q || q.s || q.tanya)}</h2>
  ${q.perluDengar ? `<button class="btn btn-blue btn-besar" style="width:100%" onclick='audioPlay(${jsArg(q.perluDengar)},{lang:"ar-SA", key:${jsArg(q.perluKey || "")}})'>🔊 Tekan untuk Dengar Lafaz (MP3)</button>` : ""}
  <div id="pilihanBox">${q.pilihAcak.map((p, i) => `<button class="pilihan" onclick="jawabQuiz(${i}, this)">${esc(p.t)}</button>`).join("")}</div><div id="maklumBox"></div></div>`;
  window.scrollTo(0, 0);
}
function jawabQuiz(i, btn) {
  if (quizState.jawab) return; quizState.jawab = true;
  const q = quizState.soalan[quizState.idx]; const betul = q.pilihAcak[i].betul;
  document.querySelectorAll(".pilihan").forEach((b, bi) => { b.disabled = true; if (q.pilihAcak[bi].betul) b.classList.add("betul"); });
  if (betul) { quizState.betul++; speak("Betul! Tahniah, bagus sekali!"); }
  else { btn.classList.add("salah"); speak("Tidak mengapa, kita belajar bersama. " + (q.terang || "Jawapan yang betul telah ditandakan hijau.")); addReview(quizState.tajuk + ": " + (q.q || q.s || q.tanya)); STATE.reviewList = STATE.reviewList.slice(-30); save(); }
  const last = quizState.idx >= quizState.soalan.length - 1;
  document.getElementById("maklumBox").innerHTML = `<div class="maklum ${betul ? "betul" : "salah"}">${betul ? "✅ Betul! Hebat!" : "💛 Belum tepat — tidak mengapa!"}<br>${esc(q.terang || "")}</div>
  <button class="btn btn-teal btn-besar" style="width:100%" onclick="nextQuiz()">${last ? "🏁 Lihat Keputusan" : "Soalan Seterusnya ➜"}</button>`;
}
function nextQuiz() {
  quizState.idx++; quizState.jawab = false;
  if (quizState.idx >= quizState.soalan.length) {
    const total = quizState.soalan.length, betul = quizState.betul, pct = Math.round(betul / total * 100);
    let baru = [];
    if (quizState.gameId) baru = recordGame(quizState.gameId, pct);
    if (quizState.onFinish) quizState.onFinish(pct, betul, total);
    save();
    $app.innerHTML = `<div class="kad" style="text-align:center"><div style="font-size:4rem">${pct >= 80 ? "🏆" : pct >= 50 ? "🌟" : "💪"}</div><h1>Keputusan: ${betul} / ${total} (${pct}%)</h1>
    <p class="bintang">${"⭐".repeat(pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0) || "Teruskan berlatih!"}</p>
    <p>${pct >= 80 ? "Tahniah! Kamu sangat faham. Teruskan amalan baik ini!" : pct >= 50 ? "Bagus! Sedikit lagi untuk menjadi pakar. Ulang pelajaran dan cuba lagi — tiada penalti." : "Tidak mengapa! Semua pakar bermula sebagai pelajar. Jom ulang pelajaran bersama Ahmad & Aisyah."}</p>
    ${baru.length ? `<div class="maklum betul">🏅 Lencana baru diperoleh: <strong>${esc(baru.join(", "))}</strong></div>` : ""}
    <p>Jumlah bintang kamu kini: <strong>⭐ ${STATE.stars}</strong></p>
    <div class="aksi-row" style="justify-content:center"><button class="btn btn-teal" onclick="location.reload()">🔁 Main Semula</button><a class="btn btn-blue" href="#/permainan">🎮 Pusat Permainan</a><a class="btn btn-gold" href="#/kemajuan">⭐ Kemajuan Saya</a><a class="btn btn-kelabu" href="#/">🏠 Utama</a></div></div>`;
    speak(`Tahniah! Kamu menjawab ${betul} daripada ${total} soalan dengan betul. Markah kamu ${pct} peratus.`);
    window.scrollTo(0, 0);
    return;
  }
  renderQuizSoalan();
}
function viewQuiz(modId) {
  const m = modById(modId); if (!m) return viewModules();
  if (isExternalModule(m) || !m.kuiz || !m.kuiz.length) return viewModule(modId);
  const qs = m.kuiz.filter(q => (q.tahap || 1) <= Math.max(1, STATE.tahap) + 1);
  startQuizRunner(qs.length ? qs : m.kuiz, `📝 Kuiz ${m.tajuk}`, (pct) => {
    const sebelum = STATE.quizScores[modId] || 0;
    if (pct > sebelum) STATE.quizScores[modId] = pct;
    STATE.quizDone[modId] = true; checkBadges();
  }, null);
  // rekod skor modul melalui pembalut khas: guna gameId null, skor disimpan di onFinish; lencana disemak selepas tamat di nextQuiz melalui checkBadges tambahan
  const _nf = quizState.onFinish;
  quizState.onFinish = (pct, b, t) => { _nf && _nf(pct, b, t); const baru = checkBadges(); if (baru.length) setTimeout(() => {}, 0); };
}
/* ---------- PERMAINAN ---------- */
const GAMES = [
  { id: "g1", nama: "Kuiz Fardu Ain", emo: "📝", desc: "Soalan campuran semua modul mengikut tahap kamu." },
  { id: "g2", nama: "Padankan Kad (Memori)", emo: "🃏", desc: "Balikkan kad dan cari pasangan istilah–maksud yang sama." },
  { id: "g3", nama: "Susun Langkah", emo: "🧩", desc: "Susun langkah wuduk, solat, Rukun Islam, Ramadan dan sirah." },
  { id: "g4", nama: "Cari Pasangan", emo: "🔗", desc: "Padankan istilah dengan maksudnya." },
  { id: "g5", nama: "Betul atau Salah", emo: "✅", desc: "Tentukan pernyataan betul atau salah." },
  { id: "g6", nama: "Isi Tempat Kosong", emo: "✏️", desc: "Pilih perkataan yang betul untuk melengkapkan ayat." },
  { id: "g7", nama: "Cari Jawapan dalam Gambar", emo: "🖼️", desc: "Lihat gambar ikon dan pilih jawapan yang betul." },
  { id: "g8", nama: "Dengar dan Pilih", emo: "🎧", desc: "Dengar lafaz dan pilih maksud yang betul." },
  { id: "g9", nama: "Misi Pengembaraan Islam", emo: "🗺️", desc: "Selesaikan misi setiap modul dalam peta pengembaraan." },
  { id: "g10", nama: "Cabaran Ulang Kaji", emo: "🏆", desc: "Cabaran campuran untuk menguji semua yang telah dipelajari." }
];
function viewGames() {
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/'">⬅️ Kembali</button><h1>🎮 Pusat Permainan Interaktif</h1><p>10 permainan yang boleh dimainkan berulang kali. <strong>Tiada had masa wajib</strong>, tiada penalti untuk jawapan salah — setiap kesilapan ada penerangan.</p>
  <img src="assets/images/games/cover-games.svg" alt="Ilustrasi Pusat Permainan Jom Faham Fardu Ain" style="width:100%;border-radius:20px">
  <div class="modul-grid" style="margin-top:16px">${GAMES.map((g, i) => `<article class="modul-kad"><div class="isi"><div style="font-size:2.6rem">${g.emo}</div><h3>${i + 1}. ${esc(g.nama)}</h3><p>${esc(g.desc)}</p><small>Dimain: ${STATE.gamesPlayed[g.id] || 0} kali • Terbaik: ${STATE.gameBest[g.id] || 0}%</small><a class="btn btn-pink" href="#/permainan/${g.id}">▶️ Main Sekarang</a></div></article>`).join("")}</div>`;
  window.scrollTo(0, 0);
}
function viewGame(id) {
  if (id === "g1") { const all = APP_DATA.modules.flatMap(m => m.kuiz.map(q => ({ ...q, emo: q.emo || m.emoji }))); const tapis = all.filter(q => (q.tahap || 1) <= STATE.tahap + 1); return startQuizRunner(shuffle(tapis.length ? tapis : all).slice(0, 8), "📝 Kuiz Fardu Ain (Campuran)", null, "g1"); }
  if (id === "g5") return startQuizRunner(APP_DATA.trueFalse.map(x => ({ q: x.s, pilih: ["✅ Betul", "❌ Salah"], j: x.j ? 0 : 1, terang: x.terang, emo: "✅" })), "✅ Betul atau Salah", null, "g5");
  if (id === "g6") return startQuizRunner(APP_DATA.fillBlank.map(x => ({ q: x.s, pilih: x.pilih, j: x.j, terang: "Ayat lengkap: " + x.s.replace("___", x.pilih[x.j]), emo: "✏️" })), "✏️ Isi Tempat Kosong", null, "g6");
  if (id === "g7") return startQuizRunner(APP_DATA.pictureBank.map(x => ({ q: x.q, pilih: x.pilih, j: x.j, terang: x.terang, emo: x.emo })), "🖼️ Cari Jawapan dalam Gambar", null, "g7");
  if (id === "g8") return startQuizRunner(APP_DATA.listenBank.map(x => ({ q: x.tanya, pilih: x.pilih, j: x.j, terang: `Lafaz: “${x.bunyi}”.`, emo: "🎧", perluDengar: x.bunyi, perluKey: x.fail })), "🎧 Dengar dan Pilih", null, "g8");
  if (id === "g10") {
    const campur = shuffle([...APP_DATA.modules.flatMap(m => m.kuiz).slice(0, 20), ...APP_DATA.trueFalse.map(x => ({ q: x.s + " (Betul atau Salah?)", pilih: ["Betul", "Salah"], j: x.j ? 0 : 1, terang: x.terang })), ...APP_DATA.fillBlank.map(x => ({ q: x.s, pilih: x.pilih, j: x.j, terang: "Jawapan: " + x.pilih[x.j] }))]).slice(0, 10);
    return startQuizRunner(campur, "🏆 Cabaran Ulang Kaji", null, "g10");
  }
  if (id === "g2") return gameMemory();
  if (id === "g3") return gameOrderMenu();
  if (id === "g4") return gameMatch();
  if (id === "g9") return gameAdventure();
  return viewGames();
}
/* Memori */
let memState = null;
function gameMemory() {
  const pairs = shuffle(APP_DATA.matchPairs).slice(0, 6);
  const cards = shuffle(pairs.flatMap((p, i) => [{ pid: i, teks: p.a, jenis: "Istilah" }, { pid: i, teks: p.b, jenis: "Maksud" }]));
  memState = { cards, buka: [], jumpa: new Set(), langkah: 0 };
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/permainan'">⬅️ Pusat Permainan</button><div class="kad"><h1>🃏 Padankan Kad (Memori)</h1><p>Tekan dua kad. Jika istilah dan maksudnya sepadan, kad kekal terbuka. Tiada had masa!</p><p id="memInfo">Pasangan dijumpai: 0 / ${pairs.length}</p><div class="memori-grid">${cards.map((c, i) => `<button class="memori-kad" id="mem-${i}" onclick="memFlip(${i})" style="background:#00a99d;color:#fff">❓<br><small>Tekan</small></button>`).join("")}</div><div id="memDone"></div></div>`;
}
function memFlip(i) {
  const c = memState.cards[i]; if (memState.jumpa.has(i) || memState.buka.includes(i) || memState.buka.length >= 2) return;
  const el = document.getElementById("mem-" + i); el.style.background = "#fff8e7"; el.style.color = "#17324a"; el.style.border = "3px solid #ffc93c"; el.innerHTML = `<small>${c.jenis}</small><br>${esc(c.teks)}`;
  memState.buka.push(i);
  if (memState.buka.length === 2) {
    const [a, b] = memState.buka; memState.langkah++;
    if (memState.cards[a].pid === memState.cards[b].pid) { memState.jumpa.add(a); memState.jumpa.add(b); memState.buka = []; speak("Betul! Pasangan yang sepadan!"); }
    else setTimeout(() => { memState.buka.forEach(k => { const e = document.getElementById("mem-" + k); e.style.background = "#00a99d"; e.style.color = "#fff"; e.style.border = "none"; e.innerHTML = "❓<br><small>Tekan</small>"; }); memState.buka = []; speak("Belum sepadan. Cuba ingat kedudukan kad dan cuba lagi!"); }, 1100);
    const jumpaCount = memState.jumpa.size / 2, total = memState.cards.length / 2;
    document.getElementById("memInfo").textContent = `Pasangan dijumpai: ${jumpaCount} / ${total} • Cubaan: ${memState.langkah}`;
    if (jumpaCount === total) { const pct = Math.max(50, Math.round(100 - memState.langkah)); const baru = recordGame("g2", pct); document.getElementById("memDone").innerHTML = `<div class="maklum betul">🏆 Tahniah! Semua pasangan dijumpai! Skor anggaran: ${pct}% ${baru.length ? "• Lencana: " + esc(baru.join(", ")) : ""}</div><button class="btn btn-teal" onclick="gameMemory()">🔁 Main Semula</button> <a class="btn btn-blue" href="#/permainan">🎮 Permainan Lain</a>`; speak("Tahniah! Kamu menjumpai semua pasangan kad!"); }
  }
}
/* Susun langkah */
let orderState = null;
function gameOrderMenu() {
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/permainan'">⬅️ Pusat Permainan</button><div class="kad"><h1>🧩 Susun Langkah</h1><p>Pilih set yang ingin dilatih:</p>${Object.entries(APP_DATA.orderSets).map(([k, v]) => `<button class="pilihan" onclick="gameOrder('${k}')">🧩 ${esc(v.tajuk)}</button>`).join("")}</div>`;
}
function gameOrder(key) {
  const set = APP_DATA.orderSets[key];
  orderState = { key, betulUrutan: set.items, pilihan: shuffle(set.items.map((t, i) => ({ t, asal: i }))), progres: 0, salah: 0 };
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="gameOrderMenu()">⬅️ Pilih Set Lain</button><div class="kad"><h1>🧩 ${esc(set.tajuk)}</h1><p>${esc(set.arahan)} Tekan langkah yang betul satu demi satu mengikut urutan.</p>
  <h3>Urutan kamu:</h3><div id="orderDone" style="min-height:52px"></div><div id="orderMsg"></div><h3>Pilih langkah seterusnya:</h3><div id="orderBtns">${orderState.pilihan.map((p, i) => `<button class="susun-item" id="ord-${i}" onclick="orderPick(${i})">${esc(p.t)}</button>`).join("")}</div></div>`;
}
function orderPick(i) {
  const p = orderState.pilihan[i];
  if (p.asal === orderState.progres) {
    document.getElementById("ord-" + i).disabled = true; document.getElementById("ord-" + i).style.opacity = ".35";
    const d = document.createElement("div"); d.className = "maklum betul"; d.style.padding = "10px"; d.textContent = `${orderState.progres + 1}. ${p.t}`; document.getElementById("orderDone").appendChild(d);
    orderState.progres++; speak("Betul! Langkah seterusnya?");
    if (orderState.progres >= orderState.betulUrutan.length) { const pct = Math.max(40, 100 - orderState.salah * 10); const baru = recordGame("g3", pct); document.getElementById("orderMsg").innerHTML = `<div class="maklum betul">🏆 Susunan lengkap dan betul! Skor: ${pct}% ${baru.length ? "• Lencana: " + esc(baru.join(", ")) : ""}</div><button class="btn btn-teal" onclick="gameOrderMenu()">🔁 Main Set Lain</button> <a class="btn btn-blue" href="#/permainan">🎮 Pusat Permainan</a>`; speak("Tahniah! Susunan kamu lengkap dan betul!"); }
  } else { orderState.salah++; document.getElementById("orderMsg").innerHTML = `<div class="maklum salah">💛 Belum tepat. Fikir semula: langkah ke-${orderState.progres + 1} sepatutnya selepas “${orderState.progres ? orderState.betulUrutan[orderState.progres - 1] : "permulaan"}”. Tiada penalti — cuba lagi!</div>`; speak("Belum tepat. Cuba fikir langkah yang sepatutnya. Kamu boleh melakukannya!"); }
}
/* Cari pasangan (padanan) */
let matchState = null;
function gameMatch() {
  const pairs = shuffle(APP_DATA.matchPairs).slice(0, 6);
  matchState = { pairs, kiriPilih: null, selesai: new Set(), betul: 0 };
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/permainan'">⬅️ Pusat Permainan</button><div class="kad"><h1>🔗 Cari Pasangan</h1><p>Tekan satu <strong>istilah</strong> (kiri), kemudian tekan <strong>maksud</strong> yang betul (kanan).</p><p id="matchInfo">Berjaya: 0 / ${pairs.length}</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px"><div><h3>Istilah</h3>${pairs.map((p, i) => `<button class="susun-item" id="mk-${i}" onclick="matchKiri(${i})">${esc(p.a)}</button>`).join("")}</div>
  <div><h3>Maksud</h3>${shuffle(pairs.map((p, i) => ({ ...p, asal: i }))).map(p => `<button class="susun-item" id="mv-${p.asal}" onclick="matchKanan(${p.asal})">${esc(p.b)}</button>`).join("")}</div></div><div id="matchMsg"></div></div>`;
}
function matchKiri(i) { if (matchState.selesai.has(i)) return; matchState.kiriPilih = i; document.querySelectorAll('[id^="mk-"]').forEach(e => e.classList.remove("aktif")); document.getElementById("mk-" + i).classList.add("aktif"); }
function matchKanan(i) {
  if (matchState.kiriPilih === null) { document.getElementById("matchMsg").innerHTML = `<div class="maklum salah">👈 Pilih istilah di sebelah kiri dahulu.</div>`; return; }
  if (i === matchState.kiriPilih) {
    matchState.selesai.add(i); matchState.betul++;
    ["mk-" + i, "mv-" + i].forEach(id => { const e = document.getElementById(id); e.disabled = true; e.style.background = "#e8f5e9"; e.style.borderColor = "#43a047"; });
    document.getElementById("matchInfo").textContent = `Berjaya: ${matchState.betul} / ${matchState.pairs.length}`;
    document.getElementById("matchMsg").innerHTML = `<div class="maklum betul">✅ Betul! “${esc(matchState.pairs[i].a)}” berpasangan dengan maksudnya.</div>`; speak("Betul! Pasangan yang tepat!");
    matchState.kiriPilih = null;
    if (matchState.betul >= matchState.pairs.length) { const baru = recordGame("g4", 100); document.getElementById("matchMsg").innerHTML += `<div class="maklum betul">🏆 Semua pasangan selesai! ${baru.length ? "Lencana: " + esc(baru.join(", ")) : ""}</div><button class="btn btn-teal" onclick="gameMatch()">🔁 Main Semula</button>`; speak("Tahniah! Semua pasangan telah dijumpai!"); }
  } else { document.getElementById("matchMsg").innerHTML = `<div class="maklum salah">💛 Belum sepadan. Maksud bagi “${esc(matchState.pairs[matchState.kiriPilih].a)}” ialah sesuatu yang lain. Cuba lagi!</div>`; speak("Belum sepadan. Cuba maksud yang lain."); }
}
/* Misi pengembaraan */
function gameAdventure() {
  const modulMisi = modulBelajar();
  const done = (STATE.adventure || []).filter(id => modulMisi.some(m => m.id === id));
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/permainan'">⬅️ Pusat Permainan</button><div class="kad"><h1>🗺️ Misi Pengembaraan Islam</h1><p>Merentas ${modulMisi.length} perhentian ilmu tempatan! Setiap misi mengandungi 3 soalan daripada modul tersebut. Bahagian Kisah Para Nabi & Rasul tidak termasuk kerana ia dibuka melalui pautan luar.</p>
  <p>Kemajuan misi: <strong>${done.length} / ${modulMisi.length}</strong></p>
  ${modulMisi.map((m, i) => `<div class="pelajaran-item"><span class="emo">${done.includes(m.id) ? "🏁" : "📍"}</span><span style="flex:1"><strong>Perhentian ${i + 1}: ${esc(m.tajuk)}</strong><br><small>${done.includes(m.id) ? "✅ Misi selesai — boleh ulang untuk latihan" : "Misi: jawab 3 soalan " + esc(m.tajuk)}</small></span><button class="btn ${done.includes(m.id) ? "btn-kelabu" : "btn-teal"}" onclick="missionStart('${m.id}')">${done.includes(m.id) ? "🔁 Ulang Misi" : "🚀 Mula Misi"}</button></div>`).join("")}
  <div id="misiDone">${done.length >= modulMisi.length ? `<div class="maklum betul">👑 <strong>Pengembaraan Lengkap!</strong> Kamu telah menyelesaikan semua misi tempatan. Syabas, Juara Fardu Ain!</div>` : ""}</div></div>`;
}
function missionStart(modId) {
  const m = modById(modId);
  if (!m || isExternalModule(m) || !m.kuiz || !m.kuiz.length) return gameAdventure();
  startQuizRunner(shuffle(m.kuiz).slice(0, 3), `🗺️ Misi: ${m.tajuk}`, (pct) => {
    if (pct >= 60 && !STATE.adventure.includes(modId)) { STATE.adventure.push(modId); }
    if ((STATE.adventure || []).filter(id => modulBelajar().some(mm => mm.id === id)).length >= modulBelajar().length) recordGame("g9", 100); else recordGame("g9", pct);
  }, "g9");
  // Selepas tamat, butang kembali khusus: pengguna boleh guna Pusat Permainan; misi dikemas kini apabila melawat semula Misi.
}
/* ---------- AUDIO CENTRE ---------- */
/* ---------- Koleksi Video Pendidikan (berasingan daripada modul) ---------- */
function formatTempohVideo(saat) { const s = Math.max(0, Math.round(saat || 0)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
function formatSaizVideo(bait) { return bait >= 1048576 ? (bait / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(bait / 1024)) + " KB"; }
function semuaVideoKoleksi() {
  const offline = (APP_DATA.koleksiVideo || []).map(v => ({ ...v, _jenis: "offline", _sumberLabel: "Offline MP4" }));
  const online = (APP_DATA.videoPautan || []).map(v => ({ ...v, _jenis: "online", _sumberLabel: v.platform || "Online" }));
  return [...offline, ...online];
}
function youtubeIdDaripadaPautan(url) {
  const m = String(url || "").match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : "";
}
function videoEmbedUrl(v) {
  if (v.embed) return v.embed;
  const pautan = v.pautan || "";
  const yid = youtubeIdDaripadaPautan(pautan);
  if (yid) return "https://www.youtube-nocookie.com/embed/" + yid + "?rel=0";
  if (/screenpal\.com\/watch\//i.test(pautan)) return pautan.replace("/watch/", "/player/");
  return pautan;
}
function posterVideo(v) {
  if (v.poster) return v.poster;
  const yid = youtubeIdDaripadaPautan(v.pautan || "");
  if (yid) return "https://i.ytimg.com/vi/" + yid + "/hqdefault.jpg";
  return "assets/images/logo/logo-app.png";
}
function labelTempohVideo(v) { return v.tempoh ? formatTempohVideo(v.tempoh) : (v._jenis === "online" ? "Online" : "0:00"); }
function labelSaizVideo(v) { return v._jenis === "online" ? "Penstriman internet" : formatSaizVideo(v.saiz); }
function filterVideoCards() {
  const q = (document.getElementById("videoCari")?.value || "").toLowerCase();
  const aktif = document.querySelector("[data-video-kat].btn-teal")?.getAttribute("data-video-kat") || "Semua";
  const sumber = document.querySelector("[data-video-sumber].btn-teal")?.getAttribute("data-video-sumber") || "Semua";
  document.querySelectorAll("[data-video-card]").forEach(kad => {
    const padanKategori = aktif === "Semua" || kad.getAttribute("data-kategori") === aktif;
    const padanSumber = sumber === "Semua" || kad.getAttribute("data-sumber") === sumber;
    const padanCari = kad.getAttribute("data-cari").includes(q);
    kad.style.display = padanKategori && padanSumber && padanCari ? "" : "none";
  });
}
function pilihKategoriVideo(kat, btn) {
  document.querySelectorAll("[data-video-kat]").forEach(b => { b.classList.remove("btn-teal"); b.classList.add("btn-kelabu"); });
  if (btn) { btn.classList.remove("btn-kelabu"); btn.classList.add("btn-teal"); }
  filterVideoCards();
}
function pilihSumberVideo(sumber, btn) {
  document.querySelectorAll("[data-video-sumber]").forEach(b => { if (!b.hasAttribute("data-video-card")) { b.classList.remove("btn-teal"); b.classList.add("btn-kelabu"); } });
  if (btn) { btn.classList.remove("btn-kelabu"); btn.classList.add("btn-teal"); }
  filterVideoCards();
}
function tandaVideoDitonton(id) {
  if (!Array.isArray(STATE.watchedVideos)) STATE.watchedVideos = [];
  if (!STATE.watchedVideos.includes(id)) { STATE.watchedVideos.push(id); save(); }
  const el = document.getElementById("statusVideo"); if (el) el.innerHTML = "✅ Ditandakan sebagai telah ditonton.";
}
function viewVideos() {
  const senarai = semuaVideoKoleksi();
  const kategori = ["Semua", ...new Set(senarai.map(v => v.kategori))];
  const ditonton = new Set(Array.isArray(STATE.watchedVideos) ? STATE.watchedVideos : []);
  const jumlahMB = senarai.filter(v => v._jenis === "offline").reduce((j, v) => j + (v.saiz || 0), 0) / 1048576;
  const bilanganOffline = senarai.filter(v => v._jenis === "offline").length;
  const bilanganOnline = senarai.filter(v => v._jenis === "online").length;
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/'">⬅️ Kembali</button>
  <div class="kad"><h1 style="margin-top:0">🎬 Koleksi Video Pendidikan</h1>
  <p><strong>${senarai.length} video</strong> • Offline: ${bilanganOffline} • Online: ${bilanganOnline} • Saiz MP4 tempatan: ${jumlahMB.toFixed(0)} MB • Ditonton: ${ditonton.size}/${senarai.length}</p>
  <p>Ruangan tontonan pendidikan yang <strong>berasingan daripada modul</strong> — ia tidak menjejaskan kemajuan pelajaran, bintang, lencana atau kuiz. Video <strong>Offline</strong> ialah MP4 tempatan; video <strong>Online</strong> (YouTube/ScreenPal) memerlukan internet dan hanya dimainkan jika pemilik membenarkan embed.</p>
  <label for="videoCari"><strong>🔎 Cari video</strong></label>
  <input id="videoCari" type="search" placeholder="Taip tajuk video…" oninput="filterVideoCards()" style="width:100%;padding:12px;border:2px solid #80cbc4;border-radius:12px;font-size:1rem;margin:8px 0">
  <div class="aksi-row" role="group" aria-label="Tapisan sumber video">${[["Semua", "🌐 Semua"], ["offline", "📴 Offline"], ["online", "🌍 Online"]].map((x, i) => `<button class="btn ${i === 0 ? "btn-teal" : "btn-kelabu"}" data-video-sumber="${x[0]}" onclick="pilihSumberVideo(${jsArg(x[0])}, this)">${x[1]}</button>`).join("")}</div>
  <div class="aksi-row" role="group" aria-label="Tapisan kategori video">${kategori.map((k, i) => `<button class="btn ${i === 0 ? "btn-teal" : "btn-kelabu"}" data-video-kat="${esc(k)}" onclick="pilihKategoriVideo(${jsArg(k)}, this)">${esc(k)}</button>`).join("")}</div></div>
  <div class="modul-grid">${senarai.map(v => `<article class="modul-kad" data-video-card data-kategori="${esc(v.kategori)}" data-sumber="${esc(v._jenis)}" data-cari="${esc((v.tajuk + " " + v.kategori + " " + v.ringkas + " " + (v.platform || "")).toLowerCase())}">
    <button onclick="location.hash='#/video/${esc(v.id)}'" aria-label="Tonton ${esc(v.tajuk)}" style="display:block;width:100%;padding:0;border:none;background:none;cursor:pointer;position:relative;text-align:left">
      <img src="${esc(posterVideo(v))}" alt="Poster video ${esc(v.tajuk)}" style="width:100%;aspect-ratio:9/13;max-height:300px;object-fit:cover;display:block">
      <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:3.6rem;color:#fff;text-shadow:0 3px 12px #000" aria-hidden="true">▶️</span>
      <span style="position:absolute;right:10px;bottom:10px;background:rgba(0,0,0,.75);color:#fff;padding:4px 9px;border-radius:999px;font-weight:800">${esc(labelTempohVideo(v))}</span>
    </button>
    <div class="isi"><span class="pill pill-teal">${esc(v.kategori)}</span> <span class="pill ${v._jenis === "online" ? "pill-pink" : "pill-gold"}">${v._jenis === "online" ? "🌍 Online" : "📴 Offline"}</span> ${ditonton.has(v.id) ? '<span class="pill pill-gold">✅ Ditonton</span>' : ''}
    <h3>${esc(v.tajuk)}</h3><p>${esc(v.ringkas)}</p><small>⏱️ ${esc(labelTempohVideo(v))} • 💾 ${esc(labelSaizVideo(v))} • ${esc(v.umur || "Kanak-kanak")}</small>
    <div class="aksi-row"><a class="btn btn-teal" href="#/video/${esc(v.id)}">▶️ Tonton Video</a></div></div></article>`).join("")}</div>
  <div class="kad"><h3>👨‍👩‍👧 Nota Ibu Bapa & Guru</h3><p>Video dibekalkan oleh pentadbir aplikasi untuk tontonan pendidikan. Sila semak kesesuaian kandungan untuk anak anda. Koleksi ini tidak mengukur kemajuan atau tahap keimanan kanak-kanak.</p></div>`;
  window.scrollTo(0, 0);
}
function viewVideoPlayer(id) {
  const senarai = semuaVideoKoleksi();
  const v = senarai.find(x => x.id === id);
  if (!v) return viewVideos();
  const idx = senarai.indexOf(v); const next = senarai[(idx + 1) % senarai.length];
  const sudah = Array.isArray(STATE.watchedVideos) && STATE.watchedVideos.includes(v.id);
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/video'">⬅️ Koleksi Video</button>
  <article class="kad"><span class="pill pill-teal">${esc(v.kategori)}</span> <span class="pill ${v._jenis === "online" ? "pill-pink" : "pill-gold"}">${v._jenis === "online" ? "🌍 Online — perlu internet" : "📴 Offline MP4"}</span> <span class="pill pill-gold">⏱️ ${esc(labelTempohVideo(v))}</span>
  <h1>${esc(v.tajuk)}</h1><p>${esc(v.ringkas)}</p>
  ${v._jenis === "online" ? `<div style="position:relative;width:100%;aspect-ratio:16/9;background:#000;border-radius:18px;overflow:hidden"><iframe src="${esc(videoEmbedUrl(v))}" title="${esc(v.tajuk)}" style="position:absolute;inset:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><p><small>Jika pemain kosong, pemilik video mungkin mematikan fungsi embed atau video memerlukan kebenaran khas. Gunakan pautan asal di bawah.</small></p>` : `<video controls playsinline preload="metadata" poster="${esc(posterVideo(v))}" onended="tandaVideoDitonton(${jsArg(v.id)})" style="width:100%;max-height:78vh;background:#000;border-radius:18px"><source src="${esc(v.fail)}" type="video/mp4">Pelayar anda tidak menyokong video MP4.</video>`}
  <p id="statusVideo">${sudah ? "✅ Video ini telah ditandakan sebagai ditonton." : "Tekan butang main untuk menonton. Rekod tontonan disimpan berasingan daripada modul."}</p>
  <div class="aksi-row"><button class="btn btn-gold" onclick="tandaVideoDitonton(${jsArg(v.id)})">✅ Tandakan Ditonton</button><a class="btn btn-teal" href="#/video/${esc(next.id)}">⏭️ Video Seterusnya</a><a class="btn btn-blue" href="#/video">🎬 Semua Video</a>${v._jenis === "online" && v.pautan ? `<a class="btn btn-kelabu" href="${esc(v.pautan)}" target="_blank" rel="noopener noreferrer">🔗 Buka Pautan Asal</a>` : ""}</div>
  <p><small>Untuk ibu bapa/guru: kandungan video perlu disemak mengikut kesesuaian umur dan bimbingan keluarga.</small></p></article>`;
  window.scrollTo(0, 0);
}
function viewAudio(tab) {
  const tabs = [["arahan", "🔊 Arahan & Tip"]];
  if (!tabs.some(t => t[0] === tab)) tab = "arahan";
  let body = "";
  if (tab === "arahan") body = `<div class="kad"><h2>🔊 Arahan Permainan & Maklum Balas</h2><p>Tekan untuk mendengar contoh arahan:</p>
  ${[["Selamat datang ke Jom Faham Fardu Ain. Pilih modul dan tekan Mula Belajar.", "instr-salam"], ["Tekan jawapan yang betul. Tiada had masa, fikir perlahan-lahan.", "instr-arahan"], ["Betul! Tahniah, kamu hebat!", "feedback-betul"], ["Belum tepat, tidak mengapa. Kita belajar bersama dan cuba lagi!", "feedback-belum-tepat"], ["Tahniah! Kamu mendapat bintang dan lencana baru!", "feedback-tahniah"]].map(x => `<button class="pilihan" onclick='speak(${jsArg(x[0])}, "ms-MY", ${jsArg(x[1])})'>🔊 ${esc(x[0])}</button>`).join("")}
  <div class="aksi-row"><button class="btn btn-gold" onclick="audioTogglePause()">⏸️ Jeda / Sambung</button><button class="btn btn-kelabu" onclick="audioStop()">⏹️ Hentikan Audio</button></div>
  <p><small>Nota audio (1.4.0): Butang berlabel MP3 memainkan fail sintesis suara yang disimpan dalam peranti (luar talian). Ia BUKAN rakaman qari/guru sebenar — wajib disemak guru berkelayakan dan sebaiknya diganti rakaman sebenar. Jika fail tiada, app menggunakan suara peranti. Senarai penuh: <code>docs/SENARAI-AUDIO.md</code>.</small></p></div>`;
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/'">⬅️ Kembali</button><h1>🎧 Pusat Audio</h1><div class="aksi-row">${tabs.map(t => `<a class="btn ${tab === t[0] ? "btn-teal" : "btn-kelabu"}" href="#/audio/${t[0]}">${t[1]}</a>`).join("")}</div>${body}`;
  window.scrollTo(0, 0);
}
/* ---------- ULANG KAJI ---------- */
function viewReview() {
  const kad = shuffle([...APP_DATA.matchPairs.map(p => ({ depan: p.a, belakang: p.b, emo: "🔗" })), ]);
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/'">⬅️ Kembali</button><h1>🔁 Ulang Kaji (Kad Imbas)</h1><p>Tekan kad untuk membalikkannya. Kad disusun semula setiap kali halaman dibuka.</p>
  ${STATE.reviewList.length ? `<div class="kad"><h2>📌 Senarai untuk Diulang (daripada jawapan yang perlu dilatih)</h2><ul>${STATE.reviewList.slice(-15).map(x => `<li>${esc(x)}</li>`).join("")}</ul><button class="btn btn-kelabu" onclick="clearReview()">🗑️ Kosongkan Senarai Ulang Kaji</button></div>` : `<div class="maklum betul">Belum ada senarai ulang kaji khusus. Apabila ada soalan yang belum tepat, tajuknya akan muncul di sini untuk dilatih semula. Bagus!</div>`}
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px">${kad.map((k, i) => `<div class="kad-imbas" onclick="this.classList.toggle('balik')" role="button" tabindex="0" aria-label="Kad imbas ${esc(k.depan)}"><div class="dalam"><div class="muka" style="background:#e0f2f1"><span style="font-size:2.2rem">${k.emo}</span><strong>${esc(k.depan)}</strong><small>Tekan untuk balikkan 👆</small></div><div class="muka belakang"><strong>Jawapan / Maksud</strong><p>${esc(k.belakang)}</p></div></div></div>`).join("")}</div>
  <div class="aksi-row"><a class="btn btn-pink" href="#/permainan/g10">🏆 Cabaran Ulang Kaji</a><a class="btn btn-teal" href="#/permainan/g6">✏️ Isi Tempat Kosong</a></div>`;
  window.scrollTo(0, 0);
}
function clearReview() { STATE.reviewList = []; save(); viewReview(); }
/* ---------- KEMAJUAN ---------- */
function viewProgress() {
  const allBadges = [...modulBelajar().map(m => m.lencana), ...APP_DATA.badgesExtra];
  const layakSijil = modulBelajar().every(m => moduleProgress(m).pct === 100);
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/'">⬅️ Kembali</button><h1>⭐ Kemajuan Saya — ${esc(STATE.nickname)}</h1>
  <div class="kad"><p class="bintang">⭐ ${STATE.stars} bintang &nbsp; 🏅 ${STATE.badges.length} lencana &nbsp; <span class="pill pill-teal">Tahap ${STATE.tahap}</span></p>
  ${modulBelajar().map(m => { const p = moduleProgress(m); return `<p><strong>${m.emoji} ${esc(m.tajuk)}</strong> — ${p.done}/${p.total} pelajaran • Kuiz terbaik ${STATE.quizScores[m.id] || 0}%</p><div class="bar-kemajuan"><div style="width:${p.pct}%"></div></div>`; }).join("")}
  <p>📖 <strong>Kisah Para Nabi & Rasul:</strong> kandungan dalam aplikasi telah dibuang dan digantikan dengan pautan luar KENALI 25 RASUL; ia tidak dikira dalam kemajuan tempatan.</p>
  <div class="aksi-row">${STATE.lastRoute ? `<a class="btn btn-teal" href="${esc(STATE.lastRoute)}">▶️ Sambung Pembelajaran Terakhir</a>` : ""}<a class="btn btn-gold" href="#/sijil">🎓 ${layakSijil ? "Lihat Sijil Digital Saya" : "Sijil Digital (siapkan semua modul untuk membuka)"}</a></div></div>
  <div class="kad"><h2>🏅 Lencana Pencapaian</h2><p>Ganjaran menggalakkan usaha belajar — bukan mengukur nilai diri atau tahap keimanan seseorang.</p><div class="lencana-grid">${allBadges.map(b => `<div class="lencana ${STATE.badges.includes(b.id) ? "dapat" : ""}"><div class="emo">${b.emoji}</div><strong>${esc(b.nama)}</strong><br><small>${STATE.badges.includes(b.id) ? "✅ Diperoleh" : "🔒 " + esc(b.syarat || "Siapkan modul + kuiz ≥70%")}</small></div>`).join("")}</div></div>
  <div class="kad"><h2>🎮 Rekod Permainan</h2>${GAMES.map(g => `<p>${g.emo} <strong>${esc(g.nama)}</strong> — dimain ${STATE.gamesPlayed[g.id] || 0} kali • terbaik ${STATE.gameBest[g.id] || 0}%</p>`).join("")}</div>
  <div class="kad"><h2>💾 Sandaran Kemajuan (Eksport / Import)</h2><p>Data disimpan hanya pada peranti ini (storan tempatan). Eksport untuk membuat salinan sandaran.</p>
  <div class="aksi-row"><button class="btn btn-teal" onclick="exportProgress()">⬇️ Eksport Kemajuan (JSON)</button><label class="btn btn-blue" style="cursor:pointer">⬆️ Import Sandaran<input type="file" accept=".json,application/json" style="display:none" onchange="importProgress(event)"></label>
  <button class="btn btn-merah" onclick="resetProgress()">🗑️ Tetapkan Semula Kemajuan</button></div><div id="backupMsg"></div></div>`;
  window.scrollTo(0, 0);
}
function exportProgress() {
  const blob = new Blob([DB.exportJSON(STATE)], { type: "application/json" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "sandaran-jom-faham-fardu-ain.json"; a.click(); URL.revokeObjectURL(a.href);
  document.getElementById("backupMsg").innerHTML = `<div class="maklum betul">✅ Fail sandaran dimuat turun. Simpan di tempat selamat.</div>`;
}
function importProgress(ev) {
  const f = ev.target.files[0]; if (!f) return;
  f.text().then(t => { try { STATE = DB.importJSON(t); if (!Array.isArray(STATE.adventure)) STATE.adventure = []; save(); alert("✅ Kemajuan berjaya dipulihkan!"); router(); } catch (e) { alert("❌ " + e.message); } });
}
function resetProgress() {
  if (!confirm("Adakah kamu pasti? Semua bintang, lencana dan rekod belajar akan dipadamkan. Tindakan ini tidak boleh dibatalkan (kecuali jika kamu ada fail sandaran).")) return;
  if (!confirm("Pengesahan kedua: Tekan OK untuk menetapkan semula kemajuan.")) return;
  DB.reset(); STATE = DB.load(); STATE.createdAt = new Date().toISOString(); STATE.adventure = []; save(); alert("Kemajuan telah ditetapkan semula. Selamat belajar semula!"); location.hash = "#/"; router();
}
function viewCert() {
  const layak = modulBelajar().every(m => moduleProgress(m).pct === 100);
  if (!layak) { $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/kemajuan'">⬅️ Kemajuan</button><div class="kad"><h1>🎓 Sijil Digital</h1><p>Sijil akan dibuka apabila <strong>semua pelajaran dalam modul tempatan</strong> ditandakan siap. Bahagian Kisah Para Nabi & Rasul ialah pautan luar dan tidak dikira untuk sijil tempatan. Teruskan belajar — kamu boleh melakukannya!</p><ul>${modulBelajar().map(m => { const p = moduleProgress(m); return `<li>${m.emoji} ${esc(m.tajuk)}: ${p.done}/${p.total} ${p.pct === 100 ? "✅" : ""}</li>`; }).join("")}</ul><a class="btn btn-teal" href="#/modul">📚 Teruskan Belajar</a></div>`; return; }
  const tarikh = new Date().toLocaleDateString("ms-MY", { day: "numeric", month: "long", year: "numeric" });
  $app.innerHTML = `<button class="btn btn-kelabu no-print" onclick="location.hash='#/kemajuan'">⬅️ Kemajuan</button><div class="sijil"><img src="assets/images/logo/logo-app.png" alt="Logo aplikasi" style="width:110px;border-radius:20px"><h1 style="color:#00796b">SIJIL PENCAPAIAN</h1><p>Dengan bangga disampaikan kepada</p><h2 style="font-size:2rem;color:#1e88e5">${esc(STATE.nickname)}</h2><p>kerana telah menyiapkan semua modul pembelajaran</p><h3>JOM FAHAM FARDU AIN V.1<br><small>“Belajar, Faham dan Amalkan”</small></h3><p>⭐ ${STATE.stars} bintang • 🏅 ${STATE.badges.length} lencana • Tahap ${STATE.tahap}</p><p>Tarikh: ${esc(tarikh)}</p><p><small>Sijil digital galakan pembelajaran (bukan sijil rasmi). Teruskan beramal dan belajar bersama guru serta ibu bapa.</small></p></div><div class="aksi-row no-print"><button class="btn btn-gold" onclick="window.print()">🖨️ Cetak / Simpan Sijil (PDF)</button></div>`;
  window.scrollTo(0, 0);
}
/* ---------- TETAPAN ---------- */
function viewSettings() {
  const s = STATE.settings;
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/'">⬅️ Kembali</button><div class="kad"><h1>⚙️ Tetapan</h1>
  <label for="nick">Nama panggilan (tidak perlu nama penuh — jaga privasi)</label><input id="nick" value="${esc(STATE.nickname)}" maxlength="24">
  <label for="tahap">Tahap pembelajaran</label><select id="tahap"><option value="1" ${STATE.tahap === 1 ? "selected" : ""}>Tahap 1 — Asas (gambar, audio, soalan mudah)</option><option value="2" ${STATE.tahap === 2 ? "selected" : ""}>Tahap 2 — Pertengahan (maksud, susunan, pelbagai soalan)</option><option value="3" ${STATE.tahap === 3 ? "selected" : ""}>Tahap 3 — Lanjutan (aplikasi harian, cabaran campuran)</option></select>
  <label><input type="checkbox" id="setSound" style="width:auto" ${s.sound ? "checked" : ""}> 🔊 Hidupkan bunyi / bacaan suara</label>
  <label for="kadar">Kelajuan bacaan suara: <span id="kadarVal">${s.kadarSuara}x</span></label><input type="range" id="kadar" min="0.7" max="1.3" step="0.1" value="${s.kadarSuara}" oninput="document.getElementById('kadarVal').textContent=this.value+'x'">
  <label><input type="checkbox" id="setFon" style="width:auto" ${s.fonBesar ? "checked" : ""}> 🔠 Tulisan besar</label>
  <label><input type="checkbox" id="setDis" style="width:auto" ${s.Dyslexia ? "checked" : ""}> 📖 Mod mesra disleksia (jarak huruf & ayat lebih luas)</label>
  <label><input type="checkbox" id="setKontras" style="width:auto" ${s.kontras ? "checked" : ""}> 🎨 Kontras tinggi</label>
  <div class="aksi-row"><button class="btn btn-teal" onclick="saveSettings()">💾 Simpan Tetapan</button><button class="btn btn-merah" onclick="resetProgress()">🗑️ Tetapkan Semula Kemajuan</button></div>
  <p id="setMsg"></p><hr><p><strong>Status luar talian:</strong> <span id="offStat">${navigator.onLine ? "🌐 Dalam talian (modul tempatan tetap boleh digunakan tanpa internet selepas caching)" : "📴 Luar talian — modul tempatan berfungsi; pautan Kisah Para Nabi & Rasul memerlukan internet"}</span></p>
  <p><small>Versi aplikasi: <strong>1.4.0</strong> (JOM FAHAM FARDU AIN V.1) • 6 modul tempatan + 1 pautan luar Kisah Para Nabi & Rasul • Data kemajuan hanya pada peranti ini • Tiada iklan / pembelian dalam app.</small></p></div>`;
  window.scrollTo(0, 0);
}
function saveSettings() {
  STATE.nickname = document.getElementById("nick").value.trim() || "Sahabat Muslim";
  STATE.tahap = parseInt(document.getElementById("tahap").value, 10);
  STATE.settings.sound = document.getElementById("setSound").checked;
  STATE.settings.kadarSuara = parseFloat(document.getElementById("kadar").value);
  STATE.settings.fonBesar = document.getElementById("setFon").checked;
  STATE.settings.Dyslexia = document.getElementById("setDis").checked;
  STATE.settings.kontras = document.getElementById("setKontras").checked;
  save(); applySettings(); document.getElementById("setMsg").innerHTML = `<span class="maklum betul" style="display:block">✅ Tetapan disimpan!</span>`; speak("Tetapan disimpan.");
}
/* ---------- RUJUKAN ---------- */
function viewRefs() {
  $app.innerHTML = `<button class="btn btn-kelabu" onclick="location.hash='#/'">⬅️ Kembali</button><div class="kad"><h1>📚 Rujukan & Status Semakan Kandungan</h1>
  <div class="maklum salah">⚠️ <strong>PENTING — STATUS V1:</strong> Kandungan disusun untuk pembelajaran asas kanak-kanak berpandukan kurikulum Pendidikan Islam sekolah rendah di Malaysia dan panduan umum mazhab Syafi‘i yang diajar di Malaysia. Ia <strong>BELUM mendapat kelulusan rasmi</strong> mana-mana pihak berkuasa. <strong>Mesti disemak dan disahkan oleh guru Pendidikan Islam / pihak berkelayakan</strong> (termasuk bacaan Arab, urutan wuduk/solat dan hukum) sebelum digunakan sebagai bahan rasmi.</div>
  <h2>Jenis sumber rujukan penyusunan</h2><ul>
  <li>Buku teks & sukatan Pendidikan Islam / Fardu Ain sekolah rendah (KPM) — struktur topik mengikut tahap murid.</li>
  <li>Panduan ibadah asas (wuduk, solat, puasa) berpandukan amalan mazhab Syafi‘i yang umum diajar di Malaysia — bezakan RUKUN / SUNAT dinyatakan dalam pelajaran.</li>
  <li>Teks al-Quran dan doa harian yang lazim diajar — dipaparkan sebagai teks Arab sebenar (bukan gambar) supaya boleh disemak pada mushaf.</li>
  <li>Rujukan web yang dicadangkan pengguna untuk langkah berwuduk (ilustrasi langkah) — telah dirujuk untuk struktur langkah, kandungan akhir tetap memerlukan semakan guru.</li></ul>
  <h2>Prinsip keselamatan kandungan</h2><ul><li>Tiada gambaran wajah para nabi (Modul Sirah menggunakan simbol/tempat).</li><li>Tiada dalil/hadis direka; hadis tidak dinyatakan sebagai sahih tanpa sumber.</li><li>Perkara khilaf/perincian hukum diarahkan kepada guru/pihak berautoriti.</li><li>Ganjaran (bintang/lencana) ialah galakan usaha, bukan penilaian iman kanak-kanak.</li></ul>
  <p>Fail penuh untuk penyemak: <code>docs/RUJUKAN-KANDUNGAN.md</code> dalam kod sumber.</p></div>`;
  window.scrollTo(0, 0);
}
/* Online/offline banner */
function updateOnline() { const el = document.getElementById("netStatus"); if (!el) return; if (navigator.onLine) { el.className = "status-dalam"; el.textContent = "🌐 Dalam talian — modul tempatan juga berfungsi luar talian selepas caching; pautan Kisah Para Nabi & Rasul boleh dibuka."; } else { el.className = "status-luar"; el.textContent = "📴 Kamu kini LUAR TALIAN — semua pelajaran tempatan, gambar, permainan dan kemajuan berfungsi; pautan Kisah Para Nabi & Rasul memerlukan internet."; } }
window.addEventListener("online", updateOnline); window.addEventListener("offline", updateOnline);
applySettings(); router(); updateOnline();
