import { object, string } from 'zod'

export const schema = object({
  slug: string(),
})
