"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { createOrderAction } from "@/actions/order.action";
import { toast } from "sonner";

export default function AddToCart({ menuItemId }: { menuItemId: string }) {
  const handleOrder = async () => {
    try {
      const result = await createOrderAction(menuItemId);

      console.log("ORDER RESPONSE:", result);

      if (!result.success) {
        alert(result.message);
        return;
      }

      toast.success("Order created successfully");
    } catch (error) {
      toast.error("Fail to create order");
    }
  };

  return (
    <Button onClick={handleOrder}>
      <ShoppingCart className="h-4 w-4" />
      Add To Order
    </Button>
  );
}
