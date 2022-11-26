import { object, string } from 'yup'

export const schema = object({
  slug: string().required(),
})
