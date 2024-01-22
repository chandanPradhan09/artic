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

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    nameOfTheOrg: z
        .string()
        .min(1, { message: "Organization name is required" }),
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    mobileNumber: z
        .string()
        .min(10, "Mobile number must be 10 digits")
        .max(13, "Mobile number must be 10 digits"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    pinCode: z
        .string()
        .min(6, "Pincode must be 6 digits")
        .max(6, "Pincode must be 6 digits"),
    orgGSTNo: z.string(),
    website: z.string(),
});

const SignUp = () => {
    const defaultFormValues = {
        username: "",
        nameOfTheOrg: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
        orgGSTNo: "",
        website: "",
    };

    const toTitleCase = (str) =>
        str.replace(/\b\w/g, (char) => char.toUpperCase());

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues,
    });

    const onSubmit = (values) => console.log(values);

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
                                                    : key === "password"
                                                    ? "password"
                                                    : "text"
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

export default SignUp;
