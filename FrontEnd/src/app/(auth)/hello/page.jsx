import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
};

export default function SignUpWithImage() {
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/authentication-light.png"
                    width={1280}
                    height={443}
                    alt="Authentication"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/authentication-dark.png"
                    width={1280}
                    height={443}
                    alt="Authentication"
                    className="hidden dark:block"
                />
            </div>
            <div className="container relative hidden h-[500px] w-[1400px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-black dark:border-r lg:flex">
                    {/* <div className="absolute inset-0 bg-zinc-900" /> */}
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                        Padhee Tutorial
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours
                                of work and helped me deliver stunning designs
                                to my clients faster than ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
                        <Card>
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl text-center">
                                    Create an account
                                </CardTitle>
                                <CardDescription className="text-center">
                                    Enter your email and password to sign up
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder=""
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" />
                                </div>
                                <span className=" text-blue-600 hover:underline text-sm">
                                    Forget password ?
                                </span>
                            </CardContent>
                            <CardFooter className="flex flex-col">
                                <Button className="w-full">Sign Up</Button>
                                <p className="mt-2 text-xs text-center text-gray-700">
                                    {" "}
                                    Already have an account?{" "}
                                    <span className=" text-blue-600 hover:underline">
                                        Sign In
                                    </span>
                                </p>
                            </CardFooter>
                        </Card>

                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
