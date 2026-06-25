import { cookies } from "next/headers";
import { env } from "@/env";
import { toast } from "sonner";

const API_URL = env.API_URL;

export const profileService = {
  getMyProfile: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/users/profile`, {
      cache: "no-store",
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    const json = await res.json();

    return json.data;  
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
