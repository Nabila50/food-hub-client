import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProviderType } from "@/types/provider.types";
 
import ProviderMenuModal from "./ProviderMenuModal";

export default function AllProvidersCard({
  provider,
}: {
  provider: ProviderType;
}) {
  return (
    <div className="max-w-sm items-center">
      <Card className="bg-lime-100 ">
        <img
          src={provider?.user?.image ?? "https://avatar.vercel.sh/shadcn"}
          className="aspect-video h-80"
        />

        <CardHeader>
          <CardTitle>{provider?.user?.name}</CardTitle>
          <CardDescription>{provider?.companyName}</CardDescription>
        </CardHeader>

        <CardContent className="h-45">
          <h1>Role: {provider?.role}</h1>
          <h1>Email: {provider?.user?.email}</h1>
          <h1>Status: {provider?.user?.status}</h1>
           {/* <pre>{JSON.stringify(provider, null, 2)}</pre> */}

          <div className="mt-3">
            <h2 className="font-semibold">Menus:</h2>

            {provider.menus?.length ? (
              <ul className="text-sm list-disc ml-4">
                {provider.menus.map((menu) => (
                  <li key={menu.id}>
                    {menu.title} {menu.price ? `- $${menu.price}` : ""}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No menus available</p>
            )}
          </div>
        </CardContent>

        <CardFooter>
           <ProviderMenuModal provider={provider} />
        </CardFooter>
        {/* <CardFooter>
          <ProviderMenuModal
            provider={provider}
            trigger={
              <Button className="w-full bg-amber-300 text-black font-semibold">
                View Full Menu
              </Button>
            }
          />
        </CardFooter> */}
      </Card>
    </div>
  );
}

// export default async function AllProvidersCard({
//   provider,
// }: {
//   provider: ProviderType;
// }) {
//   return (
//     <Card className="relative mx-auto w-full max-w-sm pt-0 bg-lime-100">
//       {/* <div className="absolute inset-0 z-30" /> */}
//       <img
//         src={provider?.userItems?.image ?? "https://avatar.vercel.sh/shadcn1"}
//         // alt={provider?.userItems?.name ?? "Event cover"}
//         className="relative z-20 aspect-video w-full object-cover"
//       />
//       <CardHeader className="h-20">
//         <CardAction>
//           {/* <Badge
//             className={
//               menu?.isAvailable
//                 ? "bg-green-500 text-white"
//                 : "bg-red-500 text-white"
//             }
//           >
//             {menu?.isAvailable ? "Available" : "Unavailable"}
//           </Badge> */}
//         </CardAction>
//         <CardTitle>{provider?.userItems?.name}</CardTitle>
//         <CardDescription>
//           {provider?.companyName ?? "No description available"}
//         </CardDescription>
//         <CardContent>
//           <h1>Role: {provider?.role ?? "No role available"}</h1>
//           <h1>Email: {provider?.userItems?.email}</h1>
//           <h1>Phone: {provider?.userItems?.phone}</h1>
//         </CardContent>
//       </CardHeader>
//       <CardFooter>
//         {/* <Button
//           asChild
//           className="w-full bg-amber-300 text-black font-semibold"
//         >
//           <Link href={`/menu/${menu.id}`}>View Menu</Link>
//         </Button> */}
//       </CardFooter>
//     </Card>
//   );
// }
