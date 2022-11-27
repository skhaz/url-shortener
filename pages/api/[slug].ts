import type { NextApiRequest, NextApiResponse } from 'next'

// export default function handler(request: NextApiRequest, response: NextApiResponse) {
//  response.status(200).json({ name: 'John Doe' })
//}

export default (request: NextApiRequest, response: NextApiResponse) => response.status(200).json({ name: 'John Doe' })