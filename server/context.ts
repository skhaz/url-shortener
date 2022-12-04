import type { inferAsyncReturnType } from '@trpc/server'
import { prisma } from '~/providers/prisma'
import { redis } from '~/providers/redis'

export const createContext = async () => {
  return {
    prisma,
    redis,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
