import { z } from "zod";

import { createTRPCRouter } from "~/server/api/trpc";

export const packRouter = createTRPCRouter({
  //   create: publicProcedure
  //     .input(
  //       z.object({
  //         name: z.string().min(1),
  //         brand: z.string(),
  //         model: z.string(),
  //         quantity: z.number(),
  //         weightMetric: z.number().optional(),
  //         weightImperial: z.number().optional(),
  //         pack: z
  //           .Schema({
  //             name: z.string(),
  //             date: z.date(),
  //             currentWeightMetric: z.number(),
  //             currentWeightImperial: z.number(),
  //             targetWeightMetric: z.number(),
  //             targetWeightImerial: z.number(),
  //             items: z.array().optional(),
  //           })
  //           .optional(),
  //       }),
  //     )
  //     .mutation(async ({ ctx, input }) => {
  //       const pack = input.pack || null;
  //       return ctx.db.pack.create({
  //         data: {
  //           name: input.name,
  //           brand: input.brand,
  //           model: input.model,
  //           quantity: input.quantity,
  //           pack: pack,
  //         },
  //       });
  //     }),
  // getLatest: publicProcedure.query(({ ctx }) => {
  // return ctx.db.pack.findFirst({
  //   orderBy: { date: "desc" },
  // });
  //   }),
});
