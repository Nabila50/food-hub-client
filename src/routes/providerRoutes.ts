import { Route } from "@/types";

export const providerRoutes : Route[] = [
    {
      title: "Provider Info",
      items: [
         
        {
          title: "Profile",
          url: "/profile",
        },
        {
          title: "Menu Management",
          url: "/provider-dashboard/createmenu",
        },
         {
          title: "Menu History",
          url: "/provider-dashboard/menu-history",
        },
        {
          title: "Customer Info",
          url: "/customerinfo",
        },
        {
          title: "Customer Order Status",
          url: "/order",
        },
        {
          title: "Home",
          url: "/",
        },
         
      ]
    }
]