import { Route } from "@/types";

export const adminRoutes: Route[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Profile",
        url: "/profile",
      },
      {
        title: "Menu Management",
        url: "/admin-dashboard/createmenu",
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
      {
        title: "Home",
        url: "/",
      },
    ],
  },
];
