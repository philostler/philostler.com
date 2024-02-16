import { Flag, Section } from "@/components";
import { Tooltip } from "flowbite-react";
import Image from "next/image";

const TravelledSection = () => (
  <Section
    icon={
      <Tooltip content="Travelled">
        <Image
          alt="Travelled"
          className="rounded-full bg-white border-white border-4"
          height={48}
          priority
          src="/earth.svg"
          width={48}
        />
      </Tooltip>
    }
  >
    <Flag countryCode="BE" />
    <Flag countryCode="CY" />
    <Flag countryCode="FR" />
    <Flag countryCode="DE" />
    <Flag countryCode="IS" />
    <Flag countryCode="IM" />
    <Flag countryCode="IT" />
    <Flag countryCode="LU" />
    <Flag countryCode="MT" />
    <Flag countryCode="NL" />
    <Flag countryCode="PL" />
    <Flag countryCode="PT" />
    <Flag countryCode="RO" />
    <Flag countryCode="ES" />
    <Flag countryCode="SE" />
    <Flag countryCode="GB" />
    <Flag countryCode="US" />
  </Section>
);

export { TravelledSection };
