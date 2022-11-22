import { object, string } from 'yup'

export const schema = object({
  url: string().url().required(),
})
