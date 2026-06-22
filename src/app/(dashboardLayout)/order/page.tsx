"use client";

import { useState } from "react";
import { CartItem } from "@/types/cart";
import MenuItemCard from "@/components/modules/menuItempage/MenuItemCard";
import OrderForm from "@/components/modules/order/OrderForm";
import { MenuItemType } from "@/types";

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItemType) => {
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
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: 1,
      },
    ];
  });
};

  return (
    <>
      {/* Menu Grid */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Order Form */}

      <OrderForm cart={cart} />
    </>
  );
}