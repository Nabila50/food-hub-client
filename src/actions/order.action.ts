"use server";

import { orderService } from "@/services/order.service";


export const createOrderAction = async (
  menuItemId: string
) => {
  try {
    const result = await orderService.createOrder(
      menuItemId
    );

    return result;
  } catch (error) {
    console.error(error);

    throw error;
  }
};