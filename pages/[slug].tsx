import type { GetServerSideProps, GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import hashids from '~/providers/hashids'
import prisma from '~/providers/prisma'

type Params = { slug: string } & ParsedUrlQuery

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

export default () => null
