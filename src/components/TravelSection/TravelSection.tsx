import { Flag, Section } from "@/components";
import { Tooltip } from "flowbite-react";

const TravelSection = () => (
  <Section
    icon={
      <Tooltip content="Travelled">
        <p className="rounded-full bg-white dark:bg-zinc-900 border-white dark:border-zinc-900 border-4 text-3xl text-center h-11 w-11">
          🌍
        </p>
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

export { TravelSection };
