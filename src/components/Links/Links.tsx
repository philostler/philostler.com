import Image from "next/image";
import { LinkButton } from "./components";

const Links = () => (
  <>
    <LinkButton href="mailto:contact@philostler.com?subject=Enquiry from philostler.com">
      <Image alt="Email Me" height={24} priority src="/email.png" width={32} />
    </LinkButton>
    <LinkButton href="https://github.com/philostler">
      <Image
        alt="GitHub Logo"
        className="dark:invert"
        height={24}
        priority
        src="/github.png"
        width={59}
      />
    </LinkButton>
    <LinkButton href="https://www.linkedin.com/in/philostler">
      <Image
        alt="LinkedIn Logo"
        height={24}
        priority
        src="/linkedin.png"
        width={98}
      />
    </LinkButton>
    <LinkButton href="https://twitter.com/philostler">
      <Image
        alt="X Logo"
        className="dark:invert"
        height={24}
        priority
        src="/x.png"
        width={23}
      />
    </LinkButton>
  </>
);

export { Links };
