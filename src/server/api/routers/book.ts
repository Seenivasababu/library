import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const bookRouter = createTRPCRouter({
  create: publicProcedure.input(
    z.object({
      isbn: z.string(),
      name: z.string(),
      author: z.string(),
      price: z.number(),
      quantity: z.number(),
    })
  ).mutation(async ({ctx, input})=>{
   console.log(input);
   
   return ctx.db.book.create({
      data : input
   })
  }),
  getAll: publicProcedure.query(({ ctx }) => {
   return ctx.db.book.findMany();
 }),
});
