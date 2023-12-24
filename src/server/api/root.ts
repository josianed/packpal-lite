import { packRouter } from "~/server/api/routers/pack";
import { createTRPCRouter } from "~/server/api/trpc";
import { itemRouter } from "./routers/item";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pack: packRouter,
  item: itemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
