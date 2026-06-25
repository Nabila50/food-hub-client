"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { ProviderType } from "@/types/provider.types";

export default function ProviderMenuModal({
  provider,
  // trigger,
}: {
  provider: ProviderType;
  // trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-amber-300 text-black font-semibold">
          View Full Menu
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{provider.companyName} - Full Menu</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {provider.menus?.length ? (
            provider.menus.map((menu) => (
              <div
                key={menu.id}
                className="border rounded-lg p-3 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{menu.title}</h3>
                  <p className="text-sm text-gray-500">
                    {menu.description}
                  </p>
                </div>

                {menu.price && (
                  <span className="font-bold text-green-600">
                    ${menu.price}
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No menus available</p>
          )}
        </div>

        <Button className="mt-4 w-full">Close</Button>
      </DialogContent>
    </Dialog>
  );
}
