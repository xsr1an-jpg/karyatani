export interface Product {
  name: string;
  desc: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    name: 'Keripik Singkong',
    desc: 'Renyah alami dengan cita rasa tradisional khas nusantara.',
    price: 'Rp 15.000',
    image:
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Keripik Pisang',
    desc: 'Manis gurih dengan tekstur tipis dan crispy.',
    price: 'Rp 18.000',
    image:
      'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Keripik Talas',
    desc: 'Olahan premium dari hasil tani terbaik Indonesia.',
    price: 'Rp 20.000',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Pangsit & Sistik',
    desc: 'Original, bayam, ubi ungu, wortel dan buah naga.',
    price: 'Rp 22.000',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  },
];
