import { Product, CustomerReview } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'NVIDIA GeForce RTX 4080 SUPER',
    price: 899999,
    originalPrice: 1099999,
    image:
      'https://s3-sa-east-1.amazonaws.com/saasargentina/BXSuN5TtqTyvJNSbe0hy/imagen',
    category: 'gpu',
    brand: 'NVIDIA',
    rating: 4.8,
    reviews: 156,
    specs: ['16GB GDDR6X', 'DLSS 3', 'Ray Tracing', 'PCI Express 4.0'],
    inStock: true,
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'AMD Ryzen 9 7900X',
    price: 549999,
    originalPrice: 649999,
    image:
      'https://www.deffo.com.ar/wp-content/uploads/2023/04/Ryzen-9-Series-7000-X-fb.jpg',
    category: 'cpu',
    brand: 'AMD',
    rating: 4.9,
    reviews: 203,
    specs: ['12 Cores', '24 Threads', '4.7GHz Base', 'AM5 Socket'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Corsair Vengeance RGB Pro 32GB',
    price: 189999,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_647640-MLU74728877246_032024-O.webp',
    category: 'ram',
    brand: 'Corsair',
    rating: 4.7,
    reviews: 89,
    specs: ['DDR4-3200', 'RGB Lighting', '32GB Kit', 'Low Profile'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Corsair RM850x 850W 80+ Gold',
    price: 159999,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-kz5NwKPz3V5f9dY0ETW6R8N2qWvToHsOg&s',
    category: 'psu',
    brand: 'Corsair',
    rating: 4.8,
    reviews: 124,
    specs: ['850W', '80+ Gold', 'Modular', '10 Year Warranty'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Razer DeathAdder V3 Pro',
    price: 79999,
    originalPrice: 99999,
    image:
      'https://static.nb.com.ar/i/nb_MOUSE-GAMER-RAZER-DEATHADDER-V3-PRO_ver_498ae0514ceac260481dee9612fe53af.png',
    category: 'peripherals',
    brand: 'Razer',
    rating: 4.6,
    reviews: 67,
    specs: ['30K DPI', 'Wireless', '90h Battery', 'Ergonomic'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Intel Core i7-13700K',
    price: 399999,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yTCQkQggHuhC8ifVQd4wW43QPCZMxgpmIA&s',
    category: 'cpu',
    brand: 'Intel',
    rating: 4.5,
    reviews: 178,
    specs: ['16 Cores', '24 Threads', '3.4GHz Base', 'LGA1700'],
    inStock: true,
  },
];

export const customerReviews: CustomerReview[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    rating: 5,
    comment:
      'Excelente servicio y productos de calidad. La RTX 4080 que compré funciona perfectamente para gaming en 4K.',
    date: '2024-01-15',
    verified: true,
  },
  {
    id: '2',
    name: 'Ana García',
    rating: 5,
    comment:
      'Muy buena atención al cliente. El envío fue rápido y el producto llegó en perfectas condiciones.',
    date: '2024-01-10',
    verified: true,
  },
  {
    id: '3',
    name: 'Miguel Torres',
    rating: 4,
    comment:
      'Precios competitivos y buena variedad de productos. Recomiendo MaxiHard para compras de hardware.',
    date: '2024-01-08',
    verified: true,
  },
];
