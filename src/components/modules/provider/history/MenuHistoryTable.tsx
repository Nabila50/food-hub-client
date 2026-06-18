"use client";

import { deleteMenuAction } from "@/actions/menu.action";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { env } from "@/env";
import { menuService } from "@/services/menu.service";

import { FoodMenu } from "@/types";
import { error } from "next/dist/build/output/log";
import { name } from "next/dist/server/ci-info";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function MenuHistoryTable({ menus }: { menus: FoodMenu[] }) {
  const router = useRouter();

  // * Delete Button handle
  const handleDelete = async (id: string) => {
    const result = await deleteMenuAction(id);

    console.log("DELETE RESPONSE:", result);
    if (!result?.data?.success) {
      toast.error(
        result?.data?.error || "You are not authorized to delete this menu",
      );
      return;
    }

    toast.success("Menu deleted successfully");
    router.refresh();
  };

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="text-lg font-bold bg-lime-200">
            <TableHead>Title</TableHead>
            <TableHead>Menu Item Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Provider Id</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menus.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.menuItem[0]?.name}</TableCell>
              <TableCell>{item.menuItem[0]?.price}</TableCell>
              <TableCell>{item.providerId}</TableCell>
              <TableCell>{item.image}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDelete(item.id as string)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Update
                </Button>
                <Button
                  onClick={() => handleDelete(item.id as string)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
