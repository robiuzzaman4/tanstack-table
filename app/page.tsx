import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="min-h-screen grid place-items-center container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-28 pb-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto">
          Building powerful tables by using <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">TanStack Table</span>
        </h1>
        <Link href="/peoples" className="w-fit">
          <Button variant="outline" className="rounded-full">
            Explore Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;