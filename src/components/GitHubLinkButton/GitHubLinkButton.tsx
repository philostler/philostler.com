import { LinkButton } from "@/components";
import Image from "next/image";

import styles from "./GitHubLinkButton.module.css";

const GitHubLinkButton = () => (
  <LinkButton
    href="https://github.com/philostler"
    icon={
      <Image
        alt="GitHub Logo"
        className={styles.logo}
        height={24}
        priority
        src="/github.svg"
        width={24}
      />
    }
  >
    GitHub
  </LinkButton>
);

export { GitHubLinkButton };
