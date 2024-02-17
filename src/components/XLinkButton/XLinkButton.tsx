import { LinkButton } from "@/components";
import Image from "next/image";

const XLinkButton = () => (
  <LinkButton
    href="https://twitter.com/philostler"
    icon={<Image alt="X Logo" height={24} priority src="/x.svg" width={24} />}
  >
    X
  </LinkButton>
);

export { XLinkButton };
