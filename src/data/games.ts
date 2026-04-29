export interface GamePackage {
  id: string;
  name: string;
  price: string;
  bonus?: string;
  discount?: string;
  group?: string;
}

export interface PaymentGroup {
  id: string;
  title: string;
  methods: PaymentMethod[];
}

export interface PaymentMethod {
  id: string;
  brand: string;
  label: string;
  fee: number;
}

export interface GameDetail {
  slug: string;
  id: number;
  title: string;
  category: string;
  accent: string;
  heroLabel: string;
  description: string;
  benefits: string[];
  packages: GamePackage[];
}

export const games: GameDetail[] = [
  {
    id: 1,
    slug: 'mobile-legends',
    title: 'Mobile Legends',
    category: 'MOBA',
    accent: 'accent-cyan',
    heroLabel: 'Weekly Diamond Pass',
    description:
      'Top up Mobile Legends cepat, aman, dan langsung masuk. Cocok untuk weekly pass, diamond rutin, dan push rank tanpa ribet.',
    benefits: ['Proses instan', 'Pembayaran aman', 'Layanan pelanggan aktif', 'WDP harian maksimal total 70 hari'],
    packages: [
      { id: 'ml-1', name: '1 Weekly Diamond Pass', price: 'Rp27.777', group: 'weekly-pass' },
      { id: 'ml-2', name: '2 Weekly Diamond Pass', price: 'Rp55.500', group: 'weekly-pass' },
      { id: 'ml-3', name: '3 Weekly Diamond Pass', price: 'Rp83.160', group: 'weekly-pass' },
      { id: 'ml-4', name: '3 Diamonds', price: 'Rp1.100', bonus: '3 + 0 Bonus', group: 'diamonds' },
      { id: 'ml-5', name: '5 Diamonds', price: 'Rp1.500', bonus: '5 + 0 Bonus', group: 'diamonds' },
      { id: 'ml-6', name: '10 Diamonds', price: 'Rp2.923', bonus: '10 + 0 Bonus', group: 'diamonds' },
      { id: 'ml-7', name: '12 Diamonds', price: 'Rp3.414', bonus: '11 + 1 Bonus', group: 'diamonds' },
      { id: 'ml-8', name: '17 Diamonds', price: 'Rp4.704', bonus: '16 + 1 Bonus', group: 'diamonds' },
      { id: 'ml-9', name: '19 Diamonds', price: 'Rp5.358', bonus: '17 + 2 Bonus', group: 'diamonds' },
      { id: 'ml-10', name: '22 Diamonds', price: 'Rp6.352', bonus: '20 + 2 Bonus', group: 'diamonds' },
      { id: 'ml-11', name: '28 Diamonds', price: 'Rp7.765', bonus: '25 + 3 Bonus', group: 'diamonds' },
      { id: 'ml-12', name: '36 Diamonds', price: 'Rp9.752', bonus: '33 + 3 Bonus', group: 'diamonds' },
      { id: 'ml-13', name: '44 Diamonds', price: 'Rp11.650', bonus: '40 + 4 Bonus', group: 'diamonds' },
      { id: 'ml-14', name: '59 Diamonds', price: 'Rp15.531', bonus: '53 + 6 Bonus', group: 'diamonds' },
      { id: 'ml-15', name: '64 Diamonds', price: 'Rp17.013', bonus: '58 + 6 Bonus', group: 'diamonds' },
      { id: 'ml-16', name: '71 Diamonds', price: 'Rp19.108', bonus: '64 + 7 Bonus', group: 'diamonds' },
      { id: 'ml-17', name: '85 Diamonds', price: 'Rp22.305', bonus: '77 + 8 Bonus', group: 'diamonds' },
      { id: 'ml-18', name: '113 Diamonds', price: 'Rp30.073', bonus: '102 + 11 Bonus', group: 'diamonds' },
      { id: 'ml-19', name: '128 Diamonds', price: 'Rp33.952', bonus: '117 + 12 Bonus', group: 'diamonds' },
      { id: 'ml-20', name: '148 Diamonds', price: 'Rp39.208', bonus: '134 + 14 Bonus', group: 'diamonds' },
      { id: 'ml-21', name: '170 Diamonds', price: 'Rp44.632', bonus: '154 + 16 Bonus', group: 'diamonds' },
    ],
  },
  {
    id: 2,
    slug: 'free-fire',
    title: 'Free Fire',
    category: 'Battle Royale',
    accent: 'accent-orange',
    heroLabel: 'Diamond Instan',
    description:
      'Beli diamond Free Fire untuk bundle, elite pass, dan event spesial dengan checkout yang simpel dan cepat.',
    benefits: ['Diamond masuk cepat', 'Pilihan nominal lengkap', 'Checkout singkat', 'Support metode bayar populer'],
    packages: [
      { id: 'ff-1', name: '70 Diamonds', price: 'Rp10.000', discount: '8% OFF' },
      { id: 'ff-2', name: '140 Diamonds', price: 'Rp19.500', discount: '10% OFF' },
      { id: 'ff-3', name: '355 Diamonds', price: 'Rp48.000', discount: '12% OFF' },
      { id: 'ff-4', name: '720 Diamonds', price: 'Rp95.000', discount: '15% OFF' },
    ],
  },
  {
    id: 3,
    slug: 'valorant',
    title: 'Valorant',
    category: 'Tactical Shooter',
    accent: 'accent-red',
    heroLabel: 'Valorant Points',
    description:
      'Isi ulang Valorant Points buat skin, battlepass, dan bundle favorit dengan tampilan checkout yang rapi dan terpercaya.',
    benefits: ['Nominal VP populer', 'Harga kompetitif', 'Desain checkout jelas', 'Cocok untuk promo event'],
    packages: [
      { id: 'vl-1', name: '420 VP', price: 'Rp52.000', discount: '5% OFF' },
      { id: 'vl-2', name: '700 VP', price: 'Rp81.000', discount: '7% OFF' },
      { id: 'vl-3', name: '1375 VP', price: 'Rp151.000', discount: '9% OFF' },
      { id: 'vl-4', name: '2400 VP', price: 'Rp255.000', discount: '12% OFF' },
    ],
  },
  {
    id: 4,
    slug: 'genshin-impact',
    title: 'Genshin Impact',
    category: 'Open World',
    accent: 'accent-violet',
    heroLabel: 'Genesis Crystal',
    description:
      'Top up Genesis Crystal dan Welkin Moon untuk kebutuhan primogem harian dengan halaman detail yang siap dipakai.',
    benefits: ['Welkin tersedia', 'Nominal crystal lengkap', 'Nuansa premium', 'Aman untuk promosi produk'],
    packages: [
      { id: 'gi-1', name: 'Blessing of Welkin Moon', price: 'Rp68.000' },
      { id: 'gi-2', name: '300 + 30 Genesis Crystal', price: 'Rp72.000', discount: '6% OFF' },
      { id: 'gi-3', name: '980 + 110 Genesis Crystal', price: 'Rp219.000', discount: '10% OFF' },
      { id: 'gi-4', name: '1980 + 260 Genesis Crystal', price: 'Rp429.000', discount: '12% OFF' },
    ],
  },
  {
    id: 5,
    slug: 'pubg-mobile',
    title: 'PUBG Mobile',
    category: 'Survival',
    accent: 'accent-green',
    heroLabel: 'Unknown Cash',
    description:
      'Halaman lanjutan PUBG Mobile siap untuk UC, Royale Pass, dan paket promo mingguan dengan struktur yang mudah dikembangkan.',
    benefits: ['Siap tambah backend nanti', 'Form user sederhana', 'Card nominal fleksibel', 'Visual selaras homepage'],
    packages: [
      { id: 'pg-1', name: '60 UC', price: 'Rp14.000' },
      { id: 'pg-2', name: '325 UC', price: 'Rp70.000', discount: '8% OFF' },
      { id: 'pg-3', name: '660 UC', price: 'Rp139.000', discount: '10% OFF' },
      { id: 'pg-4', name: '1800 UC', price: 'Rp365.000', discount: '14% OFF' },
    ],
  },
  {
    id: 6,
    slug: 'honor-of-kings',
    title: 'Honor of Kings',
    category: '5v5 Arena',
    accent: 'accent-gold',
    heroLabel: 'Tokens',
    description:
      'Top up Honor of Kings dengan halaman detail modern yang siap dipakai untuk kebutuhan token dan event terbatas.',
    benefits: ['Tampilan premium', 'Responsive mobile', 'Bisa ditambah payment step', 'Komponen reusable'],
    packages: [
      { id: 'hk-1', name: '80 Tokens', price: 'Rp16.000' },
      { id: 'hk-2', name: '240 Tokens', price: 'Rp45.000', discount: '7% OFF' },
      { id: 'hk-3', name: '400 Tokens', price: 'Rp74.000', discount: '11% OFF' },
      { id: 'hk-4', name: '800 Tokens', price: 'Rp145.000', discount: '13% OFF' },
    ],
  },
  {
    id: 7,
    slug: 'fc-mobile',
    title: 'FC Mobile',
    category: 'Sports',
    accent: 'accent-blue',
    heroLabel: 'FC Points',
    description:
      'Halaman checkout FC Mobile buat points dan event pack dengan gaya visual yang tetap konsisten.',
    benefits: ['Cocok untuk store game bola', 'Card nominal bersih', 'URL per game terpisah', 'Mudah scale up'],
    packages: [
      { id: 'fc-1', name: '40 FC Points', price: 'Rp6.500' },
      { id: 'fc-2', name: '100 FC Points', price: 'Rp15.000', discount: '6% OFF' },
      { id: 'fc-3', name: '520 FC Points', price: 'Rp74.000', discount: '9% OFF' },
      { id: 'fc-4', name: '1070 FC Points', price: 'Rp149.000', discount: '12% OFF' },
    ],
  },
  {
    id: 8,
    slug: 'league-of-legends',
    title: 'League of Legends',
    category: 'PC MOBA',
    accent: 'accent-pink',
    heroLabel: 'Riot Points',
    description:
      'Top up RP untuk skin dan pass dengan halaman lanjutan yang enak dibaca dan tinggal dikoneksikan ke data asli.',
    benefits: ['Form siap pakai', 'Layout desktop-mobile', 'Satu template untuk banyak game', 'Visual kuat'],
    packages: [
      { id: 'lol-1', name: '575 RP', price: 'Rp50.000' },
      { id: 'lol-2', name: '1380 RP', price: 'Rp109.000', discount: '5% OFF' },
      { id: 'lol-3', name: '2800 RP', price: 'Rp209.000', discount: '9% OFF' },
      { id: 'lol-4', name: '4500 RP', price: 'Rp319.000', discount: '12% OFF' },
    ],
  },
  {
    id: 9,
    slug: 'magic-chess',
    title: 'Magic Chess',
    category: 'Auto Battler',
    accent: 'accent-teal',
    heroLabel: 'Pass & Bundle',
    description:
      'Buat produk Magic Chess dengan section informasi pelanggan, pilihan nominal, dan ringkasan order yang rapi.',
    benefits: ['Komponen reusable', 'Tinggal isi data', 'Cocok untuk turunan MLBB', 'Tampilan dark modern'],
    packages: [
      { id: 'mc-1', name: 'Pass Mingguan', price: 'Rp21.000' },
      { id: 'mc-2', name: 'Pass + 100 Candy', price: 'Rp39.000', discount: '8% OFF' },
      { id: 'mc-3', name: 'Event Bundle', price: 'Rp59.000', discount: '10% OFF' },
      { id: 'mc-4', name: 'Premium Bundle', price: 'Rp89.000', discount: '13% OFF' },
    ],
  },
  {
    id: 10,
    slug: 'roblox',
    title: 'Roblox',
    category: 'Adventure',
    accent: 'accent-slate',
    heroLabel: 'RBX Voucher',
    description:
      'Struktur halaman detail Roblox sudah disiapkan buat voucher, paket RBX, dan promo spesial lainnya.',
    benefits: ['Bisa dipakai multi produk', 'Section tertata', 'CTA jelas', 'Ready untuk validasi form'],
    packages: [
      { id: 'rbx-1', name: '80 RBX', price: 'Rp15.000' },
      { id: 'rbx-2', name: '250 RBX', price: 'Rp43.000', discount: '7% OFF' },
      { id: 'rbx-3', name: '500 RBX', price: 'Rp79.000', discount: '10% OFF' },
      { id: 'rbx-4', name: '1000 RBX', price: 'Rp149.000', discount: '14% OFF' },
    ],
  },
  {
    id: 11,
    slug: 'zepeto',
    title: 'Zepeto',
    category: 'Social',
    accent: 'accent-rose',
    heroLabel: 'ZEMS',
    description:
      'Halaman lanjutan Zepeto cocok untuk item sosial, mata uang premium, dan campaign visual yang lebih playful.',
    benefits: ['Template fleksibel', 'Mudah ganti copywriting', 'Bisa dipakai banyak brand', 'Ringan dan cepat'],
    packages: [
      { id: 'zp-1', name: '50 ZEMS', price: 'Rp9.000' },
      { id: 'zp-2', name: '120 ZEMS', price: 'Rp19.000', discount: '6% OFF' },
      { id: 'zp-3', name: '260 ZEMS', price: 'Rp39.000', discount: '10% OFF' },
      { id: 'zp-4', name: '650 ZEMS', price: 'Rp89.000', discount: '15% OFF' },
    ],
  },
  {
    id: 12,
    slug: 'call-of-duty-mobile',
    title: 'Call of Duty Mobile',
    category: 'FPS',
    accent: 'accent-indigo',
    heroLabel: 'CP Store',
    description:
      'Halaman top up CODM untuk CP dan battle pass dengan struktur siap lanjut ke payment method atau checkout final.',
    benefits: ['Nominal gampang diatur', 'Sudah ada halaman per game', 'Tampilan solid', 'Mudah sambung backend'],
    packages: [
      { id: 'cd-1', name: '64 CP', price: 'Rp10.000' },
      { id: 'cd-2', name: '321 CP', price: 'Rp47.000', discount: '8% OFF' },
      { id: 'cd-3', name: '645 CP', price: 'Rp92.000', discount: '11% OFF' },
      { id: 'cd-4', name: '1280 CP', price: 'Rp179.000', discount: '14% OFF' },
    ],
  },
];

export const getGameBySlug = (slug: string) =>
  games.find((game) => game.slug === slug);

export const paymentGroups: PaymentGroup[] = [
  {
    id: 'qris',
    title: 'QRIS',
    methods: [
      { id: 'qris-main', brand: 'QRIS', label: 'QRIS All Payment', fee: 0 },
    ],
  },
  {
    id: 'ewallet',
    title: 'E-Wallet',
    methods: [
      { id: 'gopay-qr', brand: 'GoPay', label: 'GoPay QR', fee: 135 },
      { id: 'dana', brand: 'DANA', label: 'Dana', fee: 762 },
      { id: 'dana-qr', brand: 'DANA', label: 'Dana QR', fee: 135 },
      { id: 'shopeepay', brand: 'ShopeePay', label: 'ShopeePay', fee: 762 },
      { id: 'shopeepay-qr', brand: 'ShopeePay', label: 'ShopeePay QR', fee: 135 },
      { id: 'linkaja-qr', brand: 'LinkAja', label: 'LinkAja QR', fee: 135 },
      { id: 'ovo', brand: 'OVO', label: 'Ovo', fee: 762 },
    ],
  },
  {
    id: 'cstore',
    title: 'Convenience Store',
    methods: [
      { id: 'alfamart', brand: 'Alfamart', label: 'Bayar via Alfamart', fee: 2500 },
      { id: 'alfamidi', brand: 'Alfamidi', label: 'Bayar via Alfamidi', fee: 2500 },
      { id: 'lawson', brand: 'Lawson', label: 'Bayar via Lawson', fee: 3000 },
    ],
  },
  {
    id: 'va',
    title: 'Virtual Account',
    methods: [
      { id: 'bni-va', brand: 'BNI', label: 'BNI Virtual Account', fee: 4000 },
      { id: 'bri-va', brand: 'BRI', label: 'BRI Virtual Account', fee: 4000 },
      { id: 'mandiri-va', brand: 'Mandiri', label: 'Mandiri Virtual Account', fee: 4000 },
      { id: 'bsi-va', brand: 'BSI', label: 'BSI Virtual Account', fee: 4000 },
      { id: 'permata-va', brand: 'PermataBank', label: 'Permata Virtual Account', fee: 4000 },
    ],
  },
];
