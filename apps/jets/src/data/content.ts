/** Content aligned with https://tfojets.com — local media for reliability */

export const CONTACT = {
  phone: '+354 778 7740',
  phoneHref: 'tel:+3547787740',
  email: 'tfojets@tfojets.com',
  emailHref: 'mailto:tfojets@tfojets.com',
  /** FormSubmit inbox — keep separate from public email while testing */
  formEmail: 'christianjoshuacasin@gmail.com',
  facebook: 'https://www.facebook.com/TFO-JETS-105514605489365',
  site: 'https://tfojets.com',
};

export const IMAGES = {
  hero: '/media/hero.jpg',
  intro: '/media/apron.jpg',
  specialty: '/media/we-can-offer.jpg',
  planning: '/media/g6.jpg',
  crew: '/media/crew-pilots.jpg',
  secondary: '/media/g5.jpg',
  nbaa: '/media/nbaa-member.png',
};

export const OFFERINGS = [
  'Crews for Boeing and Airbus, available to be dispatched within 24hrs',
  'Full ferry service, including all ground and flight operations arrangements',
  'Crew only service for Ferry, delivery and Demo flights',
  'Are you looking at buying a used aircraft?',
  'Are you looking for an Airplane to lease, wet lease or dry lease?',
  'Aviation Consulting service.',
];

export const DO_IT_ALL = ['Ferry and delivery', 'Flight planning', 'All permits', 'Crew'];

/** Explicit bento layout — 4×3 cells, no gaps. area maps to grid-template-areas. */
export const GALLERY_IMAGES = [
  { src: '/media/hero.jpg', alt: 'Jet wing above the clouds at sunrise', area: 'feat' as const },
  { src: '/media/apron.jpg', alt: 'Aircraft on final approach', area: 'tall' as const },
  { src: '/media/boarding.jpg', alt: 'Aircraft boarding on the tarmac', area: 'board' as const },
  { src: '/media/g4.jpg', alt: 'Jet on approach under clear skies', area: 'fly' as const },
  { src: '/media/crew-pilots.jpg', alt: 'TFO Jets flight crew in the cockpit', area: 'crew' as const },
  { src: '/media/g3.jpg', alt: 'Ferry flight overhead', area: 'wide' as const },
  { src: '/media/captain-tarmac.jpg', alt: 'Captain with aircraft on the apron', area: 'cap' as const },
];

export const TEAM = [
  {
    name: 'Tryggvi Forberg',
    role: 'Founder and Chief Pilot',
    email: 'tryggvi@tfojets.com',
    image: '/team/Tryggvi-portrait.jpg',
    bio: '22 years in aviation. EASA, FAA, HK, PNG and CAA. Types flown: B737, 757, 767, A320 and G450. SFI previous experience as a flight instructor at FlightSafety International. Airline and business aviation crew.',
  },
  {
    name: 'Bjarni Petur Hafliðason',
    role: 'Operation Manager',
    email: 'petur@tfojets.com',
    image: '/team/Bjarni-2-200x300.jpg',
    bio: 'BS degree in Aviation Management from the Florida Institute of Technology and Executive MBA at Reykjavík University. More than 30 years experience in the aviation industry, ranging from clerical duties to post-holder Flight Operations Manager responsibilities.',
  },
];

export const STATS = [
  { value: '30+', label: 'Years worldwide' },
  { value: '24h', label: 'Crew dispatch' },
  { value: 'Global', label: 'Ferry network' },
];
