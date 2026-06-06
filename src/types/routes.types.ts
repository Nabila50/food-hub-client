 

export const adminRoutes = [
    {
      title: "User Management",
      url: "/dashboard",
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
          title: "Order Info",
          url: "/order",
        },
        {
          title: "Menu",
          url: "/menu",
        },
        {
          title: "Customer Dashboar",
          url: "/customer-dashboard",
        },
        {
          title: "Provider Dashboar",
          url: "/provider-dashboard",
        },
      ]
    }
]


export interface Route{
    title: string
    items:{
        title: string;
        url: string
    }[];
}