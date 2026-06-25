

import { env } from "@/env";
import { cookies } from "next/headers";
// import { orderService } from '@/services/order.service';
 

const API_URL = env.API_URL;

export const orderService ={
createOrder : async function (menuItemId: string){
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify({
      items: [
        {
          menuItemId,
          quantity: 1,
        },
      ],
    }),
    cache: "no-store",
  });
  return await res.json();

},

 getMyOrder: async function () {
  try {
    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/orders`, {
      cache: "no-store",
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    const data = await res.json();
   
    return { data: data };
  } catch (err) {
 
    return { data: null, error: { message: "something went wrong!!" } };
  }
},

}


