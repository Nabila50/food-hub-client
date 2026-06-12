import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FoodList, FoodMenu } from "@/types";
import Link from "next/link";
 

export default async function MenuCard({ menu} : {menu: FoodMenu}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-blue-100">
      {/* <div className="absolute inset-0 z-30" /> */}
      <img
        src={menu?.image ?? "https://avatar.vercel.sh/shadcn1"}
        alt={menu?.title ?? "Event cover"}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge className={ menu?.isAvailable
      ? 'bg-green-500 text-white'
      : 'bg-red-500 text-white'
  }>
            {menu?.isAvailable ? 'Available' : 'Unavailable'}
          </Badge>
        </CardAction>
        <CardTitle>{menu?.title}</CardTitle>
        <CardDescription>
          The quality of these foods are too good. Anyone can easily order foods.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full bg-amber-300 text-black font-semibold">
          <Link href={`/menu/${menu.id}`}>View Menu</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
