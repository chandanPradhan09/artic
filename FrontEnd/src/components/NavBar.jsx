import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
    return (
        <div className="py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <HomeIcon />
                </Link>
                <div className="justify-center items-center flex gap-4">
                    <Link
                        href="/bill"
                        className={buttonVariants({ variant: "default" })}
                    >
                        BILL Generation
                    </Link>
                    <Link
                        href="/signin"
                        className={buttonVariants({ variant: "default" })}
                    >
                        SignIn
                    </Link>
                    <Link href="/signup" className={buttonVariants()}>
                        SignUp
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
