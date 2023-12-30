import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
} from "~/server/api/trpc";

export const packRouter = createTRPCRouter({
  packList: privateProcedure.query(async ({ ctx }) => {
    const userId = ctx.currentUserId;

    if (!userId) {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }

    return await ctx.db.pack.findMany({
      where: {
        userId: userId 
      },
    });
  }),
    // create: privateProcedure
    //   .input(
    //     z.object({
    //       name: z.string(),
    //       date: z.date().optional(),
    //       currentWeightMetric: z.number().optional(),
    //       targetWeightMetric: z.number().optional(),
    //       currentWeightImperial: z.number().optional(),
    //       targetWeightImperial: z.number().optional(),
    //       items: z.array(z.string()).optional(),
    //     }),
    //   )
    //   .mutation(async ({ ctx, input }) => {
    //     const userId = ctx.currentUserId;

    //     if (!userId) {
    //       throw new TRPCError({ code: "UNAUTHORIZED"})
    //     }
    //     return ctx.db.pack.create({
    //       data: {
    //         name: input.name,
    //         date: input.date,
    //         currentWeightMetric: input.currentWeightMetric ?? null,
    //         targetWeightMetric: input.targetWeightMetric ?? null,
    //         currentWeightImperial: input.currentWeightImperial ?? null,
    //         targetWeightImperial: input.targetWeightImperial ?? null,
    //         userId: userId
    //       },
    //     });
    //   }),

  // getLatest: publicProcedure.query(({ ctx }) => {
  // return ctx.db.pack.findFirst({
  //   orderBy: { date: "desc" },
  // });
  //   }),
});
