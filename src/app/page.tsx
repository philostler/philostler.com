import Image from "next/image";
import clsx from "clsx";

const page = () => (
  <main className="flex flex-col items-center justify-between min-h-screen m-24">
    <Image
      alt="Phil Ostler's Profile"
      className={clsx(
        "border-4",
        "border-slate-950",
        "dark:border-slate-50",
        "rounded-full",
      )}
      height={200}
      priority
      src="/profile.jpg"
      width={200}
    />
  </main>
);

export default page;
