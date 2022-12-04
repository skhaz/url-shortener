import { TOTAL_KEY } from '~/constants/redis'
import { hashids } from '~/providers/hashids'
import { schema as input } from '~/schemas/form'
import { schema as output } from '~/schemas/output'
import { router, publicProcedure } from '~/server/trpc'

export const entryRouter = router({
  add: publicProcedure
    .input(input)
    .output(output)
    .mutation(async ({ ctx, input }) => {
      const { id } = await ctx.prisma.entry.create({ data: input })

      const slug = hashids.encode(id)

      await ctx.redis.connect()
      await ctx.redis.incr(TOTAL_KEY)

      return { slug }
    }),
})
