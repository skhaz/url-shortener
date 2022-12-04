import { object, string } from 'zod'

export const schema = object({
  url: string().url(),
})
