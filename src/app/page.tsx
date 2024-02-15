import Image from "next/image";
import clsx from "clsx";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "700",
  subsets: ["latin"],
});

const page = () => (
  <main className="flex flex-col items-center min-h-screen m-24">
    <div
      className={clsx(
        ubuntu.className,
        "backdrop-blur-xl",
        "bg-slate-50/70",
        "dark:bg-zinc-950/70",
        "fixed",
        "p-4",
        "shadow-sm",
        "text-center",
        "top-0",
        "w-full",
        "flex",
      )}
    >
      <h1 className={clsx("drop-shadow", "text-xl")}>Phil Ostler</h1>
    </div>
    <Image
      alt="Phil Ostler's Profile"
      className={clsx(
        "border-4",
        "border-slate-950",
        "dark:border-slate-50",
        "rounded-full",
        "shadow-lg",
        "shadow-slate-500",
        "dark:shadow-indigo-500",
      )}
      height={200}
      priority
      src="/profile.jpg"
      width={200}
    />
  </main>
);

export default page;
