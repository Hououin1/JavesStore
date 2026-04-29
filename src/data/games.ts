import mobileLegendsBanner from '../assets/mobile-legends-banner.jpeg';
import freeFireBanner from '../assets/free-fire-banner.jpeg';
import valorantBanner from '../assets/valorant-banner.jpeg';
import genshinImpactBanner from '../assets/genshin-impact-banner.jpeg';
import pubgMobileBanner from '../assets/pubg-mobile-banner.jpeg';
import honorOfKingsBanner from '../assets/honor-of-kings-banner.jpeg';
import fcMobileBanner from '../assets/fc-mobile-banner.jpeg';
import leagueOfLegendsBanner from '../assets/league-of-legends-banner.jpeg';
import robloxBanner from '../assets/roblox-banner.jpeg';
import callOfDutyMobileBanner from '../assets/call-of-duty-mobile-banner.jpeg';

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
  image?: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  imageScale?: string;
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
    image: mobileLegendsBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '118%',
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
      { id: 'ml-22', name: '176 Diamonds', price: 'Rp46.696', bonus: '160 + 17 Bonus', group: 'diamonds' },
      { id: 'ml-23', name: '184 Diamonds', price: 'Rp49.030', bonus: '166 + 18 Bonus', group: 'diamonds' },
      { id: 'ml-24', name: '210 Diamonds', price: 'Rp55.432', bonus: '190 + 20 Bonus', group: 'diamonds' },
      { id: 'ml-25', name: '222 Diamonds', price: 'Rp58.775', bonus: '201 + 21 Bonus', group: 'diamonds' },
      { id: 'ml-26', name: '240 Diamonds', price: 'Rp62.630', bonus: '217 + 23 Bonus', group: 'diamonds' },
      { id: 'ml-27', name: '277 Diamonds', price: 'Rp72.840', bonus: '251 + 26 Bonus', group: 'diamonds' },
      { id: 'ml-28', name: '284 Diamonds', price: 'Rp74.284', bonus: '261 + 40 Bonus', group: 'diamonds' },
      { id: 'ml-29', name: '296 Diamonds', price: 'Rp77.123', bonus: '246 + 40 Bonus', group: 'diamonds' },
      { id: 'ml-30', name: '300 Diamonds', price: 'Rp78.300', bonus: '261 + 40 Bonus', group: 'diamonds' },
      { id: 'ml-31', name: '332 Diamonds', price: 'Rp87.421', bonus: '289 + 43 Bonus', group: 'diamonds' },
      { id: 'ml-32', name: '340 Diamonds', price: 'Rp88.921', bonus: '296 + 44 Bonus', group: 'diamonds' },
      { id: 'ml-33', name: '355 Diamonds', price: 'Rp93.532', bonus: '309 + 46 Bonus', group: 'diamonds' },
      { id: 'ml-34', name: '370 Diamonds', price: 'Rp96.333', bonus: '324 + 46 Bonus', group: 'diamonds' },
      { id: 'ml-35', name: '453 Diamonds', price: 'Rp118.772', bonus: '408 + 45 Bonus', group: 'diamonds' },
      { id: 'ml-36', name: '568 Diamonds', price: 'Rp145.656', bonus: '503 + 65 Bonus', group: 'diamonds' },
      { id: 'ml-37', name: '642 Diamonds', price: 'Rp164.631', bonus: '571 + 71 Bonus', group: 'diamonds' },
      { id: 'ml-38', name: '761 Diamonds', price: 'Rp183.923', bonus: '637 + 79 Bonus', group: 'diamonds' },
      { id: 'ml-39', name: '792 Diamonds', price: 'Rp204.333', bonus: '707 + 85 Bonus', group: 'diamonds' },
      { id: 'ml-40', name: '875 Diamonds', price: 'Rp223.021', bonus: '774 + 101 Bonus', group: 'diamonds' },
      { id: 'ml-41', name: '963 Diamonds', price: 'Rp240.521', bonus: '851 + 109 Bonus', group: 'diamonds' },
      { id: 'ml-42', name: '1000 Diamonds', price: 'Rp252.000', bonus: '887 + 113 Bonus', group: 'diamonds' },
      { id: 'ml-43', name: '1136 Diamonds', price: 'Rp290.500', bonus: '990 + 146 Bonus', group: 'diamonds' },
      { id: 'ml-44', name: '1159 Diamonds', price: 'Rp297.235', bonus: '1031 + 128 Bonus', group: 'diamonds' },
      { id: 'ml-45', name: '1220 Diamonds', price: 'Rp302.625', bonus: '1083 + 138 Bonus', group: 'diamonds' },
      { id: 'ml-46', name: '1506 Diamonds', price: 'Rp385.425', bonus: '1335 + 172 Bonus', group: 'diamonds' },
      { id: 'ml-47', name: '1704 Diamonds', price: 'Rp436.327', bonus: '1509 + 195 Bonus', group: 'diamonds' },
    ],
  },
  {
    id: 2,
    slug: 'free-fire',
    title: 'Free Fire',
    category: 'Battle Royale',
    accent: 'accent-orange',
    image: freeFireBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '114%',
    heroLabel: 'Diamond Instan',
    description:
      'Beli diamond dan membership Free Fire untuk bundle, booyah pass, dan event spesial dengan checkout yang simpel dan cepat.',
    benefits: ['Diamond masuk cepat', 'Membership tersedia', 'Pilihan nominal lengkap', 'Support metode bayar populer'],
    packages: [
      { id: 'ff-1', name: 'Membership Minggu', price: 'Rp29.030', group: 'membership' },
      { id: 'ff-2', name: 'Membership Bulanan', price: 'Rp85.000', group: 'membership' },
      { id: 'ff-3', name: '5 Diamonds', price: 'Rp860', group: 'diamonds' },
      { id: 'ff-4', name: '10 Diamonds', price: 'Rp1.715', group: 'diamonds' },
      { id: 'ff-5', name: '12 Diamonds', price: 'Rp1.895', group: 'diamonds' },
      { id: 'ff-6', name: '15 Diamonds', price: 'Rp2.586', group: 'diamonds' },
      { id: 'ff-7', name: '20 Diamonds', price: 'Rp3.405', group: 'diamonds' },
      { id: 'ff-8', name: '25 Diamonds', price: 'Rp4.254', group: 'diamonds' },
      { id: 'ff-9', name: '30 Diamonds', price: 'Rp5.105', group: 'diamonds' },
      { id: 'ff-10', name: '40 Diamonds', price: 'Rp6.526', group: 'diamonds' },
      { id: 'ff-11', name: '50 Diamonds', price: 'Rp6.704', group: 'diamonds' },
      { id: 'ff-12', name: '55 Diamonds', price: 'Rp7.760', group: 'diamonds' },
      { id: 'ff-13', name: '60 Diamonds', price: 'Rp8.710', group: 'diamonds' },
      { id: 'ff-14', name: '70 Diamonds', price: 'Rp9.270', group: 'diamonds' },
      { id: 'ff-15', name: '75 Diamonds', price: 'Rp10.293', group: 'diamonds' },
      { id: 'ff-16', name: '80 Diamonds', price: 'Rp11.239', group: 'diamonds' },
      { id: 'ff-17', name: '90 Diamonds', price: 'Rp12.721', group: 'diamonds' },
      { id: 'ff-18', name: '100 Diamonds', price: 'Rp13.772', group: 'diamonds' },
      { id: 'ff-19', name: '120 Diamonds', price: 'Rp16.813', group: 'diamonds' },
      { id: 'ff-20', name: '130 Diamonds', price: 'Rp17.821', group: 'diamonds' },
      { id: 'ff-21', name: '140 Diamonds', price: 'Rp18.538', group: 'diamonds' },
      { id: 'ff-22', name: '145 Diamonds', price: 'Rp19.389', group: 'diamonds' },
      { id: 'ff-23', name: '150 Diamonds', price: 'Rp20.240', group: 'diamonds' },
      { id: 'ff-24', name: '160 Diamonds', price: 'Rp21.941', group: 'diamonds' },
      { id: 'ff-25', name: '170 Diamonds', price: 'Rp23.643', group: 'diamonds' },
      { id: 'ff-26', name: '180 Diamonds', price: 'Rp24.825', group: 'diamonds' },
      { id: 'ff-27', name: '190 Diamonds', price: 'Rp25.242', group: 'diamonds' },
      { id: 'ff-28', name: '200 Diamonds', price: 'Rp27.753', group: 'diamonds' },
      { id: 'ff-29', name: '210 Diamonds', price: 'Rp28.000', group: 'diamonds' },
      { id: 'ff-30', name: '250 Diamonds', price: 'Rp34.245', group: 'diamonds' },
      { id: 'ff-31', name: '260 Diamonds', price: 'Rp35.235', group: 'diamonds' },
      { id: 'ff-32', name: '280 Diamonds', price: 'Rp37.638', group: 'diamonds' },
      { id: 'ff-33', name: '300 Diamonds', price: 'Rp42.782', group: 'diamonds' },
      { id: 'ff-34', name: '355 Diamonds', price: 'Rp45.372', group: 'diamonds' },
      { id: 'ff-35', name: '360 Diamonds', price: 'Rp47.223', group: 'diamonds' },
      { id: 'ff-36', name: '375 Diamonds', price: 'Rp49.872', group: 'diamonds' },
      { id: 'ff-37', name: '425 Diamonds', price: 'Rp56.736', group: 'diamonds' },
      { id: 'ff-38', name: '475 Diamonds', price: 'Rp64.038', group: 'diamonds' },
      { id: 'ff-39', name: '500 Diamonds', price: 'Rp68.103', group: 'diamonds' },
      { id: 'ff-40', name: '545 Diamonds', price: 'Rp74.013', group: 'diamonds' },
      { id: 'ff-41', name: '600 Diamonds', price: 'Rp79.552', group: 'diamonds' },
      { id: 'ff-42', name: '645 Diamonds', price: 'Rp87.114', group: 'diamonds' },
      { id: 'ff-43', name: '720 Diamonds', price: 'Rp94.284', group: 'diamonds' },
      { id: 'ff-44', name: '770 Diamonds', price: 'Rp102.382', group: 'diamonds' },
      { id: 'ff-45', name: '800 Diamonds', price: 'Rp105.628', group: 'diamonds' },
      { id: 'ff-46', name: '860 Diamonds', price: 'Rp113.142', group: 'diamonds' },
      { id: 'ff-47', name: '930 Diamonds', price: 'Rp122.382', group: 'diamonds' },
      { id: 'ff-48', name: '1000 Diamonds', price: 'Rp133.137', group: 'diamonds' },
      { id: 'ff-49', name: '1080 Diamonds', price: 'Rp142.615', group: 'diamonds' },
      { id: 'ff-50', name: '1215 Diamonds', price: 'Rp158.138', group: 'diamonds' },
      { id: 'ff-51', name: '1300 Diamonds', price: 'Rp170.527', group: 'diamonds' },
      { id: 'ff-52', name: '1450 Diamonds', price: 'Rp187.375', group: 'diamonds' },
      { id: 'ff-53', name: '1510 Diamonds', price: 'Rp196.138', group: 'diamonds' },
      { id: 'ff-54', name: '1580 Diamonds', price: 'Rp205.638', group: 'diamonds' },
      { id: 'ff-55', name: '1800 Diamonds', price: 'Rp235.582', group: 'diamonds' },
      { id: 'ff-56', name: '1875 Diamonds', price: 'Rp245.827', group: 'diamonds' },
      { id: 'ff-57', name: '1975 Diamonds', price: 'Rp257.416', group: 'diamonds' },
      { id: 'ff-58', name: '2000 Diamonds', price: 'Rp262.132', group: 'diamonds' },
      { id: 'ff-59', name: '2100 Diamonds', price: 'Rp270.726', group: 'diamonds' },
      { id: 'ff-60', name: '2140 Diamonds', price: 'Rp276.425', group: 'diamonds' },
      { id: 'ff-61', name: '2190 Diamonds', price: 'Rp283.523', group: 'diamonds' },
      { id: 'ff-62', name: '2225 Diamonds', price: 'Rp288.139', group: 'diamonds' },
      { id: 'ff-63', name: '2280 Diamonds', price: 'Rp293.624', group: 'diamonds' },
      { id: 'ff-64', name: '2355 Diamonds', price: 'Rp305.782', group: 'diamonds' },
      { id: 'ff-65', name: '2400 Diamonds', price: 'Rp311.291', group: 'diamonds' },
      { id: 'ff-66', name: '2575 Diamonds', price: 'Rp335.391', group: 'diamonds' },
      { id: 'ff-67', name: '2750 Diamonds', price: 'Rp358.517', group: 'diamonds' },
      { id: 'ff-68', name: '3000 Diamonds', price: 'Rp389.138', group: 'diamonds' },
      { id: 'ff-69', name: '3310 Diamonds', price: 'Rp430.096', group: 'diamonds' },
      { id: 'ff-70', name: '3640 Diamonds', price: 'Rp468.725', group: 'diamonds' },
      { id: 'ff-71', name: '3800 Diamonds', price: 'Rp497.172', group: 'diamonds' },
      { id: 'ff-72', name: '4050 Diamonds', price: 'Rp521.010', group: 'diamonds' },
      { id: 'ff-73', name: '4340 Diamonds', price: 'Rp556.582', group: 'diamonds' },
      { id: 'ff-74', name: '4450 Diamonds', price: 'Rp573.528', group: 'diamonds' },
      { id: 'ff-75', name: '4720 Diamonds', price: 'Rp606.426', group: 'diamonds' },
      { id: 'ff-76', name: '4800 Diamonds', price: 'Rp616.523', group: 'diamonds' },
      { id: 'ff-77', name: '5500 Diamonds', price: 'Rp711.302', group: 'diamonds' },
      { id: 'ff-78', name: '6000 Diamonds', price: 'Rp775.829', group: 'diamonds' },
    ],
  },
  {
    id: 3,
    slug: 'valorant',
    title: 'Valorant',
    category: 'Tactical Shooter',
    accent: 'accent-red',
    image: valorantBanner,
    imageFit: 'cover',
    imagePosition: 'center',
    imageScale: '100%',
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
    image: genshinImpactBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '114%',
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
    image: pubgMobileBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '114%',
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
    image: honorOfKingsBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '114%',
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
    image: fcMobileBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '114%',
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
    image: leagueOfLegendsBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '114%',
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
    image: robloxBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '114%',
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
    image: callOfDutyMobileBanner,
    imageFit: 'cover',
    imagePosition: 'center top',
    imageScale: '114%',
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
