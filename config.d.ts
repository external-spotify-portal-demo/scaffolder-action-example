export interface Config {
  /**
   * Configuration options for the example scaffolder action
   */
  scaffolder?: {
    example?: {
      /**
       * How many times should the message be echoed? (defaults to 1)
       */
      multiplier?: number;
    };
  };
}
