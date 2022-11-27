import { hashids } from '~/providers/hashids'
import { schema as input } from '~/schemas/form'
import { schema as output } from '~/schemas/output'
import { router, publicProcedure } from '~/server/trpc'

export const entryRouter = router({
  add: publicProcedure
    .input(input)
    .output(output)
    .mutation(async ({ ctx, input }) => {
      // const { url } = input
      console.log('Input', JSON.stringify(input))

      const url = 'example.com'

      const { id } = await ctx.prisma.entry.create({ data: { url } })

      const slug = hashids.encode(id)

      console.log('Slug', slug)

      return { slug }
    }),
})
