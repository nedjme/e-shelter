import * as trpc from "@/server/trpc";
import AppRouter from "next/dist/client/components/app-router";
import { z } from "zod";

export const appRouter = trpc.router({
  hello: trpc.procedure
    .input(
      z.object({
        name: z.string().optional(),
      })
    )
    .query(({ input }) => {
      const { name } = input;
      return {
        greeting: `Hello ${name ? name : `Bilbo`}`,
      };
    }),
  another_endpoint: trpc.procedure
    .input(
      z.object({
        param: z.string().optional(),
      })
    )
    .query(({ input }) => {
        const { param } = input;
        return {
          boga: `Boga ${param ? param : `Nedjmeddine`}`,
        };
    }),
});

export type AppRouter = typeof appRouter;
