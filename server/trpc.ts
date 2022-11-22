import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import type { Context } from '~/server/context'

const rpc = initTRPC.context<Context>().create({
  transformer: superjson,
})

export const publicProcedure = rpc.procedure
export const router = rpc.router
export const middleware = rpc.middleware
