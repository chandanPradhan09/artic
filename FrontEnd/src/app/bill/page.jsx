"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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

const items = [
    {
        id: "addmissionFee",
        label: "Admission Fee",
    },
    {
        id: "courseFee",
        label: "Course Fee",
    },
    {
        id: "hostelFee",
        label: "Hostel Fee",
    },
    {
        id: "other",
        label: "Other",
    },
];

const formSchema = z.object({
    "Student Name": z.string().min(2, {
        message: "Student Name must be at least 2 characters.",
    }),
    "Paid By": z.string().min(1, { message: "Parrent name is required" }),
    Amount: z.string().refine(
        (val) => {
            const parsedValue = parseInt(val, 10);
            return !Number.isNaN(parsedValue) && parsedValue > 0;
        },
        {
            message:
                "Expected number greater than 0 OR received an invalid value",
        }
    ),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
    class: z.enum(["xi", "xii"], {
        required_error: "You need to select a Class.",
      }),
});

const Bill = () => {
    const defaultFormValues = {
        "Student Name": "",
        "Paid By": "",
        Amount: "",
        items: [],
        class: "",
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
                    <FormField
                        control={form.control}
                        name="Student Name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Student Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Student Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Paid By"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Paid By</FormLabel>
                                <FormControl>
                                    <Input placeholder="Paid By" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input placeholder="Amount" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="items"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">
                                        Amount Category
                                    </FormLabel>
                                    <FormDescription>
                                        Select the items you want to categorige the Amount.
                                    </FormDescription>
                                </div>
                                {items.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="items"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={item.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(
                                                                item.id
                                                            )}
                                                            onCheckedChange={(
                                                                checked
                                                            ) => {
                                                                return checked
                                                                    ? field.onChange(
                                                                          [
                                                                              ...field.value,
                                                                              item.id,
                                                                          ]
                                                                      )
                                                                    : field.onChange(
                                                                          field.value?.filter(
                                                                              (
                                                                                  value
                                                                              ) =>
                                                                                  value !==
                                                                                  item.id
                                                                          )
                                                                      );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="text-sm font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            );
                                        }}
                                    />
                                ))}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="class"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Class:</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex space-x-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="xi" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                XI
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="xii" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                XII
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
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

export default Bill;
