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
    hero_h1a:     "Rooted in Faith,",
    hero_h1b:     "Raised with Care",
    hero_sub:     "Halal livestock farming in the heart of Johor — serving families across Malaysia with aqiqah, qurban, farm visits, and ethically raised goats.",
    hero_cta1:    "WhatsApp Us",
    hero_cta2:    "Our Services",
    hero_f1:      "Syariah-Compliant",
    hero_f2:      "Photo Documentation",
    hero_f3:      "Licensed Farm",
    hero_f4:      "Free-Range Goats",

    // ABOUT
    about_label:  "Our Story",
    about_h2:     "A Farm Built on Faith and Family",
    about_p1:     "Nestled in the lush highlands of Gunung Pulai, Johor, Bani Ibrahim Farms is a family-run halal livestock farm dedicated to ethical and transparent farming practices.",
    about_p2:     "Named after the Prophet Ibrahim (AS) — whose legacy of sacrifice and devotion is the very foundation of aqiqah and qurban — we raise our goats with care, space, and natural feed, ensuring every animal is healthy, well-treated, and Syariah-compliant.",
    about_p3:     "When you choose us, you deal directly with the farm. No middlemen. No shortcuts. Just honest, halal farming the way it should be.",
    about_s1n:    "100%",
    about_s1l:    "Syariah-Compliant",
    about_s2n:    "5+",
    about_s2l:    "Years Operating",
    about_s3n:    "1,000+",
    about_s3l:    "Families Served",
    about_s4n:    "365",
    about_s4l:    "Days Open",

    // SERVICES
    svc_label:    "What We Offer",
    svc_h2:       "Our Services",
    svc_sub:      "From sacred rites to farm-fresh produce, everything we offer is rooted in our commitment to halal standards and honest farming.",
    svc1_name:    "Aqiqah",
    svc1_desc:    "Fulfil your child's aqiqah the right way. We handle the entire process — selecting a healthy goat, performing the slaughter with proper niyyah, and providing photo and video documentation sent to you on the same day.",
    svc1_link:    "Enquire via WhatsApp",
    svc2_name:    "Qurban",
    svc2_desc:    "Book your qurban slot early — goats available for Eid al-Adha. We ensure your qurban is performed correctly, on time, and with full documentation. Contact us to reserve your animal.",
    svc2_link:    "Enquire via WhatsApp",
    svc3_name:    "Farm Visits",
    svc3_desc:    "Bring your family, school group, or organisation for an authentic farm experience in the highlands of Gunung Pulai. Learn about halal livestock, interact with our goats, and connect with nature.",
    svc3_link:    "Book a Visit",
    svc4_name:    "Live Goat Sales",
    svc4_desc:    "Purchase healthy, Syariah-compliant live goats directly from our farm. Various breeds and sizes available year-round. No middlemen — you buy directly from us at fair prices.",
    svc4_link:    "Enquire via WhatsApp",
    svc5_name:    "Goat Milk",
    svc5_desc:    "Fresh, natural goat milk sourced directly from our farm. Rich in nutrients and easier to digest than cow's milk. Available for pickup at the farm or local delivery within Johor.",
    svc5_link:    "Learn More",
    svc6_name:    "Fresh Vegetables",
    svc6_desc:    "Fresh vegetables picked daily from our highland farm in Gunung Pulai. Grown naturally with minimal pesticides — for families, restaurants, and bulk orders. Available for farm pickup or delivery within Johor.",
    svc6_link:    "Learn More",

    // WHY
    why_label:    "Why Choose Us",
    why_h2:       "Honest Farming, Every Time",
    why_sub:      "We don't cut corners. Everything we do — from how we raise our goats to how we handle your order — is built on trust.",
    why1_h:       "Syariah-Compliant",
    why1_p:       "All slaughter is performed by trained Muslim professionals with proper niyyah and full adherence to Islamic rites.",
    why2_h:       "Ethical & Free-Range",
    why2_p:       "Our goats roam freely in the Gunung Pulai highlands, fed with natural feed — no crowded pens, no shortcuts.",
    why3_h:       "Full Documentation",
    why3_p:       "We provide photo and video evidence for every aqiqah and qurban — so you can witness what was done on your behalf.",
    why4_h:       "Licensed Farm",
    why4_p:       "Bani Ibrahim Farms is registered and licensed with Malaysian authorities, ensuring full compliance with regulations.",
    why5_h:       "Direct from Farm",
    why5_p:       "No agents, no middlemen. You deal directly with the farm — transparent pricing and honest communication.",
    why6_h:       "Experienced Team",
    why6_p:       "Our family has been in halal livestock farming for years. We know what we're doing, and we do it with pride.",

    // FAQ
    faq_label:    "Common Questions",
    faq_h2:       "Frequently Asked Questions",
    faq_sub:      "Have a question not listed here? WhatsApp us and we'll get back to you promptly.",
    faq1_q:       "Where is Bani Ibrahim Farms located?",
    faq1_a:       "We are located in Gunung Pulai, Johor, Malaysia. Farm visits are by appointment only — WhatsApp us to arrange your visit.",
    faq2_q:       "Are your aqiqah and qurban services Syariah-compliant?",
    faq2_a:       "Yes. All slaughter is performed by trained Muslim professionals with proper niyyah (intention) recited over each animal. Photo and video documentation is provided.",
    faq3_q:       "Do you deliver goat milk?",
    faq3_a:       "We offer local delivery within Johor. WhatsApp us with your location and we'll confirm availability and pricing.",
    faq4_q:       "How do I book a farm visit?",
    faq4_a:       "Simply WhatsApp us with your preferred date, group size, and purpose of visit. We'll confirm availability and arrange everything from there.",
    faq5_q:       "Is there a minimum order for live goats?",
    faq5_a:       "No minimum order — we sell individual goats. WhatsApp us for current pricing and the breeds available at the time of your enquiry.",
    faq6_q:       "Can I witness the aqiqah or qurban slaughter in person?",
    faq6_a:       "Yes, you are welcome to be present at the farm during your aqiqah or qurban. Please let us know in advance so we can prepare accordingly.",
    faq7_q:       "What is aqiqah and when should it be performed?",
    faq7_a:       "Aqiqah is a Sunnah practice in Islam where a goat or sheep is slaughtered to celebrate the birth of a child. It is ideally performed on the 7th, 14th, or 21st day after birth. If missed, it can be done at any point in the child's life, or even in adulthood.",
    faq8_q:       "How many goats are needed for aqiqah?",
    faq8_a:       "According to Islamic tradition, two goats are recommended for a boy and one goat for a girl. It is also acceptable to slaughter one goat for a boy if two is not feasible. We will advise you on the best option based on your situation.",
    faq9_q:       "Can aqiqah be done for an adult?",
    faq9_a:       "Yes. If aqiqah was not performed at birth, it can be done later in life — including adulthood. This is known as aqiqah dewasa. We handle adult aqiqah with the same Syariah-compliant process, proper niyyah, and full photo documentation.",
    faq10_q:      "Do you offer cow qurban (group qurban)?",
    faq10_a:      "We primarily offer goat qurban. For cow qurban (korban lembu), which allows up to 7 participants to share one cow, please WhatsApp us as availability depends on the season. We can help you join a group arrangement if needed.",
    faq11_q:      "What happens to the meat after aqiqah or qurban?",
    faq11_a:      "After slaughter, the meat is distributed to orphans, underprivileged families, and the local community near our farm in Gunung Pulai. For aqiqah, a portion can also be kept for your family. We document the entire distribution process with photos and videos sent to you the same day.",
    faq12_q:      "Is goat milk suitable for babies and children?",
    faq12_a:      "Goat milk is rich in calcium, protein, and essential fatty acids, with smaller fat globules than cow milk — making it easier to digest. For infants under 12 months, breast milk or formula remains the primary recommendation. Please consult your doctor before introducing goat milk to very young children.",
    faq13_q:      "How far is Bani Ibrahim Farms from Johor Bahru?",
    faq13_a:      "Our farm in Gunung Pulai, Johor is approximately 35–45 minutes by car from Johor Bahru city centre, and around 3–3.5 hours from Kuala Lumpur. We will share the exact GPS location via WhatsApp when you book your visit.",
    faq14_q:      "What breeds of goats do you have at the farm?",
    faq14_a:      "We keep a variety of goat breeds suitable for aqiqah, qurban, and live sales. Available breeds and sizes vary by season. WhatsApp us for the current selection and pricing at the time of your enquiry.",
    faq15_q:      "Can non-Muslims visit the farm?",
    faq15_a:      "Yes, non-Muslims are welcome to visit Bani Ibrahim Farms for farm tours. Our farm experience is open to all — families, school groups, and organisations looking to learn about sustainable livestock farming. WhatsApp us to arrange a visit.",
    faq16_q:      "Do you provide a certificate or proof of aqiqah?",
    faq16_a:      "Yes. We provide photo and video documentation of the slaughter and meat distribution, sent to you via WhatsApp on the day of the aqiqah. This serves as your proof that the aqiqah was performed correctly on your behalf.",

    // QUICK ANSWERS
    qa_label:     "What You Need to Know",
    qa_h2:        "Common Questions, Clear Answers",
    qa1_q:        "What is Aqiqah?",
    qa1_a:        "Aqiqah is a Sunnah practice in Islam where a goat is slaughtered to celebrate the birth of a child — typically within 7 days, though it can be done at any age. Two goats are recommended for a boy, one for a girl. The meat is shared with family and distributed to those in need. At Bani Ibrahim Farms, we handle the entire process — slaughter, distribution, and documentation — so you can fulfil this Sunnah with ease.",
    qa2_q:        "What is Qurban?",
    qa2_a:        "Qurban (also called Korban) is the Islamic ritual of sacrificing a livestock animal during Eid al-Adha (10th–13th Zulhijjah). It commemorates the sacrifice of Prophet Ibrahim (AS). One goat covers one person's qurban; one cow covers up to seven. The meat is divided into three parts — for the family, relatives, and those in need. Bani Ibrahim Farms performs qurban in Gunung Pulai, Johor, with full Syariah compliance and photo documentation.",
    qa3_q:        "Why Choose a Halal Certified Farm?",
    qa3_a:        "For aqiqah and qurban to be valid under Islamic law, the animal must be slaughtered by a Muslim, with the correct niyyah (intention), and in accordance with halal requirements. A certified halal farm ensures the animal is healthy, well-raised, and slaughtered correctly — giving you full confidence that your ibadah is accepted. At Bani Ibrahim Farms, every slaughter is documented and transparent.",

    // CONTACT
    contact_label:  "Get In Touch",
    contact_h2:     "Ready to Enquire?",
    contact_sub:    "WhatsApp us for any enquiry — aqiqah, qurban, farm visits, goat sales, or goat milk. We respond promptly.",
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
    hero_h1a:     "Berakar dalam Iman,",
    hero_h1b:     "Dipelihara dengan Kasih",
    hero_sub:     "Ternakan halal di jantung Johor — melayan keluarga di seluruh Malaysia dengan perkhidmatan aqiqah, qurban, lawatan ladang, dan kambing yang dipelihara secara beretika.",
    hero_cta1:    "WhatsApp Kami",
    hero_cta2:    "Perkhidmatan Kami",
    hero_f1:      "Patuh Syariah",
    hero_f2:      "Dokumentasi Foto",
    hero_f3:      "Ladang Berlesen",
    hero_f4:      "Kambing Bebas Ragut",

    // ABOUT
    about_label:  "Kisah Kami",
    about_h2:     "Ladang yang Dibina atas Iman dan Keluarga",
    about_p1:     "Terletak di kawasan hijau Gunung Pulai, Johor, Bani Ibrahim Farms adalah ladang ternakan halal milik keluarga yang berdedikasi kepada amalan pertanian yang beretika dan telus.",
    about_p2:     "Dinamakan sempena Nabi Ibrahim (AS) — yang warisannya dalam pengorbanan dan ketaatan menjadi asas aqiqah dan qurban — kami memelihara kambing dengan penuh kasih sayang, ruang yang mencukupi, dan makanan semulajadi bagi memastikan setiap haiwan sihat, dilayan dengan baik, dan patuh Syariah.",
    about_p3:     "Apabila anda memilih kami, anda berurusan terus dengan ladang. Tiada orang tengah. Tiada jalan pintas. Hanya pertanian halal yang jujur sebagaimana sepatutnya.",
    about_s1n:    "100%",
    about_s1l:    "Patuh Syariah",
    about_s2n:    "5+",
    about_s2l:    "Tahun Beroperasi",
    about_s3n:    "1,000+",
    about_s3l:    "Keluarga Dilayan",
    about_s4n:    "365",
    about_s4l:    "Hari Dibuka",

    // SERVICES
    svc_label:    "Apa Yang Kami Tawarkan",
    svc_h2:       "Perkhidmatan Kami",
    svc_sub:      "Daripada ibadat sunat hingga hasil ladang segar, semua yang kami tawarkan berasaskan komitmen kami terhadap piawaian halal dan pertanian yang jujur.",
    svc1_name:    "Aqiqah",
    svc1_desc:    "Tunaikan aqiqah anak anda dengan cara yang betul. Kami menguruskan keseluruhan proses — memilih kambing yang sihat, melaksanakan sembelihan dengan niat yang betul, serta menyediakan dokumentasi foto dan video dihantar pada hari yang sama.",
    svc1_link:    "Tanya via WhatsApp",
    svc2_name:    "Qurban",
    svc2_desc:    "Tempah slot qurban anda awal — kambing tersedia untuk Hari Raya Aidiladha. Kami memastikan qurban anda dilaksanakan dengan betul, tepat masa, dan dilengkapi dokumentasi penuh.",
    svc2_link:    "Tanya via WhatsApp",
    svc3_name:    "Lawatan Ladang",
    svc3_desc:    "Bawa keluarga, kumpulan sekolah, atau organisasi anda untuk pengalaman ladang yang sahih di tanah tinggi Gunung Pulai. Pelajari tentang ternakan halal, berinteraksi dengan kambing kami, dan nikmati alam semulajadi.",
    svc3_link:    "Tempah Lawatan",
    svc4_name:    "Jualan Kambing Hidup",
    svc4_desc:    "Beli kambing hidup yang sihat dan patuh Syariah terus dari ladang kami. Pelbagai baka dan saiz tersedia sepanjang tahun. Tiada orang tengah — anda membeli terus dari kami pada harga yang adil.",
    svc4_link:    "Tanya via WhatsApp",
    svc5_name:    "Susu Kambing",
    svc5_desc:    "Susu kambing segar dan semulajadi terus dari ladang kami. Kaya dengan nutrien dan lebih mudah dihadamkan berbanding susu lembu. Tersedia untuk pengambilan di ladang atau penghantaran tempatan dalam Johor.",
    svc5_link:    "Ketahui Lebih Lanjut",
    svc6_name:    "Sayur Segar",
    svc6_desc:    "Sayur segar dipetik setiap hari dari ladang tanah tinggi kami di Gunung Pulai. Ditanam secara semulajadi dengan pestisid minimum — untuk keluarga, restoran, dan pesanan pukal. Tersedia untuk pengambilan di ladang atau penghantaran dalam Johor.",
    svc6_link:    "Ketahui Lebih Lanjut",

    // WHY
    why_label:    "Kenapa Pilih Kami",
    why_h2:       "Pertanian Jujur, Setiap Kali",
    why_sub:      "Kami tidak mengambil jalan pintas. Segala yang kami lakukan — daripada cara kami memelihara kambing hingga cara kami menguruskan pesanan anda — dibina atas kepercayaan.",
    why1_h:       "Patuh Syariah",
    why1_p:       "Semua sembelihan dilakukan oleh profesional Muslim yang terlatih dengan niat yang betul dan pematuhan penuh terhadap tatacara Islam.",
    why2_h:       "Beretika & Bebas Ragut",
    why2_p:       "Kambing kami berkeliaran bebas di tanah tinggi Gunung Pulai, diberi makan semulajadi — tiada kandang sesak, tiada jalan pintas.",
    why3_h:       "Dokumentasi Penuh",
    why3_p:       "Kami menyediakan bukti foto dan video untuk setiap aqiqah dan qurban — supaya anda dapat menyaksikan apa yang dilakukan bagi pihak anda.",
    why4_h:       "Ladang Berlesen",
    why4_p:       "Bani Ibrahim Farms berdaftar dan berlesen dengan pihak berkuasa Malaysia, memastikan pematuhan penuh terhadap peraturan.",
    why5_h:       "Terus dari Ladang",
    why5_p:       "Tiada ejen, tiada orang tengah. Anda berurusan terus dengan ladang — harga telus dan komunikasi yang jujur.",
    why6_h:       "Pasukan Berpengalaman",
    why6_p:       "Keluarga kami telah lama berkecimpung dalam ternakan halal. Kami tahu apa yang kami lakukan, dan kami melakukannya dengan bangga.",

    // FAQ
    faq_label:    "Soalan Lazim",
    faq_h2:       "Soal Jawab",
    faq_sub:      "Ada soalan yang tidak tersenarai di sini? WhatsApp kami dan kami akan membalas dengan segera.",
    faq1_q:       "Di mana Bani Ibrahim Farms terletak?",
    faq1_a:       "Kami terletak di Gunung Pulai, Johor, Malaysia. Lawatan ladang adalah mengikut temujanji sahaja — WhatsApp kami untuk mengatur lawatan anda.",
    faq2_q:       "Adakah perkhidmatan aqiqah dan qurban anda patuh Syariah?",
    faq2_a:       "Ya. Semua sembelihan dilakukan oleh profesional Muslim yang terlatih dengan niat yang betul dilafazkan atas setiap haiwan. Dokumentasi foto dan video disediakan.",
    faq3_q:       "Adakah anda menghantar susu kambing?",
    faq3_a:       "Kami menawarkan penghantaran tempatan dalam negeri Johor. WhatsApp kami dengan lokasi anda dan kami akan mengesahkan ketersediaan dan harga.",
    faq4_q:       "Bagaimana saya boleh menempah lawatan ladang?",
    faq4_a:       "Hanya WhatsApp kami dengan tarikh pilihan, saiz kumpulan, dan tujuan lawatan anda. Kami akan mengesahkan ketersediaan dan mengatur semuanya.",
    faq5_q:       "Adakah terdapat pesanan minimum untuk kambing hidup?",
    faq5_a:       "Tiada pesanan minimum — kami menjual kambing secara individu. WhatsApp kami untuk harga semasa dan baka yang tersedia semasa pertanyaan anda.",
    faq6_q:       "Bolehkah saya menyaksikan sembelihan aqiqah atau qurban secara langsung?",
    faq6_a:       "Ya, anda dialu-alukan untuk hadir di ladang semasa aqiqah atau qurban anda. Sila maklumkan kami terlebih dahulu agar kami dapat membuat persediaan.",
    faq7_q:       "Apakah aqiqah dan bilakah ia perlu dilakukan?",
    faq7_a:       "Aqiqah adalah amalan Sunnah dalam Islam di mana seekor kambing disembelih untuk meraikan kelahiran seorang anak. Ia idealnya dilakukan pada hari ke-7, 14, atau 21 selepas kelahiran. Jika terlepas, ia boleh dilakukan pada bila-bila masa dalam kehidupan anak, atau bahkan semasa dewasa.",
    faq8_q:       "Berapa ekor kambing diperlukan untuk aqiqah?",
    faq8_a:       "Menurut tradisi Islam, dua ekor kambing adalah digalakkan untuk anak lelaki dan seekor untuk anak perempuan. Adalah juga diterima untuk menyembelih seekor kambing untuk anak lelaki jika dua ekor tidak mampu. Kami akan memberi nasihat tentang pilihan terbaik berdasarkan situasi anda.",
    faq9_q:       "Bolehkah aqiqah dilakukan untuk orang dewasa?",
    faq9_a:       "Ya. Jika aqiqah tidak dilakukan semasa lahir, ia boleh dilakukan kemudian dalam kehidupan — termasuk semasa dewasa. Ini dikenali sebagai aqiqah dewasa. Kami menguruskan aqiqah dewasa dengan proses yang sama patuh Syariah, niat yang betul, dan dokumentasi foto penuh.",
    faq10_q:      "Adakah anda menawarkan korban lembu (qurban berkumpulan)?",
    faq10_a:      "Kami terutamanya menawarkan qurban kambing. Untuk korban lembu, yang membenarkan sehingga 7 peserta berkongsi seekor lembu, sila WhatsApp kami kerana ketersediaan bergantung pada musim. Kami boleh membantu anda menyertai pengaturan berkumpulan jika diperlukan.",
    faq11_q:      "Apa yang berlaku kepada daging selepas aqiqah atau qurban?",
    faq11_a:      "Selepas sembelihan, daging diagihkan kepada anak yatim, keluarga susah, dan komuniti tempatan berhampiran ladang kami di Gunung Pulai. Untuk aqiqah, sebahagian juga boleh disimpan untuk keluarga anda. Kami mendokumenkan keseluruhan proses pengagihan dengan foto dan video yang dihantar kepada anda pada hari yang sama.",
    faq12_q:      "Adakah susu kambing sesuai untuk bayi dan kanak-kanak?",
    faq12_a:      "Susu kambing kaya dengan kalsium, protein, dan asid lemak penting, dengan globul lemak yang lebih kecil daripada susu lembu — menjadikannya lebih mudah dihadam. Untuk bayi di bawah 12 bulan, susu ibu atau formula kekal sebagai cadangan utama. Sila berunding dengan doktor anda sebelum memperkenalkan susu kambing kepada anak-anak yang sangat muda.",
    faq13_q:      "Berapa jauh Bani Ibrahim Farms dari Johor Bahru?",
    faq13_a:      "Ladang kami di Gunung Pulai, Johor adalah kira-kira 35–45 minit dengan kereta dari pusat bandar Johor Bahru, dan sekitar 3–3.5 jam dari Kuala Lumpur. Kami akan berkongsi lokasi GPS tepat melalui WhatsApp apabila anda menempah lawatan anda.",
    faq14_q:      "Apakah baka kambing yang ada di ladang?",
    faq14_a:      "Kami mempunyai pelbagai baka kambing yang sesuai untuk aqiqah, qurban, dan jualan hidup. Baka dan saiz yang tersedia berbeza mengikut musim. WhatsApp kami untuk pilihan semasa dan harga pada masa pertanyaan anda.",
    faq15_q:      "Bolehkah bukan Muslim melawat ladang?",
    faq15_a:      "Ya, bukan Muslim dialu-alukan untuk melawat Bani Ibrahim Farms untuk lawatan ladang. Pengalaman ladang kami terbuka untuk semua — keluarga, kumpulan sekolah, dan organisasi yang ingin belajar tentang ternakan yang mampan. WhatsApp kami untuk mengatur lawatan.",
    faq16_q:      "Adakah anda menyediakan sijil atau bukti aqiqah?",
    faq16_a:      "Ya. Kami menyediakan dokumentasi foto dan video sembelihan dan pengagihan daging, dihantar kepada anda melalui WhatsApp pada hari aqiqah. Ini berfungsi sebagai bukti bahawa aqiqah telah dilakukan dengan betul bagi pihak anda.",

    // QUICK ANSWERS
    qa_label:     "Apa Yang Perlu Anda Tahu",
    qa_h2:        "Soalan Lazim, Jawapan Jelas",
    qa1_q:        "Apakah Aqiqah?",
    qa1_a:        "Aqiqah adalah amalan Sunnah dalam Islam di mana seekor kambing disembelih untuk meraikan kelahiran seorang anak — biasanya dalam tempoh 7 hari, walaupun ia boleh dilakukan pada bila-bila usia. Dua ekor kambing digalakkan untuk anak lelaki, satu untuk anak perempuan. Dagingnya dikongsi bersama keluarga dan diagihkan kepada yang memerlukan. Di Bani Ibrahim Farms, kami menguruskan keseluruhan proses — sembelihan, pengagihan, dan dokumentasi — supaya anda dapat menunaikan Sunnah ini dengan mudah.",
    qa2_q:        "Apakah Qurban?",
    qa2_a:        "Qurban (juga disebut Korban) adalah ritual Islam menyembelih haiwan ternakan semasa Hari Raya Aidiladha (10–13 Zulhijjah). Ia memperingati pengorbanan Nabi Ibrahim (AS). Seekor kambing meliputi qurban satu orang; seekor lembu meliputi sehingga tujuh orang. Daging dibahagikan kepada tiga bahagian — untuk keluarga, saudara-mara, dan yang memerlukan. Bani Ibrahim Farms melakukan qurban di Gunung Pulai, Johor, dengan pematuhan Syariah penuh dan dokumentasi foto.",
    qa3_q:        "Mengapa Pilih Ladang Halal Bertauliah?",
    qa3_a:        "Untuk aqiqah dan qurban sah di sisi undang-undang Islam, haiwan mesti disembelih oleh seorang Muslim, dengan niat yang betul, dan mengikut keperluan halal. Ladang halal bertauliah memastikan haiwan itu sihat, dipelihara dengan baik, dan disembelih dengan betul — memberi anda keyakinan penuh bahawa ibadat anda diterima. Di Bani Ibrahim Farms, setiap sembelihan didokumentasikan dan telus.",

    // CONTACT
    contact_label:  "Hubungi Kami",
    contact_h2:     "Sedia untuk Bertanya?",
    contact_sub:    "WhatsApp kami untuk sebarang pertanyaan — aqiqah, qurban, lawatan ladang, jualan kambing, atau susu kambing. Kami membalas dengan cepat.",
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
