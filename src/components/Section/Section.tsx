import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon: ReactNode;
};

const Section = ({ children, icon }: Props) => (
  <div className="flex flex-col items-center">
    {icon}
    <div className="flex flex-row">{children}</div>
  </div>
);

export { Section };
