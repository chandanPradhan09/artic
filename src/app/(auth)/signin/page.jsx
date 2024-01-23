"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"


const formSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignIn = () => {

    const defaultFormValues = {
        email: "",
        password: "",
    };

    const toTitleCase = (str) =>
        str.replace(/\b\w/g, (char) => char.toUpperCase());

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues,
    });

    const onSubmit = (values) => {
        toast("Sign In Successful",{
            position:"top-right",
            duration:2000,
            icon:"👏",
            description:values.email,
        })
        console.log(values)
    };

    return (
        <div className="p-4 rounded-xl shadow-md space-y-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 p-4"
                >
                    {Object.keys(defaultFormValues).map((key) => (
                        <FormField
                            key={key}
                            control={form.control}
                            name={key}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">
                                        {toTitleCase(key)}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="w-full p-2 border rounded"
                                            type={
                                                key === "email"
                                                    ? "email"
                                                    : "password"
                                            }
                                            placeholder={toTitleCase(key)}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default SignIn;
