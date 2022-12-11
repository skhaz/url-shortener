if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined.')
}

export const { DATABASE_URL } = process.env

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error('NEXT_PUBLIC_BASE_URL environment variable is not defined.')
}

export const { NEXT_PUBLIC_BASE_URL } = process.env

if (!process.env.REDIS_URL) {
  throw new Error('REDIS_URL environment variable is not defined.')
}

export const { REDIS_URL } = process.env
