import { Route } from "@/types";

export const customerRoutes : Route[] = [
    {
      title: "Customer Info",
      items: [
        
        {
          title: "Profile",
          url: "/profile",
        },
        {
          title: "Menu",
          url: "/menu",
        },
        {
          title: "Order Status",
          url: "/order",
        },
        {
          title: "Order Cancle",
          url: "/customer-dashboard/ordercancle",
        },
         {
          title: "Home",
          url: "/",
        },
        
         
      ]
    }
]