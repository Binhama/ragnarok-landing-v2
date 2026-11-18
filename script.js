function updateDesktopMessage() {
  const message = document.getElementById("desktop-message");
  if (message) {
    message.classList.toggle("desktop-visible", window.innerWidth < 1440);
  }
}

updateDesktopMessage();
window.addEventListener("resize", updateDesktopMessage);

const languageOrder = ["en", "id", "fil", "th", "vi"];
const translationRows = {
  "brand.title": ["Ragnarok: The New World", "Ragnarok: Dunia Baru", "Ragnarok: Bagong Mundo", "Ragnarok: โลกใหม่", "Ragnarok: Thế Giới Mới"],
  "brand.name": ["RAGNAROK", "RAGNAROK", "RAGNAROK", "RAGNAROK", "RAGNAROK"],
  "brand.subtitle": ["THE NEW WORLD", "DUNIA BARU", "BAGONG MUNDO", "โลกใหม่", "THẾ GIỚI MỚI"],
  "meta.description": ["Ragnarok: The New World - A New Legend Awakes in Midgard.", "Ragnarok: Dunia Baru - Legenda Baru Terbangun di Midgard.", "Ragnarok: Bagong Mundo - Nagigising ang Bagong Alamat sa Midgard.", "Ragnarok: โลกใหม่ - ตำนานบทใหม่ตื่นขึ้นในมิดการ์ด", "Ragnarok: Thế Giới Mới - Huyền thoại mới thức tỉnh tại Midgard."],
  "desktop.message": ["Please open on Desktop for best experience", "Buka di komputer untuk pengalaman terbaik", "Buksan sa desktop para sa pinakamagandang karanasan", "เปิดบนคอมพิวเตอร์เพื่อประสบการณ์ที่ดีที่สุด", "Vui lòng mở trên máy tính để có trải nghiệm tốt nhất"],
  "nav.aria": ["Header actions", "Aksi navigasi", "Mga aksyon sa nabigasyon", "เมนูนำทาง", "Thao tác điều hướng"],
  "language.aria": ["Page language", "Bahasa halaman", "Wika ng pahina", "ภาษาของหน้าเว็บ", "Ngôn ngữ trang"],
  "language.en": ["EN - English", "EN - Inggris", "EN - Ingles", "EN - อังกฤษ", "EN - Tiếng Anh"],
  "language.id": ["ID - Indonesian", "ID - Indonesia", "ID - Indones", "ID - อินโดนีเซีย", "ID - Tiếng Indonesia"],
  "language.fil": ["PH - Filipino", "PH - Filipino", "PH - Filipino", "PH - ฟิลิปปินส์", "PH - Tiếng Filipino"],
  "language.th": ["TH - Thai", "TH - Thailand", "TH - Thai", "TH - ไทย", "TH - Tiếng Thái"],
  "language.vi": ["VN - Vietnamese", "VN - Vietnam", "VN - Biyetnames", "VN - เวียดนาม", "VN - Tiếng Việt"],
  "button.play": ["PLAY NOW", "MAIN SEKARANG", "MAGLARO NA", "เล่นเลย", "CHƠI NGAY"],
  "image.hero": ["Official Ragnarok: The New World hero artwork", "Ilustrasi hero resmi Ragnarok: Dunia Baru", "Opisyal na likhang-sining ng bayani ng Ragnarok: Bagong Mundo", "ภาพตัวละครหลักอย่างเป็นทางการจาก Ragnarok: โลกใหม่", "Hình minh họa nhân vật chính thức của Ragnarok: Thế Giới Mới"],
  "hero.badge.free": ["100% FREE TO PLAY", "100% GRATIS DIMAINKAN", "100% LIBRE LARUIN", "เล่นฟรี 100%", "MIỄN PHÍ 100%"],
  "hero.eyebrow": ["The legend returns", "Legenda kembali", "Nagbabalik ang alamat", "ตำนานกลับมาอีกครั้ง", "Huyền thoại trở lại"],
  "hero.subtitle": ["A New Legend Awakes in Midgard", "Legenda Baru Terbangun di Midgard", "Nagigising ang Bagong Alamat sa Midgard", "ตำนานบทใหม่ตื่นขึ้นในมิดการ์ด", "Huyền thoại mới thức tỉnh tại Midgard"],
  "hero.line.free": ["FREE TO PLAY • Available on Steam", "GRATIS DIMAINKAN • Tersedia di Steam", "LIBRE LARUIN • Available sa Steam", "เล่นฟรี • พร้อมให้เล่นบน Steam", "MIỄN PHÍ • Có trên Steam"],
  "hero.line.steam": ["Official Game on Steam", "Game Resmi di Steam", "Opisyal na Laro sa Steam", "เกมอย่างเป็นทางการบน Steam", "Trò chơi chính thức trên Steam"],
  "hero.stats.aria": ["Game highlights", "Sorotan permainan", "Mga tampok ng laro", "จุดเด่นของเกม", "Điểm nổi bật của trò chơi"],
  "hero.stats.classes": ["Classes", "Kelas", "Mga Klase", "อาชีพ", "Lớp nhân vật"],
  "hero.stats.dungeons": ["Dungeons", "Dungeon", "Mga Dungeon", "ดันเจี้ยน", "Hầm ngục"],
  "hero.stats.pvp": ["PvP &", "PvP &", "PvP at", "PvP และ", "PvP và"],
  "hero.stats.guild": ["Guild Wars", "Perang Guild", "Digmaan ng mga Guild", "สงครามกิลด์", "Chiến tranh bang hội"],
  "hero.stats.free": ["FREE TO PLAY", "GRATIS DIMAINKAN", "LIBRE LARUIN", "เล่นฟรี", "MIỄN PHÍ"],
  "benefits.eyebrow": ["Your adventure, your rules", "Petualanganmu, aturanmu", "Iyo ang pakikipagsapalaran, ikaw ang masusunod", "การผจญภัยของคุณ กติกาของคุณ", "Cuộc phiêu lưu của bạn, luật chơi của bạn"],
  "benefits.heading": ["A WORLD BUILT FOR", "DUNIA YANG DIRANCANG UNTUK", "MUNDONG NILIKHA PARA SA", "โลกที่สร้างขึ้นเพื่อ", "THẾ GIỚI DÀNH CHO"],
  "benefits.heading.emphasis": ["LEGENDS", "PARA LEGENDA", "MGA ALAMAT", "เหล่าตำนาน", "NHỮNG HUYỀN THOẠI"],
  "benefits.description": ["Choose your path and leave your mark across Midgard.", "Pilih jalanmu dan ukir jejakmu di seluruh Midgard.", "Piliin ang iyong landas at mag-iwan ng marka sa buong Midgard.", "เลือกเส้นทางของคุณและสร้างชื่อให้เลื่องลือทั่วมิดการ์ด", "Chọn con đường của riêng bạn và ghi dấu khắp Midgard."],
  "benefits.card1.title": ["Choose Your Path", "Pilih Jalanmu", "Piliin ang Iyong Landas", "เลือกเส้นทางของคุณ", "Chọn Con Đường Của Bạn"],
  "benefits.card1.description": ["Six classic classes with distinct roles, skills and fighting styles.", "Enam kelas klasik dengan peran, keahlian, dan gaya bertarung yang berbeda.", "Anim na klasikong klase na may kanya-kanyang papel, kasanayan, at estilo ng pakikipaglaban.", "หกอาชีพคลาสสิกที่มีบทบาท ทักษะ และรูปแบบการต่อสู้แตกต่างกัน", "Sáu lớp nhân vật cổ điển với vai trò, kỹ năng và phong cách chiến đấu riêng biệt."],
  "benefits.card2.title": ["Explore Together", "Jelajahi Bersama", "Sabay na Maglakbay", "ออกสำรวจไปด้วยกัน", "Cùng Nhau Khám Phá"],
  "benefits.card2.description": ["Journey through dungeons, uncover secrets and challenge mighty MVPs.", "Susuri dungeon, ungkap rahasia, dan tantang MVP yang perkasa.", "Tuklasin ang mga dungeon, lutasin ang mga lihim, at hamunin ang makapangyarihang mga MVP.", "ตะลุยดันเจี้ยน ไขความลับ และท้าทาย MVP ผู้ทรงพลัง", "Chinh phục hầm ngục, khám phá bí mật và thách đấu những MVP hùng mạnh."],
  "benefits.card3.title": ["Fight for Your Guild", "Berjuang untuk Guildmu", "Ipaglaban ang Iyong Guild", "ต่อสู้เพื่อกิลด์ของคุณ", "Chiến Đấu Vì Bang Hội"],
  "benefits.card3.description": ["Recruit allies, build your guild and compete for territory and glory.", "Rekrut sekutu, bangun guild, dan bersainglah demi wilayah serta kejayaan.", "Magrekrut ng mga kakampi, bumuo ng guild, at makipagtagisan para sa teritoryo at karangalan.", "รับสมัครพรรคพวก สร้างกิลด์ และแข่งขันเพื่อครอบครองดินแดนและเกียรติยศ", "Chiêu mộ đồng minh, xây dựng bang hội và tranh đoạt lãnh thổ cùng vinh quang."],
  "classes.eyebrow": ["Choose your path", "Pilih jalanmu", "Piliin ang iyong landas", "เลือกเส้นทางของคุณ", "Chọn con đường của bạn"],
  "classes.heading": ["CHOOSE YOUR", "PILIH", "PILIIN ANG IYONG", "เลือก", "CHỌN"],
  "classes.heading.emphasis": ["CLASS", "KELASMU", "KLASE", "อาชีพของคุณ", "LỚP NHÂN VẬT"],
  "classes.description": ["8 Classes — find the path that fits your legend.", "8 Kelas — temukan jalan yang sesuai dengan legendamu.", "8 Klase — hanapin ang landas na babagay sa iyong alamat.", "8 อาชีพ — ค้นหาเส้นทางที่เหมาะกับตำนานของคุณ", "8 lớp nhân vật — tìm ra con đường phù hợp với huyền thoại của bạn."],
  "image.swordsman": ["Official Swordsman class artwork", "Ilustrasi resmi kelas Pendekar Pedang", "Opisyal na likhang-sining ng klaseng Mandirigma", "ภาพอาชีพนักดาบอย่างเป็นทางการ", "Hình minh họa chính thức của lớp Kiếm sĩ"],
  "image.mage": ["Official Mage class artwork", "Ilustrasi resmi kelas Penyihir", "Opisyal na likhang-sining ng klaseng Salamangkero", "ภาพอาชีพนักเวทอย่างเป็นทางการ", "Hình minh họa chính thức của lớp Pháp sư"],
  "image.archer": ["Official Archer class artwork", "Ilustrasi resmi kelas Pemanah", "Opisyal na likhang-sining ng klaseng Mamamana", "ภาพอาชีพนักธนูอย่างเป็นทางการ", "Hình minh họa chính thức của lớp Cung thủ"],
  "image.acolyte": ["Official Acolyte class artwork", "Ilustrasi resmi kelas Acolyte", "Opisyal na likhang-sining ng klaseng Alagad", "ภาพอาชีพอโคไลต์อย่างเป็นทางการ", "Hình minh họa chính thức của lớp Tu sĩ"],
  "image.merchant": ["Official Merchant class artwork", "Ilustrasi resmi kelas Pedagang", "Opisyal na likhang-sining ng klaseng Mangangalakal", "ภาพอาชีพพ่อค้าอย่างเป็นทางการ", "Hình minh họa chính thức của lớp Thương nhân"],
  "image.thief": ["Official Thief class artwork", "Ilustrasi resmi kelas Pencuri", "Opisyal na likhang-sining ng klaseng Magnanakaw", "ภาพอาชีพโจรอย่างเป็นทางการ", "Hình minh họa chính thức của lớp Đạo tặc"],
  "image.knight": ["Swordsman artwork reused for the Knight class card", "Ilustrasi Pendekar Pedang yang digunakan kembali untuk kartu kelas Ksatria", "Muling ginamit na likhang-sining ng Mandirigma para sa kard ng klaseng Kabalyero", "ภาพนักดาบที่นำมาใช้ซ้ำในการ์ดอาชีพอัศวิน", "Hình Kiếm sĩ được dùng lại cho thẻ lớp Hiệp sĩ"],
  "image.priest": ["Acolyte artwork reused for the Priest class card", "Ilustrasi Acolyte yang digunakan kembali untuk kartu kelas Imam", "Muling ginamit na likhang-sining ng Alagad para sa kard ng klaseng Pari", "ภาพอโคไลต์ที่นำมาใช้ซ้ำในการ์ดอาชีพนักบวช", "Hình Tu sĩ được dùng lại cho thẻ lớp Linh mục"],
  "class.role.tank": ["Tank / Melee", "Tank / Jarak Dekat", "Panangga / Suntukan", "แท็งก์ / ประชิด", "Đỡ đòn / Cận chiến"],
  "class.role.magic": ["Magic DPS", "DPS Sihir", "Pinsalang Mahika", "โจมตีเวทมนตร์", "Sát thương phép"],
  "class.role.ranged": ["Ranged DPS", "DPS Jarak Jauh", "Pinsalang Pangmalayuan", "โจมตีระยะไกล", "Sát thương tầm xa"],
  "class.role.healer": ["Healer / Support", "Penyembuh / Pendukung", "Tagapagpagaling / Suporta", "ผู้รักษา / สนับสนุน", "Hồi máu / Hỗ trợ"],
  "class.role.trade": ["Craft / Trade", "Kerajinan / Perdagangan", "Paglikha / Kalakalan", "สร้างไอเทม / ค้าขาย", "Chế tạo / Giao thương"],
  "class.role.assassin": ["Assassin / Speed", "Pembunuh / Kecepatan", "Mamamaslang / Bilis", "นักลอบสังหาร / ว่องไว", "Sát thủ / Tốc độ"],
  "class.role.frontline": ["Frontline / Defense", "Garis Depan / Pertahanan", "Unang Hanay / Depensa", "แนวหน้า / ป้องกัน", "Tiền tuyến / Phòng thủ"],
  "class.role.healing": ["Healing / Support", "Penyembuhan / Pendukung", "Pagpapagaling / Suporta", "รักษา / สนับสนุน", "Hồi máu / Hỗ trợ"],
  "class.swordsman": ["Swordsman", "Pendekar Pedang", "Mandirigma", "นักดาบ", "Kiếm sĩ"],
  "class.swordsman.description": ["Stand at the front.", "Berdiri di garis depan.", "Pumuwesto sa unahan.", "ยืนหยัดอยู่แนวหน้า", "Vững vàng nơi tiền tuyến."],
  "class.mage": ["Mage", "Penyihir", "Salamangkero", "นักเวท", "Pháp sư"],
  "class.mage.description": ["Command the elements.", "Kendalikan kekuatan elemen.", "Kontrolin ang mga elemento.", "บัญชาพลังแห่งธาตุ", "Điều khiển sức mạnh nguyên tố."],
  "class.archer": ["Archer", "Pemanah", "Mamamana", "นักธนู", "Cung thủ"],
  "class.archer.description": ["Strike from afar.", "Serang dari kejauhan.", "Sumalakay mula sa malayo.", "โจมตีจากระยะไกล", "Tấn công từ xa."],
  "class.acolyte": ["Acolyte", "Acolyte", "Alagad", "อโคไลต์", "Tu sĩ"],
  "class.acolyte.description": ["Protect your allies.", "Lindungi para sekutumu.", "Protektahan ang iyong mga kakampi.", "ปกป้องพรรคพวกของคุณ", "Bảo vệ đồng đội."],
  "class.merchant": ["Merchant", "Pedagang", "Mangangalakal", "พ่อค้า", "Thương nhân"],
  "class.merchant.description": ["Master commerce.", "Kuasai dunia perdagangan.", "Maging dalubhasa sa kalakalan.", "เชี่ยวชาญด้านการค้า", "Làm chủ nghệ thuật giao thương."],
  "class.thief": ["Thief", "Pencuri", "Magnanakaw", "โจร", "Đạo tặc"],
  "class.thief.description": ["Move without warning.", "Bergerak tanpa terdeteksi.", "Kumilos nang hindi napapansin.", "เคลื่อนไหวอย่างไร้สุ้มเสียง", "Ẩn mình và hành động bất ngờ."],
  "class.knight": ["Knight", "Ksatria", "Kabalyero", "อัศวิน", "Hiệp sĩ"],
  "class.knight.description": ["Defend allies in battle.", "Lindungi sekutu dalam pertempuran.", "Ipagtanggol ang mga kakampi sa labanan.", "ปกป้องพรรคพวกในการต่อสู้", "Bảo vệ đồng đội trong trận chiến."],
  "class.priest": ["Priest", "Imam", "Pari", "นักบวช", "Linh mục"],
  "class.priest.description": ["Bring holy aid to your party.", "Berikan pertolongan suci kepada kelompokmu.", "Maghatid ng banal na tulong sa iyong pangkat.", "มอบพรศักดิ์สิทธิ์ให้สมาชิกในทีม", "Ban phước lành cho cả đội."],
  "proof.eyebrow": ["Visual proof", "Bukti visual", "Patunay sa laro", "สัมผัสภาพจริงในเกม", "Hình ảnh chân thực trong game"],
  "proof.heading": ["YOUR LEGEND,", "LEGENDAMU,", "ANG IYONG ALAMAT,", "ตำนานของคุณ", "HUYỀN THOẠI CỦA BẠN,"],
  "proof.heading.emphasis": ["WRITTEN IN GOLD", "TERUKIR DENGAN EMAS", "NAIUUKIT SA GINTO", "จารึกด้วยทองคำ", "ĐƯỢC GHI DẤU BẰNG VÀNG"],
  "image.proof.dungeons": ["Official Ragnarok: The New World dungeon gameplay", "Cuplikan permainan dungeon resmi Ragnarok: Dunia Baru", "Opisyal na gameplay ng dungeon sa Ragnarok: Bagong Mundo", "ภาพการเล่นดันเจี้ยนอย่างเป็นทางการจาก Ragnarok: โลกใหม่", "Hình ảnh gameplay hầm ngục chính thức của Ragnarok: Thế Giới Mới"],
  "image.proof.mvp": ["Official Ragnarok: The New World MVP boss gameplay", "Cuplikan pertarungan bos MVP resmi Ragnarok: Dunia Baru", "Opisyal na gameplay ng laban kontra MVP boss sa Ragnarok: Bagong Mundo", "ภาพการต่อสู้กับบอส MVP อย่างเป็นทางการจาก Ragnarok: โลกใหม่", "Hình ảnh gameplay boss MVP chính thức của Ragnarok: Thế Giới Mới"],
  "image.proof.guildwars": ["Official Ragnarok: The New World guild war gameplay", "Cuplikan perang guild resmi Ragnarok: Dunia Baru", "Opisyal na gameplay ng digmaan ng guild sa Ragnarok: Bagong Mundo", "ภาพสงครามกิลด์อย่างเป็นทางการจาก Ragnarok: โลกใหม่", "Hình ảnh gameplay chiến tranh bang hội chính thức của Ragnarok: Thế Giới Mới"],
  "proof.dungeons.label": ["EXPLORE", "JELAJAHI", "MAG-USISA", "ออกสำรวจ", "KHÁM PHÁ"],
  "proof.dungeons.title": ["Dungeons", "Dungeon", "Mga Dungeon", "ดันเจี้ยน", "Hầm Ngục"],
  "proof.dungeons.description": ["Party up for story raids and dangerous realms.", "Bentuk kelompok untuk menyerbu demi kisah dan menjelajahi alam berbahaya.", "Bumuo ng pangkat para sa mga raid na hitik sa kuwento at mapanganib na mga kaharian.", "รวมทีมบุกตะลุยเรื่องราวและดินแดนอันตราย", "Lập đội chinh phục những cuộc đột kích theo cốt truyện và vùng đất hiểm nguy."],
  "proof.mvp.label": ["CHALLENGE", "TANTANG", "HAMUNIN", "ท้าทาย", "THÁCH ĐẤU"],
  "proof.mvp.title": ["MVP Bosses", "Bos MVP", "Mga MVP Boss", "บอส MVP", "Boss MVP"],
  "proof.mvp.description": ["Challenge legendary bosses across Midgard.", "Tantang para bos legendaris di seluruh Midgard.", "Labanan ang mga maalamat na boss sa buong Midgard.", "ท้าทายบอสในตำนานทั่วมิดการ์ด", "Thách đấu những boss huyền thoại khắp Midgard."],
  "proof.guildwars.label": ["CONQUER", "TAKLUKKAN", "LUPIGIN", "พิชิต", "CHINH PHỤC"],
  "proof.guildwars.title": ["Guild Wars", "Perang Guild", "Digmaan ng mga Guild", "สงครามกิลด์", "Chiến Tranh Bang Hội"],
  "proof.guildwars.description": ["Raise your banner and fight for glory.", "Kibarkan panjimu dan berjuang demi kejayaan.", "Itaas ang iyong watawat at lumaban para sa karangalan.", "ชูธงของคุณและต่อสู้เพื่อเกียรติยศ", "Phất cao cờ hiệu và chiến đấu vì vinh quang."],
  "start.eyebrow": ["Begin your journey", "Mulai perjalananmu", "Simulan ang iyong paglalakbay", "เริ่มต้นการเดินทาง", "Bắt đầu hành trình"],
  "start.heading": ["HOW TO START IN", "CARA MEMULAI DALAM", "PAANO MAGSIMULA SA", "เริ่มต้นได้อย่างไรใน", "BẮT ĐẦU NHƯ THẾ NÀO VỚI"],
  "start.heading.emphasis": ["3 STEPS", "3 LANGKAH", "3 HAKBANG", "3 ขั้นตอน", "3 BƯỚC"],
  "start.step1.title": ["Choose Your Hero", "Pilih Jagoanmu", "Piliin ang Iyong Bayani", "เลือกฮีโร่ของคุณ", "Chọn Anh Hùng"],
  "start.step1.description": ["Select the class that matches your combat style.", "Pilih kelas yang sesuai dengan gaya bertarungmu.", "Piliin ang klaseng angkop sa estilo mo ng pakikipaglaban.", "เลือกอาชีพที่เข้ากับรูปแบบการต่อสู้ของคุณ", "Chọn lớp nhân vật phù hợp với phong cách chiến đấu của bạn."],
  "start.step2.title": ["Create Your Legend", "Ciptakan Legendamu", "Likhaing Muli ang Iyong Alamat", "สร้างตำนานของคุณ", "Tạo Dựng Huyền Thoại"],
  "start.step2.description": ["Customize your adventurer and enter Midgard.", "Sesuaikan petualangmu, lalu masuki Midgard.", "Iangkop ang iyong manlalakbay at pumasok sa Midgard.", "ปรับแต่งนักผจญภัยของคุณแล้วเข้าสู่มิดการ์ด", "Tùy chỉnh nhân vật phiêu lưu và tiến vào Midgard."],
  "start.step3.title": ["Start the Adventure", "Mulai Petualangan", "Simulan ang Pakikipagsapalaran", "เริ่มการผจญภัย", "Bắt Đầu Phiêu Lưu"],
  "start.step3.description": ["Explore, party up and conquer the New World.", "Jelajahi, bentuk kelompok, dan taklukkan Dunia Baru.", "Mag-usisa, bumuo ng pangkat, at lupigin ang Bagong Mundo.", "ออกสำรวจ รวมทีม และพิชิตโลกใหม่", "Khám phá, lập đội và chinh phục Thế Giới Mới."],
  "social.sea": ["Join players across SEA", "Bergabunglah dengan pemain di seluruh Asia Tenggara", "Makisama sa mga manlalaro sa buong Timog-Silangang Asya", "ร่วมเล่นกับผู้เล่นทั่วเอเชียตะวันออกเฉียงใต้", "Cùng người chơi khắp Đông Nam Á"],
  "social.guild": ["Play with your guild", "Bermain bersama guildmu", "Makipaglaro kasama ang iyong guild", "เล่นร่วมกับกิลด์ของคุณ", "Chơi cùng bang hội của bạn"],
  "requirements.eyebrow": ["System requirements", "Persyaratan sistem", "Mga kinakailangan ng system", "ความต้องการของระบบ", "Cấu hình hệ thống"],
  "requirements.heading": ["CAN YOUR PC RUN IT?", "APAKAH PC-MU MAMPU MENJALANKANNYA?", "KAYA BA ITO NG PC MO?", "PC ของคุณเล่นเกมนี้ได้หรือไม่?", "PC CỦA BẠN CÓ CHẠY ĐƯỢC KHÔNG?"],
  "requirements.minimum": ["MINIMUM", "MINIMUM", "MINIMUM", "ขั้นต่ำ", "TỐI THIỂU"],
  "requirements.recommended": ["RECOMMENDED", "REKOMENDASI", "INIREREKOMENDA", "แนะนำ", "ĐỀ XUẤT"],
  "requirements.minimum.os": ["Operating System: Windows 10", "Sistem Operasi: Windows 10", "Sistema ng Operasyon: Windows 10", "ระบบปฏิบัติการ: Windows 10", "Hệ điều hành: Windows 10"],
  "requirements.minimum.cpu": ["Processor: Intel i3 / Ryzen 3", "Prosesor: Intel i3 / Ryzen 3", "Processor: Intel i3 / Ryzen 3", "โปรเซสเซอร์: Intel i3 / Ryzen 3", "Bộ xử lý: Intel i3 / Ryzen 3"],
  "requirements.minimum.memory": ["Memory: 8GB RAM", "Memori: RAM 8GB", "Memory: 8GB RAM", "หน่วยความจำ: RAM 8GB", "Bộ nhớ: RAM 8GB"],
  "requirements.minimum.gpu": ["Graphics: GTX 1050", "Grafis: GTX 1050", "Graphics: GTX 1050", "การ์ดจอ: GTX 1050", "Đồ họa: GTX 1050"],
  "requirements.minimum.storage": ["Storage: 20GB", "Penyimpanan: 20GB", "Storage: 20GB", "พื้นที่จัดเก็บ: 20GB", "Lưu trữ: 20GB"],
  "requirements.recommended.os": ["Operating System: Windows 11", "Sistem Operasi: Windows 11", "Sistema ng Operasyon: Windows 11", "ระบบปฏิบัติการ: Windows 11", "Hệ điều hành: Windows 11"],
  "requirements.recommended.cpu": ["Processor: Intel i5 / Ryzen 5", "Prosesor: Intel i5 / Ryzen 5", "Processor: Intel i5 / Ryzen 5", "โปรเซสเซอร์: Intel i5 / Ryzen 5", "Bộ xử lý: Intel i5 / Ryzen 5"],
  "requirements.recommended.memory": ["Memory: 16GB RAM", "Memori: RAM 16GB", "Memory: 16GB RAM", "หน่วยความจำ: RAM 16GB", "Bộ nhớ: RAM 16GB"],
  "requirements.recommended.gpu": ["Graphics: GTX 1660", "Grafis: GTX 1660", "Graphics: GTX 1660", "การ์ดจอ: GTX 1660", "Đồ họa: GTX 1660"],
  "requirements.recommended.storage": ["Storage: 20GB SSD", "Penyimpanan: SSD 20GB", "Storage: 20GB SSD", "พื้นที่จัดเก็บ: SSD 20GB", "Lưu trữ: SSD 20GB"],
  "requirements.note": ["Runs on most PCs - No powerful PC needed", "Berjalan di sebagian besar PC - Tidak perlu PC bertenaga tinggi", "Tumatakbo sa karamihan ng PC - Hindi kailangan ng napakalakas na PC", "เล่นได้บน PC ส่วนใหญ่ ไม่จำเป็นต้องใช้เครื่องประสิทธิภาพสูง", "Chạy tốt trên hầu hết PC - Không cần máy tính cấu hình mạnh"],
  "faq.eyebrow": ["Before you begin", "Sebelum memulai", "Bago ka magsimula", "ก่อนเริ่มต้น", "Trước khi bắt đầu"],
  "faq.heading": ["FREQUENTLY", "PERTANYAAN", "MGA MADALAS", "คำถาม", "CÂU HỎI"],
  "faq.heading.emphasis": ["ASKED QUESTIONS", "YANG SERING DITANYAKAN", "ITANONG", "ที่พบบ่อย", "THƯỜNG GẶP"],
  "faq.q1": ["Is it Free to Play?", "Apakah gratis untuk dimainkan?", "Libre ba itong laruin?", "เล่นฟรีหรือไม่?", "Trò chơi có miễn phí không?"],
  "faq.a1": ["Yes, 100% free on Steam.", "Ya, gratis 100% di Steam.", "Oo, libre ito 100% sa Steam.", "ใช่ เล่นฟรี 100% บน Steam", "Có, miễn phí 100% trên Steam."],
  "faq.q2": ["Do I need a powerful PC?", "Apakah saya memerlukan PC yang bertenaga?", "Kailangan ba ng PC na malakas?", "จำเป็นต้องใช้ PC ประสิทธิภาพสูงหรือไม่?", "Tôi có cần PC cấu hình mạnh không?"],
  "faq.a2": ["No, it runs on most PCs.", "Tidak, game ini dapat berjalan di sebagian besar PC.", "Hindi, tumatakbo ito sa karamihan ng mga PC.", "ไม่จำเป็น เกมเล่นได้บน PC ส่วนใหญ่", "Không, trò chơi chạy được trên hầu hết PC."],
  "faq.q3": ["Can I play with my friends?", "Bisakah saya bermain bersama teman?", "Maaari ba akong makipaglaro sa mga kaibigan?", "เล่นกับเพื่อนได้หรือไม่?", "Tôi có thể chơi cùng bạn bè không?"],
  "faq.a3": ["Yes, with guilds, parties and PvP.", "Ya, bersama guild, kelompok, dan PvP.", "Oo, kasama ang mga guild, party, at PvP.", "ได้ เล่นกับกิลด์ ปาร์ตี้ และ PvP", "Có, bạn có thể chơi cùng bang hội, tổ đội và PvP."],
  "faq.q4": ["Is this the official Ragnarok?", "Apakah ini Ragnarok yang resmi?", "Ito ba ang opisyal na Ragnarok?", "นี่คือ Ragnarok อย่างเป็นทางการหรือไม่?", "Đây có phải là Ragnarok chính thức không?"],
  "faq.a4": ["Yes, it is official on Steam.", "Ya, ini resmi di Steam.", "Oo, opisyal ito sa Steam.", "ใช่ เป็นเกมทางการบน Steam", "Đúng, đây là trò chơi chính thức trên Steam."],
  "cta.eyebrow": ["Your next chapter", "Babak berikutnya", "Ang susunod mong kabanata", "บทต่อไปของคุณ", "Chương tiếp theo của bạn"],
  "cta.heading": ["YOUR LEGEND", "LEGENDAMU", "ANG IYONG ALAMAT", "ตำนานของคุณ", "HUYỀN THOẠI CỦA BẠN"],
  "cta.heading.emphasis": ["STARTS NOW", "DIMULAI SEKARANG", "NAGSISIMULA NGAYON", "เริ่มต้นแล้ววันนี้", "BẮT ĐẦU NGAY"],
  "footer.copyright": ["© GRAVITY Co., Ltd. & Gravity Game Vision. All rights reserved.", "© GRAVITY Co., Ltd. & Gravity Game Vision. Hak cipta dilindungi.", "© GRAVITY Co., Ltd. & Gravity Game Vision. Nakalaan ang lahat ng karapatan.", "© GRAVITY Co., Ltd. และ Gravity Game Vision สงวนลิขสิทธิ์", "© GRAVITY Co., Ltd. & Gravity Game Vision. Bảo lưu mọi quyền."],
  "footer.facebook": ["Facebook", "Facebook", "Facebook", "Facebook", "Facebook"],
  "footer.official": ["Official Site", "Situs Resmi", "Opisyal na Site", "เว็บไซต์ทางการ", "Trang Chính Thức"],
  "steam.brand": ["STEAM", "STEAM", "STEAM", "STEAM", "STEAM"],
  "steam.footer": ["Official Ragnarok: The New World on Steam", "Ragnarok: Dunia Baru resmi di Steam", "Opisyal na Ragnarok: Bagong Mundo sa Steam", "Ragnarok: โลกใหม่ อย่างเป็นทางการบน Steam", "Ragnarok: Thế Giới Mới chính thức trên Steam"]
};

const translations = Object.fromEntries(
  languageOrder.map((language, index) => [
    language,
    Object.fromEntries(
      Object.entries(translationRows).map(([key, values]) => [key, values[index]]),
    ),
  ]),
);

const languageButtons = document.querySelectorAll("[data-language]");
const savedLanguage = localStorage.getItem("rag_lang");
const initialLanguage = languageOrder.includes(savedLanguage)
  ? savedLanguage
  : "en";

function setLanguage(language) {
  if (!languageOrder.includes(language)) return;

  const dictionary = translations[language];
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = dictionary[key];
    if (translatedText === undefined) {
      console.error(`Missing "${key}" translation for "${language}".`);
      return;
    }

    const attribute = element.dataset.i18nAttr;
    if (attribute) {
      element.setAttribute(attribute, translatedText);
    } else {
      element.textContent = translatedText;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translatedText = dictionary[key];
    if (translatedText === undefined) {
      console.error(`Missing "${key}" translation for "${language}".`);
      return;
    }
    element.setAttribute("placeholder", translatedText);
  });

  localStorage.setItem("rag_lang", language);
  languageButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.language === language),
    );
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

setLanguage(initialLanguage);
