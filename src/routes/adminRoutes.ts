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
        url: "/admin-dashboard/adminprofile",
      },
      {
        title: "Menu",
        url: "/admin-dashboard/menu",
      },
      {
        title: "Order Info",
        url: "/admin-dashboard/orderinfo",
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
