import type { NextApiRequest, NextApiResponse } from 'next'
import { decode } from '~/helpers/decode'
import { prisma } from '~/providers/prisma'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { slug } = request.query

  const id = decode(slug as string)

  if (!id) {
    response.redirect(301, '/')
    return
  }

  const entry = await prisma.entry.findUnique({
    where: {
      id,
    },
  })

  if (!entry) {
    response.redirect(307, '/404')
    return
  }

  const { url } = entry

  response.redirect(301, url)
}
