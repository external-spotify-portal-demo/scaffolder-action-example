import { RootConfigService } from "@backstage/backend-plugin-api";

const DEFAULT_MULTIPLIER = 1;

export interface ExampleConfig {
  multiplier: number;
}

export function fromRoot(config: RootConfigService): ExampleConfig {
  const rawConfig = config.getOptionalConfig("scaffolder.example");

  return {
    multiplier:
      rawConfig && rawConfig.has("multiplier")
        ? rawConfig.getNumber("multiplier")
        : DEFAULT_MULTIPLIER,
  };
}
