import clsx from "clsx";
import Image from "next/image";

const ProfilePhoto = () => (
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
);

export { ProfilePhoto };
