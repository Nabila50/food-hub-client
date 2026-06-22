"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type Props = {
  menuItems: any[];
};

export default function MenuItemsList({
  menuItems,
}: Props) {
  const [cart, setCart] = useState<any[]>([]);

  const handleAddToCart = (item: any) => {
    setCart((prev) => {
      const existing = prev.find(
        (cartItem) => cartItem.menuItemId === item.id
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.menuItemId === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          menuItemId: item.id,
          quantity: 1,
          name: item.name,
          price: item.price,
        },
      ];
    });
  };

  return (
    <>
      {menuItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <Button
            onClick={() => handleAddToCart(item)}
          >
            <ShoppingCart className="h-4 w-4" />
            Add To Order
          </Button>
        </div>
      ))}

      <pre>
        {JSON.stringify(cart, null, 2)}
      </pre>
    </>
  );
}