import { prisma } from '~/providers/prisma'
import { schema } from '~/schemas/form'
import { router, publicProcedure } from '~/server/trpc'

export const entryRouter = router({
  add: publicProcedure.input(schema).mutation(async ({ input }) => {
    const { url } = input

    const entry = await prisma.entry.create({ data: { url } })

    // TODO return hashids

    return entry
  }),
})
