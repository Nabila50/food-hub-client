import MenuCard from "@/components/modules/homepage/MenuCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { menuService } from "@/services/menu.service";
import { userService } from "@/services/user.service";
import { FoodMenu } from "@/types";
import { cookies } from "next/headers";

export default async function Home() {
  const { data } = await menuService.getFoodMenu(
    {
    isAvailable: true,
    // search: "uigzghjk",
  },{
   
   cache: "no-store",

  }
);
  console.log("data is here from home page: ", data)
  return (
    
      <div className="grid gap-5 grid-cols-3">
        {data?.map((menu: FoodMenu) => (
          <MenuCard key={menu.id} menu={menu}></MenuCard>
        ))}
      </div>

  );
}
