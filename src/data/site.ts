// Contact details and navigation shared by every page.
export const site = {
  name: 'AR Horses',
  legalName: 'AR Horses BV',
  tagline: 'From Foal to Future.',
  street: 'Lotsweg 13',
  city: 'Den Hoorn',
  email: 'info@arhorses.com',
  phone: '+31 6 4572 0399',
  instagram: 'https://www.instagram.com/ar.horses',
  instagramHandle: '@ar.horses',
};

// Tracking IDs. While an ID is empty, that tracker is not loaded at all.
export const tracking = {
  // Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'.
  gaMeasurementId: '',
  // Meta (Facebook/Instagram) Pixel ID, e.g. '1234567890123456'.
  metaPixelId: '',
};

export const nav = [
  { label: 'Paarden', href: '/#paarden' },
  { label: 'Over ons', href: '/over-ons/' },
  { label: 'Opfokproces', href: '/opfokproces/' },
  { label: 'Instagram', href: site.instagram },
];
