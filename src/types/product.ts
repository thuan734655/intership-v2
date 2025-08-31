export interface ProductOwner {
  name: string;
  address: string;
  phone: string;
  taxCode: string;
  email: string;
}

export interface Product {
  id?: string;
  name: string;
  price: string;
  barcode: string;
  country: string;
  images: string[];
  owner: ProductOwner;
  comments?: ProductComment[];
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

export interface ProductComment {
  id: string;
  productId: string;
  content: string;
  imageUrl: string;
  createdAt: string; // ISO string
}
