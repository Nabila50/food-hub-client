import OrderTable from "@/components/modules/order/OrderTable";
import { authClient } from "@/lib/auth-client";
import { orderService } from "@/services/order.service";
import { headers } from "next/headers";
 

export default async function OrderPage() {
  const orders = await orderService.getMyOrder();
 
  return <OrderTable orders={orders.data.data} />;
}
