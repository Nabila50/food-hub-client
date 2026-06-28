
"use client";

 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { env } from "@/env";
import { authClient } from "@/lib/auth-client";
import { CustomerType } from "@/types/order.types";
 
type Props = {
  customers: any;
  role?: string;
};
// * problem start data is not fatching properly
const NEXT_PUBLIC_API_URL = env.NEXT_PUBLIC_API_URL;

export default function CustomerInfoTable({ customers }: Props) {
  const customerList: CustomerType[] = Array.isArray(customers)
    ? customers
    : customers?.data || [];

  const { data: session } = authClient.useSession();

  const role = (session?.user as any)?.role;
  console.log("All Customer:", customerList);

  customerList.forEach((customer) => {
    console.log(
      customer.id,
      customer.status,
      customer.name
    );
  });
 

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-lime-200 font-semibold hover:bg-amber-200">
            <TableHead className="font-semibold">Customer ID</TableHead>
            <TableHead className="font-semibold">Customer Name</TableHead>
            <TableHead className="font-semibold">Email</TableHead>
            <TableHead className="font-semibold">Phone</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customerList.length > 0 ? (
            customerList.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer?.name || "N/A"}</TableCell>
                <TableCell>{customer?.email || "N/A"}</TableCell>
                <TableCell>{customer?.phone || "N/A"}</TableCell>
                <TableCell>{customer.status}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No Customer found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
