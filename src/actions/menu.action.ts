"use server";

import { MenuData, menuService } from "@/services/menu.service";
import { updateTag } from "next/cache";

export const createMenuPost = async (data: MenuData)=>{
    const res = await menuService.createMenuPost(data)
    updateTag("menuPosts");
    return res;
}