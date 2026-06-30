import MenuItemCard from '@/components/modules/menuItempage/MenuItemCard';
import { menuItemService } from '@/services/menuitem.service';
import { MenuItemType } from '@/types';

export default async function MenuItemPage() {
  const { data } = await menuItemService.getMenuItem();
  const menuItems: MenuItemType[] = Array.isArray(data) ? data : [];

  return (
    <div className="grid grid-cols-3">
      {menuItems.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
