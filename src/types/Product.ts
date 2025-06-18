export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'gpu' | 'cpu' | 'ram' | 'peripherals' | 'psu' | 'offers';
  brand: string;
  rating: number;
  reviews: number;
  specs: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}