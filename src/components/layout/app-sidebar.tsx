import * as React from "react"

import { SearchForm } from "@/components/layout/search-form"
import { VersionSwitcher } from "@/components/layout/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { adminRoutes } from "@/routes/adminRoutes";
import { customerRoutes } from "@/routes/customerRoutes";
import { providerRoutes } from "@/routes/providerRoutes";
import { Route } from "@/types";
import { Roles } from "@/constants/roles";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "LogIn Dashboard",
      url: "/dashboard",
      items: [
         {
          title: "Home",
          url: "/",
        },
        {
          title: "Admin Dashboard",
          url: "/admin-dashboard",
        },
        {
          title: "Customer Dashboard",
          url: "/customer-dashboard",
        },
        {
          title: "Provider Dashboard",
          url: "/provider-dashboard",
        },
      ],
    },
     
    
  ],
}

export function AppSidebar({user, ...props }:{user: {role: string} & React.ComponentProps<typeof Sidebar>}) {

  let routes : Route[] = [];
  switch (user.role) {
    case Roles.admin:
      routes = adminRoutes;
      break;
    
    case Roles.customer:
      routes = customerRoutes;
      break;
    
    case Roles.provider:
      routes = providerRoutes;
      break
  
    default:
      routes = [];
      break;
  }

  return (
    <Sidebar {...props}>
   
   
      <SidebarContent className="bg-lime-200 pt-10 font-semibold">
 
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
