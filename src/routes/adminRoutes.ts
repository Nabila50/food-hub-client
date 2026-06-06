import { Route } from "@/types";

export const adminRoutes : Route[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Profile",
        url: "/profile",
      },
      {
        title: "Menu",
        url: "/menu",
      },
      {
        title: "Order Info",
        url: "/order",
      },

      {
        title: "Customer Dashboar",
        url: "/customer-dashboard",
      },
      {
        title: "Provider Dashboar",
        url: "/provider-dashboard",
      },
    ],
  },
];
