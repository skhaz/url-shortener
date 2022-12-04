import Redis from 'ioredis'

const { REDIS_URL } = process.env

if (!REDIS_URL) {
  throw new Error('REDIS_URL is undefined')
}

export const redis = new Redis(REDIS_URL)
