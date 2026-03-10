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

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: 'Royella', en: 'Royella' },
  description: { el: 'Ξενοδοχείο και Resort', en: 'Hotel and Resort' },
  language: 'en',
  keywords: { el: 'ξενοδοχείο, resort', en: 'hotel, resort' },
  ogImage: '/images/home-1/hero-bg.jpg',
  canonical: '',
};

export const preloaderConfig: PreloaderConfig = {
  brandName: { el: 'Royella', en: 'Royella' },
  brandSubname: { el: 'Hotel & Resort', en: 'Hotel & Resort' },
  yearText: { el: '2024', en: '2024' },
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
  mobileLogo: '/images/inner/AdytonLogo.png',
  altLogo: { el: 'Λογότυπο ιστοσελίδας', en: 'Website logo' },
  altMobileLogo: { el: 'Λογότυπο Royella', en: 'Royella website logo' },
  home: { el: 'Home', en: 'Home' },
  homeHotel: { el: 'Κρατήσεις Ξενοδοχείου', en: 'Hotel Booking' },
  homeResort: { el: 'Resort', en: 'Resort' },
  homeHostel: { el: 'Hostel', en: 'Hostel' },
  homeCityHotel: { el: 'City Hotel', en: 'City Hotel' },
  homeApartment: { el: 'Διαμέρισμα', en: 'Apartment' },
  about: { el: 'About', en: 'About' },
  rooms: { el: 'Rooms', en: 'Rooms' },
  room: { el: 'Δωμάτιο', en: 'Room' },
  findRoom: { el: 'Εύρεση Δωματίου', en: 'Find Room' },
  roomDetails: { el: 'Λεπτομέρειες Δωματίου', en: 'Room Details' },
  page: { el: 'Services', en: 'Services' },
  aboutUs: { el: 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ', en: 'ABOUT US' },
  service: { el: 'ΥΠΗΡΕΣΙΕΣ', en: 'SERVICE' },
  serviceDetails: { el: 'ΛΕΠΤΟΜΕΡΕΙΕΣ ΥΠΗΡΕΣΙΩΝ', en: 'SERVICE DETAILS' },
  ourTeam: { el: 'Η ΟΜΑΔΑ ΜΑΣ', en: 'OUR TEAM' },
  pricing: { el: 'ΤΙΜΕΣ', en: 'PRICING' },
  blog: { el: 'BLOG', en: 'BLOG' },
  blogDetails: { el: 'ΛΕΠΤΟΜΕΡΕΙΕΣ BLOG', en: 'BLOG DETAILS' },
  contact: { el: 'Contact', en: 'Contact' },
  bookingBtn: { el: 'Book Online', en: 'Book Online' },
  lightModeTitle: { el: 'Εφαρμογή Φωτεινής Λειτουργίας', en: 'Apply Light Mode' },
  darkModeTitle: { el: 'Εφαρμογή Σκοτεινής Λειτουργίας', en: 'Apply Dark Mode' },
};

export const footerConfig: FooterConfig = {
  logo: '/images/home-1/logo-1.png',
  galleryImages: [
    '/images/home-1/gallery-1.jpg',
    '/images/home-1/gallery-2.jpg',
    '/images/home-1/gallery-3.jpg',
    '/images/home-1/gallery-4.jpg',
    '/images/home-1/gallery-5.jpg',
    '/images/home-1/gallery-6.jpg',
  ],
  contactTitle: { el: 'ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ', en: 'CONTACT INFO' },
  phone: '+980 (1234) 567 220',
  email: 'example@yahoo.com',
  address: { el: '102/B New Elephant Rd Dhaka - 1212', en: '102/B New Elephant Rd Dhaka - 1212' },
  linksTitle: { el: 'Χρήσιμοι Σύνδεσμοι', en: 'UseFul Links' },
  linkAbout: { el: 'Σχετικά με το Ξενοδοχείο', en: 'About Hotel' },
  linkRooms: { el: 'Δωμάτια & Suites', en: 'Rooms & Suites' },
  linkReservations: { el: 'Κρατήσεις', en: 'Reservations' },
  linkNews: { el: 'Νέα & Blog', en: 'News & Blogs' },
  linkContact: { el: 'Επικοινωνία', en: 'Contact Us' },
  galleryTitle: { el: 'ΣΥΛΛΟΓΗ', en: 'GALLERY' },
  newsletterTitle: { el: 'NEWSLETTER', en: 'NEWSLETTER' },
  newsletterDesc: { el: 'Εγγραφείτε στο Newsletter μας', en: 'Subscribe our Newsletter' },
  emailPlaceholder: { el: 'Εισάγετε Email', en: 'Enter Email' },
  subscribeBtn: { el: 'Εγγραφή Τώρα', en: 'Subscribe Now' },
  copyrightPrefix: { el: 'Royella. Με επιφύλαξη παντός δικαιώματος.', en: 'Royella. All Rights Reserved.' },
};

export const heroConfig: HeroConfig = {
  bgImage1: '/images/mykonos-hero.jpg',
  bgImage2: '/images/villa-pool.jpg',
  bgImage3: '/images/villa-terrace.jpg',
  subtitle: { el: 'ΞΕΝΟΔΟΧΕΙΟ LUXURY ΚΑΙ RESORT', en: 'LUXURY HOTEL AND RESORT' },
  mainTitle: { el: 'ΤΟ ΚΑΛΥΤΕΡΟ ΞΕΝΟΔΟΧΕΙΟ LUXURY', en: 'THE BEST LUXURY HOTEL' },
  location1: { el: 'ΣΤΗΝ CALIFORNIA', en: 'IN CALIFORNIA' },
  location2: { el: 'ΣΤΟ KASHMIR', en: 'IN KASHMIR' },
  location3: { el: 'ΣΤΟ COLOSSEUM', en: 'IN COLOSSEUM' },
  location4: { el: 'ΣΤΗΝ SRILANKA', en: 'IN SRILANKA' },
  ctaButton: { el: 'Ανακαλύψτε Περισσότερα', en: 'Discover More' },
  phone: '+980 123 4567 890',
};

export const roomsConfig: RoomsConfig = {
  sectionLogo: '/images/home-1/section-shape1.png',
  bgShape: '/images/home-1/section-shape2.png',
  roomImage1: '/images/home-1/room-1.jpg',
  roomImage2: '/images/home-1/room-2.jpg',
  roomImage3: '/images/home-1/room-3.jpg',
  roomIcon: '/images/home-1/room-bottom-icon.png',
  checkInLabel: { el: 'Άφιξη', en: 'Check In' },
  checkOutLabel: { el: 'Αναχώρηση', en: 'Check Out' },
  roomsLabel: { el: 'Δωμάτια', en: 'Rooms' },
  guestsLabel: { el: 'Επισκέπτες', en: 'Guests' },
  childLabel: { el: 'Παιδί', en: 'Child' },
  checkoutBtn: { el: 'Κράτηση Τώρα', en: 'Checkout Now' },
  sectionTitle: { el: 'Δωμάτια & Suites της Royella', en: "Royella's Rooms & Suites" },
  sectionDesc: { el: 'Proactively morph optimal infomediaries...', en: 'Proactively morph optimal infomediaries...' },
  viewDetailsBtn: { el: 'Λεπτομέρειες', en: 'View Details' },
  nightLabel: { el: 'Νύχτα', en: 'Night' },
  roomType: { el: 'Δωμάτιο Luxury', en: 'Luxury Room' },
  room1: { el: 'Δίκλινα Suite', en: 'Double Suite Rooms' },
  room2: { el: 'Οικογενειακά Δωμάτια Deluxe', en: 'Delux Family Rooms' },
  room3: { el: 'Δωμάτια με Κορυφαίο Κρεβάτι', en: 'Suprior Bed Rooms' },
  sqft: { el: '1500 Τ.ΠΟΔ./Δωμάτια', en: '1500 SQ.FT/Rooms' },
  bedConfig: { el: '2 King Bed', en: '2 King Bed' },
};

export const facilitiesConfig: FacilitiesConfig = {
  image1: '/images/home-1/facilities-1.png',
  image2: '/images/home-1/facilities-thumb-2.jpg',
  image3: '/images/home-1/facilities-thumb-3.jpg',
  image4: '/images/home-1/facilities-thumb-4.jpg',
  sectionLabel: { el: 'ΕΓΚΑΤΑΣΤΑΣΕΙΣ', en: 'FACILITIES' },
  title: { el: 'ΑΠΟΛΑΎΣΤΕ ΠΛΗΡΕΣ & ΚΑΛΗ ΠΟΙΟΤΗΤΑ ΕΓΚΑΤΑΣΤΑΣΕΩΝ', en: 'ENJOY COMPLETE & BEST QUALITY FACILITIES' },
  viewMoreBtn: { el: 'περισσότερα', en: 'view more item' },
  fitnessLabel: { el: 'Γυμναστήριο', en: 'Fitness' },
  service1: { el: 'Γυμναστήριο και Περιοχή Προπόνησης', en: 'Gym Training Grounds' },
  service2: { el: 'Κλειστή Πισίνα', en: 'Indoor Swimming Pool' },
  foodsLabel: { el: 'ΤΡΟΦΕΣ', en: 'FOODS' },
  service3: { el: 'Το Κέντρο Εστιατορίου', en: 'The Restaurant Center' },
  experienceLabel: { el: 'ΕΜΠΕΙΡΙΑ', en: 'EXPERIENCE' },
  description: { el: 'Rapidiously myocardinate cross-platform intellectual capital...', en: 'Rapidiously myocardinate cross-platform intellectual capital...' },
};

export const hotelAndResortConfig: HotelAndResortConfig = {
  sliderImage1: '/images/home-1/Hotel1.jpg',
  sliderImage2: '/images/home-1/Hotel.png',
  subtitle: { el: 'ΞΕΝΟΔΟΧΕΙΟ LUXURY ΚΑΙ RESORT', en: 'LUXURY HOTEL AND RESORT' },
  title: { el: 'ΚΑΛΥΤΕΡΟ ΞΕΝΟΔΟΧΕΙΟ LUXURY ΣΤΗΝ ΠΟΛΗ CALIFORNIA, USA', en: 'LUXURY BEST HOTEL IN CITY CALIFORNIA, USA' },
  description: { el: 'Rapidiously myocardinate cross-platform...', en: 'Rapidiously myocardinate cross-platform...' },
  roomsCountLabel: { el: 'Δωμάτια Luxury', en: 'Luxury Rooms' },
  ratingsLabel: { el: 'Βαθμολογίες Πελατών', en: 'Customer Ratings' },
  ctaBtn: { el: 'Περισσότερα', en: 'More About' },
};

export const hotelAndFacilitiesConfig: HotelAndFacilitiesConfig = {
  sectionLogo: '/images/home-1/section-shape1.png',
  bgShape: '/images/home-1/section-shape2.png',
  feature1: '/images/home-1/feature-1.png',
  feature2: '/images/home-1/feature-2.png',
  feature3: '/images/home-1/feature-3.png',
  feature4: '/images/home-1/feature-4.png',
  feature5: '/images/home-1/feature-5.png',
  hoverImage: '/images/home-1/feature-imgs-1.jpg',
  title: { el: "ΕΓΚΑΤΑΣΤΑΣΕΙΣ ΞΕΝΟΔΟΧΕΙΟΥ", en: "HOTEL'S FACILITIES" },
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
  title: { el: 'ΚΑΛΥΤΕΡΟ ΞΕΝΟΔΟΧΕΙΟ LUXURY ΣΤΗΝ ΠΟΛΗ CALIFORNIA, USA', en: 'LUXURY BEST HOTEL IN CITY CALIFORNIA, USA' },
  description: { el: 'Rapidiously myocardinate cross-platform...', en: 'Rapidiously myocardinate cross-platform...' },
  authorName: { el: 'John D. Alexon', en: 'John D. Alexon' },
  authorRole: { el: 'Διευθυντής', en: 'Manger' },
};

export const offersConfig: OffersConfig = {
  offer1: '/images/home-1/offers-1.jpg',
  offer2: '/images/home-1/offers-2.jpg',
  offer3: '/images/home-1/offers-3.jpg',
  offer4: '/images/home-1/offers-4.jpg',
  sectionLabel: { el: 'ΠΡΟΣΦΟΡΕΣ', en: 'OFFERS' },
  title: { el: "ΚΑΛΥΤΕΡΕΣ ΠΡΟΣΦΟΡΕΣ ΠΕΠΕΡΑΣΜΕΝΗΣ ΠΕΡΙΟΔΟΥ ΤΗΣ ROYELLA", en: "ROYELLA'S LIMITED PERIOD BEST OFFERS" },
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
  title: { el: "Μαρτυρία Πελάτη", en: "Ustomer's TestimonialL" },
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
  blogImage1: '/images/home-1/blog-1.jpg',
  blogImage2: '/images/home-1/blog-2.jpg',
  blogImage3: '/images/home-1/blog-3.jpg',
  title: { el: 'ΤΕΛΕΥΤΑΙΑ ΑΡΘΡΑ ΑΠΟ TO BLOG', en: 'LATEST POST FROM BLOG' },
  description: { el: 'Proactively morph optimal infomediaries...', en: 'Proactively morph optimal infomediaries...' },
  date: { el: '10 Αυγούστου 2023', en: 'August 10, 2023' },
  category: { el: 'Εσωτερική Διακόσμηση', en: 'Interior' },
  postTitle: { el: 'Ξενοδοχείο Luxury για Ταξίδια USA, California', en: 'Luxury Hotel for Traveling Spot USA, California' },
  readMoreBtn: { el: 'Διαβάστε Περισσότερα', en: 'Read More' },
};

export const brandConfig: BrandConfig = {
  brand1: '/images/inner/AdytonLogo.png',
  brand2: '/images/inner/AdytonLogo.png',
  brand3: '/images/inner/AdytonLogo.png',
};
