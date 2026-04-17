export type ProductRating = {
  rate: number;
  count: number;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  author: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  coursesInProduct: number;
  courseHoursInProduct: number;
  rating: ProductRating;
};
