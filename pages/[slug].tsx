import type { GetServerSideProps, GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import hashids from '~/providers/hashids'
import prisma from '~/providers/prisma'

const decode = (id: string): number | null => {
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

type Params = { slug: string } & ParsedUrlQuery

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as Params

  const id = decode(slug)

  if (!id) {
    return {
      props: {},
    }
  }

  const entry = await prisma.entry.findUnique({
    where: {
      id,
    },
  })

  if (!entry) {
    return {
      props: {},
    }
  }

  const { url } = entry

  return {
    redirect: {
      destination: url,
      permanent: true,
    },
  }
}

export default () => <h1>Test</h1>
