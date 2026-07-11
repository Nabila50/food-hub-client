import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = env.AUTH_URL;

const API_URL = env.API_URL;
export const userService = {
  // * get session
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      console.log("Cookies:", cookieStore.getAll());
      console.log("Cookie String:", cookieStore.toString());

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      console.log("Status:", res.status);
      console.log("URL:", res.url);

      const session = await res.json();

      console.log("Session Response:", session);

      if (session === null) {
        return {
          data: null,
          error: {
            message: "Session is missing",
          },
        };
      }

      return {
        data: session,
        error: null,
      };
    } catch (err) {
      console.error("getSession Error:", err);

      return {
        data: null,
        error: {
          message: "Something went wrong",
        },
      };
    }
  },

  getCustomer: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/users`, {
        cache: "no-store",
        headers: {
          Cookie: cookieStore.toString(),
        },
      });

      const data = await res.json();

      return { data: data };
    } catch (err) {
      return {
        data: null,
        error: { message: "Customers not found went wrong!!" },
      };
    }
  },
};
