"use client";

import { CartItem } from "@/types/cart";
import { Button } from "@/components/ui/button";

type Props = {
  cart: CartItem[];
};

export default function OrderForm({ cart }: Props) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = async () => {
    const payload = {
      items: cart.map((item) => ({
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("Order submitted");
    }
  };

  return (
    <div className="border rounded-lg p-5 mt-8">
      <h2 className="font-bold text-xl mb-4">
        Your Order
      </h2>

      {cart.map((item) => (
        <div
          key={item.menuItemId}
          className="flex justify-between"
        >
          <span>
            {item.name} x {item.quantity}
          </span>

          <span>
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      ))}

      <div className="mt-4 font-bold">
        Total: ${total.toFixed(2)}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={cart.length === 0}
        className="mt-4"
      >
        Submit Order
      </Button>
    </div>
  );
}