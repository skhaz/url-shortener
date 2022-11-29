import { initTRPC } from '@trpc/server'
import type { Context } from '~/server/context'

const rpc = initTRPC.context<Context>().create()

export const publicProcedure = rpc.procedure
export const router = rpc.router
export const middleware = rpc.middleware
