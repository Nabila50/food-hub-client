import { Route } from "@/types";

export const providerRoutes : Route[] = [
    {
      title: "Provider Info",
      items: [
         {
          title: "Home",
          url: "/",
        },
        {
          title: "Profile",
          url: "/provider-dashboard/provider-profile",
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
          title: "Order Status",
          url: "/orderstatus",
        }      
         
      ]
    }
]