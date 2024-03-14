import clsx from "clsx";
import { Allison } from "next/font/google";

const ubuntu = Allison({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => (
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
    )}
  >
    <h1 className={clsx("drop-shadow", "text-5xl")}>Phil Ostler</h1>
  </div>
);

export { Header };
