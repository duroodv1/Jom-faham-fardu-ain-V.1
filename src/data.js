/* JOM FAHAM FARDU AIN V.1 — Data kandungan (Bahasa Melayu Standard)
   PENTING: Kandungan untuk pembelajaran asas kanak-kanak. Perlu semakan guru
   Pendidikan Islam berkelayakan sebelum penerbitan rasmi. Lihat docs/RUJUKAN-KANDUNGAN.md */
const APP_DATA = {
  namaApp: "JOM FAHAM FARDU AIN V.1",
  tagline: "Belajar, Faham dan Amalkan",
  modules: [
    {
      id: "akidah", tajuk: "Asas Akidah", emoji: "🕌", warna: "#1e88e5",
      cover: "assets/images/akidah/cover-akidah.svg",
      ringkas: "Mengenal Allah SWT, Nabi Muhammad SAW, Rukun Iman dan Rukun Islam.",
      lencana: { id: "juara-akidah", nama: "Juara Akidah", emoji: "🏆" },
      pelajaran: [
        { id: "a1", tajuk: "Mengenal Allah SWT", emoji: "☪️", intro: "Allah SWT ialah Tuhan kita yang Maha Esa. Allah mencipta langit, bumi, manusia, haiwan dan tumbuhan.", isi: ["Allah Maha Esa — tiada Tuhan selain Allah.", "Allah Maha Pencipta (al-Khaliq), Maha Pengasih (ar-Rahman) dan Maha Penyayang (ar-Rahim).", "Kita menyembah Allah sahaja dan memohon pertolongan kepada-Nya.", "Kita bersyukur atas nikmat Allah seperti kesihatan, keluarga dan makanan."], tip: "Amalan baik: apabila melihat keindahan alam, ucapkan “Subhanallah” dan bersyukur." , arab: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ", rumi: "Asyhadu alla ilaha illallah, wa asyhadu anna Muhammadar Rasulullah", maksud: "Aku bersaksi bahawa tiada Tuhan melainkan Allah, dan aku bersaksi bahawa Nabi Muhammad ialah pesuruh Allah." },
        { id: "a2", tajuk: "Nabi Muhammad SAW Rasul Terakhir", emoji: "🌙", intro: "Nabi Muhammad SAW ialah utusan Allah yang terakhir. Baginda membawa ajaran Islam untuk seluruh manusia.", isi: ["Baginda dilahirkan di Makkah.", "Baginda bersifat benar (Siddiq), dipercayai (Amanah), menyampaikan (Tabligh) dan bijaksana (Fatonah).", "Kita mengasihi Baginda dengan mengikut sunnah dan berselawat.", "Selawat ringkas: اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ — Maksudnya: Ya Allah, kurniakanlah kesejahteraan ke atas Nabi Muhammad."], arab: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", rumi: "Allahumma salli ‘ala Muhammad", maksud: "Ya Allah, kurniakanlah kesejahteraan ke atas Nabi Muhammad SAW." },
        { id: "a3", tajuk: "Enam Rukun Iman", emoji: "💛", intro: "Rukun Iman ialah enam perkara yang wajib diyakini oleh setiap Muslim.", isi: ["1. Beriman kepada Allah SWT.", "2. Beriman kepada malaikat-malaikat Allah.", "3. Beriman kepada kitab-kitab Allah.", "4. Beriman kepada nabi dan rasul Allah.", "5. Beriman kepada hari akhirat.", "6. Beriman kepada qada dan qadar Allah."], tip: "Cara ingat: Allah – Malaikat – Kitab – Rasul – Hari Akhirat – Qada & Qadar." },
        { id: "a4", tajuk: "Lima Rukun Islam", emoji: "🏮", intro: "Rukun Islam ialah lima amalan asas yang membina kehidupan seorang Muslim.", isi: ["1. Mengucap dua kalimah syahadah.", "2. Mendirikan solat lima waktu.", "3. Berpuasa pada bulan Ramadan.", "4. Menunaikan zakat bagi yang layak dan cukup syarat.", "5. Mengerjakan haji bagi yang mampu."], arab: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ", rumi: "Asyhadu alla ilaha illallah, wa asyhadu anna Muhammadar Rasulullah", maksud: "Aku bersaksi bahawa tiada Tuhan melainkan Allah, dan aku bersaksi bahawa Nabi Muhammad ialah pesuruh Allah." },
        { id: "a5", tajuk: "Malaikat, Kitab, Nabi & Hari Akhirat", emoji: "📚", intro: "Allah mengutus malaikat, menurunkan kitab dan mengutus nabi untuk membimbing manusia ke jalan yang benar.", isi: ["Malaikat dicipta daripada cahaya dan sentiasa taat kepada Allah. Contoh: Jibril menyampaikan wahyu, Mikail mengurus rezeki, Izrail mencabut nyawa, Israfil meniup sangkakala (dengan izin Allah).", "Kitab Allah: Taurat (Nabi Musa), Zabur (Nabi Daud), Injil (Nabi Isa) dan al-Quran (Nabi Muhammad SAW). Al-Quran ialah kitab terakhir dan panduan kita.", "Nabi dan rasul ialah manusia pilihan yang menyampaikan ajaran Allah. Nabi Muhammad SAW ialah nabi terakhir.", "Hari akhirat ialah hari pembalasan di akhirat. Qada dan qadar ialah ketentuan Allah — kita berusaha bersungguh-sungguh dan bertawakal."], tip: "Amalan harian yang menunjukkan iman: berkata benar, menepati janji, membantu ibu bapa dan menjaga solat." }
      ],
      kuiz: [
        { q: "Siapakah Tuhan yang Maha Esa dan Pencipta alam?", pilih: ["Allah SWT", "Matahari", "Manusia"], j: 0, terang: "Allah SWT ialah Tuhan yang Maha Esa dan Pencipta segala-galanya.", tahap: 1, emo: "🌍" },
        { q: "Berapakah bilangan Rukun Iman?", pilih: ["Lima", "Enam", "Tujuh"], j: 1, terang: "Rukun Iman ada ENAM perkara.", tahap: 1, emo: "💛" },
        { q: "Yang manakah Rukun Islam yang pertama?", pilih: ["Berpuasa", "Mengucap dua kalimah syahadah", "Menunaikan zakat"], j: 1, terang: "Rukun Islam pertama ialah mengucap dua kalimah syahadah.", tahap: 1, emo: "🏮" },
        { q: "Malaikat Jibril bertugas untuk…", pilih: ["Menyampaikan wahyu", "Meniup sangkakala", "Mencatat cuaca"], j: 0, terang: "Malaikat Jibril menyampaikan wahyu Allah kepada para nabi.", tahap: 2, emo: "📖" },
        { q: "Ali terjumpa dompet di sekolah. Apakah tindakan beriman yang betul?", pilih: ["Simpan untuk diri sendiri", "Serahkan kepada guru", "Sembunyikan"], j: 1, terang: "Amanah ialah tanda iman. Serahkan barang yang dijumpai kepada guru.", tahap: 3, emo: "🎒" }
      ]
    },
    {
      id: "taharah", tajuk: "Taharah dan Bersuci", emoji: "💧", warna: "#039be5",
      cover: "assets/images/taharah/cover-taharah.svg",
      ringkas: "Maksud taharah, jenis air, langkah wuduk, perkara membatalkan wuduk, mandi wajib dan tayamum.",
      lencana: { id: "pakar-wuduk", nama: "Pakar Wuduk", emoji: "💧" },
      pelajaran: [
        { id: "t1", tajuk: "Maksud Taharah & Kebersihan", emoji: "🧼", intro: "Taharah bermaksud bersuci daripada hadas dan najis. Islam sangat menyayangi kebersihan.", isi: ["Kita wajib suci badan, pakaian dan tempat sebelum solat.", "Kebersihan menjaga kesihatan dan disukai Allah serta manusia.", "Amalan: basuh tangan sebelum makan, gosok gigi, mandi setiap hari, potong kuku."], tip: "Ingat: Bersih badan, bersih pakaian, bersih tempat solat." },
        { id: "t2", tajuk: "Jenis Air & Najis", emoji: "🚰", gambar: "assets/images/taharah/jenis-air.jpg", intro: "Air mutlak seperti air paip, air hujan, air sungai dan air telaga boleh digunakan untuk bersuci jika suci dan tidak berubah sifatnya.", isi: ["Air untuk wuduk mestilah suci dan menyucikan (air mutlak).", "Najis ialah kekotoran yang perlu disucikan seperti air kencing dan najis haiwan (mengikut jenisnya — dapatkan bimbingan guru untuk perincian).", "Cara asas menyucikan najis: buang najis, basuh dengan air hingga hilang bau, warna dan rasa kekotoran (jika ada).", "Istinjak ialah membersihkan tempat keluar najis dengan air atau bahan kesat yang dibenarkan (seperti tisu) mengikut adab — gunakan air jika ada."], tip: "Jika tidak pasti jenis najis atau cara menyucikannya, tanya guru atau ibu bapa." },
        { id: "t3", tajuk: "Langkah Berwuduk (Rukun & Sunat)", emoji: "💦", intro: "Wuduk menyucikan kita daripada hadas kecil sebelum solat. Rukun wuduk (wajib dalam mazhab Syafi‘i) ada ENAM: niat, basuh muka, basuh tangan hingga siku, sapu sebahagian kepala, basuh kaki hingga buku lali, dan tertib.", isi: ["1. Niat & baca Basmalah — RUKUN: niat (sunat membaca basmalah di permulaan).", "2. Basuh kedua-dua tangan hingga pergelangan — SUNAT (3 kali).", "3. Berkumur-kumur — SUNAT (3 kali).", "4. Memasukkan air ke hidung & menghembusnya (istinsyaq/istintsar) — SUNAT (3 kali).", "5. Basuh muka — RUKUN (sempadan: tempat tumbuh rambut hingga dagu, telinga ke telinga; sunat 3 kali).", "6. Basuh kedua-dua tangan hingga siku — RUKUN (sunat 3 kali, mulakan kanan).", "7. Sapu sebahagian kepala — RUKUN (sunat sapu seluruh kepala).", "8. Sapu kedua-dua telinga — SUNAT.", "9. Basuh kedua-dua kaki hingga buku lali — RUKUN (sunat 3 kali, mulakan kanan).", "10. Tertib & doa selepas wuduk — RUKUN: tertib (ikut urutan). Doa selepas wuduk adalah sunat yang digalakkan."], arab: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", rumi: "Asyhadu alla ilaha illallah wahdahu la syarikalah, wa asyhadu anna Muhammadan ‘abduhu wa rasuluh", maksud: "Aku bersaksi tiada Tuhan melainkan Allah Yang Esa, tiada sekutu bagi-Nya, dan aku bersaksi bahawa Muhammad ialah hamba dan pesuruh-Nya. (Doa selepas wuduk — untuk latihan bersama guru/ibu bapa)" },
        { id: "t4", tajuk: "Perkara Membatalkan Wuduk, Mandi Wajib & Tayamum", emoji: "⚠️", intro: "Wuduk terbatal apabila berlaku perkara tertentu. Tayamum ialah bersuci dengan debu tanah yang suci apabila tiada air atau tidak boleh menggunakan air.", isi: ["Wuduk terbatal jika: keluar sesuatu dari qubul/dubur (kencing, najis, kentut), tidur yang tidak tetap duduknya/hilang kesedaran, bersentuhan kulit lelaki-perempuan bukan mahram (mengikut perincian mazhab — belajar dengan guru), menyentuh kemaluan dengan tapak tangan tanpa alas (mengikut perincian mazhab).", "Mandi wajib ialah mandi meratakan air ke seluruh badan dengan niat untuk mengangkat hadas besar (contoh: selepas haid bagi perempuan, ihtilam/mimpi basah — mengikut keadaan dan bimbingan ibu bapa/guru).", "Tayamum: niat, sapu muka dan kedua-dua tangan dengan debu tanah yang suci apabila tiada air atau uzur menggunakan air.", "Perkara wajib dan sunat hendaklah dibezakan — rujuk guru Pendidikan Islam untuk situasi khusus."], tip: "Jika ragu-ragu sama ada wuduk terbatal atau tidak, tanya guru. Jangan was-was berterusan." }
      ],
      kuiz: [
        { q: "Yang manakah RUKUN wuduk?", pilih: ["Berkumur-kumur", "Basuh muka", "Sapu telinga"], j: 1, terang: "Basuh muka ialah rukun wuduk. Berkumur dan sapu telinga ialah sunat.", tahap: 2, emo: "😊" },
        { q: "Selepas membasuh muka, apakah rukun seterusnya?", pilih: ["Basuh tangan hingga siku", "Basuh kaki", "Sapu telinga sahaja"], j: 0, terang: "Urutan rukun: muka → tangan hingga siku → sapu sebahagian kepala → kaki hingga buku lali (tertib).", tahap: 2, emo: "💪" },
        { q: "Wuduk terbatal apabila…", pilih: ["Minum air", "Kentut / buang air", "Membaca buku"], j: 1, terang: "Keluar angin (kentut) atau buang air membatalkan wuduk.", tahap: 1, emo: "💧" },
        { q: "Tayamum dilakukan apabila…", pilih: ["Malas mengambil air", "Tiada air atau tidak boleh guna air", "Hendak cepat"], j: 1, terang: "Tayamum hanya apabila tiada air atau uzur (sakit) menggunakan air.", tahap: 2, emo: "🏜️" },
        { q: "Air yang sesuai untuk berwuduk ialah…", pilih: ["Air mutlak yang suci", "Air berperisa", "Air kotor"], j: 0, terang: "Gunakan air mutlak yang suci seperti air paip yang bersih.", tahap: 1, emo: "🚰" }
      ]
    },
    {
      id: "solat", tajuk: "Solat", emoji: "🤲", warna: "#5e35b1",
      cover: "assets/images/solat/cover-solat.svg",
      ringkas: "Solat lima waktu, syarat, rukun solat, pergerakan dan bacaan asas solat.",
      lencana: { id: "hebat-solat", nama: "Hebat Solat", emoji: "🤲" },
      pelajaran: [
        { id: "s1", tajuk: "Maksud Solat & Lima Waktu", emoji: "🕐", gambar: "assets/images/solat/waktu-subuh.jpg", intro: "Solat ialah ibadat menghubungkan kita dengan Allah melalui bacaan dan pergerakan tertentu, bermula dengan takbiratul ihram dan berakhir dengan salam.", isi: ["Subuh: 2 rakaat.", "Zuhur: 4 rakaat.", "Asar: 4 rakaat.", "Maghrib: 3 rakaat.", "Isyak: 4 rakaat."], tip: "Ingat bilangan rakaat: 2 – 4 – 4 – 3 – 4." },
        { id: "s2", tajuk: "Persediaan, Syarat & Pakaian Solat", emoji: "👕", intro: "Sebelum solat, pastikan badan, pakaian dan tempat solat suci, menutup aurat dan menghadap kiblat.", isi: ["Syarat wajib solat (ringkas): Islam, baligh, berakal, suci daripada haid/nifas (perempuan), telah masuk waktu dan dakwah Islam telah sampai.", "Syarat sah solat (ringkas): suci daripada hadas dan najis, menutup aurat, menghadap kiblat, masuk waktu, mengetahui kefarduan solat.", "Aurat lelaki ketika solat: antara pusat hingga lutut (lutut mengikut perincian mazhab — diajar menutup dengan sempurna bersama guru). Aurat perempuan: seluruh badan kecuali muka dan tapak tangan.", "Pakai pakaian bersih dan sopan. Sediakan sejadah di tempat yang bersih."], tip: "Semak sebelum solat: SUCI – AURAT – KIBLAT – WAKTU." },
        { id: "s3", tajuk: "Rukun & Pergerakan Solat", emoji: "🧎", intro: "Rukun solat ialah pergerakan dan bacaan wajib dalam solat. Antara rukun: niat, berdiri bagi yang mampu, takbiratul ihram, membaca al-Fatihah, rukuk dengan tuma‘ninah, iktidal, sujud, duduk antara dua sujud, duduk tahiyat akhir, bacaan tahiyat akhir, selawat, salam pertama dan tertib (ringkasan untuk kanak-kanak — perincian 13 rukun dipelajari bersama guru).", isi: ["1. Berdiri tegak (bagi yang mampu) dan berniat.", "2. Takbiratul ihram: ucapkan “Allahu Akbar” sambil mengangkat tangan.", "3. Membaca surah al-Fatihah.", "4. Rukuk dengan tuma‘ninah (berhenti sebentar dengan tenang).", "5. Iktidal (berdiri semula) dengan tuma‘ninah.", "6. Sujud (7 anggota sujud, dengan tuma‘ninah) — dilakukan dua kali.", "7. Duduk antara dua sujud dengan tuma‘ninah.", "8. Duduk tahiyat awal serta membaca tahiyat awal pada rakaat ke-2 (Zuhur, Asar, Maghrib dan Isyak) — bagi solat Subuh tiada tahiyat awal. Duduk tahiyat akhir serta membaca tahiyat akhir pada rakaat ke-2 (Subuh), rakaat ke-3 (Maghrib) dan rakaat ke-4 (Zuhur, Asar dan Isyak).", "9. Memberi salam pertama ke kanan (salam kedua adalah sunat yang digalakkan)."], arab: "ٱللَّٰهُ أَكْبَرُ", rumi: "Allahu Akbar", maksud: "Allah Maha Besar." },
      ],
      kuiz: [
        { q: "Berapakah rakaat solat Maghrib?", pilih: ["2 rakaat", "3 rakaat", "4 rakaat"], j: 1, terang: "Solat Maghrib ialah 3 rakaat.", tahap: 1, emo: "🌇" },
        { q: "Pergerakan selepas rukuk ialah…", pilih: ["Sujud", "Iktidal", "Salam"], j: 1, terang: "Selepas rukuk kita iktidal (berdiri semula) dengan tuma‘ninah.", tahap: 2, emo: "🧍" },
        { q: "Surah yang wajib dibaca pada setiap rakaat ialah…", pilih: ["Al-Ikhlas", "Al-Fatihah", "An-Nas"], j: 1, terang: "Al-Fatihah ialah rukun qauli dan wajib dibaca setiap rakaat.", tahap: 2, emo: "📖" },
        { q: "Sebelum solat kita mesti pastikan…", pilih: ["Ada telefon", "Suci, tutup aurat, menghadap kiblat", "Ada kawan"], j: 1, terang: "Syarat sah: suci, menutup aurat, menghadap kiblat dan masuk waktu.", tahap: 1, emo: "✅" },
        { q: "Di masjid, apakah adab yang betul?", pilih: ["Berlari dan menjerit", "Bercakap kuat", "Menjaga kebersihan dan tidak bising"], j: 2, terang: "Masjid tempat ibadat — jaga adab, kebersihan dan ketenangan.", tahap: 3, emo: "🕌" }
      ]
    },
    {
      id: "akhlak", tajuk: "Akhlak dan Adab Islam", emoji: "💛", warna: "#ec407a",
      cover: "assets/images/akhlak/cover-akhlak.svg",
      ringkas: "Adab dengan ibu bapa, guru, rakan, makan, tidur, masjid, keselamatan dan internet.",
      lencana: { id: "akhlak-mulia", nama: "Anak Berakhlak Mulia", emoji: "💛" },
      pelajaran: [
        { id: "k1", gambar: "assets/images/akhlak/adab-ibu-bapa.jpg", tajuk: "Adab dengan Ibu Bapa & Guru", emoji: "👨‍👩‍👧", intro: "Ibu bapa dan guru banyak berjasa kepada kita. Kita menghormati dan menyayangi mereka.", isi: ["Bercakap dengan lembut dan tidak meninggikan suara.", "Membantu ibu bapa di rumah mengikut kemampuan.", "Mendengar penerangan guru, menyiapkan tugasan dan mengucapkan terima kasih.", "Mendoakan ibu bapa dan guru setiap hari."], tip: "Ayat ajaib: “Terima kasih”, “Maafkan saya”, “Tolong”." },
        { id: "k2", gambar: "assets/images/akhlak/adab-makan.jpg", tajuk: "Adab Makan, Tidur & Berpakaian", emoji: "🍽️", intro: "Islam mengajar adab dalam aktiviti harian supaya hidup kita bersih dan teratur.", isi: ["Makan: basuh tangan, baca doa, tangan kanan, duduk, tidak membazir dan tidak bercakap dengan mulut penuh.", "Tidur: berwuduk, baca doa, tidur mengiring ke kanan (sunat) dan kemas tempat tidur pada waktu pagi.", "Berpakaian: menutup aurat, bersih, kemas dan tidak sombong dengan pakaian."], tip: "Pilih tindakan terbaik dalam permainan “Pilih Tindakan Terbaik”." },
        { id: "k3", gambar: "assets/images/akhlak/berkata-benar.jpg", tajuk: "Berkata Benar, Amanah & Urus Marah", emoji: "🤝", intro: "Muslim yang baik berkata benar, amanah dan sabar apabila marah.", isi: ["Bercakap benar walaupun susah — berbohong merosakkan kepercayaan.", "Amanah: menjaga barang orang lain dan menepati janji.", "Apabila marah: diam, tarik nafas, berwuduk atau duduk. Jangan memukul atau berkata kasar.", "Jika bersalah, berani meminta maaf dan membetulkan kesilapan."], tip: "Marah? Berhenti – Tarik nafas – Berwuduk – Bertenang." },
        { id: "k4", tajuk: "Keselamatan Diri, Telefon & Internet", emoji: "📱", intro: "Kita menjaga keselamatan diri di rumah, di sekolah dan ketika menggunakan telefon atau internet.", isi: ["Jangan berkongsi nama penuh, alamat, gambar atau kata laluan dengan orang tidak dikenali.", "Jika ada mesej atau gambar yang membuatkan kita tidak selesa, berhenti dan beritahu ibu bapa/guru dengan segera.", "Gunakan telefon untuk belajar dan berhubung secara baik. Hadkan masa skrin dan utamakan solat, tidur dan bermain di luar.", "Adab dengan rakan: tidak mengejek, tidak membuli, membantu rakan yang kesusahan dan berkongsi dengan ikhlas."], tip: "Peraturan internet keluarga: Tanya dahulu, jangan kongsi maklumat peribadi, beritahu orang dewasa jika tidak selesa." }
      ],
      kuiz: [
        { q: "Rakan terjatuh di padang. Apakah tindakan terbaik?", pilih: ["Ketawa", "Membantu dan memanggil guru jika perlu", "Berlalu pergi"], j: 1, terang: "Kita membantu rakan dan memaklumkan guru jika ada kecederaan.", tahap: 3, emo: "🏃" },
        { q: "Apakah adab makan yang betul?", pilih: ["Makan sambil berlari", "Basuh tangan, baca doa, makan tangan kanan", "Membazir makanan"], j: 1, terang: "Basuh tangan, baca doa dan makan dengan tangan kanan sambil duduk.", tahap: 1, emo: "🍽️" },
        { q: "Orang tidak dikenali meminta alamat rumah melalui internet. Kamu patut…", pilih: ["Berikan alamat", "Tidak berkongsi dan beritahu ibu bapa/guru", "Ajak berjumpa"], j: 1, terang: "Jangan kongsi maklumat peribadi. Beritahu orang dewasa yang dipercayai.", tahap: 3, emo: "📱" },
        { q: "Apabila berasa sangat marah, apakah langkah yang baik?", pilih: ["Menjerit dan memukul", "Diam, tarik nafas dan berwuduk", "Merajuk berhari-hari"], j: 1, terang: "Kawal marah dengan diam, bernafas dan berwuduk.", tahap: 2, emo: "😤" },
        { q: "Amanah bermaksud…", pilih: ["Menyimpan rahsia jahat", "Menjaga tanggungjawab dan menepati janji", "Mengambil barang orang"], j: 1, terang: "Amanah ialah menjaga tanggungjawab dan menepati janji.", tahap: 1, emo: "🤝" }
      ]
    },
    {
      id: "ibadah", tajuk: "Puasa dan Ibadah", emoji: "🕋", warna: "#fb8c00",
      cover: "assets/images/ibadah/cover-ibadah.svg",
      ringkas: "Puasa Ramadan, sahur dan berbuka, perkara membatalkan puasa, zakat fitrah, korban, haji dan umrah.",
      lencana: { id: "juara-ibadah", nama: "Sahabat Ramadan", emoji: "🌙" },
      pelajaran: [
        { id: "i1", tajuk: "Maksud Puasa & Niat", emoji: "🌙", intro: "Puasa ialah menahan diri daripada makan, minum dan perkara yang membatalkan puasa dari terbit fajar (Subuh) hingga terbenam matahari (Maghrib) kerana Allah.", isi: ["Puasa Ramadan wajib ke atas Muslim yang baligh, berakal dan mampu (kanak-kanak berlatih mengikut kemampuan dan bimbingan ibu bapa).", "Niat puasa Ramadan dilakukan pada waktu malam sebelum fajar (mengikut perincian mazhab — belajar lafaz niat yang disemak bersama guru).", "Latihan untuk kanak-kanak: berpuasa penuh atau berperingkat mengikut kesihatan dan nasihat ibu bapa. Utamakan kesihatan."], tip: "Niat ialah keazaman dalam hati untuk berpuasa kerana Allah." },
        { id: "i2", gambar: "assets/images/ibadah/batal-puasa.jpg", tajuk: "Sahur, Berbuka & Pembatal Puasa", emoji: "🍲", intro: "Bersahur ialah makan sebelum fajar (sunat yang digalakkan). Berbuka ialah makan apabila masuk waktu Maghrib.", isi: ["Perkara membatalkan puasa (ringkas): makan dan minum dengan sengaja, muntah dengan sengaja, datang haid/nifas dan hilang akal (perincian bersama guru).", "Terlupa makan/minum ketika berpuasa tidak membatalkan puasa (mengikut panduan yang diajar guru) — teruskan berpuasa.", "Orang sakit, musafir, perempuan haid/nifas dan yang tidak mampu diberi kelonggaran (rukhsah) mengganti atau mengikut hukum yang ditetapkan — rujuk guru/pihak berautoriti.", "Adab berbuka: segera berbuka apabila masuk waktu, membaca doa berbuka dan tidak membazir."], tip: "Jika tidak sihat, beritahu ibu bapa. Kesihatan amat penting." },
        { id: "i3", gambar: "assets/images/ibadah/haji-umrah.jpg", tajuk: "Zakat Fitrah, Korban, Haji & Umrah", emoji: "🕋", intro: "Zakat, korban, haji dan umrah ialah ibadah yang mengajar kita berkongsi rezeki dan mengingati Allah.", isi: ["Zakat fitrah: dikeluarkan pada bulan Ramadan untuk menyucikan puasa dan membantu golongan memerlukan (kadar dan masa mengikut ketetapan pihak berkuasa negeri).", "Korban: menyembelih haiwan korban pada Hari Raya Aidiladha dan hari tasyrik, mengingati ketaatan Nabi Ibrahim a.s. dan Nabi Ismail a.s.", "Haji: ibadah ke Makkah pada bulan Zulhijah bagi yang mampu. Umrah: ziarah dan ibadah di Makkah pada bila-bila masa mengikut syarat.", "Tempat penting: Kaabah di Masjidil Haram (Makkah) dan Masjid Nabawi (Madinah)."], tip: "Amalan sunat untuk kanak-kanak: bersedekah, membaca al-Quran, berzikir dan membantu orang lain." }
      ],
      kuiz: [
        { q: "Puasa bermula dari… hingga…", pilih: ["Zuhur hingga Asar", "Terbit fajar hingga terbenam matahari", "Isyak hingga Subuh"], j: 1, terang: "Puasa dari terbit fajar (Subuh) hingga terbenam matahari (Maghrib).", tahap: 1, emo: "🌅" },
        { q: "Yang membatalkan puasa ialah…", pilih: ["Tidur siang", "Makan dengan sengaja", "Membaca buku"], j: 1, terang: "Makan atau minum dengan sengaja membatalkan puasa.", tahap: 2, emo: "🍽️" },
        { q: "Zakat fitrah dikeluarkan pada bulan…", pilih: ["Zulhijah", "Ramadan", "Muharram"], j: 1, terang: "Zakat fitrah dikeluarkan dalam bulan Ramadan (mengikut ketetapan semasa).", tahap: 1, emo: "🤲" },
        { q: "Kaabah terletak di…", pilih: ["Masjid Nabawi, Madinah", "Masjidil Haram, Makkah", "Masjid al-Aqsa"], j: 1, terang: "Kaabah berada di Masjidil Haram, Makkah dan menjadi kiblat solat.", tahap: 2, emo: "🕋" },
        { q: "Sahur ialah…", pilih: ["Makan pada waktu malam raya", "Makan sebelum fajar untuk berpuasa", "Makan selepas Maghrib"], j: 1, terang: "Sahur ialah makan sebelum fajar, sunat yang digalakkan.", tahap: 1, emo: "🍲" }
      ]
    },
    {
      id: "sirah", tajuk: "Sirah Nabi dan Kisah Islam", emoji: "🐪", warna: "#3949ab",
      cover: "assets/images/sirah/cover-sirah.svg",
      ringkas: "Kelahiran Nabi Muhammad SAW, wahyu pertama, hijrah, Madinah dan akhlak Rasulullah SAW. (Tiada gambaran wajah nabi.)",
      lencana: { id: "pencinta-sirah", nama: "Pencinta Sirah", emoji: "⭐" },
      pelajaran: [
        { id: "h1", tajuk: "Kelahiran & Zaman Kanak-kanak Nabi SAW", emoji: "⭐", intro: "Nabi Muhammad SAW dilahirkan di Makkah pada Tahun Gajah. Sejak kecil Baginda dikenali jujur dan amanah.", isi: ["Ayah Baginda, Abdullah, wafat sebelum Baginda dilahirkan. Ibu Baginda ialah Aminah binti Wahab.", "Baginda disusui oleh Halimah as-Sa‘diah dan membesar dengan akhlak mulia.", "Apabila dewasa, Baginda digelar al-Amin (yang dipercayai) kerana kejujuran Baginda.", "Pengajaran: berkata benar dan amanah sejak kecil."], tip: "Nota visual: App ini TIDAK menggambarkan wajah para nabi. Kita menggunakan pemandangan, objek dan tempat sejarah." },
        { id: "h2", tajuk: "Wahyu Pertama & Dakwah", emoji: "⛰️", intro: "Pada usia 40 tahun, Baginda menerima wahyu pertama di Gua Hira melalui Malaikat Jibril.", isi: ["Perkataan pertama wahyu ialah “Iqra’” (Bacalah) — permulaan surah al-‘Alaq.", "Khadijah r.a., isteri Baginda, ialah orang pertama beriman dan banyak membantu dakwah.", "Baginda berdakwah dengan hikmah dan sabar walaupun menghadapi cabaran di Makkah.", "Pengajaran: cintai ilmu dan membaca."], tip: "Gua Hira terletak di Jabal Nur, Makkah." },
        { id: "h3", tajuk: "Hijrah & Masyarakat Madinah", emoji: "🗺️", intro: "Hijrah ialah perpindahan Nabi SAW dan umat Islam dari Makkah ke Madinah untuk menyebarkan Islam dengan aman.", isi: ["Di Madinah, Baginda membina Masjid Nabawi dan mempersaudarakan Muhajirin (dari Makkah) dan Ansar (penduduk Madinah).", "Piagam Madinah menjaga keadilan dan keamanan masyarakat berbilang kaum/agama (pada tahap pengenalan kanak-kanak).", "Akhlak Baginda: penyayang, pemaaf, suka membantu, jujur dan merendah diri.", "Pengajaran: bekerjasama, berlaku adil dan menyayangi sesama manusia."], tip: "Gunakan permainan Susun Langkah untuk menyusun garis masa sirah." }
      ],
      kuiz: [
        { q: "Di manakah Nabi Muhammad SAW dilahirkan?", pilih: ["Madinah", "Makkah", "Taif"], j: 1, terang: "Baginda dilahirkan di Makkah pada Tahun Gajah.", tahap: 1, emo: "⭐" },
        { q: "Wahyu pertama diterima di…", pilih: ["Gua Hira", "Masjid Nabawi", "Kaabah"], j: 0, terang: "Wahyu pertama di Gua Hira dengan perkataan “Iqra’”.", tahap: 2, emo: "⛰️" },
        { q: "Hijrah ialah perpindahan dari…", pilih: ["Madinah ke Makkah", "Makkah ke Madinah", "Makkah ke Mesir"], j: 1, terang: "Hijrah ialah perpindahan dari Makkah ke Madinah.", tahap: 1, emo: "🐪" },
        { q: "Gelaran Nabi SAW kerana kejujuran Baginda ialah…", pilih: ["Al-Amin", "Al-Faruq", "As-Siddiq"], j: 0, terang: "Baginda digelar al-Amin (yang dipercayai).", tahap: 2, emo: "💛" },
        { q: "Pengajaran utama daripada sirah untuk kanak-kanak ialah…", pilih: ["Menjadi terkenal", "Berakhlak mulia, jujur dan sabar", "Mengumpul harta"], j: 1, terang: "Sirah mengajar kita berakhlak mulia, jujur, sabar dan penyayang.", tahap: 3, emo: "🌟" }
      ]
    },
    {
      id: "kisahnabi", tajuk: "Kisah Para Nabi & Rasul", emoji: "📖", warna: "#00897b",
      cover: "assets/images/kisahnabi/cover-kisahnabi.svg",
      ringkas: "Cerita bergambar Nabi Adam, Nuh, Ibrahim, Yusuf, Musa, Yunus dan para nabi lain — dengan aktiviti susun peristiwa, kuiz pengajaran dan padanan sifat terpuji. (Tiada gambaran rupa fizikal para nabi.)",
      lencana: { id: "pencinta-kisah-nabi", nama: "Pencinta Kisah Nabi", emoji: "📖" },
      pelajaran: [
        { id: "n1", tajuk: "Kisah Nabi Adam AS", emoji: "🌳", gambar: "assets/images/kisahnabi/kisah-adam.jpg",
          intro: "Nabi Adam AS ialah manusia pertama yang diciptakan oleh Allah SWT dan bapa kepada seluruh manusia.",
          isi: ["Allah menciptakan Nabi Adam AS daripada tanah, kemudian mengajarnya nama-nama segala benda.", "Allah memerintahkan para malaikat supaya sujud hormat kepada Adam. Malaikat taat, tetapi Iblis enggan kerana sombong.", "Nabi Adam AS dan isterinya Hawa tinggal di syurga. Allah melarang mereka mendekati satu pokok.", "Syaitan membisikkan tipu daya sehingga mereka termakan buah larangan itu. Mereka sangat menyesal dan segera bertaubat.", "Allah menerima taubat mereka, lalu mereka turun ke bumi. Kita semua ialah keturunan Nabi Adam AS."],
          tip: "Jika kita tersilap buat salah, jangan sombong — cepat-cepat menyesal, bertaubat dan minta maaf, seperti Nabi Adam AS.",
          sumber: "Surah Al-Baqarah (ayat 30–39) & Surah Al-A'raf (ayat 19–25)" },
        { id: "n2", tajuk: "Kisah Nabi Nuh AS", emoji: "🚢", gambar: "assets/images/kisahnabi/kisah-nuh.jpg",
          intro: "Nabi Nuh AS berdakwah kepada kaumnya mengajak menyembah Allah selama 950 tahun dengan penuh sabar.",
          isi: ["Kaum Nabi Nuh AS menyembah berhala dan enggan mendengar dakwah walaupun diajak siang dan malam.", "Allah memerintahkan Nabi Nuh AS membina sebuah bahtera (kapal) besar di daratan.", "Orang-orang mentertawakan Baginda kerana membina kapal jauh dari laut, tetapi Baginda terus taat.", "Apabila banjir besar tiba, Nabi Nuh AS, keluarganya yang beriman dan sepasang daripada setiap haiwan menaiki bahtera.", "Bahtera berlayar dengan selamat dan berlabuh selepas air surut. Orang yang enggan dan sombong telah tenggelam."],
          tip: "Kita belajar erti sabar dan tidak mudah putus asa daripada Nabi Nuh AS — terus buat baik walaupun ada orang mengejek.",
          sumber: "Surah Hud (ayat 25–49) & Surah Nuh" },
        { id: "n3", tajuk: "Kisah Nabi Ibrahim AS", emoji: "🕋", gambar: "assets/images/kisahnabi/kisah-ibrahim.jpg",
          intro: "Nabi Ibrahim AS ialah bapa para nabi yang sangat yakin dan taat kepada Allah.",
          isi: ["Sejak remaja, Nabi Ibrahim AS mencari Tuhan yang sebenar. Baginda melihat bintang, bulan dan matahari terbenam, lalu yakin Penciptanya ialah Allah.", "Kaumnya menyembah berhala. Nabi Ibrahim AS memecahkan berhala-berhala itu supaya mereka berfikir.", "Raja yang marah mencampakkan Baginda ke dalam api, tetapi Allah memerintahkan api menjadi sejuk dan sejahtera.", "Bersama anaknya Nabi Ismail AS, Baginda membina Kaabah di Makkah dan berdoa untuk penduduknya.", "Baginda juga diuji dengan perintah menyembelih anaknya; kerana ketaatan mereka, Allah menggantikannya dengan seekor kibas."],
          tip: "Berani berkata benar dan yakin kepada Allah seperti Nabi Ibrahim AS.",
          sumber: "Surah Al-An'am (ayat 76–79), Surah Al-Anbiya' (ayat 57–69), Surah Al-Baqarah (ayat 127) & Surah As-Saffat (ayat 102–107)" },
        { id: "n4", tajuk: "Kisah Nabi Yusuf AS", emoji: "⭐", gambar: "assets/images/kisahnabi/kisah-yusuf.jpg",
          intro: "Nabi Yusuf AS ialah nabi yang sangat sabar dan pemaaf. Kisahnya diceritakan khas dalam Surah Yusuf.",
          isi: ["Semasa kecil, Nabi Yusuf AS bermimpi 11 bintang, matahari dan bulan sujud kepadanya.", "Abang-abangnya yang cemburu membuangnya ke dalam telaga. Baginda kemudian dibawa ke Mesir dan dijual.", "Baginda difitnah dan dipenjarakan walaupun tidak bersalah, namun Baginda tetap sabar dan menjaga maruah.", "Allah mengajarnya mentafsir mimpi. Baginda mentafsir mimpi raja Mesir tentang 7 tahun subur dan 7 tahun kemarau.", "Baginda dilantik menjadi pembesar Mesir dan menyimpan makanan dengan amanah untuk menghadapi kemarau.", "Apabila abang-abangnya datang, Baginda memaafkan mereka dan tidak berdendam."],
          tip: "Memaafkan orang yang pernah menyakiti kita ialah akhlak mulia Nabi Yusuf AS.",
          sumber: "Surah Yusuf (keseluruhan surah ke-12, terutama ayat 4, 43–49 & 92)" },
        { id: "n5", tajuk: "Kisah Nabi Musa AS", emoji: "🌊", gambar: "assets/images/kisahnabi/kisah-musa.jpg",
          intro: "Nabi Musa AS ialah nabi yang berani menghadapi raja yang zalim, Firaun, dengan pertolongan Allah.",
          isi: ["Nabi Musa AS lahir pada zaman Firaun yang kejam. Ibunya menghanyutkannya di Sungai Nil mengikut ilham Allah, dan Baginda dipelihara di istana Firaun.", "Setelah dewasa, Baginda berhijrah ke Madyan dan membantu dua orang perempuan memberi minum ternakan mereka.", "Di Bukit Tursina, Allah bercakap dengan Nabi Musa AS dan memilihnya sebagai rasul.", "Allah memberinya mukjizat: tongkat menjadi ular dan tangan bercahaya. Baginda kembali menghadapi Firaun dengan berani.", "Apabila Firaun mengejar, Allah membelah laut untuk Nabi Musa AS dan pengikutnya; Firaun dan tenteranya tenggelam."],
          tip: "Apabila takut atau buntu, ingatlah pertolongan Allah sangat dekat — seperti Nabi Musa AS di tepi laut.",
          sumber: "Surah Al-Qasas (ayat 7–13), Surah Taha (ayat 11–24) & Surah Asy-Syu'ara' (ayat 52–66)" },
        { id: "n6", tajuk: "Kisah Nabi Yunus AS", emoji: "🐋", gambar: "assets/images/kisahnabi/kisah-yunus.jpg",
          intro: "Nabi Yunus AS ialah nabi yang bertaubat di dalam perut ikan besar dan doanya sangat mustajab.",
          isi: ["Nabi Yunus AS berdakwah kepada penduduk Ninawa, tetapi mereka enggan. Baginda meninggalkan mereka sebelum mendapat izin Allah.", "Baginda menaiki kapal. Apabila kapal hampir karam, undian dibuat dan nama Baginda terpilih.", "Baginda terjun ke laut dan ditelan oleh seekor ikan yang sangat besar.", "Di dalam kegelapan perut ikan, Baginda berdoa: لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ (Lā ilāha illā anta, subḥānaka innī kuntu minaẓ-ẓālimīn) — Tiada Tuhan selain Engkau, Maha Suci Engkau, sesungguhnya aku termasuk orang yang zalim.", "Allah menerima taubatnya. Ikan itu memuntahkannya ke pantai dan Baginda kembali kepada kaumnya; akhirnya mereka beriman."],
          tip: "Jika kita kesusahan, jangan putus asa — berdoa dan bertaubatlah seperti Nabi Yunus AS.",
          sumber: "Surah As-Saffat (ayat 139–148), Surah Al-Anbiya' (ayat 87) & Surah Yunus (ayat 98)" },
        { id: "n7", tajuk: "Para Nabi Lain (1): Idris, Hud, Saleh, Luth AS", emoji: "🏜️", gambar: "assets/images/kisahnabi/kisah-nabi-lain-1.jpg",
          intro: "Ramai lagi nabi diutuskan kepada kaum masing-masing. Kita kenali empat orang lagi.",
          isi: ["Nabi Idris AS: nabi yang sangat benar dan sabar; Allah mengangkatnya ke tempat yang tinggi.", "Nabi Hud AS: diutus kepada kaum Ad yang kuat tetapi sombong. Mereka menolak dakwah lalu dibinasakan oleh angin yang sangat kencang.", "Nabi Saleh AS: diutus kepada kaum Tsamud. Allah memberinya mukjizat seekor unta betina, tetapi kaum yang degil menyembelih unta itu lalu mereka menerima azab.", "Nabi Luth AS: diutus kepada kaumnya yang melakukan perbuatan keji. Baginda mengajak mereka bertaubat tetapi mereka menolak.", "Pengajaran: setiap kaum yang sombong dan menolak kebenaran akhirnya binasa — kita pilih untuk taat."],
          tip: "Allah sayang orang yang taat dan jujur. Jauhi sikap sombong seperti kaum Ad dan Tsamud.",
          sumber: "Surah Maryam (ayat 56–57), Surah Hud (ayat 50–60 & 77–83) & Surah Al-A'raf (ayat 73–79)" },
        { id: "n8", tajuk: "Para Nabi Lain (2): Ismail, Ayub, Syuaib AS & 25 Nabi", emoji: "🌙", gambar: "assets/images/kisahnabi/kisah-nabi-lain-2.jpg",
          intro: "Kita kenali lagi para nabi mulia dan senarai 25 nabi yang wajib diketahui.",
          isi: ["Nabi Ismail AS: anak Nabi Ibrahim AS yang sangat sabar dan menepati janji; membantu ayahnya membina Kaabah.", "Nabi Ayub AS: sangat sabar ketika diuji dengan sakit dan kehilangan harta serta keluarga, tetap bersyukur dan berdoa.", "Nabi Syuaib AS: mengajak kaumnya berlaku adil dalam timbangan dan jual beli, jangan menipu sukatan.", "Umat Islam hendaklah mengetahui 25 nabi yang disebut dalam Al-Quran: Adam, Idris, Nuh, Hud, Saleh, Ibrahim, Luth, Ismail, Ishak, Yaakub, Yusuf, Ayub, Syuaib, Musa, Harun, Zulkifli, Daud, Sulaiman, Ilyas, Ilyasa', Yunus, Zakaria, Yahya, Isa dan Muhammad SAW — penutup segala nabi.",
          "Susunan 25 nabi ini ialah susunan zaman (kronologi) yang masyhur menurut ulama sirah, berdasarkan petunjuk Al-Quran dan kitab Qasas al-Anbiya'. Al-Quran menyebut nama-nama mereka, tetapi tidak menetapkan satu urutan rasmi.",
          "Ada beberapa kedudukan yang tidak dapat dipastikan sepenuhnya — contohnya zaman Nabi Zulkifli AS tidak dijelaskan dalam Al-Quran, dan ulama juga berbeza pandangan tentang susunan sebahagian kecil nabi. Yang penting, kita mengenali nama mereka dan mengambil pengajaran daripada kisah mereka."],
          tip: "Jujur dalam timbangan dan sabar dalam ujian — teladan para nabi untuk hidup harian kita.",
          sumber: "Surah Maryam (ayat 54), Surah Al-Anbiya' (ayat 83) & Surah Hud (ayat 84–85)" }
      ],
      kuiz: [
        { q: "Siapakah manusia dan nabi pertama?", pilih: ["Nabi Nuh AS", "Nabi Adam AS", "Nabi Ibrahim AS"], j: 1, terang: "Nabi Adam AS ialah manusia pertama ciptaan Allah.", tahap: 1, emo: "🌳" },
        { q: "Nabi manakah yang membina bahtera besar kerana perintah Allah?", pilih: ["Nabi Nuh AS", "Nabi Yunus AS", "Nabi Musa AS"], j: 0, terang: "Nabi Nuh AS membina bahtera sebelum banjir besar.", tahap: 1, emo: "🚢" },
        { q: "Api menjadi sejuk untuk nabi yang mana?", pilih: ["Nabi Yusuf AS", "Nabi Ibrahim AS", "Nabi Adam AS"], j: 1, terang: "Allah memerintahkan api menjadi sejuk untuk Nabi Ibrahim AS.", tahap: 1, emo: "🔥" },
        { q: "Siapakah nabi yang memaafkan abang-abangnya di Mesir?", pilih: ["Nabi Yusuf AS", "Nabi Musa AS", "Nabi Hud AS"], j: 0, terang: "Nabi Yusuf AS memaafkan abang-abangnya dan tidak berdendam.", tahap: 1, emo: "⭐" },
        { q: "Laut terbelah untuk menyelamatkan nabi yang mana?", pilih: ["Nabi Yunus AS", "Nabi Nuh AS", "Nabi Musa AS"], j: 2, terang: "Allah membelah laut untuk Nabi Musa AS dan pengikutnya.", tahap: 1, emo: "🌊" },
        { q: "Nabi manakah yang ditelan ikan besar lalu berdoa di dalam perutnya?", pilih: ["Nabi Yunus AS", "Nabi Saleh AS", "Nabi Idris AS"], j: 0, terang: "Nabi Yunus AS berdoa dan bertaubat di dalam perut ikan.", tahap: 1, emo: "🐋" },
        { q: "Pilih pengajaran kisah Nabi Nuh AS.", pilih: ["Cepat putus asa", "Sabar dan tidak mudah putus asa", "Suka mentertawakan orang"], j: 1, terang: "Nabi Nuh AS berdakwah 950 tahun dengan sabar.", tahap: 1, emo: "💪" },
        { q: "Pilih pengajaran kisah Nabi Yusuf AS.", pilih: ["Berdendam", "Cemburu", "Memaafkan orang lain"], j: 2, terang: "Nabi Yusuf AS memaafkan abang-abangnya.", tahap: 1, emo: "❤️" },
        { q: "Pilih pengajaran kisah Nabi Adam AS apabila kita tersilap.", pilih: ["Sombong dan lari", "Segera bertaubat dan minta maaf", "Menyalahkan orang lain"], j: 1, terang: "Nabi Adam AS segera bertaubat dan Allah menerimanya.", tahap: 2, emo: "🤲" },
        { q: "Pilih pengajaran kisah Nabi Ayub AS.", pilih: ["Merungut ketika sakit", "Sabar dan tetap berdoa ketika diuji", "Berhenti berdoa"], j: 1, terang: "Nabi Ayub AS sangat sabar ketika diuji dengan sakit.", tahap: 2, emo: "🌿" }
      ]
    }

  ],
  doaList: [
    { id: "doa1", nama: "Doa Sebelum Makan", situasi: "Sebelum makan dan minum", emo: "🍽️", arab: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ، اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ", rumi: "Bismillahir-rahmanir-rahim. Allahumma barik lana fima razaqtana wa qina ‘azaban-nar.", maksud: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Ya Allah, berkatilah rezeki yang Engkau kurniakan kepada kami dan peliharalah kami daripada azab neraka." },
    { id: "doa2", nama: "Doa Selepas Makan", situasi: "Selepas makan dan minum", emo: "🥤", arab: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ", rumi: "Alhamdu lillahil-lazi at‘amana wa saqana wa ja‘alana minal-muslimin.", maksud: "Segala puji bagi Allah yang memberi kami makan dan minum serta menjadikan kami dalam kalangan orang Islam." },
    { id: "doa3", nama: "Doa Sebelum Tidur", situasi: "Sebelum tidur malam", emo: "🛏️", arab: "بِسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", rumi: "Bismikallahumma amutu wa ahya.", maksud: "Dengan nama-Mu ya Allah, aku mati (tidur) dan aku hidup (bangun)." },
    { id: "doa4", nama: "Doa Bangun Tidur", situasi: "Apabila bangun daripada tidur", emo: "🌅", arab: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", rumi: "Alhamdu lillahil-lazi ahyana ba‘da ma amatana wa ilayhin-nusyur.", maksud: "Segala puji bagi Allah yang menghidupkan kami selepas mematikan kami (tidur), dan kepada-Nya kami akan kembali." },
    { id: "doa5", nama: "Doa Masuk Tandas", situasi: "Sebelum masuk tandas", emo: "🚪", arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", rumi: "Allahumma inni a‘uzu bika minal-khubusi wal-khaba’is.", maksud: "Ya Allah, aku berlindung dengan-Mu daripada kejahatan syaitan dan kekotoran. (Dibaca sebelum masuk — latih adabnya bersama guru/ibu bapa)" },
    { id: "doa6", nama: "Doa Keluar Tandas", situasi: "Selepas keluar tandas", emo: "✨", arab: "غُفْرَانَكَ", rumi: "Ghufaranaka.", maksud: "(Aku memohon) keampunan-Mu ya Allah." },
    { id: "doa7", nama: "Doa Masuk Rumah", situasi: "Apabila masuk ke rumah", emo: "🏠", arab: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا", rumi: "Bismillahi walajna wa bismillahi kharajna wa ‘alallahi rabbina tawakkalna.", maksud: "Dengan nama Allah kami masuk dan dengan nama Allah kami keluar, dan kepada Allah Tuhan kami, kami bertawakal. (Kemudian berilah salam kepada ahli rumah)" },
    { id: "doa8", nama: "Doa Keluar Rumah", situasi: "Apabila keluar dari rumah", emo: "🚶", arab: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", rumi: "Bismillahi tawakkaltu ‘alallah wa la hawla wa la quwwata illa billah.", maksud: "Dengan nama Allah, aku bertawakal kepada Allah. Tiada daya dan kekuatan melainkan dengan pertolongan Allah." },
    { id: "doa9", nama: "Doa Sebelum Belajar", situasi: "Sebelum memulakan pelajaran", emo: "📚", arab: "رَّبِّ زِدْنِي عِلْمًا", rumi: "Rabbi zidni ‘ilma. (Surah Taha, ayat 114)", maksud: "Wahai Tuhanku, tambahkanlah kepadaku ilmu pengetahuan." },
    { id: "doa10", nama: "Doa Untuk Ibu Bapa", situasi: "Mendoakan ibu bapa setiap hari", emo: "👨‍👩‍👧", arab: "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", rumi: "Rabbighfir li wa liwalidayya warhamhuma kama rabbayani saghira.", maksud: "Wahai Tuhanku, ampunilah aku dan ibu bapaku, dan kasihanilah mereka sebagaimana mereka mendidikku semasa kecil." },
    { id: "doa11", nama: "Doa Menaiki Kenderaan", situasi: "Apabila menaiki kereta, bas dan lain-lain", emo: "🚗", arab: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ", rumi: "Subhanal-lazi sakhkhara lana haza wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun. (Surah az-Zukhruf, ayat 13–14)", maksud: "Maha Suci Tuhan yang menundukkan kenderaan ini untuk kami, sedangkan kami tidak mampu menguasainya. Dan sesungguhnya kepada Tuhan kami, kami akan kembali." },
    { id: "doa12", nama: "Doa Selepas Wuduk", situasi: "Selepas selesai berwuduk", emo: "💧", arab: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", rumi: "Asyhadu alla ilaha illallah wahdahu la syarikalah, wa asyhadu anna Muhammadan ‘abduhu wa rasuluh.", maksud: "Aku bersaksi tiada Tuhan melainkan Allah Yang Esa, tiada sekutu bagi-Nya, dan aku bersaksi bahawa Muhammad ialah hamba dan pesuruh-Nya." },
    { id: "doa13", nama: "Zikir Harian", situasi: "Zikir ringkas pada bila-bila masa yang sesuai", emo: "📿", arab: "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَاللَّهُ أَكْبَرُ", rumi: "Subhanallah, walhamdulillah, wallahu akbar.", maksud: "Maha Suci Allah, segala puji bagi Allah, dan Allah Maha Besar." }
  ],
  hijaiyah: [
    ["ا", "Alif"], ["ب", "Ba"], ["ت", "Ta"], ["ث", "Tha"], ["ج", "Jim"], ["ح", "Ha"], ["خ", "Kha"], ["د", "Dal"], ["ذ", "Zal"], ["ر", "Ra"], ["ز", "Zai"], ["س", "Sin"], ["ش", "Syin"], ["ص", "Sad"], ["ض", "Dad"], ["ط", "Ta (tebal)"], ["ظ", "Za (tebal)"], ["ع", "‘Ain"], ["غ", "Ghain"], ["ف", "Fa"], ["ق", "Qaf"], ["ك", "Kaf"], ["ل", "Lam"], ["م", "Mim"], ["ن", "Nun"], ["ه", "Ha bulat"], ["و", "Wau"], ["ي", "Ya"]
  ],
  wudukLangkah: [
    { t: "Niat & Basmalah", d: "Niat dalam hati kerana Allah (RUKUN: niat). Membaca basmalah adalah sunat.", emo: "💧", img: "assets/images/taharah/wuduk-01-niat.jpg" },
    { t: "Basuh Tangan", d: "Basuh kedua-dua tangan hingga pergelangan 3 kali (SUNAT).", emo: "🙌", img: "assets/images/taharah/wuduk-02-tangan.jpg" },
    { t: "Berkumur", d: "Berkumur-kumur 3 kali (SUNAT).", emo: "💦", img: "assets/images/taharah/wuduk-03-kumur.jpg" },
    { t: "Bersihkan Hidung", d: "Masukkan air ke hidung dan hembus keluar 3 kali (SUNAT).", emo: "👃", img: "assets/images/taharah/wuduk-04-hidung.jpg" },
    { t: "Basuh Muka", d: "Basuh seluruh muka mengikut sempadannya (RUKUN). Sunat 3 kali.", emo: "😊", img: "assets/images/taharah/wuduk-05-muka.jpg" },
    { t: "Basuh Tangan ke Siku", d: "Basuh kedua-dua tangan hingga siku, mulakan kanan (RUKUN).", emo: "💪", img: "assets/images/taharah/wuduk-06-siku.jpg" },
    { t: "Sapu Kepala", d: "Sapu sebahagian kepala dengan air (RUKUN). Sunat sapu seluruh kepala.", emo: "🙆", img: "assets/images/taharah/wuduk-07-kepala.jpg" },
    { t: "Sapu Telinga", d: "Sapu kedua-dua telinga di dalam dan di luar (SUNAT).", emo: "👂", img: "assets/images/taharah/wuduk-08-telinga.jpg" },
    { t: "Basuh Kaki", d: "Basuh kedua-dua kaki hingga buku lali, mulakan kanan (RUKUN).", emo: "🦶", img: "assets/images/taharah/wuduk-09-kaki.jpg" },
    { t: "Doa Selepas Wuduk", d: "Membaca doa selepas wuduk (SUNAT yang digalakkan). Tertib ialah RUKUN — ikut urutan.", emo: "🤲", img: "assets/images/taharah/wuduk-10-doa.jpg" }
  ],
  jenisAir: [
    { nama: "Air Mutlak", emo: "💧", status: "Suci lagi Menyucikan", kelas: "betul", maksud: "Air yang kekal dengan sifat asal yang Allah ciptakan dan tidak bercampur sesuatu yang mengubahnya. Boleh digunakan untuk berwuduk, mandi dan bersuci.", contoh: "Air paip bersih di rumah, air hujan, air sungai" },
    { nama: "Air Musyammas", emo: "☀️", status: "Suci & Menyucikan — Makruh Digunakan pada Badan", kelas: "tengah", maksud: "Air yang dipanaskan oleh cahaya matahari di dalam bekas logam (selain emas dan perak). Mengikut mazhab Syafi‘i makruh menggunakannya pada badan. Belajar perinciannya bersama guru.", contoh: "Air dalam bekas besi yang terjemur panas matahari" },
    { nama: "Air Musta‘mal", emo: "🔁", status: "Suci tetapi Tidak Menyucikan", kelas: "tengah", maksud: "Air yang telah digunakan untuk mengangkat hadas seperti berwuduk atau mandi wajib, tidak berubah sifatnya dan kurang daripada dua kolah. Tidak boleh digunakan semula untuk berwuduk.", contoh: "Air titisan yang telah digunakan untuk berwuduk" },
    { nama: "Air Mutanajjis", emo: "🚫", status: "Najis — Tidak Boleh Digunakan", kelas: "salah", maksud: "Air yang dimasuki najis. Jika air sedikit (kurang dua kolah), ia menjadi mutanajjis walaupun tidak berubah. Jika air banyak (dua kolah atau lebih), ia mutanajjis apabila berubah bau, warna atau rasanya kerana najis.", contoh: "Air yang telah dimasuki atau berubah kerana najis" }
  ],
  akhlakKad: [
    { t: "Adab dengan Ibu Bapa", emo: "👨‍👩‍👧", img: "assets/images/akhlak/adab-ibu-bapa.jpg", d: "Bercakap dengan lembut, mendengar nasihat, membantu kerja rumah mengikut kemampuan, bersalam dengan ibu bapa dan mendoakan mereka setiap hari." },
    { t: "Adab dengan Guru", emo: "👩‍🏫", img: "assets/images/akhlak/adab-guru.jpg", d: "Mendengar penerangan guru, mengangkat tangan sebelum bertanya, menyiapkan tugasan, menjaga barang sekolah dan mengucapkan terima kasih." },
    { t: "Adab dengan Rakan", emo: "🧑‍🤝‍🧑", img: "assets/images/akhlak/adab-rakan.jpg", d: "Membantu rakan yang terjatuh atau kesusahan, tidak mengejek dan tidak membuli, berkongsi dengan ikhlas dan bermain dengan adil." },
    { t: "Adab Makan dan Minum", emo: "🍽️", img: "assets/images/akhlak/adab-makan.jpg", d: "Basuh tangan, baca doa, makan dengan tangan kanan sambil duduk, tidak bercakap ketika mulut penuh dan tidak membazir makanan." },
    { t: "Adab Tidur", emo: "🛏️", img: "assets/images/akhlak/adab-tidur.jpg", d: "Berwuduk sebelum tidur, membaca doa, tidur dengan sopan dan mengemas tempat tidur apabila bangun pagi." },
    { t: "Adab Berpakaian", emo: "👕", img: "assets/images/akhlak/adab-pakaian.jpg", d: "Memakai pakaian yang menutup aurat, bersih dan kemas. Tidak sombong dengan pakaian dan menjaga penampilan diri." },
    { t: "Adab di Masjid", emo: "🕌", img: "assets/images/akhlak/adab-masjid.jpg", d: "Susun kasut di rak, masuk dengan tertib, menjaga kebersihan, bercakap perlahan dan tidak mengganggu orang yang sedang solat." },
    { t: "Adab Menjaga Kebersihan", emo: "🧹", img: "assets/images/akhlak/adab-kebersihan.jpg", d: "Buang sampah ke dalam tong, basuh tangan dengan sabun, mengemas kelas dan rumah. Islam sangat menyukai kebersihan." },
    { t: "Bercakap Benar", emo: "💬", img: "assets/images/akhlak/berkata-benar.jpg", d: "Sentiasa berkata benar walaupun kita telah membuat kesilapan. Berani mengaku salah, meminta maaf dan membetulkan kesilapan." },
    { t: "Amanah dan Tanggungjawab", emo: "🤝", img: "assets/images/akhlak/amanah.jpg", d: "Menjaga barang orang lain, menepati janji dan menyiapkan tanggungjawab. Jika terjumpa barang, serahkan kepada guru atau pemiliknya." },
    { t: "Menghormati Orang Lain", emo: "🌸", img: "assets/images/akhlak/hormat-orang.jpg", d: "Memberi salam, mendengar apabila orang bercakap tanpa memotong, menghormati orang tua, jiran dan semua orang tanpa mengira perbezaan." },
    { t: "Mengurus Kemarahan", emo: "🌈", img: "assets/images/akhlak/urus-marah.jpg", d: "Apabila marah: berhenti, diam dan tarik nafas. Berwuduk atau duduk sebentar, kemudian bercakap dengan lembut. Jangan memukul atau berkata kasar." },
    { t: "Menjaga Keselamatan Diri", emo: "🛡️", img: "assets/images/akhlak/keselamatan-diri.jpg", d: "Jangan mengikut orang yang tidak dikenali. Sentiasa beritahu ibu bapa atau guru di mana kita berada. Jika seseorang membuat kita tidak selesa, kata TIDAK, pergi dari situ dan beritahu orang dewasa yang dipercayai." },
    { t: "Adab Menggunakan Telefon dan Internet", emo: "📱", img: "assets/images/akhlak/telefon-internet.jpg", d: "Minta izin ibu bapa, hadkan masa skrin dan gunakan untuk belajar perkara baik. Jangan kongsi nama penuh, alamat, gambar atau kata laluan. Beritahu ibu bapa atau guru jika ada perkara yang tidak menyenangkan." }
  ],
  batalWuduk: [
    { t: "Buang Air Kecil & Air Besar", emo: "🚻", img: "assets/images/taharah/batal-buang-air.jpg", d: "Apabila kita buang air kecil atau buang air besar, wuduk terbatal. Selepas ke tandas, bersihkan diri dengan air (istinjak), basuh tangan dengan sabun dan ambil wuduk semula sebelum solat." },
    { t: "Keluar Angin (Kentut)", emo: "💨", img: "assets/images/taharah/batal-kentut.jpg", d: "Keluar angin dari dubur membatalkan wuduk. Jangan malu — ini perkara biasa bagi semua orang. Ambil sahaja wuduk semula dengan tenang." },
    { t: "Tidur Lena & Hilang Kesedaran", emo: "😴", img: "assets/images/taharah/batal-tidur.jpg", d: "Tidur yang lena sehingga tidak sedar (bukan sekadar mengantuk atau tidur tetap kedudukan duduk) membatalkan wuduk. Hilang kesedaran seperti pengsan juga membatalkan wuduk — jika pengsan, orang dewasa perlu membantu dan mendapatkan rawatan jika perlu." },
    { t: "Bersentuhan Kulit Bukan Mahram", emo: "✋", img: null, d: "Mengikut mazhab Syafi‘i, bersentuhan kulit antara lelaki dan perempuan bukan mahram membatalkan wuduk (dengan perincian tertentu). Perkara ini dipelajari dengan lebih mendalam bersama guru apabila kamu lebih dewasa." },
    { t: "Menyentuh Kemaluan dengan Tapak Tangan", emo: "✋", img: null, d: "Mengikut mazhab Syafi‘i, menyentuh kemaluan dengan tapak tangan tanpa alas membatalkan wuduk. Perkara ini dipelajari secara sopan bersama guru atau ibu bapa." }
  ],
  najisJenis: [
    { nama: "Najis Mukhaffafah (Ringan)", emo: "💦", img: "assets/images/taharah/najis-mukhaffafah.jpg", contoh: "Air kencing bayi lelaki berumur bawah 2 tahun yang hanya minum susu ibunya.", cara: "Cara menyucikan: renjiskan air ke seluruh tempat yang terkena air kencing itu sehingga rata (dibimbing orang dewasa)." },
    { nama: "Najis Mutawassitah (Sederhana)", emo: "🧽", img: "assets/images/taharah/najis-mutawassitah.jpg", contoh: "Kebanyakan najis — contohnya air kencing kanak-kanak yang lebih besar dan orang dewasa, najis haiwan dan darah (mengikut jenis masing-masing; tanya guru jika tidak pasti).", cara: "Cara menyucikan: buang dahulu najisnya (dengan tisu atau sarung tangan), kemudian basuh dengan air mutlak sehingga hilang bau, warna dan rasa kekotorannya." },
    { nama: "Najis Mughallazah (Berat)", emo: "🐾", img: "assets/images/taharah/najis-mughallazah.jpg", contoh: "Najis yang berkaitan dengan anjing dan babi (khinzir), contohnya bekas jilatan atau air liur anjing.", cara: "Cara menyucikan (samak/sertu): basuh sebanyak 7 kali, dan satu daripadanya menggunakan air bercampur tanah yang Wahyu. Mesti dibimbing oleh guru atau orang dewasa." }
  ],
  langkahSucikan: ["Buang najis dahulu (gunakan tisu atau sarung tangan)", "Basuh dengan air mutlak (air paip yang bersih)", "Semak sehingga hilang bau, warna dan rasa kekotoran", "Basuh tangan dengan sabun selepas membersih", "Jika ragu-ragu, tanya guru atau ibu bapa"],
  sumberMutlak: ["🌧️ Air Hujan", "🌊 Air Laut", "🏞️ Air Sungai", "🕳️ Air Telaga / Perigi", "⛲ Air Mata Air", "❄️ Air Salji yang Cair", "🍃 Air Embun",
  ],
  surahPendek: [
    { id: "alfatihah", no: 1, tajuk: "Surah Al-Fatihah", emo: "📖", info: "Surah ke-1 • 7 ayat • Dibaca pada setiap rakaat", arab: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ١ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ٢ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ٣ مَـٰلِكِ يَوْمِ ٱلدِّينِ ٤ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٥ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ٦ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ ٧", audioArab: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ١ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ٢ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ٣ مَـٰلِكِ يَوْمِ ٱلدِّينِ ٤ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٥ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ٦ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ ٧", rumi: "Bismillahir-rahmanir-rahim. Alhamdu lillahi Rabbil-‘alamin. Ar-Rahmanir-Rahim. Maliki yawmid-din. Iyyaka na‘budu wa iyyaka nasta‘in. Ihdinas-siratal-mustaqim. Siratal-ladhina an‘amta ‘alayhim, ghayril-maghdubi ‘alayhim wa lad-dallin.", maksud: "Dengan nama Allah Yang Maha Pemurah lagi Maha Mengasihani. Segala puji bagi Allah, Tuhan sekalian alam. Yang Maha Pemurah lagi Maha Mengasihani. Yang menguasai hari pembalasan. Hanya Engkaulah yang kami sembah dan hanya kepada Engkaulah kami meminta pertolongan. Tunjukilah kami jalan yang lurus. Iaitu jalan orang-orang yang Engkau kurniakan nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat." },
    { id: "alikhlas", no: 112, tajuk: "Surah Al-Ikhlas", emo: "☝️", info: "Surah ke-112 • 4 ayat", arab: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝١ ٱللَّهُ ٱلصَّمَدُ ۝٢ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝٣ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ ۝٤", audioArab: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ. قُلْ هُوَ ٱللَّهُ أَحَدٌ. ٱللَّهُ ٱلصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ", rumi: "Qul huwallaahu ahad. Allaahus-samad. Lam Maha Suci wa lam yuulad. Wa lam yakul lahuu kufuwan ahad.", maksud: "Katakanlah (wahai Muhammad): Dialah Allah, Yang Maha Esa. Allah ialah Tuhan yang bergantung kepada-Nya segala sesuatu. Dia tidak beranak dan tidak pula diperanakkan. Dan tidak ada sesuatupun yang setara dengan-Nya." },
    { id: "alfalaq", no: 113, tajuk: "Surah Al-Falaq", emo: "🌅", info: "Surah ke-113 • 5 ayat", arab: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ۝١ مِن شَرِّ مَا خَلَقَ ۝٢ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝٣ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ ۝٤ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ۝٥", audioArab: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ. مِن شَرِّ مَا خَلَقَ. وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ. وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", rumi: "Qul a'uudzu bi rabbil-falaq. Min syarri maa khalaq. Wa min syarri ghaasiqin idzaa waqab. Wa min syarrin-naffaatsaati fil-'uqad. Wa min syarri haasidin idzaa hasad.", maksud: "Katakanlah: Aku berlindung kepada Tuhan yang menguasai waktu subuh, daripada kejahatan makhluk yang Dia ciptakan, dan daripada kejahatan malam apabila ia gelap gelita, dan daripada kejahatan tukang-tukang sihir yang meniup pada simpulan-simpulan, dan daripada kejahatan orang yang dengki apabila ia dengki." },
    { id: "annas", no: 114, tajuk: "Surah An-Nas", emo: "🛡️", info: "Surah ke-114 • 6 ayat", arab: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝١ مَلِكِ ٱلنَّاسِ ۝٢ إِلَٰهِ ٱلنَّاسِ ۝٣ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ۝٤ ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ ۝٥ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ ۝٦", audioArab: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ. مَلِكِ ٱلنَّاسِ. إِلَٰهِ ٱلنَّاسِ. مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ. ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ. مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ", rumi: "Qul a'uudzu bi rabbin-naas. Malikin-naas. Ilaahin-naas. Min syarril-waswaasil-khannaas. Alladzii yuwaswisu fii shuduurin-naas. Minal-jinnati wan-naas.", maksud: "Katakanlah: Aku berlindung kepada Tuhan manusia, Raja manusia, Sembahan manusia, daripada kejahatan bisikan syaitan yang bersembunyi, yang membisikkan kejahatan ke dalam dada manusia, daripada golongan jin dan manusia." }
  ],
  solatGerak: [
    { t: "Berdiri & Takbiratul Ihram", d: "Berdiri tegak bagi yang mampu, berniat dan ucapkan “Allahu Akbar”.", emo: "🧍", img: "assets/images/solat/gerak-01-berdiri.jpg" },
    { t: "Baca al-Fatihah", d: "Membaca surah al-Fatihah dengan betul (rukun qauli).", emo: "📖", img: "assets/images/solat/gerak-02-fatihah.jpg" },
    { t: "Rukuk", d: "Membongkok dengan belakang rata dan tuma‘ninah.", emo: "🙇", img: "assets/images/solat/gerak-03-rukuk.jpg" },
    { t: "Iktidal", d: "Berdiri semula dengan tuma‘ninah.", emo: "🧍", img: "assets/images/solat/gerak-04-iktidal.jpg" },
    { t: "Sujud", d: "Sujud dengan 7 anggota dan tuma‘ninah (dua kali).", emo: "🙏", img: "assets/images/solat/gerak-05-sujud.jpg" },
    { t: "Duduk Antara Dua Sujud", d: "Duduk dengan tuma‘ninah antara dua sujud.", emo: "🧎", img: "assets/images/solat/gerak-06-duduk.jpg" },
    { t: "Duduk Tahiyat", d: "Duduk tahiyat dan membaca bacaan tahiyat mengikut rakaat.", emo: "☝️", img: "assets/images/solat/gerak-07-tahiyat.jpg" },
    { t: "Salam", d: "Memberi salam pertama ke kanan (salam kedua sunat).", emo: "👋", img: "assets/images/solat/gerak-08-salam.jpg" }
  ],
  orderSets: {
    wuduk: { tajuk: "Susun Langkah Wuduk", arahan: "Tekan langkah mengikut urutan yang betul.", items: ["Niat & Basmalah", "Basuh Tangan", "Berkumur & Bersihkan Hidung", "Basuh Muka", "Basuh Tangan ke Siku", "Sapu Kepala & Telinga", "Basuh Kaki", "Doa Selepas Wuduk"] },
    solat: { tajuk: "Susun Pergerakan Solat", arahan: "Susun pergerakan solat mengikut urutan satu rakaat ringkas.", items: ["Berdiri & Takbir", "Baca al-Fatihah", "Rukuk", "Iktidal", "Sujud Pertama", "Duduk Antara Dua Sujud", "Sujud Kedua"] },
    rukunIslam: { tajuk: "Susun Rukun Islam", arahan: "Susun Lima Rukun Islam mengikut urutan.", items: ["Syahadah", "Solat", "Puasa", "Zakat", "Haji"] },
    ramadan: { tajuk: "Susun Aktiviti Hari Ramadan", arahan: "Susun aktiviti sehari dalam bulan Ramadan.", items: ["Bersahur", "Solat Subuh & Berpuasa", "Belajar / Beribadat Siang Hari", "Berbuka Puasa (Maghrib)", "Solat Tarawih"] },
    sirah: { tajuk: "Garis Masa Sirah", arahan: "Susun peristiwa sirah mengikut urutan masa.", items: ["Kelahiran Nabi SAW di Makkah", "Baginda digelar al-Amin", "Wahyu Pertama di Gua Hira", "Dakwah di Makkah", "Hijrah ke Madinah", "Membina Masyarakat Madinah"] },
    nabiNuh: { tajuk: "Susun Peristiwa: Kisah Nabi Nuh AS", arahan: "Tekan peristiwa mengikut urutan cerita yang betul.", items: ["Berdakwah kepada kaum yang menyembah berhala", "Kaum enggan berubah", "Allah perintahkan membina bahtera", "Banjir besar tiba", "Bahtera berlayar dan berlabuh selamat", "Umat beriman memulakan hidup baharu"] },
    nabiYusuf: { tajuk: "Susun Peristiwa: Kisah Nabi Yusuf AS", arahan: "Tekan peristiwa mengikut urutan cerita yang betul.", items: ["Bermimpi 11 bintang, matahari dan bulan sujud", "Dibuang ke dalam telaga oleh abang-abang", "Dibawa ke Mesir", "Dipenjarakan kerana fitnah", "Mentafsir mimpi raja Mesir", "Menjadi pembesar Mesir", "Memaafkan abang-abang"] },
    nabiMusa: { tajuk: "Susun Peristiwa: Kisah Nabi Musa AS", arahan: "Tekan peristiwa mengikut urutan cerita yang betul.", items: ["Dihanyutkan di Sungai Nil", "Dipilihara dalam istana Firaun", "Berhijrah ke Madyan", "Bercakap dengan Allah di Bukit Tursina", "Kembali menghadapi Firaun", "Laut terbelah dan selamat"] },
    nabiYunus: { tajuk: "Susun Peristiwa: Kisah Nabi Yunus AS", arahan: "Tekan peristiwa mengikut urutan cerita yang betul.", items: ["Meninggalkan kaumnya", "Menaiki kapal dan undian dibuat", "Ditelan ikan besar", "Berdoa dan bertaubat dalam perut ikan", "Dimuntahkan ke pantai", "Kembali berdakwah dan kaumnya beriman"] }
  },
  matchPairs: [
    { a: "Rukun Iman", b: "6 perkara" }, { a: "Rukun Islam", b: "5 perkara" }, { a: "Taharah", b: "Bersuci" },
    { a: "Tayamum", b: "Bersuci dengan debu tanah yang suci" }, { a: "Al-Amin", b: "Gelaran Nabi SAW yang dipercayai" },
    { a: "Gua Hira", b: "Tempat wahyu pertama" }, { a: "Kaabah", b: "Kiblat di Makkah" }, { a: "Sahur", b: "Makan sebelum fajar" },
    { a: "Ghufaranaka", b: "Doa keluar tandas" }, { a: "Tuma‘ninah", b: "Berhenti sebentar dengan tenang dalam solat" }
  ,
    { a: "Sabar ketika sakit (Nabi Ayub AS)", b: "Tidak merungut dan tetap berdoa semasa demam" },
    { a: "Memaafkan (Nabi Yusuf AS)", b: "Memaafkan kawan yang pernah mengejek kita" },
    { a: "Berani berkata benar (Nabi Ibrahim AS)", b: "Mengaku kepada guru jika tersilap buat" },
    { a: "Tidak putus asa (Nabi Nuh AS)", b: "Terus mencuba walaupun latihan sukar" },
    { a: "Cepat bertaubat (Nabi Adam AS)", b: "Minta maaf segera selepas menyakiti adik" },
    { a: "Berdoa ketika susah (Nabi Yunus AS)", b: "Berdoa kepada Allah apabila berasa takut" },
    { a: "Jujur timbangan (Nabi Syuaib AS)", b: "Tidak menipu semasa bermain dan berjual beli" },
    { a: "Yakin pertolongan Allah (Nabi Musa AS)", b: "Tenang dan berdoa sebelum pertandingan" }
  ],
  trueFalse: [
    { s: "Rukun Iman ada lima perkara.", j: false, terang: "Rukun Iman ada ENAM. Rukun Islam yang ada lima." },
    { s: "Berkumur-kumur ketika berwuduk ialah rukun wuduk.", j: false, terang: "Berkumur ialah sunat. Rukun termasuk basuh muka dan basuh tangan hingga siku." },
    { s: "Solat Maghrib mempunyai 3 rakaat.", j: true, terang: "Betul! Maghrib ialah 3 rakaat." },
    { s: "Kita boleh berkongsi kata laluan dengan kawan internet.", j: false, terang: "Jangan sekali-kali berkongsi kata laluan atau maklumat peribadi." },
    { s: "Tayamum dilakukan apabila tiada air atau tidak boleh menggunakan air.", j: true, terang: "Betul! Tayamum ada syaratnya, bukan kerana malas." },
    { s: "Nabi Muhammad SAW ialah nabi yang terakhir.", j: true, terang: "Betul! Baginda ialah Khatam an-Nabiyyin (penutup para nabi)." },
    { s: "Makan dengan sengaja tidak membatalkan puasa.", j: false, terang: "Makan atau minum dengan sengaja membatalkan puasa." },
    { s: "Al-Quran ialah kitab Allah yang terakhir.", j: true, terang: "Betul! Al-Quran diturunkan kepada Nabi Muhammad SAW." }
  ,
    { s: "Nabi Nuh AS membina bahtera kerana perintah Allah.", j: true, terang: "Betul. Allah memerintahkan Nabi Nuh AS membina bahtera sebelum banjir besar." },
    { s: "Iblis sujud kepada Nabi Adam AS kerana taat.", j: false, terang: "Salah. Iblis enggan sujud kerana sombong." },
    { s: "Nabi Yusuf AS membalas dendam kepada abang-abangnya.", j: false, terang: "Salah. Nabi Yusuf AS memaafkan abang-abangnya." },
    { s: "Nabi Yunus AS berdoa di dalam perut ikan besar.", j: true, terang: "Betul. Baginda berdoa dan bertaubat lalu Allah menyelamatkannya." }
  ],
  fillBlank: [
    { s: "Rukun Iman ada ___ perkara.", pilih: ["lima", "enam", "tujuh"], j: 1 },
    { s: "Solat Subuh mempunyai ___ rakaat.", pilih: ["2", "3", "4"], j: 0 },
    { s: "Wahyu pertama diterima di Gua ___.", pilih: ["Thur", "Hira", "Nur"], j: 1 },
    { s: "Doa keluar tandas ialah “___”.", pilih: ["Ghufaranaka", "Alhamdulillah", "Bismillah"], j: 0 },
    { s: "Kita menghadap ___ ketika solat.", pilih: ["Matahari", "Kiblat (Kaabah)", "Bulan"], j: 1 },
    { s: "Makan sebelum fajar untuk berpuasa disebut ___.", pilih: ["Berbuka", "Sahur", "Tarawih"], j: 1 }
  ,
    { s: "Nabi ___ AS membina bahtera sebelum banjir besar.", pilih: ["Nuh", "Yunus", "Hud"], j: 0 },
    { s: "Nabi ___ AS sangat sabar ketika diuji dengan sakit.", pilih: ["Ayub", "Saleh", "Luth"], j: 0 },
    { s: "Laut terbelah untuk menyelamatkan Nabi ___ AS.", pilih: ["Yusuf", "Musa", "Adam"], j: 1 }
  ],
  listenBank: [
    { bunyi: "Allahu Akbar", fail: "solat-takbir", tanya: "Apakah maksud lafaz yang kamu dengar?", pilih: ["Allah Maha Besar", "Segala puji bagi Allah", "Maha Suci Allah"], j: 0 },
    { bunyi: "Alhamdulillah", fail: "lafaz-alhamdulillah", tanya: "Apakah maksud lafaz yang kamu dengar?", pilih: ["Allah Maha Besar", "Segala puji bagi Allah", "Maha Suci Allah"], j: 1 },
    { bunyi: "Subhanallah", fail: "lafaz-subhanallah", tanya: "Apakah maksud lafaz yang kamu dengar?", pilih: ["Allah Maha Besar", "Segala puji bagi Allah", "Maha Suci Allah"], j: 2 },
    { bunyi: "Assalamualaikum", fail: "lafaz-assalamualaikum", tanya: "Bilakah ucapan ini sesuai diberikan?", pilih: ["Ketika berjumpa / masuk rumah", "Ketika keluar tandas sahaja", "Ketika marah"], j: 0 }
  ],
  pictureBank: [
    { emo: "💧🙌😊💪🦶", q: "Gambar ikon ini berkaitan dengan ibadat apa?", pilih: ["Berwuduk", "Berpuasa", "Membaca al-Quran"], j: 0, terang: "Ikon tangan, muka dan kaki ialah langkah berwuduk." },
    { emo: "🕋🧎🤲", q: "Apakah ibadat yang ditunjukkan?", pilih: ["Solat menghadap kiblat", "Bersukan", "Bermain"], j: 0, terang: "Kita solat menghadap Kaabah sebagai kiblat." },
    { emo: "🌙🍲🌅", q: "Aktiviti apakah ini dalam bulan Ramadan?", pilih: ["Bersahur sebelum fajar", "Berbuka tengah hari", "Tidur sepanjang hari"], j: 0, terang: "Bersahur ialah makan sebelum fajar untuk berpuasa." },
    { emo: "📖🔤 ب ت ث", q: "Apakah yang sedang dipelajari?", pilih: ["Huruf hijaiyah", "Nombor", "Warna"], j: 0, terang: "Huruf ب ت ث ialah huruf hijaiyah." },
    { emo: "📱🙂❓", q: "Orang asing meminta gambar kamu melalui internet. Apakah tindakan yang selamat?", pilih: ["Hantar gambar", "Jangan hantar dan beritahu ibu bapa/guru", "Berikan alamat rumah"], j: 1, terang: "Jangan kongsi gambar atau maklumat peribadi. Beritahu orang dewasa." },
    { emo: "🚢🌊🏔️", q: "Ikon ini (bahtera, laut, gunung) berkaitan kisah nabi yang mana?", pilih: ["Nabi Nuh AS", "Nabi Yunus AS", "Nabi Adam AS"], j: 0, terang: "Bahtera besar ialah kisah Nabi Nuh AS." },
    { emo: "🐋🌊🤲", q: "Ikon ini (ikan besar, laut, doa) berkaitan kisah nabi yang mana?", pilih: ["Nabi Ibrahim AS", "Nabi Yunus AS", "Nabi Musa AS"], j: 1, terang: "Ikan besar menelan Nabi Yunus AS." },
    { emo: "⭐🌙💤", q: "Mimpi 11 bintang dan bulan sujud ialah kisah nabi yang mana?", pilih: ["Nabi Yusuf AS", "Nabi Nuh AS", "Nabi Hud AS"], j: 0, terang: "Itu mimpi Nabi Yusuf AS semasa kecil." }
  ],
  solatWaktu: [
    { t: "Subuh", emo: "🌅", img: "assets/images/solat/waktu-subuh.jpg", rakaat: 2, masa: "Waktu fajar, sebelum matahari terbit", d: "Mulakan hari dengan mengingati Allah. Bangun awal dan solat Subuh berjemaah di rumah atau masjid bersama keluarga.", niatArab: "أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ أَدَاءً لِلَّهِ تَعَالَى", niatRumi: "Usolli fardos-Subhi rak'ataini ada'an lillahi ta'ala.", niatMaksud: "Sahaja aku solat fardu Subuh dua rakaat tunai kerana Allah Ta'ala." },
    { t: "Zuhur", emo: "☀️", img: "assets/images/solat/waktu-zuhur.jpg", rakaat: 4, masa: "Tengah hari, selepas matahari gelincir", d: "Solat pada waktu tengah hari selepas aktiviti pagi. Berhenti seketika daripada belajar atau bermain untuk solat.", niatArab: "أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ أَدَاءً لِلَّهِ تَعَالَى", niatRumi: "Usolli fardoz-Zuhri arba'a raka'atin ada'an lillahi ta'ala.", niatMaksud: "Sahaja aku solat fardu Zohor empat rakaat tunai kerana Allah Ta'ala." },
    { t: "Asar", emo: "🌤️", img: "assets/images/solat/waktu-asar.jpg", rakaat: 4, masa: "Petang, sebelum matahari terbenam", d: "Solat pada waktu petang. Jangan leka bermain sehingga terlepas waktu Asar.", niatArab: "أُصَلِّي فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ أَدَاءً لِلَّهِ تَعَالَى", niatRumi: "Usolli fardol-Asri arba'a raka'atin ada'an lillahi ta'ala.", niatMaksud: "Sahaja aku solat fardu Asar empat rakaat tunai kerana Allah Ta'ala." },
    { t: "Maghrib", emo: "🌇", img: "assets/images/solat/waktu-maghrib.jpg", rakaat: 3, masa: "Selepas matahari terbenam", d: "Waktunya singkat. Segera solat Maghrib apabila masuk waktu, kemudian makan malam dan berehat bersama keluarga.", niatArab: "أُصَلِّي فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ أَدَاءً لِلَّهِ تَعَالَى", niatRumi: "Usolli fardhal-Maghribi salasa raka'atin ada'an lillahi ta'ala.", niatMaksud: "Sahaja aku solat fardu Maghrib tiga rakaat tunai kerana Allah Ta'ala." },
    { t: "Isyak", emo: "🌙", img: "assets/images/solat/waktu-isyak.jpg", rakaat: 4, masa: "Malam, selepas cahaya merah senja hilang", d: "Solat terakhir sebelum tidur. Selepas Isyak, bersedia untuk tidur awal supaya mudah bangun Subuh.", niatArab: "أُصَلِّي فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ أَدَاءً لِلَّهِ تَعَالَى", niatRumi: "Usolli fardol-Isya'i arba'a raka'atin ada'an lillahi ta'ala.", niatMaksud: "Sahaja aku solat fardu Isyak empat rakaat tunai kerana Allah Ta'ala." }
  ],
  batalSolat: [
    { t: "Bercakap atau Ketawa dengan Sengaja", emo: "💬", img: "assets/images/solat/batal-bercakap.jpg", d: "Bercakap perkara lain selain bacaan solat dengan sengaja membatalkan solat. Ketawa terbahak-bahak juga membatalkan solat. Semasa solat, diam dan fokus kepada Allah." },
    { t: "Makan atau Minum", emo: "🍪", img: "assets/images/solat/batal-makan.jpg", d: "Makan atau minum semasa solat membatalkan solat. Jauhkan makanan dan minuman daripada tempat solat." },
    { t: "Bergerak Banyak atau Bermain", emo: "⚽", img: "assets/images/solat/batal-bergerak.jpg", d: "Pergerakan yang banyak dan berturut-turut di luar pergerakan solat, seperti bermain dan melompat, membatalkan solat. Berdiri, rukuk dan sujudlah dengan tenang serta tuma'ninah." },
    { t: "Berhadas atau Wuduk Terbatal", emo: "💧", img: "assets/images/taharah/batal-kentut.jpg", d: "Jika wuduk terbatal semasa solat, contohnya keluar angin atau buang air, solat terbatal. Keluar daripada solat, bersihkan diri dan ambil wuduk semula." },
    { t: "Terbuka Aurat", emo: "👕", img: null, d: "Jika aurat terbuka semasa solat, solat boleh terbatal mengikut keadaan dan tempohnya. Pastikan pakaian solat kemas dan menutup aurat sebelum memulakan solat; perincian dipelajari bersama guru." },
    { t: "Meninggalkan Rukun Solat", emo: "🧎", img: null, d: "Jika meninggalkan rukun solat seperti tidak membaca al-Fatihah atau tidak rukuk, solat tidak sah. Pelajari urutan dan rukun solat bersama guru atau ibu bapa." }
  ],
  aturanSolat: "assets/images/solat/aturan-solat.jpg",
  bacaRingkasSolat: "assets/images/solat/baca-ringkas-solat.jpg",
  jemaahSolat: {
    img: "assets/images/solat/jemaah-masjid.jpg",
    points: [
      "Imam memimpin solat di hadapan, manakala makmum mengikut pergerakan imam dan tidak mendahului imam.",
      "Luruskan dan rapatkan saf. Berdiri bahu ke bahu dengan tertib dan isikan saf hadapan dahulu.",
      "Datang awal ke masjid atau surau dalam keadaan berwuduk, berpakaian bersih dan kemas.",
      "Jaga adab: bercakap perlahan, tidak melangkah bahu orang, tidak berlari dan menjaga kebersihan masjid.",
      "Selepas salam, berdoa dan bersalaman dengan mesra. Solat berjemaah sangat digalakkan dan mempunyai ganjaran yang besar di sisi Allah."
    ]
  },
  batalPuasa: [
    { t: "Makan atau Minum dengan Sengaja", emo: "🍽️", img: "assets/images/ibadah/batal-puasa.jpg", d: "Makan atau minum dengan sengaja dari terbit fajar hingga Maghrib membatalkan puasa. Jika benar-benar terlupa, puasa tidak batal dan hendaklah diteruskan mengikut panduan guru." },
    { t: "Muntah dengan Sengaja", emo: "🤢", img: null, d: "Membuat diri muntah dengan sengaja membatalkan puasa. Jika muntah berlaku tanpa sengaja, puasa tidak batal mengikut panduan yang dipelajari bersama guru." },
    { t: "Datang Haid atau Nifas", emo: "🌙", img: null, d: "Apabila datang haid atau nifas, puasa terbatal dan tidak boleh berpuasa. Hari yang ditinggalkan hendaklah diganti selepas suci mengikut bimbingan ibu atau guru." },
    { t: "Hilang Akal atau Tidak Sedar", emo: "🌀", img: null, d: "Hilang akal membatalkan puasa. Keadaan tidak sedarkan diri mempunyai perincian hukum; dapatkan bimbingan guru atau pihak berautoriti untuk situasi sebenar." }
  ],
  rukhsahPuasa: [
    { t: "Orang Sakit", emo: "🤒", d: "Orang sakit yang tidak mampu atau bimbang penyakit bertambah boleh berbuka dan menggantikan puasa pada hari lain apabila sihat (qada), mengikut keadaan." },
    { t: "Musafir", emo: "🧳", d: "Orang yang bermusafir jauh mengikut syarat yang ditetapkan boleh berbuka dan menggantikannya pada hari lain. Perincian jarak dan keadaan dipelajari bersama guru." },
    { t: "Orang Tua yang Tidak Mampu", emo: "🧓", d: "Orang tua yang uzur dan tidak mampu berpuasa diberi kelonggaran mengikut hukum fidyah yang ditetapkan. Rujuk pihak berautoriti untuk kadar semasa." },
    { t: "Perempuan Haid atau Nifas", emo: "🌙", d: "Tidak berpuasa ketika haid atau nifas dan menggantikan bilangan hari yang ditinggalkan selepas suci." },
    { t: "Perempuan Hamil atau Menyusu", emo: "🤱", d: "Mempunyai kelonggaran mengikut keadaan kesihatan ibu dan bayi. Dapatkan nasihat doktor serta guru atau pihak berautoriti tentang qada atau fidyah yang berkenaan." }
  ],
  ibadahInfo: [
    { id: "zakat-fitrah", tajuk: "Pengenalan Zakat Fitrah", emo: "🌾", img: "assets/images/ibadah/zakat-fitrah.jpg", points: ["Zakat fitrah ditunaikan dalam bulan Ramadan dan diselesaikan sebelum solat sunat Aidilfitri.", "Ketua keluarga menunaikannya untuk diri dan orang di bawah tanggungannya yang memenuhi syarat.", "Ia boleh berbentuk makanan asasi seperti beras atau nilai wang mengikut ketetapan pihak berkuasa agama negeri pada tahun semasa.", "Diberikan kepada asnaf yang layak, terutamanya fakir dan miskin, supaya semua dapat menyambut Aidilfitri.", "Lakukan dengan niat kerana Allah dan semak resit atau saluran rasmi yang digunakan."] },
    { id: "korban", tajuk: "Pengenalan Ibadah Korban", emo: "🐄", img: "assets/images/ibadah/korban.jpg", points: ["Ibadah korban dilakukan pada Hari Raya Aidiladha dan hari-hari Tasyriq.", "Haiwan korban mestilah memenuhi syarat umur dan kesihatan. Penyembelihan dilakukan oleh orang dewasa yang berpengalaman; kanak-kanak hanya melihat dari tempat yang selamat.", "Daging korban diagihkan kepada peserta, keluarga, jiran serta golongan fakir dan miskin.", "Ia mengingatkan kita kepada ketaatan Nabi Ibrahim a.s. dan Nabi Ismail a.s. serta mengajar sifat berkongsi rezeki.", "Jaga kebersihan kawasan dan keselamatan sepanjang program korban."] },
    { id: "haji-umrah", tajuk: "Pengenalan Haji dan Umrah", emo: "🕋", img: "assets/images/ibadah/haji-umrah.jpg", points: ["Haji ialah ibadah ke Makkah pada bulan Zulhijah dan wajib sekali seumur hidup bagi Muslim yang cukup syarat serta berkemampuan.", "Umrah boleh dilakukan pada bila-bila masa sepanjang tahun mengikut syarat dan perjalanan yang sah.", "Antara amalan yang dipelajari ialah ihram, tawaf mengelilingi Kaabah, sa'i antara Safa dan Marwah serta tahallul. Haji mempunyai rukun tambahan termasuk wukuf di Arafah.", "Kaabah di Masjidil Haram ialah kiblat solat umat Islam. Masjid Nabawi pula terletak di Madinah.", "Perincian manasik mesti dipelajari melalui kursus dan guru yang berkelayakan sebelum menunaikan ibadah."] }
  ],
  solatBacaan: [
    { id: "rukuk", tajuk: "Bacaan Rukuk", emo: "🙇", arab: "سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ", audioArab: "سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ، سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ، سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ", rumi: "Subhana rabbiyal-‘azimi wa bihamdih (dibaca 3 kali ketika rukuk)", maksud: "Maha Suci Tuhanku Yang Maha Agung dan dengan memuji-Nya." },
    { id: "iktidal", tajuk: "Bacaan Iktidal", emo: "🧍", arab: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا لَكَ الْحَمْدُ", audioArab: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا لَكَ الْحَمْدُ", rumi: "Sami‘allahu liman hamidah. Rabbana lakal-hamd.", maksud: "Allah mendengar orang yang memuji-Nya. Wahai Tuhan kami, bagi-Mulah segala pujian." },
    { id: "sujud", tajuk: "Bacaan Sujud", emo: "🙏", arab: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ", audioArab: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ، سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ، سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ", rumi: "Subhana rabbiyal-a‘la wa bihamdih (dibaca 3 kali ketika sujud)", maksud: "Maha Suci Tuhanku Yang Maha Tinggi dan dengan memuji-Nya." },
    { id: "duduk-dua-sujud", tajuk: "Doa Duduk Antara Dua Sujud", emo: "🧎", arab: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي", audioArab: "رَبِّ اغْفِرْ لِي، وَارْحَمْنِي، وَاجْبُرْنِي، وَارْفَعْنِي، وَارْزُقْنِي، وَاهْدِنِي، وَعَافِنِي، وَاعْفُ عَنِّي", rumi: "Rabbighfir li, warhamni, wajburni, warfa‘ni, warzuqni, wahdini, wa ‘afini, wa‘fu ‘anni.", maksud: "Wahai Tuhanku, ampunilah aku, rahmatilah aku, cukupkanlah kekuranganku, angkatlah darjatku, kurniakanlah rezeki kepadaku, berilah petunjuk kepadaku, sihatkanlah aku dan maafkanlah aku." },
        { id: "tahiyat-awal", tajuk: "Bacaan Tahiyat Awal", emo: "🧎", arab: "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ", audioArab: "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ", rumi: "At-tahiyyatul-mubarakatus-salawatut-tayyibatu lillah. As-salamu ‘alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu ‘alayna wa ‘ala ‘ibadillahis-salihin. Asyhadu alla ilaha illallah wa asyhadu anna Muhammadar rasulullah.", maksud: "Segala penghormatan yang berkat, selawat dan kebaikan adalah bagi Allah. Salam sejahtera ke atasmu wahai Nabi, serta rahmat Allah dan berkat-Nya. Salam sejahtera ke atas kami dan ke atas hamba-hamba Allah yang soleh. Aku bersaksi tiada Tuhan melainkan Allah dan aku bersaksi bahawa Muhammad ialah pesuruh Allah. (Dibaca ketika duduk tahiyat awal pada rakaat kedua solat yang mempunyai 3 atau 4 rakaat.)" },
{ id: "tahiyat", tajuk: "Bacaan Tahiyat Akhir & Selawat", emo: "☝️", arab: "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ", audioArab: "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ", rumi: "At-tahiyyatul-mubarakatus-salawatut-tayyibatu lillah. As-salamu ‘alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu ‘alayna wa ‘ala ‘ibadillahis-salihin. Asyhadu alla ilaha illallah wa asyhadu anna Muhammadar rasulullah. Allahumma salli ‘ala Muhammad wa ‘ala ali Muhammad, kama sallayta ‘ala Ibrahim wa ‘ala ali Ibrahim, innaka hamidum majid.", maksud: "Segala penghormatan yang berkat, selawat dan kebaikan adalah bagi Allah. Salam sejahtera ke atasmu wahai Nabi, serta rahmat Allah dan berkat-Nya. Salam sejahtera ke atas kami dan ke atas hamba-hamba Allah yang soleh. Aku bersaksi tiada Tuhan melainkan Allah dan aku bersaksi bahawa Muhammad ialah pesuruh Allah. Ya Allah, kurniakanlah selawat ke atas Muhammad dan keluarga Muhammad sebagaimana Engkau kurniakan selawat ke atas Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia. (Terdapat variasi lafaz yang diajar mengikut guru — ikut versi guru sekolah kamu.)" },
    { id: "salam", tajuk: "Bacaan Salam", emo: "👋", arab: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ", audioArab: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ", rumi: "As-salamu ‘alaykum wa rahmatullah.", maksud: "Salam sejahtera ke atas kamu dan rahmat Allah." }
  ],
  badgesExtra: [
    { id: "juara-fardu-ain", nama: "Juara Fardu Ain", emoji: "👑", syarat: "Siapkan semua modul" },
    { id: "pemain-hebat", nama: "Pemain Hebat", emoji: "🎮", syarat: "Main semua 10 permainan (sekurang-kurangnya sekali)" }
  ],
  koleksiVideo: [
  {
    "id": "video-01-bergurau-biar-beradab",
    "tajuk": "Bergurau Biar Beradab",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-01-bergurau-biar-beradab.jpg",
    "fail": "assets/videos/video-01-bergurau-biar-beradab.mp4",
    "tempoh": 66.8,
    "saiz": 17081509,
    "ringkas": "Enam situasi gurauan dan bisikan supaya berfikir dahulu: adakah gurauan kita baik atau menyakitkan orang lain?"
  },
  {
    "id": "video-02-pilih-tidak-mengikut-bisikan",
    "tajuk": "Pilih Tidak Mengikut Bisikan",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-02-pilih-tidak-mengikut-bisikan.jpg",
    "fail": "assets/videos/video-02-pilih-tidak-mengikut-bisikan.mp4",
    "tempoh": 66.6,
    "saiz": 15458918,
    "ringkas": "Enam detik harian yang mengajar kanak-kanak berhenti, berfikir dan memilih tindakan yang baik."
  },
  {
    "id": "video-03-mulakan-dengan-bismillah",
    "tajuk": "Mulakan dengan Bismillah",
    "kategori": "Doa & Amalan Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-03-mulakan-dengan-bismillah.jpg",
    "fail": "assets/videos/video-03-mulakan-dengan-bismillah.mp4",
    "tempoh": 61.6,
    "saiz": 11157748,
    "ringkas": "Amina memilih perbuatan baik dan mengingati Allah dengan membaca Bismillah."
  },
  {
    "id": "video-04-berkongsi-dengan-makhluk-allah",
    "tajuk": "Berkongsi dengan Makhluk Allah",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-04-berkongsi-dengan-makhluk-allah.jpg",
    "fail": "assets/videos/video-04-berkongsi-dengan-makhluk-allah.mp4",
    "tempoh": 47.2,
    "saiz": 12265039,
    "ringkas": "Amina memilih sifat pemurah dan berkongsi makanan dengan kucing yang lapar."
  },
  {
    "id": "video-05-sabar-adil-bertanggungjawab",
    "tajuk": "Sabar, Adil & Bertanggungjawab",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-05-sabar-adil-bertanggungjawab.jpg",
    "fail": "assets/videos/video-05-sabar-adil-bertanggungjawab.mp4",
    "tempoh": 67.5,
    "saiz": 11005591,
    "ringkas": "Belajar mengawal marah, tidak leka, berlaku adil dan bertanggungjawab dalam pilihan harian."
  },
  {
    "id": "video-06-doa-jika-lupa-bismillah",
    "tajuk": "Doa Jika Lupa Bismillah",
    "kategori": "Doa & Amalan Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-06-doa-jika-lupa-bismillah.jpg",
    "fail": "assets/videos/video-06-doa-jika-lupa-bismillah.mp4",
    "tempoh": 60.7,
    "saiz": 10506634,
    "ringkas": "Peringatan ringkas tentang Doa apabila terlupa membaca Bismillah sebelum makan."
  },
  {
    "id": "video-07-detik-kecil-akhlak-besar",
    "tajuk": "Detik Kecil, Akhlak Besar",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-07-detik-kecil-akhlak-besar.jpg",
    "fail": "assets/videos/video-07-detik-kecil-akhlak-besar.mp4",
    "tempoh": 65.8,
    "saiz": 16480973,
    "ringkas": "Peristiwa harian boleh menjadi pengajaran akhlak apabila kita berfikir sebelum bertindak."
  },
  {
    "id": "video-08-ayat-al-kursi-sebelum-tidur",
    "tajuk": "Ayat al-Kursi Sebelum Tidur",
    "kategori": "Doa & Amalan Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-08-ayat-al-kursi-sebelum-tidur.jpg",
    "fail": "assets/videos/video-08-ayat-al-kursi-sebelum-tidur.mp4",
    "tempoh": 67.3,
    "saiz": 20230958,
    "ringkas": "Kepentingan membaca Ayat al-Kursi sebelum tidur dan bertawakal kepada Allah."
  },
  {
    "id": "video-09-nasyid-i-m-a-little-muslim",
    "tajuk": "Nasyid: I'm a Little Muslim",
    "kategori": "Nasyid Kanak-kanak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-09-nasyid-i-m-a-little-muslim.jpg",
    "fail": "assets/videos/video-09-nasyid-i-m-a-little-muslim.mp4",
    "tempoh": 21.8,
    "saiz": 1667973,
    "ringkas": "Nasyid pendek yang meraikan kegembiraan menjadi anak Muslim."
  },
  {
    "id": "video-10-doa-sebelum-keluar-rumah",
    "tajuk": "Doa Sebelum Keluar Rumah",
    "kategori": "Doa & Amalan Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-10-doa-sebelum-keluar-rumah.jpg",
    "fail": "assets/videos/video-10-doa-sebelum-keluar-rumah.mp4",
    "tempoh": 21.7,
    "saiz": 6224379,
    "ringkas": "Doa ringkas sebelum keluar rumah dan meletakkan kepercayaan kepada Allah."
  },
  {
    "id": "video-11-rahsia-tutup-bekas-makanan",
    "tajuk": "Rahsia Tutup Bekas Makanan",
    "kategori": "Adab Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-11-rahsia-tutup-bekas-makanan.jpg",
    "fail": "assets/videos/video-11-rahsia-tutup-bekas-makanan.mp4",
    "tempoh": 64.4,
    "saiz": 10603922,
    "ringkas": "Mengapa Amina menutup bekas makanan dan minuman sebagai amalan kebersihan dan sunnah harian."
  },
  {
    "id": "video-12-enam-pilihan-di-rumah",
    "tajuk": "Enam Pilihan di Rumah",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-12-enam-pilihan-di-rumah.jpg",
    "fail": "assets/videos/video-12-enam-pilihan-di-rumah.mp4",
    "tempoh": 67.2,
    "saiz": 14025070,
    "ringkas": "Enam pilihan kecil di rumah yang memberi pengajaran besar kepada kanak-kanak."
  },
  {
    "id": "video-13-ingat-tepat-pada-masanya",
    "tajuk": "Ingat Tepat pada Masanya",
    "kategori": "Doa & Amalan Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-13-ingat-tepat-pada-masanya.jpg",
    "fail": "assets/videos/video-13-ingat-tepat-pada-masanya.mp4",
    "tempoh": 60.1,
    "saiz": 9850287,
    "ringkas": "Amina mengingati amalan yang baik tepat sebelum terlepas peluang melakukannya."
  },
  {
    "id": "video-14-soalan-kecil-sebelum-makan",
    "tajuk": "Soalan Kecil Sebelum Makan",
    "kategori": "Adab Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-14-soalan-kecil-sebelum-makan.jpg",
    "fail": "assets/videos/video-14-soalan-kecil-sebelum-makan.mp4",
    "tempoh": 70.2,
    "saiz": 15966271,
    "ringkas": "Satu soalan mudah sebelum makan yang mengingatkan kita kepada adab dan kesyukuran."
  },
  {
    "id": "video-15-amalan-sebelum-tidur",
    "tajuk": "Amalan Sebelum Tidur",
    "kategori": "Doa & Amalan Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-15-amalan-sebelum-tidur.jpg",
    "fail": "assets/videos/video-15-amalan-sebelum-tidur.mp4",
    "tempoh": 60.1,
    "saiz": 8634329,
    "ringkas": "Amina mengingati satu amalan sebelum tidur yang tidak disukai oleh syaitan."
  },
  {
    "id": "video-16-bangun-dan-putuskan-ikatan-malas",
    "tajuk": "Bangun dan Putuskan Ikatan Malas",
    "kategori": "Doa & Amalan Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-16-bangun-dan-putuskan-ikatan-malas.jpg",
    "fail": "assets/videos/video-16-bangun-dan-putuskan-ikatan-malas.mp4",
    "tempoh": 61.8,
    "saiz": 10777834,
    "ringkas": "Pengajaran tentang bangun dengan bersemangat dan melawan rasa malas pada waktu pagi."
  },
  {
    "id": "video-17-jaga-adab-ketika-menguap",
    "tajuk": "Jaga Adab Ketika Menguap",
    "kategori": "Adab Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-17-jaga-adab-ketika-menguap.jpg",
    "fail": "assets/videos/video-17-jaga-adab-ketika-menguap.mp4",
    "tempoh": 67.5,
    "saiz": 13573764,
    "ringkas": "Peringatan sopan tentang adab menguap dan mengingati Allah pada masa yang sesuai."
  },
  {
    "id": "video-18-pilih-kata-yang-baik",
    "tajuk": "Pilih Kata yang Baik",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-18-pilih-kata-yang-baik.jpg",
    "fail": "assets/videos/video-18-pilih-kata-yang-baik.mp4",
    "tempoh": 72.0,
    "saiz": 13670103,
    "ringkas": "Amina memilih perkataan yang lembut walaupun digoda untuk berkata kasar."
  },
  {
    "id": "video-19-amina-memilih-yang-lebih-baik",
    "tajuk": "Amina Memilih yang Lebih Baik",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-19-amina-memilih-yang-lebih-baik.jpg",
    "fail": "assets/videos/video-19-amina-memilih-yang-lebih-baik.mp4",
    "tempoh": 68.5,
    "saiz": 15509109,
    "ringkas": "Enam peristiwa harian tentang kebaikan, kesabaran, keselamatan dan hormat."
  },
  {
    "id": "video-20-doa-masuk-rumah",
    "tajuk": "Doa Masuk Rumah",
    "kategori": "Doa & Amalan Harian",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-20-doa-masuk-rumah.jpg",
    "fail": "assets/videos/video-20-doa-masuk-rumah.mp4",
    "tempoh": 61.0,
    "saiz": 10523573,
    "ringkas": "Kepentingan memberi salam dan mengingati Allah apabila masuk ke rumah."
  },
  {
    "id": "video-21-membantu-rakan-yang-jatuh",
    "tajuk": "Membantu Rakan yang Jatuh",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-21-membantu-rakan-yang-jatuh.jpg",
    "fail": "assets/videos/video-21-membantu-rakan-yang-jatuh.mp4",
    "tempoh": 65.3,
    "saiz": 15617908,
    "ringkas": "Amina memilih membantu rakan walaupun hampir memenangi perlumbaan."
  },
  {
    "id": "video-22-adam-belajar-membuat-pilihan",
    "tajuk": "Adam Belajar Membuat Pilihan",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-22-adam-belajar-membuat-pilihan.jpg",
    "fail": "assets/videos/video-22-adam-belajar-membuat-pilihan.mp4",
    "tempoh": 65.7,
    "saiz": 14535284,
    "ringkas": "Enam dugaan harian dan peluang untuk memilih perkara yang betul."
  },
  {
    "id": "video-23-pilihan-yang-menggembirakan-allah",
    "tajuk": "Pilihan yang Menggembirakan Allah",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-23-pilihan-yang-menggembirakan-allah.jpg",
    "fail": "assets/videos/video-23-pilihan-yang-menggembirakan-allah.mp4",
    "tempoh": 65.8,
    "saiz": 19841654,
    "ringkas": "Adam belajar tentang kebaikan, keadilan, hormat dan kawalan diri melalui pilihan kecil."
  },
  {
    "id": "video-24-jujur-adil-berdisiplin",
    "tajuk": "Jujur, Adil & Berdisiplin",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-24-jujur-adil-berdisiplin.jpg",
    "fail": "assets/videos/video-24-jujur-adil-berdisiplin.mp4",
    "tempoh": 65.9,
    "saiz": 14340297,
    "ringkas": "Amina belajar tentang kejujuran, keadilan, kebaikan dan kawalan diri."
  },
  {
    "id": "video-25-enam-bisikan-enam-pilihan",
    "tajuk": "Enam Bisikan, Enam Pilihan",
    "kategori": "Pilihan Akhlak",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-25-enam-bisikan-enam-pilihan.jpg",
    "fail": "assets/videos/video-25-enam-bisikan-enam-pilihan.mp4",
    "tempoh": 65.4,
    "saiz": 14349088,
    "ringkas": "Amina menghadapi bisikan dengan kejujuran, amanah, tanggungjawab dan kebaikan."
  },
  {
    "id": "video-26-kebaikan-kepada-haiwan",
    "tajuk": "Kebaikan kepada Haiwan",
    "kategori": "Kisah Teladan",
    "emoji": "🎬",
    "umur": "Kanak-kanak (bimbingan ibu bapa)",
    "poster": "assets/videos/poster/video-26-kebaikan-kepada-haiwan.jpg",
    "fail": "assets/videos/video-26-kebaikan-kepada-haiwan.mp4",
    "tempoh": 64.1,
    "saiz": 8595343,
    "ringkas": "Ibu Amina berkongsi pengajaran hadis tentang berbuat baik kepada haiwan yang kehausan."
  }
],
  videoPautan: [],
  tipsWatak: [
    "Assalamualaikum! Saya Ahmad & saya Aisyah. Jom belajar bersama-sama — tekan butang Dengar untuk mendengar penerangan!",
    "Tip: Siapkan satu pelajaran, jawab kuiz dan kumpul bintang. Boleh ulang tanpa penalti!",
    "Ingat urutan rakaat: Subuh 2, Zuhur 4, Asar 4, Maghrib 3, Isyak 4.",
    "Jika tidak pasti tentang hukum agama, tanya guru atau ibu bapa. Itu tindakan yang bijak!",
    "Tiada had masa dalam permainan. Ambil masa kamu — semua orang belajar dengan cara berbeza."
  ]
};
if (typeof module !== "undefined" && module.exports) module.exports = APP_DATA;
