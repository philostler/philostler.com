import { Button } from "flowbite-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const LinkButton = ({ children, href }: Props) => (
  <Button color="gray" href={href} target="_blank">
    {children}
  </Button>
);

export { LinkButton };
