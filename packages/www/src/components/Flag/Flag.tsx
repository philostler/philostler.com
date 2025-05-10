import { Tooltip } from "flowbite-react";

type Props = {
  country: keyof typeof COUNTRIES;
};

const COUNTRIES = {
  Albania: "🇦🇱",
  Austria: "🇦🇹",
  Belgium: "🇧🇪",
  Cyprus: "🇨🇾",
  England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  France: "🇫🇷",
  Germany: "🇩🇪",
  Iceland: "🇮🇸",
  "Isle of Man": "🇮🇲",
  Italy: "🇮🇹",
  Luxembourg: "🇱🇺",
  Malta: "🇲🇹",
  Montenegro: "🇲🇪",
  Netherlands: "🇳🇱",
  Norway: "🇳🇴",
  Poland: "🇵🇱",
  Portugal: "🇵🇹",
  Romania: "🇷🇴",
  Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Spain: "🇪🇸",
  Sweden: "🇸🇪",
  "United Kingdom": "🇬🇧",
  "United States of America": "🇺🇸",
  Wales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
};

const Flag = ({ country }: Props) => (
  <Tooltip content={country}>
    <span className="text-2xl">{COUNTRIES[country]}</span>
  </Tooltip>
);

export { Flag };
