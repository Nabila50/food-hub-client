import OrderTable from "@/components/modules/order/OrderTable";
import { orderService } from "@/services/order.service";

export const dynamic = "force-dynamic";

export default async function OrderPage() {
  const result = await orderService.getMyOrder();

  const orders = result.data?.data ?? [];

  return <OrderTable orders={orders} />;
}