export interface ProductOwner {
  name: string;
  address: string;
  phone: string;
  taxCode: string;
  email: string;
}

export interface Product {
  name: string;
  price: string;
  barcode: string;
  country: string;
  images: string[];
  owner: ProductOwner;
}

export interface ProductApiResponse {
  success: boolean;
  message?: string;
  data?: Product;
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}
