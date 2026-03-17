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
  siteId: string;
  apiUrl: string;
}

export interface PreloaderConfig {
  brandName: LocaleString;
  brandSubname: LocaleString;
  yearText?: LocaleString;
}

export interface ScrollToTopConfig {
  ariaLabel: LocaleString;
}

// Royella - Main / Layout
export interface MainConfig {
  pageTitle: LocaleString;
  siteName: LocaleString;
}

// Royella - Navbar
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
  adytonSuite: LocaleString;
  contact: LocaleString;
  bookingBtn: LocaleString;
  lightModeTitle: LocaleString;
  darkModeTitle: LocaleString;
}

// Royella - Footer
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
  copyrightText: LocaleString;
  madeByText: LocaleString;
}

// Royella - Hero (Home1)
export interface HeroConfig {
  bgImage1: string;
  bgImage2: string;
  bgImage3: string;
  subtitle: LocaleString;
  mainTitle: LocaleString;
  location1: LocaleString;
  location2: LocaleString;
  location3: LocaleString;
  location4: LocaleString;
  ctaButton: LocaleString;
  leaseButton6Months: LocaleString;
  leaseButton12Months: LocaleString;
  phone: string;
}

// Royella - Rooms (Home1)
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

// Royella - Facilities (Home1)
export interface FacilitiesConfig {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
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

// Royella - HotelAndResort (Home1)
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

// Royella - HotelAndFacilities (Home1)
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

// Royella - CallDoAction (Home1)
export interface ActionConfig {
  avatarImage: string;
  mainImage: string;
  label: LocaleString;
  title: LocaleString;
  description: LocaleString;
  authorName: LocaleString;
  authorRole: LocaleString;
}

// Royella - Offers (Home1)
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

// Royella - Testimonial (Home1)
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

// Royella - LatestBlog (Home1)
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

// Royella - Brand (shared)
export interface BrandConfig {
  brand1: string;
  brand2: string;
  brand3: string;
}

// Contact Page
export interface ContactConfig {
  breadcrumbTitle: LocaleString;
  breadcrumbImage: string;
  sectionLabel: LocaleString;
  sectionTitle: LocaleString;
  sectionDesc: LocaleString;
  callLabel: LocaleString;
  emailLabel: LocaleString;
  locationLabel: LocaleString;
  formTitle: LocaleString;
  namePlaceholder: LocaleString;
  emailPlaceholder: LocaleString;
  serviceSelect: LocaleString;
  servicePrivateSecurity: LocaleString;
  serviceChauffeur: LocaleString;
  servicePrivateChef: LocaleString;
  serviceHairBeauty: LocaleString;
  serviceVipConcierge: LocaleString;
  serviceSecurityEscort: LocaleString;
  messagePlaceholder: LocaleString;
  submitButton: LocaleString;
  submittingButton: LocaleString;
  successTitle: LocaleString;
  successMessage: LocaleString;
  errorMessage: LocaleString;
  nameRequired: LocaleString;
  emailInvalid: LocaleString;
  messageRequired: LocaleString;
  phone: string;
  email: string;
  address: LocaleString;
  mapUrl: string;
}

// Error Page
export interface ErrorPageConfig {
  errorCode: LocaleString;
  errorTitle: LocaleString;
  goHomeButton: LocaleString;
}

// FAQ Config
export interface FAQItem {
  question: LocaleString;
  answer: LocaleString;
}

export interface FAQConfig {
  sectionTitle: LocaleString;
  items: FAQItem[];
}

// BreadCrumb Config
export interface BreadCrumbConfig {
  homeLink: LocaleString;
  defaultImage: string;
  contactImage: string;
  blogImage: string;
  roomsImage: string;
  adytonSuiteImage: string;
}

// Room-type specific details (per suite/room)
export interface RoomTypeConfig {
  id: string;
  title: LocaleString;
  size: string;
  bedSummary: string;
  description: LocaleString;
  bathroomAmenities: string[];
  viewAmenities: string[];
  roomAmenities: string[];
  smokingPolicy: string;
  images: string[];
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: 'Adyton Mykonos Suite', en: 'Adyton Mykonos Suite' },
  description: { el: 'Adyton Mykonos Luxury Suites & Pools', en: 'Adyton Mykonos Luxury Suites & Pools' },
  language: 'en',
  keywords: { el: 'Adyton Mykonos Suite', en: 'Adyton Mykonos Suite' },
  ogImage: '/images/LuxurySuites/590780018.jpg',
  canonical: '',
  siteId: 'adyton-luxury-suites',
  apiUrl: 'https://harmonious-embrace-staging.up.railway.app',
};

export const preloaderConfig: PreloaderConfig = {
  brandName: { el: 'Adyton Mykonos Suite', en: 'Adyton Mykonos Suite' },
  brandSubname: { el: '', en: '' },
  yearText: { el: '2026', en: '2026' },
};

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: { el: 'Επάνω', en: 'Scroll to top' },
};

export const mainConfig: MainConfig = {
  pageTitle: { el: 'Κρατήσεις Ξενοδοχείου', en: 'Hotel Booking' },
  siteName: { el: 'Adyton', en: 'Adyton' },
};

export const navConfig: NavConfig = {
  logo: '/images/inner/AdytonLogo.png',
  mobileLogo: '/images/logo2.png',
  altLogo: { el: 'Website logo', en: 'Website logo' },
  altMobileLogo: { el: 'Website logo', en: 'Website logo' },
  home: { el: 'Home', en: 'Home' },
  homeHotel: { el: 'Κρατήσεις Ξενοδοχείου', en: 'Hotel Booking' },
  homeResort: { el: 'Resort', en: 'Resort' },
  homeHostel: { el: 'Hostel', en: 'Hostel' },
  homeCityHotel: { el: 'City Hotel', en: 'City Hotel' },
  homeApartment: { el: 'Διαμέρισμα', en: 'Apartment' },
  about: { el: 'About', en: 'About' },
  rooms: { el: 'Luxury suites', en: 'Luxury suites' },
  room: { el: 'Room', en: 'Room' },
  findRoom: { el: 'Find Room', en: 'Find Room' },
  roomDetails: { el: 'Room Details', en: 'Room Details' },
  page: { el: 'Services', en: 'Services' },
  aboutUs: { el: 'ABOUT US', en: 'ABOUT US' },
  service: { el: 'SERVICE', en: 'SERVICE' },
  serviceDetails: { el: 'SERVICE DETAILS', en: 'SERVICE DETAILS' },
  ourTeam: { el: 'OUR TEAM', en: 'OUR TEAM' },
  pricing: { el: 'ΤΙΜΕΣ', en: 'PRICING' },
  blog: { el: 'BLOG', en: 'BLOG' },
  blogDetails: { el: 'BLOG DETAILS', en: 'BLOG DETAILS' },
  adytonSuite: { el: 'The house', en: 'The house' },
  contact: { el: 'Contact', en: 'Contact' },
  bookingBtn: { el: 'Book Online', en: 'Book Online' },
  lightModeTitle: { el: 'Εφαρμογή Φωτεινής Λειτουργίας', en: 'Apply Light Mode' },
  darkModeTitle: { el: 'Εφαρμογή Σκοτεινής Λειτουργίας', en: 'Apply Dark Mode' },
};

export const footerConfig: FooterConfig = {
  logo: '/images/inner/AdytonLogo.png',
  galleryImages: [
    '/images/LuxurySuites/589394453.jpg',
    '/images/LuxurySuites/589394469.jpg',
    '/images/LuxurySuites/589394592.jpg',
    '/images/LuxurySuites/590775857.jpg',
    '/images/LuxurySuites/697089993.jpg',
    '/images/LuxurySuites/725629742.jpg',
  ],
  contactTitle: { el: 'CONTACT INFO', en: 'CONTACT INFO' },
  phone: '2289305041',
  email: 'adytonmykonos@gmail.com',
  address: { el: 'Eparchiaki Odos Mykonou-Ano Merias, Ano Mera, 84600, Greece', en: 'Eparchiaki Odos Mykonou-Ano Merias, Ano Mera, 84600, Greece' },
  linksTitle: { el: 'Useful Links', en: 'Useful Links' },
  linkAbout: { el: 'About Hotel', en: 'About Hotel' },
  linkRooms: { el: 'Luxury suites and pools', en: 'Luxury suites and pools' },
  linkReservations: { el: 'Reservations', en: 'Reservations' },
  linkNews: { el: 'News & Blogs', en: 'News & Blogs' },
  linkContact: { el: 'Contact Us', en: 'Contact Us' },
  galleryTitle: { el: 'GALLERY', en: 'GALLERY' },
  newsletterTitle: { el: 'NEWSLETTER', en: 'NEWSLETTER' },
  newsletterDesc: { el: 'Subscribe to our Newsletter', en: 'Subscribe to our Newsletter' },
  emailPlaceholder: { el: 'Enter Email', en: 'Enter Email' },
  subscribeBtn: { el: 'Subscribe Now', en: 'Subscribe Now' },
  copyrightPrefix: { el: 'Royella. All Rights Reserved.', en: 'Royella. All Rights Reserved.' },
  copyrightText: { el: 'Copyright © 2026 All Right Reserved.', en: 'Copyright © 2026 All Right Reserved.' },
  madeByText: { el: 'Made by hayc with 💙', en: 'Made by hayc with 💙' },
};

export const heroConfig: HeroConfig = {
  bgImage1: '/images/LuxurySuites/590780018.jpg',
  bgImage2: '/images/LuxurySuites/589394632.jpg',
  bgImage3: '/images/LuxurySuites/590792439.jpg',
  subtitle: { el: 'Adyton Mykonos Luxury Suites & Pools', en: 'Adyton Mykonos Luxury Suites & Pools' },
  mainTitle: { el: 'Private Luxury Compound for Exclusive Long-Stay Lease', en: 'Private Luxury Compound for Exclusive Long-Stay Lease' },
  location1: { el: 'ΣΤΗΝ CALIFORNIA', en: 'IN CALIFORNIA' },
  location2: { el: 'ΣΤΟ KASHMIR', en: 'IN KASHMIR' },
  location3: { el: 'ΣΤΟ COLOSSEUM', en: 'IN COLOSSEUM' },
  location4: { el: 'ΣΤΗΝ SRILANKA', en: 'IN SRILANKA' },
  ctaButton: { el: 'Discover More', en: 'Discover More' },
  leaseButton6Months: { el: '6 Months Lease', en: '6 Months Lease' },
  leaseButton12Months: { el: '12 Months Lease', en: '12 Months Lease' },
  phone: '2289305041',
};

export const roomsConfig: RoomsConfig = {
  sectionLogo: '/images/inner/AdytonLogo.png',
  bgShape: '/images/inner/AdytonLogo.png',
  roomImage1: '/images/home-1/room-1.jpg',
  roomImage2: '/images/home-1/room-2.jpg',
  roomImage3: '/images/home-1/room-3.jpg',
  roomIcon: '/images/home-1/room-bottom-icon.png',
  checkInLabel: { el: 'Άφιξη', en: 'Check In' },
  checkOutLabel: { el: 'Αναχώρηση', en: 'Check Out' },
  roomsLabel: { el: 'Luxury suites and pools', en: 'Luxury suites and pools' },
  guestsLabel: { el: 'Επισκέπτες', en: 'Guests' },
  childLabel: { el: 'Παιδί', en: 'Child' },
  checkoutBtn: { el: 'Κράτηση Τώρα', en: 'Checkout Now' },
  sectionTitle: { el: 'Upon request', en: 'Upon request' },
  sectionDesc: { el: 'Services provided upon request with additional cost', en: 'Services provided upon request with additional cost' },
  viewDetailsBtn: { el: 'View More', en: 'View More' },
  nightLabel: { el: 'Νύχτα', en: 'Night' },
  roomType: { el: 'Δωμάτιο Luxury', en: 'Luxury Room' },
  room1: { el: 'Δίκλινα Suite', en: 'Double Suite Rooms' },
  room2: { el: 'Οικογενειακά Δωμάτια Deluxe', en: 'Delux Family Rooms' },
  room3: { el: 'Δωμάτια με Κορυφαίο Κρεβάτι', en: 'Suprior Bed Rooms' },
  sqft: { el: '1500 SQ.FT / Luxury suites', en: '1500 SQ.FT / Luxury suites' },
  bedConfig: { el: '2 King Bed', en: '2 King Bed' },
};

export const facilitiesConfig: FacilitiesConfig = {
  image1: '/images/LuxurySuites/725630499.jpg',
  image2: '/images/LuxurySuites/590792439.jpg',
  image3: '/images/LuxurySuites/725629382.jpg',
  image4: '/images/LuxurySuites/714733282.jpg',
  image5: '/images/LuxurySuites/590791343.jpg',
  image6: '/images/LuxurySuites/725627447.jpg',
  sectionLabel: { el: 'BASIC AMENITIES', en: 'FACILITIES' },
  title: { el: 'BASIC AMENITIES FOR A COMFORTABLE STAY', en: 'BASIC AMENITIES FOR A COMFORTABLE STAY' },
  viewMoreBtn: { el: 'MORE', en: 'view more item' },
  fitnessLabel: { el: 'Γυμναστήριο', en: 'Fitness' },
  service1: { el: 'Γυμναστήριο και Περιοχή Προπόνησης', en: 'Gym Training Grounds' },
  service2: { el: 'Κλειστή Πισίνα', en: 'Indoor Swimming Pool' },
  foodsLabel: { el: 'ΤΡΟΦΕΣ', en: 'FOODS' },
  service3: { el: 'Το Κέντρο Εστιατορίου', en: 'The Restaurant Center' },
  experienceLabel: { el: 'ΕΜΠΕΙΡΙΑ', en: 'EXPERIENCE' },
  description: { el: 'Rapidiously myocardinate cross-platform intellectual capital...', en: 'Rapidiously myocardinate cross-platform intellectual capital...' },
};

export const hotelAndResortConfig: HotelAndResortConfig = {
  sliderImage1: '/images/LuxurySuites/589394469.jpg',
  sliderImage2: '/images/LuxurySuites/589394453.jpg',
  subtitle: { el: 'Adyton Mykonos Luxury Suites & Pools', en: 'Adyton Mykonos Luxury Suites & Pools' },
  title: { el: 'BEST LUXURY SUITE IN MYKONOS, GREECE', en: 'BEST LUXURY SUITE IN MYKONOS, GREECE' },
  description: { el: 'An exclusive private residential compound in Mykonos, designed for high-level international clientele seeking privacy, security and refined Mediterranean living.', en: 'An exclusive private residential compound in Mykonos, designed for high-level international clientele seeking privacy, security and refined Mediterranean living.' },
  roomsCountLabel: { el: 'Square Meters', en: 'Square Meters' },
  ratingsLabel: { el: 'Customer Ratings', en: 'Customer Ratings' },
  ctaBtn: { el: 'About', en: 'More About' },
};

export const hotelAndFacilitiesConfig: HotelAndFacilitiesConfig = {
  sectionLogo: '/images/inner/AdytonLogo.png',
  bgShape: '/images/inner/AdytonLogo.png',
  feature1: '/images/home-1/feature-1.png',
  feature2: '/images/home-1/feature-2.png',
  feature3: '/images/home-1/feature-3.png',
  feature4: '/images/home-1/feature-4.png',
  feature5: '/images/home-1/feature-5.png',
  hoverImage: '/images/home-1/feature-imgs-1.jpg',
  title: { el: 'ΕΓΚΑΤΑΣΤΑΣΕΙΣ ΞΕΝΟΔΟΧΕΙΟΥ', en: 'HOTEL\'S FACILITIES' },
  description: { el: 'Proactively morph optimal infomediaries...', en: 'Proactively morph optimal infomediaries...' },
  service1: { el: 'Υπηρεσίες Δωματίου', en: 'Room Services' },
  service2: { el: 'Wi-Fi Internet', en: 'Wi-Fi Internet' },
  service3: { el: 'Έξυπνο Κλειδί', en: 'Smart Key' },
  service4: { el: 'Πρωινό', en: 'Breakfast' },
  service5: { el: 'Πισίνα', en: 'Swimming Pool' },
  service6: { el: 'Υπηρεσία Δωματίου', en: 'Room Service' },
};

export const actionConfig: ActionConfig = {
  avatarImage: '/images/home-1/call-do-action-img.png',
  mainImage: '/images/home-1/action-img.png',
  label: { el: 'ΔΙΕΥΘΥΝΤΗΣ', en: 'MANAGER' },
  title: { el: 'BEST LUXURY SUITE IN MYKONOS, GREECE', en: 'BEST LUXURY SUITE IN MYKONOS, GREECE' },
  description: { el: 'An exclusive private residential compound in Mykonos, designed for high-level international clientele seeking privacy, security and refined Mediterranean living.', en: 'An exclusive private residential compound in Mykonos, designed for high-level international clientele seeking privacy, security and refined Mediterranean living.' },
  authorName: { el: 'John D. Alexon', en: 'John D. Alexon' },
  authorRole: { el: 'Διευθυντής', en: 'Manger' },
};

export const offersConfig: OffersConfig = {
  offer1: '/images/LuxurySuites/590781352.jpg',
  offer2: '/images/LuxurySuites/589394667.jpg',
  offer3: '/images/LuxurySuites/714733127.jpg',
  offer4: '/images/LuxurySuites/758041493.jpg',
  sectionLabel: { el: 'ADYTON LUXURY SUITE', en: 'OFFERS' },
  title: { el: 'MORE IMAGES OF OUR SUITE', en: 'MORE IMAGES OF OUR SUITE' },
  discount1: { el: '25% έκπτωση', en: '25% off' },
  discount2: { el: '24% έκπτωση', en: '24% off' },
  discount3: { el: '26% έκπτωση', en: '26% off' },
  discount4: { el: '22% έκπτωση', en: '22% off' },
  room1: { el: 'Οικογενειακά Δωμάτια Deluxe', en: 'Delux Family Rooms' },
  room2: { el: 'Δίκλινα Suite', en: 'Double Suite Rooms' },
  room3: { el: 'Δωμάτιο με Κορυφαίο Κρεβάτι', en: 'Suprior Bed Room' },
  room4: { el: 'Junior Suite', en: 'Junior Suite Room' },
};

export const testimonialConfig: TestimonialConfig = {
  bgImage: '/images/home-1/testi-bg.jpg',
  sectionLogo: '/images/home-1/section-shape1.png',
  quoteIcon: '/images/home-1/testi-quote.png',
  author1: '/images/home-1/testi-author.png',
  author2: '/images/home-1/testi-author-2.png',
  author3: '/images/home-1/call-do-action-img.png',
  title: { el: 'Μαρτυρία Πελάτη', en: 'Ustomer\'s TestimonialL' },
  quote: { el: 'Professionally repurpose flexible testing procedures...', en: 'Professionally repurpose flexible testing procedures...' },
  authorName1: { el: 'Maicle clork', en: 'Maicle clork' },
  authorName2: { el: 'Marina Trange', en: 'Marina Trange' },
  authorName3: { el: 'John D. Alexon', en: 'John D. Alexon' },
  authorName4: { el: 'Brandon Mack', en: 'Brandon Mack' },
  authorRole: { el: 'Διευθυντής', en: 'Manger' },
};

export const latestBlogConfig: LatestBlogConfig = {
  sectionLogo: '/images/inner/AdytonLogo.png',
  bgShape: '/images/home-1/section-shape2.png',
  blogImage1: '/images/LuxurySuites/590796669.jpg',
  blogImage2: '/images/LuxurySuites/725629599.jpg',
  blogImage3: '/images/LuxurySuites/590773457.jpg',
  title: { el: 'ΤΕΛΕΥΤΑΙΑ ΑΡΘΡΑ ΑΠΟ TO BLOG', en: 'LATEST POST FROM BLOG' },
  description: { el: 'Proactively morph optimal infomediaries...', en: 'Proactively morph optimal infomediaries...' },
  date: { el: '10 Αυγούστου 2023', en: 'August 10, 2023' },
  category: { el: 'Εσωτερική Διακόσμηση', en: 'Interior' },
  postTitle: { el: 'Ξενοδοχείο Luxury για Ταξίδια USA, California', en: 'Luxury Hotel for Traveling Spot USA, California' },
  readMoreBtn: { el: 'Διαβάστε Περισσότερα', en: 'Read More' },
};

export const brandConfig: BrandConfig = {
  brand1: '/images/logo2.png',
  brand2: '/images/logo2.png',
  brand3: '/images/logo2.png',
};

export const contactConfig: ContactConfig = {
  breadcrumbTitle: { el: 'Contact', en: 'Contact' },
  breadcrumbImage: '/images/LuxurySuites/589394453.jpg',
  sectionLabel: { el: 'CONTACT US', en: 'CONTACT US' },
  sectionTitle: { el: 'CONTACT WITH US', en: 'CONTACT WITH US' },
  sectionDesc: { el: 'Reach out to ADYTON Mykonos for private long-stay inquiries, availability details, and tailored support for your luxury stay in Greece.', en: 'Reach out to ADYTON Mykonos for private long-stay inquiries, availability details, and tailored support for your luxury stay in Greece.' },
  callLabel: { el: 'Call Us Now', en: 'Call Us Now' },
  emailLabel: { el: 'Send Email', en: 'Send Email' },
  locationLabel: { el: 'Our Locations', en: 'Our Locations' },
  formTitle: { el: 'GET IN TOUCH', en: 'GET IN TOUCH' },
  namePlaceholder: { el: 'Your Name', en: 'Your Name' },
  emailPlaceholder: { el: 'Enter E-mail', en: 'Enter E-mail' },
  serviceSelect: { el: 'Select Service', en: 'Select Service' },
  servicePrivateSecurity: { el: 'Private security', en: 'Private security' },
  serviceChauffeur: { el: 'Chauffeur / Driver', en: 'Chauffeur / Driver' },
  servicePrivateChef: { el: 'Private chef', en: 'Private chef' },
  serviceHairBeauty: { el: 'Hair & beauty services', en: 'Hair & beauty services' },
  serviceVipConcierge: { el: 'VIP concierge services', en: 'VIP concierge services' },
  serviceSecurityEscort: { el: 'Personalized security escort', en: 'Personalized security escort' },
  messagePlaceholder: { el: 'Write Message:', en: 'Write Message:' },
  submitButton: { el: 'SEND MESSAGE', en: 'SEND MESSAGE' },
  submittingButton: { el: 'SENDING...', en: 'SENDING...' },
  successTitle: { el: 'Message sent!', en: 'Message sent!' },
  successMessage: { el: 'We will get back to you shortly.', en: 'We will get back to you shortly.' },
  errorMessage: { el: 'Something went wrong. Please try again.', en: 'Something went wrong. Please try again.' },
  nameRequired: { el: 'Name is required.', en: 'Name is required.' },
  emailInvalid: { el: 'Please enter a valid email.', en: 'Please enter a valid email.' },
  messageRequired: { el: 'Message is required.', en: 'Message is required.' },
  phone: '2289305041',
  email: 'adytonmykonos@gmail.com',
  address: { el: 'Eparchiaki Odos Mykonou-Ano Merias, Ano Mera, 84600, Greece', en: 'Eparchiaki Odos Mykonou-Ano Merias, Ano Mera, 84600, Greece' },
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.3668125119325!2d25.391978196890864!3d37.443589851358055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2b9c7a2ca8469%3A0x82134b26f3ce1d33!2sAdyton%20Luxury%20Suites%20%26%20Pools%20Mykonos!5e0!3m2!1sen!2sfr!4v1773488927998!5m2!1sen!2sfr',
};

export const errorPageConfig: ErrorPageConfig = {
  errorCode: { el: '404', en: '404' },
  errorTitle: { el: 'Page Not Found', en: 'Page Not Found' },
  goHomeButton: { el: 'Go Home', en: 'Go Home' },
};

export const faqConfig: FAQConfig = {
  sectionTitle: { el: 'FREQUENTLY ASKED QUESTIONS', en: 'FREQUENTLY ASKED QUESTIONS' },
  items: [
    {
      question: { el: 'What are the available lease options?', en: 'What are the available lease options?' },
      answer: { el: 'We offer two flexible options: 6-month seasonal lease (€125,000) or annual lease (€145,000), all taxes and utilities included.', en: 'We offer two flexible options: 6-month seasonal lease (€125,000) or annual lease (€145,000), all taxes and utilities included.' },
    },
    {
      question: { el: 'What is included in the lease price?', en: 'What is included in the lease price?' },
      answer: { el: 'The price includes: water, electricity, cleaning once per week (for additional cleanings upon request and agreement), gardener services, and pool maintenance services. Also included: Wi-Fi and private parking.', en: 'The price includes: water, electricity, cleaning once per week (for additional cleanings upon request and agreement), gardener services, and pool maintenance services. Also included: Wi-Fi and private parking.' },
    },
    {
      question: { el: 'Who is the ideal clientele for this property?', en: 'Who is the ideal clientele for this property?' },
      answer: { el: 'Corporate housing, embassy or diplomatic residences, international families, and luxury long-stay clientele.', en: 'Corporate housing, embassy or diplomatic residences, international families, and luxury long-stay clientele.' },
    },
    {
      question: { el: 'How many suites and pools does it include?', en: 'How many suites and pools does it include?' },
      answer: { el: '5 double luxury suites (convertible to triple) each with a private pool, plus 1 main residence maisonette with 2 double to 2 triple bedrooms. Capacity 14–21 guests. Standard capacity 14, up to 16 upon request with free extra bed in specific suites.', en: '5 double luxury suites (convertible to triple) each with a private pool, plus 1 main residence maisonette with 2 double to 2 triple bedrooms. Capacity 14–21 guests. Standard capacity 14, up to 16 upon request with free extra bed in specific suites.' },
    },
    {
      question: { el: 'Is there internet and parking?', en: 'Is there internet and parking?' },
      answer: { el: 'Yes, free high-speed Wi-Fi and private parking are included.', en: 'Yes, free high-speed Wi-Fi and private parking are included.' },
    },
    {
      question: { el: 'Where is the property located?', en: 'Where is the property located?' },
      answer: { el: 'In Ano Mera, Mykonos. 2 km from Kaló Livádi beach, 5 km from airport, 8.5 km from Mykonos Town.', en: 'In Ano Mera, Mykonos. 2 km from Kaló Livádi beach, 5 km from airport, 8.5 km from Mykonos Town.' },
    },
    {
      question: { el: 'Are there additional services available?', en: 'Are there additional services available?' },
      answer: { el: 'Yes, upon request and extra cost: security, transportation services, concierge services, babysitting, hairdresser/manicure/pedicure, cleaning services, and more.', en: 'Yes, upon request and extra cost: security, transportation services, concierge services, babysitting, hairdresser/manicure/pedicure, cleaning services, and more.' },
    },
    {
      question: { el: 'How can I make an inquiry?', en: 'How can I make an inquiry?' },
      answer: { el: 'Contact us by phone or email. Serious inquiries and confidential negotiations are welcome.', en: 'Contact us by phone or email. Serious inquiries and confidential negotiations are welcome.' },
    },
  ],
};

export const breadCrumbConfig: BreadCrumbConfig = {
  homeLink: { el: 'Home', en: 'Home' },
  defaultImage: '/images/LuxurySuites/590780018.jpg',
  contactImage: '/images/LuxurySuites/589394453.jpg',
  blogImage: '/images/LuxurySuites/589394592.jpg',
  roomsImage: '/images/LuxurySuites/590792439.jpg',
  adytonSuiteImage: '/images/LuxurySuites/590776503.jpg',
};

// Room-type definitions for individual suite pages
export const roomTypesConfig: RoomTypeConfig[] = [
  {
    id: 'deluxe-double-pool',
    title: {
      el: '',
      en: 'Deluxe Double or Twin Room with Pool Access',
    },
    size: '25 sq.m.',
    bedSummary: '1 large double bed',
    description: {
      el: '',
      en: 'The pool with a view is a top feature of this twin/double room. The twin/double room features air conditioning, a private entrance, a terrace with garden views as well as a private bathroom boasting a shower. The unit has 1 bed.',
    },
    bathroomAmenities: [
      'Free toiletries',
      'Toilet',
      'Bathtub or shower',
      'Towels',
      'Slippers',
      'Hair dryer',
      'Towels/sheets at extra charge',
      'Toilet paper',
    ],
    viewAmenities: [
      'Garden view',
      'Pool view',
      'View of the inner courtyard',
    ],
    roomAmenities: [
      'Veranda',
      'Air conditioning',
      'Sofa',
      'Linens',
      'Socket near the bed',
      'Cleaning products',
      'Desktop',
      'Living room',
      'Soundproofing',
      'Private entrance',
      'TV',
      'Refrigerator',
      'Coffee maker',
      'Coffee/tea maker',
      'Clothes iron',
      'Heating',
      'Flat screen TV',
      'Mini bar',
      'Electric kettle',
      'Outdoor furniture',
      'Courtyard',
      'Private pool',
      'Wardrobe',
      'Air conditioning in every room of the accommodation',
      'Free Wi-Fi',
    ],
    smokingPolicy: 'No smoking',
    images: [
      '/images/LuxurySuites/589394453.jpg',
      '/images/LuxurySuites/589394469.jpg',
      '/images/LuxurySuites/589394487.jpg',
      '/images/LuxurySuites/589394511.jpg',
      '/images/LuxurySuites/589394526.jpg',
      '/images/LuxurySuites/589394585.jpg',
      '/images/LuxurySuites/589394611.jpg',
      '/images/LuxurySuites/589394632.jpg',
      '/images/LuxurySuites/590740174.jpg',
      '/images/LuxurySuites/590764130.jpg',
      '/images/LuxurySuites/590780018.jpg',
      '/images/LuxurySuites/590781818.jpg',
      '/images/LuxurySuites/590781834.jpg',
      '/images/LuxurySuites/590793102.jpg',
      '/images/LuxurySuites/590793286.jpg',
      '/images/LuxurySuites/758044493.jpg',
    ],
  },
  {
    id: 'deluxe-double-pool-2',
    title: {
      el: '',
      en: 'Deluxe Double or Twin Room with Pool Access',
    },
    size: '25 sq.m.',
    bedSummary: '1 large double bed',
    description: {
      el: '',
      en: 'The pool with a view is a top feature of this twin/double room. The twin/double room features air conditioning, a private entrance, a terrace with garden views as well as a private bathroom boasting a shower. The unit has 1 bed.',
    },
    bathroomAmenities: [
      'Free toiletries',
      'Toilet',
      'Bathtub or shower',
      'Towels',
      'Slippers',
      'Hair dryer',
      'Towels/sheets at extra charge',
      'Toilet paper',
    ],
    viewAmenities: [
      'Garden view',
      'Pool view',
      'View of the inner courtyard',
    ],
    roomAmenities: [
      'Veranda',
      'Air conditioning',
      'Sofa',
      'Linens',
      'Socket near the bed',
      'Cleaning products',
      'Desktop',
      'Living room',
      'Soundproofing',
      'Private entrance',
      'TV',
      'Refrigerator',
      'Coffee maker',
      'Coffee/tea maker',
      'Clothes iron',
      'Heating',
      'Flat screen TV',
      'Mini bar',
      'Electric kettle',
      'Outdoor furniture',
      'Courtyard',
      'Private pool',
      'Wardrobe',
      'Air conditioning in every room of the accommodation',
      'Free Wi-Fi',
    ],
    smokingPolicy: 'No smoking',
    images: [
      '/images/LuxurySuites/589394453.jpg',
      '/images/LuxurySuites/589394469.jpg',
      '/images/LuxurySuites/589394487.jpg',
      '/images/LuxurySuites/589394511.jpg',
      '/images/LuxurySuites/589394526.jpg',
      '/images/LuxurySuites/589394585.jpg',
      '/images/LuxurySuites/589394611.jpg',
      '/images/LuxurySuites/589394632.jpg',
      '/images/LuxurySuites/590740174.jpg',
      '/images/LuxurySuites/590764130.jpg',
      '/images/LuxurySuites/590780018.jpg',
      '/images/LuxurySuites/590781818.jpg',
      '/images/LuxurySuites/590781834.jpg',
      '/images/LuxurySuites/590793102.jpg',
      '/images/LuxurySuites/590793286.jpg',
      '/images/LuxurySuites/758044493.jpg',
    ],
  },
  {
    id: 'deluxe-double-pool-3',
    title: {
      el: '',
      en: 'Deluxe Double or Twin Room with Pool Access',
    },
    size: '25 sq.m.',
    bedSummary: '1 large double bed',
    description: {
      el: '',
      en: 'The pool with a view is a top feature of this twin/double room. The twin/double room features air conditioning, a private entrance, a terrace with garden views as well as a private bathroom boasting a shower. The unit has 1 bed.',
    },
    bathroomAmenities: [
      'Free toiletries',
      'Toilet',
      'Bathtub or shower',
      'Towels',
      'Slippers',
      'Hair dryer',
      'Towels/sheets at extra charge',
      'Toilet paper',
    ],
    viewAmenities: [
      'Garden view',
      'Pool view',
      'View of the inner courtyard',
    ],
    roomAmenities: [
      'Veranda',
      'Air conditioning',
      'Sofa',
      'Linens',
      'Socket near the bed',
      'Cleaning products',
      'Desktop',
      'Living room',
      'Soundproofing',
      'Private entrance',
      'TV',
      'Refrigerator',
      'Coffee maker',
      'Coffee/tea maker',
      'Clothes iron',
      'Heating',
      'Flat screen TV',
      'Mini bar',
      'Electric kettle',
      'Outdoor furniture',
      'Courtyard',
      'Private pool',
      'Wardrobe',
      'Air conditioning in every room of the accommodation',
      'Free Wi-Fi',
    ],
    smokingPolicy: 'No smoking',
    images: [
      '/images/LuxurySuites/589394453.jpg',
      '/images/LuxurySuites/589394469.jpg',
      '/images/LuxurySuites/589394487.jpg',
      '/images/LuxurySuites/589394511.jpg',
      '/images/LuxurySuites/589394526.jpg',
      '/images/LuxurySuites/589394585.jpg',
      '/images/LuxurySuites/589394611.jpg',
      '/images/LuxurySuites/589394632.jpg',
      '/images/LuxurySuites/590740174.jpg',
      '/images/LuxurySuites/590764130.jpg',
      '/images/LuxurySuites/590780018.jpg',
      '/images/LuxurySuites/590781818.jpg',
      '/images/LuxurySuites/590781834.jpg',
      '/images/LuxurySuites/590793102.jpg',
      '/images/LuxurySuites/590793286.jpg',
      '/images/LuxurySuites/758044493.jpg',
    ],
  },
  {
    id: 'deluxe-double-pool-4',
    title: {
      el: '',
      en: 'Deluxe Double or Twin Room with Pool Access',
    },
    size: '25 sq.m.',
    bedSummary: '1 large double bed',
    description: {
      el: '',
      en: 'The pool with a view is a top feature of this twin/double room. The twin/double room features air conditioning, a private entrance, a terrace with garden views as well as a private bathroom boasting a shower. The unit has 1 bed.',
    },
    bathroomAmenities: [
      'Free toiletries',
      'Toilet',
      'Bathtub or shower',
      'Towels',
      'Slippers',
      'Hair dryer',
      'Towels/sheets at extra charge',
      'Toilet paper',
    ],
    viewAmenities: [
      'Garden view',
      'Pool view',
      'View of the inner courtyard',
    ],
    roomAmenities: [
      'Veranda',
      'Air conditioning',
      'Sofa',
      'Linens',
      'Socket near the bed',
      'Cleaning products',
      'Desktop',
      'Living room',
      'Soundproofing',
      'Private entrance',
      'TV',
      'Refrigerator',
      'Coffee maker',
      'Coffee/tea maker',
      'Clothes iron',
      'Heating',
      'Flat screen TV',
      'Mini bar',
      'Electric kettle',
      'Outdoor furniture',
      'Courtyard',
      'Private pool',
      'Wardrobe',
      'Air conditioning in every room of the accommodation',
      'Free Wi-Fi',
    ],
    smokingPolicy: 'No smoking',
    images: [
      '/images/LuxurySuites/589394453.jpg',
      '/images/LuxurySuites/589394469.jpg',
      '/images/LuxurySuites/589394487.jpg',
      '/images/LuxurySuites/589394511.jpg',
      '/images/LuxurySuites/589394526.jpg',
      '/images/LuxurySuites/589394585.jpg',
      '/images/LuxurySuites/589394611.jpg',
      '/images/LuxurySuites/589394632.jpg',
      '/images/LuxurySuites/590740174.jpg',
      '/images/LuxurySuites/590764130.jpg',
      '/images/LuxurySuites/590780018.jpg',
      '/images/LuxurySuites/590781818.jpg',
      '/images/LuxurySuites/590781834.jpg',
      '/images/LuxurySuites/590793102.jpg',
      '/images/LuxurySuites/590793286.jpg',
      '/images/LuxurySuites/758044493.jpg',
    ],
  },
  {
    id: 'premium-quadruple',
    title: {
      el: '',
      en: 'Premium Quadruple Room',
    },
    size: '70 sq.m.',
    bedSummary: '2 double beds',
    description: {
      el: '',
      en: 'A spacious quadruple room ideal for families or groups, combining comfort with generous living space and pool access.',
    },
    bathroomAmenities: [
      'Free toiletries',
      'Toilet',
      'Shower',
      'Towels',
      'Hair dryer',
      'Toilet paper',
    ],
    viewAmenities: ['Garden view', 'Pool view'],
    roomAmenities: [
      'Veranda',
      'Air conditioning',
      'Linens',
      'Socket near the bed',
      'TV',
      'Refrigerator',
      'Coffee maker',
      'Mini bar',
      'Outdoor furniture',
      'Wardrobe',
      'Free Wi-Fi',
    ],
    smokingPolicy: 'No smoking',
    images: [
      '/images/LuxurySuites/589394592.jpg',
      '/images/LuxurySuites/590763477.jpg',
      '/images/LuxurySuites/590773457.jpg',
      '/images/LuxurySuites/590779274.jpg',
      '/images/LuxurySuites/590780018.jpg',
      '/images/LuxurySuites/590793812.jpg',
      '/images/LuxurySuites/590794402.jpg',
      '/images/LuxurySuites/590794482.jpg',
      '/images/LuxurySuites/590794625.jpg',
      '/images/LuxurySuites/725627103.jpg',
      '/images/LuxurySuites/725627179.jpg',
      '/images/LuxurySuites/725627267.jpg',
      '/images/LuxurySuites/725627329.jpg',
      '/images/LuxurySuites/725627447.jpg',
      '/images/LuxurySuites/725627713.jpg',
      '/images/LuxurySuites/725627855.jpg',
      '/images/LuxurySuites/725627962.jpg',
      '/images/LuxurySuites/725629382.jpg',
      '/images/LuxurySuites/725629465.jpg',
      '/images/LuxurySuites/725629599.jpg',
      '/images/LuxurySuites/725629742.jpg',
      '/images/LuxurySuites/725630499.jpg',
    ],
  },
  {
    id: 'standard-apartment',
    title: {
      el: '',
      en: 'Standard Apartment',
    },
    size: '47 sq.m.',
    bedSummary: 'Bedroom: 1 sofa bed and 1 large double bed • Sitting room: 1 sofa bed',
    description: {
      el: '',
      en: 'Featuring a private entrance, this air-conditioned apartment comprises 1 living room, 1 separate bedroom and 1 bathroom with a shower and a hairdryer. Boasting a terrace with garden views, this apartment also provides soundproof walls and a flat-screen TV. The unit offers 3 beds.',
    },
    bathroomAmenities: [
      'Free toiletries',
      'Toilet',
      'Bathtub or shower',
      'Towels',
      'Slippers',
      'Hair dryer',
      'Towels/sheets at extra charge',
      'Toilet paper',
    ],
    viewAmenities: ['Garden view', 'View of the inner courtyard'],
    roomAmenities: [
      'Veranda',
      'Air conditioning',
      'Sofa',
      'Linens',
      'Socket near the bed',
      'Cleaning products',
      'Desktop',
      'Living room',
      'Soundproofing',
      'Private entrance',
      'TV',
      'Refrigerator',
      'Coffee maker',
      'Coffee/tea maker',
      'Clothes iron',
      'Heating',
      'Flat screen TV',
      'Mini bar',
      'Electric kettle',
      'Outdoor furniture',
      'Courtyard',
      'Wardrobe',
      'Air conditioning in every room of the accommodation',
      'Free Wi-Fi',
    ],
    smokingPolicy: 'No smoking',
    images: [
      '/images/LuxurySuites/590440967.jpg',
      '/images/LuxurySuites/590440988.jpg',
      '/images/LuxurySuites/590440995.jpg',
      '/images/LuxurySuites/590441003.jpg',
      '/images/LuxurySuites/590441018.jpg',
      '/images/LuxurySuites/590441039.jpg',
      '/images/LuxurySuites/714733127.jpg',
      '/images/LuxurySuites/714733282.jpg',
      '/images/LuxurySuites/714733856.jpg',
    ],
  },
];
