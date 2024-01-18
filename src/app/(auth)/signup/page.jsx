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




// 'use client'
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import {z} from "zod";
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
//     Button,
//     Input,
//     Select,
// } from "@/components/ui/form";


const formSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters" }),
    nameOfTheOrg: z
        .string()
        .min(1, { message: "Organization name is required" }),
    email: z
        .string()
        .email("Invalid email format")
        .nonempty("Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
        .string(),
        // .oneOf([formSchema.password, null], "Passwords must match"),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    mobNo: z
        .string()
        .min(10, "Mobile number must be 10 digits")
        .max(10, "Mobile number must be 10 digits")
        .regex(/^\d+$/, "Mobile number can only contain digits"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    pinCode: z
        .string()
        .min(6, "Pincode must be 6 digits")
        .max(6, "Pincode must be 6 digits")
        .regex(/^\d+$/, "Pincode can only contain digits"),
    orgGSTNo: z.string().optional(),
    website: z.string().optional(),
    // .url("Invalid website URL"),
});

const SignUp = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            nameOfTheOrg: "",
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            mobNo: "",
            address: "",
            city: "",
            state: "",
            country: "",
            pinCode: "",
            orgGSTNo: "",
            website: "",
        },
    });

    function onSubmit(values) {
        // Handle form submission here (e.g., send data to server)
        console.log(values);
    }

    return (
        <div className="p-4 rounded-xl shadow-md">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500 text-xs" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nameOfTheOrg"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Name Of The Org.
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Organization Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* ... other fields with similar structure */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
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
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Confirm Password
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    First Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="First Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Last Name
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Mobile Number
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Mobile Number"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Address"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input placeholder="City" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                    <Input placeholder="State" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="pinCode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pincode</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Pincode"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="orgGSTNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Organization GST Number (Optional)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Organization GST Number"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Website (Optional)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        // type="url"
                                        placeholder="Website"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//     username: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
// });
// const SignUp = () => {
//     const form = useForm({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             username: "",
//         },
//     });
//     function onSubmit(values) {
//         console.log(values);
//     }

//     return (
//         <div className="w-1/2 border-2 p-2 rounded-xl ">
//             <Form {...form}>
//                 <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-4"
//                 >
//                     <FormField
//                         control={form.control}
//                         name="username"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Username</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="shadcn" {...field} />
//                                 </FormControl>
//                                 <FormDescription>
//                                     This is your public display name.
//                                 </FormDescription>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <FormField
//                         control={form.control}
//                         name="password"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Password</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Password" {...field} />
//                                 </FormControl>
//                                 <FormDescription>
//                                     This is your public display name.
//                                 </FormDescription>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <Button type="submit">Submit</Button>
//                 </form>
//             </Form>
//         </div>
//     );
// };

// export default SignUp;
