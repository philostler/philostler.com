import { Tooltip } from "flowbite-react";

type Props = {
  countryCode: keyof typeof COUNTRIES;
};

const COUNTRIES = {
  BE: { name: "Belgium", flag: "🇧🇪" },
  CY: { name: "Cyprus", flag: "🇨🇾" },
  GB: { name: "United Kingdom", flag: "🇬🇧" },
  FR: { name: "France", flag: "🇫🇷" },
  DE: { name: "Germany", flag: "🇩🇪" },
  IS: { name: "Iceland", flag: "🇮🇸" },
  IM: { name: "Isle of Man", flag: "🇮🇲" },
  IT: { name: "Italy", flag: "🇮🇹" },
  LU: { name: "Luxembourg", flag: "🇱🇺" },
  MT: { name: "Malta", flag: "🇲🇹" },
  NL: { name: "Netherlands", flag: "🇳🇱" },
  PL: { name: "Poland", flag: "🇵🇱" },
  PT: { name: "Portugal", flag: "🇵🇹" },
  RO: { name: "Romania", flag: "🇷🇴" },
  ES: { name: "Spain", flag: "🇪🇸" },
  SE: { name: "Sweden", flag: "🇸🇪" },
  US: { name: "United States of America", flag: "🇺🇸" },
};

const Flag = ({ countryCode }: Props) => (
  <Tooltip content={COUNTRIES[countryCode].name}>
    <span className="text-2xl">{COUNTRIES[countryCode].flag}</span>
  </Tooltip>
);

export { Flag };
