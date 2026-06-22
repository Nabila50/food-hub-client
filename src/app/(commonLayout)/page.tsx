// import BannerCarousel from "@/components/modules/homepage/BannerCarousel/BannerCarousel";
import BannerCarousel from "@/components/modules/homepage/bannercarousel/BannerCarousel";
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
    <div className="place-items-center">
      <img className="w-7xl h-100 rounded-b-lg" src="https://i.ibb.co/s9ysCx7h/soups-2.jpg" alt="" />
 
      <div className="grid grid-cols-3 mt-10 justify-evenly gap-10  w-7xl">
        {data?.map((menu: FoodMenu) => (
          <MenuCard key={menu.id} menu={menu}></MenuCard>
        ))}
      </div>
    </div>
  );
}
