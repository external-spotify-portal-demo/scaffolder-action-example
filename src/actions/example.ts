import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

/**
 * Creates an `example:echo` Scaffolder action.
 *
 * @public
 */
export function createEchoAction() {
  // For more information on how to define custom actions, see
  //   https://backstage.io/docs/features/software-templates/writing-custom-actions
  return createTemplateAction({
    id: 'example:echo',
    description:
      'Runs an example action which logs a message and waits 1 second',
    schema: {
      input: {
        message: z =>
          z.string({
            description: 'Log this message',
          }),
      },
    },
    async handler(ctx) {
      ctx.logger.info(ctx.input.message);
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  });
}
