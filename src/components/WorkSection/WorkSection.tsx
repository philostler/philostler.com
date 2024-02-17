import { Section } from "@/components";
import { Tooltip } from "flowbite-react";

const WorkSection = () => (
  <Section
    icon={
      <Tooltip content="Work">
        <p className="rounded-full bg-white border-white border-4 text-3xl text-center h-12 w-12">
          💪
        </p>
      </Tooltip>
    }
  >
    Engineer • Founder • Duathlete • Aspiring Triathlete
  </Section>
);

export { WorkSection };
