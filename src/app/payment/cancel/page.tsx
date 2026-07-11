import Link from "next/link";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <XCircle className="mx-auto h-20 w-20 text-red-600" />

        <h1 className="text-3xl font-bold mt-4">
          Payment Cancelled
        </h1>

        <p className="mt-3">
          You cancelled the payment.
        </p>

        <Link href="/orders">
          <Button className="mt-8">
            Back to Orders
          </Button>
        </Link>
      </div>
    </div>
  );
}