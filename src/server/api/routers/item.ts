import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const itemRouter = createTRPCRouter({
  itemList: privateProcedure.query(async ({ ctx }) => {
    const userId = ctx.currentUserId;

    if (!userId) {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }

    return await ctx.db.item.findMany({
      where: {
        userId: userId,
      },
    });
  }),
  create: privateProcedure
  .input(
    z.object({
      name: z.string(),
      brand: z.string().optional(),
      model: z.number().optional(),
      quantity: z.number().optional(),
      weightMetric: z.number().optional(),
      weightImperial: z.number().optional(),
      packs: z.array(z.string()).optional(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const userId = ctx.currentUserId;

    if (!userId) {
      throw new TRPCError({ code: "UNAUTHORIZED"})
    }
    return ctx.db.pack.create({
      data: {
        name: input.name,
        brand: input.brand ?? null,
        model: input.model ?? null,
        quantity: input.quantity ?? null,
        weightMetric: input.weightMetric ?? null,
        weightImperial: input.weightImperial ?? null,
        packs: input.packs ?? null,
        userId: userId
      },
    });
  }),

});
