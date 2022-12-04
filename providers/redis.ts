import Redis from 'ioredis'
import { REDIS_URL } from '~/providers/environment'

export const redis = new Redis(REDIS_URL)
