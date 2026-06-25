import { env } from "@/env";
 

const API_URL = env.NEXT_PUBLIC_API_URL

export const createReview = async (
  menuItemId: string,
  rating: number,
  comment: string

) => {
     
  const res = await fetch(
    `${API_URL}/reviews`,
    {
      method: "POST",
        credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menuItemId,
        rating,
        comment,
      }),
    }
  );

  console.log("STATUS:", res.status);

  const text = await res.text();

  console.log("BODY:", text);

  return text;
};