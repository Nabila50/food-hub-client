import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
        <CheckCircle2 className="mx-auto h-20 w-20 text-green-600" />

        <h1 className="text-3xl font-bold mt-4">
          Payment Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for your order.
          Your payment has been received successfully.
        </p>

        <Link href="/orders">
          <Button className="mt-8 bg-lime-500 hover:bg-lime-600 w-full">
            View My Orders
          </Button>
        </Link>
      </div>
    </div>
  );
}