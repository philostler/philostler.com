import packageJson from "../../package.json";

import { log } from "./log";

const logVersion = () => {
  log.info(`app: Version ${packageJson.version}`);
};

export { logVersion };
