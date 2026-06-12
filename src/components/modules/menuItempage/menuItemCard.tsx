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

type Props = {
  item: MenuItemType;
  onAddToCart?: (item: MenuItemType) => void;
};

export default function MenuItemCard({ item, onAddToCart }: Props) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-blue-100">
      {/* Image */}
      <img
        src={item.image ?? "https://avatar.vercel.sh/shadcn1"}
        alt={item.name ?? "Menu item"}
        className="relative z-20 aspect-video w-full object-cover"
      />

      <CardHeader>
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
              <Badge className="bg-yellow-500 text-black">
                Featured
              </Badge>
            )}
          </div>
        </CardAction>

        <CardTitle>{item.name ?? "Unnamed Item"}</CardTitle>

        <CardDescription>{item.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center justify-between">
        <span className="font-semibold text-lg">
          ${item.price.toFixed(2)}
        </span>

        <Button
          onClick={() => onAddToCart?.(item)}
          disabled={!item.isAvailable}
          className="bg-amber-300 text-black font-semibold"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}