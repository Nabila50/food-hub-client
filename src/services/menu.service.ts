import { env } from "@/env";
// import { keycloak } from "better-auth/plugins";

const API_URL = env.API_URL;

interface getMenuParams {
  isAvailable?: boolean;
  search?: string;
}

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export const menuService = {
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
      const res = await fetch(url.toString(), config);

      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
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
        message:
          err instanceof Error ? err.message : "Something went wrong",
      },
    };
  }
}
};
