import { entryRouter } from '~/server/routers/entry'
import { router } from '~/server/trpc'

export const appRouter = router({ entry: entryRouter })

export type AppRouter = typeof appRouter
