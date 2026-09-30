import {
  WebsiteType,
  DesignStyleId,
  ColorPalette,
} from '../types/brief';

import styleMinimalImg from '../assets/images/style_minimal_luxury_1790648625302.jpg';
import styleCorporateImg from '../assets/images/style_corporate_tech_1790648649645.jpg';
import styleEcommerceImg from '../assets/images/style_ecommerce_store_1790648662442.jpg';
import styleHospitalityImg from '../assets/images/style_hospitality_travel_1790648676759.jpg';

export interface WebsiteTypeOption {
  id: WebsiteType;
  titleLo: string;
  titleEn: string;
  descLo: string;
  descEn: string;
  iconName: string;
  recommendedPages: string[];
  recommendedFeatures: string[];
}

export const WEBSITE_TYPES: WebsiteTypeOption[] = [
  {
    id: 'corporate',
    titleLo: 'ເວັບໄຊບໍລິສັດ & ອົງກອນ (Corporate & Business)',
    titleEn: 'Corporate & Business Portal',
    descLo: 'ສ້າງຄວາມໜ້າເຊື່ອຖື, ແນະນຳບໍລິການ, ໂຄງຮ່າງອົງກອນ, ຜົນງານ ແລະ ຕິດຕໍ່ສອບຖາມ',
    descEn: 'Build enterprise trust, showcase professional services, leadership, and lead capture.',
    iconName: 'Building2',
    recommendedPages: ['Home', 'About Us', 'Services', 'Projects / Portfolio', 'Team', 'News & Insights', 'Contact Us'],
    recommendedFeatures: ['multilingual', 'contact_inquiry_line', 'seo_optimization', 'analytics_setup'],
  },
  {
    id: 'ecommerce',
    titleLo: 'ເວັບໄຊຂາຍສິນຄ້າອອນລາຍ (E-Commerce Store)',
    titleEn: 'Online E-Commerce Store',
    descLo: 'ລະບົບລາຍການສິນຄ້າ, ກະຕ່າຊື້ເຄື່ອງ, ຊຳລະເງິນ BCEL One / ບັດເຄຣດິດ ແລະ ຈັດການສາງ',
    descEn: 'Catalog, shopping cart, instant QR payments (BCEL One/Cards), shipping, and order management.',
    iconName: 'ShoppingBag',
    recommendedPages: ['Home', 'Shop / Catalog', 'Product Detail', 'Shopping Cart', 'Checkout', 'Customer Account', 'Order Tracking', 'Contact Us'],
    recommendedFeatures: ['cart_checkout', 'bcel_one_qr', 'inventory_cms', 'coupon_discounts', 'multilingual'],
  },
  {
    id: 'hospitality',
    titleLo: 'ໂຮງແຮມ, ຣີສອດ & ທ່ອງທ່ຽວ (Hospitality & Resort)',
    titleEn: 'Hotel, Resort & Hospitality',
    descLo: 'ໂຊຫ້ອງພັກ, ບັນຍາກາດ, ລະບົບກວດສອບວັນຫວ່າງ, ຈອງຫ້ອງອອນລາຍ ແລະ ແຜນທີ່',
    descEn: 'Showcase rooms, amenities, photo gallery, check-in calendar, and direct booking engine.',
    iconName: 'Hotel',
    recommendedPages: ['Home', 'Rooms & Suites', 'Amenities & Dining', 'Photo Gallery', 'Direct Booking', 'Location & Attractions', 'Contact Us'],
    recommendedFeatures: ['booking_calendar', 'multilingual', 'bcel_one_qr', 'whatsapp_chat', 'google_map_embed'],
  },
  {
    id: 'restaurant',
    titleLo: 'ຮ້ານອາຫານ & ຄາເຟ່ (Restaurant & Cafe)',
    titleEn: 'Restaurant & Dining Lounge',
    descLo: 'ເມນູອາຫານ, ຮູບພາບຈານເດັ່ນ, ຈອງໂຕະ, ສັ່ງກັບບ້ານ ແລະ ແຜນທີ່ຕັ້ງຮ້ານ',
    descEn: 'Interactive digital menu, table reservation, location map, and direct inquiry integration.',
    iconName: 'Utensils',
    recommendedPages: ['Home', 'Food & Drink Menu', 'Chef Specialties', 'Table Reservation', 'Story / About', 'Location & Hours'],
    recommendedFeatures: ['digital_menu_pdf', 'booking_calendar', 'whatsapp_chat', 'google_map_embed'],
  },
  {
    id: 'portfolio',
    titleLo: 'ພອດໂຟລິໂອ & ເອເຈນຊີ (Portfolio & Creative Agency)',
    titleEn: 'Portfolio & Creative Studio',
    descLo: 'ສະແດງຜົນງານດີໄຊນ໌, ໂຄງການຕົວຢ່າງ, ລູກຄ້າທີ່ຜ່ານມາ ແລະ ຟອມເລີ່ມຕົ້ນໂຄງການ',
    descEn: 'High-impact case studies, client showcase, awards, and project intake questionnaire.',
    iconName: 'Sparkles',
    recommendedPages: ['Home', 'Selected Works', 'Case Study Detail', 'Services', 'About Studio', 'Contact / Start Project'],
    recommendedFeatures: ['seo_optimization', 'interactive_animations', 'analytics_setup', 'contact_inquiry_line'],
  },
  {
    id: 'education',
    titleLo: 'ສະຖາບັນການສຶກສາ & ຄອສຮຽນ (Education & Academy)',
    titleEn: 'Education & Academy Portal',
    descLo: 'ແນະນຳຫຼັກສູດ, ລົງທະບຽນຮຽນ, ຕາຕະລາງສອນ, ຄູອາຈານ ແລະ ດາວໂຫຼດເອກະສານ',
    descEn: 'Course catalogs, student registration, syllabus downloads, faculty profiles, and schedules.',
    iconName: 'GraduationCap',
    recommendedPages: ['Home', 'Courses & Programs', 'Admissions', 'Faculty', 'Student Life', 'News & Events', 'Contact Us'],
    recommendedFeatures: ['course_registration', 'multilingual', 'pdf_downloads', 'seo_optimization'],
  },
  {
    id: 'real_estate',
    titleLo: 'ອະສັງຫາລິມະຊັບ & ທີ່ດິນ (Real Estate & Property)',
    titleEn: 'Real Estate & Properties',
    descLo: 'ລາຍການບ້ານ, ທີ່ດິນ, ຄອນໂດ, ຕົວກັ່ນຕອງລາຄາ/ທຳເລ, ແລະ ນັດໝາຍເຂົ້າເບິ່ງສະຖານທີ່',
    descEn: 'Property listings with price filters, neighborhood highlights, virtual tours, and viewing scheduler.',
    iconName: 'Home',
    recommendedPages: ['Home', 'Property Listings', 'Property Detail', 'Neighborhood Guide', 'About Agency', 'Contact / Schedule Tour'],
    recommendedFeatures: ['property_filter', 'booking_calendar', 'whatsapp_chat', 'google_map_embed'],
  },
  {
    id: 'custom_app',
    titleLo: 'ເວັບແອັບພລິເຄຊັນສະເພາະ (Custom Web Platform / SaaS)',
    titleEn: 'Custom Web Platform & SaaS',
    descLo: 'ລະບົບບໍລິຫານພາຍໃນ, ສະມາຊິກ Portal, Dashboard ລາຍງານຂໍ້ມູນສະເພາະທຸລະກິດ',
    descEn: 'Bespoke web applications, member portals, role-based dashboards, and custom business logic.',
    iconName: 'Cpu',
    recommendedPages: ['Landing Page', 'User Login / Sign Up', 'Client Dashboard', 'Data Reports', 'Settings', 'Support'],
    recommendedFeatures: ['user_auth_roles', 'admin_dashboard', 'data_export_excel', 'bcel_one_qr'],
  },
];

export interface DesignStyleOption {
  id: DesignStyleId;
  titleLo: string;
  titleEn: string;
  descLo: string;
  descEn: string;
  bestForLo: string;
  bestForEn: string;
  imageSrc: string;
  primaryTone: string;
}

export const DESIGN_STYLES: DesignStyleOption[] = [
  {
    id: 'minimal_luxury',
    titleLo: 'Minimalist Luxury (ຮຽບງ່າຍ, ຫຼູຫຼາ, ຊົງຄຸນຄ່າ)',
    titleEn: 'Minimalist Luxury',
    descLo: 'ເນັ້ນພື້ນທີ່ວ່າງສີຂາວ (Whitespace), ຕົວອັກສອນທີ່ປານີດ, ຮູບພາບຄຸນນະພາບສູງ, ສະຫງ່າງາມ ແລະ ບໍ່ຮົກຕາ',
    descEn: 'Generous whitespace, refined editorial typography, high-fashion imagery, and subtle restraint.',
    bestForLo: 'ສິນຄ້າແບຣນເນມ, ໂຄງການລະດັບພຣີມຽມ, ຄລີນິກຄວາມງາມ, ເອເຈນຊີສະຖາປັດ',
    bestForEn: 'Premium brands, boutique architects, luxury cosmetics, high-end services',
    imageSrc: styleMinimalImg,
    primaryTone: '#18181B',
  },
  {
    id: 'corporate_tech',
    titleLo: 'Corporate & Modern Tech (ທັນສະໄໝ, ໜ້າເຊື່ອຖື, ມືອາຊີບ)',
    titleEn: 'Corporate & Modern Tech',
    descLo: 'ໂທນສີຟ້າເຂັ້ມ-ເທົາ, ໂຄງສ້າງຊັດເຈນ, ມີຕາຕະລາງສະຖິຕິ, ໃຫ້ຄວາມຮູ້ສຶກໝັ້ນຄົງ ແລະ ທັນສະໄໝ',
    descEn: 'Structured layouts, deep slate/navy palette, data metric cards, and clean corporate clarity.',
    bestForLo: 'ບໍລິສັດໄອທີ, ທີ່ປຶກສາດ້ານກົດໝາຍ/ການເງິນ, ທຸລະກິດ B2B, ອົງກອນໃຫຍ່',
    bestForEn: 'Fintech, enterprise IT, law firms, consulting agencies, B2B vendors',
    imageSrc: styleCorporateImg,
    primaryTone: '#0F172A',
  },
  {
    id: 'ecommerce_modern',
    titleLo: 'Modern Retail & E-Commerce (ສວຍງາມ, ເຂົ້າເຖິງງ່າຍ, ກະຕຸ້ນການຊື້)',
    titleEn: 'Modern Retail & E-Commerce',
    descLo: 'ຈັດວາງສິນຄ້າໂດດເດັ່ນ, ປຸ່ມສັ່ງຊື້ຊັດເຈນ, ສີສັນສົດໃສເປັນກັນເອງ, ໂຫຼດໄວ ແລະ ໃຊ້ງານງ່າຍໃນມືຖື',
    descEn: 'Product-first hierarchy, crisp card grids, clear purchase triggers, and optimized mobile conversion.',
    bestForLo: 'ຮ້ານຂາຍເຄື່ອງແຟຊັ່ນ, ອາຫານເສີມ, ສິນຄ້າກະສິກຳແປຮູບ, ຮ້ານຄ້າທົ່ວໄປ',
    bestForEn: 'Fashion apparel, packaged consumer goods, specialty retail, artisan products',
    imageSrc: styleEcommerceImg,
    primaryTone: '#EA580C',
  },
  {
    id: 'hospitality_warm',
    titleLo: 'Warm Hospitality & Experience (ອົບອຸ່ນ, ເຊື້ອເຊີນ, ຜ່ອນຄາຍ)',
    titleEn: 'Warm Hospitality & Experience',
    descLo: 'ໂທນສີທຳມະຊາດ, ຮູບພາບແສງອົບອຸ່ນ, ຕົວໜັງສືທີ່ເປັນມິດ, ເນັ້ນບັນຍາກາດ ແລະ ຄວາມປະທັບໃຈ',
    descEn: 'Earth tones, warm ambient photography, friendly serif touches, and sensory hospitality focus.',
    bestForLo: 'ຣີສອດ, ໂຮງແຮມ, ຮ້ານກາເຟ, ຮ້ານອາຫານ, ການທ່ອງທ່ຽວແບບອະນຸລັກ',
    bestForEn: 'Eco-resorts, boutique hotels, cafes, fine dining, cultural tourism',
    imageSrc: styleHospitalityImg,
    primaryTone: '#78350F',
  },
];

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: 'slate_corporate',
    nameLo: 'Slate Tech (ສີເທົາເຂັ້ມ & ຟ້າ)',
    nameEn: 'Slate Tech',
    primary: '#0F172A',
    secondary: '#334155',
    accent: '#2563EB',
    background: '#F8FAFC',
  },
  {
    id: 'emerald_nature',
    nameLo: 'Mekong Emerald (ຂຽວທຳມະຊາດ & ທອງ)',
    nameEn: 'Mekong Emerald',
    primary: '#064E3B',
    secondary: '#047857',
    accent: '#D97706',
    background: '#F0FDF4',
  },
  {
    id: 'royal_indigo',
    nameLo: 'Royal Indigo (ມ່ວງຄາມ & ຟ້າຄຣິສຕັລ)',
    nameEn: 'Royal Indigo',
    primary: '#1E1B4B',
    secondary: '#4338CA',
    accent: '#0284C7',
    background: '#FAFAFA',
  },
  {
    id: 'warm_coffee',
    nameLo: 'Bolaven Coffee (ສີນ້ຳຕານກາເຟ & ຄຣີມ)',
    nameEn: 'Bolaven Earth & Cream',
    primary: '#451A03',
    secondary: '#78350F',
    accent: '#D97706',
    background: '#FFFBEB',
  },
  {
    id: 'minimal_mono',
    nameLo: 'Pure Monochrome (ດຳ-ຂາວ ສະໄຕລ໌ມິນິມໍ)',
    nameEn: 'Pure Monochrome',
    primary: '#18181B',
    secondary: '#52525B',
    accent: '#000000',
    background: '#FFFFFF',
  },
  {
    id: 'sunset_crimson',
    nameLo: 'Lao Crimson (ແດງສະຫງ່າ & ທອງຄຳ)',
    nameEn: 'Lao Crimson & Gold',
    primary: '#881337',
    secondary: '#BE123C',
    accent: '#B45309',
    background: '#FFF1F2',
  },
];
