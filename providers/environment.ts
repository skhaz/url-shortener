if (!process.env.REDIS_URL) {
  throw new Error('REDIS_URL environment variable is not defined.')
}

export const { REDIS_URL } = process.env
