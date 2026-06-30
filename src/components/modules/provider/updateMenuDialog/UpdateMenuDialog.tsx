"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { updateMenuAction } from "@/actions/menu.action";
import { FoodMenu } from "@/types";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Switch } from "@/components/ui/switch";

interface Props {
  menu: FoodMenu;
}

export default function UpdateMenuDialog({ menu }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(menu.title);
  const [image, setImage] = useState(menu.image);
  const [isAvailable, setIsAvailable] = useState(menu.isAvailable);

  const [menuName, setMenuName] = useState(menu.menuItem?.[0]?.name || "");

  const [price, setPrice] = useState(menu.menuItem?.[0]?.price || 0);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const result = await updateMenuAction(menu.id as string, {
        title,
        image,
        isAvailable,
        menuItem: [
          {
            id: menu.menuItem?.[0]?.id as string,
            name: menuName,
            price: price,
          },
        ],
      });
      if (!result?.data) {
        toast.error("Failed to update menu");
        return;
      }

      toast.success("Menu updated successfully");

      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600">Update</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Update Menu</DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          {/* Menu Title */}
          <div>
            <Label>Menu Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          {/* Menu Image */}
          <div>
            <Label>Menu Image URL</Label>
            <Input value={image} onChange={(e) => setImage(e.target.value)} />
          </div>

          {/* Menu Item Name */}
          <div>
            <Label>Menu Item Name</Label>
            <Input
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
            />
          </div>

          {/* Price */}
          <div>
            <Label>Price</Label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          {/* Availability */}
          <div className="flex items-center justify-between border rounded-md p-3">
            <Label>Available</Label>

            <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
          </div>

          {/* Submit Button */}
          <Button onClick={handleSubmit} disabled={loading} className="w-full">
            {loading ? "Updating..." : "Save Changes"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
