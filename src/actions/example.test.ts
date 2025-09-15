import { createMockActionContext } from "@backstage/plugin-scaffolder-node-test-utils";
import { createEchoAction } from "./example";

describe("createEchoAction", () => {
  it("should call action", async () => {
    const action = createEchoAction();

    await expect(
      action.handler(
        createMockActionContext({
          input: {
            message: "hello, world",
          },
        })
      )
    ).resolves.toBeUndefined();
  });
});
