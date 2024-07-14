"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

// schema for the marketplace
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Marketplace name must be at least 2 characters.",
  }),
  fee: z.string().refine(value => {
    const parsed = Number(value);
    return !isNaN(parsed) && parsed >= 0;
  }, {
    message: "Fee must be a non-negative number.",
  }),
  description: z.string().optional(),
});

export default function MarketplaceForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      fee: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const fee = Number(data.fee);

    if (isNaN(fee) || fee < 0) {
      toast({
        title: "Error",
        description: "Fee must be a non-negative number.",
      });
      return;
    }

    const formattedData = { ...data, fee };

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(formattedData, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-5">
        Create Your NFT Collection Here
      </h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[30rem] px-4 sm:px-0 mx-auto space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marketplace Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter marketplace name" {...field} />
              </FormControl>
              <FormDescription>The name of your marketplace.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marketplace Fee</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter fee percentage"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The ownership fee percentage for this marketplace.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a description (optional)"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A brief description of the marketplace (optional).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
