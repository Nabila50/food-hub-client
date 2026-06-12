import { env } from "better-auth";


const API_URL = env.API_URL;

export const menuItemService ={
    getMenuItem: async function () {
        try{
            const url = new URL(`${API_URL}/menuitems`)
             const config: RequestInit = {};
            const res = await fetch(url.toString(), config);
            const data = await res.json();

            return { data: data, error: null };

        }catch(error) {
      return { data: null, error: { message: "something went wrong" } };
    }
    }
}