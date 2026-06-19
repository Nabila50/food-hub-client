// import { cookies } from "next/headers";
// import { keycloak } from "better-auth/plugins";

import { env } from "@/env";
import { cookies } from "next/headers";

// import { env } from "@/env";

const API_URL = env.API_URL;
console.log("API_URL:", API_URL);

interface getMenuParams {
  isAvailable?: boolean;
  search?: string;
  page?: string;
}

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export interface MenuData {
  id: string;
  title: string;
  providerId: string;
  image?: string;
  isAvailable: boolean;
  menuItem: [
    {
      id: string;
      name: string;
      description: string;
      price: number;
      image: string;
      isFeatured: boolean;
    },
  ];
}

export const menuService = {
  // * get all menu
  getFoodMenu: async function (
    params?: getMenuParams,
    options?: ServiceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/menus`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      config.next = { ...config.next, tags: ["menuPosts"] };

      const res = await fetch(url.toString(), config);

      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },

  // * create Menu
  createMenuPost: async (menuData: MenuData) => {
    try {
      // const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/menus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(menuData),
      });

      const data = await res.json();

      if (data.error) {
        return { data: null, error: { message: "error: menu not created" } };
      }
      return { data: data };
    } catch (err) {
      return { data: null, error: { message: "something went wrong!!" } };
    }
  },
  // * get menu by Id

  getMenuById: async function (id: string) {
    try {
      const url = `${API_URL}/menus/${id}`;

      console.log("Fetching:", url);

      const res = await fetch(url);

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

  // * delete Menu

  deleteMenu: async (id: string) => {
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/menus/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
    });

    const data = await res.json();

    return { data: data, error: null };
  },

  // * Update Menu
  updateMenu: async (
    id: string,
    menuData: {
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
    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/menus/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(menuData),
    });
    const data = await res.json();
   

    return {
      data,
      success: true,
      message: "ok",
      error:null
    };
  },
};
