import { Route } from "@/types";

export const adminRoutes: Route[] = [
  {
    title: "Admin Panel",
    items: [
      {
        title: "Profile",
        url: "/profile",
      },
      {
        title: "Menu Management",
        url: "/create-menu",
      },
      {
        title: "History of Menus",
        url: "/menu-history"
      },
      {
        title: "Order Info",
        url: "/order",
      },

      {
        title: "Customer Information",
        url: "/customer-info",
      },
      {
        title: "Providers Information",
        url: "/providers",
      },
      {
        title: "Home",
        url: "/",
      },
    ],
  },
];
