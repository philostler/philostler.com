import { Button } from "flowbite-react";
import { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
  href: string;
  icon: ReactNode;
};

const LinkButton = ({ children, href, icon }: Props) => (
  <Button color="light" href={href} target="_blank">
    {icon}
    <p className="mx-4">{children}</p>
    <Image
      alt="External Link"
      height={16}
      priority
      src="/link.svg"
      width={16}
    />
  </Button>
);

export { LinkButton };
