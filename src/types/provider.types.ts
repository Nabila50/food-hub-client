export type ProviderType = {
  id: string;
  companyName: string;
  role: string;
  userId: string;
  user: UserType;
  menus: MenuType[];
};

export interface UserType {
  id: string;
  name: string;
  email: string;
  role: number;
  image: string;
  phone: string;
  status: string;
}

export type MenuType = {
  id: string;
  title: string;
  description?: string;
  price?: number;
  image?: string;
};
