// import { env } from "better-auth";

import { env } from "@/env";

const API_URL = env.API_URL;

export const menuItemService = {
  // * get all menuItems
  getMenuItem: async function () {
    try {
      const url = new URL(`${API_URL}/menuitems`);
      const config: RequestInit = {};
      const res = await fetch(url.toString(), config);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },

  // *get MenuItem by Id
  getMenuItemById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/menuitems/${id}`,{
        cache: "no-store"
      });
 

      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status}`);
      }

      const data = await res.json();

      return {
        data,
        error: null,
      };
    } catch (err) {
      console.error("GET MENU ERROR:", err);

      return {
        data: null,
        error: {
          message: err instanceof Error ? err.message : "Something went wrong",
        },
      };
    }
  },
};
