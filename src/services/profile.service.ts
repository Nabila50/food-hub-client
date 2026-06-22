import { cookies } from "next/headers";
import { env } from "@/env";

const API_URL = env.API_URL;

export const profileService = {
  getMyProfile: async () => {
    try {
      const cookieStore = await cookies();

      const res = await fetch(
        `${API_URL}/users/profile`,
        {
          cache: "no-store",
          headers: {
            Cookie: cookieStore.toString(),
          },
        }
      );

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("PROFILE DATA:", data);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};