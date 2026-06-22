import { env } from "@/env";
// import { cookies } from "next/headers";

const API_URL = env.API_URL;

const createOrder = async (menuItemId: string) => {
  // const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/orders`, {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json"
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
  console.log("order api!", res)

  const data = await res.json();

  // if (!res.ok) {
  //   throw new Error(data.message || "Failed to create order");
  // }

  return data;
};

export const orderService = {
  createOrder,
};