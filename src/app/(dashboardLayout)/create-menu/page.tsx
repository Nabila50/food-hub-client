import CreateMenuFormServer from "@/components/modules/provider/createMenu/CreateMenuFormServer";
import { menuService } from "@/services/menu.service";
// import { FoodList, FoodMenu } from '../../../../../types/menu.type';
import { CreateMenuFormClient } from "@/components/modules/provider/createMenu/CreateMenuFormClient";
import { FoodMenu } from "@/types";

 
 
 export default async function CreateMenuPage() {

  const { data, error } = await menuService.getFoodMenu(undefined, {
  cache: "no-store",
});

if (error) {
  return <p>Failed to load menu.</p>;
}

const menus: FoodMenu[] = Array.isArray(data) ? data : [];

return (
  <>
    <CreateMenuFormClient/>
    {menus.map((item: FoodMenu) => (
      <p key={item.id}>{item.title}</p>
    ))}
  </>
);

// (
//   <>
//   <CreateMenuFormClient>
//     {menus.map((item: FoodMenu) => (
//       <p key={item.id}>{item.title}</p>
//     ))}
//     </CreateMenuFormClient> 
//   </>
// );
 }
 