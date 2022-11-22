import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { Context } from '~/server/context'

const t = initTRPC.context<Context>().create({
  transformer: superjson,
})

export const publicProcedure = t.procedure
export const router = t.router
export const middleware = t.middleware
