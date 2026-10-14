# Jana ilustrasi SVG tempatan (vektor, mesra kanak-kanak, tiada wajah nabi)
import os
BASE="/home/user/jom-faham-fardu-ain/assets/images"
def svg(path, title, grad, emoji, label, sub):
    c=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="{title}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="{grad[0]}"/><stop offset="1" stop-color="{grad[1]}"/></linearGradient></defs>
<rect width="800" height="500" rx="36" fill="url(#g)"/>
<circle cx="680" cy="80" r="90" fill="#ffffff" opacity=".14"/><circle cx="90" cy="430" r="110" fill="#ffffff" opacity=".12"/>
<path d="M400 70 L470 150 V210 H330 V150 Z" fill="#ffffff" opacity=".9"/>
<circle cx="400" cy="128" r="20" fill="#FFC93C"/>
<text x="400" y="330" font-size="130" text-anchor="middle">{emoji}</text>
<text x="400" y="405" font-size="40" font-weight="bold" text-anchor="middle" fill="#ffffff" font-family="Arial,sans-serif">{label}</text>
<text x="400" y="450" font-size="24" text-anchor="middle" fill="#ffffff" opacity=".92" font-family="Arial,sans-serif">{sub}</text>
</svg>'''
    open(os.path.join(BASE,path),"w",encoding="utf-8").write(c)
covers=[
 ("akidah/cover-akidah.svg","Asas Akidah",("#1E88E5","#00BFA6"),"🕌","ASAS AKIDAH","Rukun Iman • Rukun Islam"),
 ("taharah/cover-taharah.svg","Taharah dan Bersuci",("#039BE5","#26C6DA"),"💧","TAHARAH","Wuduk • Kebersihan Diri"),
 ("solat/cover-solat.svg","Solat",("#5E35B1","#00BFA6"),"🤲","SOLAT","Pergerakan • Bacaan • Waktu"),
 ("al-quran/cover-quran.svg","Al-Quran dan Tajwid Asas",("#00897B","#7CB342"),"📖","AL-QURAN","Huruf Hijaiyah • Tajwid Asas"),
 ("doa/cover-doa.svg","Hafalan Doa Harian",("#FB8C00","#FFCA28"),"🌙","DOA HARIAN","Arab • Rumi • Maksud"),
 ("akhlak/cover-akhlak.svg","Akhlak dan Adab Islam",("#EC407A","#AB47BC"),"💛","AKHLAK & ADAB","Adab Harian • Akhlak Mulia"),
 ("ibadah/cover-ibadah.svg","Puasa dan Ibadah",("#6D4C41","#FB8C00"),"🕋","PUASA & IBADAH","Ramadan • Zakat • Haji"),
 ("sirah/cover-sirah.svg","Sirah Nabi dan Kisah Islam",("#3949AB","#00897B"),"🐪","SIRAH NABI","Peristiwa • Pengajaran"),
 ("games/cover-games.svg","Pusat Permainan",("#00ACC1","#66BB6A"),"🎮","PERMAINAN","10 Permainan Interaktif"),
 ("characters/watak-utama.svg","Watak Pembimbing",("#00BFA6","#1E88E5"),"🧒👧","AHMAD & AISYAH","Kawan Belajar Kamu"),
]
for x in covers: svg(*x)
# Kad langkah wuduk (ikon besar + label) - teks langkah sebenar dipaparkan dalam app sebagai teks HTML
wuduk=[("01-niat.svg","💧","1. Niat & Basmalah"),("02-tangan.svg","🙌","2. Basuh Tangan"),("03-kumur.svg","💦","3. Berkumur"),("04-hidung.svg","👃","4. Bersihkan Hidung"),("05-muka.svg","😊","5. Basuh Muka"),("06-siku.svg","💪","6. Basuh Tangan ke Siku"),("07-kepala.svg","🙆","7. Sapu Kepala"),("08-telinga.svg","👂","8. Sapu Telinga"),("09-kaki.svg","🦶","9. Basuh Kaki"),("10-doa.svg","🤲","10. Doa Selepas Wuduk")]
for f,e,l in wuduk:
    svg(f"taharah/wuduk-{f}","Langkah Wuduk "+l,("#0288D1","#26C6DA"),e,l,"Langkah Berwuduk")
# Kad pergerakan solat
solat=[("01-berdiri.svg","🧍","Berdiri & Takbir"),("02-fatihah.svg","📖","Baca al-Fatihah"),("03-rukuk.svg","🙇","Rukuk"),("04-iktidal.svg","🧍","Iktidal"),("05-sujud.svg","🙏","Sujud"),("06-duduk.svg","🧎","Duduk Antara 2 Sujud"),("07-tahiyat.svg","☝️","Tahiyat"),("08-salam.svg","👋","Salam")]
for f,e,l in solat:
    svg(f"solat/gerak-{f}","Pergerakan Solat "+l,("#4527A0","#00BFA6"),e,l,"Pergerakan Solat")
print("SVG siap:", sum(len(files) for _,_,files in os.walk(BASE)))
