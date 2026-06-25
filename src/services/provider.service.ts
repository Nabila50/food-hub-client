import { env } from "@/env";

const API_URL = env.API_URL;

export const providerService = {
  // * get profile
  getProfile: async () => {
    const res = await fetch(`${API_URL}/providers/providerId`, {
      credentials: "include",
      cache: "no-store",
    });

    return await res.json();
  },
  getAllProviders: async () => {
    const res = await fetch(`${API_URL}/providers`, {
      credentials: "include",
      cache: "no-store",
    });

    return res.json();
  },
};
