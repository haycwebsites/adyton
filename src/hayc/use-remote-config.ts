import {
  siteConfig,
  preloaderConfig,
  scrollToTopConfig,
  mainConfig,
  navConfig,
  footerConfig,
  heroConfig,
  roomsConfig,
  facilitiesConfig,
  hotelAndResortConfig,
  hotelAndFacilitiesConfig,
  actionConfig,
  offersConfig,
  testimonialConfig,
  latestBlogConfig,
  brandConfig,
  contactConfig,
  errorPageConfig,
  faqConfig,
  breadCrumbConfig,
  roomTypesConfig,
  digitalProductsConfig,
  type DigitalProductsConfig,
} from '../config';

export interface RemoteConfig {
  version: number;
  exportedAt: string;
  siteConfig: typeof siteConfig;
  preloaderConfig: typeof preloaderConfig;
  scrollToTopConfig: typeof scrollToTopConfig;
  mainConfig: typeof mainConfig;
  navConfig: typeof navConfig;
  footerConfig: typeof footerConfig;
  heroConfig: typeof heroConfig;
  roomsConfig: typeof roomsConfig;
  facilitiesConfig: typeof facilitiesConfig;
  hotelAndResortConfig: typeof hotelAndResortConfig;
  hotelAndFacilitiesConfig: typeof hotelAndFacilitiesConfig;
  actionConfig: typeof actionConfig;
  offersConfig: typeof offersConfig;
  testimonialConfig: typeof testimonialConfig;
  latestBlogConfig: typeof latestBlogConfig;
  brandConfig: typeof brandConfig;
  contactConfig: typeof contactConfig;
  errorPageConfig: typeof errorPageConfig;
  faqConfig: typeof faqConfig;
  breadCrumbConfig: typeof breadCrumbConfig;
  roomTypesConfig: typeof roomTypesConfig;
  digitalProductsConfig?: DigitalProductsConfig;
}

export const defaultConfig: RemoteConfig = {
  version: 1,
  exportedAt: '',
  siteConfig,
  preloaderConfig,
  scrollToTopConfig,
  mainConfig,
  navConfig,
  footerConfig,
  heroConfig,
  roomsConfig,
  facilitiesConfig,
  hotelAndResortConfig,
  hotelAndFacilitiesConfig,
  actionConfig,
  offersConfig,
  testimonialConfig,
  latestBlogConfig,
  brandConfig,
  contactConfig,
  errorPageConfig,
  faqConfig,
  breadCrumbConfig,
  roomTypesConfig,
  digitalProductsConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  if (import.meta.env.DEV) {
    return defaultConfig;
  }
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = await res.json();
    return data as RemoteConfig;
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}
