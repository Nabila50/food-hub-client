"use server";

import { MenuData, menuService } from "@/services/menu.service";
import { revalidateTag, updateTag } from "next/cache";

// * create Menu
export const createMenuPost = async (data: MenuData)=>{
    const res = await menuService.createMenuPost(data)
    updateTag("menuPosts");
    return res;
};

// * delete Menu
export const deleteMenuAction = async(id: string)=>{
    const res = await menuService.deleteMenu(id)
    // updateTag("menuPosts");

    return res;
}

// * Update Menu
export const updateMenuAction = async (
  id: string,
  data: {
    title?: string;
    image?: string;
    isAvailable?: boolean;
    menuItem?: {
      id: string;
      name?: string;
      price?: number;
    }[];
  },
) => {
  const res = await menuService.updateMenu(id, data);

  updateTag("menuPosts");

  return res;
};