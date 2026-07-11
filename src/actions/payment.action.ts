"use server";

import { paymentService } from "@/services/payment.service";

export async function createPaymentAction(orderId: string) {
  return await paymentService.createPayment(orderId);
}