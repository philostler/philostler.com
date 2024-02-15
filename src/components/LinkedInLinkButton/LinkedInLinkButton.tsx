import { LinkButton } from "@/components";
import Image from "next/image";

import styles from "./LinkedInLinkButton.module.css";

const LinkedInLinkButton = () => (
  <LinkButton
    href="https://www.linkedin.com/in/philostler"
    icon={
      <Image
        alt="LinkedIn Logo"
        className={styles.logo}
        height={24}
        priority
        src="/linkedin.svg"
        width={24}
      />
    }
  >
    LinkedIn
  </LinkButton>
);

export { LinkedInLinkButton };
