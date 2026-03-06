// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
}

export interface PreloaderConfig {
  brandName: LocaleString;
  brandSubname: LocaleString;
  yearText?: LocaleString;
}

export interface ScrollToTopConfig {
  ariaLabel: LocaleString;
}

// ADYTON - Main / Layout
export interface MainConfig {
  pageTitle: LocaleString;
  siteName: LocaleString;
}

// ADYTON - Navbar
export interface NavConfig {
  logo: string;
  mobileLogo: string;
  altLogo: LocaleString;
  altMobileLogo: LocaleString;
  home: LocaleString;
  homeHotel: LocaleString;
  homeResort: LocaleString;
  homeHostel: LocaleString;
  homeCityHotel: LocaleString;
  homeApartment: LocaleString;
  about: LocaleString;
  rooms: LocaleString;
  room: LocaleString;
  findRoom: LocaleString;
  roomDetails: LocaleString;
  page: LocaleString;
  aboutUs: LocaleString;
  service: LocaleString;
  serviceDetails: LocaleString;
  ourTeam: LocaleString;
  pricing: LocaleString;
  blog: LocaleString;
  blogDetails: LocaleString;
  contact: LocaleString;
  bookingBtn: LocaleString;
  lightModeTitle: LocaleString;
  darkModeTitle: LocaleString;
}

// ADYTON - Footer
export interface FooterConfig {
  logo: string;
  galleryImages: string[];
  contactTitle: LocaleString;
  phone: string;
  email: string;
  address: LocaleString;
  linksTitle: LocaleString;
  linkAbout: LocaleString;
  linkRooms: LocaleString;
  linkReservations: LocaleString;
  linkNews: LocaleString;
  linkContact: LocaleString;
  galleryTitle: LocaleString;
  newsletterTitle: LocaleString;
  newsletterDesc: LocaleString;
  emailPlaceholder: LocaleString;
  subscribeBtn: LocaleString;
  copyrightPrefix: LocaleString;
  instagramUrl?: string;
}

// ADYTON - Hero (Home1)
export interface HeroConfig {
  bgImage1: string;
  bgImage2: string;
  subtitle: LocaleString;
  mainTitle: LocaleString;
  location1: LocaleString;
  location2: LocaleString;
  location3: LocaleString;
  location4: LocaleString;
  ctaButton: LocaleString;
  phone: string;
}

// ADYTON - Rooms (Home1)
export interface RoomsConfig {
  sectionLogo: string;
  bgShape: string;
  roomImage1: string;
  roomImage2: string;
  roomImage3: string;
  roomIcon: string;
  checkInLabel: LocaleString;
  checkOutLabel: LocaleString;
  roomsLabel: LocaleString;
  guestsLabel: LocaleString;
  childLabel: LocaleString;
  checkoutBtn: LocaleString;
  sectionTitle: LocaleString;
  sectionDesc: LocaleString;
  viewDetailsBtn: LocaleString;
  nightLabel: LocaleString;
  roomType: LocaleString;
  room1: LocaleString;
  room2: LocaleString;
  room3: LocaleString;
  sqft: LocaleString;
  bedConfig: LocaleString;
}

// ADYTON - Facilities (Home1)
export interface FacilitiesConfig {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  sectionLabel: LocaleString;
  title: LocaleString;
  viewMoreBtn: LocaleString;
  fitnessLabel: LocaleString;
  service1: LocaleString;
  service2: LocaleString;
  foodsLabel: LocaleString;
  service3: LocaleString;
  experienceLabel: LocaleString;
  description: LocaleString;
}

// ADYTON - HotelAndResort (Home1)
export interface HotelAndResortConfig {
  sliderImage1: string;
  sliderImage2: string;
  subtitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  roomsCountLabel: LocaleString;
  ratingsLabel: LocaleString;
  ctaBtn: LocaleString;
}

// ADYTON - HotelAndFacilities (Home1)
export interface HotelAndFacilitiesConfig {
  sectionLogo: string;
  bgShape: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  hoverImage: string;
  title: LocaleString;
  description: LocaleString;
  service1: LocaleString;
  service2: LocaleString;
  service3: LocaleString;
  service4: LocaleString;
  service5: LocaleString;
  service6: LocaleString;
}

// ADYTON - CallDoAction (Home1)
export interface ActionConfig {
  avatarImage: string;
  mainImage: string;
  label: LocaleString;
  title: LocaleString;
  description: LocaleString;
  authorName: LocaleString;
  authorRole: LocaleString;
}

// ADYTON - Offers (Home1)
export interface OffersConfig {
  offer1: string;
  offer2: string;
  offer3: string;
  offer4: string;
  sectionLabel: LocaleString;
  title: LocaleString;
  discount1: LocaleString;
  discount2: LocaleString;
  discount3: LocaleString;
  discount4: LocaleString;
  room1: LocaleString;
  room2: LocaleString;
  room3: LocaleString;
  room4: LocaleString;
}

// ADYTON - Testimonial (Home1)
export interface TestimonialConfig {
  bgImage: string;
  sectionLogo: string;
  quoteIcon: string;
  author1: string;
  author2: string;
  author3: string;
  title: LocaleString;
  quote: LocaleString;
  authorName1: LocaleString;
  authorName2: LocaleString;
  authorName3: LocaleString;
  authorName4: LocaleString;
  authorRole: LocaleString;
}

// ADYTON - LatestBlog (Home1)
export interface LatestBlogConfig {
  sectionLogo: string;
  bgShape: string;
  blogImage1: string;
  blogImage2: string;
  blogImage3: string;
  title: LocaleString;
  description: LocaleString;
  date: LocaleString;
  category: LocaleString;
  postTitle: LocaleString;
  readMoreBtn: LocaleString;
}

// ADYTON - Brand (shared)
export interface BrandConfig {
  brand1: string;
  brand2: string;
  brand3: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: 'ADYTON Mykonos', en: 'ADYTON Mykonos' },
  description: { el: 'Private Luxury Compound for Exclusive Long-Stay Lease', en: 'Private Luxury Compound for Exclusive Long-Stay Lease' },
  language: 'en',
  keywords: { el: 'Mykonos, luxury lease, private compound, corporate housing, diplomatic residence', en: 'Mykonos, luxury lease, private compound, corporate housing, diplomatic residence' },
  ogImage: '/images/generated/mykonos-hero.jpg',
  canonical: 'https://adytonmykonos.com',
};

export const preloaderConfig: PreloaderConfig = {
  brandName: { el: 'ADYTON', en: 'ADYTON' },
  brandSubname: { el: 'Private Luxury Compound', en: 'Private Luxury Compound' },
  yearText: { el: 'Mykonos', en: 'Mykonos' },
};

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: { el: 'Επάνω', en: 'Scroll to top' },
};

export const mainConfig: MainConfig = {
  pageTitle: { el: 'Private Luxury Compound', en: 'Private Luxury Compound' },
  siteName: { el: 'ADYTON Mykonos', en: 'ADYTON Mykonos' },
};

const ADYTON_LOGO = 'https://res.cloudinary.com/dem12vqtl/image/upload/v1772659122/Website%20Media/dtzamouranis%40uniwa.gr/hayc-57mj449v/zateqljrsmoevla3vqbp.jpg';
const LUXURY_SUITES = '/images/luxury Suites';

export const navConfig: NavConfig = {
  logo: ADYTON_LOGO,
  mobileLogo: ADYTON_LOGO,
  altLogo: { el: 'ADYTON Mykonos Logo', en: 'ADYTON Mykonos Logo' },
  altMobileLogo: { el: 'ADYTON Mykonos Logo', en: 'ADYTON Mykonos Logo' },
  home: { el: 'Home', en: 'Home' },
  homeHotel: { el: 'Overview', en: 'Overview' },
  homeResort: { el: 'Suites', en: 'Suites' },
  homeHostel: { el: 'Services', en: 'Services' },
  homeCityHotel: { el: 'Lease Terms', en: 'Lease Terms' },
  homeApartment: { el: 'Contact', en: 'Contact' },
  about: { el: 'About', en: 'About' },
  rooms: { el: 'Property', en: 'Property' },
  room: { el: 'Suites', en: 'Suites' },
  findRoom: { el: 'Lease Inquiry', en: 'Lease Inquiry' },
  roomDetails: { el: 'Property Details', en: 'Property Details' },
  page: { el: 'Page', en: 'Page' },
  aboutUs: { el: 'About Us', en: 'About Us' },
  service: { el: 'Services', en: 'Services' },
  serviceDetails: { el: 'Service Details', en: 'Service Details' },
  ourTeam: { el: 'Our Team', en: 'Our Team' },
  pricing: { el: 'Pricing', en: 'Pricing' },
  blog: { el: 'Blog', en: 'Blog' },
  blogDetails: { el: 'Blog Details', en: 'Blog Details' },
  contact: { el: 'Contact', en: 'Contact' },
  bookingBtn: { el: 'Inquire', en: 'Inquire' },
  lightModeTitle: { el: 'Apply Light Mode', en: 'Apply Light Mode' },
  darkModeTitle: { el: 'Apply Dark Mode', en: 'Apply Dark Mode' },
};

export const footerConfig: FooterConfig = {
  logo: ADYTON_LOGO,
  galleryImages: [
    `${LUXURY_SUITES}/589394469.jpg`,
    `/images/generated/mykonos-beach.jpg`,
    `${LUXURY_SUITES}/590764778.jpg`,
    `${LUXURY_SUITES}/697090534.jpg`,
    `/images/generated/mykonos-suite.jpg`,
    `${LUXURY_SUITES}/590793718.jpg`,
  ],
  contactTitle: { el: 'CONTACT', en: 'CONTACT' },
  phone: '',
  email: '',
  address: { el: 'Mykonos, Greece', en: 'Mykonos, Greece' },
  linksTitle: { el: 'Quick Links', en: 'Quick Links' },
  linkAbout: { el: 'About ADYTON', en: 'About ADYTON' },
  linkRooms: { el: 'Suites & Villas', en: 'Suites & Villas' },
  linkReservations: { el: 'Lease Inquiry', en: 'Lease Inquiry' },
  linkNews: { el: 'Instagram', en: 'Instagram' },
  linkContact: { el: 'Contact', en: 'Contact' },
  galleryTitle: { el: 'GALLERY', en: 'GALLERY' },
  newsletterTitle: { el: 'INQUIRIES', en: 'INQUIRIES' },
  newsletterDesc: { el: 'Confidential negotiations upon request.', en: 'Confidential negotiations upon request.' },
  emailPlaceholder: { el: 'Enter your email', en: 'Enter your email' },
  subscribeBtn: { el: 'Request Information', en: 'Request Information' },
  copyrightPrefix: { el: 'ADYTON Mykonos. All Rights Reserved.', en: 'ADYTON Mykonos. All Rights Reserved.' },
  instagramUrl: 'https://www.instagram.com/adyton_mykonos?igsh=MTI1eGR4bGE3ZnVyaQ==',
};

export const heroConfig: HeroConfig = {
  bgImage1: `${LUXURY_SUITES}/590792439.jpg`,
  bgImage2: `/images/generated/mykonos-hero.jpg`,
  subtitle: { el: 'PRIVATE LUXURY COMPOUND', en: 'PRIVATE LUXURY COMPOUND' },
  mainTitle: { el: 'Private Luxury Compound for Exclusive Long-Stay Lease', en: 'Private Luxury Compound for Exclusive Long-Stay Lease' },
  location1: { el: 'IN MYKONOS', en: 'IN MYKONOS' },
  location2: { el: 'ANNUAL LEASE', en: 'ANNUAL LEASE' },
  location3: { el: 'SEASONAL LEASE', en: 'SEASONAL LEASE' },
  location4: { el: 'LUXURY SUITES', en: 'LUXURY SUITES' },
  ctaButton: { el: 'Discover More', en: 'Discover More' },
  phone: '',
};

export const roomsConfig: RoomsConfig = {
  sectionLogo: '/images/home-1/section-shape1.png',
  bgShape: '/images/home-1/section-shape2.png',
  roomImage1: `${LUXURY_SUITES}/589394453.jpg`,
  roomImage2: `${LUXURY_SUITES}/590781352.jpg`,
  roomImage3: `${LUXURY_SUITES}/725627267.jpg`,
  roomIcon: '/images/home-1/room-bottom-icon.png',
  checkInLabel: { el: 'Lease Type', en: 'Lease Type' },
  checkOutLabel: { el: 'Duration', en: 'Duration' },
  roomsLabel: { el: 'Property', en: 'Property' },
  guestsLabel: { el: 'Inquiry', en: 'Inquiry' },
  childLabel: { el: 'Contact', en: 'Contact' },
  checkoutBtn: { el: 'Request Info', en: 'Request Info' },
  sectionTitle: { el: 'Luxury Suites & Private Villas', en: 'Luxury Suites & Private Villas' },
  sectionDesc: { el: 'An exclusive complex of luxury suites and private villas with individual pools, located in a prime area of Mykonos.', en: 'An exclusive complex of luxury suites and private villas with individual pools, located in a prime area of Mykonos.' },
  viewDetailsBtn: { el: 'View Details', en: 'View Details' },
  nightLabel: { el: 'taxes incl.', en: 'taxes incl.' },
  roomType: { el: 'Luxury Suite', en: 'Luxury Suite' },
  room1: { el: 'Private Maisonette – 2BR, 2BA, Pool', en: 'Private Maisonette – 2BR, 2BA, Pool' },
  room2: { el: 'Double Luxury Suite with Pool', en: 'Double Luxury Suite with Pool' },
  room3: { el: 'Double Suite with Living Room', en: 'Double Suite with Living Room' },
  sqft: { el: 'Fully furnished & equipped', en: 'Fully furnished & equipped' },
  bedConfig: { el: 'Private swimming pools', en: 'Private swimming pools' },
};

export const facilitiesConfig: FacilitiesConfig = {
  image1: `${LUXURY_SUITES}/590793377.jpg`,
  image2: `${LUXURY_SUITES}/697090361.jpg`,
  image3: `${LUXURY_SUITES}/725629742.jpg`,
  image4: `${LUXURY_SUITES}/590764322.jpg`,
  sectionLabel: { el: 'PROPERTY', en: 'PROPERTY' },
  title: { el: 'Private Luxury Compound – Annual or Seasonal Lease', en: 'Private Luxury Compound – Annual or Seasonal Lease' },
  viewMoreBtn: { el: 'Learn More', en: 'Learn More' },
  fitnessLabel: { el: 'POOLS', en: 'POOLS' },
  service1: { el: 'Private Swimming Pools', en: 'Private Swimming Pools' },
  service2: { el: 'Main Communal Pool', en: 'Main Communal Pool' },
  foodsLabel: { el: 'AMENITIES', en: 'AMENITIES' },
  service3: { el: 'Fully Furnished & Equipped', en: 'Fully Furnished & Equipped' },
  experienceLabel: { el: 'SERVICES', en: 'SERVICES' },
  description: { el: 'All utility costs included. Garden & pool maintenance. Full technical support. High-speed internet. Secure & discreet environment.', en: 'All utility costs included. Garden & pool maintenance. Full technical support. High-speed internet. Secure & discreet environment.' },
};

export const hotelAndResortConfig: HotelAndResortConfig = {
  sliderImage1: `${LUXURY_SUITES}/590780018.jpg`,
  sliderImage2: `${LUXURY_SUITES}/590781352.jpg`,
  subtitle: { el: 'PRIVATE LUXURY COMPOUND', en: 'PRIVATE LUXURY COMPOUND' },
  title: { el: 'Designed for High-Level International Clientele', en: 'Designed for High-Level International Clientele' },
  description: { el: 'An exclusive private residential compound in Mykonos, designed for those seeking privacy, security and refined Mediterranean living.', en: 'An exclusive private residential compound in Mykonos, designed for those seeking privacy, security and refined Mediterranean living.' },
  roomsCountLabel: { el: 'Luxury Suites', en: 'Luxury Suites' },
  ratingsLabel: { el: 'Ideal for', en: 'Ideal for' },
  ctaBtn: { el: 'Learn More', en: 'Learn More' },
};

export const hotelAndFacilitiesConfig: HotelAndFacilitiesConfig = {
  sectionLogo: '/images/home-1/section-shape1.png',
  bgShape: '/images/home-1/section-shape2.png',
  feature1: '/images/home-1/feature-1.png',
  feature2: '/images/home-1/feature-2.png',
  feature3: '/images/home-1/feature-3.png',
  feature4: '/images/home-1/feature-4.png',
  feature5: '/images/home-1/feature-5.png',
  hoverImage: `${LUXURY_SUITES}/589394592.jpg`,
  title: { el: "PROPERTY COMPOSITION", en: "PROPERTY COMPOSITION" },
  description: { el: '1 Maisonette, 4 Double Suites with Pools, 1 Double Suite with Living Room, Main Communal Pool, Auxiliary Space.', en: '1 Maisonette, 4 Double Suites with Pools, 1 Double Suite with Living Room, Main Communal Pool, Auxiliary Space.' },
  service1: { el: 'Private Pools', en: 'Private Pools' },
  service2: { el: 'High-Speed Internet', en: 'High-Speed Internet' },
  service3: { el: 'Secure & Discreet', en: 'Secure & Discreet' },
  service4: { el: 'Beach Access', en: 'Beach Access' },
  service5: { el: 'Utilities Included', en: 'Utilities Included' },
  service6: { el: 'Pool Maintenance', en: 'Pool Maintenance' },
};

export const actionConfig: ActionConfig = {
  avatarImage: '/images/home-1/call-do-action-img.png',
  mainImage: `${LUXURY_SUITES}/697089488.jpg`,
  label: { el: 'LEASE TERMS', en: 'LEASE TERMS' },
  title: { el: 'Annual €145,000 | 6-Month €125,000 – Taxes Included', en: 'Annual €145,000 | 6-Month €125,000 – Taxes Included' },
  description: { el: 'Corporate housing • Diplomatic residence • High-net-worth families • Long-stay executive retreat. Discreet negotiations & confidential inquiries only.', en: 'Corporate housing • Diplomatic residence • High-net-worth families • Long-stay executive retreat. Discreet negotiations & confidential inquiries only.' },
  authorName: { el: 'ADYTON Mykonos', en: 'ADYTON Mykonos' },
  authorRole: { el: 'Private Luxury Compound', en: 'Private Luxury Compound' },
};

export const offersConfig: OffersConfig = {
  offer1: `${LUXURY_SUITES}/590793102.jpg`,
  offer2: `${LUXURY_SUITES}/725630499.jpg`,
  offer3: `${LUXURY_SUITES}/590794859.jpg`,
  offer4: `${LUXURY_SUITES}/697091297.jpg`,
  sectionLabel: { el: 'ADDITIONAL SERVICES', en: 'ADDITIONAL SERVICES' },
  title: { el: "Available Upon Request", en: "Available Upon Request" },
  discount1: { el: 'Upon Request', en: 'Upon Request' },
  discount2: { el: 'Upon Request', en: 'Upon Request' },
  discount3: { el: 'Upon Request', en: 'Upon Request' },
  discount4: { el: 'Upon Request', en: 'Upon Request' },
  room1: { el: 'Private Security', en: 'Private Security' },
  room2: { el: 'Chauffeur / Driver', en: 'Chauffeur / Driver' },
  room3: { el: 'Private Chef', en: 'Private Chef' },
  room4: { el: 'VIP Concierge', en: 'VIP Concierge' },
};

export const testimonialConfig: TestimonialConfig = {
  bgImage: `${LUXURY_SUITES}/590793440.jpg`,
  sectionLogo: '/images/home-1/section-shape1.png',
  quoteIcon: '/images/home-1/testi-quote.png',
  author1: '/images/home-1/testi-author.png',
  author2: '/images/home-1/testi-author-2.png',
  author3: '/images/home-1/call-do-action-img.png',
  title: { el: "Client Testimonials", en: "Client Testimonials" },
  quote: { el: 'An exclusive private residential compound in Mykonos, designed for high-level international clientele seeking privacy and refined Mediterranean living.', en: 'An exclusive private residential compound in Mykonos, designed for high-level international clientele seeking privacy and refined Mediterranean living.' },
  authorName1: { el: 'ADYTON Mykonos', en: 'ADYTON Mykonos' },
  authorName2: { el: 'ADYTON Mykonos', en: 'ADYTON Mykonos' },
  authorName3: { el: 'ADYTON Mykonos', en: 'ADYTON Mykonos' },
  authorName4: { el: 'ADYTON Mykonos', en: 'ADYTON Mykonos' },
  authorRole: { el: 'Private Luxury Compound', en: 'Private Luxury Compound' },
};

export const latestBlogConfig: LatestBlogConfig = {
  sectionLogo: '/images/home-1/section-shape1.png',
  bgShape: '/images/home-1/section-shape2.png',
  blogImage1: `${LUXURY_SUITES}/590776028.jpg`,
  blogImage2: `${LUXURY_SUITES}/714733856.jpg`,
  blogImage3: `${LUXURY_SUITES}/758041493.jpg`,
  title: { el: 'GALLERY', en: 'GALLERY' },
  description: { el: 'Explore our luxury suites and private villas in Mykonos.', en: 'Explore our luxury suites and private villas in Mykonos.' },
  date: { el: 'Mykonos', en: 'Mykonos' },
  category: { el: 'Luxury Lease', en: 'Luxury Lease' },
  postTitle: { el: 'Private Luxury Compound for Exclusive Long-Stay Lease', en: 'Private Luxury Compound for Exclusive Long-Stay Lease' },
  readMoreBtn: { el: 'View Gallery', en: 'View Gallery' },
};

export const brandConfig: BrandConfig = {
  brand1: ADYTON_LOGO,
  brand2: ADYTON_LOGO,
  brand3: ADYTON_LOGO,
};
