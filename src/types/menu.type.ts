export interface FoodMenu {
    id: string | number;
    title: string,
    isAvailable: boolean,
    createdAt: string,
    updatedAt: string,
    providerId: string,
    image: string
}

export interface FoodList{
    id: string | number;
    name: string,
    description: string
}


export interface MenuItemType {
  id: string;
  name: string | null;
  description: string;
  price: number;
  isAvailable: boolean;
  isFeatured: boolean;
  image?: string | null;
}

export interface DetailedMenuType {
  id: string;
  title: string;
  isAvailable: boolean;
  image?: string | null;
  menuItem: MenuItemType[]; // This includes the list of individual foods
}