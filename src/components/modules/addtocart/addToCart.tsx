// "use client";

// import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import { toast } from "sonner";
// import { env } from "@/env";

// export default function AddToCart({
//   menuItemId,
// }: {
//   menuItemId: string;
// }) {

//   const handleOrder = async () => {
//     try {

//       const res = await fetch(
//         `${env.NEXT_PUBLIC_API_URL}/orders`,
//         {
//           method: "POST",
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             items: [
//               {
//                 menuItemId,
//                 quantity: 1,
//               },
//             ],
//           }),
//         }
//       );


//       const result = await res.json();

//       console.log("ORDER RESPONSE:", result);


//       if (!res.ok) {
//         toast.error(result.message || "Order failed");
//         return;
//       }


//       toast.success("Order created successfully");


//     } catch(error) {

//       console.log(error);
//       toast.error("Failed to create order");

//     }
//   };


//   return (
//     <Button onClick={handleOrder}>
//       <ShoppingCart className="h-4 w-4" />
//       Order Now
//     </Button>
//   );
// }


// *--------------------------------------------------------------------------------------
// "use client";

// import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import { createOrderAction } from "@/actions/order.action";
// import { toast } from "sonner";

// export default function AddToCart({ menuItemId }: { menuItemId: string }) {
//   const handleOrder = async () => {
//     try {
//       const result = await createOrderAction(menuItemId);

//       console.log("ORDER RESPONSE:", result);

//       if (result.error) {
//         alert(result.error.message);
//         return;
//       }

//       toast.success("Order created successfully");
//     } catch (error) {
//       toast.error("Fail to create order");
//     }
//   };

//   return (
//     <Button onClick={handleOrder}>
//       <ShoppingCart className="h-4 w-4" />
//       Order Now !
//     </Button>
//   );
// }

// *-------------------------------------------------------------------------------------

"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { createOrderAction } from "@/actions/order.action";
import { toast } from "sonner";

export default function AddToCart({ menuItemId }: { menuItemId: string }) {
  const handleOrder = async () => {
    try {
      // const result = await createOrderAction(menuItemId);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              menuItemId,
              quantity: 1,
            },
          ],
        }),
      });

      const result = await res.json();

      console.log("ORDER RESPONSE:", result);

      if (!result.success) {
        alert(result.message);
        return;
      }

      toast.success("Order placed successfully");
    } catch (error) {
      toast.error("Fail to place order");
    }
  };

  return (
    <Button onClick={handleOrder}>
      <ShoppingCart className="h-4 w-4" />
      Order Now
    </Button>
  );
}
