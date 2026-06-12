"use client!"
import MenuItemCard from '@/components/modules/menuItempage/menuItemCard';
import { menuItemService } from '@/services/menuitem.service';
import { MenuItemType } from '@/types';
import React from 'react'


export default async function MenuItemPage() {

  const {data} = await menuItemService.getMenuItem();
  return (
    <div className="grid grid-cols-3">
      {data?.map((item: any) => (
  <MenuItemCard key={item.id} item={item} />
))}
    </div>
  )
}
