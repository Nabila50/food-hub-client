import { env } from "@/env";

const API_URL = env.API_URL;

export const menuService = {
    getFoodMenu : async function () {
        try{
            const res = await fetch(`${API_URL}/menus`);

        }catch(error){

            return {data: null, error: {message: "something went wrong"}}
        }
    }
}