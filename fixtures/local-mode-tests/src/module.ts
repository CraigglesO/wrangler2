// @ts-expect-error non standard module
import data from "../some-data.bin";
// @ts-expect-error non standard module
import text from "../some-text.txt";

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async fetch(_request: Request, env: any): Promise<Response> {
    return new Response(
      JSON.stringify(
        {
          VAR1: env.VAR1,
          VAR2: env.VAR2,
          VAR3: env.VAR3,
          text,
          data: new TextDecoder().decode(data),
        },
        null,
        2
      )
    );
  },
};
