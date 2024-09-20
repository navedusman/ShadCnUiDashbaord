"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().trim().min(1,{ message: "Password required" })
  })



export default function LogInPage(){
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })

      function handleSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("login validation passed: ", data);
        router.push("/dashboard");
      }

    return(
        <>
        <PersonStandingIcon size={50}/>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>
                        Log In
                    </CardTitle>
                    <CardDescription>
                        Login to your Account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form  className=" flex flex-col gap-4 " onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your Email for Login.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            <Button type="submit">
                                Login
                            </Button>
                        </form>

                    </Form>
                </CardContent>
                <CardFooter className=" justify-between">
                    <small>Don't Have an account ?  </small>
                    <Button asChild variant="outline" size="sm">
                        <Link href="/signup"> Signup</Link>
                    </Button>
                </CardFooter>

            </Card>
        </>
    )
}