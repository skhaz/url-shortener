import type { inferAsyncReturnType } from '@trpc/server'
import { prisma } from '~/providers/prisma'

export const createContext = async () => {
  return {
    prisma,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
