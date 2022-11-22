import { hashids } from '~/providers/hashids'

export const decode = (id: string): number | null => {
  try {
    const ids = hashids.decode(id)

    if (!ids.length) {
      return null
    }

    const number = Number(ids[0])

    if (isNaN(number)) {
      return null
    }

    return number
  } catch (error) {
    return null
  }
}
