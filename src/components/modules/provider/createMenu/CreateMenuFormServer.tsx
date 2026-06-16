import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { env } from "@/env";
import { revalidateTag, updateTag } from "next/cache";
import { name } from "next/dist/server/ci-info";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = env.API_URL;

export default function CreateMenuFormServer() {
  const createMenu = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const providerId = formData.get("providerId") as string;
    const image = formData.get("image") as string;
    const isAvailable = formData.get("isAvailable") === "true";
    const menuItem = [
      {
        name: formData.get("menuItem[0].name") as string,
        description: formData.get("menuItem[0].description") as string,
        price: Number(formData.get("menuItem[0].price")),
        image: formData.get("menuItem[0].image") as string,
        isFeatured: formData.get("menuItem[0].isFeatured") === "true",
      },
    ];

    const menuData = {
      title,
      providerId,
      image,
      isAvailable,
      menuItem,
    };

    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/menus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(menuData),
    });

    if(res.ok){
      revalidateTag("menuPosts", "max");

    }
 
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Menu </CardTitle>
        <CardDescription>You can create Menu and Menu Items</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="menu-form" action={createMenu}>
          <FieldGroup>
            <Field>
              <FieldLabel>Title</FieldLabel>
              <Input type="text" name="title"></Input>
            </Field>

            <Field>
              <FieldLabel>Provider Id</FieldLabel>
              <Input type="text" name="providerId"></Input>
            </Field>
            <Field>
              <FieldLabel>Image</FieldLabel>
              <Input type="text" name="image"></Input>
            </Field>

            <Field>
              <FieldLabel>Menu Item Name</FieldLabel>
              <Input name="menuItem[0].name" />
            </Field>

            <Field>
              <FieldLabel>Description</FieldLabel>
              <Input name="menuItem[0].description" />
            </Field>

            <Field>
              <FieldLabel>Price</FieldLabel>
              <Input name="menuItem[0].price" type="number" />
            </Field>

            <Field>
              <FieldLabel>Image</FieldLabel>
              <Input name="menuItem[0].image" />
            </Field>

            <Field>
              <FieldLabel>Food Availability</FieldLabel>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isAvailable"
                    value="true"
                    defaultChecked
                  />
                  Available
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="isAvailable" value="false" />
                  Unavailable
                </label>
              </div>
            </Field>
            <Field>
              <div className="flex items-center gap-2">
                <FieldLabel>Featured</FieldLabel>
                <Input
                  name="menuItem[0].isFeatured"
                  type="checkbox"
                  className="w-4 h-4"
                />
              </div>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="menu-form" type="submit" className="w-full">
          {" "}
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
 