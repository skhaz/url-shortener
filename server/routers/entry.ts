import { schema } from '~/schemas/form'
import { router, publicProcedure } from '~/server/trpc'
import { hashids } from '~/providers/hashids'

export const entryRouter = router({
  add: publicProcedure
    .input(schema)
    .output()
    .mutation(async ({ ctx, input }) => {
      const { url } = input

      const { id } = await ctx.entry.create({ data: { url } })

      return hashids.encode(id)
    }),
})
