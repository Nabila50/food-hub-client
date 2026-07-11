"use server";

import { env } from "@/env";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export const paymentService = {
  async createPayment(orderId: string) {
    const cookieStore = await cookies();

    const res = await fetch(
      `${API_URL}/payment/create/${orderId}`,
      {
        method: "POST",
        headers: {
          Cookie: cookieStore.toString(),
        },
      }
    );

    return await res.json();
  },
};