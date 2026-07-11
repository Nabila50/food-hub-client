import { cookies } from "next/headers";
import { env } from "@/env";
import { toast } from "sonner";

const API_URL = env.API_URL;

export const profileService = {
  getMyProfile: async () => {
    try {
      const cookieStore = await cookies();

      const fetchProfile = async (path: string) => {
        const res = await fetch(`${API_URL}${path}`, {
          cache: "no-store",
          headers: {
            Cookie: cookieStore.toString(),
          },
        });

        if (!res.ok) {
          return null;
        }

        return res.json();
      };

      const json =
        (await fetchProfile("/users/profile")) ||
        (await fetchProfile("/profile"));

      if (!json) {
        return null;
      }

      return json?.data?.user ?? json?.data ?? json ?? null;
    } catch (error) {
      console.error("getMyProfile error:", error);
      return null;
    }
  },
};

// export const profileService = {
//   getMyProfile: async () => {
//     try {
//       const cookieStore = await cookies();
//       console.log("cookies:", cookieStore.toString());

//       const res = await fetch(`${API_URL}/users/profile`, {
//         cache: "no-store",
//         headers: {
//           Cookie: cookieStore.toString(),
//         },
//       });

//       console.log("status:", res.status);

//       const data = await res.json();

//       console.log("response:", data);
//       // const data = await res.json();

//       // // toast.success("Profile created successfully");

//       // return data;
//     } catch (error) {
//       return {
//         data: null,
//         error: { message: "something wrong to create profile!!!!" },
//       };
//       return null;
//     }
//   },
// };
