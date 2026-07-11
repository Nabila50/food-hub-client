import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, ShieldCheck, Receipt } from "lucide-react";
import PayButton from "./PayButton";

type Props = {
  params: Promise<{
    orderId: string;
  }>;
};

export default async function PaymentPage({ params }: Props) {
  const { orderId } = await params;

  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-xl rounded-2xl shadow-2xl border-0">
        <CardHeader className="bg-lime-500 text-white rounded-t-2xl text-center py-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-full">
              <CreditCard className="h-8 w-8 text-lime-600" />
            </div>
          </div>

          <CardTitle className="text-3xl font-bold">
            Complete Your Payment
          </CardTitle>

          <CardDescription className="text-lime-100 mt-2">
            Secure payment powered by Stripe
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 p-8">
          {/* Order ID */}
          <div className="bg-lime-50 rounded-xl p-4 border border-lime-200">
            <p className="text-sm text-gray-500">Order ID</p>

            <p className="font-semibold break-all text-gray-800">
              {orderId}
            </p>
          </div>

          {/* Payment Summary */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
              <Receipt className="h-5 w-5 text-lime-600" />
              Payment Summary
            </h2>

            <div className="flex justify-between py-2 border-b">
              <span>Status</span>

              <Badge className="bg-yellow-500 text-white">
                Unpaid
              </Badge>
            </div>

            <div className="flex justify-between py-2 border-b">
              <span>Payment Method</span>

              <span className="font-medium">Stripe</span>
            </div>

            <div className="flex justify-between py-2">
              <span>Security</span>

              <span className="flex items-center gap-2 text-green-600 font-medium">
                <ShieldCheck className="h-4 w-4" />
                SSL Protected
              </span>
            </div>
          </div>

          {/* Info Box */}
          <div className="rounded-xl bg-lime-50 border border-lime-200 p-4">
            <p className="text-sm text-gray-700">
              Your payment is securely processed by <strong>Stripe</strong>.
              We never store your card information.
            </p>
          </div>

          {/* Pay Button */}
          <PayButton orderId={orderId} />
        </CardContent>
      </Card>
    </div>
  );
}