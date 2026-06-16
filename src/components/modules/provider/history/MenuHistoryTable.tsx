import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FoodMenu } from "@/types";
import { name } from "next/dist/server/ci-info";

export default function MenuHistoryTable({ menus }: { menus: FoodMenu[] }) {
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
