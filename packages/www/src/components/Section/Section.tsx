import clsx from "clsx";
import { Tooltip } from "flowbite-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  name: ReactNode;
};

const Section = ({ children, icon, name }: Props) => (
  <div className={clsx("flex-col", "flex", "items-center")}>
    <Tooltip content={name}>
      <p
        className={clsx(
          "bg-white",
          "border-4",
          "border-white",
          "dark:bg-zinc-900",
          "dark:border-zinc-900",
          "h-11",
          "rounded-full",
          "text-3xl",
          "text-center",
          "w-11",
        )}
      >
        {icon}
      </p>
    </Tooltip>
    <div
      className={clsx(
        "flex-row",
        "flex-wrap",
        "flex",
        "justify-center",
        "text-center",
      )}
    >
      {children}
    </div>
  </div>
);

export { Section };
