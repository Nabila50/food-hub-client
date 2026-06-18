import CreateMenuFormServer from "@/components/modules/provider/createMenu/CreateMenuFormServer";
import { menuService } from "@/services/menu.service";
import { FoodList, FoodMenu } from '../../../../../types/menu.type';
import { CreateMenuFormClient } from "@/components/modules/provider/createMenu/CreateMenuFormClient";

 
 
 export default async function CreateMenuPage() {

  const {data} = await menuService.getFoodMenu({}, {cache: "no-store"});


   return (
     <div>
      {/* <CreateMenuFormServer/> */}
      <CreateMenuFormClient/>
      {data.map((item: FoodMenu) => (
        <p key={item.id} >{item.title}</p>
      ))}
        
      
      {/* </CreateMenuFormServer> */}

     
     </div>
   )
 }
 