import Link from "next/link";
import ThemeBtn from "./theme-btn";

const Navbar = () => {
    return (
        <nav className="z-10 fixed top-0 w-full bg-background/50 backdrop-blur-2xl border-b border-border">
            <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 flex items-center justify-between gap-4">
                <Link href="/">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">TanStack Table</span>
                </Link>
                <ThemeBtn/>
            </div>
        </nav>
    );
};

export default Navbar;