import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = env.AUTH_URL;


export const userService = {
  // * get session
  getSession: async function () {
    try{
        const cookieStore = await cookies();

    console.log(cookieStore.toString());
    const res = await fetch(`${AUTH_URL}/get-session`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });

    const session = await res.json();

    if(session === null){
        return {data:null, error: {message: "session is missing"} }
    }

    return {data: session, error: null}

    }catch (err){
 
        return {data: null, error: {message: "something went wrong!!!!"}}

    }
  },
};
