/* ============================================================
   Bani Ibrahim Farms — main.js
   Handles: language toggle, navbar scroll, mobile menu, FAQ
   ============================================================ */

// ── TRANSLATIONS ──────────────────────────────────────────────
const T = {
  en: {
    // NAV
    nav_about:    "About",
    nav_services: "Services",
    nav_why:      "Why Us",
    nav_faq:      "FAQ",
    nav_contact:  "Contact",
    nav_wa:       "WhatsApp Us",

    // HERO
    hero_badge:   "🌿 Halal Livestock Farm · Gunung Pulai, Johor",
    hero_h1a:     "Your Aqiqah.",
    hero_h1b:     "Done Right. Proven with <span style=\"color:var(--gold)\">Photos.</span>",
    hero_sub:     "A family farm in Gunung Pulai, Johor. Syariah-compliant aqiqah and qurban. Same-day photo proof sent to your WhatsApp. No middlemen.",
    hero_cta1:    "WhatsApp Us Now",
    hero_cta2:    "See Our Services",
    hero_f1:      "Syariah-Compliant",
    hero_f2:      "Same-Day Photo Proof",
    hero_f4:      "Naturally Fed Goats",

    // ABOUT
    about_label:  "Our Story",
    about_h2:     "A Farm Built on Faith and Family",
    about_p1:     "Bani Ibrahim Farms is a family-run halal livestock farm in Gunung Pulai, Johor. Rooted in years of farming experience, we bring the same care and honesty to every aqiqah and qurban we perform.",
    about_p2:     "Named after the Prophet Ibrahim (AS), whose legacy of sacrifice is the very foundation of aqiqah and qurban. Our goats are raised in the highlands of Gunung Pulai on natural feed. Open space. No shortcuts.",
    about_p3:     "You deal directly with the farm. No agents. No middlemen. Same-day photo and video sent to your WhatsApp.",
    about_s1n:    "100%",
    about_s1l:    "Syariah-Compliant",
    about_s2n:    "Same Day",
    about_s2l:    "Photo Proof",
    about_s3n:    "0",
    about_s3l:    "Middlemen",
    about_s4n:    "365",
    about_s4l:    "Days Open",

    // SERVICES
    svc_label:    "What We Offer",
    svc_h2:       "Our Services",
    svc_sub:      "Pick your service. We take care of the rest.",
    svc1_name:    "Aqiqah",
    svc1_desc:    "Tell us the name, date of birth, and how many goats. We select a healthy animal, perform the slaughter with proper niyyah, and send you photo and video proof the same day.",
    svc1_link:    "Enquire via WhatsApp",
    svc2_name:    "Qurban",
    svc2_desc:    "Slots fill up fast before Eid al-Adha. Lock in your animal early. We perform the slaughter correctly, on time, with full photo and video documentation.",
    svc2_link:    "Enquire via WhatsApp",
    svc3_name:    "Farm Visits",
    svc3_desc:    "Bring your family or school group to our farm in Gunung Pulai. See how halal livestock is raised. Get hands-on with the animals. Book via WhatsApp.",
    svc3_link:    "Book a Visit",
    svc4_name:    "Live Goat Sales",
    svc4_desc:    "Buy direct from the farm. No agents. No markup. Various breeds available year-round. WhatsApp us for today's pricing.",
    svc4_link:    "Enquire via WhatsApp",
    svc6_name:    "Fresh Vegetables",
    svc6_desc:    "Picked fresh daily from our highland farm in Gunung Pulai. Grown naturally with minimal pesticides. Available for pickup or delivery within Johor.",
    svc6_link:    "Learn More",

    // WHY
    why_label:    "Why Choose Us",
    why_h2:       "Honest Farming. Every Time.",
    why_sub:      "We do not cut corners. Not on the animals. Not on the slaughter. Not on your documentation.",
    why1_h:       "Syariah-Compliant",
    why1_p:       "Every slaughter is performed by a trained Muslim professional. Proper niyyah. Full Islamic rites. Every time.",
    why2_h:       "Naturally Fed Animals",
    why2_p:       "Our goats are raised on natural feed in the Gunung Pulai highlands. No crowded pens. No shortcuts.",
    why3_h:       "Same-Day Documentation",
    why3_p:       "You get photo and video of every aqiqah and qurban. Sent to your WhatsApp on the same day. No waiting.",
    why5_h:       "Direct from Farm",
    why5_p:       "No agents. No middlemen. You talk directly to the farm. Transparent pricing every time.",
    why6_h:       "Honest. Direct. Documented.",
    why6_p:       "You deal directly with the farm. No agents. No middlemen. Every aqiqah and qurban comes with full photo and video proof.",

    // FAQ
    faq_label:    "Common Questions",
    faq_h2:       "Frequently Asked Questions",
    faq_sub:      "Question not listed? WhatsApp us. We respond fast.",
    faq1_q:       "Where is Bani Ibrahim Farms located?",
    faq1_a:       "We are in Gunung Pulai, Johor, Malaysia. Farm visits are by appointment. WhatsApp us to arrange yours.",
    faq2_q:       "Are your aqiqah and qurban services Syariah-compliant?",
    faq2_a:       "Yes. Every slaughter is performed by a trained Muslim professional with proper niyyah recited over each animal. Photo and video documentation provided.",
    faq4_q:       "How do I book a farm visit?",
    faq4_a:       "WhatsApp us with your preferred date, group size, and visit purpose. We confirm availability and arrange everything.",
    faq5_q:       "Is there a minimum order for live goats?",
    faq5_a:       "No minimum order. We sell individual goats. WhatsApp us for current pricing and available breeds.",
    faq6_q:       "Can I witness the aqiqah or qurban slaughter in person?",
    faq6_a:       "Yes. You are welcome at the farm during your aqiqah or qurban. Let us know in advance so we can prepare.",
    faq7_q:       "What is aqiqah and when should it be performed?",
    faq7_a:       "Aqiqah is a Sunnah practice where a goat is slaughtered to celebrate the birth of a child. Ideally on the 7th, 14th, or 21st day after birth. If missed, it can be done at any point in the child's life or in adulthood.",
    faq8_q:       "How many goats are needed for aqiqah?",
    faq8_a:       "Two goats are recommended for a boy, one for a girl. One goat for a boy is also acceptable if two is not feasible. We will advise you on the right option for your situation.",
    faq9_q:       "Can aqiqah be done for an adult?",
    faq9_a:       "Yes. If aqiqah was not done at birth, it can be performed later in life, including adulthood. Known as aqiqah dewasa. Same Syariah-compliant process. Full documentation.",
    faq10_q:      "Do you offer cow qurban (group qurban)?",
    faq10_a:      "We primarily offer goat qurban. For cow qurban (korban lembu), which allows up to 7 participants per cow, WhatsApp us as availability varies by season.",
    faq11_q:      "What happens to the meat after aqiqah or qurban?",
    faq11_a:      "The meat is distributed to orphans, underprivileged families, and the local community near our farm in Gunung Pulai. For aqiqah, a portion can also be kept for your family. Full photo and video documentation sent the same day.",
    faq13_q:      "How far is Bani Ibrahim Farms from Johor Bahru?",
    faq13_a:      "Our farm in Gunung Pulai is approximately 35 to 45 minutes by car from Johor Bahru city centre, and around 3 to 3.5 hours from Kuala Lumpur. We send you the exact GPS location via WhatsApp when you book.",
    faq14_q:      "What breeds of goats do you have?",
    faq14_a:      "We keep a variety of breeds for aqiqah, qurban, and live sales. Availability varies by season. WhatsApp us for current stock and pricing.",
    faq15_q:      "Can non-Muslims visit the farm?",
    faq15_a:      "Yes. Non-Muslims are welcome for farm tours. Open to families, school groups, and organisations. WhatsApp us to arrange a visit.",
    faq16_q:      "Do you provide proof of aqiqah?",
    faq16_a:      "Yes. We send you photo and video of the slaughter and meat distribution via WhatsApp on the day. That is your proof the aqiqah was performed correctly on your behalf.",

    // OWNERSHEEP
    os_label:       "Livestock Ownership",
    os_h2:          "OwnerSheep Programme",
    os_sub:         "Bani Ibrahim Farms is a verified cluster farm within a leading regional halal livestock network across Southeast Asia. Own the sheep. We raise them for you.",
    os_about_h:     "What Is It?",
    os_about_p:     "You purchase the sheep. We care for them, manage them, and breed them at our Gunung Pulai farm. Full ownership stays with you. We handle every farm operation, backed by a professional regional network.",
    os_obj_h:       "Your Benefits",
    os_b1:          "Your sheep are well-fed and raised with integrity",
    os_b2:          "Part of a growing regional supply chain serving Southeast Asia",
    os_b3:          "Your sheep are sold through our network at contract completion. Sale value transferred to you.",
    os_b4:          "Annual health and growth updates on your sheep",
    os_how_h:       "How It Works",
    os_step1_h:     "Package Selection",
    os_step1_p:     "Choose your package. Minimum 4 sheep. We advise on the best option for your situation.",
    os_step2_h:     "Contract Signing",
    os_step2_p:     "Sign the ownership agreement and make payment. Your sheep are registered in your name.",
    os_step3_h:     "Caretaking and Breeding",
    os_step3_p:     "Our vets and farm professionals manage your sheep at our Gunung Pulai farm. Annual health and growth updates sent to you.",
    os_step4_h:     "Contract Completion",
    os_step4_p:     "At the end of your contract, your sheep are sold through our regional livestock network. Sale value is transferred to you.",
    os_net_label:   "Backed by a Regional Network",
    os_net_p:       "Bani Ibrahim Farms is a verified cluster farm within a professional halal livestock network active across Southeast Asia. Highest standards in animal care, ethics, and supply chain integrity.",
    os_cta:         "Enquire via WhatsApp",

    // QUICK ANSWERS
    qa_label:     "What You Need to Know",
    qa_h2:        "Clear Answers. No Fluff.",
    qa1_q:        "What is Aqiqah?",
    qa1_a:        "Aqiqah is a Sunnah practice in Islam. A goat is slaughtered to celebrate the birth of a child, typically within 7 days, though it can be done at any age. Two goats for a boy. One for a girl. The meat is shared with family and given to those in need. We handle the full process: slaughter, distribution, and documentation.",
    qa2_q:        "What is Qurban?",
    qa2_a:        "Qurban is the Islamic ritual of sacrificing a livestock animal during Eid al-Adha (10th to 13th Zulhijjah). It honours the sacrifice of the Prophet Ibrahim (AS). One goat covers one person. One cow covers up to seven. The meat is split three ways: family, relatives, and those in need. We perform qurban in Gunung Pulai, Johor, with full Syariah compliance and same-day photo documentation.",
    qa3_q:        "Why Choose a Halal Certified Farm?",
    qa3_a:        "For aqiqah and qurban to be valid under Islamic law, the animal must be slaughtered by a Muslim, with correct niyyah, and in accordance with halal requirements. A certified halal farm ensures the animal is healthy, well-raised, and slaughtered correctly. At Bani Ibrahim Farms, every slaughter is documented and sent to you the same day.",

    // TESTIMONIALS
    testi_label:    "What Families Say",
    testi_h2:       "Trusted by 1,000+ Families",
    testi_sub:      "Real customers. Real aqiqah and qurban. Every one completed with photo proof.",
    testi1_q:       "Aqiqah for our newborn son",
    testi1_body:    "Smooth from start to finish. WhatsApp'd them in the morning, photos and videos were in my phone by that afternoon. The niyyah was recited correctly and the meat was distributed to orphans. Highly recommended.",
    testi1_name:    "Hafizuddin R.",
    testi1_loc:     "Johor Bahru",
    testi2_q:       "Qurban 2025 | Best decision",
    testi2_body:    "Booked early and they held my slot without issue. Full documentation provided. I could see exactly what was done on my behalf. Clean facility, professional team, no middlemen.",
    testi2_name:    "Nurul Ain M.",
    testi2_loc:     "Kulai, Johor",
    testi3_q:       "Farm visit with my school group",
    testi3_body:    "Brought 30 students from our sekolah rendah agama. The owner was incredibly patient and knowledgeable. Kids loved interacting with the goats. Will book again next year.",
    testi3_name:    "Ustaz Fadzillah K.",
    testi3_loc:     "Skudai, Johor",

    // CONTACT
    contact_label:  "Get In Touch",
    contact_h2:     "Talk to Us",
    contact_sub:    "WhatsApp us for aqiqah, qurban, farm visits, or goat sales. We respond fast.",
    contact_loc_l:  "Location",
    contact_loc_v:  "Gunung Pulai, Johor",
    contact_hrs_l:  "Hours",
    contact_hrs_v:  "Daily, 8am – 6pm",
    contact_wa:     "WhatsApp Bani Ibrahim Farms",

    // FOOTER
    footer_loc:     "Gunung Pulai, Johor, Malaysia",
    footer_halal:   "Halal Certified",
    footer_copy:    "© 2025 Bani Ibrahim Farms. All rights reserved.",
  },

  ms: {
    // NAV
    nav_about:    "Tentang Kami",
    nav_services: "Perkhidmatan",
    nav_why:      "Kenapa Kami",
    nav_faq:      "Soal Jawab",
    nav_contact:  "Hubungi",
    nav_wa:       "WhatsApp Kami",

    // HERO
    hero_badge:   "🌿 Ladang Ternakan Halal · Gunung Pulai, Johor",
    hero_h1a:     "Aqiqah Anda.",
    hero_h1b:     "Dilakukan Betul. Dibuktikan dengan <span style=\"color:var(--gold)\">Foto.</span>",
    hero_sub:     "Ladang keluarga di Gunung Pulai, Johor. Aqiqah dan qurban patuh Syariah. Bukti foto dihantar ke WhatsApp anda pada hari yang sama. Tiada orang tengah.",
    hero_cta1:    "WhatsApp Kami Sekarang",
    hero_cta2:    "Lihat Perkhidmatan",
    hero_f1:      "Patuh Syariah",
    hero_f2:      "Bukti Foto Hari Sama",
    hero_f4:      "Kambing Diberi Makan Semulajadi",

    // ABOUT
    about_label:  "Kisah Kami",
    about_h2:     "Ladang yang Dibina atas Iman dan Keluarga",
    about_p1:     "Bani Ibrahim Farms adalah ladang ternakan halal milik keluarga di Gunung Pulai, Johor. Berakar dari pengalaman bertani yang kukuh, kami membawa ketelitian dan kejujuran yang sama untuk setiap aqiqah dan qurban.",
    about_p2:     "Dinamakan sempena Nabi Ibrahim (AS), yang warisannya dalam pengorbanan menjadi asas aqiqah dan qurban. Kambing kami dibesarkan di tanah tinggi Gunung Pulai dengan makanan semulajadi. Ruang yang cukup. Tiada jalan pintas.",
    about_p3:     "Anda berurusan terus dengan ladang. Tiada ejen. Tiada orang tengah. Foto dan video dihantar ke WhatsApp anda pada hari yang sama.",
    about_s1n:    "100%",
    about_s1l:    "Patuh Syariah",
    about_s2n:    "Hari Sama",
    about_s2l:    "Bukti Foto",
    about_s3n:    "0",
    about_s3l:    "Orang Tengah",
    about_s4n:    "365",
    about_s4l:    "Hari Dibuka",

    // SERVICES
    svc_label:    "Apa Yang Kami Tawarkan",
    svc_h2:       "Perkhidmatan Kami",
    svc_sub:      "Pilih perkhidmatan anda. Kami urus selebihnya.",
    svc1_name:    "Aqiqah",
    svc1_desc:    "Beritahu kami nama, tarikh lahir, dan berapa ekor kambing. Kami pilih haiwan yang sihat, lakukan sembelihan dengan niat yang betul, dan hantar bukti foto serta video pada hari yang sama.",
    svc1_link:    "Tanya via WhatsApp",
    svc2_name:    "Qurban",
    svc2_desc:    "Slot penuh cepat sebelum Hari Raya Aidiladha. Tempah awal untuk pastikan haiwan anda tersedia. Sembelihan dilakukan dengan betul, tepat masa, dengan dokumentasi foto dan video penuh.",
    svc2_link:    "Tanya via WhatsApp",
    svc3_name:    "Lawatan Ladang",
    svc3_desc:    "Bawa keluarga atau kumpulan sekolah ke ladang kami di Gunung Pulai. Lihat cara ternakan halal dipelihara. Berinteraksi terus dengan haiwan. Tempah melalui WhatsApp.",
    svc3_link:    "Tempah Lawatan",
    svc4_name:    "Jualan Kambing Hidup",
    svc4_desc:    "Beli terus dari ladang. Tiada ejen. Tiada tambahan harga. Pelbagai baka tersedia sepanjang tahun. WhatsApp kami untuk harga hari ini.",
    svc4_link:    "Tanya via WhatsApp",
    svc6_name:    "Sayur Segar",
    svc6_desc:    "Dipetik segar setiap hari dari ladang tanah tinggi kami di Gunung Pulai. Ditanam secara semulajadi dengan pestisid minimum. Tersedia untuk pengambilan atau penghantaran dalam Johor.",
    svc6_link:    "Ketahui Lebih Lanjut",

    // WHY
    why_label:    "Kenapa Pilih Kami",
    why_h2:       "Pertanian Jujur. Setiap Kali.",
    why_sub:      "Kami tidak ambil jalan pintas. Bukan pada haiwan. Bukan pada sembelihan. Bukan pada dokumentasi anda.",
    why1_h:       "Patuh Syariah",
    why1_p:       "Setiap sembelihan dilakukan oleh profesional Muslim yang terlatih. Niat yang betul. Tatacara Islam yang penuh. Setiap kali.",
    why2_h:       "Haiwan Diberi Makan Semulajadi",
    why2_p:       "Kambing kami dibesarkan dengan makanan semulajadi di tanah tinggi Gunung Pulai. Tiada kandang sesak. Tiada jalan pintas.",
    why3_h:       "Dokumentasi Hari Sama",
    why3_p:       "Anda dapat foto dan video setiap aqiqah dan qurban. Dihantar ke WhatsApp anda pada hari yang sama. Tanpa tunggu.",
    why5_h:       "Terus dari Ladang",
    why5_p:       "Tiada ejen. Tiada orang tengah. Anda bercakap terus dengan pemilik ladang. Harga yang telus setiap kali.",
    why6_h:       "Jujur. Terus. Terdokumentasi.",
    why6_p:       "Anda berurusan terus dengan ladang. Tiada ejen. Tiada orang tengah. Setiap aqiqah dan qurban dilengkapi bukti foto dan video penuh.",

    // FAQ
    faq_label:    "Soalan Lazim",
    faq_h2:       "Soal Jawab",
    faq_sub:      "Soalan tidak tersenarai? WhatsApp kami. Kami balas dengan cepat.",
    faq1_q:       "Di mana Bani Ibrahim Farms terletak?",
    faq1_a:       "Kami di Gunung Pulai, Johor, Malaysia. Lawatan ladang adalah mengikut temujanji. WhatsApp kami untuk mengatur lawatan anda.",
    faq2_q:       "Adakah perkhidmatan aqiqah dan qurban anda patuh Syariah?",
    faq2_a:       "Ya. Setiap sembelihan dilakukan oleh profesional Muslim yang terlatih dengan niat yang betul dilafazkan atas setiap haiwan. Dokumentasi foto dan video disediakan.",
    faq4_q:       "Bagaimana saya boleh menempah lawatan ladang?",
    faq4_a:       "WhatsApp kami dengan tarikh pilihan, saiz kumpulan, dan tujuan lawatan. Kami akan mengesahkan ketersediaan dan mengatur semuanya.",
    faq5_q:       "Adakah terdapat pesanan minimum untuk kambing hidup?",
    faq5_a:       "Tiada pesanan minimum. Kami jual kambing secara individu. WhatsApp kami untuk harga semasa dan baka yang ada.",
    faq6_q:       "Bolehkah saya menyaksikan sembelihan aqiqah atau qurban secara langsung?",
    faq6_a:       "Ya. Anda dialu-alukan untuk hadir di ladang semasa aqiqah atau qurban anda. Maklumkan kami terlebih dahulu agar kami dapat membuat persediaan.",
    faq7_q:       "Apakah aqiqah dan bilakah ia perlu dilakukan?",
    faq7_a:       "Aqiqah adalah amalan Sunnah di mana seekor kambing disembelih untuk meraikan kelahiran seorang anak. Idealnya pada hari ke-7, 14, atau 21 selepas kelahiran. Jika terlepas, boleh dilakukan pada bila-bila masa dalam kehidupan anak atau semasa dewasa.",
    faq8_q:       "Berapa ekor kambing diperlukan untuk aqiqah?",
    faq8_a:       "Dua ekor kambing digalakkan untuk anak lelaki, satu untuk anak perempuan. Seekor untuk anak lelaki juga diterima jika dua ekor tidak mampu. Kami akan nasihatkan pilihan yang sesuai untuk situasi anda.",
    faq9_q:       "Bolehkah aqiqah dilakukan untuk orang dewasa?",
    faq9_a:       "Ya. Jika aqiqah tidak dilakukan semasa lahir, boleh dilakukan kemudian, termasuk semasa dewasa. Dikenali sebagai aqiqah dewasa. Proses yang sama patuh Syariah. Dokumentasi penuh.",
    faq10_q:      "Adakah anda menawarkan korban lembu (qurban berkumpulan)?",
    faq10_a:      "Kami terutamanya menawarkan qurban kambing. Untuk korban lembu, yang membenarkan sehingga 7 peserta berkongsi seekor lembu, WhatsApp kami kerana ketersediaan bergantung pada musim.",
    faq11_q:      "Apa yang berlaku kepada daging selepas aqiqah atau qurban?",
    faq11_a:      "Daging diagihkan kepada anak yatim, keluarga susah, dan komuniti tempatan berhampiran ladang kami di Gunung Pulai. Untuk aqiqah, sebahagian boleh disimpan untuk keluarga anda. Dokumentasi foto dan video penuh dihantar pada hari yang sama.",
    faq13_q:      "Berapa jauh Bani Ibrahim Farms dari Johor Bahru?",
    faq13_a:      "Ladang kami di Gunung Pulai lebih kurang 35 hingga 45 minit dengan kereta dari pusat bandar Johor Bahru, dan sekitar 3 hingga 3.5 jam dari Kuala Lumpur. Kami hantar lokasi GPS tepat melalui WhatsApp apabila anda menempah.",
    faq14_q:      "Apakah baka kambing yang ada di ladang?",
    faq14_a:      "Kami ada pelbagai baka untuk aqiqah, qurban, dan jualan hidup. Ketersediaan berbeza mengikut musim. WhatsApp kami untuk stok dan harga semasa.",
    faq15_q:      "Bolehkah bukan Muslim melawat ladang?",
    faq15_a:      "Ya. Bukan Muslim dialu-alukan untuk lawatan ladang. Terbuka untuk keluarga, kumpulan sekolah, dan organisasi. WhatsApp kami untuk mengatur.",
    faq16_q:      "Adakah anda menyediakan bukti aqiqah?",
    faq16_a:      "Ya. Kami hantar foto dan video sembelihan dan pengagihan daging melalui WhatsApp pada hari aqiqah. Itu bukti aqiqah telah dilakukan dengan betul bagi pihak anda.",

    // OWNERSHEEP
    os_label:       "Pemilikan Ternakan",
    os_h2:          "Program OwnerSheep",
    os_sub:         "Bani Ibrahim Farms adalah ladang kluster yang disahkan dalam rangkaian ternakan halal serantau yang terkemuka merentasi Asia Tenggara. Miliki biri-biri. Kami urus untuk anda.",
    os_about_h:     "Apakah Ini?",
    os_about_p:     "Anda beli biri-biri. Kami jaga, uruskan, dan biakkan di ladang kami di Gunung Pulai. Pemilikan penuh kekal dengan anda. Kami kendalikan semua operasi ladang, disokong oleh rangkaian serantau yang profesional.",
    os_obj_h:       "Faedah Anda",
    os_b1:          "Biri-biri anda diberi makan dengan baik dan dipelihara dengan integriti",
    os_b2:          "Sebahagian daripada rantaian bekalan serantau yang aktif di Asia Tenggara",
    os_b3:          "Biri-biri anda dijual melalui rangkaian kami apabila kontrak tamat. Nilai jualan dipindahkan kepada anda.",
    os_b4:          "Kemas kini kesihatan dan pertumbuhan tahunan untuk biri-biri anda",
    os_how_h:       "Cara Ia Berfungsi",
    os_step1_h:     "Pemilihan Pakej",
    os_step1_p:     "Pilih pakej anda. Minimum 4 ekor biri-biri. Kami nasihatkan pilihan terbaik untuk situasi anda.",
    os_step2_h:     "Penandatanganan Kontrak",
    os_step2_p:     "Tandatangan perjanjian pemilikan dan buat pembayaran. Biri-biri anda didaftarkan atas nama anda.",
    os_step3_h:     "Penjagaan dan Pembiakan",
    os_step3_p:     "Pakar veterinar dan profesional ladang kami uruskan biri-biri anda di ladang Gunung Pulai kami. Kemas kini tahunan dihantar kepada anda.",
    os_step4_h:     "Penyempurnaan Kontrak",
    os_step4_p:     "Apabila kontrak tamat, biri-biri anda dijual melalui rangkaian ternakan serantau kami. Nilai jualan dipindahkan kepada anda.",
    os_net_label:   "Disokong oleh Rangkaian Serantau",
    os_net_p:       "Bani Ibrahim Farms adalah ladang kluster yang disahkan dalam rangkaian ternakan halal profesional yang aktif merentasi Asia Tenggara. Piawaian tertinggi dalam penjagaan haiwan, etika, dan integriti rantaian bekalan.",
    os_cta:         "Tanya via WhatsApp",

    // QUICK ANSWERS
    qa_label:     "Apa Yang Perlu Anda Tahu",
    qa_h2:        "Jawapan Jelas. Tanpa Bunga-Bunga.",
    qa1_q:        "Apakah Aqiqah?",
    qa1_a:        "Aqiqah adalah amalan Sunnah dalam Islam. Seekor kambing disembelih untuk meraikan kelahiran anak, biasanya dalam tempoh 7 hari, walaupun boleh dilakukan pada bila-bila usia. Dua ekor untuk anak lelaki. Satu untuk anak perempuan. Daging dikongsi bersama keluarga dan diagih kepada yang memerlukan. Kami uruskan keseluruhan proses: sembelihan, pengagihan, dan dokumentasi.",
    qa2_q:        "Apakah Qurban?",
    qa2_a:        "Qurban adalah ritual Islam menyembelih haiwan ternakan semasa Hari Raya Aidiladha (10 hingga 13 Zulhijjah). Ia mengenang pengorbanan Nabi Ibrahim (AS). Seekor kambing meliputi satu orang. Seekor lembu meliputi sehingga tujuh orang. Daging dibahagi tiga: untuk keluarga, saudara-mara, dan yang memerlukan. Bani Ibrahim Farms melakukan qurban di Gunung Pulai, Johor, dengan pematuhan Syariah penuh dan dokumentasi foto pada hari yang sama.",
    qa3_q:        "Mengapa Pilih Ladang Halal Bertauliah?",
    qa3_a:        "Untuk aqiqah dan qurban sah di sisi Islam, haiwan mesti disembelih oleh seorang Muslim, dengan niat yang betul, dan mengikut keperluan halal. Ladang halal bertauliah memastikan haiwan sihat, dipelihara dengan baik, dan disembelih dengan betul. Di Bani Ibrahim Farms, setiap sembelihan didokumentasikan dan dihantar kepada anda pada hari yang sama.",

    // TESTIMONIALS
    testi_label:    "Apa Kata Keluarga",
    testi_h2:       "Dipercayai 1,000+ Keluarga",
    testi_sub:      "Pelanggan sebenar. Aqiqah dan qurban sebenar. Setiap satu dengan bukti foto.",
    testi1_q:       "Aqiqah untuk anak lelaki kami",
    testi1_body:    "Lancar dari awal hingga akhir. WhatsApp pagi, foto dan video sampai petang itu juga. Niat dilafazkan dengan betul dan daging diagihkan kepada anak yatim. Sangat disyorkan.",
    testi1_name:    "Hafizuddin R.",
    testi1_loc:     "Johor Bahru",
    testi2_q:       "Qurban 2025 | Keputusan terbaik",
    testi2_body:    "Tempah awal dan slot saya terjamin. Dokumentasi penuh disediakan. Saya dapat lihat sendiri apa yang dilakukan bagi pihak saya. Kemudahan bersih, pasukan profesional, tiada orang tengah.",
    testi2_name:    "Nurul Ain M.",
    testi2_loc:     "Kulai, Johor",
    testi3_q:       "Lawatan ladang bersama kumpulan sekolah",
    testi3_body:    "Bawa 30 pelajar dari sekolah rendah agama kami. Pemilik ladang sangat sabar dan berpengetahuan. Kanak-kanak seronok berinteraksi dengan kambing. Akan tempah lagi tahun hadapan.",
    testi3_name:    "Ustaz Fadzillah K.",
    testi3_loc:     "Skudai, Johor",

    // CONTACT
    contact_label:  "Hubungi Kami",
    contact_h2:     "Hubungi Kami Sekarang",
    contact_sub:    "WhatsApp kami untuk aqiqah, qurban, lawatan ladang, atau jualan kambing. Kami balas dengan cepat.",
    contact_loc_l:  "Lokasi",
    contact_loc_v:  "Gunung Pulai, Johor",
    contact_hrs_l:  "Waktu",
    contact_hrs_v:  "Setiap hari, 8pg – 6ptg",
    contact_wa:     "WhatsApp Bani Ibrahim Farms",

    // FOOTER
    footer_loc:     "Gunung Pulai, Johor, Malaysia",
    footer_halal:   "Halal Disahkan",
    footer_copy:    "© 2025 Bani Ibrahim Farms. Hak cipta terpelihara.",
  }
};

// ── STATE ─────────────────────────────────────────────────────
let lang = localStorage.getItem('bif_lang') || 'en';

// ── APPLY TRANSLATIONS ────────────────────────────────────────
function applyLang(l) {
  lang = l;
  localStorage.setItem('bif_lang', l);
  const t = T[l];

  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === l);
  });

  // Update html lang attribute
  document.documentElement.lang = l === 'ms' ? 'ms' : 'en';
}

// ── NAVBAR SCROLL ─────────────────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── MOBILE MENU ───────────────────────────────────────────────
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');

hamburger?.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-mobile a').forEach(a => {
  a.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// ── FAQ ACCORDION ─────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── LANG TOGGLE INIT ──────────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(lang);
});
