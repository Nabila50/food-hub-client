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
          url: "/provider-dashboard/profile",
        },
        {
          title: "Menu Management",
          url: "/provider-dashboard/createmenu",
        },
         {
          title: "Food List Management",
          url: "/provider-dashboard/foodlist",
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