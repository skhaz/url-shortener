import { prisma } from '~/providers/prisma'
import { router, publicProcedure } from '~/server/trpc'

export const entryRouter = router({
  add: publicProcedure.mutation(async ({ input }) => {
    const { url } = input

    const entry = await prisma.entry.create({ url })

    return entry
  }),
})
