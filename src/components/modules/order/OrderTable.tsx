"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { env } from "@/env";
import { authClient } from "@/lib/auth-client";
import { OrderType } from "@/types/order.types";
import { toast } from "sonner";
import ReviewForm from "../review/ReviewForm";

type Props = {
  orders: any;  
  role?: string;
};
// * problem start data is not fatching properly
const NEXT_PUBLIC_API_URL = env.NEXT_PUBLIC_API_URL;

export default function OrderTable({ orders }: Props) {
   
  const orderList: OrderType[] = Array.isArray(orders)
    ? orders
    : orders?.data || [];

  const { data: session } = authClient.useSession();

  const role = (session?.user as any)?.role;
  console.log("All Orders:", orderList);

  orderList.forEach((order) => {
    console.log(order.id, order.status, order.orderItems?.[0]?.menuItem?.name);
  });

  // * handleStatus
  const handleStatusChange = async (orderId: string, status: string) => {
    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          status,
        }),
      });

      const data = await res.json();

      toast.success(`Order status updated to ${status}`);
    } catch (error) {
      toast.error("Something went wrong while updating status");
      return { data: null, error: { message: "Update is not possible" } };
    }
  };

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Order ID</TableHead>
            <TableHead>Customer Id</TableHead>
            <TableHead>Menu Item</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>

            <TableHead>Status</TableHead>
            <TableHead>Rating</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orderList.length > 0 ? (
            orderList.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>

                <TableCell>{order?.customerId || "N/A"}</TableCell>

                <TableCell>
                  {order?.orderItems?.[0]?.menuItem?.name || "N/A"}
                </TableCell>

                <TableCell>{order?.customer?.name || "N/A"}</TableCell>

                <TableCell>{order?.customer?.email || "N/A"}</TableCell>
                <TableCell>{order?.customer?.phone || "N/A"}</TableCell>

                <TableCell>
                  {order?.orderItems?.[0]?.menuItem?.price || "N/A"}
                </TableCell>

                <TableCell>
                  {order?.orderItems?.[0]?.quantity || "N/A"}
                </TableCell>

                <TableCell>{order.status}</TableCell>

                <TableCell>
                  {role === "ADMIN" || role === "PROVIDER" ? (
                    <Select
                      defaultValue={order.status}
                      onValueChange={(value) =>
                        handleStatusChange(order.id, value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="PENDING">Pending</SelectItem>
                        <SelectItem value="PREPARING">Preparing</SelectItem>
                        <SelectItem value="ONWAY">On Way</SelectItem>
                        <SelectItem value="DELIVERED">Delivered</SelectItem>
                        <SelectItem value="CANCELLED">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {order.status === "PENDING" && (
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded"
                          onClick={() =>
                            handleStatusChange(order.id, "CANCELLED")
                          }
                        >
                          Cancel Order
                        </button>
                      )}

                      {/* Review section */}
                      {order.status === "DELIVERED" && (
                        <ReviewForm
                          menuItemId={order?.orderItems?.[0]?.menuItem?.id}
                        />
                      )}
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No orders found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
