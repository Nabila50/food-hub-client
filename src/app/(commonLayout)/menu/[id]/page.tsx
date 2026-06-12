import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { menuService } from "@/services/menu.service";


export default async function MenuDetailsCard({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  // 1. Fetching the data
  const response = await menuService.getMenuById(id as string);
  const menu = response?.data;

  console.log("ID:", id);
console.log("Response:", response);

  // 2. DEBUGGING: Check your console log where npm run dev is running to see what data Prisma is giving you
  console.log("Fetched Menu Data for ID:", id, menu);


  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {/* Back Button */}
      <Button
        variant="ghost"
        asChild
        className="gap-2 text-neutral-600 hover:text-black"
      >
        <Link href="/menu">
          <ArrowLeft className="h-4 w-4" /> Back to Menus
        </Link>
      </Button>

      {/* Main Menu Header Card */}
      <Card className="overflow-hidden bg-white shadow-sm border border-neutral-200">
        <div className="relative h-60 md:h-72 w-full bg-neutral-100">
          <img
            // FIX: Fallback to an elegant default placeholder image if menu.image is null or empty string
            src={menu?.image && menu.image.trim() !== "" ? menu.image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200"}
            alt={menu?.title ?? "Menu Collection"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  className={
                    menu?.isAvailable
                      ? "bg-lime-500 text-white"
                      : "bg-red-500 text-white"
                  }
                >
                  {menu?.isAvailable ? "Active Menu" : "Currently Unavailable"}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {menu?.title ?? "Untitled Menu Collection"}
              </h1>
            </div>
          </div>
        </div>
      </Card>

      {/* Menu Items List Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-800 tracking-tight px-1">
          Available Dishes ({menu?.menuItem?.length ?? 0})
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {menu?.menuItem && menu.menuItem.length > 0 ? (
            menu.menuItem.map((item: any) => (
              <Card
                key={item.id}
                className={`flex flex-col sm:flex-row overflow-hidden transition-all border border-neutral-200 bg-white shadow-sm hover:shadow-md ${
                  !item.isAvailable ? "opacity-65" : ""
                }`}
              >
                {/* Item Thumbnail Image*/}
                <div className="relative w-full sm:w-48 h-40 sm:h-auto bg-neutral-50 flex-shrink-0">
                  <img
                    // FIX: Fallback to a placeholder image if single item image is null or empty string
                    src={item?.image && item.image.trim() !== "" ? item.image : "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=500"}
                    alt={item.name ?? "Dish image"}
                    className="w-full h-full object-cover"
                  />
                  {item.isFeatured && (
                    <Badge className="absolute top-2 left-2 bg-amber-300 text-neutral-900 font-semibold gap-1">
                      <Star className="h-3 w-3 fill-neutral-900" /> Chef's Choice
                    </Badge>
                  )}
                </div>

                {/* Item Info Content */}
                <div className="flex flex-col justify-between flex-1 p-5">
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg font-bold text-neutral-900">
                        {item.name ?? "Unnamed Dish"}
                      </h3>
                      <span className="text-lg font-bold text-emerald-600 shrink-0">
                        ${Number(item.price ?? 0).toFixed(2)}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                

                  {/* Add to Order Action */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-100">
                    <div>
                      {!item.isAvailable && (
                        <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded">
                          Sold Out
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-amber-400 hover:bg-amber-500 text-base font-semibold gap-2 shadow-xs"
                      disabled={!item.isAvailable || !menu.isAvailable}
                    >
                      <ShoppingCart className="h-4 w-4" /> Add to Order
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 border border-dashed rounded-lg bg-neutral-50 text-neutral-500">
              No individual dishes have been added to this menu collection yet.
            </div>
          )}
        </div>
      </div> 
    </div>
  );
}