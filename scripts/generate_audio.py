#!/usr/bin/env python3
"""Jana SEMUA fail MP3 Jom Faham Fardu Ain V.1 (sintesis suara gTTS, masa pembangunan).
Fail yang dihasilkan disimpan tempatan dan berfungsi 100% luar talian dalam app.
PENTING: Ini BUKAN rakaman qari/guru sebenar — wajib disemak guru berkelayakan.
Jalankan: python3 scripts/generate_audio.py  (selamat dijalankan semula — fail sedia ada dilangkau)
"""
import json, os, re, subprocess, sys, time, random
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NODE_DUMP = r"""
const D = require(process.argv[1]);
const strip = t => t.replace(/[﴿﴾]/g, " ").replace(/[٠-٩]/g, "").replace(/\s+/g, " ").trim();
const out = {};
const A = (k, text, lang) => { out[k] = { text, lang }; };
for (const d of D.doaList) { A("doa-" + d.id, d.arab, "ar"); A("doa-maksud-" + d.id, d.nama + ". " + d.maksud, "ms"); }
const fatihah = D.modules.find(m => m.id === "solat").pelajaran.find(l => l.id === "s4");
const ikhlas = D.modules.find(m => m.id === "alquran").pelajaran.find(l => l.id === "q4");
A("solat-takbir", "ٱللَّٰهُ أَكْبَرُ، ٱللَّٰهُ أَكْبَرُ", "ar");
A("solat-alfatihah", strip(fatihah.arab), "ar");
for (const b of D.solatBacaan) { A("solat-" + b.id, b.audioArab, "ar"); A("solat-maksud-" + b.id, b.tajuk + ". " + b.maksud, "ms"); }
A("alquran-alikhlas", strip(ikhlas.arab), "ar");
D.hijaiyah.forEach((h, i) => A("hijaiyah-" + String(i + 1).padStart(2, "0"), h[0], "ar"));
A("hijaiyah-penuh", D.hijaiyah.map(h => h[0]).join("، "), "ar");
A("akidah-syahadah", D.modules.find(m => m.id === "akidah").pelajaran.find(l => l.id === "a4").arab, "ar");
A("akidah-selawat", D.modules.find(m => m.id === "akidah").pelajaran.find(l => l.id === "a2").arab, "ar");
A("lafaz-alhamdulillah", "الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ", "ar");
A("lafaz-subhanallah", "سُبْحَانَ اللَّهِ، سُبْحَانَ اللَّهِ", "ar");
A("lafaz-assalamualaikum", "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ", "ar");
A("instr-jenis-air", "Jenis-jenis Air. " + D.jenisAir.map((j, i) => `${i + 1}. ${j.nama}. ${j.status}. ${j.maksud}`).join(" ") + " Sumber Air Mutlak ada tujuh: " + D.sumberMutlak.join(", ") + ". Ingat, air paip yang bersih di rumah kita ialah Air Mutlak.", "ms");
A("instr-najis", "Jenis-jenis Najis dan Cara Menyucikannya. " + D.najisJenis.map((n, i) => `${i + 1}. ${n.nama}. Contohnya: ${n.contoh} ${n.cara}`).join(" ") + " Langkah umum menyucikan najis: " + D.langkahSucikan.join(". "), "ms");
A("instr-batal-wuduk", "Perkara yang Membatalkan Wuduk. " + D.batalWuduk.map((b, i) => `${i + 1}. ${b.t}. ${b.d}`).join(" ") + " Jika wuduk terbatal, ambil wuduk semula sebelum solat.", "ms");
A("instr-solat-waktu", "Solat Lima Waktu. " + D.solatWaktu.map(w => `${w.t}, ${w.rakaat} rakaat. ${w.masa}. ${w.d}`).join(" ") + " Ingat urutan bilangan rakaat: Subuh 2, Zuhur 4, Asar 4, Maghrib 3 dan Isyak 4.", "ms");
A("instr-batal-solat", "Perkara yang Membatalkan Solat. " + D.batalSolat.map((b, i) => `${i + 1}. ${b.t}. ${b.d}`).join(" "), "ms");
A("instr-jemaah", "Pengenalan Solat Berjemaah. " + D.jemaahSolat.points.join(" "), "ms");
A("instr-akhlak", "Akhlak dan Adab Islam. " + D.akhlakKad.map((k, i) => `${i + 1}. ${k.t}. ${k.d}`).join(" "), "ms");
A("instr-batal-puasa-rukhsah", "Perkara yang Membatalkan Puasa. " + D.batalPuasa.map((b, i) => `${i + 1}. ${b.t}. ${b.d}`).join(" ") + " Pengenalan Kelonggaran dalam Ibadah Puasa. " + D.rukhsahPuasa.map(r => `${r.t}. ${r.d}`).join(" "), "ms");
A("instr-zakat-korban-haji", D.ibadahInfo.map(info => `${info.tajuk}. ` + info.points.join(" ")).join(" "), "ms");
A("instr-carta-wuduk", D.wudukLangkah.map((s, i) => `Langkah ${i + 1}: ${s.t}. ${s.d}`).join(" "), "ms");
A("instr-carta-solat", D.solatGerak.map((s, i) => `Pergerakan ${i + 1}: ${s.t}. ${s.d}`).join(" "), "ms");
A("instr-salam", "Selamat datang ke Jom Faham Fardu Ain. Pilih modul dan tekan Mula Belajar.", "ms");
A("instr-arahan", "Tekan jawapan yang betul. Tiada had masa, fikir perlahan-lahan.", "ms");
A("feedback-betul", "Betul! Tahniah, kamu hebat!", "ms");
A("feedback-belum-tepat", "Belum tepat, tidak mengapa. Kita belajar bersama dan cuba lagi!", "ms");
A("feedback-tahniah", "Tahniah! Kamu mendapat bintang dan lencana baru!", "ms");
for (const m of D.modules) {
  A("modul-" + m.id, m.tajuk + ". " + m.ringkas, "ms");
  for (const l of m.pelajaran) A("pelajaran-" + m.id + "-" + l.id, `${l.tajuk}. ${l.intro} ${l.isi.join(" ")} ${l.tip || ""}`, "ms");
}
console.log(JSON.stringify(out));
"""

def load_items():
    js = subprocess.check_output(["node", "-e", NODE_DUMP, os.path.join(BASE, "src/data.js")]).decode("utf-8")
    texts = json.loads(js)
    audio_js = open(os.path.join(BASE, "src/audio.js"), encoding="utf-8").read()
    files = dict(re.findall(r'"([a-z0-9\-]+)":\s*"(assets/audio/[^"]+\.mp3)"', audio_js))
    items = []
    for key, path in sorted(files.items()):
        if key not in texts:
            print(f"AMARAN: tiada teks untuk {key}", file=sys.stderr); continue
        items.append({"key": key, "fail": path, "teks": texts[key]["text"], "bahasa": texts[key]["lang"]})
    missing = set(texts) - set(files)
    if missing: print("AMARAN teks tanpa fail:", sorted(missing), file=sys.stderr)
    return items

def synth(item):
    from gtts import gTTS
    dest = os.path.join(BASE, item["fail"])
    if os.path.exists(dest) and os.path.getsize(dest) > 2000:
        return (item, "langkau")
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    last = None
    for cubaan in range(4):
        try:
            gTTS(item["teks"], lang=item["bahasa"], slow=False).save(dest)
            if os.path.getsize(dest) > 2000: return (item, "siap")
            last = RuntimeError("fail terlalu kecil")
        except Exception as e:  # rangkaian/kadar — cuba lagi dengan jeda
            last = e
        time.sleep(2 * (cubaan + 1) + random.random())
    return (item, f"GAGAL: {last}")

def main():
    items = load_items()
    print(f"{len(items)} fail audio akan diproses...")
    siap = langkau = gagal = 0; senarai_gagal = []
    with ThreadPoolExecutor(max_workers=3) as ex:
        futs = {ex.submit(synth, it): it for it in items}
        for i, f in enumerate(as_completed(futs), 1):
            item, status = f.result()
            if status == "siap": siap += 1
            elif status == "langkau": langkau += 1
            else: gagal += 1; senarai_gagal.append(item["key"] + " -> " + status)
            if i % 20 == 0 or status.startswith("GAGAL"): print(f"  [{i}/{len(items)}] siap={siap} langkau={langkau} gagal={gagal}")
    # Manifest dengan tempoh & saiz sebenar
    try:
        from mutagen.mp3 import MP3
    except ImportError:
        MP3 = None
    manifest = []
    for it in items:
        p = os.path.join(BASE, it["fail"])
        if not os.path.exists(p): continue
        manifest.append({"kunci": it["key"], "fail": it["fail"], "bahasa": it["bahasa"],
                         "suara": "Sintesis suara gTTS (ar/ms) — BUKAN rakaman manusia",
                         "tempoh_saat": round(MP3(p).info.length, 1) if MP3 else None,
                         "saiz_kb": round(os.path.getsize(p) / 1024),
                         "teks": it["teks"][:120]})
    with open(os.path.join(BASE, "assets/audio/manifest-audio.json"), "w", encoding="utf-8") as fh:
        json.dump({"dijana": "Skrip scripts/generate_audio.py (gTTS)", "status": "Sintesis suara bantuan latihan — perlu semakan guru/qari berkelayakan", "bilangan": len(manifest), "fail": manifest}, fh, ensure_ascii=False, indent=2)
    rows = "\n".join(f"| {m['kunci']} | `{m['fail']}` | {m['bahasa']} | {m['tempoh_saat']}s | {m['saiz_kb']} KB |" for m in manifest)
    doc = f"""# Senarai Audio MP3 — JOM FAHAM FARDU AIN V.1

**Bilangan fail: {len(manifest)}** • Semua fail disimpan tempatan dalam `assets/audio/` dan berfungsi luar talian.

> ⚠️ **STATUS JUJUR:** Kesemua fail ialah **bacaan sintesis suara** (dijana dengan gTTS semasa pembangunan; Arab `ar`, Melayu `ms`) untuk bantuan latihan dan ulang kaji. Ia **BUKAN rakaman qari atau guru sebenar**. Bacaan Arab (terutama al-Fatihah, doa dan huruf hijaiyah) **WAJIB disemak oleh guru/qari berkelayakan** dan sebaiknya digantikan dengan rakaman manusia yang disahkan. App akan menggunakan fail ini secara automatik; jika fail dipadam, app kembali kepada suara peranti.

| Kunci | Fail | Bahasa | Tempoh | Saiz |
|---|---|---|---|---|
{rows}

Cara menjana semula / menambah: `python3 scripts/generate_audio.py` (fail sedia ada yang sah dilangkau; padam fail tertentu untuk menjana semula fail itu sahaja). Selepas menjana, jalankan `node tests/smoke-test.js` dan bina semula service worker (lihat skrip dalam README pembangunan).
"""
    with open(os.path.join(BASE, "docs/SENARAI-AUDIO.md"), "w", encoding="utf-8") as fh: fh.write(doc)
    print(f"SELESAI: siap={siap} langkau={langkau} gagal={gagal} | manifest: {len(manifest)} fail")
    if senarai_gagal: print("GAGAL:\n" + "\n".join(senarai_gagal)); sys.exit(1)

if __name__ == "__main__":
    main()
