import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const bookRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        isbn: z.string(),
        name: z.string(),
        author: z.string(),
        price: z.number(),
        quantity: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.book.create({
        data: input,
      });
    }),
  edit: publicProcedure
    .input(
      z.object({
        id: z.number(),
        isbn: z.string(),
        name: z.string(),
        author: z.string(),
        price: z.number(),
        quantity: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.book.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        username: z.string(),
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.book.update({
        where: {
          id: input.id,
        },
        data: {
          quantity: {
            decrement: 1,
          },
          userUsername: input.username,
        },
      });
    }),
  removeBook: publicProcedure
    .input(
      z.object({
        username: z.string(),
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.book.update({
        where: {
          id: input.id,
        },
        data: {
          quantity: {
            increment: 1,
          },
          userUsername: "",
        },
      });
    }),
  getAll: publicProcedure
    .input(z.object({ page: z.number() }))
    .query(({ ctx, input }) => {
      console.log(ctx.headers.get("token"));
      return ctx.db.book.findMany({
        take: 15,
        skip: 5 * input.page,
      });
    }),
  getBooksByUser: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(({ ctx, input }) => {
      console.log(ctx.headers.get("token"));
      return ctx.db.book.findMany({
        where: {
          userUsername: input.username,
        },
      });
    }),
  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.book.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.book.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
