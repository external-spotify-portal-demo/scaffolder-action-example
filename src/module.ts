import {
  coreServices,
  createBackendModule,
} from "@backstage/backend-plugin-api";
import { scaffolderActionsExtensionPoint } from "@backstage/plugin-scaffolder-node/alpha";
import { createEchoAction } from "./actions/example";
import { fromRoot } from "./config";

/**
 * A backend module that registers the action into the scaffolder
 */
export const scaffolderModule = createBackendModule({
  pluginId: "scaffolder",
  moduleId: "scaffolder-backend-module-echo-action",
  register({ registerInit }) {
    registerInit({
      deps: {
        rootConfig: coreServices.rootConfig,
        scaffolderActions: scaffolderActionsExtensionPoint,
      },
      async init({ rootConfig, scaffolderActions }) {
        const config = fromRoot(rootConfig);
        scaffolderActions.addActions(createEchoAction(config));
      },
    });
  },
});
