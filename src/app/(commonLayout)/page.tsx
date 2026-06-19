import BannerCarousel from "@/components/modules/homepage/BannerCarousel";
import MenuCard from "@/components/modules/homepage/menucard/MenuCard";
// import MenuCard from "@/components/modules/homepage/MenuCard";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { authClient } from "@/lib/auth-client";
import { menuService } from "@/services/menu.service";
import { userService } from "@/services/user.service";
import { FoodMenu } from "@/types";
import { cookies } from "next/headers";

export default async function Home() {
  const { data } = await menuService.getFoodMenu();

  return (
    <div>
      <BannerCarousel></BannerCarousel>
      <div className="grid gap-5 grid-cols-3 mt-50">
        {data?.map((menu: FoodMenu) => (
          <MenuCard key={menu.id} menu={menu}></MenuCard>
        ))}
      </div>
    </div>
  );
}
