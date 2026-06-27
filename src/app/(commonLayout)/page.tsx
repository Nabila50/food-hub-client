import { AccordionHome } from "@/components/modules/homepage/accordion/Accordion";
import FooterPage from "@/components/modules/homepage/footer/Footer";
import MenuCard from "@/components/modules/homepage/menucard/MenuCard";

import { menuService } from "@/services/menu.service";

import { FoodMenu } from "@/types";
import { MenuData } from "../../services/menu.service";

export default async function Home() {
  // const featuredMenu = await menuService.getFoodMenu({menuItem?.isFeatured: true});
  const { data } = await menuService.getFoodMenu();
  const featuredMenu = data.filter((menu: MenuData) =>
    menu.menuItem.some((item) => item.isFeatured),
  );

  return (
    <div className="place-items-center">
      {/* Banner Image */}
      <div className="relative w-7xl h-100">
        <img
          className="w-full h-full rounded-b-lg object-cover"
          src="https://i.ibb.co/Z67kx8Zw/resturant-pic.jpg"
          alt="Restaurant"
        />

        <div className="absolute inset-0 rounded-b-lg bg-black/30"></div>

        <div className="absolute inset-0 align-middle place-items-center mt-35">
          <h1 className="text-5xl md:text-7xl font-serif italic text-white tracking-wide">
            Welcome to Our Restaurant
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Where Every Meal Becomes a Memorable Experience
          </p>
        </div>
      </div>
      {/* //* Featured MenuCard */}
      {featuredMenu.length > 0 && (
        <div className="mb-12">
          <h2 className={"text-2xl font-bold mb-6 mt-10 text-gray-700"}>
            Featured Menus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredMenu.slice(0, 2).map((menu: MenuData) => (
              <div key={menu.id} className="border rounded-lg overflow-hidden">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{menu.title}</h3>
                  <p className="text-gray-600  line-clamp-2">
                    {menu.menuItem[0]?.description}
                  </p>
                </div>
              </div>
            ))}
            {/* 
            {featuredMenu.slice(0, 2).map((menu: MenuData) => (
              <div key={menu.id}>
                <h3>{menu.title}</h3>

                {menu.menuItem
                  .filter((item) => item.isFeatured)
                  .map((item) => (
                    <p key={item.id}>{item.description}</p>
                  ))}
              </div>
            ))} */}
          </div>
        </div>
      )}

      <h2
        className={
          "text-2xl font-bold mb-6 mt-10 place-items-start text-gray-700"
        }
      >
        All Menus
      </h2>
      <div className="grid grid-cols-3 mt-10 justify-evenly gap-5 w-6xl mb-10">
        {data?.map((menu: FoodMenu) => (
          <MenuCard key={menu.id} menu={menu}></MenuCard>
        ))}
      </div>
      <AccordionHome></AccordionHome>
      <FooterPage></FooterPage>
    </div>
  );
}
