"use client";

import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { toast } from "sonner";
import { createPaymentAction } from "@/actions/payment.action";

type Props = {
  orderId: string;
};

export default function PayButton({ orderId }: Props) {
  const handlePayment = async () => {
    try {
      const result = await createPaymentAction(orderId);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      window.location.href = result.paymentUrl;
    } catch {
      toast.error("Unable to start payment.");
    }
  };

  return (
    <Button
      onClick={handlePayment}
      className="w-full bg-lime-500 hover:bg-lime-600"
    >
      <CreditCard className="mr-2 h-4 w-4" />
      Pay with Card
    </Button>
  );
}