import { schema as input } from '~/schemas/form'
import { schema as output } from '~/schemas/output'
import { router, publicProcedure } from '~/server/trpc'
import { hashids } from '~/providers/hashids'

export const entryRouter = router({
  add: publicProcedure
    .input(input)
    .output(output)
    .mutation(async ({ ctx, input }) => {
      const { url } = input

      const { id } = await ctx.prisma.entry.create({ data: { url } })

      return { slug: hashids.encode(id) }
    }),
})
