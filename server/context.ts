import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { prisma } from '~/providers/prisma'

export const createContext = async (opts?: trpcNext.CreateNextContextOptions) => {
  return {
    req: opts?.req,
    prisma,
    entry: prisma.entry,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
