import { prisma } from '~/providers/prisma'
import { schema } from '~/schemas/form'
import { router, publicProcedure } from '~/server/trpc'
import { hashids } from '~/providers/hashids'

export const entryRouter = router({
  add: publicProcedure
    .input(schema)
    .output()
    .mutation(async ({ input }) => {
      const { url } = input

      const { id } = await prisma.entry.create({ data: { url } })

      return hashids.encode(id)
    }),
})
