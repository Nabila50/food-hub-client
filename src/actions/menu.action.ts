"use server";

import { MenuData, menuService } from "@/services/menu.service";
import { revalidateTag, updateTag } from "next/cache";

export const createMenuPost = async (data: MenuData)=>{
    const res = await menuService.createMenuPost(data)
    updateTag("menuPosts");
    return res;
};

export const deleteMenuAction = async(id: string)=>{
    const res = await menuService.deleteMenu(id)
    // updateTag("menuPosts");

    return res;
}