export type OrderType = {
  id: string;
  totalPrice: number;
  customerId: string;
  createdAt: string;
 customer: CustomerType;

  orderItems: OrderItemType[];

  status: string;


};

export interface OrderMenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  isFeatured: boolean;
  image: string;
}
export interface OrderItemType {
  id: string;
  quantity: number;
  price: number;
  menuItem: OrderMenuItemType;
}

const statusOptions = [
  "PENDING",
  "PREPARING",
  "ONWAY",
  "DELIVERED",
  "CANCELLED",
];

export interface CustomerType {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string
}