import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { prisma } from '~/providers/prisma'

export const createContext = async (opts?: CreateNextContextOptions) => {
  return {
    req: opts?.req,
    prisma,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
