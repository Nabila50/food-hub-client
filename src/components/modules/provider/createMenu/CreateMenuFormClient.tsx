"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { MenuData } from "../../../../services/menu.service";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createMenuPost } from "@/actions/menu.action";

const menuSchema = z.object({
  title: z.string(),
  providerId: z.string(),
  image: z.string(),
  isAvailable: z.boolean(),
  menuItem: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      price: z.string(),
      image: z.string(),
      isFeatured: z.boolean(),
    }),
  ),
});

export function CreateMenuFormClient() {
  const form = useForm({
    defaultValues: {
      title: "",
      providerId: "",
      image: "",
      isAvailable: false,
      menuItem: [
        {
          name: "",
          description: "",
          price: "",
          image: "",
          isFeatured: false,
        },
      ],
    },

    validators: {
      onSubmit: menuSchema,
    },

    onSubmit: async ({ value }) => {
      const toastId = toast.loading("creating............");

      const menuData: MenuData = {
        ...value,
        // include id to satisfy MenuData type; new menus may not have an id yet
        id: (value as any).id || "",
        title: value.title,
        providerId: value.providerId,

        image: value.image,
        isAvailable: value.isAvailable,
        menuItem: [
          {
            id: (value as any).menuItem[0].id,
            name: value.menuItem[0].name,
            description: value.menuItem[0].description,
            price: Number(value.menuItem[0].price),
            image: value.menuItem[0].image,
            isFeatured: value.menuItem[0].isFeatured,
          },
        ],
      };
      console.log("menudata info is here:", menuData);

      try {
        const res = await createMenuPost(menuData);

        if (res.error) {
          toast.error(res.error.message, { id: toastId });
          return;
        }

        toast.success("Menu created", { id: toastId });
      } catch (err) {
        toast.error("something went wrong", { id: toastId });
      }
    },
  });

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Menu </CardTitle>
        <CardDescription>You can create Menu and Menu Items</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="menu-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Write the title"
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="providerId"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Provider Id</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="image"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Image</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="menuItem[0].name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Menu Item Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="menuItem[0].description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="menuItem[0].price"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="number"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="menuItem[0].image"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Image</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="isAvailable"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel>Food Availability</FieldLabel>

                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={field.state.value === true}
                          onChange={() => field.handleChange(true)}
                        />
                        Available
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={field.state.value === false}
                          onChange={() => field.handleChange(false)}
                        />
                        Unavailable
                      </label>
                    </div>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="menuItem[0].isFeatured"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <div className="flex items-center gap-2">
                      <FieldLabel htmlFor={field.name}>Featured</FieldLabel>

                      <Input
                        id={field.name}
                        name={field.name}
                        type="checkbox"
                        checked={field.state.value}
                        onChange={(e) => field.handleChange(e.target.checked)}
                        className="w-4 h-4"
                      />
                    </div>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          form="menu-form"
          type="submit"
          className="w-full bg-lime-300 text-black"
        >
          {" "}
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
