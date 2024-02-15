import clsx from "clsx";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "700",
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
    <h1 className={clsx("drop-shadow", "text-xl")}>Phil Ostler</h1>
  </div>
);

export { Header };
