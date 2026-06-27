export interface FoodMenu {
  id: string | number;
  title: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  providerId: string;
  image: string;
  menuItem: MenuItemType[];
}

export interface FoodList{
    id: string | number;
    name: string,
    description: string
}

export interface ReviewType {
  id: string;
  rating: number;
  comment?: string | null;
}


export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  isFeatured: boolean;
  image: string;
  reviews: ReviewType[];
}

export interface DetailedMenuType {
  id: string;
  title: string;
  isAvailable: boolean;
  image?: string | null;
  menuItem: MenuItemType[]; // This includes the list of individual foods
}