import { env } from "@/env";
import { cookies } from "next/headers";

const API_URL = env.NEXT_PUBLIC_API_URL;

export const orderService = {
  async createOrder(menuItemId: string) {
    // const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // Cookie: cookieStore.toString(),
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

    if (!res.ok) {
      return {
        error: {
          message: await res.text(),
        },
      };
    }

    return await res.json();
  },

  async getMyOrder() {
    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/orders`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        error: {
          message: await res.text(),
        },
      };
    }

    return await res.json();
  },
};





// import { env } from "@/env";
// import { cookies } from "next/headers";
// // import { orderService } from '@/services/order.service';

// const API_URL = env.API_URL;

// const FRONTEND_URL = env.FRONTEND_URL;

// // const cookieStore = await cookies();

// // console.log("CookieStore from home", cookieStore)

// // const res = await fetch("https://food-hub-server-project.vercel.app/api/auth/get-session",{
// //   headers: {
// //     Cookie: cookieStore.toString(),
// //   },
// //   cache: "no-store",
// // })

// // const session = await res.json();

// // console.log("session from homepage: ", session)
// // const session = await authClient.getSession();
// // console.log("Session from homepage: ", session);

// export const orderService = {
//   createOrder: async function (orderId: string) {
//     const cookieStore = await cookies();

//     console.log("All cookies:", cookieStore);
//     console.log("this is from order.service.ts", cookieStore.getAll());
//     console.log("Cookie string:", cookieStore.toString());

//     const res = await fetch(`${API_URL}/orders/${orderId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: cookieStore.toString(),
//       },
//       body: JSON.stringify({
//         items: [
//           {
//             menuItemId,
//             quantity: 1,
//           },
//         ],
//       }),
//       cache: "no-store",
//     });

//     const text = await res.text();

//     console.log(text);
//     return text;
//   },

//   getMyOrder: async function (menuItemId: string) {
//     const cookieStore = await cookies();
//     const res = await fetch(`${API_URL}/orders/${menuItemId}`, {
//       cache: "no-store",
//       headers: {
//         Cookie: cookieStore.toString(),
//       },
//     });

//     if (!res.ok) {
//       return {
//         data: null,
//         error: {
//           message: `HTTP ${res.status}`,
//         },
//       };
//     }

//     const data = await res.json();

//     return {
//       data,
//       error: null,
//     };
//   },
// };

// // import { env } from "@/env";
// // import { cookies } from "next/headers";

// // const API_URL = env.API_URL;

// // export const orderService = {
// //   createOrder: async function (menuItemId: string) {

// //      console.log("API_URL USED:", API_URL)

// //     const cookieStore = await cookies();
// //    console.log("Cookies from next server:", cookieStore.toString());
// //     const res = await fetch(`${API_URL}/orders`, {

// //       method: "POST",
// //       credentials: "include",
// //       headers: {
// //         "Content-Type": "application/json",
// //         "Cookie": cookieStore.toString(),
// //       },

// //       body: JSON.stringify({
// //         items: [
// //           {
// //             menuItemId,
// //             quantity: 1,
// //           },
// //         ],
// //       }),
// //       cache: "no-store",
// //     });
// //     console.log("COOKIE SENT TO BACKEND:", cookieStore.toString());
// //     return await res.json();
// //   },

// //   getMyOrder: async function () {
// //     const cookieStore = await cookies();
// //     const res = await fetch(`${API_URL}/orders`, {
// //       cache: "no-store",
// //       headers: {
// //         Cookie: cookieStore.toString(),
// //       },
// //     });

// //     if (!res.ok) {
// //       return {
// //         data: null,
// //         error: {
// //           message: `HTTP ${res.status}`,
// //         },
// //       };
// //     }

// //     const data = await res.json();

// //     return {
// //       data,
// //       error: null,
// //     };
// //   },
// // };
