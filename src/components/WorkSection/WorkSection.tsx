import { Section } from "@/components";
import { Tooltip } from "flowbite-react";

const WorkSection = () => (
  <Section
    icon={
      <Tooltip content="Work">
        <p className="rounded-full bg-white dark:bg-zinc-900 border-white dark:border-zinc-900 border-4 text-3xl text-center h-11 w-11">
          💪
        </p>
      </Tooltip>
    }
  >
    Engineer • Founder • Duathlete • Aspiring Triathlete
  </Section>
);

export { WorkSection };
