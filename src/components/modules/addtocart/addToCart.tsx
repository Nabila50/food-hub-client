"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { createOrderAction } from "@/actions/order.action";

export default function AddToCart({
  menuItemId,
}: {
  menuItemId: string;
}) {
  const handleOrder = async () => {
    try {
      const result = await createOrderAction(
        menuItemId
      );

      console.log(result);

      alert("Order created successfully");
    } catch (error) {
      console.error(error);

      alert("Failed to create order");
    }
  };

  return (
    <Button onClick={handleOrder}>
      <ShoppingCart className="h-4 w-4" />
      Add To Order
    </Button>
  );
}