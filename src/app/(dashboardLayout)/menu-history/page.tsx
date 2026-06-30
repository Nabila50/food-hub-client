import MenuHistoryTable from "@/components/modules/provider/history/MenuHistoryTable";
import { menuService } from "@/services/menu.service";

export default async function MenuListHistory() {

  const res = await menuService.getFoodMenu({page:"3"});

  console.log("response from history", res)
  const menus = res.data || [];
  console.log(menus)

  return (
    <div>
      <h1 className="text-2xl font-bold mg-6">Menu List History</h1>
      <h4 className="mb-10">This is a Menu List History Table</h4>
      <MenuHistoryTable menus={menus}></MenuHistoryTable>
    </div>
  )
}
