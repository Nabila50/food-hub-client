"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MenuItemType } from "@/types";
import AddToCart from "../addtocart/addToCart";

type Props = {
  item: MenuItemType;
  onAddToCart?: (item: MenuItemType) => void;
};

export default function MenuItemCard({ item, onAddToCart }: Props) {
  const averageRating = item.reviews?.length
    ? (
        item.reviews.reduce((sum, r) => sum + Number(r.rating), 0) /
        item.reviews.length
      ).toFixed(1)
    : null;
 

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-lime-50 mt-7">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="relative z-20 aspect-video w-full object-cover h-70"
      />

      <CardHeader className="h-20">
        <CardAction>
          <div className="flex gap-2">
            <Badge
              className={
                item.isAvailable
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }
            >
              {item.isAvailable ? "Available" : "Unavailable"}
            </Badge>

            {item.isFeatured && (
              <Badge className="bg-yellow-500 text-black">Featured</Badge>
            )}
          </div>
        </CardAction>

        <CardTitle className="font-semibold">
          {item.name ?? "Unnamed Item"}
        </CardTitle>

        <CardDescription>{item.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center justify-between bg-amber-100">
        <span className="font-semibold text-lg">${item.price}</span>
        <span className="font-semibold text-lg">
          {averageRating ? `⭐ ${averageRating}` : "No rating"}
        </span>
        <AddToCart menuItemId={item.id} />
      </CardFooter>
    </Card>
  );
}
