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

export default function CreateMenuFormServer() {


  const createMenu = async (formData: FormData)=>{
    "use server";

    console.log(formData.get("title"));
  }

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
