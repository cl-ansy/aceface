"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Label } from "@/components/ui/Label";
import { Switch } from "@/components/ui/Switch";
import { Input } from "@/components/ui/Input";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password cannot be more than 128 characters"),
});

export function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              {/* <FormDescription>Email</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Password</FormLabel>
              <FormControl>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Email</FormDescription> */}
              <FormMessage />
              <div className="flex items-center space-x-2 py-4">
                <Switch
                  tabIndex={-1}
                  id="show-password"
                  checked={passwordVisible}
                  onCheckedChange={setPasswordVisible}
                />
                <Label htmlFor="show-password"> Show Password</Label>
              </div>
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Log in
        </Button>
      </form>
    </Form>
  );
}
